import { ExternalLink, ShieldCheck } from 'lucide-react'
import { Seo } from '../lib/seo/Seo'
import { PageHeader } from '../components/ui/PageHeader'
import { Card, CardGlow } from '../components/ui/Card'
import { donationConfig } from '../config/donations'
import { siteConfig } from '../config/site'

export function DonatePage() {
  const anyEnabled = donationConfig.actBlue.enabled || donationConfig.paypal.enabled || donationConfig.stripe.enabled

  return (
    <>
      <Seo title="Donate" />
      <PageHeader
        eyebrow="Donate"
        title="Support the work"
        subtitle="We don’t collect card details on this site. Donations are handled through trusted, hosted payment flows."
      />

      <div className="mt-10 grid gap-6">
        <Card>
          <CardGlow />
          <div className="relative">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">
              <ShieldCheck className="h-4 w-4" /> Compliance checklist (placeholders)
            </div>
            <p className="mt-3 text-sm leading-relaxed text-patriot-text">
              Before enabling donation integrations, confirm legal/compliance copy and donor certifications.
              This section is intentionally explicit to avoid accidental misconfiguration.
            </p>
            <div className="mt-4 grid gap-2 text-sm">
              <label className="flex items-start gap-3 rounded-xl border border-patriot-border bg-patriot-bg-soft px-4 py-3">
                <input type="checkbox" className="mt-1 h-4 w-4 accent-patriot-blue" />
                <span>
                  I am a U.S. citizen or lawfully admitted permanent resident.
                  <span className="ml-2 text-xs text-patriot-muted">
                    (TODO: Replace with legal-approved certification language.)
                  </span>
                </span>
              </label>
              <label className="flex items-start gap-3 rounded-xl border border-patriot-border bg-patriot-bg-soft px-4 py-3">
                <input type="checkbox" className="mt-1 h-4 w-4 accent-patriot-blue" />
                <span>
                  I am donating with my own funds and not reimbursed by another person or entity.
                  <span className="ml-2 text-xs text-patriot-muted">
                    (TODO: Replace with legal-approved certification language.)
                  </span>
                </span>
              </label>
            </div>
          </div>
        </Card>

        {!anyEnabled ? (
          <Card>
            <CardGlow />
            <div className="relative">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">Integrations</div>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-wide text-patriot-navy">
                Donation integrations are currently disabled
              </h2>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-patriot-text">
                Enable one or more donation modes via environment variables. See the README for
                configuration details (ActBlue embed, PayPal hosted link, Stripe Checkout link).
              </p>
            </div>
          </Card>
        ) : null}

        {donationConfig.actBlue.enabled ? (
          <Card>
            <CardGlow />
            <div className="relative">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">ActBlue</div>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-wide text-patriot-navy">
                Donate via ActBlue
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-patriot-text">
                Embedded donation widget. Configure `VITE_DONATE_ACTBLUE_IFRAME_SRC` to point to your hosted form.
              </p>
              <div className="mt-6 overflow-hidden rounded-xl border border-patriot-border bg-patriot-bg">
                {donationConfig.actBlue.iframeSrc ? (
                  <iframe
                    title="ActBlue donation form"
                    src={donationConfig.actBlue.iframeSrc}
                    className="h-[720px] w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="p-6 text-sm text-patriot-muted">
                    ActBlue is enabled, but no iframe source is configured yet.
                  </div>
                )}
              </div>
            </div>
          </Card>
        ) : null}

        {donationConfig.paypal.enabled ? (
          <Card>
            <CardGlow />
            <div className="relative">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">PayPal</div>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-wide text-patriot-navy">
                Donate via PayPal
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-patriot-text">
                Hosted checkout link (no card details collected on this site).
              </p>
              <div className="mt-6">
                {donationConfig.paypal.checkoutUrl ? (
                  <a
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-patriot-blue px-4 text-sm font-semibold tracking-wide text-patriot-white shadow-glow-blue transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patriot-blue/40 focus-visible:ring-offset-2 focus-visible:ring-offset-patriot-bg"
                    href={donationConfig.paypal.checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Continue to PayPal <ExternalLink className="h-4 w-4" />
                  </a>
                ) : (
                  <div className="text-sm text-patriot-muted">PayPal is enabled, but no checkout URL is configured.</div>
                )}
              </div>
            </div>
          </Card>
        ) : null}

        {donationConfig.stripe.enabled ? (
          <Card>
            <CardGlow />
            <div className="relative">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">Stripe</div>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-wide text-patriot-navy">
                Donate via Stripe Checkout
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-patriot-text">
                Hosted Stripe Checkout link. For custom amounts, create the Checkout Session server-side and
                redirect here.
              </p>
              <div className="mt-6">
                {donationConfig.stripe.checkoutUrl ? (
                  <a
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-patriot-red px-4 text-sm font-semibold tracking-wide text-patriot-white shadow-glow-red transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patriot-blue/40 focus-visible:ring-offset-2 focus-visible:ring-offset-patriot-bg"
                    href={donationConfig.stripe.checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Continue to Stripe <ExternalLink className="h-4 w-4" />
                  </a>
                ) : (
                  <div className="text-sm text-patriot-muted">Stripe is enabled, but no Checkout URL is configured.</div>
                )}
              </div>
            </div>
          </Card>
        ) : null}

        <Card>
          <CardGlow />
          <div className="relative">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">Disclaimer</div>
            <div className="mt-3 text-sm leading-relaxed text-patriot-text">
              Paid for by {siteConfig.legalName}. Not authorized by any candidate or candidate&apos;s committee.
              <span className="ml-2 text-xs text-patriot-muted">(TODO: Replace with exact legal text.)</span>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

