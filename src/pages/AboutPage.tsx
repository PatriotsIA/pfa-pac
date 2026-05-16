import { PageHeader } from '../components/ui/PageHeader'
import { Card, CardGlow } from '../components/ui/Card'
import { Section } from '../components/ui/Section'
import { Seo } from '../lib/seo/Seo'
import { LinkButton } from '../components/ui/LinkButton'
import { ExternalLinkButton } from '../components/ui/ExternalLinkButton'
import { siteConfig } from '../config/site'
import { ExternalLink, Users } from 'lucide-react'
import { OperationShowUpCover } from '../components/brand/OperationShowUpCover'
import { donationConfig, donationDisclosure } from '../config/donations'

export function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="Learn how Patriots for Action PAC organizes, informs, and mobilizes Texans around local-first civic responsibility and practical action."
        canonicalPath="/about"
      />
      <PageHeader
        eyebrow="About"
        title="A PAC built on presence"
        subtitle="Inspired by the spirit of Operation Show Up: attention over outrage, local responsibility over armchair commentary, and steady participation that strengthens self-government."
        actions={
          <>
            <ExternalLinkButton href={siteConfig.links.community} variant="outline">
              Patriots in Action Nation Wide County-by-County Platform <Users className="h-4 w-4" />
            </ExternalLinkButton>
            <LinkButton to="/volunteer" variant="outline">
              Volunteer
            </LinkButton>
            <div className="flex w-full max-w-3xl flex-col items-center gap-3 text-center">
              <ExternalLinkButton href={donationConfig.anedot.checkoutUrl} variant="red">
                Contribute Securely
              </ExternalLinkButton>
              <div className="w-full rounded-2xl border border-patriot-border bg-patriot-bg-soft p-4">
                <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">
                  Help Get This Message Out to Texas Voters
                </div>
                <p className="mt-2 text-xs leading-relaxed text-patriot-muted">{donationDisclosure}</p>
              </div>
            </div>
          </>
        }
      />

      <Section title="What we do" kicker="Focus">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardGlow />
            <div className="relative">
              <h3 className="font-display text-xl font-bold tracking-wide text-patriot-navy">Organize</h3>
              <p className="mt-2 text-sm leading-relaxed text-patriot-text">
                We help Texans coordinate around shared values and tangible local objectives—showing up where decisions are made.
              </p>
            </div>
          </Card>
          <Card>
            <CardGlow />
            <div className="relative">
              <h3 className="font-display text-xl font-bold tracking-wide text-patriot-navy">Inform</h3>
              <p className="mt-2 text-sm leading-relaxed text-patriot-text">
                We publish clear, practical updates that turn principles into next steps—calmly, factually, and consistently.
              </p>
            </div>
          </Card>
          <Card>
            <CardGlow />
            <div className="relative">
              <h3 className="font-display text-xl font-bold tracking-wide text-patriot-navy">Mobilize</h3>
              <p className="mt-2 text-sm leading-relaxed text-patriot-text">
                We mobilize volunteers into roles that respect their time and produce measurable outcomes.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      <Section title="Operation Show Up" kicker="Featured resource">
        <Card>
          <CardGlow />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-start">
            <OperationShowUpCover className="mx-auto h-52 w-auto shrink-0 md:mx-0 md:h-60" />
            <div className="min-w-0 flex-1">
              <p className="text-sm leading-relaxed text-patriot-text">
                Operation Show Up is a handbook for rebuilding the habits of self-government—showing up locally, asking
                clear questions, and staying engaged with measured strength.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <LinkButton to="/operation-show-up" variant="outline" size="sm">
                  Read highlights and quotes
                </LinkButton>
                <ExternalLinkButton href={siteConfig.links.operationShowUpPatriotMerch} variant="primary" size="sm">
                  Buy on Patriot Merch <ExternalLink className="h-4 w-4" />
                </ExternalLinkButton>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      <Section title="Operation Show Up Coloring Book" kicker="Featured book">
        <Card>
          <CardGlow />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-start">
            <img
              src={siteConfig.brand.coloringBookCoverSrc}
              alt="Operation Show Up coloring book cover"
              className="mx-auto h-52 w-auto shrink-0 rounded-xl border border-patriot-border bg-patriot-bg object-contain shadow-card md:mx-0 md:h-60"
              loading="lazy"
              decoding="async"
            />
            <div className="min-w-0 flex-1">
              <p className="text-sm leading-relaxed text-patriot-text">
                A companion coloring book for families who want to make the ideas of presence, responsibility, and
                citizenship approachable for younger learners.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <ExternalLinkButton href={siteConfig.links.operationShowUpColoringBook} variant="primary" size="sm">
                  Buy on Patriot Merch <ExternalLink className="h-4 w-4" />
                </ExternalLinkButton>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      <Section title="Where county sites live" kicker="Counties">
        <Card>
          <CardGlow />
          <div className="relative">
            <p className="text-sm leading-relaxed text-patriot-text">
              County-level involvement lives on Patriots in Action, a separate Nation Wide County-by-County Platform
              where local communities can stay connected outside this PAC site.
            </p>
            <div className="mt-5">
              <LinkButton to="/counties" variant="outline" size="sm">
                County directory
              </LinkButton>
            </div>
          </div>
        </Card>
      </Section>
    </>
  )
}

