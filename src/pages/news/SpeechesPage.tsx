import { ArrowUpRight, Calendar, MapPin, Mic, PlayCircle } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { NewsMediaRelatedNav } from '@/components/layout/NewsMediaRelatedNav'
import { AppLink } from '@/components/ui/AppLink'
import { Reveal } from '@/components/ui'
import { getPublishedSpeeches } from '@/data/newsMedia'
import { usePageMeta } from '@/hooks'

export function SpeechesPage() {
  usePageMeta(
    'Speeches & Addresses',
    'Verified official speeches, addresses, policy remarks and institutional tributes delivered by AASU leadership.',
  )

  const speeches = getPublishedSpeeches()

  return (
    <>
      <InnerPageHero
        title="Speeches & Addresses"
        subtitle="Official addresses, high-level policy remarks and institutional tributes delivered by AASU leadership across continental and global platforms."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'News & Media', href: '/news' },
          { label: 'Speeches & Addresses' },
        ]}
        images={[
          {
            src: '/images/web/hero-asw.webp',
            alt: 'AASU leadership addressing a continental forum',
          },
        ]}
      />

      <section className="bg-surface py-14 lg:py-18">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {speeches.map((speech, idx) => (
              <Reveal key={speech.slug} delay={idx * 0.05}>
                <AppLink
                  href={`/news/speeches/${speech.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border-subtle bg-surface-card transition-all duration-200 hover:-translate-y-0.5 hover:border-aasu-red/50 hover:shadow-md"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-[#101114]">
                    <img
                      src={speech.photograph}
                      alt={speech.photographAlt}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-aasu-red/10 px-3 py-1 font-display font-semibold text-aasu-red">
                          <Mic className="h-3.5 w-3.5" aria-hidden="true" />
                          {speech.kind}
                        </span>
                        <span className="inline-flex items-center gap-1 text-ink-muted">
                          <Calendar className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                          {speech.date}
                        </span>
                      </div>

                      <h2 className="mt-3.5 font-display text-xl font-bold leading-snug text-ink transition-colors group-hover:text-aasu-red">
                        {speech.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                        {speech.summary}
                      </p>
                    </div>

                    <div className="mt-5 space-y-2 border-t border-border-subtle pt-4 text-xs">
                      <p className="font-display font-semibold text-ink">
                        {speech.speaker} ·{' '}
                        <span className="font-normal text-ink-secondary">
                          {speech.positionAtTime}
                        </span>
                      </p>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1 text-ink-muted">
                          <MapPin className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                          {speech.location}
                        </span>
                        <span className="inline-flex items-center gap-1 font-display font-semibold text-ink group-hover:text-aasu-red">
                          {speech.videoEmbedId && (
                            <PlayCircle className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                          )}
                          <span>View Record</span>
                          <ArrowUpRight className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </div>
                </AppLink>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-border-subtle bg-surface-alt p-5 text-xs leading-relaxed text-ink-secondary">
            <strong className="font-display font-semibold text-ink">
              Archival Integrity Notice:
            </strong>{' '}
            AASU publishes only verified speech summaries, documented quotations
            and official recordings. Full verbatim transcripts are added only
            once formally released by the Office of the Secretary-General.
          </div>
        </Container>
      </section>

      <NewsMediaRelatedNav currentPath="/news/speeches" />
    </>
  )
}
