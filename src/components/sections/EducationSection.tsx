import { GraduationCap, MapPin } from 'lucide-react'
import type { SectionProps } from '../../types'
import { education } from '../../data'
import { externalLinkProps } from '../../lib/links'
import { Section } from '../layout/Section'
import { Card } from '../ui/Card'

export function EducationSection({ id, label, eyebrow, description }: SectionProps) {
  return (
    <Section id={id} title={label} eyebrow={eyebrow} description={description}>
      <div className="grid gap-5">
        {education.map((entry) => (
          <Card key={`${entry.institution}-${entry.start}`} className="sm:flex sm:gap-6">
            <span
              aria-hidden="true"
              className="mb-4 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent sm:mb-0"
            >
              <GraduationCap size={24} />
            </span>

            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold tracking-tight">
                  {entry.institutionUrl ? (
                    <a
                      href={entry.institutionUrl}
                      {...externalLinkProps(entry.institutionUrl)}
                      className="underline-offset-4 hover:text-accent hover:underline"
                    >
                      {entry.institution}
                    </a>
                  ) : (
                    entry.institution
                  )}
                </h3>
                <time className="text-sm tabular-nums text-zinc-500 dark:text-zinc-400">
                  {entry.start} — {entry.end}
                </time>
              </div>

              <p className="mt-1 text-zinc-700 dark:text-zinc-300">
                {entry.degree}, {entry.field}
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400">
                <span className="inline-flex items-center gap-1">
                  <MapPin size={14} aria-hidden="true" />
                  {entry.location}
                </span>
                {entry.grade && <span className="font-medium text-accent">{entry.grade}</span>}
              </div>

              {entry.highlights && entry.highlights.length > 0 && (
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
                  {entry.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
