const defaultAnedotCheckoutUrl = 'https://secure.anedot.com/patriots-for-action/donate'

export const donationDisclosure =
  'Paid for by Patriots for Action PAC, Daniel L. Rogers, Treasurer. Texas Ethics Commission Filer ID 00090846. Contributions are not tax-deductible. Not authorized by any candidate or candidate\'s committee.'

export const pacPaidForDisclosure =
  'Paid for by Patriots for Action PAC, Daniel L. Rogers, Treasurer. Texas Ethics Commission Filer ID 00090846. Contributions are not tax-deductible. Not authorized by any candidate or candidate\'s committee.'

export const issueProjects = [
  {
    title: 'Eliminate Unrealized Gains Tax on Real Estate',
    description:
      "The government should never tax what you haven't sold. Texas property owners are in the crosshairs - and most voters don't even know it yet. Your contribution funds direct voter education across Texas to build the political will to stop it. Help us get the message out.",
  },
  {
    title: 'Support Transparent Elections',
    description:
      "Confidence in our elections must be restored. The solution is hand-marked, self-authenticated, tangible ballots that can be verified by every voter. What most Texans don't know is that this can be fixed with just three votes in each county. Help us educate voters across Texas.",
  },
] as const

export const donationConfig = {
  /** Hosted Anedot form (no card data on this site). */
  anedot: {
    checkoutUrl: defaultAnedotCheckoutUrl,
  },
} as const

