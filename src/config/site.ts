export const siteConfig = {
  name: 'Patriots For Action',
  legalName: 'Patriots For Action PAC',
  url: 'https://patriotsforaction.org',
  tagline: 'Local-first. Values-forward. Action-oriented.',
  description:
    'A statewide PAC committed to the habits of self-government: show up locally, stay informed, speak with restraint, and act with steady responsibility.',
  contact: {
    email: 'info@patriotsinaction.com',
    /** Display (after “Phone: ” in UI where labeled) */
    phone: '(866) 756 1776',
    /** E.164 for <a href="tel:…"> */
    phoneDial: '+18667561776',
    mailingAddress: '1000 S. Jefferson Street, Amarillo, TX 79101',
  },
  links: {
    texasHub: 'https://patriotsinactiontx.com/',
    community:
      'https://community.patriotsinaction.com/collections/22475?sort=by_hosts',
    /** Patriot Merch links for Operation Show Up products. */
    operationShowUpPatriotMerch:
      'https://shop.patriotsinaction.com/products/operation-show-up?variant=53583746826606',
    operationShowUpColoringBook:
      'https://shop.patriotsinaction.com/products/operation-show-up?variant=53583746826606',
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

