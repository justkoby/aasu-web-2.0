import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Calendar,
  CalendarPlus,
  Clock,
  Download,
  ExternalLink,
  Globe,
  Images,
  MapPin,
  Mic,
  Play,
  Users,
} from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { MediaLightbox } from '@/components/news/MediaLightbox'
import { ShareBar } from '@/components/news/ShareBar'
import { AppLink } from '@/components/ui/AppLink'
import { Reveal } from '@/components/ui'
import { getEventBySlug } from '@/data/events'
import {
  getAlbumBySlug,
  getArticleBySlug,
  getSpeechBySlug,
  VERIFIED_VIDEOS,
} from '@/data/newsMedia'
import { usePageMeta } from '@/hooks'
import { downloadEventIcs } from '@/lib/ics'

export function EventDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const event = getEventBySlug(slug)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [playVideo, setPlayVideo] = useState(false)

  usePageMeta(
    event ? event.title : 'Event Profile',
    event
      ? event.shortDescription
      : 'Verified event profile from the All-Africa Students Union (AASU).',
  )

  if (!event) {
    return <Navigate to="/events" replace />
  }

  const album = event.relatedAlbumSlug
    ? getAlbumBySlug(event.relatedAlbumSlug)
    : undefined
  const relatedNews = (event.relatedNewsSlugs ?? [])
    .map((s) => getArticleBySlug(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a))
  const relatedSpeech = event.relatedSpeechSlug
    ? getSpeechBySlug(event.relatedSpeechSlug)
    : undefined
  const relatedVideo = event.relatedVideoId
    ? VERIFIED_VIDEOS.find((v) => v.id === event.relatedVideoId)
    : undefined

  return (
    <>
      <InnerPageHero
        title={event.title}
        subtitle={event.shortDescription}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Events', href: '/events' },
          { label: event.eventType },
        ]}
        images={[
          {
            src: event.coverImage,
            alt: event.coverImageAlt,
          },
        ]}
      />

      <section className="bg-surface py-12 lg:py-16">
        <Container>
          {/* Top Bar */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle pb-5">
            <AppLink
              href="/events"
              className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ink hover:text-aasu-red"
            >
              <ArrowLeft className="h-4 w-4 text-aasu-red" aria-hidden="true" />
              <span>Back to Events</span>
            </AppLink>
            <ShareBar title={event.title} />
          </div>

          <div className="grid gap-10 lg:grid-cols-12">
            {/* Main Editorial Column */}
            <div className="space-y-8 lg:col-span-8">
              <Reveal>
                <div className="rounded-3xl border border-border-subtle bg-surface-card p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-2.5 text-xs">
                    <span className="rounded-full bg-aasu-red/10 px-3 py-1 font-display font-semibold capitalize text-aasu-red">
                      {event.lifecycleStatus}
                    </span>
                    <span className="rounded-full border border-border-subtle bg-surface-alt px-3 py-1 font-medium text-ink-secondary">
                      {event.eventType}
                    </span>
                    <span className="rounded-full border border-border-subtle bg-surface-alt px-3 py-1 font-medium text-ink-secondary">
                      {event.format}
                    </span>
                  </div>

                  <h2 className="mt-5 font-display text-2xl font-bold text-ink">
                    Event Overview
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-[1.8] text-ink-secondary">
                    {event.overview.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Verified Speakers & Participants (Rendered only when approved data exists) */}
              {event.speakers && event.speakers.length > 0 && (
                <Reveal delay={0.04}>
                  <div className="rounded-3xl border border-border-subtle bg-surface-card p-6 sm:p-8">
                    <h2 className="font-display text-xl font-bold text-ink">
                      Verified Speakers &amp; Moderators
                    </h2>
                    <ul className="mt-4 divide-y divide-border-subtle border-y border-border-subtle">
                      {event.speakers.map((speaker) => (
                        <li
                          key={speaker.name}
                          className="flex flex-wrap items-baseline justify-between gap-2 py-3.5"
                        >
                          <span className="font-display text-sm font-bold text-ink">
                            {speaker.name}
                          </span>
                          <span className="text-xs text-ink-secondary">
                            {speaker.role}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}

              {/* Related Media: Photo Gallery, Video Recording, Reports & News */}
              {(album ||
                relatedVideo ||
                relatedSpeech ||
                relatedNews.length > 0 ||
                (event.officialReports && event.officialReports.length > 0)) && (
                <Reveal delay={0.06}>
                  <div className="space-y-6 rounded-3xl border border-border-subtle bg-surface-card p-6 sm:p-8">
                    <div>
                      <h2 className="font-display text-xl font-bold text-ink">
                        Related Media, Reports &amp; Coverage
                      </h2>
                      <p className="mt-1 text-sm text-ink-secondary">
                        Verified photographs, recordings, news dispatches and
                        official publications connected to this event.
                      </p>
                    </div>

                    {/* Curated Event Photo Gallery */}
                    {album && (
                      <div>
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="inline-flex items-center gap-2 font-display text-base font-bold text-ink">
                            <Images className="h-4 w-4 text-aasu-red" aria-hidden="true" />
                            <span>Event Photographs ({album.assets.length})</span>
                          </h3>
                          <AppLink
                            href={`/news/gallery/${album.slug}`}
                            className="inline-flex items-center gap-1 font-display text-xs font-semibold text-ink hover:text-aasu-red"
                          >
                            <span>Full Album</span>
                            <ArrowUpRight className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                          </AppLink>
                        </div>
                        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                          {album.assets.map((asset, idx) => (
                            <button
                              key={asset.id}
                              type="button"
                              onClick={() => setLightboxIndex(idx)}
                              className="group aspect-[4/3] cursor-pointer overflow-hidden rounded-xl border border-border-subtle bg-[#101114] focus:outline-none focus:ring-2 focus:ring-aasu-red"
                            >
                              <img
                                src={asset.thumbSrc}
                                alt={asset.alt}
                                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                                loading="lazy"
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Lazy-Loaded Official Video Recording */}
                    {relatedVideo && (
                      <div>
                        <h3 className="font-display text-base font-bold text-ink">
                          Official Session Recording
                        </h3>
                        <div className="mt-3 overflow-hidden rounded-2xl border border-border-subtle bg-[#101114]">
                          {playVideo ? (
                            <div className="aspect-video w-full">
                              <iframe
                                src={`https://www.youtube-nocookie.com/embed/${relatedVideo.youtubeId}?autoplay=1`}
                                title={relatedVideo.title}
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
                                src={relatedVideo.posterImage}
                                alt={relatedVideo.posterAlt}
                                className="h-full w-full object-cover opacity-75"
                                loading="lazy"
                              />
                              <span className="absolute inline-flex items-center gap-2 rounded-full bg-aasu-red px-5 py-2.5 font-display text-xs font-semibold text-aasu-white shadow-lg">
                                <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                                <span>Load Recording</span>
                              </span>
                            </button>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Related Speech */}
                    {relatedSpeech && (
                      <AppLink
                        href={`/news/speeches/${relatedSpeech.slug}`}
                        className="flex items-center justify-between gap-3 rounded-2xl border border-border-subtle bg-surface-alt p-4 transition-colors hover:border-aasu-red/50"
                      >
                        <div className="flex items-center gap-3">
                          <Mic className="h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                          <div>
                            <p className="font-display text-xs font-semibold text-aasu-red">
                              Related Address
                            </p>
                            <p className="font-display text-sm font-bold text-ink">
                              {relatedSpeech.title}
                            </p>
                          </div>
                        </div>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                      </AppLink>
                    )}

                    {/* Official Reports */}
                    {event.officialReports &&
                      event.officialReports.length > 0 && (
                        <div>
                          <h3 className="inline-flex items-center gap-2 font-display text-base font-bold text-ink">
                            <BookOpen className="h-4 w-4 text-aasu-red" aria-hidden="true" />
                            <span>Official Reports &amp; Publications</span>
                          </h3>
                          <div className="mt-3 space-y-2.5">
                            {event.officialReports.map((rep) => (
                              <a
                                key={rep.title}
                                href={rep.fileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between gap-3 rounded-2xl border border-border-subtle bg-surface-alt px-4 py-3 text-sm font-semibold text-ink transition-colors hover:border-aasu-red hover:text-aasu-red"
                              >
                                <span className="font-display">{rep.title}</span>
                                <Download className="h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                    {/* Related News Dispatches */}
                    {relatedNews.length > 0 && (
                      <div>
                        <h3 className="font-display text-base font-bold text-ink">
                          Related News Coverage
                        </h3>
                        <div className="mt-3 space-y-2.5">
                          {relatedNews.map((article) => (
                            <AppLink
                              key={article.slug}
                              href={`/news/${article.slug}`}
                              className="flex items-center justify-between gap-3 rounded-2xl border border-border-subtle bg-surface-alt px-4 py-3 transition-colors hover:border-aasu-red/50"
                            >
                              <div>
                                <span className="text-[11px] font-semibold text-aasu-red">
                                  {article.date}
                                </span>
                                <p className="font-display text-sm font-bold text-ink">
                                  {article.title}
                                </p>
                              </div>
                              <ArrowUpRight className="h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                            </AppLink>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </Reveal>
              )}
            </div>

            {/* Sidebar: Venue & Location Logistics + Add to Calendar + Partners */}
            <aside className="space-y-6 lg:col-span-4">
              <Reveal delay={0.04}>
                <div className="rounded-3xl border border-border-subtle bg-surface-card p-6">
                  <h2 className="font-display text-lg font-bold text-ink">
                    Date, Venue &amp; Logistics
                  </h2>

                  <dl className="mt-4 space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                      <div>
                        <dt className="text-xs text-ink-muted">Date</dt>
                        <dd className="font-display font-semibold text-ink">
                          {event.dateDisplay}
                        </dd>
                      </div>
                    </div>

                    {event.timeDisplay && (
                      <div className="flex items-start gap-3">
                        <Clock className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                        <div>
                          <dt className="text-xs text-ink-muted">
                            Time &amp; Timezone
                          </dt>
                          <dd className="font-display font-semibold text-ink">
                            {event.timeDisplay} ({event.timezone})
                          </dd>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                      <div>
                        <dt className="text-xs text-ink-muted">Venue</dt>
                        <dd className="font-display font-semibold text-ink">
                          {event.venue}
                        </dd>
                        <dd className="text-xs text-ink-secondary">
                          {event.cityOrPlatform}, {event.country}
                        </dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Globe className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                      <div>
                        <dt className="text-xs text-ink-muted">
                          Format &amp; Region
                        </dt>
                        <dd className="font-display font-semibold text-ink">
                          {event.format} · {event.region}
                        </dd>
                      </div>
                    </div>
                  </dl>

                  {/* Add to Calendar (.ics) Action */}
                  <div className="mt-6 space-y-2.5 border-t border-border-subtle pt-5">
                    <button
                      type="button"
                      onClick={() =>
                        downloadEventIcs(
                          {
                            id: event.id,
                            title: event.title,
                            description: event.shortDescription,
                            location: `${event.venue}, ${event.cityOrPlatform}, ${event.country}`,
                            startIso: event.startIso,
                            endIso: event.endIso,
                          },
                          event.slug,
                        )
                      }
                      className="inline-flex min-h-[42px] w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-aasu-red px-5 py-2.5 font-display text-xs font-semibold text-aasu-white transition-colors hover:bg-aasu-red-dark"
                    >
                      <CalendarPlus className="h-4 w-4" aria-hidden="true" />
                      <span>Add to Calendar (.ics)</span>
                    </button>

                    {event.lifecycleStatus === 'upcoming' &&
                    event.registrationUrl ? (
                      <a
                        href={event.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[42px] w-full items-center justify-center gap-2 rounded-full border border-border-subtle bg-surface-alt px-5 py-2.5 font-display text-xs font-semibold text-ink hover:border-aasu-red hover:text-aasu-red"
                      >
                        <span>Official Registration</span>
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    ) : (
                      event.registrationNote && (
                        <p className="rounded-xl border border-border-subtle bg-surface-alt px-3.5 py-2.5 text-xs text-ink-secondary">
                          {event.registrationNote}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </Reveal>

              {/* Organisers & Institutional Partners */}
              <Reveal delay={0.08}>
                <div className="rounded-3xl border border-border-subtle bg-surface-card p-6">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-aasu-red" aria-hidden="true" />
                    <h2 className="font-display text-base font-bold text-ink">
                      Organisers &amp; Partners
                    </h2>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-ink-secondary">
                    {event.organisersAndPartners.map((partner) => (
                      <li key={partner} className="flex items-start gap-2">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aasu-red"
                          aria-hidden="true"
                        />
                        <span>{partner}</span>
                      </li>
                    ))}
                  </ul>

                  {event.prioritySlug && (
                    <div className="mt-5 border-t border-border-subtle pt-4">
                      <AppLink
                        href={`/what-we-do/strategic-priorities/${event.prioritySlug}`}
                        className="inline-flex items-center gap-1.5 font-display text-xs font-semibold text-ink hover:text-aasu-red"
                      >
                        <span>Related Strategic Priority</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                      </AppLink>
                    </div>
                  )}
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </section>

      {album && lightboxIndex !== null && (
        <MediaLightbox
          assets={album.assets}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  )
}
