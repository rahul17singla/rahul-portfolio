import { motion } from 'framer-motion'
import { Download, Mail, MapPin } from 'lucide-react'
import { profile } from '../../data'
import { externalLinkProps } from '../../lib/links'
import { ButtonLink } from '../ui/ButtonLink'
import { SocialLinks } from '../ui/SocialLinks'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="relative overflow-hidden">
      {/* Soft accent glow behind the hero */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-14rem] left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl dark:bg-accent/15" />
      </div>

      <div className="mx-auto max-w-5xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr]">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            {profile.status?.show && (
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  {profile.status.text}
                </span>
              </motion.div>
            )}

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-xl text-zinc-700 sm:text-2xl dark:text-zinc-300"
            >
              {profile.title}
              {profile.company && (
                <>
                  {' '}
                  at{' '}
                  {profile.companyUrl ? (
                    <a
                      href={profile.companyUrl}
                      {...externalLinkProps(profile.companyUrl)}
                      className="font-semibold text-accent underline-offset-4 hover:underline"
                    >
                      {profile.company}
                    </a>
                  ) : (
                    <span className="font-semibold text-accent">{profile.company}</span>
                  )}
                </>
              )}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
            >
              {profile.tagline}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`mailto:${profile.email}`} size="lg">
                <Mail size={18} aria-hidden="true" />
                Email me
              </ButtonLink>
              {profile.resumeUrl && (
                <ButtonLink href={profile.resumeUrl} variant="secondary" size="lg" download>
                  <Download size={18} aria-hidden="true" />
                  Download resume
                </ButtonLink>
              )}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={16} aria-hidden="true" />
                {profile.location}
              </span>
              <span aria-hidden="true" className="hidden h-4 w-px bg-zinc-300 sm:block dark:bg-zinc-700" />
              <SocialLinks links={profile.social} />
            </motion.div>
          </motion.div>

          {profile.highlights.length > 0 && (
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }}
              className="grid grid-cols-2 gap-4"
              aria-label="Highlights"
            >
              {profile.highlights.map((item) => (
                <motion.li
                  key={item.label}
                  variants={fadeUp}
                  className="rounded-2xl border border-zinc-200 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60"
                >
                  <div className="text-3xl font-bold tracking-tight text-accent">{item.value}</div>
                  <div className="mt-1 text-sm leading-snug text-zinc-600 dark:text-zinc-400">
                    {item.label}
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </div>
      </div>
    </section>
  )
}
