import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Seo } from '../lib/seo/Seo'
import { cms } from '../lib/cms'
import type { EventItem } from '../lib/models'
import { Card, CardGlow } from '../components/ui/Card'
import { formatEventDateRange } from '../lib/datetime'
import { Markdown } from '../components/content/Markdown'
import { buildGoogleCalendarUrl, buildIcs } from '../lib/calendar'

export function EventDetailPage() {
  const { eventSlug } = useParams()
  const [event, setEvent] = useState<EventItem | null>(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (!eventSlug) return
    cms.getEventBySlug(eventSlug).then((e) => {
      setEvent(e)
      setNotFound(!e)
    })
  }, [eventSlug])

  const googleUrl = useMemo(() => (event ? buildGoogleCalendarUrl(event) : ''), [event])
  const ics = useMemo(() => (event ? buildIcs(event) : ''), [event])
  const icsUrl = useMemo(() => {
    if (!ics) return ''
    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
    return URL.createObjectURL(blob)
  }, [ics])

  useEffect(() => {
    return () => {
      if (icsUrl) URL.revokeObjectURL(icsUrl)
    }
  }, [icsUrl])

  if (notFound) {
    return (
      <div className="mx-auto max-w-3xl">
        <Seo title="Event not found" noIndex />
        <Card>
          <CardGlow />
          <div className="relative">
            <div className="font-display text-2xl font-bold tracking-wide text-patriot-navy">Event not found</div>
            <p className="mt-2 text-sm leading-relaxed text-patriot-text">
              This event may have been removed or the link may be incorrect.
            </p>
            <div className="mt-5">
              <Link
                className="inline-flex items-center gap-2 font-semibold text-patriot-navy underline decoration-patriot-blue/40 underline-offset-4 hover:decoration-patriot-blue"
                to="/events"
              >
                <ArrowLeft className="h-4 w-4" /> Back to events
              </Link>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  if (!event) return null

  return (
    <div className="mx-auto max-w-4xl">
      <Seo title={event.title} description={event.summary} canonicalPath={`/events/${event.slug}`} />

      <div className="mb-6">
        <Link
          className="inline-flex items-center gap-2 text-sm font-semibold text-patriot-navy underline decoration-patriot-blue/40 underline-offset-4 hover:decoration-patriot-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patriot-blue/25 focus-visible:ring-offset-2 focus-visible:ring-offset-patriot-bg"
          to="/events"
        >
          <ArrowLeft className="h-4 w-4" /> Back to events
        </Link>
      </div>

      <Card>
        <CardGlow />
        <div className="relative">
          <div className="text-xs font-bold uppercase tracking-[0.28em] text-patriot-red">Event</div>
          <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-wide text-patriot-navy sm:text-5xl">
            {event.title}
          </h1>
          <div className="mt-3 text-sm font-semibold text-patriot-muted">{formatEventDateRange(event)}</div>

          {event.summary ? <p className="mt-4 text-sm leading-relaxed text-patriot-text">{event.summary}</p> : null}

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-patriot-border bg-patriot-bg-soft p-4">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">Where</div>
              <div className="mt-2 text-sm font-semibold text-patriot-navy">
                {event.isVirtual ? 'Virtual' : event.locationName ?? 'Location TBD'}
              </div>
              <div className="mt-1 text-sm text-patriot-text">
                {event.isVirtual ? (
                  event.virtualUrl ? (
                    <a
                      className="font-semibold text-patriot-navy underline decoration-patriot-blue/40 underline-offset-4 hover:decoration-patriot-blue"
                      href={event.virtualUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join link <ExternalLink className="inline h-4 w-4" />
                    </a>
                  ) : (
                    'Link provided after registration.'
                  )
                ) : (
                  [event.locationAddress, event.locationCity].filter(Boolean).join(', ')
                )}
              </div>
            </div>

            <div className="rounded-xl border border-patriot-border bg-patriot-bg-soft p-4">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">Add to calendar</div>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  className="inline-flex items-center gap-2 rounded-lg border border-patriot-border bg-patriot-bg px-3 py-2 text-sm font-semibold text-patriot-navy hover:bg-patriot-bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patriot-blue/25 focus-visible:ring-offset-2 focus-visible:ring-offset-patriot-bg"
                  href={googleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Calendar <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-lg border border-patriot-border bg-patriot-bg px-3 py-2 text-sm font-semibold text-patriot-navy hover:bg-patriot-bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patriot-blue/25 focus-visible:ring-offset-2 focus-visible:ring-offset-patriot-bg"
                  href={icsUrl}
                  download={`${event.slug}.ics`}
                >
                  Download .ics
                </a>
              </div>
            </div>
          </div>

          {event.registrationUrl ? (
            <div className="mt-6">
              <a
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-patriot-red px-4 text-sm font-semibold tracking-wide text-patriot-white shadow-glow-red transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patriot-blue/40 focus-visible:ring-offset-2 focus-visible:ring-offset-patriot-bg"
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register / RSVP <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ) : null}

          {event.tags?.length ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {event.tags.map((t) => (
                <span
                  key={t.slug}
                  className="inline-flex items-center rounded-full border border-patriot-border bg-patriot-bg-soft px-3 py-1 text-xs font-semibold text-patriot-navy"
                >
                  {t.label}
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-patriot-border to-transparent" />

          <div className="mt-6">
            <Markdown>{event.detailsMarkdown}</Markdown>
          </div>
        </div>
      </Card>
    </div>
  )
}

