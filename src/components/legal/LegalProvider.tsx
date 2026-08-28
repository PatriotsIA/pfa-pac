import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { X } from 'lucide-react'
import { LegalContext, type LegalDoc } from './LegalContext'
import { PrivacyPolicyContent } from './PrivacyPolicyContent'
import { TermsContent } from './TermsContent'

export function LegalProvider({ children }: { children: ReactNode }) {
  const [doc, setDoc] = useState<LegalDoc | null>(null)
  const openLegal = useCallback((next: LegalDoc) => setDoc(next), [])
  const close = useCallback(() => setDoc(null), [])

  useEffect(() => {
    if (!doc) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = original
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [close, doc])

  const value = useMemo(() => ({ openLegal }), [openLegal])
  const title = doc === 'privacy' ? 'Privacy policy' : 'Terms & conditions'

  return (
    <LegalContext.Provider value={value}>
      {children}
      {doc ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <button
            type="button"
            className="absolute inset-0 bg-patriot-navy/45"
            aria-label="Close"
            onClick={close}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-dialog-title"
            className="relative z-10 flex max-h-[min(88vh,840px)] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-patriot-border bg-patriot-bg shadow-card"
          >
            <div className="flex items-center justify-between gap-4 border-b border-patriot-border px-5 py-4">
              <h2 id="legal-dialog-title" className="font-display text-xl font-bold tracking-wide text-patriot-navy">
                {title}
              </h2>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-patriot-border text-patriot-navy hover:bg-patriot-bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patriot-blue/40"
                onClick={close}
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="overflow-y-auto px-5 py-5">
              {doc === 'privacy' ? <PrivacyPolicyContent /> : <TermsContent onOpenPrivacy={() => openLegal('privacy')} />}
            </div>
          </div>
        </div>
      ) : null}
    </LegalContext.Provider>
  )
}
