import { Mail, MapPin, Phone } from 'lucide-react'
import type { SectionProps } from '../../types'
import { profile } from '../../data'
import { Icon } from '../../lib/icons'
import { Section } from '../layout/Section'
import { ButtonLink } from '../ui/ButtonLink'

export function Contact({ id, label, eyebrow, description }: SectionProps) {
  // Non-email social links get secondary buttons; email is always the primary call to action.
  const secondaryLinks = profile.social.filter((link) => !link.url.startsWith('mailto:'))

  return (
    <Section id={id} title={label} eyebrow={eyebrow} description={description}>
      <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 text-center shadow-sm sm:p-12 dark:border-zinc-800 dark:bg-zinc-900/60">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-64 w-64 rounded-full bg-accent/20 blur-3xl"
        />

        <h3 className="relative text-2xl font-bold tracking-tight sm:text-3xl">
          {profile.contact.heading}
        </h3>
        <p className="relative mx-auto mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
          {profile.contact.text}
        </p>

        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href={`mailto:${profile.email}`} size="lg">
            <Mail size={18} aria-hidden="true" />
            {profile.email}
          </ButtonLink>
          {secondaryLinks.map((link) => (
            <ButtonLink key={link.label} href={link.url} variant="secondary" size="lg">
              <Icon name={link.icon} size={18} />
              {link.label}
            </ButtonLink>
          ))}
        </div>

        <ul className="relative mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400">
          <li className="inline-flex items-center gap-1.5">
            <MapPin size={16} aria-hidden="true" />
            {profile.location}
          </li>
          {profile.phone && (
            <li className="inline-flex items-center gap-1.5">
              <Phone size={16} aria-hidden="true" />
              <a
                href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}
                className="underline-offset-4 hover:text-accent hover:underline"
              >
                {profile.phone}
              </a>
            </li>
          )}
        </ul>
      </div>
    </Section>
  )
}
