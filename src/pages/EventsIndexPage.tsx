import { useEffect, useMemo, useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { ArrowRight, CalendarPlus, Filter } from 'lucide-react'
import { Seo } from '../lib/seo/Seo'
import { PageHeader } from '../components/ui/PageHeader'
import { Card, CardGlow } from '../components/ui/Card'
import { Field } from '../components/ui/Field'
import { Input } from '../components/ui/Input'
import { Select } from '../components/ui/Select'
import { Textarea } from '../components/ui/Textarea'
import { Button } from '../components/ui/Button'
import { cms } from '../lib/cms'
import type { EventItem } from '../lib/models'
import { formatEventDateRange } from '../lib/datetime'
import { submitNetlifyForm } from '../lib/forms/netlify'

const eventSubmitSchema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Please enter a valid email address.'),
  title: z.string().min(5, 'Please enter an event title.'),
  startsAt: z.string().min(4, 'Please include a start date/time.'),
  location: z.string().optional(),
  details: z.string().min(10, 'Please include a few details.'),
  botField: z.string().optional(),
})

type EventSubmitValues = z.infer<typeof eventSubmitSchema>

export function EventsIndexPage() {
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState('')
  const [location, setLocation] = useState('')
  const [events, setEvents] = useState<EventItem[]>([])

  useEffect(() => {
    cms
      .listEvents({ query, tag, location })
      .then(setEvents)
      .catch(() => setEvents([]))
  }, [query, tag, location])

  const tags = useMemo(() => {
    const map = new Map<string, string>()
    for (const e of events) {
      for (const t of e.tags ?? []) map.set(t.slug, t.label)
    }
    return Array.from(map.entries()).map(([slug, label]) => ({ slug, label }))
  }, [events])

  const featured = events.filter((e) => e.featured)
  const rest = events.filter((e) => !e.featured)

  const form = useForm<EventSubmitValues>({
    resolver: zodResolver(eventSubmitSchema),
    defaultValues: { name: '', email: '', title: '', startsAt: '', location: '', details: '', botField: '' },
  })

  async function onSubmit(values: EventSubmitValues) {
    if (values.botField) return
    await submitNetlifyForm('event-submit', {
      name: values.name,
      email: values.email,
      title: values.title,
      startsAt: values.startsAt,
      location: values.location ?? '',
      details: values.details,
    })
  }

  return (
    <>
      <Seo title="Events" />
      <PageHeader
        eyebrow="Events"
        title="Upcoming events"
        subtitle="Find an event near you—or submit one for review. Use tags and search to quickly narrow options."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <Card className="lg:order-2">
          <CardGlow />
          <div className="relative">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">
              <Filter className="h-4 w-4" /> Filters
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Field label="Search" hint="Title, city, details">
                <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search events" />
              </Field>
              <Field label="Tag">
                <Select value={tag} onChange={(e) => setTag(e.target.value)}>
                  <option value="">All tags</option>
                  {tags.map((t) => (
                    <option key={t.slug} value={t.slug}>
                      {t.label}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field label="Location (optional)" hint="Free-text">
                <Input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Dallas, North Texas"
                />
              </Field>
              <div className="flex items-end">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setQuery('')
                    setTag('')
                    setLocation('')
                  }}
                >
                  Clear filters
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <div className="lg:order-1">
          {featured.length ? (
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">Featured</div>
              <div className="mt-3 grid gap-4">
                {featured.map((e) => (
                  <EventCard key={e.slug} event={e} />
                ))}
              </div>
            </div>
          ) : null}

          <div className={featured.length ? 'mt-10' : ''}>
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">Upcoming</div>
            <div className="mt-3 grid gap-4">
              {rest.length ? rest.map((e) => <EventCard key={e.slug} event={e} />) : <EmptyEvents />}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <Card>
          <CardGlow />
          <div className="relative">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">Submit an event</div>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-wide text-patriot-navy">
              Share a meetup or action
            </h2>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-patriot-text">
              Submissions are reviewed for clarity and compliance before they appear on the site. To reduce spam,
              we support Netlify Forms + honeypot by default, with optional Turnstile or reCAPTCHA paths documented
              in the README.
            </p>

            <form
              className="mt-6 grid gap-4 md:grid-cols-2"
              onSubmit={form.handleSubmit(async (values) => {
                await toast.promise(onSubmit(values), {
                  loading: 'Submitting…',
                  success: 'Thanks — we received your event submission.',
                  error: 'Submission failed. Please try again or contact us.',
                })
                form.reset()
              })}
              name="event-submit"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="botField"
            >
              <input type="hidden" name="form-name" value="event-submit" />
              <div className="hidden">
                <label>
                  Don’t fill this out if you’re human: <input {...form.register('botField')} />
                </label>
              </div>

              <Field label="Your name" error={form.formState.errors.name?.message}>
                <Input
                  {...form.register('name')}
                  aria-invalid={!!form.formState.errors.name}
                  autoComplete="name"
                />
              </Field>
              <Field label="Email" error={form.formState.errors.email?.message}>
                <Input
                  {...form.register('email')}
                  aria-invalid={!!form.formState.errors.email}
                  autoComplete="email"
                />
              </Field>
              <Field label="Event title" error={form.formState.errors.title?.message}>
                <Input {...form.register('title')} aria-invalid={!!form.formState.errors.title} />
              </Field>
              <Field label="Start date/time" hint="Include timezone" error={form.formState.errors.startsAt?.message}>
                <Input
                  {...form.register('startsAt')}
                  aria-invalid={!!form.formState.errors.startsAt}
                  placeholder="e.g. 2026-04-12 6:00pm CT"
                />
              </Field>
              <Field label="Location or virtual link (optional)" hint="Free-text" error={form.formState.errors.location?.message}>
                <Input {...form.register('location')} aria-invalid={!!form.formState.errors.location} />
              </Field>
              <div className="md:col-span-2">
                <Field label="Details" error={form.formState.errors.details?.message}>
                  <Textarea {...form.register('details')} aria-invalid={!!form.formState.errors.details} />
                </Field>
              </div>

              <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-patriot-muted">
                  By submitting, you confirm you have permission to share this information.
                </div>
                <Button type="submit" variant="primary">
                  Submit event <CalendarPlus className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </>
  )
}

function EmptyEvents() {
  return (
    <Card>
      <CardGlow />
      <div className="relative">
        <div className="font-display text-xl font-bold tracking-wide text-patriot-navy">No matching events</div>
        <p className="mt-2 text-sm leading-relaxed text-patriot-text">
          Try clearing filters, or submit an event below.
        </p>
      </div>
    </Card>
  )
}

function EventCard({ event }: { event: EventItem }) {
  const tags = event.tags ?? []
  return (
    <Card className="p-5">
      <CardGlow />
      <div className="relative flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">Event</div>
          <div className="mt-1 font-display text-xl font-bold tracking-wide text-patriot-navy">
            <Link
              className="underline decoration-transparent underline-offset-4 hover:decoration-patriot-blue/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patriot-blue/25 focus-visible:ring-offset-2 focus-visible:ring-offset-patriot-bg"
              to={`/events/${event.slug}`}
            >
              {event.title}
            </Link>
          </div>
          <div className="mt-1 text-sm font-semibold text-patriot-muted">{formatEventDateRange(event)}</div>
          {event.summary ? <p className="mt-2 text-sm leading-relaxed text-patriot-text">{event.summary}</p> : null}
          {tags.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t.slug}
                  className="inline-flex items-center rounded-full border border-patriot-border bg-patriot-bg-soft px-3 py-1 text-xs font-semibold text-patriot-navy"
                >
                  {t.label}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        <div className="shrink-0">
          <Link
            to={`/events/${event.slug}`}
            className="inline-flex items-center gap-2 rounded-lg border border-patriot-border bg-patriot-bg px-3 py-2 text-sm font-semibold text-patriot-navy shadow-[0_10px_30px_rgba(27,38,115,0.08)] hover:border-patriot-blue/55 hover:bg-patriot-bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patriot-blue/25 focus-visible:ring-offset-2 focus-visible:ring-offset-patriot-bg"
          >
            Details <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Card>
  )
}

