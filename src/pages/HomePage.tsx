import { Seo } from '../lib/seo/Seo'
import { organizationJsonLd, websiteJsonLd } from '../lib/seo/structuredData'
import { donationConfig } from '../config/donations'
import { ExternalLinkButton } from '../components/ui/ExternalLinkButton'

export function HomePage() {
  return (
    <>
      <Seo
        description="Patriots for Action PAC organizes and funds a statewide voter-turnout effort in Texas."
        canonicalPath="/"
        keywords={['Patriots for Action PAC', 'Texas PAC', 'voter turnout']}
        jsonLd={[organizationJsonLd(), websiteJsonLd()]}
      />

      <article className="mx-auto max-w-3xl py-16 text-center sm:py-24">
        <h1 className="font-display text-3xl font-bold leading-tight tracking-wide text-patriot-navy sm:text-5xl">
          Patriots for Action: A Texas Political Action Committee
        </h1>

        <section className="mt-12 text-left">
          <h2 className="font-display text-2xl font-bold tracking-wide text-patriot-navy">The Mission:</h2>
          <p className="mt-4 text-base leading-relaxed text-patriot-text sm:text-lg">
            Every election in Texas ultimately comes down to one thing: whether our voters show up. Patriots for
            Action PAC organizes and funds a statewide voter-turnout effort to help make sure they do.
          </p>
        </section>

        <section className="mt-10 text-left">
          <h2 className="font-display text-2xl font-bold tracking-wide text-patriot-navy">The Program:</h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-patriot-text sm:text-lg">
            <p>
              Between now and Election Day, Patriots for Action PAC funds voter-contact efforts across Texas using
              email, text, digital outreach, and other direct communications.
            </p>
            <p>
              Our purpose is to reach Republican and conservative voters with useful information, remind them that an
              election is approaching, help them find voting information and polling locations, encourage them to
              vote, and ultimately get them to show up.
            </p>
            <p>
              This is not a program designed for any one candidate or race. It is a broad turnout effort intended to
              strengthen Republican participation across the ballot; one team effort, top to bottom, helping get our
              voters to the polls for the entire Republican ticket.
            </p>
            <p>
              Patriots for Action PAC determines how the program is conducted, including its messaging, timing,
              targeting, vendors, and deployment.
            </p>
          </div>
        </section>

        <div className="mt-12 flex justify-center">
          <ExternalLinkButton href={donationConfig.anedot.checkoutUrl} variant="red" size="lg">
            Contribute Now
          </ExternalLinkButton>
        </div>

        <section className="mt-16 text-left">
          <h2 className="font-display text-2xl font-bold tracking-wide text-patriot-navy">Plain Dealing</h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-patriot-text sm:text-lg">
            <p>
              A contribution to Patriots for Action PAC buys no advertising, media coverage, interview, endorsement,
              access, or favorable treatment of any kind.
            </p>
            <p>
              Our treasurer is personally affiliated with several media, civic engagement, technology, and
              communications organizations. Those organizations operate separately and according to their own terms.
              Participation in this PAC has no bearing whatsoever on how a candidate or officeholder is treated by
              any of them.
            </p>
            <p>
              The PAC may purchase communications, technology, media, or related services from independent vendors or
              affiliated service providers when appropriate. Those expenditures are documented and reported as
              required, and services are purchased on commercially reasonable terms.
            </p>
          </div>
        </section>
      </article>
    </>
  )
}
