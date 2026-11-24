import { useMemo, useState } from 'react'
import { ArrowUpRight, Calendar, FileText, RotateCcw, Search } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { NewsMediaRelatedNav } from '@/components/layout/NewsMediaRelatedNav'
import { AppLink } from '@/components/ui/AppLink'
import { Reveal } from '@/components/ui'
import {
  getPublishedPressReleases,
  type StatementType,
} from '@/data/newsMedia'
import { usePageMeta } from '@/hooks'
import { cn } from '@/lib/utils'

const TYPES: ('All' | StatementType)[] = [
  'All',
  'Official Press Release',
  'Public Statement',
  'Policy Position',
]

export function PressReleasesPage() {
  usePageMeta(
    'Press Releases & Statements',
    'Searchable institutional archive of official AASU press releases, public statements and policy positions.',
  )

  const releases = getPublishedPressReleases()
  const [query, setQuery] = useState('')
  const [selectedType, setSelectedType] = useState<'All' | StatementType>('All')
  const [selectedYear, setSelectedYear] = useState<string>('All')

  const years = useMemo(
    () => ['All', ...Array.from(new Set(releases.map((r) => r.year)))],
    [releases],
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return releases.filter((item) => {
      if (selectedType !== 'All' && item.statementType !== selectedType) {
        return false
      }
      if (selectedYear !== 'All' && item.year !== selectedYear) {
        return false
      }
      if (q) {
        const haystack =
          `${item.title} ${item.refNumber ?? ''} ${item.excerpt} ${item.topic} ${item.signatory}`.toLowerCase()
        if (!haystack.includes(q)) return false
      }
      return true
    })
  }, [query, releases, selectedType, selectedYear])

  const hasFilters =
    query.trim().length > 0 || selectedType !== 'All' || selectedYear !== 'All'

  return (
    <>
      <InnerPageHero
        title="Press Releases & Statements"
        subtitle="Official press releases, public statements and policy positions issued by the All-Africa Students Union."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'News & Media', href: '/news' },
          { label: 'Press Releases & Statements' },
        ]}
        images={[
          {
            src: '/images/web/inauguration-2026.webp',
            alt: 'All-Africa Students Union institutional leadership',
          },
        ]}
      />

      <section className="bg-surface py-12 lg:py-16">
        <Container>
          {/* Search & Filter Controls */}
          <div className="rounded-3xl border border-border-subtle bg-surface-card p-5 sm:p-6">
            <div className="grid gap-4 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <label
                  htmlFor="pr-search"
                  className="block font-display text-xs font-semibold text-ink-secondary"
                >
                  Search by title, reference number or keyword
                </label>
                <div className="relative mt-1.5">
                  <Search
                    className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
                    aria-hidden="true"
                  />
                  <input
                    id="pr-search"
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="e.g. PR.SG.26.017, South Africa, Nigeria, Africa Day..."
                    className="min-h-[44px] w-full rounded-xl border border-border-subtle bg-surface py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-ink-muted focus:border-aasu-red focus:outline-none"
                  />
                </div>
              </div>

              <div className="sm:col-span-6 lg:col-span-3">
                <label
                  htmlFor="pr-year"
                  className="block font-display text-xs font-semibold text-ink-secondary"
                >
                  Year
                </label>
                <select
                  id="pr-year"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="mt-1.5 min-h-[44px] w-full rounded-xl border border-border-subtle bg-surface px-3.5 py-2.5 text-sm text-ink focus:border-aasu-red focus:outline-none"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year === 'All' ? 'All Years' : year}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-end sm:col-span-6 lg:col-span-3">
                {hasFilters && (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery('')
                      setSelectedType('All')
                      setSelectedYear('All')
                    }}
                    className="inline-flex min-h-[44px] w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-border-subtle bg-surface px-4 font-display text-xs font-semibold text-ink transition-colors hover:border-aasu-red hover:text-aasu-red"
                  >
                    <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Reset Filters</span>
                  </button>
                )}
              </div>
            </div>

            <div
              role="group"
              aria-label="Filter by document type"
              className="mt-5 flex flex-wrap gap-2 border-t border-border-subtle pt-4"
            >
              {TYPES.map((type) => {
                const active = selectedType === type
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    aria-pressed={active}
                    className={cn(
                      'min-h-[36px] cursor-pointer rounded-full px-4 py-1.5 font-display text-xs font-medium transition-colors',
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
          </div>

          <p aria-live="polite" className="mt-6 font-display text-sm font-semibold text-ink">
            Showing <span className="text-aasu-red">{filtered.length}</span> official
            document{filtered.length === 1 ? '' : 's'}
          </p>

          {/* Document Archive List */}
          {filtered.length === 0 ? (
            <div className="mt-6 rounded-3xl border border-border-subtle bg-surface-alt p-10 text-center">
              <p className="font-display text-lg font-bold text-ink">
                No official statements match your search
              </p>
              <p className="mt-2 text-sm text-ink-secondary">
                Try clearing filters or searching by a different keyword or reference number.
              </p>
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              {filtered.map((item) => (
                <Reveal key={item.slug}>
                  <AppLink
                    href={`/news/press-releases/${item.slug}`}
                    className="group block rounded-3xl border border-border-subtle bg-surface-card p-6 transition-all hover:border-aasu-red/50 hover:shadow-md"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-aasu-red/10 px-3 py-1 font-display font-semibold text-aasu-red">
                          <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                          {item.statementType}
                        </span>
                        {item.refNumber && (
                          <span className="rounded-md border border-border-subtle bg-surface-alt px-2.5 py-0.5 font-mono text-[11px] font-semibold text-ink-secondary">
                            {item.refNumber}
                          </span>
                        )}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-ink-muted">
                        <Calendar className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                        {item.date}
                      </span>
                    </div>

                    <h2 className="mt-3.5 font-display text-xl font-bold leading-snug text-ink transition-colors group-hover:text-aasu-red">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                      {item.excerpt}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border-subtle pt-3.5 text-xs">
                      <span className="text-ink-muted">
                        {item.issuingAuthority} · Signed: {item.signatory}
                      </span>
                      <span className="inline-flex items-center gap-1 font-display font-semibold text-ink group-hover:text-aasu-red">
                        <span>Read Official Text</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                      </span>
                    </div>
                  </AppLink>
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>

      <NewsMediaRelatedNav currentPath="/news/press-releases" />
    </>
  )
}
