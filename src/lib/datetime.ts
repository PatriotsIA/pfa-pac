export function formatDateTime(
  iso: string,
  {
    timeZone,
    dateStyle = 'medium',
    timeStyle = 'short',
  }: { timeZone?: string; dateStyle?: Intl.DateTimeFormatOptions['dateStyle']; timeStyle?: Intl.DateTimeFormatOptions['timeStyle'] } = {},
) {
  const dt = new Date(iso)
  return new Intl.DateTimeFormat(undefined, { dateStyle, timeStyle, timeZone }).format(dt)
}

export function formatEventDateRange(event: { startsAt: string; endsAt?: string; timezone?: string }) {
  const tz = event.timezone
  const start = formatDateTime(event.startsAt, { timeZone: tz })
  if (!event.endsAt) return start
  const end = formatDateTime(event.endsAt, { timeZone: tz })
  return `${start} – ${end}`
}

