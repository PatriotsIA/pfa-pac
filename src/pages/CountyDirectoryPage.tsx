import { ExternalLink, Users } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { Seo } from '../lib/seo/Seo'
import { siteConfig } from '../config/site'
import { ExternalLinkButton } from '../components/ui/ExternalLinkButton'
import { PatriotsInActionLockup } from '../components/brand/PatriotsInAction'

export function CountyDirectoryPage() {
  return (
    <>
      <Seo title="Counties" />
      <PageHeader
        eyebrow="Counties"
        title="Get involved at the county level"
        subtitle="For county-level involvement, local updates, and connections to your area team, use the Patriots in Action Texas hub."
      />

      <div className="mx-auto mt-10 max-w-3xl">
        <div className="rounded-2xl border border-patriot-border bg-patriot-bg p-6 shadow-card">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <PatriotsInActionLockup className="h-12" alt="Patriots in Action" />
            <a
              className="text-sm font-semibold text-patriot-navy underline decoration-patriot-blue/40 underline-offset-4 hover:decoration-patriot-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patriot-blue/25 focus-visible:ring-offset-2 focus-visible:ring-offset-patriot-bg"
              href={siteConfig.links.texasHub}
              target="_blank"
              rel="noopener noreferrer"
            >
              PatriotsInActionTX.com
            </a>
          </div>
          <p className="text-sm leading-relaxed text-patriot-text">
            Patriots in Action Texas is where you can connect with county-level activity, find local groups,
            and take the next step in your area.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-patriot-text">
            Use the Texas hub to find the right county context and ways to participate.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-patriot-text">
            For broader discussions and statewide conversations, you can also join our community space.
          </p>

          <div className="mt-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ExternalLinkButton href={siteConfig.links.texasHub} variant="primary">
                Go to PatriotsInActionTX.com <ExternalLink className="h-4 w-4" />
              </ExternalLinkButton>
              <ExternalLinkButton href={siteConfig.links.community} variant="outline">
                Join our community <Users className="h-4 w-4" />
              </ExternalLinkButton>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

