import fs from 'node:fs/promises'
import path from 'node:path'

const distDir = path.join(process.cwd(), 'dist')
const baseUrlRaw = process.env.VITE_SITE_URL || process.env.SITE_URL || ''
const baseUrl = baseUrlRaw.replace(/\/+$/, '')

if (!baseUrl) {
  // We still generate a sitemap for local preview, but it won't be correct for production.
  // Set VITE_SITE_URL (recommended) in your CI/deploy environment.
  console.warn('[seo] Missing VITE_SITE_URL/SITE_URL; sitemap will use a placeholder URL.')
}

function joinUrl(p) {
  const root = baseUrl || 'http://localhost'
  return new URL(p, root.endsWith('/') ? root : `${root}/`).toString()
}

function todayIsoDate() {
  return new Date().toISOString().slice(0, 10)
}

async function readJson(relPath) {
  const abs = path.join(process.cwd(), relPath)
  const raw = await fs.readFile(abs, 'utf8')
  return JSON.parse(raw)
}

const staticRoutes = [
  '/',
  '/about',
  '/issues',
  '/counties',
  '/news',
  '/operation-show-up',
  '/volunteer',
  '/donate',
  '/contact',
  '/privacy',
  '/terms',
]

const news = await readJson('src/data/news.json').catch(() => [])

const dynamicRoutes = [
  ...(Array.isArray(news) ? news.map((p) => `/news/${p.slug}`) : []),
]

const routes = Array.from(new Set([...staticRoutes, ...dynamicRoutes])).filter(Boolean)

const lastmod = todayIsoDate()
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  routes
    .map((r) => {
      const loc = joinUrl(r)
      return `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`
    })
    .join('\n') +
  `\n</urlset>\n`

const robotsTxt = [
  'User-agent: *',
  'Allow: /',
  baseUrl ? `Sitemap: ${new URL('/sitemap.xml', `${baseUrl}/`).toString()}` : 'Sitemap: /sitemap.xml',
  '',
].join('\n')

await fs.mkdir(distDir, { recursive: true })
await fs.writeFile(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8')
await fs.writeFile(path.join(distDir, 'robots.txt'), robotsTxt, 'utf8')

console.log(`[seo] Wrote sitemap.xml (${routes.length} routes) and robots.txt`)

