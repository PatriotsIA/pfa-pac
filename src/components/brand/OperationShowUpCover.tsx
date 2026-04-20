import type { ImgHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'
import { siteConfig } from '../../config/site'

export const operationShowUpCoverAlt =
  'Book cover for Operation Show Up by Daniel L. Rogers, featuring a stylized Uncle Sam pointing and holding a smartphone with the Patriots in Action logo against a patriotic background.'

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> & {
  className?: string
}

export function OperationShowUpCover({ className, ...props }: Props) {
  return (
    <img
      src={siteConfig.brand.operationShowUpCoverSrc}
      alt={operationShowUpCoverAlt}
      className={cn(
        'rounded-xl border border-patriot-border bg-patriot-bg shadow-card object-contain',
        className,
      )}
      loading="lazy"
      decoding="async"
      {...props}
    />
  )
}
