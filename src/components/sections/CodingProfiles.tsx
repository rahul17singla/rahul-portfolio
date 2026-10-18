import { ArrowUpRight } from 'lucide-react'
import type { SectionProps } from '../../types'
import { codingProfiles } from '../../data'
import { Icon } from '../../lib/icons'
import { externalLinkProps } from '../../lib/links'
import { Section } from '../layout/Section'
import { Card } from '../ui/Card'

export function CodingProfiles({ id, label, eyebrow, description }: SectionProps) {
  return (
    <Section id={id} title={label} eyebrow={eyebrow} description={description}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {codingProfiles.map((profile) => {
          const hasLink = Boolean(profile.url)
          return (
            <Card key={profile.platform} interactive className="flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon name={profile.icon} size={22} />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{profile.platform}</h3>
                    {profile.handle && (
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">@{profile.handle}</p>
                    )}
                  </div>
                </div>
              </div>

              {profile.stats.length > 0 && (
                <dl className="mt-5 divide-y divide-zinc-200 text-sm dark:divide-zinc-800">
                  {profile.stats.map((stat) => (
                    <div key={stat.label} className="flex items-baseline justify-between gap-4 py-2">
                      <dt className="text-zinc-500 dark:text-zinc-400">{stat.label}</dt>
                      <dd className="font-semibold tabular-nums text-zinc-900 dark:text-zinc-100">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}

              {profile.note && (
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {profile.note}
                </p>
              )}

              <div className="mt-auto pt-5">
                {hasLink ? (
                  <a
                    href={profile.url}
                    {...externalLinkProps(profile.url ?? '')}
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    View profile
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                ) : (
                  <span className="text-sm text-zinc-400 dark:text-zinc-500"></span>
                )}
              </div>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
