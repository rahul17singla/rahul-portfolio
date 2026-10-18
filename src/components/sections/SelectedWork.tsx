import type { SectionProps } from '../../types'
import { projects } from '../../data'
import { Icon } from '../../lib/icons'
import { externalLinkProps } from '../../lib/links'
import { Section } from '../layout/Section'
import { Card } from '../ui/Card'
import { Chip } from '../ui/Chip'

interface RowProps {
  label: string
  children: string
  accent?: boolean
}

function Row({ label, children, accent = false }: RowProps) {
  return (
    <div>
      <dt className="text-xs font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
        {label}
      </dt>
      <dd
        className={
          accent
            ? 'mt-1 font-medium leading-relaxed text-zinc-900 dark:text-zinc-100'
            : 'mt-1 leading-relaxed text-zinc-600 dark:text-zinc-400'
        }
      >
        {children}
      </dd>
    </div>
  )
}

export function SelectedWork({ id, label, eyebrow, description }: SectionProps) {
  return (
    <Section id={id} title={label} eyebrow={eyebrow} description={description}>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => {
          const subtitle = [project.organization, project.period].filter(Boolean).join(' · ')
          return (
            <Card key={project.name} interactive className="flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
                  {subtitle && (
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{subtitle}</p>
                  )}
                </div>
                {project.links && project.links.length > 0 && (
                  <ul className="flex shrink-0 items-center gap-1">
                    {project.links.map((link) => (
                      <li key={link.url}>
                        <a
                          href={link.url}
                          {...externalLinkProps(link.url)}
                          aria-label={`${project.name} — ${link.label}`}
                          title={link.label}
                          className="inline-flex rounded-lg p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:hover:bg-zinc-800"
                        >
                          <Icon name={link.icon ?? 'external'} size={18} />
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <dl className="mt-5 flex-1 space-y-4 text-sm">
                <Row label="Context">{project.context}</Row>
                <Row label="What I did">{project.contribution}</Row>
                <Row label="Impact" accent>
                  {project.impact}
                </Row>
              </dl>

              {project.tech.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                  {project.tech.map((tech) => (
                    <li key={tech}>
                      <Chip>{tech}</Chip>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
