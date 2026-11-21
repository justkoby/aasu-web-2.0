import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  action?: ReactNode
  theme?: 'light' | 'dark'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  theme = 'light',
  className,
}: SectionHeadingProps) {
  const isDark = theme === 'dark'

  return (
    <div
      className={cn(
        'flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between',
        className,
      )}
    >
      <div className="max-w-3xl">
        <div className="flex items-center gap-3">
          <span
            className="h-0.5 w-8 bg-aasu-red"
            aria-hidden="true"
          />
          <span
            className={cn(
              'text-xs font-semibold uppercase tracking-[0.18em]',
              isDark ? 'text-neutral-300' : 'text-aasu-red',
            )}
          >
            {eyebrow}
          </span>
        </div>
        <h2
          className={cn(
            'mt-4 font-display text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.65rem]',
            isDark ? 'text-aasu-white' : 'text-aasu-black',
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              'mt-4 max-w-2xl text-base leading-relaxed sm:text-lg',
              isDark ? 'text-neutral-300' : 'text-neutral-600',
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
