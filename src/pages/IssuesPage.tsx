import { Users } from 'lucide-react'
import { LinkButton } from '../components/ui/LinkButton'
import { PageHeader } from '../components/ui/PageHeader'
import { Card, CardGlow } from '../components/ui/Card'
import { Section } from '../components/ui/Section'
import { Seo } from '../lib/seo/Seo'
import { ExternalLinkButton } from '../components/ui/ExternalLinkButton'
import { VoterEducationCallout } from '../components/donations/VoterEducationCallout'
import { siteConfig } from '../config/site'
import { issueProjects } from '../config/donations'

const issues = [
  {
    id: 'integrity',
    title: 'Integrity & transparency',
    body: 'Promote clear processes, understandable policy, and accountability at every level of civic life.',
  },
  {
    id: 'safety',
    title: 'Community safety',
    body: 'Support practical, lawful approaches that protect families while respecting individual rights.',
  },
  {
    id: 'economy',
    title: 'Local prosperity',
    body: 'Champion policies that help small businesses and working families thrive in their communities.',
  },
  {
    id: 'parents',
    title: 'Families & parental rights',
    body: 'Stand with parents as primary stakeholders and advocate for clarity and common sense in institutions.',
  },
] as const

export function IssuesPage() {
  return (
    <>
      <Seo
        title="Issues"
        description="Explore Patriots For Action PAC priorities, including integrity, transparency, community safety, local prosperity, and families."
        canonicalPath="/issues"
      />
      <PageHeader
        eyebrow="Issues"
        title="What we stand for"
        subtitle="Values-driven priorities, translated into practical action. This page describes our themes; specific initiatives are shared through our news and events."
        actions={
          <>
            <ExternalLinkButton href={siteConfig.links.community} variant="primary">
              Join our community <Users className="h-4 w-4" />
            </ExternalLinkButton>
            <LinkButton to="/volunteer" variant="outline">
              Volunteer
            </LinkButton>
          </>
        }
      />

      <div className="mt-10">
        <VoterEducationCallout />
      </div>

      <Section title="Issue Projects" kicker="Current campaigns">
        <div className="grid gap-4 md:grid-cols-2">
          {issueProjects.map((project) => (
            <Card key={project.title}>
              <CardGlow />
              <div className="relative">
                <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">Issue Project</div>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-wide text-patriot-navy">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-patriot-text">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Priority areas" kicker="Platform">
        <div className="grid gap-4 md:grid-cols-2">
          {issues.map((i) => (
            <Card key={i.id} className="scroll-mt-28" id={i.id}>
              <CardGlow />
              <div className="relative">
                <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">
                  Priority
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-wide text-patriot-navy">
                  {i.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-patriot-text">{i.body}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}

