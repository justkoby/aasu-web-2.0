import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  Calendar,
  Download,
  ExternalLink,
  MapPin,
  Mic,
  Play,
  Quote,
} from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { ShareBar } from '@/components/news/ShareBar'
import { AppLink } from '@/components/ui/AppLink'
import { getSpeechBySlug } from '@/data/newsMedia'
import { usePageMeta } from '@/hooks'

export function SpeechDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const speech = getSpeechBySlug(slug)
  const [playVideo, setPlayVideo] = useState(false)

  usePageMeta(
    speech ? speech.title : 'Speech & Address',
    speech
      ? speech.summary
      : 'Official speech and address archive of the All-Africa Students Union.',
  )

  if (!speech) {
    return <Navigate to="/news/speeches" replace />
  }

  return (
    <>
      <InnerPageHero
        title={speech.title}
        subtitle={`${speech.speaker} (${speech.positionAtTime}) at ${speech.event}.`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'News & Media', href: '/news' },
          { label: 'Speeches & Addresses', href: '/news/speeches' },
          { label: speech.kind },
        ]}
        images={[
          {
            src: speech.photograph,
            alt: speech.photographAlt,
          },
        ]}
      />

      <section className="bg-surface py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* Speaker & Event Metadata Card */}
            <div className="rounded-3xl border border-border-subtle bg-surface-card p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-subtle pb-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-aasu-red/10 px-3 py-1 font-display text-xs font-semibold text-aasu-red">
                  <Mic className="h-3.5 w-3.5" aria-hidden="true" />
                  {speech.kind}
                </span>
                <ShareBar title={speech.title} />
              </div>

              <dl className="mt-5 grid gap-4 text-xs sm:grid-cols-2">
                <div>
                  <dt className="text-ink-muted">Speaker</dt>
                  <dd className="mt-0.5 font-display text-sm font-bold text-ink">
                    {speech.speaker}
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Position at the Time</dt>
                  <dd className="mt-0.5 font-display text-sm font-semibold text-ink">
                    {speech.positionAtTime}
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Event</dt>
                  <dd className="mt-0.5 text-sm text-ink-secondary">
                    {speech.event}
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Date &amp; Location</dt>
                  <dd className="mt-0.5 flex flex-col gap-1 text-sm text-ink-secondary">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                      {speech.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                      {speech.location}
                    </span>
                  </dd>
                </div>
              </dl>

              {/* Verified Summary */}
              <div className="mt-7 border-t border-border-subtle pt-6">
                <h2 className="font-display text-lg font-bold text-ink">
                  Verified Summary
                </h2>
                <p className="mt-3 text-base leading-[1.8] text-ink-secondary">
                  {speech.summary}
                </p>
              </div>

              {/* Verified Direct Quote (Only where documented in AASU records) */}
              {speech.verifiedQuote && (
                <blockquote className="mt-6 rounded-2xl border-l-4 border-aasu-red bg-surface-alt p-5">
                  <Quote className="h-5 w-5 text-aasu-red" aria-hidden="true" />
                  <p className="mt-2 font-display text-base font-semibold leading-relaxed text-ink">
                    &ldquo;{speech.verifiedQuote}&rdquo;
                  </p>
                  <footer className="mt-2 text-xs text-ink-muted">
                    {speech.speaker}, {speech.date}
                  </footer>
                </blockquote>
              )}

              {/* Lazy-Loaded Click-to-Play Official Video Recording */}
              {speech.videoEmbedId && (
                <div className="mt-7">
                  <h2 className="font-display text-lg font-bold text-ink">
                    Official Session Recording
                  </h2>
                  <div className="mt-3 overflow-hidden rounded-2xl border border-border-subtle bg-[#101114]">
                    {playVideo ? (
                      <div className="aspect-video w-full">
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/${speech.videoEmbedId}?autoplay=1`}
                          title={speech.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="h-full w-full border-0"
                        />
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setPlayVideo(true)}
                        className="group relative flex aspect-video w-full cursor-pointer items-center justify-center overflow-hidden"
                      >
                        <img
                          src={speech.photograph}
                          alt={speech.photographAlt}
                          className="h-full w-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                        <span className="absolute inline-flex items-center gap-2.5 rounded-full bg-aasu-red px-5 py-3 font-display text-xs font-semibold text-aasu-white shadow-xl transition-transform group-hover:scale-105">
                          <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                          <span>Load Official Recording</span>
                        </span>
                      </button>
                    )}
                  </div>
                  {speech.videoUrl && (
                    <a
                      href={speech.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2.5 inline-flex items-center gap-1.5 font-display text-xs font-semibold text-ink-secondary hover:text-aasu-red"
                    >
                      <span>Watch on YouTube</span>
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              )}

              {/* Transcript Status */}
              <div className="mt-7 rounded-2xl border border-border-subtle bg-surface-alt p-5">
                <h2 className="font-display text-sm font-bold text-ink">
                  Transcript Status
                </h2>
                {speech.transcript && speech.transcript.length > 0 ? (
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-secondary">
                    {speech.transcript.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                ) : (
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-secondary">
                    {speech.transcriptStatusNote}
                  </p>
                )}
              </div>

              {/* Related Documents */}
              {speech.relatedDocuments && speech.relatedDocuments.length > 0 && (
                <div className="mt-6 border-t border-border-subtle pt-5">
                  <h2 className="font-display text-sm font-bold text-ink">
                    Related Documents
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {speech.relatedDocuments.map((doc) => (
                      <a
                        key={doc.title}
                        href={doc.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-surface-alt px-4 py-2 font-display text-xs font-semibold text-ink hover:border-aasu-red hover:text-aasu-red"
                      >
                        <Download className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                        <span>{doc.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8">
              <AppLink
                href="/news/speeches"
                className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ink hover:text-aasu-red"
              >
                <ArrowLeft className="h-4 w-4 text-aasu-red" aria-hidden="true" />
                <span>Back to Speeches &amp; Addresses</span>
              </AppLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
