import type { EventItem } from './models'
import { getSiteUrl } from './env'

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function toUtcCompact(iso: string) {
  const d = new Date(iso)
  return (
    d.getUTCFullYear() +
    pad(d.getUTCMonth() + 1) +
    pad(d.getUTCDate()) +
    'T' +
    pad(d.getUTCHours()) +
    pad(d.getUTCMinutes()) +
    pad(d.getUTCSeconds()) +
    'Z'
  )
}

function escapeIcsText(value: string) {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/\n/g, '\\n')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;')
}

export function buildGoogleCalendarUrl(event: EventItem) {
  const start = toUtcCompact(event.startsAt)
  const end = toUtcCompact(event.endsAt ?? new Date(new Date(event.startsAt).getTime() + 60 * 60 * 1000).toISOString())
  const details = [event.summary, event.registrationUrl ? `Register: ${event.registrationUrl}` : null]
    .filter(Boolean)
    .join('\n')

  const location = event.isVirtual
    ? event.virtualUrl ?? ''
    : [event.locationName, event.locationAddress, event.locationCity].filter(Boolean).join(', ')

  const u = new URL('https://calendar.google.com/calendar/render')
  u.searchParams.set('action', 'TEMPLATE')
  u.searchParams.set('text', event.title)
  u.searchParams.set('dates', `${start}/${end}`)
  if (details) u.searchParams.set('details', details)
  if (location) u.searchParams.set('location', location)
  return u.toString()
}

export function buildIcs(event: EventItem) {
  const dtStamp = toUtcCompact(new Date().toISOString())
  const dtStart = toUtcCompact(event.startsAt)
  const dtEnd = toUtcCompact(event.endsAt ?? new Date(new Date(event.startsAt).getTime() + 60 * 60 * 1000).toISOString())

  const siteUrl = getSiteUrl()
  const uid = `${event.slug}@${siteUrl ? new URL(siteUrl).host : 'pfa-pac'}`

  const description = [event.summary, '', event.registrationUrl ? `Register: ${event.registrationUrl}` : null]
    .filter((x) => x !== null)
    .join('\n')

  const location = event.isVirtual
    ? event.virtualUrl ?? ''
    : [event.locationName, event.locationAddress, event.locationCity].filter(Boolean).join(', ')

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Patriots For Action PAC//Events//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${escapeIcsText(uid)}`,
    `DTSTAMP:${dtStamp}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:${escapeIcsText(event.title)}`,
    `DESCRIPTION:${escapeIcsText(description)}`,
    location ? `LOCATION:${escapeIcsText(location)}` : undefined,
    'END:VEVENT',
    'END:VCALENDAR',
  ]
    .filter(Boolean)
    .join('\r\n')
}

