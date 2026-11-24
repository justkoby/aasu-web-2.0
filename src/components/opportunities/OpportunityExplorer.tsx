import { useMemo, useState } from 'react'
import { RotateCcw, Search } from 'lucide-react'
import { OpportunityCard } from '@/components/opportunities/OpportunityCard'
import type {
  OpportunityProviderType,
  OpportunityRecord,
  OpportunityStatus,
} from '@/data/opportunities'

interface OpportunityExplorerProps {
  opportunities: OpportunityRecord[]
  initialQuery?: string
  emptyTitle?: string
  emptyDescription?: string
}

export function OpportunityExplorer({
  opportunities,
  initialQuery = '',
  emptyTitle = 'No opportunities match your filters',
  emptyDescription = 'Try broadening your search or resetting the status, location or provider filters.',
}: OpportunityExplorerProps) {
  const [query, setQuery] = useState(initialQuery)
  const [statusFilter, setStatusFilter] = useState<'all' | OpportunityStatus>(
    'all',
  )
  const [providerFilter, setProviderFilter] = useState<
    'all' | OpportunityProviderType
  >('all')
  const [locationFilter, setLocationFilter] = useState('All')

  const locations = useMemo(
    () => [
      'All',
      ...Array.from(new Set(opportunities.map((o) => o.countryOrFormat))).sort(),
    ],
    [opportunities],
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return opportunities.filter((item) => {
      if (statusFilter !== 'all' && item.status !== statusFilter) return false
      if (providerFilter !== 'all' && item.providerType !== providerFilter) {
        return false
      }
      if (
        locationFilter !== 'All' &&
        item.countryOrFormat !== locationFilter
      ) {
        return false
      }
      if (q) {
        const hay = [
          item.title,
          item.provider,
          item.subcategory,
          item.location,
          item.studyLevel ?? '',
          item.overview.join(' '),
        ]
          .join(' ')
          .toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })
  }, [locationFilter, opportunities, providerFilter, query, statusFilter])

  const hasFilters =
    query.trim().length > 0 ||
    statusFilter !== 'all' ||
    providerFilter !== 'all' ||
    locationFilter !== 'All'

  const resetAll = () => {
    setQuery('')
    setStatusFilter('all')
    setProviderFilter('all')
    setLocationFilter('All')
  }

  return (
    <div>
      {opportunities.length > 0 && (
        <div className="rounded-3xl border border-border-subtle bg-surface-card p-5 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
            <div className="sm:col-span-2 lg:col-span-4">
              <label
                htmlFor="opp-search"
                className="block font-display text-xs font-semibold text-ink-secondary"
              >
                Search opportunities
              </label>
              <div className="relative mt-1.5">
                <Search
                  className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
                  aria-hidden="true"
                />
                <input
                  id="opp-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Internship, NELS, volunteer, scholarship..."
                  className="min-h-[42px] w-full rounded-xl border border-border-subtle bg-surface py-2 pl-10 pr-4 text-sm text-ink placeholder:text-ink-muted focus:border-aasu-red focus:outline-none"
                />
              </div>
            </div>

            <div className="lg:col-span-3">
              <label
                htmlFor="opp-status"
                className="block font-display text-xs font-semibold text-ink-secondary"
              >
                Application Status
              </label>
              <select
                id="opp-status"
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(e.target.value as 'all' | OpportunityStatus)
                }
                className="mt-1.5 min-h-[42px] w-full rounded-xl border border-border-subtle bg-surface px-3 py-2 text-sm text-ink focus:border-aasu-red focus:outline-none"
              >
                <option value="all">All Statuses</option>
                <option value="rolling">Open / Rolling Intake</option>
                <option value="open">Fixed Deadline Open</option>
                <option value="closed">Closed / Archived</option>
              </select>
            </div>

            <div className="lg:col-span-3">
              <label
                htmlFor="opp-provider"
                className="block font-display text-xs font-semibold text-ink-secondary"
              >
                Source Type
              </label>
              <select
                id="opp-provider"
                value={providerFilter}
                onChange={(e) =>
                  setProviderFilter(
                    e.target.value as 'all' | OpportunityProviderType,
                  )
                }
                className="mt-1.5 min-h-[42px] w-full rounded-xl border border-border-subtle bg-surface px-3 py-2 text-sm text-ink focus:border-aasu-red focus:outline-none"
              >
                <option value="all">AASU &amp; Third-Party</option>
                <option value="AASU Programme">AASU-Run Programmes</option>
                <option value="Third-Party Opportunity">
                  Third-Party Opportunities
                </option>
              </select>
            </div>

            <div className="lg:col-span-2">
              <label
                htmlFor="opp-location"
                className="block font-display text-xs font-semibold text-ink-secondary"
              >
                Location
              </label>
              <select
                id="opp-location"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="mt-1.5 min-h-[42px] w-full rounded-xl border border-border-subtle bg-surface px-3 py-2 text-sm text-ink focus:border-aasu-red focus:outline-none"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc === 'All' ? 'All Locations' : loc}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {hasFilters && (
            <div className="mt-4 flex justify-end border-t border-border-subtle pt-4">
              <button
                type="button"
                onClick={resetAll}
                className="inline-flex min-h-[34px] cursor-pointer items-center gap-1.5 rounded-full border border-border-subtle px-3.5 py-1 font-display text-xs font-semibold text-ink hover:border-aasu-red hover:text-aasu-red"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Reset Filters</span>
              </button>
            </div>
          )}
        </div>
      )}

      {opportunities.length > 0 && (
        <p aria-live="polite" className="mt-6 font-display text-sm font-semibold text-ink">
          Showing <span className="text-aasu-red">{filtered.length}</span>{' '}
          verified record{filtered.length === 1 ? '' : 's'}
        </p>
      )}

      {filtered.length === 0 ? (
        <div className="mt-6 rounded-3xl border border-border-subtle bg-surface-alt px-6 py-14 text-center">
          <h3 className="font-display text-lg font-bold text-ink">
            {emptyTitle}
          </h3>
          <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-ink-secondary">
            {emptyDescription}
          </p>
          {hasFilters && (
            <button
              type="button"
              onClick={resetAll}
              className="mt-5 inline-flex min-h-[40px] cursor-pointer items-center gap-2 rounded-full bg-aasu-red px-5 py-2 font-display text-xs font-semibold text-aasu-white hover:bg-aasu-red-dark"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <OpportunityCard key={item.id} opportunity={item} />
          ))}
        </div>
      )}
    </div>
  )
}
