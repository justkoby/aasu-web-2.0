import { ArrowUpRight } from 'lucide-react'
import type { InstitutionalPartnerRecord } from '@/data/about'

interface PartnerCardProps {
  partner: InstitutionalPartnerRecord
}

export function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-border-subtle bg-surface-card p-6 transition-all duration-200 hover:border-ink/25 hover:shadow-sm">
      <div>
        <div className="flex items-center justify-between gap-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-aasu-red">
            {partner.category}
          </span>
          {partner.logo && (
            <div className="flex h-10 w-16 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-aasu-white p-1.5">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-7 w-auto max-w-full object-contain"
                loading="lazy"
              />
            </div>
          )}
        </div>

        <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink">
          {partner.name}
        </h3>
        <p className="mt-1.5 text-xs font-medium text-ink-muted">
          {partner.description}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
          {partner.collaboration}
        </p>
      </div>

      {partner.url && (
        <div className="mt-5 border-t border-border-subtle pt-4">
          <a
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-display text-xs font-semibold text-ink transition-colors hover:text-aasu-red"
          >
            <span>Visit Partner Website</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
          </a>
        </div>
      )}
    </article>
  )
}
