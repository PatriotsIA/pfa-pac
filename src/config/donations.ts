import { envBool } from '../lib/env'

export const donationConfig = {
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

