import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  BookOpen,
  Calendar,
  Images,
  MapPin,
  RotateCcw,
  Search,
  Video,
} from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { EventsRelatedNav } from '@/components/layout/EventsRelatedNav'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { AppLink } from '@/components/ui/AppLink'
import { Reveal } from '@/components/ui'
import { getPastEvents, type EventType } from '@/data/events'
import { usePageMeta } from '@/hooks'

export function PastEventsPage() {
  usePageMeta(
    'Past Events Archive',
    'Searchable archive of completed AASU events, conferences, summits and workshops with verified reports, photo albums and recordings.',
  )

  const pastEvents = getPastEvents()

  const [query, setQuery] = useState('')
  const [selectedYear, setSelectedYear] = useState('All')
  const [selectedType, setSelectedType] = useState<'All' | EventType>('All')
  const [selectedRegion, setSelectedRegion] = useState('All')
  const [selectedProgramme, setSelectedProgramme] = useState('All')

  const years = useMemo(
    () => ['All', ...Array.from(new Set(pastEvents.map((e) => e.year)))],
    [pastEvents],
  )
  const regions = useMemo(
    () => ['All', ...Array.from(new Set(pastEvents.map((e) => e.region)))],
    [pastEvents],
  )
  const programmes = useMemo(
    () => [
      'All',
      ...Array.from(new Set(pastEvents.map((e) => e.programmeTag))),
    ],
    [pastEvents],
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return pastEvents.filter((ev) => {
      if (selectedYear !== 'All' && ev.year !== selectedYear) return false
      if (selectedType !== 'All' && ev.eventType !== selectedType) return false
      if (selectedRegion !== 'All' && ev.region !== selectedRegion) return false
      if (
        selectedProgramme !== 'All' &&
        ev.programmeTag !== selectedProgramme
      ) {
        return false
      }
      if (q) {
        const hay =
          `${ev.title} ${ev.cityOrPlatform} ${ev.country} ${ev.programmeTag} ${ev.shortDescription}`.toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })
  }, [
    pastEvents,
    query,
    selectedProgramme,
    selectedRegion,
    selectedType,
    selectedYear,
  ])

  const hasFilters =
    query.trim().length > 0 ||
    selectedYear !== 'All' ||
    selectedType !== 'All' ||
    selectedRegion !== 'All' ||
    selectedProgramme !== 'All'

  return (
    <>
      <InnerPageHero
        title="Past Events Archive"
        subtitle="Completed AASU summits, conferences, dialogues and programmes with permanent links to verified reports, photographs and recordings."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Events', href: '/events' },
          { label: 'Past Events' },
        ]}
        images={[
          {
            src: '/images/web/nels-breakout.webp',
            alt: 'Participants during the NELS 3rd Strategic Partners Meeting in Ghana',
          },
        ]}
      />

      <section className="bg-surface py-12 lg:py-16">
        <Container>
          {/* Search & 4-Way Filter Controls */}
          <div className="rounded-3xl border border-border-subtle bg-surface-card p-5 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
              <div className="sm:col-span-2 lg:col-span-4">
                <label
                  htmlFor="past-events-search"
                  className="block font-display text-xs font-semibold text-ink-secondary"
                >
                  Search archive
                </label>
                <div className="relative mt-1.5">
                  <Search
                    className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
                    aria-hidden="true"
                  />
                  <input
                    id="past-events-search"
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Event, city, country or partner..."
                    className="min-h-[42px] w-full rounded-xl border border-border-subtle bg-surface py-2 pl-10 pr-4 text-sm text-ink placeholder:text-ink-muted focus:border-aasu-red focus:outline-none"
                  />
                </div>
              </div>

              <div className="lg:col-span-2">
                <label
                  htmlFor="past-year"
                  className="block font-display text-xs font-semibold text-ink-secondary"
                >
                  Year
                </label>
                <select
                  id="past-year"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="mt-1.5 min-h-[42px] w-full rounded-xl border border-border-subtle bg-surface px-3 py-2 text-sm text-ink focus:border-aasu-red focus:outline-none"
                >
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y === 'All' ? 'All Years' : y}
                    </option>
                  ))}
                </select>
              </div>

              <div className="lg:col-span-2">
                <label
                  htmlFor="past-type"
                  className="block font-display text-xs font-semibold text-ink-secondary"
                >
                  Event Type
                </label>
                <select
                  id="past-type"
                  value={selectedType}
                  onChange={(e) =>
                    setSelectedType(e.target.value as 'All' | EventType)
                  }
                  className="mt-1.5 min-h-[42px] w-full rounded-xl border border-border-subtle bg-surface px-3 py-2 text-sm text-ink focus:border-aasu-red focus:outline-none"
                >
                  <option value="All">All Types</option>
                  <option value="Meetings">Meetings</option>
                  <option value="Conferences">Conferences</option>
                  <option value="Programmes">Programmes</option>
                  <option value="Institutional Engagements">
                    Institutional Engagements
                  </option>
                </select>
              </div>

              <div className="lg:col-span-2">
                <label
                  htmlFor="past-region"
                  className="block font-display text-xs font-semibold text-ink-secondary"
                >
                  Region
                </label>
                <select
                  id="past-region"
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="mt-1.5 min-h-[42px] w-full rounded-xl border border-border-subtle bg-surface px-3 py-2 text-sm text-ink focus:border-aasu-red focus:outline-none"
                >
                  {regions.map((r) => (
                    <option key={r} value={r}>
                      {r === 'All' ? 'All Regions' : r}
                    </option>
                  ))}
                </select>
              </div>

              <div className="lg:col-span-2">
                <label
                  htmlFor="past-programme"
                  className="block font-display text-xs font-semibold text-ink-secondary"
                >
                  Programme
                </label>
                <select
                  id="past-programme"
                  value={selectedProgramme}
                  onChange={(e) => setSelectedProgramme(e.target.value)}
                  className="mt-1.5 min-h-[42px] w-full rounded-xl border border-border-subtle bg-surface px-3 py-2 text-sm text-ink focus:border-aasu-red focus:outline-none"
                >
                  {programmes.map((p) => (
                    <option key={p} value={p}>
                      {p === 'All' ? 'All Programmes' : p}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {hasFilters && (
              <div className="mt-4 flex justify-end border-t border-border-subtle pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setQuery('')
                    setSelectedYear('All')
                    setSelectedType('All')
                    setSelectedRegion('All')
                    setSelectedProgramme('All')
                  }}
                  className="inline-flex min-h-[36px] cursor-pointer items-center gap-1.5 rounded-full border border-border-subtle px-4 py-1.5 font-display text-xs font-semibold text-ink hover:border-aasu-red hover:text-aasu-red"
                >
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Reset Archive Filters</span>
                </button>
              </div>
            )}
          </div>

          <p aria-live="polite" className="mt-6 font-display text-sm font-semibold text-ink">
            Showing <span className="text-aasu-red">{filtered.length}</span>{' '}
            completed event{filtered.length === 1 ? '' : 's'}
          </p>

          {/* Compact Photography-Led Archive Grid */}
          {filtered.length === 0 ? (
            <div className="mt-6 rounded-3xl border border-border-subtle bg-surface-alt p-10 text-center">
              <p className="font-display text-lg font-bold text-ink">
                No archived events match your selection
              </p>
              <p className="mt-2 text-sm text-ink-secondary">
                Try clearing one or more filters to browse all completed AASU events.
              </p>
            </div>
          ) : (
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((ev) => (
                <Reveal key={ev.id}>
                  <AppLink
                    href={`/events/${ev.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border-subtle bg-surface-card transition-all duration-200 hover:-translate-y-0.5 hover:border-aasu-red/50 hover:shadow-md"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#101114]">
                      <img
                        src={ev.coverImage}
                        alt={ev.coverImageAlt}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                      {/* Related Media Badges */}
                      <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                        {ev.relatedAlbumSlug && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-black/75 px-2.5 py-1 text-[10px] font-semibold text-aasu-white backdrop-blur-xs">
                            <Images className="h-3 w-3 text-aasu-red" aria-hidden="true" />
                            Photos
                          </span>
                        )}
                        {ev.relatedVideoId && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-black/75 px-2.5 py-1 text-[10px] font-semibold text-aasu-white backdrop-blur-xs">
                            <Video className="h-3 w-3 text-aasu-red" aria-hidden="true" />
                            Video
                          </span>
                        )}
                        {ev.officialReports && ev.officialReports.length > 0 && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-black/75 px-2.5 py-1 text-[10px] font-semibold text-aasu-white backdrop-blur-xs">
                            <BookOpen className="h-3 w-3 text-aasu-red" aria-hidden="true" />
                            Reports
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-5">
                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                          <span className="font-display font-semibold text-aasu-red">
                            {ev.eventType}
                          </span>
                          <span className="inline-flex items-center gap-1 text-ink-muted">
                            <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                            {ev.dateDisplay}
                          </span>
                        </div>
                        <h2 className="mt-2 font-display text-base font-bold leading-snug text-ink group-hover:text-aasu-red">
                          {ev.title}
                        </h2>
                      </div>

                      <div className="mt-4 flex items-center justify-between border-t border-border-subtle pt-3 text-xs">
                        <span className="inline-flex items-center gap-1 truncate pr-2 text-ink-muted">
                          <MapPin className="h-3.5 w-3.5 shrink-0 text-aasu-red" aria-hidden="true" />
                          {ev.cityOrPlatform}, {ev.country}
                        </span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                      </div>
                    </div>
                  </AppLink>
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>

      <EventsRelatedNav currentPath="/events/past" />
    </>
  )
}
