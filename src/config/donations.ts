import { envBool } from '../lib/env'

const defaultAnedotCheckoutUrl = 'https://secure.anedot.com/patriots-for-action/donate'

export const donationDisclosure =
  'Contributions to Patriots for Action PAC are used to fund voter education, candidate interviews, and election outreach across Texas. Contributions are not tax-deductible. Not authorized by any candidate or candidate\'s committee.'

export const pacPaidForDisclosure =
  'Paid for by Patriots for Action PAC, Daniel L. Rogers, Treasurer. Contributions are not tax-deductible. Not authorized by any candidate or candidate\'s committee. Texas Ethics Commission Filer ID 00090846.'

export const candidateProjects = [
  {
    name: 'Mayes Middleton',
    title: 'Help Mayes Middleton Reach Texas Voters',
    description:
      "Fund distribution of Senator Middleton's unfiltered interview to verified Texas voters across the state.",
    href: 'https://patriotsinaction.com/candidates/mayes-middleton/',
  },
  {
    name: 'Jim Wright',
    title: 'Help Jim Wright Reach Texas Voters',
    description: "Fund distribution of Jim Wright's unfiltered interview to verified Texas voters across the state.",
    href: 'https://patriotsinaction.com/candidates/jim-wright/',
  },
  {
    name: 'Thomas Smith',
    title: 'Help Thomas Smith Reach Texas Voters',
    description: "Fund distribution of Thomas Smith's unfiltered interview to verified Texas voters across the state.",
    href: 'https://patriotsinaction.com/candidates/thomas-smith/',
  },
] as const

export const issueProjects = [
  {
    title: 'Eliminate Unrealized Gains Tax on Real Estate',
    description:
      "The government should never tax what you haven't sold. Texas property owners are in the crosshairs - and most voters don't even know it yet. Your contribution funds direct voter education across Texas to build the political will to stop it. Help us get the message out.",
  },
  {
    title: 'Support Transparent Elections',
    description:
      "Confidence in our elections must be restored. The solution is hand-marked, self-authenticated, tangible ballots that can be verified by every voter. What most Texans don't know is that this can be fixed with just 3three votes in each county. This is why I started Patriots in Action. Join us to learn how and help us get the word out to voters across Texas.",
  },
] as const

export const foundingMemberOffer = {
  title: 'Contribute $115 or More - Get One Full Year Free',
  description:
    'As a thank you for your support, any contribution of $115 or more includes one full year of Patriots in Action founding membership - our unfiltered platform featuring candidate interviews, celebrity voices, conservative podcasters, and your official Patriot Rewards Card delivered straight to your phone.',
  finePrint:
    'Founding Member pricing is locked forever at $9.95 a month after your first year. This offer is exclusively for Patriots for Action PAC contributors.',
} as const

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

