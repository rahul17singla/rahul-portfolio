import { useCallback, useEffect, useState } from 'react'

export type ThemeMode = 'light' | 'dark'

/** Must match the key used by the inline script in index.html. */
const STORAGE_KEY = 'portfolio-theme'

function resolveInitialMode(defaultMode: string): ThemeMode {
  if (typeof window === 'undefined') return 'light'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    /* localStorage unavailable (privacy mode) — fall through */
  }
  if (defaultMode === 'light' || defaultMode === 'dark') return defaultMode
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/**
 * Light/dark theme backed by localStorage, applied as a `dark` class on <html>
 * (matching the `@custom-variant dark` in index.css).
 */
export function useTheme(defaultMode: string) {
  const [mode, setMode] = useState<ThemeMode>(() => resolveInitialMode(defaultMode))

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', mode === 'dark')
    root.style.colorScheme = mode
    try {
      window.localStorage.setItem(STORAGE_KEY, mode)
    } catch {
      /* ignore */
    }
  }, [mode])

  const toggle = useCallback(() => {
    setMode((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  return { mode, toggle }
}
