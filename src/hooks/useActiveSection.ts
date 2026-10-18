import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in the middle band of the viewport so the
 * navbar can highlight its link. Returns the section id, or null when none of
 * the tracked sections is in the band (e.g. while the hero is on screen).
 */
export function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null)
  const key = ids.join('|')

  useEffect(() => {
    const orderedIds = key.split('|').filter(Boolean)
    const elements = orderedIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    // Sections currently intersecting the band, maintained across callbacks
    // (IntersectionObserver only reports entries whose state changed).
    const visible = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }
        // Prefer the earliest visible section in document order.
        const next = orderedIds.find((id) => visible.has(id)) ?? null
        setActive(next)
      },
      // A horizontal band around the vertical centre of the viewport.
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [key])

  return active
}
