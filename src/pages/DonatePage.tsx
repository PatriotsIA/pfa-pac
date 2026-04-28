import { ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react'
import { Seo } from '../lib/seo/Seo'
import { PageHeader } from '../components/ui/PageHeader'
import { Card, CardGlow } from '../components/ui/Card'
import { LinkButton } from '../components/ui/LinkButton'
import { donationConfig } from '../config/donations'
import { siteConfig } from '../config/site'

export function DonatePage() {
  const anyEnabled = donationConfig.actBlue.enabled || donationConfig.paypal.enabled || donationConfig.stripe.enabled
  const anedotUrl = donationConfig.anedot.checkoutUrl

  return (
    <>
      <Seo
        title="Donate"
        description="Support Patriots For Action PAC's statewide work to inform, organize, and mobilize Texans around local responsibility and practical civic action."
        canonicalPath="/donate"
      />
      <PageHeader
        eyebrow="Donate"
        title="Support Texas counties"
        subtitle="Inform, empower, and unite citizens from the Panhandle to the Gulf—so self-government stays strong in every county. We never collect card details here; your gift is completed on our secure hosted checkout."
      />

      <div className="mt-10 grid gap-6">
        <Card id="donate-now">
          <CardGlow />
          <div className="relative flex flex-col items-center text-center">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">Guarding liberty</div>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-wide text-patriot-navy">
              One movement. Two urgent fights.
            </h2>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-patriot-text">
              Patriots For Action PAC is building a statewide network that strengthens counties across Texas—helping
              neighbors get informed, stay engaged, and take responsibility where liberty actually lives: at home, in
              precincts, and in local communities. Your donation fuels that work statewide, not in just one region.
            </p>
            <ul className="mt-4 w-full max-w-prose space-y-2 text-left text-sm leading-relaxed text-patriot-text">
              <li>
                <span className="font-semibold text-patriot-navy">Restore transparent paper elections.</span> We support
                efforts that make elections easier to verify and harder to manipulate—so Texans can trust the process
                and hold leaders accountable.
              </li>
              <li>
                <span className="font-semibold text-patriot-navy">Eliminate property taxes.</span> We back advocacy and
                organizing that pushes back against a system that treats your home like a rental from the government—
                and fights for lasting tax relief Texans can feel.
              </li>
            </ul>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-patriot-text">
              When you give, you help put resources behind education, engagement, and action in counties throughout
              Texas—turning shared values into practical results.
            </p>
            <div className="mt-6 flex flex-col items-center">
              <a
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-patriot-red px-5 text-sm font-semibold tracking-wide text-patriot-white shadow-glow-red transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patriot-blue/40 focus-visible:ring-offset-2 focus-visible:ring-offset-patriot-bg"
                href={anedotUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate now <ExternalLink className="h-4 w-4" />
              </a>
              <p className="mt-3 max-w-md text-xs leading-relaxed text-patriot-muted">
                You will leave this site to complete your gift on a secure payment page.
              </p>
            </div>

            <div className="mt-10 w-full max-w-xl border-t border-patriot-border pt-10">
              <p className="text-sm leading-relaxed text-patriot-text">
                To find out how to get involved and support your local community visit patriotsinactiontx.com or join
                your local community.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <a
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-patriot-blue/35 bg-patriot-bg px-4 text-sm font-semibold tracking-wide text-patriot-navy transition hover:-translate-y-[1px] hover:border-patriot-blue hover:bg-patriot-bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patriot-blue/40 focus-visible:ring-offset-2 focus-visible:ring-offset-patriot-bg"
                  href={siteConfig.links.texasHub}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  patriotsinactiontx.com <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-patriot-blue/35 bg-patriot-bg px-4 text-sm font-semibold tracking-wide text-patriot-navy transition hover:-translate-y-[1px] hover:border-patriot-blue hover:bg-patriot-bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patriot-blue/40 focus-visible:ring-offset-2 focus-visible:ring-offset-patriot-bg"
                  href={siteConfig.links.community}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join your local community <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <CardGlow />
          <div className="relative">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">Donating</div>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-wide text-patriot-navy">Time or Treasure</h2>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-patriot-text">
              The fastest way to move the needle is to match the right resource to the right need. Some supporters
              give time (volunteer roles). Others give treasure (financial support). Both matter.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <LinkButton to="/volunteer" variant="outline" size="sm">
                Give time <ArrowRight className="h-4 w-4" />
              </LinkButton>
              <a
                href="#donate-now"
                className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-patriot-blue/35 bg-patriot-bg px-3 text-sm font-semibold tracking-wide text-patriot-navy transition hover:-translate-y-[1px] hover:border-patriot-blue hover:bg-patriot-bg-soft active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patriot-blue/40 focus-visible:ring-offset-2 focus-visible:ring-offset-patriot-bg"
              >
                Give treasure <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-patriot-border bg-patriot-bg-soft p-5">
                <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">How we spend</div>
                <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-patriot-text">
                  <li>County-level outreach, events, and organizing support across Texas.</li>
                  <li>Voter education on election integrity and transparent, paper-based processes.</li>
                  <li>Communications and materials that advance property-tax relief and fiscal accountability.</li>
                  <li>Tools and infrastructure to coordinate volunteers, updates, and statewide campaigns.</li>
                  <li>Compliance and reporting required to operate a PAC responsibly.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-patriot-border bg-patriot-bg-soft p-5">
                <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">Where money goes</div>
                <p className="mt-3 text-sm leading-relaxed text-patriot-text">
                  We prioritize mission-aligned work in Texas counties first. When overhead is necessary, it supports
                  dependable operations: accurate records, deadlines met, and every effort kept legally sound—so more
                  of your gift reaches real-world impact.
                </p>
              </div>

              <div className="rounded-2xl border border-patriot-border bg-patriot-bg-soft p-5">
                <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">
                  Maximize your time vs treasure
                </div>
                <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-patriot-text">
                  <li>
                    <span className="font-semibold text-patriot-navy">Have hours?</span> Volunteer for outreach, event
                    support, research, or local coordination.
                  </li>
                  <li>
                    <span className="font-semibold text-patriot-navy">Have expertise?</span> Offer specific skills
                    (writing, design, data, logistics, legal/compliance support).
                  </li>
                  <li>
                    <span className="font-semibold text-patriot-navy">Have limited time?</span> A recurring donation
                    can stabilize planning and reduce last-minute scrambles.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-patriot-border bg-patriot-bg-soft p-5">
                <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">Impact</div>
                <p className="mt-3 text-sm leading-relaxed text-patriot-text">
                  Your support helps turn civic conviction into steady action: stronger county networks, clearer
                  messaging on liberty and accountability, and Texans equipped to show up where it counts.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card id="donation-options">
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

