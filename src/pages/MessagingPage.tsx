import { z } from 'zod'
import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from 'react-hot-toast'
import { MessageSquareText, ShieldCheck } from 'lucide-react'
import { Seo } from '../lib/seo/Seo'
import { PageHeader } from '../components/ui/PageHeader'
import { Card, CardGlow } from '../components/ui/Card'
import { Field } from '../components/ui/Field'
import { Input } from '../components/ui/Input'
import { Textarea } from '../components/ui/Textarea'
import { Select } from '../components/ui/Select'
import { Button } from '../components/ui/Button'
import { sendSiteFormEmail } from '../lib/emailJsForms'
import { siteConfig } from '../config/site'
import { EnSpotSmsOptInLabel } from '../components/compliance/EnSpotSmsOptInLabel'
import { ContactConsentLabel } from '../components/compliance/ContactConsentLabel'

const audienceOptions = [
  { value: 'candidate', label: 'Candidate or campaign' },
  { value: 'official', label: 'Elected official or public office' },
  { value: 'business', label: 'Business or organization' },
] as const

const messagingSchema = z
  .object({
    audienceType: z.enum(['candidate', 'official', 'business']),
    organizationName: z.string().min(2, 'Enter the campaign, office, or business name.'),
    name: z.string().min(2, 'Please enter your name.'),
    email: z.string().email('Please enter a valid email address.'),
    phone: z.string().optional(),
    message: z.string().min(10, 'Please describe what you’re looking for (at least a few words).'),
    consentToContact: z.boolean().refine((v) => v === true, {
      message: 'Please confirm consent to be contacted.',
    }),
    smsConsent: z.boolean().optional(),
    botField: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.phone?.trim() && data.smsConsent !== true) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'When you add a mobile number, please confirm consent to receive text messages.',
        path: ['smsConsent'],
      })
    }
  })

type MessagingValues = z.infer<typeof messagingSchema>

export function MessagingPage() {
  const form = useForm<MessagingValues>({
    resolver: zodResolver(messagingSchema),
    defaultValues: {
      audienceType: 'candidate',
      organizationName: '',
      name: '',
      email: '',
      phone: '',
      message: '',
      consentToContact: false,
      smsConsent: false,
      botField: '',
    },
  })

  const phoneValue = useWatch({ control: form.control, name: 'phone' })

  async function onSubmit(values: MessagingValues) {
    if (values.botField) return
    const audienceLabel =
      audienceOptions.find((o) => o.value === values.audienceType)?.label ?? values.audienceType
    await sendSiteFormEmail({
      formLabel: 'Messaging inquiry',
      emailSubjectTitle: `${audienceLabel} — ${values.organizationName.trim()}`,
      data: {
        audienceType: values.audienceType,
        organizationName: values.organizationName.trim(),
        name: values.name,
        email: values.email,
        message: values.message,
        consentToContact: true,
        agreePrivacyPolicy: true,
        ...(values.phone?.trim() ? { phone: values.phone.trim(), smsConsent: true } : {}),
      },
    })
  }

  return (
    <>
      <Seo
        title="Messaging & compliance"
        description="Review text message compliance language and outreach intake requirements for Patriots for Action PAC communications."
        canonicalPath="/messaging"
      />
      <PageHeader
        eyebrow="Messaging"
        title="Outreach & text compliance"
        subtitle="How we handle SMS and automated messaging, and how to start a conversation about voter outreach for candidates, officials, and businesses."
        actions={
          <a
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-patriot-border bg-patriot-bg px-4 text-sm font-semibold tracking-wide text-patriot-navy shadow-[0_10px_30px_rgba(27,38,115,0.08)] transition hover:border-patriot-blue/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patriot-blue/25"
            href={`mailto:${siteConfig.contact.email}?subject=Messaging%20inquiry`}
          >
            Email us directly <MessageSquareText className="h-4 w-4" />
          </a>
        }
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.05fr]">
        <Card className="lg:order-1">
          <CardGlow />
          <div className="relative space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">
              <ShieldCheck className="h-4 w-4" /> Compliance overview
            </div>
            <p className="text-sm leading-relaxed text-patriot-text">
              The checklist below follows{' '}
              <strong className="font-semibold text-patriot-navy">EnSpot Political’s &quot;Text Message Compliance for
              Websites&quot;</strong> worksheet (10DLC registration and campaign vetting context). It is an aid only—not
              legal advice. Your counsel should approve final language.
            </p>
            <section className="space-y-2">
              <h2 className="font-display text-lg font-bold tracking-wide text-patriot-navy">General website</h2>
              <ul className="list-disc space-y-1 pl-5 text-sm text-patriot-text">
                <li>Site is live, secure (valid SSL), and uses its own domain.</li>
                <li>Site matches the organization or brand being registered.</li>
                <li>No malware.</li>
                <li>
                  Includes <strong className="font-semibold text-patriot-navy">on-site contact</strong> information or a
                  form (not only an external contact link) to reach the organization.
                </li>
              </ul>
            </section>
            <section className="space-y-2">
              <h2 className="font-display text-lg font-bold tracking-wide text-patriot-navy">Privacy policy</h2>
              <p className="text-sm leading-relaxed text-patriot-text">
                A dedicated Privacy Policy page must{' '}
                <strong className="font-semibold text-patriot-navy">explicitly state that you do not share, sell, rent,
                or disclose</strong> personal data with anyone outside your organization’s operations, except as the
                policy describes (e.g. required law) or for processors bound to you—see our policy for full wording.
              </p>
            </section>
            <section className="space-y-2">
              <h2 className="font-display text-lg font-bold tracking-wide text-patriot-navy">Opt-in forms &amp; SMS</h2>
              <p className="text-sm leading-relaxed text-patriot-text">
                You should offer at least one data collection or opt-in path. For any form that collects{' '}
                <strong className="font-semibold text-patriot-navy">phone numbers</strong>, EnSpot requires a{' '}
                <strong className="font-semibold text-patriot-navy">checkbox above the submit button</strong> that
                includes: message &amp; data rate disclosures, frequency, HELP and STOP instructions, and{' '}
                <strong className="font-semibold text-patriot-navy">linked</strong> Privacy Policy and Terms &amp;
                Conditions. We use their recommended pattern on this site when mobile numbers are collected.
              </p>
            </section>
          </div>
        </Card>

        <Card className="lg:order-2">
          <CardGlow />
          <div className="relative">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">Start a conversation</div>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-wide text-patriot-navy">
              Messaging for candidates, officials &amp; businesses
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-patriot-text">
              Tell us who you are and what you need—voter contact, event promotion, fundraising texts, or vendor
              introductions. Submissions are emailed to our team the same way as other site forms.
            </p>

            <form
              className="mt-6 grid gap-4 md:grid-cols-2"
              onSubmit={form.handleSubmit(async (values) => {
                await toast.promise(onSubmit(values), {
                  loading: 'Sending…',
                  success: 'Thanks — we received your inquiry and will follow up by email.',
                  error: 'Send failed. Please try again or email us directly.',
                })
                form.reset({
                  audienceType: 'candidate',
                  organizationName: '',
                  name: '',
                  email: '',
                  phone: '',
                  message: '',
                  consentToContact: false,
                  smsConsent: false,
                  botField: '',
                })
              })}
              name="messaging-inquiry"
            >
              <div className="hidden">
                <label>
                  Don’t fill this out if you’re human: <input {...form.register('botField')} />
                </label>
              </div>

              <div className="md:col-span-2">
                <Field label="I am reaching out as" error={form.formState.errors.audienceType?.message}>
                  <Select {...form.register('audienceType')} aria-invalid={!!form.formState.errors.audienceType}>
                    {audienceOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </Select>
                </Field>
              </div>

              <div className="md:col-span-2">
                <Field
                  label="Campaign, office, or business name"
                  error={form.formState.errors.organizationName?.message}
                >
                  <Input
                    {...form.register('organizationName')}
                    aria-invalid={!!form.formState.errors.organizationName}
                    autoComplete="organization"
                  />
                </Field>
              </div>

              <Field label="Your name" error={form.formState.errors.name?.message}>
                <Input {...form.register('name')} aria-invalid={!!form.formState.errors.name} autoComplete="name" />
              </Field>
              <Field label="Email" error={form.formState.errors.email?.message}>
                <Input
                  {...form.register('email')}
                  aria-invalid={!!form.formState.errors.email}
                  autoComplete="email"
                />
              </Field>

              <div className="md:col-span-2">
                <Field label="Mobile phone (optional)" hint="Required EnSpot-style consent checkbox below if provided.">
                  <Input {...form.register('phone')} autoComplete="tel" />
                </Field>
              </div>

              <div className="md:col-span-2">
                <Field label="What do you need?" error={form.formState.errors.message?.message}>
                  <Textarea {...form.register('message')} aria-invalid={!!form.formState.errors.message} />
                </Field>
              </div>

              <div className="md:col-span-2">
                <label className="flex items-start gap-3 rounded-xl border border-patriot-border bg-patriot-bg-soft px-4 py-3 text-sm text-patriot-text">
                  <input
                    type="checkbox"
                    {...form.register('consentToContact')}
                    className="mt-1 h-4 w-4 accent-patriot-blue"
                  />
                  <span>
                    <ContactConsentLabel purpose="my messaging inquiry" />
                    {form.formState.errors.consentToContact?.message ? (
                      <span className="text-xs font-semibold text-patriot-red">
                        {' '}
                        {form.formState.errors.consentToContact.message}
                      </span>
                    ) : null}
                  </span>
                </label>
              </div>

              {phoneValue?.trim() ? (
                <div className="md:col-span-2">
                  <label className="flex items-start gap-3 rounded-xl border border-patriot-border bg-patriot-bg-soft px-4 py-3 text-sm text-patriot-text">
                    <input
                      type="checkbox"
                      {...form.register('smsConsent')}
                      className="mt-1 h-4 w-4 accent-patriot-blue"
                    />
                    <span>
                      <EnSpotSmsOptInLabel
                        organizationName={siteConfig.legalName}
                        purposePhrase="informational and donation-related"
                      />
                      {form.formState.errors.smsConsent?.message ? (
                        <span className="mt-1 block text-xs font-semibold text-patriot-red">
                          {form.formState.errors.smsConsent.message}
                        </span>
                      ) : null}
                    </span>
                  </label>
                </div>
              ) : null}

              <div className="md:col-span-2 flex justify-end">
                <Button type="submit" variant="primary">
                  Submit inquiry
                </Button>
              </div>
            </form>
          </div>
        </Card>
      </div>

    </>
  )
}
