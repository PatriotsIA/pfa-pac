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
        description="Find the separate Patriots in Action Nation Wide County-by-County Platform for voter resources, ultra-local news, and candidate information."
        canonicalPath="/counties"
      />
      <PageHeader
        eyebrow="Counties"
        title="Patriots in Action Nation Wide County-by-County Platform"
        subtitle="Patriots in Action is a separate entity from Patriots for Action PAC. It is a Nation Wide County-by-County Platform for counties and citizens looking for voter resources, county and ultra-local news, candidate information, and local civic connection."
      />

      <div className="mt-10">
        <Card>
          <CardGlow />
          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">
                Nation Wide County-by-County Platform
              </div>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-wide text-patriot-navy">
                Continue to Patriots in Action
              </h2>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-patriot-text">
                This PAC site links out to Patriots in Action instead of hosting county microsites here. Patriots in
                Action is separate from the PAC and serves as a Nation Wide County-by-County Platform where patriots can
                find voter resources, county news, ultra-local updates, candidate information, and community tools.
              </p>
            </div>
            <ExternalLinkButton href={siteConfig.links.texasHub} variant="primary">
              Open platform <ExternalLink className="h-4 w-4" />
            </ExternalLinkButton>
          </div>
        </Card>
      </div>
    </>
  )
}

