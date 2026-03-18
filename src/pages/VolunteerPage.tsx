import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from 'react-hot-toast'
import { ArrowRight, HeartHandshake, Users } from 'lucide-react'
import { Seo } from '../lib/seo/Seo'
import { PageHeader } from '../components/ui/PageHeader'
import { Card, CardGlow } from '../components/ui/Card'
import { Field } from '../components/ui/Field'
import { Input } from '../components/ui/Input'
import { Textarea } from '../components/ui/Textarea'
import { Button } from '../components/ui/Button'
import { submitNetlifyForm } from '../lib/forms/netlify'
import { LinkButton } from '../components/ui/LinkButton'
import { ExternalLinkButton } from '../components/ui/ExternalLinkButton'
import { siteConfig } from '../config/site'

const interests = [
  { id: 'events', label: 'Events (setup, check-in, hospitality)' },
  { id: 'outreach', label: 'Outreach (calls, text, neighborhood teams)' },
  { id: 'research', label: 'Research & policy support' },
  { id: 'comms', label: 'Communications (writing, design, social)' },
  { id: 'admin', label: 'Operations (scheduling, logistics)' },
] as const

const volunteerSchema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().optional(),
  countyOrRegion: z.string().optional(),
  interests: z.array(z.string()).min(1, 'Please select at least one interest area.'),
  message: z.string().optional(),
  consentToContact: z.boolean().refine((v) => v === true, { message: 'Please confirm consent to be contacted.' }),
  botField: z.string().optional(),
})

type VolunteerValues = z.infer<typeof volunteerSchema>

export function VolunteerPage() {
  const form = useForm<VolunteerValues>({
    resolver: zodResolver(volunteerSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      countyOrRegion: '',
      interests: [],
      message: '',
      consentToContact: false,
      botField: '',
    },
  })

  async function onSubmit(values: VolunteerValues) {
    if (values.botField) return
    await submitNetlifyForm('volunteer', {
      name: values.name,
      email: values.email,
      phone: values.phone ?? '',
      countyOrRegion: values.countyOrRegion ?? '',
      interests: values.interests.join(', '),
      message: values.message ?? '',
      consentToContact: String(values.consentToContact),
    })
  }

  return (
    <>
      <Seo title="Volunteer" />
      <PageHeader
        eyebrow="Volunteer"
        title="Step in where you can"
        subtitle="We’ll match your availability to real needs—so your time turns into outcomes. Pick one or more areas and we’ll follow up."
        actions={
          <>
            <ExternalLinkButton href={siteConfig.links.community} variant="outline">
              Join our community <Users className="h-4 w-4" />
            </ExternalLinkButton>
            <LinkButton to="/donate" variant="red">
              Donate <ArrowRight className="h-4 w-4" />
            </LinkButton>
          </>
        }
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <Card className="lg:order-2">
          <CardGlow />
          <div className="relative">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">CTA ladder</div>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-wide text-patriot-navy">Three easy ways to help</h2>
            <ol className="mt-4 grid gap-3 text-sm text-patriot-text">
              <li className="rounded-xl border border-patriot-border bg-patriot-bg-soft p-4">
                <div className="font-semibold text-patriot-navy">1) Attend an event</div>
                <div className="mt-1 text-patriot-text">
                  Events are temporarily paused on this PAC site. Join the community to see what’s happening.
                </div>
                <div className="mt-3">
                  <ExternalLinkButton href={siteConfig.links.community} variant="primary" size="sm">
                    Join our community <Users className="h-4 w-4" />
                  </ExternalLinkButton>
                </div>
              </li>
              <li className="rounded-xl border border-patriot-border bg-patriot-bg-soft p-4">
                <div className="font-semibold text-patriot-navy">2) Volunteer in a role</div>
                <div className="mt-1 text-patriot-text">Pick a role below. We’ll follow up with next steps.</div>
              </li>
              <li className="rounded-xl border border-patriot-border bg-patriot-bg-soft p-4">
                <div className="font-semibold text-patriot-navy">3) Support with a donation</div>
                <div className="mt-1 text-patriot-text">Fuel events, outreach, and communications.</div>
                <div className="mt-3">
                  <LinkButton to="/donate" variant="red" size="sm">
                    Donate <ArrowRight className="h-4 w-4" />
                  </LinkButton>
                </div>
              </li>
            </ol>
          </div>
        </Card>

        <Card className="lg:order-1">
          <CardGlow />
          <div className="relative">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">
              <HeartHandshake className="h-4 w-4" /> Volunteer form
            </div>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-patriot-text">
              This form uses client-side validation and submits via Netlify Forms by default (with a honeypot).
              Optional server-side spam verification examples (Turnstile) are included in the repo.
            </p>

            <form
              className="mt-6 grid gap-4 md:grid-cols-2"
              onSubmit={form.handleSubmit(async (values) => {
                await toast.promise(onSubmit(values), {
                  loading: 'Submitting…',
                  success: 'Thanks — we’ll be in touch soon.',
                  error: 'Submission failed. Please try again or contact us.',
                })
                form.reset()
              })}
              name="volunteer"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="botField"
            >
              <input type="hidden" name="form-name" value="volunteer" />
              <div className="hidden">
                <label>
                  Don’t fill this out if you’re human: <input {...form.register('botField')} />
                </label>
              </div>

              <Field label="Name" error={form.formState.errors.name?.message}>
                <Input {...form.register('name')} aria-invalid={!!form.formState.errors.name} autoComplete="name" />
              </Field>
              <Field label="Email" error={form.formState.errors.email?.message}>
                <Input
                  {...form.register('email')}
                  aria-invalid={!!form.formState.errors.email}
                  autoComplete="email"
                />
              </Field>
              <Field label="Phone (optional)">
                <Input {...form.register('phone')} autoComplete="tel" />
              </Field>
              <Field label="County/Region (optional)" hint="Free-text (not routed)">
                <Input {...form.register('countyOrRegion')} placeholder="e.g. Travis, Panhandle, North Texas" />
              </Field>

              <div className="md:col-span-2">
                <div className="text-sm font-semibold text-patriot-navy">Interests</div>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {interests.map((i) => (
                    <label
                      key={i.id}
                      className="flex cursor-pointer items-start gap-3 rounded-xl border border-patriot-border bg-patriot-bg px-4 py-3 text-sm text-patriot-text shadow-[0_10px_30px_rgba(27,38,115,0.06)] hover:border-patriot-blue/45"
                    >
                      <input
                        type="checkbox"
                        value={i.id}
                        {...form.register('interests')}
                        className="mt-1 h-4 w-4 accent-patriot-blue"
                      />
                      <span className="font-semibold text-patriot-navy">{i.label}</span>
                    </label>
                  ))}
                </div>
                {form.formState.errors.interests?.message ? (
                  <div className="mt-2 text-xs font-semibold text-patriot-red">
                    {form.formState.errors.interests.message}
                  </div>
                ) : null}
              </div>

              <div className="md:col-span-2">
                <Field label="Message (optional)">
                  <Textarea {...form.register('message')} placeholder="Anything we should know?" />
                </Field>
              </div>

              <div className="md:col-span-2">
                <label className="flex items-start gap-3 rounded-xl border border-patriot-border bg-patriot-bg-soft px-4 py-3 text-sm text-patriot-text">
                  <input type="checkbox" {...form.register('consentToContact')} className="mt-1 h-4 w-4 accent-patriot-blue" />
                  <span>
                    I consent to be contacted about volunteering opportunities.
                    {form.formState.errors.consentToContact?.message ? (
                      <span className="ml-2 text-xs font-semibold text-patriot-red">
                        {form.formState.errors.consentToContact.message}
                      </span>
                    ) : null}
                  </span>
                </label>
              </div>

              <div className="md:col-span-2 flex items-center justify-end">
                <Button type="submit" variant="primary">
                  Submit <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </>
  )
}

