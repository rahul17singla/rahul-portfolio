import { ChevronRight, MapPin } from 'lucide-react'
import type { Bullet, SectionProps } from '../../types'
import { experience } from '../../data'
import { externalLinkProps } from '../../lib/links'
import { Section } from '../layout/Section'
import { Chip } from '../ui/Chip'

function normaliseBullet(bullet: string | Bullet): Bullet {
  return typeof bullet === 'string' ? { text: bullet } : bullet
}

export function Experience({ id, label, eyebrow, description }: SectionProps) {
  return (
    <Section id={id} title={label} eyebrow={eyebrow} description={description}>
      <ol className="relative ml-2 space-y-14 border-l border-zinc-200 dark:border-zinc-800">
        {experience.map((entry) => (
          <li key={entry.company} className="relative pl-8 sm:pl-10">
            {/* Timeline marker */}
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-[7px] h-3.5 w-3.5 rounded-full border-2 border-zinc-50 bg-accent dark:border-zinc-950"
            />

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-xl font-semibold tracking-tight">
                {entry.companyUrl ? (
                  <a
                    href={entry.companyUrl}
                    {...externalLinkProps(entry.companyUrl)}
                    className="underline-offset-4 hover:text-accent hover:underline"
                  >
                    {entry.company}
                  </a>
                ) : (
                  entry.company
                )}
              </h3>
              <span className="inline-flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400">
                <MapPin size={14} aria-hidden="true" />
                {entry.location}
              </span>
            </div>

            <div className="mt-5 space-y-10">
              {entry.roles.map((role) => (
                <article key={`${role.title}-${role.start}`}>
                  <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h4 className="flex flex-wrap items-center gap-2 text-base font-medium text-zinc-800 dark:text-zinc-200">
                      {role.title}
                      {role.type && <Chip>{role.type}</Chip>}
                    </h4>
                    <time className="text-sm tabular-nums text-zinc-500 dark:text-zinc-400">
                      {role.start} — {role.end}
                    </time>
                  </header>

                  <ul className="mt-4 space-y-3">
                    {role.bullets.map((raw, index) => {
                      const bullet = normaliseBullet(raw)
                      return (
                        <li
                          key={index}
                          className="flex gap-2 leading-relaxed text-zinc-600 dark:text-zinc-400"
                        >
                          <ChevronRight
                            size={16}
                            aria-hidden="true"
                            className="mt-1.5 shrink-0 text-accent"
                          />
                          <p>
                            {bullet.title && (
                              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                                {bullet.title}:{' '}
                              </span>
                            )}
                            {bullet.text}
                          </p>
                        </li>
                      )
                    })}
                  </ul>

                  {role.tech && role.tech.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                      {role.tech.map((tech) => (
                        <li key={tech}>
                          <Chip>{tech}</Chip>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
