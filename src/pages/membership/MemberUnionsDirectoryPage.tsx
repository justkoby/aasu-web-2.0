import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ArrowUpRight, MapPinned, RotateCcw, Search, SlidersHorizontal } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { MembershipRelatedNav } from '@/components/layout/MembershipRelatedNav'
import { AppLink } from '@/components/ui/AppLink'
import { Reveal } from '@/components/ui'
import {
  AFRICA_REGION_PROFILES,
  getAllDirectoryCountries,
  MEMBER_UNIONS,
  type MembershipCategory,
  type RegionSlug,
} from '@/data/membership'
import { usePageMeta } from '@/hooks'
import { cn } from '@/lib/utils'

const VALID_REGIONS = new Set<string>(
  AFRICA_REGION_PROFILES.map((r) => r.slug),
)

const CATEGORIES: ('all' | MembershipCategory)[] = [
  'all',
  'Full Member',
  'Associate Member',
  'Consultative Member',
]

export function MemberUnionsDirectoryPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  usePageMeta(
    'Member Unions Directory',
    'Search and filter verified national student unions, university councils and associate member organisations of AASU across Africa.',
  )

  const query = searchParams.get('q') ?? ''
  const rawRegion = searchParams.get('region') ?? 'all'
  const selectedRegion: 'all' | RegionSlug = VALID_REGIONS.has(rawRegion)
    ? (rawRegion as RegionSlug)
    : 'all'
  const selectedCountry = searchParams.get('country') ?? 'all'
  const rawCategory = searchParams.get('category') ?? 'all'
  const selectedCategory: 'all' | MembershipCategory = CATEGORIES.includes(
    rawCategory as 'all' | MembershipCategory,
  )
    ? (rawCategory as 'all' | MembershipCategory)
    : 'all'

  const availableCountries = useMemo(
    () => getAllDirectoryCountries(selectedRegion),
    [selectedRegion],
  )

  const updateParam = (key: string, value: string) => {
    const next = new URLSearchParams(searchParams)
    if (!value || value === 'all') {
      next.delete(key)
    } else {
      next.set(key, value)
    }
    if (key === 'region') {
      next.delete('country')
    }
    setSearchParams(next, { replace: true })
  }

  const resetFilters = () => {
    setSearchParams({}, { replace: true })
  }

  const hasActiveFilters =
    query.trim().length > 0 ||
    selectedRegion !== 'all' ||
    selectedCountry !== 'all' ||
    selectedCategory !== 'all'

  const filteredUnions = useMemo(() => {
    const q = query.trim().toLowerCase()
    return MEMBER_UNIONS.filter((union) => {
      if (selectedRegion !== 'all' && union.regionSlug !== selectedRegion) {
        return false
      }
      if (selectedCountry !== 'all' && union.country !== selectedCountry) {
        return false
      }
      if (selectedCategory !== 'all' && union.category !== selectedCategory) {
        return false
      }
      if (q) {
        const haystack =
          `${union.name} ${union.acronym ?? ''} ${union.country} ${union.regionName}`.toLowerCase()
        if (!haystack.includes(q)) return false
      }
      return true
    })
  }, [query, selectedRegion, selectedCountry, selectedCategory])

  return (
    <>
      <InnerPageHero
        title="Member Unions Directory"
        subtitle="Search and explore verified Full, Associate and Consultative member organisations of the All-Africa Students Union across all five African regions."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Membership', href: '/membership' },
          { label: 'Member Unions Directory' },
        ]}
        images={[
          {
            src: '/images/web/leadershift-audience.webp',
            alt: 'African student leaders gathered at the AASU Leader-Shift Summit',
          },
        ]}
      />

      <section className="bg-surface py-12 lg:py-16">
        <Container>
          {/* Search & Filter Toolbar */}
          <div className="rounded-3xl border border-border-subtle bg-surface-card p-5 sm:p-6">
            <div className="grid gap-4 lg:grid-cols-12">
              {/* Search Input */}
              <div className="lg:col-span-5">
                <label
                  htmlFor="directory-search"
                  className="block font-display text-xs font-semibold text-ink-secondary"
                >
                  Search by union name, acronym or country
                </label>
                <div className="relative mt-1.5">
                  <Search
                    className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
                    aria-hidden="true"
                  />
                  <input
                    id="directory-search"
                    type="search"
                    value={query}
                    onChange={(e) => updateParam('q', e.target.value)}
                    placeholder="e.g. NUGS, Kenya, South Africa, UGTE..."
                    className="min-h-[44px] w-full rounded-xl border border-border-subtle bg-surface py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-ink-muted focus:border-aasu-red focus:outline-none"
                  />
                </div>
              </div>

              {/* Country Select */}
              <div className="sm:col-span-6 lg:col-span-4">
                <label
                  htmlFor="directory-country"
                  className="block font-display text-xs font-semibold text-ink-secondary"
                >
                  Country
                </label>
                <select
                  id="directory-country"
                  value={selectedCountry}
                  onChange={(e) => updateParam('country', e.target.value)}
                  className="mt-1.5 min-h-[44px] w-full rounded-xl border border-border-subtle bg-surface px-3.5 py-2.5 text-sm text-ink focus:border-aasu-red focus:outline-none"
                >
                  <option value="all">
                    All Countries ({availableCountries.length})
                  </option>
                  {availableCountries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              {/* Membership Category Select */}
              <div className="sm:col-span-6 lg:col-span-3">
                <label
                  htmlFor="directory-category"
                  className="block font-display text-xs font-semibold text-ink-secondary"
                >
                  Membership Category
                </label>
                <select
                  id="directory-category"
                  value={selectedCategory}
                  onChange={(e) => updateParam('category', e.target.value)}
                  className="mt-1.5 min-h-[44px] w-full rounded-xl border border-border-subtle bg-surface px-3.5 py-2.5 text-sm text-ink focus:border-aasu-red focus:outline-none"
                >
                  <option value="all">All Categories</option>
                  <option value="Full Member">Full Member</option>
                  <option value="Associate Member">Associate Member</option>
                  <option value="Consultative Member">Consultative Member</option>
                </select>
              </div>
            </div>

            {/* Region Filter Pills */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-border-subtle pt-4">
              <div
                role="group"
                aria-label="Filter by African region"
                className="flex flex-wrap items-center gap-2"
              >
                <span className="mr-1 inline-flex items-center gap-1.5 font-display text-xs font-semibold text-ink-muted">
                  <SlidersHorizontal className="h-3.5 w-3.5" aria-hidden="true" />
                  Region:
                </span>
                <button
                  type="button"
                  onClick={() => updateParam('region', 'all')}
                  aria-pressed={selectedRegion === 'all'}
                  className={cn(
                    'min-h-[36px] cursor-pointer rounded-full px-3.5 py-1.5 font-display text-xs font-medium transition-colors',
                    selectedRegion === 'all'
                      ? 'bg-aasu-red text-aasu-white'
                      : 'border border-border-subtle bg-surface text-ink-secondary hover:border-aasu-red/50 hover:text-ink',
                  )}
                >
                  All Regions
                </button>
                {AFRICA_REGION_PROFILES.map((region) => {
                  const active = selectedRegion === region.slug
                  return (
                    <button
                      key={region.slug}
                      type="button"
                      onClick={() => updateParam('region', region.slug)}
                      aria-pressed={active}
                      className={cn(
                        'min-h-[36px] cursor-pointer rounded-full px-3.5 py-1.5 font-display text-xs font-medium transition-colors',
                        active
                          ? 'bg-aasu-red text-aasu-white'
                          : 'border border-border-subtle bg-surface text-ink-secondary hover:border-aasu-red/50 hover:text-ink',
                      )}
                    >
                      {region.name}
                    </button>
                  )
                })}
              </div>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex min-h-[36px] cursor-pointer items-center gap-1.5 rounded-full border border-border-subtle px-3.5 py-1.5 font-display text-xs font-semibold text-ink transition-colors hover:border-aasu-red hover:text-aasu-red"
                >
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Live Match Count */}
          <div
            aria-live="polite"
            className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm"
          >
            <p className="font-display font-semibold text-ink">
              Showing{' '}
              <span className="text-aasu-red">{filteredUnions.length}</span> of{' '}
              {MEMBER_UNIONS.length} verified member organisations
            </p>
            <p className="text-xs text-ink-muted">
              Source: AASU Institutional Membership Register
            </p>
          </div>

          {/* Results Grid or Accessible Empty State */}
          {filteredUnions.length === 0 ? (
            <div className="mt-8 rounded-3xl border border-border-subtle bg-surface-alt px-6 py-14 text-center">
              <h2 className="font-display text-xl font-bold text-ink">
                No verified member unions match these filters
              </h2>
              <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-ink-secondary">
                Try clearing your search or broadening the selected region,
                country or membership category. If your union is not yet listed
                or requires a directory update, contact the AASU Secretariat.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex min-h-[42px] cursor-pointer items-center gap-2 rounded-full bg-aasu-red px-5 py-2.5 font-display text-xs font-semibold text-aasu-white transition-colors hover:bg-aasu-red-dark"
                >
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Reset All Filters</span>
                </button>
                <a
                  href="mailto:info@aasuonline.org?subject=AASU%20Directory%20Record%20Update"
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-full border border-border-subtle bg-surface px-5 py-2.5 font-display text-xs font-semibold text-ink transition-colors hover:border-aasu-red hover:text-aasu-red"
                >
                  <span>Contact Secretariat</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredUnions.map((union) => (
                <Reveal key={union.slug}>
                  <article className="group flex h-full flex-col justify-between rounded-2xl border border-border-subtle bg-surface-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-aasu-red/50 hover:shadow-md">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                        <span className="inline-flex items-center gap-1.5 font-medium text-ink-secondary">
                          <MapPinned
                            className="h-3.5 w-3.5 text-aasu-red"
                            aria-hidden="true"
                          />
                          {union.country}
                        </span>
                        <span
                          className={cn(
                            'rounded-full px-2.5 py-0.5 text-[11px] font-medium',
                            union.category === 'Full Member'
                              ? 'bg-aasu-red/10 text-aasu-red'
                              : 'border border-border-subtle bg-surface-alt text-ink-secondary',
                          )}
                        >
                          {union.category}
                        </span>
                      </div>

                      <h2 className="mt-3 font-display text-base font-bold leading-snug text-ink transition-colors group-hover:text-aasu-red">
                        <AppLink
                          href={`/membership/member-unions/${union.slug}`}
                          className="focus:outline-none"
                        >
                          {union.name}
                        </AppLink>
                      </h2>

                      {union.acronym && (
                        <p className="mt-1.5 font-display text-xs font-semibold text-ink-muted">
                          Acronym: {union.acronym}
                        </p>
                      )}
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-border-subtle pt-3.5 text-xs">
                      <AppLink
                        href={`/membership/regions/${union.regionSlug}`}
                        className="text-ink-muted transition-colors hover:text-ink"
                      >
                        {union.regionName}
                      </AppLink>
                      <AppLink
                        href={`/membership/member-unions/${union.slug}`}
                        className="inline-flex items-center gap-1 font-display font-semibold text-ink transition-colors hover:text-aasu-red"
                      >
                        <span>View Profile</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                      </AppLink>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}

          {/* Data Integrity Notice */}
          <div className="mt-12 rounded-2xl border border-border-subtle bg-surface-alt p-5 text-xs leading-relaxed text-ink-secondary">
            <strong className="font-display font-semibold text-ink">
              Directory Verification Notice:
            </strong>{' '}
            Only member organisations verified in AASU&apos;s official
            institutional register are displayed. Official logos, websites and
            extended organisational profiles will be published as member unions
            submit verified records to the Secretariat at{' '}
            <a
              href="mailto:info@aasuonline.org"
              className="font-semibold text-ink underline decoration-aasu-red/50 underline-offset-2 hover:text-aasu-red"
            >
              info@aasuonline.org
            </a>
            .
          </div>
        </Container>
      </section>

      <MembershipRelatedNav currentPath="/membership/member-unions" />
    </>
  )
}
