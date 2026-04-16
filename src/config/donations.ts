import { envBool } from '../lib/env'

const defaultAnedotCheckoutUrl = 'https://secure.anedot.com/patriots-for-action/donate'

export const donationConfig = {
  /** Hosted Anedot form (no card data on this site). Override with `VITE_DONATE_ANEDOT_URL`. */
  anedot: {
    checkoutUrl:
      ((import.meta.env.VITE_DONATE_ANEDOT_URL as string | undefined) ?? '').trim() || defaultAnedotCheckoutUrl,
  },
  actBlue: {
    enabled: envBool(import.meta.env.VITE_DONATE_ACTBLUE_ENABLED, false),
    iframeSrc: (import.meta.env.VITE_DONATE_ACTBLUE_IFRAME_SRC as string | undefined) ?? '',
  },
  paypal: {
    enabled: envBool(import.meta.env.VITE_DONATE_PAYPAL_ENABLED, false),
    checkoutUrl: (import.meta.env.VITE_DONATE_PAYPAL_URL as string | undefined) ?? '',
  },
  stripe: {
    enabled: envBool(import.meta.env.VITE_DONATE_STRIPE_ENABLED, false),
    checkoutUrl: (import.meta.env.VITE_DONATE_STRIPE_CHECKOUT_URL as string | undefined) ?? '',
  },
} as const

