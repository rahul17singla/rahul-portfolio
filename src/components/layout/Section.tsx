import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'

interface SectionProps {
  id: string
  title: string
  eyebrow?: string
  description?: string
  children: ReactNode
}

/**
 * Standard page section: anchored id for nav links, consistent spacing,
 * heading block, and a fade-up reveal when scrolled into view.
 */
export function Section({ id, title, eyebrow, description, children }: SectionProps) {
  const headingId = `${id}-title`
  return (
    <section id={id} aria-labelledby={headingId} className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <SectionHeading id={headingId} title={title} eyebrow={eyebrow} description={description} />
          <div className="mt-10">{children}</div>
        </motion.div>
      </div>
    </section>
  )
}
