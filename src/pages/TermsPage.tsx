import { Seo } from '../lib/seo/Seo'
import { PageHeader } from '../components/ui/PageHeader'
import { Card, CardGlow } from '../components/ui/Card'

export function TermsPage() {
  return (
    <>
      <Seo title="Terms" />
      <PageHeader
        eyebrow="Legal"
        title="Terms of use"
        subtitle="Placeholder terms structure for counsel review. Replace with finalized language before launch."
      />

      <div className="mt-10 mx-auto max-w-4xl">
        <Card>
          <CardGlow />
          <div className="relative space-y-6">
            <section>
              <h2 className="font-display text-2xl font-bold tracking-wide text-patriot-navy">Acceptance</h2>
              <p className="mt-2 text-sm leading-relaxed text-patriot-text">
                By using this site, you agree to these terms. (TODO: Replace with final legal language.)
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold tracking-wide text-patriot-navy">Donations</h2>
              <p className="mt-2 text-sm leading-relaxed text-patriot-text">
                Donations are processed by third-party providers (ActBlue, PayPal, Stripe). We do not collect raw
                card details on this site. (TODO: confirm refunds and chargeback language.)
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold tracking-wide text-patriot-navy">User submissions</h2>
              <p className="mt-2 text-sm leading-relaxed text-patriot-text">
                Event submissions and messages may be edited for clarity before publication. Do not submit
                confidential information. (TODO: add moderation and takedown language.)
              </p>
            </section>
          </div>
        </Card>
      </div>
    </>
  )
}

