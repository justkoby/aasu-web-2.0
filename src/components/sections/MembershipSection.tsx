import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, MapPin, Search } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Button, Reveal, SectionHeading } from '@/components/ui'
import { AFRICA_REGIONS } from '@/data/homepage'
import type { AfricaRegionId } from '@/types'
import { cn } from '@/lib/utils'

export function MembershipSection() {
  const [activeRegionId, setActiveRegionId] = useState<AfricaRegionId>('west')
  const [unionQuery, setUnionQuery] = useState('')

  const activeRegion =
    AFRICA_REGIONS.find((r) => r.id === activeRegionId) ?? AFRICA_REGIONS[0]

  const visibleUnions = useMemo(() => {
    const q = unionQuery.trim().toLowerCase()
    if (!q) return activeRegion.unions
    return activeRegion.unions.filter(
      (u) =>
        u.name.toLowerCase().includes(q) ||
        u.country.toLowerCase().includes(q) ||
        u.membershipType.toLowerCase().includes(q),
    )
  }, [activeRegion, unionQuery])

  return (
    <section
      id="membership"
      className="relative overflow-hidden bg-aasu-black py-20 text-aasu-white lg:py-28"
    >
      {/* Subtle Continental Silhouette Watermark */}
      <img
        src="/images/brand/africa-map.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 hidden h-[520px] w-auto -translate-y-1/2 opacity-[0.06] invert lg:block"
      />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Narrative Column */}
          <Reveal className="lg:col-span-5">
            <SectionHeading
              theme="dark"
              eyebrow="Membership"
              title="Across Borders. United in Purpose."
            />

            <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-300">
              <p>
                Africa&apos;s student movement draws its strength from the
                organisations and students who constitute it.
              </p>
              <p>
                Through its network of national and sub-national student unions,
                AASU connects student representatives across North, West,
                Central, East and Southern Africa.
              </p>
              <p>
                Our members bring different experiences, perspectives and
                priorities to the Union. Together, they contribute to common
                positions, share knowledge, strengthen cooperation and advance
                the collective interests of African students.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="#join" variant="primary" size="md">
                <span>Explore Our Membership</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                href="#regional-explorer"
                variant="outlineLight"
                size="md"
              >
                Find a Member Union
              </Button>
            </div>
          </Reveal>

          {/* Right Responsive Regional Explorer */}
          <Reveal delay={0.08} className="lg:col-span-7">
            <div
              id="regional-explorer"
              className="border border-white/15 bg-white/[0.03] p-5 sm:p-7"
            >
              {/* Region Tabs */}
              <div
                role="tablist"
                aria-label="African Regions"
                className="flex flex-wrap gap-2 border-b border-white/10 pb-5"
              >
                {AFRICA_REGIONS.map((region) => {
                  const selected = region.id === activeRegionId
                  return (
                    <button
                      key={region.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => {
                        setActiveRegionId(region.id)
                        setUnionQuery('')
                      }}
                      className={cn(
                        'px-3.5 py-2 font-display text-xs font-bold uppercase tracking-[0.12em] transition-colors cursor-pointer',
                        selected
                          ? 'bg-aasu-red text-aasu-white'
                          : 'border border-white/15 text-neutral-300 hover:border-white/40 hover:text-aasu-white',
                      )}
                    >
                      {region.name}
                    </button>
                  )
                })}
              </div>

              {/* Active Region Header & Filter */}
              <div className="mt-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-display text-xl font-bold text-aasu-white">
                    {activeRegion.name}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-400">
                    {activeRegion.summary}
                  </p>
                </div>

                <label className="relative block w-full sm:w-56 shrink-0">
                  <span className="sr-only">Filter unions in {activeRegion.name}</span>
                  <Search
                    className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-400"
                    aria-hidden="true"
                  />
                  <input
                    type="search"
                    value={unionQuery}
                    onChange={(e) => setUnionQuery(e.target.value)}
                    placeholder="Filter by country or union..."
                    className="w-full border border-white/15 bg-aasu-black/60 py-2 pl-9 pr-3 text-xs text-aasu-white placeholder:text-neutral-500 focus:border-aasu-red focus:outline-none"
                  />
                </label>
              </div>

              {/* Verified Member Unions List */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeRegion.id}-${unionQuery}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="mt-5 grid max-h-[340px] gap-2.5 overflow-y-auto pr-1 sm:grid-cols-2"
                >
                  {visibleUnions.length === 0 ? (
                    <p className="col-span-full py-8 text-center text-sm text-neutral-400">
                      No verified member unions match &ldquo;{unionQuery}&rdquo; in{' '}
                      {activeRegion.name}.
                    </p>
                  ) : (
                    visibleUnions.map((union) => (
                      <div
                        key={`${union.country}-${union.name}`}
                        className="flex flex-col justify-between border border-white/10 bg-aasu-black/40 p-3.5 transition-colors hover:border-aasu-red/60"
                      >
                        <div className="flex items-center justify-between gap-2 text-[11px]">
                          <span className="inline-flex items-center gap-1 font-semibold uppercase tracking-[0.12em] text-neutral-300">
                            <MapPin
                              className="h-3 w-3 text-aasu-red"
                              aria-hidden="true"
                            />
                            {union.country}
                          </span>
                          <span className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                            {union.membershipType}
                          </span>
                        </div>
                        <p className="mt-2 font-display text-sm font-semibold leading-snug text-aasu-white">
                          {union.name}
                        </p>
                      </div>
                    ))
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-neutral-400">
                <span>
                  Showing {visibleUnions.length} verified union
                  {visibleUnions.length === 1 ? '' : 's'} in {activeRegion.name}
                </span>
                <span className="font-medium text-neutral-300">
                  5 African Regions
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
