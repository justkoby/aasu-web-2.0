import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, MapPinned, Search } from 'lucide-react'
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
      className="relative overflow-hidden bg-[#121212] py-16 text-aasu-white dark:bg-[#15171C] lg:py-22"
    >
      <img
        src="/images/brand/africa-map.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 hidden h-[460px] w-auto -translate-y-1/2 opacity-[0.06] lg:block"
      />

      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Compact Narrative */}
          <Reveal className="lg:col-span-5">
            <SectionHeading
              forceDark
              eyebrow="Across Africa"
              title="Across Borders. United in Purpose."
              description="Connecting national and sub-national student unions across North, West, Central, East and Southern Africa."
            />

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="#partnerships" variant="primary" size="md">
                <span>Explore Membership</span>
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

          {/* Interactive 5-Region Explorer */}
          <Reveal delay={0.06} className="lg:col-span-7">
            <div
              id="regional-explorer"
              className="rounded-3xl border border-white/15 bg-white/[0.04] p-5 sm:p-6"
            >
              <div
                role="tablist"
                aria-label="African Regions"
                className="flex flex-wrap gap-2 border-b border-white/10 pb-4"
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
                        'rounded-full px-3.5 py-1.5 font-display text-xs font-semibold transition-colors cursor-pointer',
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

              <div className="mt-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <p className="text-xs text-[#B7BBC3]">{activeRegion.summary}</p>
                <label className="relative block w-full shrink-0 sm:w-52">
                  <span className="sr-only">Filter unions</span>
                  <Search
                    className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-400"
                    aria-hidden="true"
                  />
                  <input
                    type="search"
                    value={unionQuery}
                    onChange={(e) => setUnionQuery(e.target.value)}
                    placeholder="Filter country or union..."
                    className="w-full rounded-full border border-white/15 bg-[#101114]/70 py-1.5 pl-9 pr-3 text-xs text-aasu-white placeholder:text-neutral-500 focus:border-aasu-red focus:outline-none"
                  />
                </label>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeRegion.id}-${unionQuery}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.18 }}
                  className="mt-4 grid max-h-[268px] gap-2.5 overflow-y-auto pr-1 sm:grid-cols-2"
                >
                  {visibleUnions.length === 0 ? (
                    <p className="col-span-full py-6 text-center text-sm text-[#B7BBC3]">
                      No verified member unions match &ldquo;{unionQuery}&rdquo;.
                    </p>
                  ) : (
                    visibleUnions.map((union) => (
                      <div
                        key={`${union.country}-${union.name}`}
                        className="rounded-xl border border-white/10 bg-[#101114]/55 p-3.5 transition-colors hover:border-aasu-red/60"
                      >
                        <div className="flex items-center justify-between gap-2 text-[11px]">
                          <span className="inline-flex items-center gap-1.5 font-semibold text-neutral-200">
                            <MapPinned
                              className="h-3.5 w-3.5 text-aasu-red"
                              strokeWidth={1.75}
                              aria-hidden="true"
                            />
                            {union.country}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider text-neutral-400">
                            {union.membershipType}
                          </span>
                        </div>
                        <p className="mt-1.5 font-display text-sm font-semibold leading-snug text-aasu-white">
                          {union.name}
                        </p>
                      </div>
                    ))
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
