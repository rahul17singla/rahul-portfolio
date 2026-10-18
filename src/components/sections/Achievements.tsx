import type { SectionProps } from '../../types'
import { achievements } from '../../data'
import { Icon } from '../../lib/icons'
import { Section } from '../layout/Section'
import { Card } from '../ui/Card'

export function Achievements({ id, label, eyebrow, description }: SectionProps) {
  return (
    <Section id={id} title={label} eyebrow={eyebrow} description={description}>
      <ul className="grid gap-5 md:grid-cols-3">
        {achievements.map((achievement) => (
          <li key={achievement.title}>
            <Card interactive className="h-full">
              <div className="flex items-start justify-between gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon name={achievement.icon ?? 'trophy'} size={20} />
                </span>
                {achievement.year && (
                  <span className="text-sm tabular-nums text-zinc-500 dark:text-zinc-400">
                    {achievement.year}
                  </span>
                )}
              </div>
              <h3 className="mt-4 text-base font-semibold tracking-tight">{achievement.title}</h3>
              {achievement.description && (
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {achievement.description}
                </p>
              )}
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  )
}
