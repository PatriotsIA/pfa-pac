import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Seo } from '../lib/seo/Seo'
import { PageHeader } from '../components/ui/PageHeader'
import { Card, CardGlow } from '../components/ui/Card'
import { cms } from '../lib/cms'
import type { NewsPost } from '../lib/models'
import { formatDateTime } from '../lib/datetime'

export function NewsIndexPage() {
  const [posts, setPosts] = useState<NewsPost[]>([])

  useEffect(() => {
    cms.listNews().then(setPosts).catch(() => setPosts([]))
  }, [])

  return (
    <>
      <Seo
        title="News"
        description="Read Patriots For Action PAC updates, announcements, and practical civic action notes for supporters across Texas."
        canonicalPath="/news"
      />
      <PageHeader
        eyebrow="News"
        title="Updates and announcements"
        subtitle="Short, actionable updates—written to be shared. Some posts may link to an original source when syndicated."
      />

      <div className="mt-10 grid gap-4">
        {posts.map((p) => (
          <Card key={p.slug} className="p-5">
            <CardGlow />
            <div className="relative flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <div className="text-xs font-bold uppercase tracking-[0.22em] text-patriot-red">
                  {formatDateTime(p.publishedAt, { dateStyle: 'medium', timeStyle: undefined })}
                </div>
                <div className="mt-1 font-display text-2xl font-bold tracking-wide text-patriot-navy">
                  <Link
                    className="underline decoration-transparent underline-offset-4 hover:decoration-patriot-blue/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patriot-blue/25 focus-visible:ring-offset-2 focus-visible:ring-offset-patriot-bg"
                    to={`/news/${p.slug}`}
                  >
                    {p.title}
                  </Link>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-patriot-text">{p.excerpt}</p>
                {p.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t.slug}
                        className="inline-flex items-center rounded-full border border-patriot-border bg-patriot-bg-soft px-3 py-1 text-xs font-semibold text-patriot-navy"
                      >
                        {t.label}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
              <div className="shrink-0">
                <Link
                  to={`/news/${p.slug}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-patriot-border bg-patriot-bg px-3 py-2 text-sm font-semibold text-patriot-navy shadow-[0_10px_30px_rgba(27,38,115,0.08)] hover:border-patriot-blue/55 hover:bg-patriot-bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patriot-blue/25 focus-visible:ring-offset-2 focus-visible:ring-offset-patriot-bg"
                >
                  Read <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  )
}

