import fs from 'node:fs/promises'
import path from 'node:path'

const distDir = path.join(process.cwd(), 'dist')
const baseUrlRaw = process.env.VITE_SITE_URL || process.env.SITE_URL || ''
const baseUrl = (baseUrlRaw || 'https://patriotsforaction.org').replace(/\/+$/, '')

function joinUrl(p) {
  return new URL(p, `${baseUrl}/`).toString()
}

function todayIsoDate() {
  return new Date().toISOString().slice(0, 10)
}

// function isoDate(value) {
//   if (!value) return todayIsoDate()
//   const date = new Date(value)
//   if (Number.isNaN(date.getTime())) return todayIsoDate()
//   return date.toISOString().slice(0, 10)
// }

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

// async function readJson(relPath) {
//   const abs = path.join(process.cwd(), relPath)
//   const raw = await fs.readFile(abs, 'utf8')
//   return JSON.parse(raw)
// }

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/issues', priority: '0.8', changefreq: 'monthly' },
  { path: '/counties', priority: '0.7', changefreq: 'monthly' },
  // News pages are temporarily hidden from the frontend.
  // { path: '/news', priority: '0.8', changefreq: 'weekly' },
  { path: '/operation-show-up', priority: '0.8', changefreq: 'monthly' },
  { path: '/projects', priority: '0.6', changefreq: 'monthly' },
  { path: '/volunteer', priority: '0.9', changefreq: 'monthly' },
  { path: '/donate', priority: '0.9', changefreq: 'monthly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/messaging', priority: '0.5', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms', priority: '0.3', changefreq: 'yearly' },
  { path: '/texas', priority: '0.8', changefreq: 'weekly' },
  { path: '/texas/potter', priority: '0.9', changefreq: 'weekly' },
  { path: '/texas/potter/about', priority: '0.7', changefreq: 'monthly' },
  { path: '/texas/potter/elections', priority: '0.8', changefreq: 'weekly' },
  { path: '/texas/potter/news', priority: '0.8', changefreq: 'daily' },
  { path: '/texas/potter/events', priority: '0.8', changefreq: 'daily' },
  { path: '/texas/potter/tv', priority: '0.7', changefreq: 'weekly' },
  { path: '/texas/potter/partners', priority: '0.6', changefreq: 'monthly' },
  { path: '/texas/potter/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/texas/potter/submit-event', priority: '0.6', changefreq: 'monthly' },
]

// News pages are temporarily hidden from the frontend.
// const news = await readJson('src/data/news.json').catch(() => [])

const dynamicRoutes = [
  // ...(Array.isArray(news)
  //   ? news
  //       .filter((p) => p?.slug)
  //       .map((p) => ({
  //         path: `/news/${p.slug}`,
  //         lastmod: isoDate(p.publishedAt),
  //         priority: '0.6',
  //         changefreq: 'monthly',
  //       }))
  //   : []),
]

const routesByPath = new Map()
for (const route of [...staticRoutes, ...dynamicRoutes]) {
  if (route?.path && !routesByPath.has(route.path)) routesByPath.set(route.path, route)
}
const routes = Array.from(routesByPath.values())

const lastmod = todayIsoDate()
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  routes
    .map((r) => {
      const loc = escapeXml(joinUrl(r.path))
      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <lastmod>${escapeXml(r.lastmod ?? lastmod)}</lastmod>`,
        `    <changefreq>${escapeXml(r.changefreq ?? 'monthly')}</changefreq>`,
        `    <priority>${escapeXml(r.priority ?? '0.5')}</priority>`,
        '  </url>',
      ].join('\n')
    })
    .join('\n') +
  `\n</urlset>\n`

const robotsTxt = [
  'User-agent: *',
  'Allow: /',
  `Sitemap: ${new URL('/sitemap.xml', `${baseUrl}/`).toString()}`,
  '',
].join('\n')

await fs.mkdir(distDir, { recursive: true })
await fs.writeFile(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8')
await fs.writeFile(path.join(distDir, 'robots.txt'), robotsTxt, 'utf8')

console.log(`[seo] Wrote sitemap.xml (${routes.length} routes) and robots.txt`)

