import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface CardProps {
  children: ReactNode
  className?: string
  /** Adds a subtle lift + accent border on hover. */
  interactive?: boolean
}

export function Card({ children, className, interactive = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm',
        'dark:border-zinc-800 dark:bg-zinc-900/60',
        interactive &&
          'transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md dark:hover:border-accent/40',
        className,
      )}
    >
      {children}
    </div>
  )
}
