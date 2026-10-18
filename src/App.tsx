import { useEffect, type ComponentType } from 'react'
import { MotionConfig } from 'framer-motion'
import type { SectionProps } from './types'
import { site } from './data'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { SelectedWork } from './components/sections/SelectedWork'
import { Skills } from './components/sections/Skills'
import { EducationSection } from './components/sections/EducationSection'
import { CodingProfiles } from './components/sections/CodingProfiles'
import { Achievements } from './components/sections/Achievements'
import { Contact } from './components/sections/Contact'

/**
 * Maps a section `id` from src/data/site.json to the component that renders it.
 * To add a new section: create a component, register it here, and add an entry to site.json.
 */
const sectionRegistry: Record<string, ComponentType<SectionProps>> = {
  about: About,
  experience: Experience,
  work: SelectedWork,
  skills: Skills,
  education: EducationSection,
  coding: CodingProfiles,
  achievements: Achievements,
  contact: Contact,
}

export default function App() {
  const sections = site.sections.filter((section) => section.enabled)

  // Sync document metadata and the accent colour from site.json.
  useEffect(() => {
    document.title = site.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', site.description)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', site.theme.accent)
    document.documentElement.style.setProperty('--color-accent', site.theme.accent)
  }, [])

  useEffect(() => {
    const unknown = sections.filter((section) => !sectionRegistry[section.id]).map((s) => s.id)
    if (unknown.length > 0) {
      console.warn(
        `[portfolio] site.json lists sections with no registered component: ${unknown.join(', ')}. ` +
          'Register them in App.tsx or set "enabled": false.',
      )
    }
  }, [sections])

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-zinc-50 text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>

        <Navbar sections={sections} defaultMode={site.theme.defaultMode} />

        <main id="main">
          <Hero />
          {sections.map((section) => {
            const SectionComponent = sectionRegistry[section.id]
            if (!SectionComponent) return null
            return (
              <SectionComponent
                key={section.id}
                id={section.id}
                label={section.label}
                eyebrow={section.eyebrow}
                description={section.description}
              />
            )
          })}
        </main>

        <Footer />
      </div>
    </MotionConfig>
  )
}
