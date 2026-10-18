import { useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import type { SectionConfig } from '../../types'
import { profile } from '../../data'
import { cn } from '../../lib/cn'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useTheme } from '../../hooks/useTheme'

interface NavbarProps {
  sections: SectionConfig[]
  defaultMode: string
}

const iconButtonClass =
  'inline-flex h-9 w-9 items-center justify-center rounded-lg text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100'

export function Navbar({ sections, defaultMode }: NavbarProps) {
  const { mode, toggle } = useTheme(defaultMode)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(sections.map((s) => s.id))

  const nextMode = mode === 'dark' ? 'light' : 'dark'

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/70 bg-zinc-50/80 backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-950/70">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="rounded-lg text-base font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {profile.firstName} <span className="text-accent">{profile.lastName}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={active === section.id ? 'location' : undefined}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                  active === section.id
                    ? 'bg-accent/10 font-medium text-accent'
                    : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100',
                )}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${nextMode} mode`}
            title={`Switch to ${nextMode} mode`}
            className={iconButtonClass}
          >
            {mode === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className={cn(iconButtonClass, 'md:hidden')}
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-zinc-200 bg-zinc-50 md:hidden dark:border-zinc-800 dark:bg-zinc-950"
        >
          <ul className="mx-auto max-w-5xl space-y-1 px-4 py-3">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active === section.id ? 'location' : undefined}
                  className={cn(
                    'block rounded-lg px-3 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                    active === section.id
                      ? 'bg-accent/10 font-medium text-accent'
                      : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800',
                  )}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
