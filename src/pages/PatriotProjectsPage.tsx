import { ExternalLink } from 'lucide-react'
import { Seo } from '../lib/seo/Seo'
import { PageHeader } from '../components/ui/PageHeader'
import { Card, CardGlow } from '../components/ui/Card'
import { ExternalLinkButton } from '../components/ui/ExternalLinkButton'

type ProjectLink = { label: string; href: string }
type Project = { name: string; description: string; links: ProjectLink[] }

const projects: Project[] = [
  {
    name: 'Patriots in Action TX',
    description: 'Texas hub for Patriots in Action.',
    links: [{ label: 'patriotsinactiontx.com', href: 'https://patriotsinactiontx.com/' }],
  },
  {
    name: 'Patriots in Action',
    description: 'National community and broader Patriots in Action presence.',
    links: [{ label: 'patriotsinaction.com', href: 'https://patriotsinaction.com/' }],
  },
  {
    name: 'Patriots for Action PAC (this site)',
    description: 'The PAC site codebase, deployment, and content.',
    links: [{ label: 'patriotsforaction', href: 'https://main.d39ycowgvb2ojq.amplifyapp.com/' }],
  },
  {
    name: 'Ballot Box',
    description: 'Open-source election tooling experiments and prototypes.',
    links: [
      { label: 'GitHub: ballotbox-py', href: 'https://github.com/ErikBurdett/ballotbox-py' },
      { label: 'GitHub: ballotbox-js', href: 'https://github.com/ErikBurdett/ballotbox-js' },
    ],
  },
  {
    name: 'Patriots for Paper',
    description: 'Paper-first workflows and tooling.',
    links: [{ label: 'Patriots For Paper', href: 'https://main.d2pqbeealr8kyx.amplifyapp.com/' }],
  },
  {
    name: 'Bond Assassin',
    description: 'Bond analysis and accountability tooling.',
    links: [{ label: 'Bond Assassins', href: 'https://main.d29xv8yo82m18c.amplifyapp.com/' }],
  },
  {
    name: 'mytexasgop',
    description: 'Project link coming soon.',
    links: [],
  },
]

export function PatriotProjectsPage() {
  return (
    <>
      <Seo title="Patriot Projects" />
      <PageHeader
        eyebrow="Projects"
        title="Patriot Projects"
        subtitle="A quick directory of Patriot Projects—sites and open-source repos supporting local-first civic action."
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.name} className="flex flex-col">
            <CardGlow />
            <div className="relative flex h-full flex-col">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">Project</div>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-wide text-patriot-navy">{project.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-patriot-text">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.links.length ? (
                  project.links.map((link) => (
                    <ExternalLinkButton key={link.href} href={link.href} variant="outline" size="sm">
                      {link.label} <ExternalLink className="h-4 w-4" />
                    </ExternalLinkButton>
                  ))
                ) : (
                  <div className="text-sm font-semibold text-patriot-muted">Link coming soon.</div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  )
}

