import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  Calendar,
  ExternalLink,
  FolderOpen,
  Images,
  MapPin,
  Play,
  Video,
} from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { NewsMediaRelatedNav } from '@/components/layout/NewsMediaRelatedNav'
import { MediaLightbox } from '@/components/news/MediaLightbox'
import { AppLink } from '@/components/ui/AppLink'
import { Reveal } from '@/components/ui'
import {
  EXTERNAL_GALLERY_ARCHIVES,
  getPublishedAlbums,
  VERIFIED_VIDEOS,
} from '@/data/newsMedia'
import { usePageMeta } from '@/hooks'
import { cn } from '@/lib/utils'

type GalleryView = 'albums' | 'photos' | 'videos'

const PHOTOS_PER_PAGE = 12

export function MediaGalleryPage() {
  usePageMeta(
    'Media Gallery',
    'Curated AASU photo gallery, verified video engagements and event albums from summits, workshops and continental programmes.',
  )

  const albums = getPublishedAlbums()
  const allPhotos = useMemo(() => albums.flatMap((a) => a.assets), [albums])

  const [activeView, setActiveView] = useState<GalleryView>('albums')
  const [photoLimit, setPhotoLimit] = useState(PHOTOS_PER_PAGE)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [loadedVideoId, setLoadedVideoId] = useState<string | null>(null)

  const visiblePhotos = allPhotos.slice(0, photoLimit)

  return (
    <>
      <InnerPageHero
        title="Media Gallery"
        subtitle="Curated photographs, programme albums and verified video sessions documenting African student leadership in action."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'News & Media', href: '/news' },
          { label: 'Media Gallery' },
        ]}
        images={[
          {
            src: '/images/web/leadershift-audience.webp',
            alt: 'African student leaders gathered at the AASU Leader-Shift Summit',
          },
          {
            src: '/images/web/beach-cleanup-group.webp',
            alt: 'AASU student volunteers after a coastal sustainability clean-up',
          },
        ]}
      />

      <section className="bg-surface py-12 lg:py-16">
        <Container>
          {/* Three Organised Views Switcher */}
          <div
            role="tablist"
            aria-label="Media Gallery views"
            className="flex flex-wrap gap-2.5 border-b border-border-subtle pb-6"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeView === 'albums'}
              onClick={() => setActiveView('albums')}
              className={cn(
                'inline-flex min-h-[42px] cursor-pointer items-center gap-2 rounded-full px-5 py-2 font-display text-xs font-semibold transition-colors',
                activeView === 'albums'
                  ? 'bg-aasu-red text-aasu-white'
                  : 'border border-border-subtle bg-surface-card text-ink hover:border-aasu-red hover:text-aasu-red',
              )}
            >
              <FolderOpen className="h-4 w-4" aria-hidden="true" />
              <span>Event &amp; Programme Albums ({albums.length})</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeView === 'photos'}
              onClick={() => setActiveView('photos')}
              className={cn(
                'inline-flex min-h-[42px] cursor-pointer items-center gap-2 rounded-full px-5 py-2 font-display text-xs font-semibold transition-colors',
                activeView === 'photos'
                  ? 'bg-aasu-red text-aasu-white'
                  : 'border border-border-subtle bg-surface-card text-ink hover:border-aasu-red hover:text-aasu-red',
              )}
            >
              <Images className="h-4 w-4" aria-hidden="true" />
              <span>Photo Gallery ({allPhotos.length})</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeView === 'videos'}
              onClick={() => setActiveView('videos')}
              className={cn(
                'inline-flex min-h-[42px] cursor-pointer items-center gap-2 rounded-full px-5 py-2 font-display text-xs font-semibold transition-colors',
                activeView === 'videos'
                  ? 'bg-aasu-red text-aasu-white'
                  : 'border border-border-subtle bg-surface-card text-ink hover:border-aasu-red hover:text-aasu-red',
              )}
            >
              <Video className="h-4 w-4" aria-hidden="true" />
              <span>Video Gallery ({VERIFIED_VIDEOS.length})</span>
            </button>
          </div>

          {/* VIEW 1: Event & Programme Albums */}
          {activeView === 'albums' && (
            <div className="mt-9 space-y-12">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {albums.map((album, idx) => (
                  <Reveal key={album.slug} delay={(idx % 3) * 0.04}>
                    <AppLink
                      href={`/news/gallery/${album.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border-subtle bg-surface-card transition-all duration-200 hover:-translate-y-0.5 hover:border-aasu-red/50 hover:shadow-md"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#101114]">
                        <img
                          src={album.coverThumb}
                          alt={album.coverAlt}
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                          loading="lazy"
                        />
                        <span className="absolute bottom-3 right-3 rounded-full bg-black/75 px-3 py-1 font-display text-[11px] font-semibold text-aasu-white backdrop-blur-xs">
                          {album.assets.length} Photos
                        </span>
                      </div>

                      <div className="flex flex-1 flex-col justify-between p-6">
                        <div>
                          <span className="font-display text-xs font-semibold text-aasu-red">
                            {album.category}
                          </span>
                          <h2 className="mt-1.5 font-display text-lg font-bold leading-snug text-ink group-hover:text-aasu-red">
                            {album.title}
                          </h2>
                          <p className="mt-2 text-xs leading-relaxed text-ink-secondary sm:text-sm">
                            {album.description}
                          </p>
                        </div>

                        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border-subtle pt-3.5 text-xs text-ink-muted">
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                            {album.date}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                            {album.location}
                          </span>
                        </div>
                      </div>
                    </AppLink>
                  </Reveal>
                ))}
              </div>

              {/* Verified External Google Drive Archives */}
              <div className="rounded-3xl border border-border-subtle bg-surface-alt p-6 sm:p-8">
                <h2 className="font-display text-xl font-bold text-ink">
                  Additional Verified External Photo Archives
                </h2>
                <p className="mt-1.5 text-sm text-ink-secondary">
                  Selected historical AASU event photo folders hosted on
                  official AASU cloud archives.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {EXTERNAL_GALLERY_ARCHIVES.map((item) => (
                    <a
                      key={item.title}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-3 rounded-2xl border border-border-subtle bg-surface-card p-4 transition-colors hover:border-aasu-red/50"
                    >
                      <div className="min-w-0">
                        <span className="text-[11px] font-semibold text-aasu-red">
                          {item.category} · {item.year}
                        </span>
                        <p className="mt-0.5 truncate font-display text-sm font-bold text-ink group-hover:text-aasu-red">
                          {item.title}
                        </p>
                      </div>
                      <ExternalLink
                        className="h-4 w-4 shrink-0 text-ink-muted group-hover:text-aasu-red"
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* VIEW 2: Photo Gallery (Optimised Thumbnails -> Fullscreen Lightbox) */}
          {activeView === 'photos' && (
            <div className="mt-9">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {visiblePhotos.map((asset, idx) => (
                  <button
                    key={asset.id}
                    type="button"
                    onClick={() => setLightboxIndex(idx)}
                    className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl border border-border-subtle bg-[#101114] text-left focus:outline-none focus:ring-2 focus:ring-aasu-red"
                  >
                    <img
                      src={asset.thumbSrc}
                      alt={asset.alt}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-aasu-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <p className="font-display text-xs font-semibold">
                        {asset.caption}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {photoLimit < allPhotos.length && (
                <div className="mt-9 text-center">
                  <button
                    type="button"
                    onClick={() => setPhotoLimit((prev) => prev + PHOTOS_PER_PAGE)}
                    className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full border border-border-subtle bg-surface-card px-6 py-2.5 font-display text-xs font-semibold text-ink transition-colors hover:border-aasu-red hover:bg-aasu-red hover:text-aasu-white"
                  >
                    <span>
                      Load More Photographs ({allPhotos.length - photoLimit}{' '}
                      remaining)
                    </span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* VIEW 3: Video Gallery (Lazy-Loaded Click-to-Play) */}
          {activeView === 'videos' && (
            <div className="mt-9 space-y-8">
              <div className="grid gap-6 lg:grid-cols-2">
                {VERIFIED_VIDEOS.map((video) => {
                  const isPlaying = loadedVideoId === video.id
                  return (
                    <article
                      key={video.id}
                      className="overflow-hidden rounded-3xl border border-border-subtle bg-surface-card"
                    >
                      <div className="aspect-video bg-[#101114]">
                        {isPlaying ? (
                          <iframe
                            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1`}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="h-full w-full border-0"
                          />
                        ) : (
                          <button
                            type="button"
                            onClick={() => setLoadedVideoId(video.id)}
                            className="group relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden"
                          >
                            <img
                              src={video.posterImage}
                              alt={video.posterAlt}
                              className="h-full w-full object-cover opacity-75 transition-transform duration-500 group-hover:scale-[1.03]"
                              loading="lazy"
                            />
                            <span className="absolute inline-flex items-center gap-2 rounded-full bg-aasu-red px-5 py-3 font-display text-xs font-semibold text-aasu-white shadow-xl">
                              <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                              <span>Play Video</span>
                            </span>
                          </button>
                        )}
                      </div>

                      <div className="p-6">
                        <span className="font-display text-xs font-semibold text-aasu-red">
                          {video.date} · {video.location}
                        </span>
                        <h2 className="mt-2 font-display text-lg font-bold text-ink">
                          {video.title}
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                          {video.description}
                        </p>
                        <a
                          href={video.watchUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-1.5 font-display text-xs font-semibold text-ink hover:text-aasu-red"
                        >
                          <span>Open on YouTube</span>
                          <ArrowUpRight className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                        </a>
                      </div>
                    </article>
                  )
                })}

                <div className="flex flex-col justify-center rounded-3xl border border-dashed border-border-subtle bg-surface-alt p-8">
                  <Video className="h-7 w-7 text-aasu-red" aria-hidden="true" />
                  <h2 className="mt-4 font-display text-xl font-bold text-ink">
                    Official Video Archive Expanding
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                    Additional summit recordings, keynote broadcasts and
                    interview highlights are published here only after formal
                    verification by the AASU Media &amp; Communications Desk.
                  </p>
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>

      {lightboxIndex !== null && (
        <MediaLightbox
          assets={visiblePhotos}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}

      <NewsMediaRelatedNav currentPath="/news/gallery" />
    </>
  )
}
