import { ArrowRight, ExternalLink, Mail, Users } from 'lucide-react'
import { LinkButton } from '../components/ui/LinkButton'
import { Card, CardGlow } from '../components/ui/Card'
import { Reveal } from '../components/motion/Reveal'
import { Seo } from '../lib/seo/Seo'
import { siteConfig } from '../config/site'
import { ExternalLinkButton } from '../components/ui/ExternalLinkButton'
import { OperationShowUpCover } from '../components/brand/OperationShowUpCover'
import { VoterEducationCallout } from '../components/donations/VoterEducationCallout'
import { organizationJsonLd, websiteJsonLd } from '../lib/seo/structuredData'
import { donationConfig, donationDisclosure, issueProjects } from '../config/donations'

export function HomePage() {
  return (
    <>
      <Seo
        title="Texas Civic Action PAC"
        description="Patriots for Action PAC helps Texans stay informed, organize locally, volunteer, and support values-driven civic action across the state."
        canonicalPath="/"
        keywords={['Patriots for Action PAC', 'Texas PAC', 'Texas civic engagement', 'local action']}
        jsonLd={[organizationJsonLd(), websiteJsonLd()]}
      />

      <div className="relative">
        <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-patriot-blue/10 to-transparent" />

        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="text-xs font-bold uppercase tracking-[0.28em] text-patriot-red">
              Statewide PAC
            </div>
            <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-wide text-patriot-navy sm:text-6xl">
              Patriots for Action PAC
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold leading-snug tracking-wide text-patriot-navy/85 sm:text-base">
              {siteConfig.tagline}
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-patriot-text sm:text-lg">
              Freedom doesn’t run on autopilot. {siteConfig.description}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <LinkButton to="/operation-show-up" variant="outline">
                Operation Show Up <ArrowRight className="h-4 w-4" />
              </LinkButton>
              <LinkButton to="/volunteer" variant="outline">
                Volunteer <ArrowRight className="h-4 w-4" />
              </LinkButton>
            </div>
            <div className="mx-auto mt-4 flex max-w-3xl flex-col items-center gap-4 text-center">
              <ExternalLinkButton href={donationConfig.anedot.checkoutUrl} variant="red">
                Contribute Securely <ArrowRight className="h-4 w-4" />
              </ExternalLinkButton>
              <div className="w-full rounded-2xl border border-patriot-border bg-patriot-bg-soft p-4">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">
                Help Get This Message Out to Texas Voters
              </div>
              <p className="mt-2 text-xs leading-relaxed text-patriot-muted">{donationDisclosure}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-patriot-border bg-patriot-bg p-6 shadow-card">
                <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:justify-center sm:gap-8">
                  <OperationShowUpCover className="h-48 w-auto sm:h-52" />
                  <div className="text-center sm:text-left">
                    <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">Featured book</div>
                    <h2 className="mt-2 font-display text-xl font-bold tracking-wide text-patriot-navy sm:text-2xl">
                      Operation Show Up
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-patriot-text">
                      By Daniel L. Rogers — a handbook for citizenship, local presence, and measured strength.
                    </p>
                    <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
                      <LinkButton to="/operation-show-up" variant="outline" size="sm">
                        Read highlights <ArrowRight className="h-4 w-4" />
                      </LinkButton>
                      <ExternalLinkButton href={siteConfig.links.operationShowUpPatriotMerch} variant="primary" size="sm">
                        Buy on Patriot Merch <ExternalLink className="h-4 w-4" />
                      </ExternalLinkButton>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-patriot-border bg-patriot-bg p-6 shadow-card">
                <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:justify-center sm:gap-8">
                  <img
                    src={siteConfig.brand.coloringBookCoverSrc}
                    alt="Operation Show Up coloring book cover"
                    className="h-48 w-auto rounded-xl border border-patriot-border bg-patriot-bg object-contain shadow-card sm:h-52"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="text-center sm:text-left">
                    <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">Featured book</div>
                    <h2 className="mt-2 font-display text-xl font-bold tracking-wide text-patriot-navy sm:text-2xl">
                      Operation Show Up Coloring Book
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-patriot-text">
                      A family-friendly companion resource for making civic habits memorable and hands-on.
                    </p>
                    <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
                      <ExternalLinkButton href={siteConfig.links.operationShowUpColoringBook} variant="primary" size="sm">
                        Buy on Patriot Merch <ExternalLink className="h-4 w-4" />
                      </ExternalLinkButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <section className="mt-12 rounded-3xl border border-patriot-border bg-patriot-bg p-6 shadow-card sm:p-8">
            <VoterEducationCallout />

            <div className="mt-8 border-t border-patriot-border pt-8">
              <div className="text-xs font-bold uppercase tracking-[0.26em] text-patriot-red">Issue Projects</div>
              <div className="mt-4 grid gap-4 lg:grid-cols-2">
                {issueProjects.map((project) => (
                  <div key={project.title} className="rounded-2xl border border-patriot-border bg-patriot-bg-soft p-5">
                    <h3 className="font-display text-xl font-bold tracking-wide text-patriot-navy">{project.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-patriot-text">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </section>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Reveal>
            <Card>
              <CardGlow />
              <div className="relative">
                <div className="text-xs font-bold uppercase tracking-[0.26em] text-patriot-red">Mission</div>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-wide text-patriot-navy">
                  Practical action, local impact
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-patriot-text">
                  We organize around issues that matter to Texans—bringing neighbors together and
                  turning shared values into measurable outcomes.
                </p>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.05}>
            <Card>
              <CardGlow />
              <div className="relative">
                <div className="text-xs font-bold uppercase tracking-[0.26em] text-patriot-red">Get involved</div>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-wide text-patriot-navy">
                  Volunteer in ways that fit
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-patriot-text">
                  From event help to outreach and research, we&apos;ll match you with a role that respects
                  your time and strengths.
                </p>
                <div className="mt-5">
                  <LinkButton to="/volunteer" variant="outline" size="sm">
                    Volunteer options <ArrowRight className="h-4 w-4" />
                  </LinkButton>
                </div>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card>
              <CardGlow />
              <div className="relative">
                <div className="text-xs font-bold uppercase tracking-[0.26em] text-patriot-red">Stay informed</div>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-wide text-patriot-navy">
                  Updates you can use
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-patriot-text">
                  Get important updates, practical resources, and concrete next steps. No noise—just what you need.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <LinkButton to="/contact" variant="outline" size="sm">
                    Contact <Mail className="h-4 w-4" />
                  </LinkButton>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="mx-auto mt-8 max-w-3xl">
            <Card>
              <CardGlow />
              <div className="relative text-center">
                <div className="text-xs font-bold uppercase tracking-[0.26em] text-patriot-red">
                  Nation Wide County-by-County Platform
                </div>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-wide text-patriot-navy">
                  Patriots in Action
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-patriot-text">
                  Patriots in Action is a separate entity and Nation Wide County-by-County Platform that gives counties
                  and citizens a community for voter resources, county and ultra-local news, candidate information, and
                  local civic connection.
                </p>
                <div className="mt-5">
                  <ExternalLinkButton href={siteConfig.links.texasHub} variant="outline">
                    Visit Patriots in Action <Users className="h-4 w-4" />
                  </ExternalLinkButton>
                </div>
              </div>
            </Card>
          </div>
        </Reveal>
      </div>
    </>
  )
}

