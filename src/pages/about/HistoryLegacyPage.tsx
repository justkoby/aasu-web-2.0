import { useState } from 'react'
import { Clock, MapPin } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { RelatedPagesNav } from '@/components/layout/RelatedPagesNav'
import { Reveal, SectionHeading } from '@/components/ui'
import {
  ARCHIVE_GALLERY,
  HISTORICAL_MILESTONES,
  PAST_LEADERSHIP_RECORDS,
} from '@/data/about'
import type { ArchivePhotoItem, HistoricalMilestone } from '@/data/about'
import { cn } from '@/lib/utils'

const TIMELINE_FILTERS: ('All' | HistoricalMilestone['period'])[] = [
  'All',
  '1970s',
  '1980s-1990s',
  '2000s-Present',
]

const ARCHIVE_FILTERS: ('All' | ArchivePhotoItem['period'])[] = [
  'All',
  'Legacy Archive',
  'Continental Dialogues',
  'Recent Engagements',
]

export function HistoryLegacyPage() {
  const [timelinePeriod, setTimelinePeriod] =
    useState<'All' | HistoricalMilestone['period']>('All')
  const [archivePeriod, setArchivePeriod] =
    useState<'All' | ArchivePhotoItem['period']>('All')

  const visibleMilestones =
    timelinePeriod === 'All'
      ? HISTORICAL_MILESTONES
      : HISTORICAL_MILESTONES.filter((m) => m.period === timelinePeriod)

  const visiblePhotos =
    archivePeriod === 'All'
      ? ARCHIVE_GALLERY
      : ARCHIVE_GALLERY.filter((p) => p.period === archivePeriod)

  return (
    <>
      <InnerPageHero
        title="History & Legacy"
        subtitle="Founded in Kumasi, Ghana in 1972, AASU has championed student solidarity, educational freedom and Pan-African unity for more than five decades."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About AASU', href: '/about' },
          { label: 'History & Legacy' },
        ]}
        images={[
          {
            src: '/images/web/students-letters.webp',
            alt: 'African students holding large red AASU letters during a student solidarity gathering',
          },
        ]}
      />

      {/* A. Founding and Historical Background */}
      <section className="border-b border-border-subtle bg-surface py-16 lg:py-22">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <SectionHeading title="Born in Kumasi, Built for Africa." />
              <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-secondary">
                <p>
                  The All-Africa Students Union emerged in 1972 at the
                  University of Science and Technology (now Kwame Nkrumah
                  University of Science and Technology, KNUST) in Kumasi, Ghana,
                  at a pivotal moment when African students were deeply engaged
                  in struggles for liberation, justice and continental unity.
                </p>
                <p>
                  From fewer than ten founding delegations to a continental
                  network spanning North, West, Central, East and Southern
                  Africa, AASU has remained steadfast in defending student
                  rights, strengthening public education and advancing
                  Pan-African solidarity.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-6">
              <figure className="overflow-hidden rounded-3xl border border-border-subtle bg-surface-alt">
                <img
                  src="/images/web/inauguration-2026.webp"
                  alt="All-Africa Students Union Executive leadership at the 2026 Inauguration and Honours Ceremony"
                  className="aspect-[16/10] w-full object-cover object-top"
                  loading="lazy"
                />
                <figcaption className="px-5 py-3.5 text-xs text-ink-secondary">
                  Connecting five decades of student leadership from Kumasi 1972
                  to the 2026-2029 administration
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* B. Interactive Institutional Timeline */}
      <section className="border-b border-border-subtle bg-surface-alt py-16 lg:py-22">
        <Container>
          <Reveal>
            <SectionHeading
              title="Institutional Milestones"
              description="Key verified Congresses and turning points in AASU's continental journey since 1972."
            />
          </Reveal>

          <div
            role="tablist"
            aria-label="Filter historical timeline by period"
            className="mt-8 flex flex-wrap gap-2"
          >
            {TIMELINE_FILTERS.map((period) => (
              <button
                key={period}
                type="button"
                role="tab"
                aria-selected={timelinePeriod === period}
                onClick={() => setTimelinePeriod(period)}
                className={cn(
                  'rounded-full px-4 py-2 font-display text-xs font-medium transition-colors cursor-pointer',
                  timelinePeriod === period
                    ? 'bg-aasu-red text-aasu-white'
                    : 'border border-border-subtle bg-surface-card text-ink hover:border-ink/40',
                )}
              >
                {period}
              </button>
            ))}
          </div>

          <div className="mt-10 space-y-5 border-l-2 border-aasu-red/30 pl-6 sm:pl-8">
            {visibleMilestones.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.04}>
                <article className="relative rounded-2xl border border-border-subtle bg-surface-card p-6 sm:p-7">
                  <span
                    className="absolute -left-[33px] top-7 h-3.5 w-3.5 rounded-full border-2 border-aasu-red bg-surface sm:-left-[41px]"
                    aria-hidden="true"
                  />
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="rounded-full bg-aasu-red px-3 py-1 font-display font-semibold text-aasu-white">
                      {item.year}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-medium text-ink-muted">
                      <MapPin className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                      {item.location}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary sm:text-base">
                    {item.summary}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* C. Contribution to African Student Movements */}
      <section className="border-b border-border-subtle bg-[#101114] py-16 text-aasu-white lg:py-20">
        <Container>
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold leading-tight text-aasu-white sm:text-4xl">
              June 16: African Students&apos; Day and Liberation Solidarity
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#B7BBC3]">
              At its Sixth Congress in Addis Ababa in 1982, AASU declared June
              16 as African Students&apos; Day in remembrance of the courageous
              students of the 1976 Soweto Uprising. Across liberation movements
              and contemporary policy spaces, AASU continues to uphold the
              conviction that African students are active builders of justice,
              democracy and educational transformation.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* D. Past Leadership & Historical Photo Archive */}
      <section className="bg-surface py-16 lg:py-22">
        <Container>
          <Reveal>
            <SectionHeading
              title="Historical Archives & Past Leadership"
              description="Browse curated AASU photography by period and view verified archive placeholders for past leadership records."
            />
          </Reveal>

          {/* Archive Filter */}
          <div
            role="tablist"
            aria-label="Filter archive photography by period"
            className="mt-8 flex flex-wrap gap-2"
          >
            {ARCHIVE_FILTERS.map((period) => (
              <button
                key={period}
                type="button"
                role="tab"
                aria-selected={archivePeriod === period}
                onClick={() => setArchivePeriod(period)}
                className={cn(
                  'rounded-full px-4 py-2 font-display text-xs font-medium transition-colors cursor-pointer',
                  archivePeriod === period
                    ? 'bg-aasu-red text-aasu-white'
                    : 'border border-border-subtle bg-surface-alt text-ink hover:border-ink/40',
                )}
              >
                {period}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visiblePhotos.map((photo) => (
              <figure
                key={photo.id}
                className="overflow-hidden rounded-2xl border border-border-subtle bg-surface-card"
              >
                <div className="aspect-[16/10] overflow-hidden bg-[#101114]">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <figcaption className="p-4">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-semibold uppercase tracking-[0.12em] text-aasu-red">
                      {photo.period}
                    </span>
                    <span className="text-ink-muted">{photo.year}</span>
                  </div>
                  <p className="mt-1.5 text-sm font-medium text-ink">
                    {photo.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Past Leadership Archive Placeholders */}
          <div className="mt-14 border-t border-border-subtle pt-12">
            <h3 className="font-display text-2xl font-bold text-ink">
              Past Leadership Records
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-ink-secondary">
              Verified records and archival portraits of past AASU leaders are
              being compiled so only historically confirmed names and terms are
              published.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {PAST_LEADERSHIP_RECORDS.map((record) => (
                <article
                  key={record.id}
                  className="rounded-2xl border border-dashed border-border-subtle bg-surface-alt p-6"
                >
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-aasu-red">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{record.period}</span>
                  </span>
                  <h4 className="mt-3 font-display text-lg font-bold text-ink">
                    {record.name}
                  </h4>
                  <p className="mt-1 text-xs font-medium text-ink-muted">
                    {record.position}
                  </p>
                  {record.placeholderNote && (
                    <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                      {record.placeholderNote}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <RelatedPagesNav currentPath="/about/history-legacy" />
    </>
  )
}
