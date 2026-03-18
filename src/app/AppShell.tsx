import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import type { DataRouter } from 'react-router'
import { Analytics } from '../lib/analytics/Analytics'

export function AppShell({ router }: { router: DataRouter }) {
  const isBrowser = typeof window !== 'undefined'

  return (
    <>
      <Analytics />
      <RouterProvider router={router} />
      {isBrowser ? (
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4500,
            style: {
              background: 'var(--color-patriot-bg)',
              color: 'var(--color-patriot-text)',
              border: '1px solid var(--color-patriot-border)',
            },
          }}
        />
      ) : null}
    </>
  )
}

