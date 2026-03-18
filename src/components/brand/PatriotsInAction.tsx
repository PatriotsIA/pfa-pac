import { cn } from '../../lib/cn'
import { siteConfig } from '../../config/site'

export function PatriotsInActionLockup({
  className,
  alt = 'Patriots in Action',
}: {
  className?: string
  alt?: string
}) {
  return (
    <img
      src={siteConfig.brand.patriotsInActionLockupSrc}
      alt={alt}
      className={cn('h-10 w-auto object-contain', className)}
      loading="lazy"
      decoding="async"
    />
  )
}

