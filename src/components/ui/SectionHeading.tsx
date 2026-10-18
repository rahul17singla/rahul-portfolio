interface SectionHeadingProps {
  id: string
  title: string
  eyebrow?: string
  description?: string
}

export function SectionHeading({ id, title, eyebrow, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="text-sm font-semibold tracking-wide text-accent uppercase">{eyebrow}</p>
      )}
      <h2 id={id} className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      )}
    </div>
  )
}
