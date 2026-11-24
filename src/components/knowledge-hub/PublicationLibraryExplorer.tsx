import { useMemo, useState } from 'react'
import { RotateCcw, Search } from 'lucide-react'
import { PublicationCard } from '@/components/knowledge-hub/PublicationCard'
import {
  matchesPublicationQuery,
  PRIORITY_LABELS,
  type PublicationRecord,
} from '@/data/publications'

interface PublicationLibraryExplorerProps {
  publications: PublicationRecord[]
  initialQuery?: string
  showCategoryFilter?: boolean
  pageSize?: number
}

type SortMode = 'newest' | 'oldest' | 'title'

export function PublicationLibraryExplorer({
  publications,
  initialQuery = '',
  showCategoryFilter = false,
  pageSize = 9,
}: PublicationLibraryExplorerProps) {
  const [query, setQuery] = useState(initialQuery)
  const [selectedSubcategory, setSelectedSubcategory] = useState('All')
  const [selectedYear, setSelectedYear] = useState('All')
  const [selectedPriority, setSelectedPriority] = useState('All')
  const [selectedLanguage, setSelectedLanguage] = useState('All')
  const [sortBy, setSortBy] = useState<SortMode>('newest')
  const [visibleCount, setVisibleCount] = useState(pageSize)

  const subcategories = useMemo(
    () => [
      'All',
      ...Array.from(new Set(publications.map((p) => p.subcategory))).sort(),
    ],
    [publications],
  )

  const years = useMemo(
    () => [
      'All',
      ...Array.from(new Set(publications.map((p) => p.year))).sort((a, b) =>
        b.localeCompare(a),
      ),
    ],
    [publications],
  )

  const languages = useMemo(
    () => ['All', ...Array.from(new Set(publications.map((p) => p.language)))],
    [publications],
  )

  const priorityOptions = useMemo(() => {
    const ids = new Set<string>()
    for (const p of publications) {
      for (const id of p.relatedPriorityIds) ids.add(id)
    }
    return ['All', ...Array.from(ids)]
  }, [publications])

  const filtered = useMemo(() => {
    const matched = publications.filter((pub) => {
      if (
        selectedSubcategory !== 'All' &&
        pub.subcategory !== selectedSubcategory
      ) {
        return false
      }
      if (selectedYear !== 'All' && pub.year !== selectedYear) return false
      if (selectedLanguage !== 'All' && pub.language !== selectedLanguage) {
        return false
      }
      if (
        selectedPriority !== 'All' &&
        !pub.relatedPriorityIds.includes(selectedPriority)
      ) {
        return false
      }
      return matchesPublicationQuery(pub, query)
    })

    return [...matched].sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title)
      if (sortBy === 'oldest') return a.publishedAt.localeCompare(b.publishedAt)
      return b.publishedAt.localeCompare(a.publishedAt)
    })
  }, [
    publications,
    query,
    selectedLanguage,
    selectedPriority,
    selectedSubcategory,
    selectedYear,
    sortBy,
  ])

  const hasFilters =
    query.trim().length > 0 ||
    selectedSubcategory !== 'All' ||
    selectedYear !== 'All' ||
    selectedPriority !== 'All' ||
    selectedLanguage !== 'All'

  const resetAll = () => {
    setQuery('')
    setSelectedSubcategory('All')
    setSelectedYear('All')
    setSelectedPriority('All')
    setSelectedLanguage('All')
    setSortBy('newest')
    setVisibleCount(pageSize)
  }

  const visibleItems = filtered.slice(0, visibleCount)

  return (
    <div>
      {/* Search & Filter Panel */}
      <div className="rounded-3xl border border-border-subtle bg-surface-card p-5 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-4">
            <label
              htmlFor="kh-search-input"
              className="block font-display text-xs font-semibold text-ink-secondary"
            >
              Search publications
            </label>
            <div className="relative mt-1.5">
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
                aria-hidden="true"
              />
              <input
                id="kh-search-input"
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setVisibleCount(pageSize)
                }}
                placeholder="e.g. education financing, green skills, student rights..."
                className="min-h-[42px] w-full rounded-xl border border-border-subtle bg-surface py-2 pl-10 pr-4 text-sm text-ink placeholder:text-ink-muted focus:border-aasu-red focus:outline-none"
              />
            </div>
          </div>

          {showCategoryFilter && (
            <div className="lg:col-span-2">
              <label
                htmlFor="kh-type-filter"
                className="block font-display text-xs font-semibold text-ink-secondary"
              >
                Document Type
              </label>
              <select
                id="kh-type-filter"
                value={selectedSubcategory}
                onChange={(e) => setSelectedSubcategory(e.target.value)}
                className="mt-1.5 min-h-[42px] w-full rounded-xl border border-border-subtle bg-surface px-3 py-2 text-sm text-ink focus:border-aasu-red focus:outline-none"
              >
                {subcategories.map((sub) => (
                  <option key={sub} value={sub}>
                    {sub === 'All' ? 'All Types' : sub}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="lg:col-span-2">
            <label
              htmlFor="kh-year-filter"
              className="block font-display text-xs font-semibold text-ink-secondary"
            >
              Year
            </label>
            <select
              id="kh-year-filter"
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

          <div className={showCategoryFilter ? 'lg:col-span-2' : 'lg:col-span-3'}>
            <label
              htmlFor="kh-priority-filter"
              className="block font-display text-xs font-semibold text-ink-secondary"
            >
              Strategic Priority
            </label>
            <select
              id="kh-priority-filter"
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
              className="mt-1.5 min-h-[42px] w-full rounded-xl border border-border-subtle bg-surface px-3 py-2 text-sm text-ink focus:border-aasu-red focus:outline-none"
            >
              {priorityOptions.map((id) => (
                <option key={id} value={id}>
                  {id === 'All' ? 'All Priorities' : PRIORITY_LABELS[id] ?? id}
                </option>
              ))}
            </select>
          </div>

          <div className="lg:col-span-2">
            <label
              htmlFor="kh-sort-filter"
              className="block font-display text-xs font-semibold text-ink-secondary"
            >
              Sort By
            </label>
            <select
              id="kh-sort-filter"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortMode)}
              className="mt-1.5 min-h-[42px] w-full rounded-xl border border-border-subtle bg-surface px-3 py-2 text-sm text-ink focus:border-aasu-red focus:outline-none"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="title">Title (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Language Pills + Reset */}
        {(languages.length > 2 || hasFilters) && (
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border-subtle pt-4">
            <div className="flex flex-wrap items-center gap-2">
              {languages.length > 2 &&
                languages.map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setSelectedLanguage(lang)}
                    aria-pressed={selectedLanguage === lang}
                    className={`min-h-[34px] cursor-pointer rounded-full px-3.5 py-1 font-display text-xs font-medium transition-colors ${
                      selectedLanguage === lang
                        ? 'bg-aasu-red text-aasu-white'
                        : 'border border-border-subtle bg-surface text-ink-secondary hover:border-aasu-red hover:text-ink'
                    }`}
                  >
                    {lang === 'All' ? 'All Languages' : lang}
                  </button>
                ))}
            </div>

            {hasFilters && (
              <button
                type="button"
                onClick={resetAll}
                className="inline-flex min-h-[34px] cursor-pointer items-center gap-1.5 rounded-full border border-border-subtle px-3.5 py-1 font-display text-xs font-semibold text-ink hover:border-aasu-red hover:text-aasu-red"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Live Result Count */}
      <div
        aria-live="polite"
        className="mt-6 flex flex-wrap items-center justify-between gap-2 text-sm"
      >
        <p className="font-display font-semibold text-ink">
          Showing <span className="text-aasu-red">{filtered.length}</span>{' '}
          publication{filtered.length === 1 ? '' : 's'}
        </p>
        <p className="text-xs text-ink-muted">
          Local indexed search across verified AASU publications
        </p>
      </div>

      {/* Results Grid or Empty State */}
      {visibleItems.length === 0 ? (
        <div className="mt-6 rounded-3xl border border-border-subtle bg-surface-alt px-6 py-14 text-center">
          <h3 className="font-display text-lg font-bold text-ink">
            No publications match your current search
          </h3>
          <p className="mx-auto mt-2 max-w-lg text-sm text-ink-secondary">
            Try searching for broader terms such as &ldquo;education
            financing&rdquo;, &ldquo;student rights&rdquo;, &ldquo;green
            skills&rdquo; or &ldquo;annual report&rdquo;, or reset your filters.
          </p>
          <button
            type="button"
            onClick={resetAll}
            className="mt-5 inline-flex min-h-[40px] cursor-pointer items-center gap-2 rounded-full bg-aasu-red px-5 py-2 font-display text-xs font-semibold text-aasu-white hover:bg-aasu-red-dark"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Reset Library Filters</span>
          </button>
        </div>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((pub) => (
            <PublicationCard key={pub.id} publication={pub} />
          ))}
        </div>
      )}

      {visibleCount < filtered.length && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + pageSize)}
            className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full border border-border-subtle bg-surface-card px-6 py-2.5 font-display text-xs font-semibold text-ink transition-colors hover:border-aasu-red hover:bg-aasu-red hover:text-aasu-white"
          >
            <span>
              Load More Publications ({filtered.length - visibleCount} remaining)
            </span>
          </button>
        </div>
      )}
    </div>
  )
}
