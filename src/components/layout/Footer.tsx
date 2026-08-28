import { useLegal } from '../legal/LegalContext'
import { pacPaidForDisclosure } from '../../config/donations'

export function Footer() {
  const { openLegal } = useLegal()

  return (
    <footer className="border-t border-patriot-border bg-patriot-bg">
      <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6">
        <p className="text-sm leading-relaxed text-patriot-muted">{pacPaidForDisclosure}</p>
        <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold text-patriot-navy">
          <button
            type="button"
            className="underline decoration-patriot-blue/40 underline-offset-4 hover:decoration-patriot-navy"
            onClick={() => openLegal('privacy')}
          >
            Privacy Policy
          </button>
          <button
            type="button"
            className="underline decoration-patriot-blue/40 underline-offset-4 hover:decoration-patriot-navy"
            onClick={() => openLegal('terms')}
          >
            Terms &amp; Conditions
          </button>
        </div>
      </div>
    </footer>
  )
}
