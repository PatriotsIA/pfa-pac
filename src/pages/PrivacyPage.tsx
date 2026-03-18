import { Seo } from '../lib/seo/Seo'
import { PageHeader } from '../components/ui/PageHeader'
import { Card, CardGlow } from '../components/ui/Card'

export function PrivacyPage() {
  return (
    <>
      <Seo title="Privacy" />
      <PageHeader
        eyebrow="Legal"
        title="Privacy policy"
        subtitle="Placeholder policy structure for counsel review. Replace with finalized language before launch."
      />

      <div className="mt-10 mx-auto max-w-4xl">
        <Card>
          <CardGlow />
          <div className="relative space-y-6">
            <section>
              <h2 className="font-display text-2xl font-bold tracking-wide text-patriot-navy">Overview</h2>
              <p className="mt-2 text-sm leading-relaxed text-patriot-text">
                This policy describes what data we collect, how we use it, and the choices you have.
                (TODO: Replace with final legal language.)
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold tracking-wide text-patriot-navy">Information we collect</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-patriot-text">
                <li>Contact details you submit via forms (name, email, optional phone/region)</li>
                <li>Event submissions you provide</li>
                <li>Limited, privacy-friendly analytics (optional; disabled by default)</li>
              </ul>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold tracking-wide text-patriot-navy">Analytics</h2>
              <p className="mt-2 text-sm leading-relaxed text-patriot-text">
                If enabled, we use a privacy-friendly analytics provider (example: Plausible) configured behind an
                environment flag. (TODO: confirm retention and cookie policy.)
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold tracking-wide text-patriot-navy">Contact</h2>
              <p className="mt-2 text-sm leading-relaxed text-patriot-text">
                For privacy questions, contact us via the Contact page.
              </p>
            </section>
          </div>
        </Card>
      </div>
    </>
  )
}

