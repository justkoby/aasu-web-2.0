import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, Calendar, Images, MapPin } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { MediaLightbox } from '@/components/news/MediaLightbox'
import { AppLink } from '@/components/ui/AppLink'
import { getAlbumBySlug } from '@/data/newsMedia'
import { usePageMeta } from '@/hooks'

export function GalleryAlbumDetailPage() {
  const { albumSlug } = useParams<{ albumSlug: string }>()
  const album = getAlbumBySlug(albumSlug)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  usePageMeta(
    album ? `${album.title} | Photo Album` : 'Photo Album',
    album
      ? album.description
      : 'Curated AASU event photography album.',
  )

  if (!album) {
    return <Navigate to="/news/gallery" replace />
  }

  return (
    <>
      <InnerPageHero
        title={album.title}
        subtitle={album.description}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'News & Media', href: '/news' },
          { label: 'Media Gallery', href: '/news/gallery' },
          { label: album.title },
        ]}
        images={[
          {
            src: album.coverFull,
            alt: album.coverAlt,
          },
        ]}
      />

      <section className="bg-surface py-12 lg:py-16">
        <Container>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle pb-5 text-xs">
            <AppLink
              href="/news/gallery"
              className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ink hover:text-aasu-red"
            >
              <ArrowLeft className="h-4 w-4 text-aasu-red" aria-hidden="true" />
              <span>Back to Media Gallery</span>
            </AppLink>

            <div className="flex flex-wrap items-center gap-4 text-ink-secondary">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                {album.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                {album.location}
              </span>
              <span className="inline-flex items-center gap-1.5 font-display font-semibold text-ink">
                <Images className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                {album.assets.length} Photographs
              </span>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {album.assets.map((asset, idx) => (
              <figure
                key={asset.id}
                className="overflow-hidden rounded-2xl border border-border-subtle bg-surface-card"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  className="group block aspect-[4/3] w-full cursor-pointer overflow-hidden bg-[#101114] focus:outline-none focus:ring-2 focus:ring-aasu-red"
                >
                  <img
                    src={asset.thumbSrc}
                    alt={asset.alt}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </button>
                <figcaption className="px-4 py-3 text-xs text-ink-secondary">
                  <p className="font-medium text-ink">{asset.caption}</p>
                  <p className="mt-0.5 text-[11px] text-ink-muted">
                    Credit: {asset.credit}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {lightboxIndex !== null && (
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
