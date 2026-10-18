import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { externalLinkProps } from '../../lib/links'

interface ButtonLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'md' | 'lg'
}

/** An anchor styled as a button. External URLs automatically open in a new tab. */
export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...rest
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      {...externalLinkProps(href)}
      {...rest}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950',
        size === 'md' && 'px-4 py-2.5 text-sm',
        size === 'lg' && 'px-6 py-3 text-base',
        variant === 'primary' && 'bg-accent text-white shadow-sm hover:brightness-110 active:brightness-95',
        variant === 'secondary' &&
          'border border-zinc-300 bg-white text-zinc-800 hover:border-accent hover:text-accent dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-accent dark:hover:text-accent',
        variant === 'ghost' &&
          'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100',
        className,
      )}
    >
      {children}
    </a>
  )
}
