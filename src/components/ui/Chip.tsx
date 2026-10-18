import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface ChipProps {
  children: ReactNode
  /** `accent` uses the theme colour; `neutral` is the quiet default. */
  tone?: 'neutral' | 'accent'
  className?: string
}

export function Chip({ children, tone = 'neutral', className }: ChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap',
        tone === 'neutral' &&
          'border-zinc-200 bg-zinc-100 text-zinc-700 dark:border-zinc-700/60 dark:bg-zinc-800/60 dark:text-zinc-300',
        tone === 'accent' && 'border-accent/30 bg-accent/10 text-accent',
        className,
      )}
    >
      {children}
    </span>
  )
}
