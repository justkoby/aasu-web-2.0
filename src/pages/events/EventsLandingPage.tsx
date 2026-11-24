import { useMemo, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  CalendarDays,
  CalendarPlus,
  Clock,
  List,
  MapPin,
  RotateCcw,
} from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { EventCalendarView } from '@/components/events/EventCalendarView'
import { AppLink } from '@/components/ui/AppLink'
import { Button, Reveal, SectionHeading } from '@/components/ui'
import {
  EVENTS_NAV_CARDS,
  getMajorSummits,
  getPublishedEvents,
  getUpcomingEvents,
  type EventType,
} from '@/data/events'
import { usePageMeta } from '@/hooks'
import { downloadEventIcs } from '@/lib/ics'
import { cn } from '@/lib/utils'

const EVENT_TYPES: ('All' | EventType)[] = [
  'All',
  'Meetings',
  'Conferences',
  'Programmes',
  'Institutional Engagements',
]

export function EventsLandingPage() {
  usePageMeta(
    'Events & Calendar',
    'Explore AASU meetings, conferences, summits, programmes and institutional engagements across Africa and internationally.',
  )

  const allEvents = getPublishedEvents()
  const upcomingEvents = getUpcomingEvents()
  const featuredUpcoming = upcomingEvents[0]
  const majorSummits = getMajorSummits().slice(0, 3)

  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list')
  const [selectedType, setSelectedType] = useState<'All' | EventType>('All')
  const [selectedRegion, setSelectedRegion] = useState<string>('All')
  const [selectedYear, setSelectedYear] = useState<string>('All')

  const regions = useMemo(
    () => ['All', ...Array.from(new Set(allEvents.map((e) => e.region)))],
    [allEvents],
  )
  const years = useMemo(
    () => ['All', ...Array.from(new Set(allEvents.map((e) => e.year)))],
    [allEvents],
  )

  const filteredEvents = useMemo(() => {
    return allEvents.filter((ev) => {
      if (selectedType !== 'All' && ev.eventType !== selectedType) return false
      if (selectedRegion !== 'All' && ev.region !== selectedRegion) return false
      if (selectedYear !== 'All' && ev.year !== selectedYear) return false
      return true
    })
  }, [allEvents, selectedRegion, selectedType, selectedYear])

  const hasFilters =
    selectedType !== 'All' ||
    selectedRegion !== 'All' ||
    selectedYear !== 'All'

  return (
    <>
      <InnerPageHero
        title="Events"
        subtitle="Continental summits, conferences, policy dialogues, training programmes and institutional convenings led by the All-Africa Students Union."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Events' },
        ]}
        images={[
          {
            src: '/images/web/cfs-panel.webp',
            alt: 'Speakers and student delegates at the AASU Climate Forward Summit',
          },
          {
            src: '/images/web/inauguration-2026.webp',
            alt: 'AASU 2026 Honours and Inauguration Ceremony in Accra',
          },
        ]}
      />

      {/* Quick Section Navigation Strip */}
      <section className="border-b border-border-subtle bg-surface-alt py-5">
        <Container>
          <nav
            aria-label="Events sections"
            className="flex flex-wrap items-center gap-2.5"
          >
            {EVENTS_NAV_CARDS.map((item) => {
              const isCurrent = item.href === '/events'
              return (
                <AppLink
                  key={item.id}
                  href={item.href}
                  className={cn(
                    'inline-flex min-h-[38px] items-center rounded-full px-4 py-1.5 font-display text-xs font-semibold transition-colors',
                    isCurrent
                      ? 'bg-aasu-red text-aasu-white'
                      : 'border border-border-subtle bg-surface-card text-ink hover:border-aasu-red hover:text-aasu-red',
                  )}
                >
                  {item.title}
                </AppLink>
              )
            })}
          </nav>
        </Container>
      </section>

      {/* 1. Upcoming Events Section (Honest Empty State if None Verified) */}
      <section className="border-b border-border-subtle bg-surface py-14 lg:py-18">
        <Container>
          <Reveal>
            <SectionHeading
              title="Upcoming Events"
              description="Verified upcoming AASU convenings, meetings and programmes. Historical events are never displayed as upcoming."
            />
          </Reveal>

          {featuredUpcoming ? (
            <div className="mt-8 grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <article className="overflow-hidden rounded-3xl border border-border-subtle bg-surface-card">
                  <div className="aspect-[16/9] overflow-hidden bg-[#101114]">
                    <img
                      src={featuredUpcoming.coverImage}
                      alt={featuredUpcoming.coverImageAlt}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <span className="rounded-full bg-aasu-red/10 px-3 py-1 font-display text-xs font-semibold text-aasu-red">
                      {featuredUpcoming.eventType}
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-bold text-ink">
                      {featuredUpcoming.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary">
                      {featuredUpcoming.shortDescription}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <Button
                        href={`/events/${featuredUpcoming.slug}`}
                        variant="primary"
                        size="sm"
                      >
                        <span>View Event Details</span>
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Button>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          ) : (
            <Reveal delay={0.05} className="mt-8">
              <div className="rounded-3xl border border-border-subtle bg-surface-alt p-7 sm:p-9">
                <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-8">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-aasu-red/10 text-aasu-red">
                      <Calendar className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold text-ink sm:text-2xl">
                      No Upcoming Events Currently Scheduled in the Public
                      Calendar
                    </h3>
                    <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-ink-secondary">
                      All verified 2025-2026 events in AASU&apos;s public
                      register have concluded. New continental summits,
                      dialogues and registration links are published here as
                      soon as dates and venues are officially confirmed by the
                      Secretariat.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
                    <Button
                      href="/events/summits-conferences"
                      variant="primary"
                      size="md"
                    >
                      <span>Major Summits</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Button>
                    <Button href="/events/past" variant="outline" size="md">
                      <span>Past Events Archive</span>
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          )}
        </Container>
      </section>

      {/* 2. Interactive Events Calendar & Directory (List / Calendar Switch) */}
      <section className="border-b border-border-subtle bg-surface-alt py-14 lg:py-18">
        <Container>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeading
              title="Events Calendar & Directory"
              description="Filter verified AASU events by category, location and year, switch between list and calendar views, or export any event as an .ics file."
            />

            {/* Accessible View Toggle */}
            <div
              role="group"
              aria-label="Choose events display mode"
              className="inline-flex shrink-0 self-start rounded-full border border-border-subtle bg-surface-card p-1"
            >
              <button
                type="button"
                onClick={() => setViewMode('list')}
                aria-pressed={viewMode === 'list'}
                className={cn(
                  'inline-flex min-h-[36px] cursor-pointer items-center gap-1.5 rounded-full px-4 py-1.5 font-display text-xs font-semibold transition-colors',
                  viewMode === 'list'
                    ? 'bg-aasu-red text-aasu-white'
                    : 'text-ink-secondary hover:text-ink',
                )}
              >
                <List className="h-3.5 w-3.5" aria-hidden="true" />
                <span>List View</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('calendar')}
                aria-pressed={viewMode === 'calendar'}
                className={cn(
                  'inline-flex min-h-[36px] cursor-pointer items-center gap-1.5 rounded-full px-4 py-1.5 font-display text-xs font-semibold transition-colors',
                  viewMode === 'calendar'
                    ? 'bg-aasu-red text-aasu-white'
                    : 'text-ink-secondary hover:text-ink',
                )}
              >
                <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Calendar View</span>
              </button>
            </div>
          </div>

          {/* Filters Toolbar */}
          <div className="mt-7 rounded-3xl border border-border-subtle bg-surface-card p-5">
            <div className="flex flex-wrap items-center gap-2">
              {EVENT_TYPES.map((type) => {
                const active = selectedType === type
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    aria-pressed={active}
                    className={cn(
                      'min-h-[36px] cursor-pointer rounded-full px-3.5 py-1.5 font-display text-xs font-medium transition-colors',
                      active
                        ? 'bg-aasu-red text-aasu-white'
                        : 'border border-border-subtle bg-surface text-ink-secondary hover:border-aasu-red/50 hover:text-ink',
                    )}
                  >
                    {type}
                  </button>
                )
              })}
            </div>

            <div className="mt-4 grid gap-3 border-t border-border-subtle pt-4 sm:grid-cols-3">
              <div>
                <label
                  htmlFor="events-region-filter"
                  className="block font-display text-xs font-semibold text-ink-secondary"
                >
                  Region / Format
                </label>
                <select
                  id="events-region-filter"
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="mt-1 min-h-[42px] w-full rounded-xl border border-border-subtle bg-surface px-3 py-2 text-sm text-ink focus:border-aasu-red focus:outline-none"
                >
                  {regions.map((region) => (
                    <option key={region} value={region}>
                      {region === 'All' ? 'All Locations & Formats' : region}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="events-year-filter"
                  className="block font-display text-xs font-semibold text-ink-secondary"
                >
                  Year
                </label>
                <select
                  id="events-year-filter"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="mt-1 min-h-[42px] w-full rounded-xl border border-border-subtle bg-surface px-3 py-2 text-sm text-ink focus:border-aasu-red focus:outline-none"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year === 'All' ? 'All Years' : year}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                {hasFilters && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedType('All')
                      setSelectedRegion('All')
                      setSelectedYear('All')
                    }}
                    className="inline-flex min-h-[42px] w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-border-subtle bg-surface px-4 font-display text-xs font-semibold text-ink hover:border-aasu-red hover:text-aasu-red"
                  >
                    <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Reset Filters</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          <p aria-live="polite" className="mt-5 font-display text-sm font-semibold text-ink">
            Showing <span className="text-aasu-red">{filteredEvents.length}</span>{' '}
            verified event{filteredEvents.length === 1 ? '' : 's'}
          </p>

          {/* Calendar or List Output */}
          <div className="mt-6">
            {viewMode === 'calendar' ? (
              <EventCalendarView events={filteredEvents} />
            ) : filteredEvents.length === 0 ? (
              <div className="rounded-3xl border border-border-subtle bg-surface-card p-10 text-center">
                <p className="font-display text-lg font-bold text-ink">
                  No verified events match these filters
                </p>
                <p className="mt-2 text-sm text-ink-secondary">
                  Reset your filters to view all recorded AASU events.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredEvents.map((ev) => (
                  <Reveal key={ev.id}>
                    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border-subtle bg-surface-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                      <AppLink
                        href={`/events/${ev.slug}`}
                        className="relative block aspect-[16/10] overflow-hidden bg-[#101114]"
                      >
                        <img
                          src={ev.coverImage}
                          alt={ev.coverImageAlt}
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                        <span className="absolute left-3 top-3 rounded-full bg-black/75 px-3 py-1 font-display text-[11px] font-semibold capitalize text-aasu-white backdrop-blur-xs">
                          {ev.lifecycleStatus}
                        </span>
                      </AppLink>

                      <div className="flex flex-1 flex-col justify-between p-5">
                        <div>
                          <span className="font-display text-xs font-semibold text-aasu-red">
                            {ev.eventType}
                          </span>
                          <h3 className="mt-1.5 font-display text-lg font-bold leading-snug text-ink group-hover:text-aasu-red">
                            <AppLink href={`/events/${ev.slug}`}>
                              {ev.title}
                            </AppLink>
                          </h3>

                          <div className="mt-3 space-y-1.5 text-xs text-ink-secondary">
                            <p className="flex items-center gap-1.5">
                              <Clock className="h-3.5 w-3.5 shrink-0 text-aasu-red" aria-hidden="true" />
                              <span>
                                {ev.dateDisplay} ({ev.timezone})
                              </span>
                            </p>
                            <p className="flex items-center gap-1.5">
                              <MapPin className="h-3.5 w-3.5 shrink-0 text-aasu-red" aria-hidden="true" />
                              <span className="truncate">
                                {ev.venue}, {ev.cityOrPlatform}
                              </span>
                            </p>
                          </div>

                          <p className="mt-3 line-clamp-2 text-sm text-ink-secondary">
                            {ev.shortDescription}
                          </p>
                        </div>

                        <div className="mt-5 flex items-center justify-between gap-2 border-t border-border-subtle pt-3.5 text-xs">
                          <button
                            type="button"
                            onClick={() =>
                              downloadEventIcs(
                                {
                                  id: ev.id,
                                  title: ev.title,
                                  description: ev.shortDescription,
                                  location: `${ev.venue}, ${ev.cityOrPlatform}`,
                                  startIso: ev.startIso,
                                  endIso: ev.endIso,
                                },
                                ev.slug,
                              )
                            }
                            className="inline-flex cursor-pointer items-center gap-1 font-display font-semibold text-ink-secondary hover:text-aasu-red"
                          >
                            <CalendarPlus className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                            <span>Add .ics</span>
                          </button>

                          <AppLink
                            href={`/events/${ev.slug}`}
                            className="inline-flex items-center gap-1 font-display font-semibold text-ink hover:text-aasu-red"
                          >
                            <span>Event Profile</span>
                            <ArrowUpRight className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                          </AppLink>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* 3. Major Summits Spotlight */}
      <section className="bg-surface py-14 lg:py-18">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              title="Major Summits & Conferences"
              description="Explore AASU's flagship summits, continental conferences and international higher education forums."
            />
            <AppLink
              href="/events/summits-conferences"
              className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-ink hover:text-aasu-red"
            >
              <span>All Summits &amp; Conferences</span>
              <ArrowUpRight className="h-4 w-4 text-aasu-red" aria-hidden="true" />
            </AppLink>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {majorSummits.map((summit) => (
              <AppLink
                key={summit.id}
                href={`/events/${summit.slug}`}
                className="group relative flex min-h-[290px] flex-col justify-end overflow-hidden rounded-3xl bg-[#101114] text-aasu-white"
              >
                <img
                  src={summit.coverImage}
                  alt={summit.coverImageAlt}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#101114]/95 via-[#101114]/50 to-[#101114]/15"
                  aria-hidden="true"
                />
                <div className="relative z-10 p-6">
                  <span className="font-display text-xs font-semibold text-aasu-red">
                    {summit.summitClassification} · {summit.dateDisplay}
                  </span>
                  <h3 className="mt-1.5 font-display text-xl font-bold leading-snug text-aasu-white">
                    {summit.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-neutral-300">
                    {summit.cityOrPlatform}, {summit.country}
                  </p>
                </div>
              </AppLink>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
