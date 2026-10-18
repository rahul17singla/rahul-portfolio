import type { SectionProps } from '../../types'
import { summary } from '../../data'
import { Section } from '../layout/Section'
import { Chip } from '../ui/Chip'

export function About({ id, label, eyebrow, description }: SectionProps) {
  return (
    <Section id={id} title={label} eyebrow={eyebrow} description={description}>
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          {summary.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {summary.focus && summary.focus.length > 0 && (
          <aside className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
            <h3 className="text-sm font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
              Focus areas
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {summary.focus.map((item) => (
                <li key={item}>
                  <Chip tone="accent">{item}</Chip>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </Section>
  )
}
