import { Outlet } from 'react-router-dom'
import { ScrollToTop } from './ScrollToTop'
import { Footer } from './Footer'

export function SiteLayout() {
  return (
    <div className="page-shell flex min-h-dvh flex-col">
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only sr-only-focusable absolute left-3 top-3 z-[80] rounded-lg border border-patriot-border bg-patriot-bg px-3 py-2 text-sm font-semibold text-patriot-navy shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-patriot-blue/30"
      >
        Skip to content
      </a>
      <main
        id="main-content"
        tabIndex={-1}
        className="relative mx-auto w-full flex-1 px-4 focus:outline-none sm:px-6 lg:px-8"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
