import { ArrowRight, ExternalLink } from 'lucide-react'
import { Seo } from '../lib/seo/Seo'
import { PageHeader } from '../components/ui/PageHeader'
import { Card, CardGlow } from '../components/ui/Card'
import { LinkButton } from '../components/ui/LinkButton'
import { VoterEducationCallout } from '../components/donations/VoterEducationCallout'
import {
  donationConfig,
  donationDisclosure,
  issueProjects,
  pacPaidForDisclosure,
} from '../config/donations'

export function DonatePage() {
  const anedotUrl = donationConfig.anedot.checkoutUrl

  return (
    <>
      <Seo
        title="Donate"
        description="Support Patriots for Action PAC's statewide voter education and election outreach work."
        canonicalPath="/donate"
      />
      <PageHeader
        eyebrow="Donate"
        title="Support Texas counties"
        subtitle="Inform, empower, and unite citizens from the Panhandle to the Gulf—so self-government stays strong in every county. We never collect card details here; your gift is completed on our secure hosted checkout."
      />

      <div className="mt-10 grid gap-6">
        <VoterEducationCallout />

        <Card id="donate-now">
          <CardGlow />
          <div className="relative flex flex-col items-center text-center">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">Guarding liberty</div>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-wide text-patriot-navy">
              One movement. Two urgent fights.
            </h2>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-patriot-text">
              Patriots for Action PAC is building a statewide network that strengthens counties across Texas—helping
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
            <div className="mt-6 flex w-full max-w-3xl flex-col items-center gap-4 text-center">
              <a
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-patriot-red px-5 text-sm font-semibold tracking-wide text-patriot-white shadow-glow-red transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patriot-blue/40 focus-visible:ring-offset-2 focus-visible:ring-offset-patriot-bg"
                href={anedotUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contribute Securely <ExternalLink className="h-4 w-4" />
              </a>
              <div className="w-full rounded-2xl border border-patriot-border bg-patriot-bg-soft p-4">
                <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">
                  Help Get This Message Out to Texas Voters
                </div>
                <p className="mt-2 text-xs leading-relaxed text-patriot-muted">{donationDisclosure}</p>
                <p className="mt-2 text-xs leading-relaxed text-patriot-muted">
                  You will leave this site to complete your gift on a secure payment page.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <CardGlow />
          <div className="relative">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">Issue Projects</div>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-wide text-patriot-navy">
              Fund direct voter education
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {issueProjects.map((project) => (
                <div key={project.title} className="rounded-2xl border border-patriot-border bg-patriot-bg-soft p-5">
                  <h3 className="font-display text-xl font-bold tracking-wide text-patriot-navy">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-patriot-text">{project.description}</p>
                </div>
              ))}
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
                href={anedotUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-patriot-blue/35 bg-patriot-bg px-3 text-sm font-semibold tracking-wide text-patriot-navy transition hover:-translate-y-[1px] hover:border-patriot-blue hover:bg-patriot-bg-soft active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patriot-blue/40 focus-visible:ring-offset-2 focus-visible:ring-offset-patriot-bg"
              >
                Contribute Securely <ExternalLink className="h-4 w-4" />
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

        <Card>
          <CardGlow />
          <div className="relative">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">Disclaimer</div>
            <div className="mt-3 text-sm leading-relaxed text-patriot-text">
              {pacPaidForDisclosure}
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

