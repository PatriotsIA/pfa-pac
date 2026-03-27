import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const distDir = path.join(process.cwd(), 'dist')
const ssrDir = path.join(process.cwd(), 'dist-ssr')

const routes = ['/', '/about', '/issues', '/operation-show-up', '/donate', '/volunteer', '/messaging']

async function findEntryServer() {
  const files = await fs.readdir(ssrDir).catch(() => [])
  const match = files.find((f) => /^entry-server\.(m?js|cjs)$/.test(f)) || files.find((f) => /^entry-server\./.test(f))
  if (!match) throw new Error('Could not find SSR entry in dist-ssr/. Run: vite build --ssr src/entry-server.tsx --outDir dist-ssr')
  return path.join(ssrDir, match)
}

const entry = await findEntryServer()
const mod = await import(pathToFileURL(entry).toString())
if (typeof mod.render !== 'function') throw new Error('SSR entry does not export render(url)')

const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf8')

for (const route of routes) {
  const { appHtml, head } = await mod.render(route)
  const html = template.replace('<!--app-head-->', head ?? '').replace('<!--app-html-->', appHtml ?? '')

  const outDir = route === '/' ? distDir : path.join(distDir, route.replace(/^\//, ''))
  await fs.mkdir(outDir, { recursive: true })
  await fs.writeFile(path.join(outDir, 'index.html'), html, 'utf8')
  console.log(`[prerender] ${route} -> ${path.relative(process.cwd(), path.join(outDir, 'index.html'))}`)
}

