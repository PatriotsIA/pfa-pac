import { ArrowRight } from 'lucide-react'
import { Card, CardGlow } from '../ui/Card'
import { ExternalLinkButton } from '../ui/ExternalLinkButton'
import { donationConfig } from '../../config/donations'

export function VoterEducationCallout() {
  return (
    <Card>
      <CardGlow />
      <div className="relative flex flex-col items-center text-center">
        <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">
          Voter education
        </div>
        <h2 className="mt-2 font-display text-2xl font-bold tracking-wide text-patriot-navy">
          Help Texans get the information they need
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-patriot-text">
          Patriots For Action PAC funds, builds, and informs voters by providing voter education and important
          information distribution across Texas.
        </p>
        <div className="mt-6">
          <ExternalLinkButton href={donationConfig.anedot.checkoutUrl} variant="red">
            Help us inform more voters. <ArrowRight className="h-4 w-4" />
          </ExternalLinkButton>
        </div>
      </div>
    </Card>
  )
}
