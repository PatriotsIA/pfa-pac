const linkClass =
  'font-semibold text-patriot-blue underline decoration-patriot-blue/30 underline-offset-2 hover:decoration-patriot-blue/60'

export function ContactConsentLabel() {
  return (
    <>
      I consent to receive marketing, donation-related, and informational emails, calls and text messages from Patriots
      for Action PAC, including pre-recorded messages and via automated methods. Msg &amp; data rates may apply. Msg
      frequency may vary. Reply “STOP” to opt-out and “HELP” for help. I have read and agree to the{' '}
      <a className={linkClass} href="https://patriotsforaction.org/privacy" target="_blank" rel="noopener noreferrer">
        Privacy Policy
      </a>{' '}
      and{' '}
      <a className={linkClass} href="https://patriotsforaction.org/terms" target="_blank" rel="noopener noreferrer">
        Terms &amp; Conditions
      </a>
      .
    </>
  )
}
