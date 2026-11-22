import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  action?: ReactNode
  forceDark?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  forceDark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between',
        className,
      )}
    >
      <div className="max-w-2xl">
        <div className="flex items-center gap-2.5">
          <span className="h-0.5 w-7 bg-aasu-red" aria-hidden="true" />
          <span
            className={cn(
              'text-xs font-semibold uppercase tracking-[0.18em]',
              forceDark ? 'text-neutral-300' : 'text-aasu-red',
            )}
          >
            {eyebrow}
          </span>
        </div>
        <h2
          className={cn(
            'mt-3 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.5rem]',
            forceDark ? 'text-aasu-white' : 'text-ink',
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              'mt-3 max-w-xl text-base leading-relaxed',
              forceDark ? 'text-neutral-300' : 'text-ink-secondary',
            )}
          >
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
