import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { getSiteUrl } from '../env'
import { siteConfig } from '../../config/site'

type SeoProps = {
  title?: string
  description?: string
  canonicalPath?: string
  ogImageUrl?: string
  noIndex?: boolean
}

export function Seo({
  title,
  description = siteConfig.description,
  canonicalPath,
  ogImageUrl,
  noIndex = false,
}: SeoProps) {
  const location = useLocation()
  const siteUrl = getSiteUrl()

  const fullTitle = title ? `${title} · ${siteConfig.legalName}` : siteConfig.legalName
  const canonical = siteUrl
    ? new URL(canonicalPath ?? location.pathname, `${siteUrl}/`).toString()
    : undefined

  const ogImage = ogImageUrl && siteUrl ? new URL(ogImageUrl, `${siteUrl}/`).toString() : ogImageUrl

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      {noIndex ? <meta name="robots" content="noindex,nofollow" /> : null}

      <meta property="og:site_name" content={siteConfig.legalName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      <meta property="og:type" content="website" />
      {ogImage ? <meta property="og:image" content={ogImage} /> : null}

      <meta name="twitter:card" content={ogImage ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage ? <meta name="twitter:image" content={ogImage} /> : null}
    </Helmet>
  )
}

