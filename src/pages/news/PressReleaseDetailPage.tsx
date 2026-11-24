import { Navigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  Calendar,
  Download,
  FileText,
  ShieldCheck,
} from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { ShareBar } from '@/components/news/ShareBar'
import { AppLink } from '@/components/ui/AppLink'
import { getPressReleaseBySlug } from '@/data/newsMedia'
import { usePageMeta } from '@/hooks'

export function PressReleaseDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const release = getPressReleaseBySlug(slug)

  usePageMeta(
    release ? release.title : 'Official Statement',
    release
      ? release.excerpt
      : 'Official institutional press release from the All-Africa Students Union.',
  )

  if (!release) {
    return <Navigate to="/news/press-releases" replace />
  }

  return (
    <>
      <InnerPageHero
        title={release.title}
        subtitle={`${release.statementType} issued by the ${release.issuingAuthority} on ${release.date}.`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'News & Media', href: '/news' },
          { label: 'Press Releases', href: '/news/press-releases' },
          { label: release.refNumber ?? release.date },
        ]}
        images={[
          {
            src: '/images/web/inauguration-2026.webp',
            alt: 'All-Africa Students Union official institutional archive',
          },
        ]}
      />

      <section className="bg-surface py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* Institutional Document Header */}
            <div className="rounded-3xl border border-border-subtle bg-surface-card p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-subtle pb-5">
                <div className="flex flex-wrap items-center gap-2.5 text-xs">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-aasu-red/10 px-3 py-1 font-display font-semibold text-aasu-red">
                    <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                    {release.statementType}
                  </span>
                  {release.refNumber && (
                    <span className="rounded-md border border-border-subtle bg-surface-alt px-2.5 py-1 font-mono text-xs font-semibold text-ink">
                      Ref: {release.refNumber}
                    </span>
                  )}
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs text-ink-secondary">
                  <Calendar className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                  <time dateTime={release.dateIso}>{release.date}</time>
                </span>
              </div>

              <dl className="mt-5 grid gap-3 text-xs sm:grid-cols-2">
                <div>
                  <dt className="text-ink-muted">Issuing Authority</dt>
                  <dd className="mt-0.5 font-display font-semibold text-ink">
                    {release.issuingAuthority}
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Topic</dt>
                  <dd className="mt-0.5 font-display font-semibold text-ink">
                    {release.topic}
                  </dd>
                </div>
              </dl>

              {/* Official Statement Full Text */}
              <div className="mt-7 space-y-4 border-t border-border-subtle pt-7 text-base leading-[1.8] text-ink-secondary">
                {release.fullText.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Official Signatory */}
              <div className="mt-8 border-t border-border-subtle pt-5">
                <p className="inline-flex items-center gap-2 font-display text-sm font-bold text-ink">
                  <ShieldCheck className="h-4 w-4 text-aasu-red" aria-hidden="true" />
                  <span>Signed: {release.signatory}</span>
                </p>
                <p className="mt-1 text-xs text-ink-muted">
                  All-Africa Students Union (AASU) · Accra, Ghana
                </p>
              </div>

              {/* Original PDF Status */}
              <div className="mt-6 rounded-2xl border border-border-subtle bg-surface-alt p-4 text-xs text-ink-secondary">
                {release.pdfUrl ? (
                  <a
                    href={release.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-display font-semibold text-aasu-red hover:underline"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    <span>Download Signed Original PDF</span>
                  </a>
                ) : (
                  <p>{release.pdfStatusNote}</p>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <AppLink
                href="/news/press-releases"
                className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ink hover:text-aasu-red"
              >
                <ArrowLeft className="h-4 w-4 text-aasu-red" aria-hidden="true" />
                <span>Back to Press Releases Archive</span>
              </AppLink>
              <ShareBar title={release.title} />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
