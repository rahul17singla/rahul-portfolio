import type { SocialLink } from '../../types'
import { cn } from '../../lib/cn'
import { Icon } from '../../lib/icons'
import { externalLinkProps } from '../../lib/links'

interface SocialLinksProps {
  links: SocialLink[]
  className?: string
  iconSize?: number
}

/** Row of icon-only social links with accessible labels. */
export function SocialLinks({ links, className, iconSize = 20 }: SocialLinksProps) {
  return (
    <ul className={cn('flex items-center gap-1', className)}>
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.url}
            {...externalLinkProps(link.url)}
            aria-label={link.label}
            title={link.label}
            className="inline-flex rounded-lg p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:text-zinc-400 dark:hover:bg-zinc-800"
          >
            <Icon name={link.icon} size={iconSize} />
          </a>
        </li>
      ))}
    </ul>
  )
}
