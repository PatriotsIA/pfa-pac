import { ArrowRight, ExternalLink } from 'lucide-react'
import { Seo } from '../lib/seo/Seo'
import { PageHeader } from '../components/ui/PageHeader'
import { Card, CardGlow } from '../components/ui/Card'
import { ExternalLinkButton } from '../components/ui/ExternalLinkButton'
import { LinkButton } from '../components/ui/LinkButton'
import { VoterEducationCallout } from '../components/donations/VoterEducationCallout'
import { siteConfig } from '../config/site'
import { operationShowUpCoverAlt } from '../components/brand/OperationShowUpCover'
import { issueProjects } from '../config/donations'

type ProjectLink = { label: string; href: string }
type ProjectInternalLink = { label: string; to: string }
type Project = {
  name: string
  description: string
  links: ProjectLink[]
  coverSrc?: string
  coverAlt?: string
  internalLinks?: ProjectInternalLink[]
}

const projects: Project[] = [
  {
    name: 'Operation Show Up',
    description:
      'A civic handbook by Daniel L. Rogers on rebuilding the habits of self-government—local presence, clear questions, and steady engagement.',
    coverSrc: siteConfig.brand.operationShowUpCoverSrc,
    coverAlt: operationShowUpCoverAlt,
    internalLinks: [{ label: 'Highlights & quotes', to: '/operation-show-up' }],
    links: [{ label: 'Buy on Patriot Merch', href: siteConfig.links.operationShowUpPatriotMerch }],
  },
  {
    name: 'Operation Show Up Coloring Book',
    description:
      'A family-friendly companion resource that helps children and families connect civic habits with memorable, hands-on activities.',
    coverSrc: siteConfig.brand.coloringBookCoverSrc,
    coverAlt: 'Operation Show Up coloring book cover',
    links: [{ label: 'Buy on Patriot Merch', href: siteConfig.links.operationShowUpColoringBook }],
  },
]

export function PatriotProjectsPage() {
  return (
    <>
      <Seo
        title="Patriot Projects"
        description="Browse Patriot Projects, partner sites, and open-source civic tooling connected to local-first action."
        canonicalPath="/projects"
      />
      <PageHeader
        eyebrow="Projects"
        title="Patriot Projects"
        subtitle="A quick directory of Patriot Projects—sites and open-source repos supporting local-first civic action."
      />

      <div className="mt-10 grid gap-6">
        <VoterEducationCallout />

        <Card>
          <CardGlow />
          <div className="relative">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">Issue Projects</div>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-wide text-patriot-navy">
              Voter education priorities
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

      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.name} className="flex flex-col">
            <CardGlow />
            <div className="relative flex h-full flex-col">
              {project.coverSrc ? (
                <img
                  src={project.coverSrc}
                  alt={project.coverAlt ?? ''}
                  className="mb-4 w-full max-h-72 rounded-lg border border-patriot-border bg-patriot-bg object-contain object-center"
                  loading="lazy"
                  decoding="async"
                />
              ) : null}
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">Project</div>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-wide text-patriot-navy">{project.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-patriot-text">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.internalLinks?.map((link) => (
                  <LinkButton key={link.to} to={link.to} variant="primary" size="sm">
                    {link.label} <ArrowRight className="h-4 w-4" />
                  </LinkButton>
                ))}
                {project.links.length ? (
                  project.links.map((link) => (
                    <ExternalLinkButton key={link.href} href={link.href} variant="outline" size="sm">
                      {link.label} <ExternalLink className="h-4 w-4" />
                    </ExternalLinkButton>
                  ))
                ) : null}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  )
}

