import { ArrowUp } from 'lucide-react'
import { profile, site } from '../../data'
import { SocialLinks } from '../ui/SocialLinks'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-zinc-200 py-10 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 text-sm text-zinc-500 sm:flex-row dark:text-zinc-400">
        <p className="text-center sm:text-left">
          © {year} {profile.name}. {site.footer.text}
        </p>
        <div className="flex items-center gap-4">
          <SocialLinks links={profile.social} iconSize={18} />
          <a
            href="#top"
            className="inline-flex items-center gap-1 rounded-lg px-2 py-1 transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Back to top
            <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
