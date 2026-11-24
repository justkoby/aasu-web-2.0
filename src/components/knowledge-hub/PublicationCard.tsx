import { ArrowUpRight, Download, FileText } from 'lucide-react'
import { AppLink } from '@/components/ui/AppLink'
import type { PublicationRecord } from '@/data/publications'

interface PublicationCardProps {
  publication: PublicationRecord
}

export function PublicationCard({ publication }: PublicationCardProps) {
  const detailHref = `/knowledge-hub/publications/${publication.slug}`

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border-subtle bg-surface-card transition-all duration-200 hover:-translate-y-0.5 hover:border-aasu-red/45 hover:shadow-md">
      {/* Original Extracted Cover Thumbnail */}
      <AppLink
        href={detailHref}
        className="block overflow-hidden bg-[#101114] p-5 pb-0"
      >
        {publication.coverImage ? (
          <img
            src={publication.coverImage}
            alt={`Original cover of ${publication.title}`}
            className="aspect-[3/4] w-full rounded-t-xl object-cover object-top shadow-md transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="flex aspect-[3/4] w-full flex-col items-center justify-center rounded-t-xl border border-white/10 bg-[#181A1F] p-6 text-center text-aasu-white">
            <FileText
              className="h-9 w-9 text-aasu-red"
              aria-hidden="true"
            />
            <p className="mt-3 font-display text-xs font-semibold text-neutral-300">
              {publication.subcategory}
            </p>
            <p className="mt-1 text-[11px] text-neutral-400">
              Official PDF pending upload
            </p>
          </div>
        )}
      </AppLink>

      {/* Metadata & Actions */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-display font-semibold text-aasu-red">
              {publication.subcategory}
            </span>
            <span className="font-display font-semibold text-ink-muted">
              {publication.year}
              {publication.language !== 'English'
                ? ` · ${publication.language}`
                : ''}
            </span>
          </div>

          <h3 className="mt-2 font-display text-base font-bold leading-snug text-ink transition-colors group-hover:text-aasu-red">
            <AppLink href={detailHref}>{publication.title}</AppLink>
          </h3>

          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-ink-secondary">
            {publication.summary}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between gap-2 border-t border-border-subtle pt-3.5 text-xs">
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

          {publication.pdfUrl ? (
            <a
              href={publication.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Download PDF: ${publication.title}`}
              className="inline-flex min-h-[32px] items-center gap-1 rounded-full border border-border-subtle bg-surface-alt px-3 py-1 font-display text-[11px] font-semibold text-ink transition-colors hover:border-aasu-red hover:bg-aasu-red hover:text-aasu-white"
            >
              <Download className="h-3 w-3" aria-hidden="true" />
              <span>{publication.fileSize ?? 'PDF'}</span>
            </a>
          ) : (
            <span className="text-[11px] text-ink-muted">Pending PDF</span>
          )}
        </div>
      </div>
    </article>
  )
}
