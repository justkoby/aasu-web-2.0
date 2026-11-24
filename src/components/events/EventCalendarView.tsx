import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  CalendarPlus,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
} from 'lucide-react'
import { AppLink } from '@/components/ui/AppLink'
import type { EventRecord } from '@/data/events'
import { downloadEventIcs } from '@/lib/ics'
import { cn } from '@/lib/utils'

interface EventCalendarViewProps {
  events: EventRecord[]
}

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function formatMonthHeading(year: number, monthIndex: number): string {
  return new Date(Date.UTC(year, monthIndex, 1)).toLocaleDateString('en-GB', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export function EventCalendarView({ events }: EventCalendarViewProps) {
  const activeMonths = useMemo(() => {
    return Array.from(new Set(events.map((e) => e.monthKey))).sort((a, b) =>
      b.localeCompare(a),
    )
  }, [events])

  const initialKey = activeMonths[0] ?? '2026-10'
  const [currentMonthKey, setCurrentMonthKey] = useState(initialKey)

  const [yearNum, monthNum] = currentMonthKey.split('-').map(Number)
  const monthIndex = monthNum - 1

  const shiftMonth = (delta: number) => {
    const next = new Date(Date.UTC(yearNum, monthIndex + delta, 1))
    const nextKey = `${next.getUTCFullYear()}-${String(next.getUTCMonth() + 1).padStart(2, '0')}`
    setCurrentMonthKey(nextKey)
  }

  const monthEvents = useMemo(
    () => events.filter((e) => e.monthKey === currentMonthKey),
    [currentMonthKey, events],
  )

  const eventsByDay = useMemo(() => {
    const map = new Map<number, EventRecord[]>()
    for (const ev of monthEvents) {
      const day = new Date(ev.startIso).getUTCDate()
      const list = map.get(day) ?? []
      list.push(ev)
      map.set(day, list)
    }
    return map
  }, [monthEvents])

  const firstWeekday = new Date(Date.UTC(yearNum, monthIndex, 1)).getUTCDay()
  const daysInMonth = new Date(Date.UTC(yearNum, monthIndex + 1, 0)).getUTCDate()
  const cells: (number | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]

  return (
    <div className="rounded-3xl border border-border-subtle bg-surface-card p-5 sm:p-7">
      {/* Month Navigation Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle pb-5">
        <div>
          <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
            {formatMonthHeading(yearNum, monthIndex)}
          </h3>
          <p className="mt-0.5 text-xs text-ink-muted">
            {monthEvents.length} verified event{monthEvents.length === 1 ? '' : 's'}{' '}
            in this month
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => shiftMonth(-1)}
            aria-label="Previous month"
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border-subtle bg-surface text-ink transition-colors hover:border-aasu-red hover:text-aasu-red"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => shiftMonth(1)}
            aria-label="Next month"
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border-subtle bg-surface text-ink transition-colors hover:border-aasu-red hover:text-aasu-red"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Quick Jump to Months With Verified Events */}
      {activeMonths.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          <span className="mr-1 font-display text-[11px] font-semibold text-ink-muted">
            Jump to active month:
          </span>
          {activeMonths.map((key) => {
            const [y, m] = key.split('-').map(Number)
            const label = new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString(
              'en-GB',
              { month: 'short', year: 'numeric', timeZone: 'UTC' },
            )
            return (
              <button
                key={key}
                type="button"
                onClick={() => setCurrentMonthKey(key)}
                className={cn(
                  'cursor-pointer rounded-full px-3 py-1 font-display text-[11px] font-medium transition-colors',
                  currentMonthKey === key
                    ? 'bg-aasu-red text-aasu-white'
                    : 'border border-border-subtle bg-surface-alt text-ink-secondary hover:border-aasu-red hover:text-ink',
                )}
              >
                {label}
              </button>
            )
          })}
        </div>
      )}

      {/* Desktop Calendar Grid */}
      <div className="mt-6 hidden md:block">
        <div className="grid grid-cols-7 gap-1.5 text-center font-display text-xs font-semibold text-ink-muted">
          {WEEKDAYS.map((day) => (
            <div key={day} className="py-2">
              {day}
            </div>
          ))}
        </div>
        <div className="mt-1 grid grid-cols-7 gap-1.5">
          {cells.map((day, idx) => {
            const dayEvents = day ? eventsByDay.get(day) ?? [] : []
            return (
              <div
                key={idx}
                className={cn(
                  'min-h-[96px] rounded-xl border p-2 text-xs',
                  day === null
                    ? 'border-transparent bg-transparent'
                    : dayEvents.length > 0
                      ? 'border-aasu-red/40 bg-aasu-red/[0.04]'
                      : 'border-border-subtle/70 bg-surface',
                )}
              >
                {day !== null && (
                  <>
                    <span
                      className={cn(
                        'inline-flex h-6 w-6 items-center justify-center rounded-full font-display text-xs font-semibold',
                        dayEvents.length > 0
                          ? 'bg-aasu-red text-aasu-white'
                          : 'text-ink-muted',
                      )}
                    >
                      {day}
                    </span>
                    <div className="mt-1.5 space-y-1">
                      {dayEvents.map((ev) => (
                        <AppLink
                          key={ev.id}
                          href={`/events/${ev.slug}`}
                          className="block truncate rounded-md bg-surface-card px-1.5 py-1 font-display text-[11px] font-semibold text-ink shadow-2xs transition-colors hover:text-aasu-red"
                          title={ev.title}
                        >
                          {ev.title}
                        </AppLink>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Month Event List (Primary on Mobile, Companion Summary on Desktop) */}
      <div className="mt-6 border-t border-border-subtle pt-5">
        {monthEvents.length === 0 ? (
          <p className="py-4 text-center text-sm text-ink-secondary">
            No verified AASU events recorded in{' '}
            {formatMonthHeading(yearNum, monthIndex)}. Use the active month
            buttons above to browse scheduled or archived dates.
          </p>
        ) : (
          <div className="space-y-3">
            {monthEvents.map((ev) => (
              <div
                key={ev.id}
                className="flex flex-col justify-between gap-4 rounded-2xl border border-border-subtle bg-surface p-4 sm:flex-row sm:items-center"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-full bg-aasu-red/10 px-2.5 py-0.5 font-display font-semibold text-aasu-red">
                      {ev.eventType}
                    </span>
                    <span className="text-ink-muted">
                      {ev.dateDisplay} · {ev.timezone}
                    </span>
                  </div>
                  <h4 className="mt-1.5 font-display text-base font-bold text-ink">
                    <AppLink
                      href={`/events/${ev.slug}`}
                      className="hover:text-aasu-red"
                    >
                      {ev.title}
                    </AppLink>
                  </h4>
                  <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-ink-secondary">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                      {ev.venue}, {ev.cityOrPlatform}
                    </span>
                    {ev.timeDisplay && (
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                        {ev.timeDisplay}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex shrink-0 flex-wrap items-center gap-2">
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
                    className="inline-flex min-h-[36px] cursor-pointer items-center gap-1.5 rounded-full border border-border-subtle bg-surface-alt px-3.5 py-1.5 font-display text-xs font-semibold text-ink transition-colors hover:border-aasu-red hover:text-aasu-red"
                  >
                    <CalendarPlus className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                    <span>Add .ics</span>
                  </button>
                  <AppLink
                    href={`/events/${ev.slug}`}
                    className="inline-flex min-h-[36px] items-center gap-1 rounded-full bg-aasu-red px-4 py-1.5 font-display text-xs font-semibold text-aasu-white hover:bg-aasu-red-dark"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </AppLink>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
