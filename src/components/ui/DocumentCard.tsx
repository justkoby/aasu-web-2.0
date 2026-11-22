import { Clock, Download, FileText } from 'lucide-react'
import type { GovernanceDocument } from '@/data/about'

interface DocumentCardProps {
  document: GovernanceDocument
}

export function DocumentCard({ document }: DocumentCardProps) {
  const isAvailable = Boolean(document.fileUrl)

  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-border-subtle bg-surface-card p-6 transition-all duration-200 hover:border-ink/25 hover:shadow-sm">
      <div>
        <div className="flex items-center justify-between gap-2 text-xs">
          <span className="font-semibold uppercase tracking-[0.12em] text-aasu-red">
            {document.category}
          </span>
          <span className="font-display font-medium text-ink-muted">
            {document.year}
          </span>
        </div>

        <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink">
          {document.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
          {document.description}
        </p>
      </div>

      <div className="mt-6 border-t border-border-subtle pt-4">
        {isAvailable && document.fileUrl ? (
          <a
            href={document.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ink transition-colors hover:text-aasu-red"
          >
            <Download className="h-4 w-4 text-aasu-red" aria-hidden="true" />
            <span>Download PDF</span>
          </a>
        ) : (
          <div className="inline-flex items-center gap-2 text-xs font-medium text-ink-muted">
            <Clock className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
            <span>{document.placeholderStatus ?? 'Official PDF pending upload'}</span>
          </div>
        )}
      </div>
    </article>
  )
}

export function DocumentBadgeIcon() {
  return <FileText className="h-5 w-5 text-aasu-red" aria-hidden="true" />
}
