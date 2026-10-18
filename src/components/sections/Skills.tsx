import type { SectionProps } from '../../types'
import { skills } from '../../data'
import { Icon } from '../../lib/icons'
import { Section } from '../layout/Section'
import { Card } from '../ui/Card'
import { Chip } from '../ui/Chip'

export function Skills({ id, label, eyebrow, description }: SectionProps) {
  return (
    <Section id={id} title={label} eyebrow={eyebrow} description={description}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((category) => (
          <Card key={category.name} interactive>
            <h3 className="flex items-center gap-2 text-base font-semibold">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icon name={category.icon ?? 'code'} size={16} />
              </span>
              {category.name}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li key={skill}>
                  <Chip>{skill}</Chip>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  )
}
