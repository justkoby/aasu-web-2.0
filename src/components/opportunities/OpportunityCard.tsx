import { ArrowUpRight, Calendar, ExternalLink, MapPin } from 'lucide-react'
import { AppLink } from '@/components/ui/AppLink'
import type { OpportunityRecord } from '@/data/opportunities'
import { cn } from '@/lib/utils'

interface OpportunityCardProps {
  opportunity: OpportunityRecord
}

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  const detailHref = `/opportunities/${opportunity.slug}`

  const statusStyles =
    opportunity.status === 'open'
      ? 'bg-aasu-red text-aasu-white'
      : opportunity.status === 'rolling'
        ? 'bg-aasu-red/10 text-aasu-red'
        : 'border border-border-subtle bg-surface-alt text-ink-muted'

  const statusLabel =
    opportunity.status === 'open'
      ? 'Open'
      : opportunity.status === 'rolling'
        ? 'Rolling Intake'
        : 'Closed'

  return (
    <article className="group flex h-full flex-col justify-between rounded-3xl border border-border-subtle bg-surface-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-aasu-red/45 hover:shadow-md">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="font-display font-semibold text-ink-secondary">
            {opportunity.providerType}
          </span>
          <span
            className={cn(
              'rounded-full px-2.5 py-0.5 font-display text-[11px] font-semibold',
              statusStyles,
            )}
          >
            {statusLabel}
          </span>
        </div>

        <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink transition-colors group-hover:text-aasu-red">
          <AppLink href={detailHref}>{opportunity.title}</AppLink>
        </h3>

        <p className="mt-1.5 text-xs font-medium text-ink-muted">
          {opportunity.provider}
        </p>

        <div className="mt-4 space-y-1.5 text-xs text-ink-secondary">
          <p className="flex items-center gap-1.5">
            <MapPin
              className="h-3.5 w-3.5 shrink-0 text-aasu-red"
              aria-hidden="true"
            />
            <span>{opportunity.location}</span>
          </p>
          <p className="flex items-center gap-1.5">
            <Calendar
              className="h-3.5 w-3.5 shrink-0 text-aasu-red"
              aria-hidden="true"
            />
            <span>Deadline: {opportunity.deadlineDisplay}</span>
          </p>
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink-secondary">
          {opportunity.overview[0]}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-border-subtle pt-4 text-xs">
        <AppLink
          href={detailHref}
          className="inline-flex items-center gap-1 font-display font-semibold text-ink hover:text-aasu-red"
        >
          <span>View Details</span>
          <ArrowUpRight
            className="h-3.5 w-3.5 text-aasu-red"
            aria-hidden="true"
          />
        </AppLink>

        {opportunity.status !== 'closed' && opportunity.applicationUrl && (
          <a
            href={opportunity.applicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-display font-semibold text-aasu-red hover:underline"
          >
            <span>Official Portal</span>
            <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  )
}
