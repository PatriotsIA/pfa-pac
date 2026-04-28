import { BookOpen, ExternalLink, Quote, Users } from 'lucide-react'
import { Seo } from '../lib/seo/Seo'
import { PageHeader } from '../components/ui/PageHeader'
import { Card, CardGlow } from '../components/ui/Card'
import { Section } from '../components/ui/Section'
import { ExternalLinkButton } from '../components/ui/ExternalLinkButton'
import { LinkButton } from '../components/ui/LinkButton'
import { siteConfig } from '../config/site'
import { PatriotsInActionLockup } from '../components/brand/PatriotsInAction'
import { OperationShowUpCover } from '../components/brand/OperationShowUpCover'

type BookQuote = {
  text: string
  cite: string
}

const quotes: BookQuote[] = [
  {
    text: 'Freedom is not self-sustaining.',
    cite: 'Preface — The Mission',
  },
  {
    text: 'Self-government is not a static achievement. It is a living discipline.',
    cite: 'Preface — The Mission',
  },
  {
    text: 'Vigilance does not mean constant outrage. It means attention.',
    cite: 'Preface — The Mission',
  },
  {
    text: 'This book is not a call to partisanship. It is a call to citizenship.',
    cite: 'Preface — The Mission',
  },
  {
    text: 'Freedom rarely collapses in a single dramatic moment. It fades quietly.',
    cite: 'Introduction — The Power of Presence',
  },
  {
    text: 'Self-government was never meant to be outsourced.',
    cite: 'Introduction — The Power of Presence',
  },
  {
    text: 'The penalty good men pay for indifference to public affairs is to be ruled by evil men.',
    cite: 'Chapter 4 — The Crisis of Apathy (quoted: Plato)',
  },
  {
    text: 'Power expands most easily where it is least observed.',
    cite: 'Chapter 4 — The Crisis of Apathy',
  },
  {
    text: 'Oversight does not require confrontation. It requires presence.',
    cite: 'Chapter 4 — The Crisis of Apathy',
  },
  {
    text: 'Due process does not protect passive citizens. It protects engaged ones.',
    cite: 'Chapter 5 — The Local Battlefield',
  },
  {
    text: 'Silence does not keep peace. It transfers responsibility.',
    cite: 'Chapter 7 — The Dangers of Silence',
  },
  {
    text: 'Liberty does not survive on outrage alone. It survives on measured strength.',
    cite: 'Chapter 8 — Restoring the American Rhythm',
  },
  {
    text: 'Local control is not symbolic. It is liberty’s frontline.',
    cite: 'Chapter 10 — Power Close to Home',
  },
  {
    text: 'Self-government is not a feeling. It is a practice.',
    cite: 'Chapter 10 — Power Close to Home',
  },
  {
    text: 'Freedom is not a spectator sport.',
    cite: 'Chapter 11 — Operation Show Up Begins With You',
  },
  {
    text: 'The Constitution does not run on autopilot. Neither does self-government.',
    cite: 'Chapter 11 — Operation Show Up Begins With You',
  },
  {
    text: 'Freedom is preserved not by outrage, but by attention.',
    cite: 'Chapter 11 — Operation Show Up Begins With You',
  },
  {
    text: 'Operation Show Up does not begin with a movement. It begins with YOU.',
    cite: 'Chapter 11 — Operation Show Up Begins With You',
  },
] as const

export function OperationShowUpPage() {
  return (
    <>
      <Seo
        title="Operation Show Up"
        description="A citizen’s handbook for rebuilding the habits of self-government: show up locally, watch power, speak calmly, and stay engaged."
        canonicalPath="/operation-show-up"
      />

      <PageHeader
        eyebrow="Featured resource"
        title="Operation Show Up"
        subtitle="A civic handbook by Daniel L. Rogers focused on rebuilding the habits that keep liberty alive: attention, presence, local responsibility, and measured courage."
        actions={
          <>
            <ExternalLinkButton href={siteConfig.links.community} variant="primary">
              Join our community <Users className="h-4 w-4" />
            </ExternalLinkButton>
            <ExternalLinkButton href={siteConfig.links.texasHub} variant="outline">
              County-level involvement <ExternalLink className="h-4 w-4" />
            </ExternalLinkButton>
            <ExternalLinkButton href={siteConfig.links.operationShowUpPatriotMerch} variant="outline">
              Buy on Patriot Merch <ExternalLink className="h-4 w-4" />
            </ExternalLinkButton>
            <LinkButton to="/volunteer" variant="red">
              Volunteer
            </LinkButton>
          </>
        }
      />

      <div className="mx-auto mt-8 flex justify-center px-4">
        <OperationShowUpCover className="max-h-[min(480px,52vh)] w-auto max-w-[min(100%,280px)]" />
      </div>

      <div className="mx-auto mt-8 max-w-4xl">
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-patriot-border bg-patriot-bg/80 p-5 text-center shadow-card">
          <PatriotsInActionLockup className="h-12" alt="Patriots in Action" />
          <div className="text-sm text-patriot-text">
            County-level involvement and local connections live on the Texas hub.
          </div>
          <a
            className="text-sm font-semibold text-patriot-navy underline decoration-patriot-blue/40 underline-offset-4 hover:decoration-patriot-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patriot-blue/25 focus-visible:ring-offset-2 focus-visible:ring-offset-patriot-bg"
            href={siteConfig.links.texasHub}
            target="_blank"
            rel="noopener noreferrer"
          >
            PatriotsInActionTX.com
          </a>
        </div>
      </div>

      <Section title="The spirit of the book" kicker="Why it matters">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card>
            <CardGlow />
            <div className="relative">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">
                <Quote className="h-4 w-4" /> Presence
              </div>
              <p className="mt-3 text-sm leading-relaxed text-patriot-text">
                The book argues that freedom erodes quietly when ordinary people disengage, and that renewal begins
                with showing up—especially when it would be easier not to.
              </p>
            </div>
          </Card>
          <Card>
            <CardGlow />
            <div className="relative">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">
                <Quote className="h-4 w-4" /> Local-first
              </div>
              <p className="mt-3 text-sm leading-relaxed text-patriot-text">
                It emphasizes that most of what shapes daily life happens close to home: school boards, city halls,
                county commissions, and the practical procedures that govern real communities.
              </p>
            </div>
          </Card>
          <Card>
            <CardGlow />
            <div className="relative">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">
                <Quote className="h-4 w-4" /> Measured strength
              </div>
              <p className="mt-3 text-sm leading-relaxed text-patriot-text">
                A consistent theme: calm, factual engagement beats outrage. Ask clear questions, speak respectfully,
                and stay persistent long after the moment passes.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      <Section title="Featured quotes" kicker="From the book">
        <div className="grid gap-4 md:grid-cols-2">
          {quotes.map((q, idx) => (
            <QuoteCard key={idx} quote={q} />
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-patriot-border bg-patriot-bg p-6 shadow-card">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">
            <BookOpen className="h-4 w-4" /> Citation
          </div>
          <div className="mt-3 text-sm leading-relaxed text-patriot-text">
            <div className="font-semibold text-patriot-navy">Operation Show Up</div>
            <div>Daniel L. Rogers</div>
            <div className="text-patriot-muted">ISBN: 979-8-90333-387-5</div>
            <div className="mt-5">
              <ExternalLinkButton href={siteConfig.links.operationShowUpPatriotMerch} variant="primary" size="sm">
                Buy on Patriot Merch <ExternalLink className="h-4 w-4" />
              </ExternalLinkButton>
            </div>
            <div className="mt-3 text-xs text-patriot-muted">
              Quotes shown here are short excerpts for reference and inspiration. Copyright © 2026 Patriots Connect,
              L.L.C. All rights reserved.
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

function QuoteCard({ quote }: { quote: BookQuote }) {
  return (
    <Card className="p-5">
      <CardGlow />
      <div className="relative">
        <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">Quote</div>
        <blockquote className="mt-3 text-sm leading-relaxed text-patriot-text">
          “{quote.text}”
        </blockquote>
        <div className="mt-3 text-xs font-semibold text-patriot-muted">{quote.cite}</div>
      </div>
    </Card>
  )
}

