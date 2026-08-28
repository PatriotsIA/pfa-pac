export const siteConfig = {
  name: 'Patriots for Action PAC',
  legalName: 'Patriots for Action PAC',
  url: 'https://patriotsforaction.org',
  tagline: 'A Texas Political Action Committee',
  description:
    'Patriots for Action PAC organizes and funds a statewide voter-turnout effort in Texas.',
  contact: {
    email: 'contribute@patriotsforaction.org',
    /** Display (after “Phone: ” in UI where labeled) */
    phone: '866-756-1776',
    /** E.164 for <a href="tel:…"> */
    phoneDial: '+18667561776',
    mailingAddress: '1000 S. Jefferson St., Amarillo, Texas 79101',
  },
  links: {
    texasHub: 'https://patriotsinaction.com/',
    community: 'https://community.patriotsinaction.com/collections/22475?sort=by_hosts',
    operationShowUpPatriotMerch:
      'https://shop.patriotsinaction.com/products/operation-show-up?variant=53583746826606',
    operationShowUpColoringBook:
      'https://shop.patriotsinaction.com/products/the-founding-of-america-coloring-book?variant=53583769502062',
  },
  brand: {
    pacLogoSrc: '/brand/PIAPatriot.png',
    faviconSrc: '/brand/SocialIcon.png',
    footerLogoSrc: '/brand/PIAFooterLogo.png',
    patriotsInActionLockupSrc: '/brand/PIAFullTextLogoRedWhite.png',
    operationShowUpCoverSrc: '/brand/operation-show-up-cover.png',
    coloringBookCoverSrc: '/brand/ColoringBookFront.webp',
  },
} as const

