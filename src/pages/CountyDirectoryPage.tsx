import { ExternalLink } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { Seo } from '../lib/seo/Seo'
import { Card, CardGlow } from '../components/ui/Card'
import { ExternalLinkButton } from '../components/ui/ExternalLinkButton'
import { siteConfig } from '../config/site'

export function CountyDirectoryPage() {
  return (
    <>
      <Seo
        title="Counties"
        description="Find Patriots in Action state and county sites with local calendars, news, voter resources, partners, and contact forms."
        canonicalPath="/counties"
      />
      <PageHeader
        eyebrow="Counties"
        title="Find your county Patriot Network"
        subtitle="County-specific Patriots in Action sites live on the Texas hub, where local communities can share calendars, news, voter resources, partners, and contact information."
      />

      <div className="mt-10">
        <Card>
          <CardGlow />
          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">Texas county hub</div>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-wide text-patriot-navy">
                Continue to Patriots in Action TX
              </h2>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-patriot-text">
                This PAC site links out to the county network instead of hosting county microsites here.
              </p>
            </div>
            <ExternalLinkButton href={siteConfig.links.texasHub} variant="primary">
              Open county hub <ExternalLink className="h-4 w-4" />
            </ExternalLinkButton>
          </div>
        </Card>
      </div>
    </>
  )
}

