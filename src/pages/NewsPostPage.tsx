import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Seo } from '../lib/seo/Seo'
import { cms } from '../lib/cms'
import type { NewsPost } from '../lib/models'
import { Card, CardGlow } from '../components/ui/Card'
import { formatDateTime } from '../lib/datetime'
import { Markdown } from '../components/content/Markdown'

export function NewsPostPage() {
  const { postSlug } = useParams()
  const [post, setPost] = useState<NewsPost | null>(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (!postSlug) return
    cms.getNewsPostBySlug(postSlug).then((p) => {
      setPost(p)
      setNotFound(!p)
    })
  }, [postSlug])

  if (notFound) {
    return (
      <div className="mx-auto max-w-3xl">
        <Seo title="Post not found" noIndex />
        <Card>
          <CardGlow />
          <div className="relative">
            <div className="font-display text-2xl font-bold tracking-wide text-patriot-navy">Post not found</div>
            <p className="mt-2 text-sm leading-relaxed text-patriot-text">
              This post may have been removed or the link may be incorrect.
            </p>
            <div className="mt-5">
              <Link
                className="inline-flex items-center gap-2 font-semibold text-patriot-navy underline decoration-patriot-blue/40 underline-offset-4 hover:decoration-patriot-blue"
                to="/news"
              >
                <ArrowLeft className="h-4 w-4" /> Back to news
              </Link>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  if (!post) return null

  return (
    <div className="mx-auto max-w-4xl">
      <Seo title={post.title} description={post.excerpt} canonicalPath={`/news/${post.slug}`} />

      <div className="mb-6">
        <Link
          className="inline-flex items-center gap-2 text-sm font-semibold text-patriot-navy underline decoration-patriot-blue/40 underline-offset-4 hover:decoration-patriot-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patriot-blue/25 focus-visible:ring-offset-2 focus-visible:ring-offset-patriot-bg"
          to="/news"
        >
          <ArrowLeft className="h-4 w-4" /> Back to news
        </Link>
      </div>

      <Card>
        <CardGlow />
        <div className="relative">
          <div className="text-xs font-bold uppercase tracking-[0.28em] text-patriot-red">
            {formatDateTime(post.publishedAt, { dateStyle: 'medium', timeStyle: undefined })}
          </div>
          <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-wide text-patriot-navy sm:text-5xl">
            {post.title}
          </h1>
          {post.author ? <div className="mt-3 text-sm font-semibold text-patriot-muted">By {post.author}</div> : null}

          {post.tags?.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span
                  key={t.slug}
                  className="inline-flex items-center rounded-full border border-patriot-border bg-patriot-bg-soft px-3 py-1 text-xs font-semibold text-patriot-navy"
                >
                  {t.label}
                </span>
              ))}
            </div>
          ) : null}

          {post.sourceUrl ? (
            <div className="mt-6 rounded-xl border border-patriot-border bg-patriot-bg-soft p-4 text-sm">
              <div className="font-semibold text-patriot-navy">Originally published at</div>
              <a
                className="mt-1 inline-flex items-center gap-2 font-semibold text-patriot-navy underline decoration-patriot-blue/40 underline-offset-4 hover:decoration-patriot-blue"
                href={post.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {post.sourceUrl} <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ) : null}

          <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-patriot-border to-transparent" />

          <div className="mt-6">
            <Markdown>{post.bodyMarkdown}</Markdown>
          </div>
        </div>
      </Card>
    </div>
  )
}

