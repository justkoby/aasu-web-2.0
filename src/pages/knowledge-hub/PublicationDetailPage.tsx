import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Check,
  Copy,
  Download,
  ExternalLink,
  Eye,
  FileText,
  Globe,
  Layers,
  Users,
} from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { PublicationCard } from '@/components/knowledge-hub/PublicationCard'
import { ShareBar } from '@/components/news/ShareBar'
import { AppLink } from '@/components/ui/AppLink'
import {
  getCategoryMeta,
  getPublicationBySlug,
  getPublicPublications,
  PRIORITY_LABELS,
} from '@/data/publications'
import { getEventBySlug } from '@/data/events'
import { getArticleBySlug } from '@/data/newsMedia'
import { usePageMeta } from '@/hooks'

export function PublicationDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const publication = getPublicationBySlug(slug)
  const [showPreview, setShowPreview] = useState(false)
  const [copiedCitation, setCopiedCitation] = useState(false)

  usePageMeta(
    publication ? publication.title : 'Publication',
    publication
      ? publication.summary
      : 'Official publication from the All-Africa Students Union Knowledge Hub.',
  )

  if (!publication) {
    return <Navigate to="/knowledge-hub" replace />
  }

  const categoryMeta = getCategoryMeta(publication.category)

  const relatedPublications = getPublicPublications()
    .filter(
      (p) =>
        p.slug !== publication.slug &&
        (p.category === publication.category ||
          p.relatedPriorityIds.some((id) =>
            publication.relatedPriorityIds.includes(id),
          )),
    )
    .slice(0, 3)

  const linkedEvents = publication.relatedEventIds
    .map((id) => getEventBySlug(id))
    .filter((e): e is NonNullable<typeof e> => Boolean(e))

  const linkedNews = publication.relatedNewsIds
    .map((id) => getArticleBySlug(id))
    .filter((n): n is NonNullable<typeof n> => Boolean(n))

  const citationText = `${publication.publisher} (${publication.year}). ${publication.title}.${publication.version ? ` ${publication.version}.` : ''} All-Africa Students Union Knowledge Hub.`

  const handleCopyCitation = async () => {
    try {
      await navigator.clipboard.writeText(citationText)
      setCopiedCitation(true)
      window.setTimeout(() => setCopiedCitation(false), 2400)
    } catch {
      setCopiedCitation(false)
    }
  }

  return (
    <>
      <InnerPageHero
        title={publication.title}
        subtitle={publication.summary}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Knowledge Hub', href: '/knowledge-hub' },
          { label: categoryMeta.title, href: categoryMeta.href },
          { label: publication.subcategory },
        ]}
        images={[
          {
            src: categoryMeta.heroImage,
            alt: categoryMeta.heroImageAlt,
          },
        ]}
      />

      <section className="border-b border-border-subtle bg-surface py-12 lg:py-16">
        <Container>
          {/* Return Bar */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle pb-5">
            <AppLink
              href={categoryMeta.href}
              className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ink hover:text-aasu-red"
            >
              <ArrowLeft className="h-4 w-4 text-aasu-red" aria-hidden="true" />
              <span>Back to {categoryMeta.title}</span>
            </AppLink>
            <ShareBar title={publication.title} />
          </div>

          <div className="grid gap-10 lg:grid-cols-12">
            {/* Left Column: Original Cover + Download & Citation Actions */}
            <div className="lg:col-span-4">
              <div className="overflow-hidden rounded-3xl border border-border-subtle bg-surface-card p-5">
                {publication.coverImage ? (
                  <div className="overflow-hidden rounded-2xl bg-[#101114] p-4">
                    <img
                      src={publication.coverImage}
                      alt={`Original cover of ${publication.title}`}
                      className="aspect-[3/4] w-full rounded-lg object-cover object-top shadow-lg"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[3/4] w-full flex-col items-center justify-center rounded-2xl border border-border-subtle bg-surface-alt p-6 text-center">
                    <FileText
                      className="h-12 w-12 text-aasu-red"
                      aria-hidden="true"
                    />
                    <p className="mt-3 font-display text-sm font-bold text-ink">
                      {publication.subcategory}
                    </p>
                    <p className="mt-1 text-xs text-ink-muted">
                      Original cover available upon PDF upload
                    </p>
                  </div>
                )}

                <div className="mt-5 space-y-2.5">
                  {publication.pdfUrl ? (
                    <>
                      <a
                        href={publication.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-aasu-red px-5 py-2.5 font-display text-xs font-semibold text-aasu-white transition-colors hover:bg-aasu-red-dark"
                      >
                        <Download className="h-4 w-4" aria-hidden="true" />
                        <span>
                          Download Original PDF
                          {publication.fileSize
                            ? ` (${publication.fileSize})`
                            : ''}
                        </span>
                      </a>

                      <button
                        type="button"
                        onClick={() => setShowPreview((prev) => !prev)}
                        className="inline-flex min-h-[42px] w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-border-subtle bg-surface-alt px-5 py-2.5 font-display text-xs font-semibold text-ink transition-colors hover:border-aasu-red hover:text-aasu-red"
                      >
                        <Eye className="h-4 w-4 text-aasu-red" aria-hidden="true" />
                        <span>
                          {showPreview
                            ? 'Hide Inline PDF Preview'
                            : 'Preview PDF Inline'}
                        </span>
                      </button>
                    </>
                  ) : (
                    <div className="rounded-2xl border border-border-subtle bg-surface-alt p-4 text-xs leading-relaxed text-ink-secondary">
                      {publication.availabilityNote}
                    </div>
                  )}

                  {publication.externalUrl && (
                    <a
                      href={publication.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[40px] w-full items-center justify-center gap-1.5 rounded-full border border-border-subtle px-4 py-2 font-display text-xs font-semibold text-ink-secondary hover:border-aasu-red hover:text-ink"
                    >
                      <span>Partner Source Page</span>
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={handleCopyCitation}
                    className="inline-flex min-h-[40px] w-full cursor-pointer items-center justify-center gap-1.5 rounded-full border border-border-subtle px-4 py-2 font-display text-xs font-semibold text-ink transition-colors hover:border-aasu-red hover:text-aasu-red"
                  >
                    {copiedCitation ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                        <span>Citation Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                        <span>Copy Citation</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Metadata, Summary, Lazy PDF Viewer & Linked Content */}
            <div className="space-y-8 lg:col-span-8">
              <div className="rounded-3xl border border-border-subtle bg-surface-card p-6 sm:p-8">
                <h2 className="font-display text-2xl font-bold text-ink">
                  Publication Details
                </h2>
                <p className="mt-3 text-base leading-[1.8] text-ink-secondary">
                  {publication.summary}
                </p>

                <dl className="mt-6 grid gap-4 border-t border-border-subtle pt-6 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-xs text-ink-muted">Publisher</dt>
                    <dd className="mt-0.5 font-display font-semibold text-ink">
                      {publication.publisher}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs text-ink-muted">Publication Date</dt>
                    <dd className="mt-0.5 inline-flex items-center gap-1.5 font-display font-semibold text-ink">
                      <Calendar className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                      {publication.publicationDate ?? publication.year}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs text-ink-muted">Category</dt>
                    <dd className="mt-0.5 inline-flex items-center gap-1.5 font-display font-semibold text-ink">
                      <Layers className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                      {publication.subcategory}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs text-ink-muted">Language</dt>
                    <dd className="mt-0.5 inline-flex items-center gap-1.5 font-display font-semibold text-ink">
                      <Globe className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                      {publication.language}
                    </dd>
                  </div>

                  {publication.version && (
                    <div>
                      <dt className="text-xs text-ink-muted">
                        Version / Edition
                      </dt>
                      <dd className="mt-0.5 font-display font-semibold text-ink">
                        {publication.version}
                      </dd>
                    </div>
                  )}

                  {publication.pageCount && (
                    <div>
                      <dt className="text-xs text-ink-muted">Length</dt>
                      <dd className="mt-0.5 font-display font-semibold text-ink">
                        {publication.pageCount} pages
                        {publication.fileSize
                          ? ` · ${publication.fileSize}`
                          : ''}
                      </dd>
                    </div>
                  )}

                  {publication.audience && (
                    <div className="sm:col-span-2">
                      <dt className="text-xs text-ink-muted">
                        Intended Audience
                      </dt>
                      <dd className="mt-0.5 inline-flex items-center gap-1.5 font-display font-semibold text-ink">
                        <Users className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                        {publication.audience}
                      </dd>
                    </div>
                  )}
                </dl>

                {/* Keywords */}
                <div className="mt-6 flex flex-wrap gap-2 border-t border-border-subtle pt-5">
                  {publication.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="rounded-full border border-border-subtle bg-surface-alt px-3 py-1 text-xs text-ink-secondary"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Lazy-Loaded Inline PDF Preview (Only loads PDF when user requests preview) */}
              {showPreview && publication.pdfUrl && (
                <div className="overflow-hidden rounded-3xl border border-border-subtle bg-surface-card">
                  <div className="flex items-center justify-between border-b border-border-subtle px-5 py-3.5 text-xs">
                    <span className="font-display font-semibold text-ink">
                      Inline Document Preview
                    </span>
                    <a
                      href={publication.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display font-semibold text-aasu-red hover:underline"
                    >
                      Open in New Tab
                    </a>
                  </div>
                  <object
                    data={publication.pdfUrl}
                    type="application/pdf"
                    className="h-[640px] w-full bg-[#101114]"
                  >
                    <div className="p-8 text-center">
                      <p className="text-sm text-ink-secondary">
                        Inline PDF preview is not supported by this browser.
                      </p>
                      <a
                        href={publication.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 rounded-full bg-aasu-red px-5 py-2.5 font-display text-xs font-semibold text-aasu-white"
                      >
                        <Download className="h-4 w-4" aria-hidden="true" />
                        <span>Download Original PDF</span>
                      </a>
                    </div>
                  </object>
                </div>
              )}

              {/* Linked Strategic Priorities, Events & News */}
              {(publication.relatedPriorityIds.length > 0 ||
                linkedEvents.length > 0 ||
                linkedNews.length > 0) && (
                <div className="rounded-3xl border border-border-subtle bg-surface-card p-6 sm:p-8">
                  <h2 className="font-display text-lg font-bold text-ink">
                    Connected Priorities, Events &amp; Coverage
                  </h2>

                  {publication.relatedPriorityIds.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {publication.relatedPriorityIds.map((id) => (
                        <AppLink
                          key={id}
                          href={`/what-we-do/strategic-priorities/${id}`}
                          className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-surface-alt px-4 py-2 font-display text-xs font-semibold text-ink transition-colors hover:border-aasu-red hover:text-aasu-red"
                        >
                          <span>{PRIORITY_LABELS[id] ?? id}</span>
                          <ArrowUpRight className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                        </AppLink>
                      ))}
                    </div>
                  )}

                  {(linkedEvents.length > 0 || linkedNews.length > 0) && (
                    <div className="mt-5 space-y-2.5 border-t border-border-subtle pt-5">
                      {linkedEvents.map((ev) => (
                        <AppLink
                          key={ev.slug}
                          href={`/events/${ev.slug}`}
                          className="flex items-center justify-between gap-3 rounded-2xl border border-border-subtle bg-surface-alt px-4 py-3 text-sm transition-colors hover:border-aasu-red/50"
                        >
                          <div>
                            <span className="text-[11px] font-semibold text-aasu-red">
                              Related Event · {ev.dateDisplay}
                            </span>
                            <p className="font-display font-bold text-ink">
                              {ev.title}
                            </p>
                          </div>
                          <ArrowUpRight className="h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                        </AppLink>
                      ))}
                      {linkedNews.map((article) => (
                        <AppLink
                          key={article.slug}
                          href={`/news/${article.slug}`}
                          className="flex items-center justify-between gap-3 rounded-2xl border border-border-subtle bg-surface-alt px-4 py-3 text-sm transition-colors hover:border-aasu-red/50"
                        >
                          <div>
                            <span className="text-[11px] font-semibold text-aasu-red">
                              Related News · {article.date}
                            </span>
                            <p className="font-display font-bold text-ink">
                              {article.title}
                            </p>
                          </div>
                          <ArrowUpRight className="h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                        </AppLink>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Related Publications */}
      {relatedPublications.length > 0 && (
        <section className="bg-surface-alt py-14 lg:py-16">
          <Container>
            <h2 className="font-display text-2xl font-bold text-ink">
              Related Publications
            </h2>
            <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPublications.map((item) => (
                <PublicationCard key={item.id} publication={item} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  )
}
