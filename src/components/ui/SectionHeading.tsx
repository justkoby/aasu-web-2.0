import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  description?: string
  action?: ReactNode
  forceDark?: boolean
  className?: string
  id?: string
}

export function SectionHeading({
  title,
  description,
  action,
  forceDark = false,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between',
        className,
      )}
    >
      <div className="max-w-2xl">
        <h2
          id={id}
          className={cn(
            'font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.5rem]',
            forceDark ? 'text-aasu-white' : 'text-ink',
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              'mt-3.5 max-w-xl text-base leading-relaxed',
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
