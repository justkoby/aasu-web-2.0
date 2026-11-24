import { useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, Briefcase, Search } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { OpportunityCard } from '@/components/opportunities/OpportunityCard'
import { OpportunityExplorer } from '@/components/opportunities/OpportunityExplorer'
import { AppLink } from '@/components/ui/AppLink'
import { Reveal, SectionHeading } from '@/components/ui'
import {
  getOpportunitiesByCategory,
  getPublishedOpportunities,
  OPPORTUNITY_CATEGORIES,
} from '@/data/opportunities'
import { usePageMeta } from '@/hooks'
import { AASU_EASE } from '@/lib/motion'

export function OpportunitiesLandingPage() {
  const prefersReducedMotion = useReducedMotion()
  const directoryRef = useRef<HTMLElement>(null)
  const [heroSearch, setHeroSearch] = useState('')
  const [appliedQuery, setAppliedQuery] = useState('')

  usePageMeta(
    'Opportunities Portal',
    'Find verified AASU internships, volunteering pathways, leadership training programmes, scholarships and recruitment announcements across Africa.',
  )

  const allOpportunities = getPublishedOpportunities()
  const currentOpportunities = allOpportunities.filter(
    (o) => o.status === 'open' || o.status === 'rolling',
  )

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAppliedQuery(heroSearch)
    directoryRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* 1. Opportunities Hero */}
      <section className="relative flex min-h-[58vh] items-end overflow-hidden bg-[#101114] text-aasu-white lg:min-h-[64vh]">
        <div className="absolute inset-0">
          <img
            src="/images/web/leadershift-audience.webp"
            alt="African students participating in an AASU leadership programme"
            className="h-full w-full object-cover object-top"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#101114]/92 via-[#101114]/68 to-[#101114]/35"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#101114]/95 via-[#101114]/30 to-[#101114]/30"
            aria-hidden="true"
          />
        </div>

        <Container className="relative z-10 pb-14 pt-32 sm:pb-18 sm:pt-36">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: AASU_EASE }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl font-bold leading-[1.06] tracking-tight text-aasu-white sm:text-5xl lg:text-[3.6rem]">
              Find Your Next Opportunity.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-200 sm:text-lg">
              Explore verified AASU internships, volunteering streams, training
              cohorts, scholarships and recruitment announcements clearly
              distinguished from third-party calls.
            </p>

            <form
              onSubmit={handleHeroSubmit}
              className="mt-7 flex max-w-2xl flex-col gap-2.5 sm:flex-row"
            >
              <label className="relative flex-1">
                <span className="sr-only">Search AASU opportunities</span>
                <Search
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={heroSearch}
                  onChange={(e) => setHeroSearch(e.target.value)}
                  placeholder="Search internships, volunteering, NELS, scholarships..."
                  className="min-h-[48px] w-full rounded-full border border-white/20 bg-white/10 py-3 pl-11 pr-4 text-sm text-aasu-white placeholder:text-neutral-300 backdrop-blur-md focus:border-aasu-red focus:bg-[#101114]/90 focus:outline-none"
                />
              </label>
              <button
                type="submit"
                className="inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-full bg-aasu-red px-6 py-3 font-display text-xs font-semibold text-aasu-white transition-colors hover:bg-aasu-red-dark"
              >
                <span>Search Opportunities</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>

            <nav
              aria-label="Opportunity categories"
              className="mt-6 flex flex-wrap gap-2"
            >
              {OPPORTUNITY_CATEGORIES.map((cat) => (
                <AppLink
                  key={cat.id}
                  href={cat.href}
                  className="inline-flex min-h-[36px] items-center rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 font-display text-xs font-medium text-neutral-100 backdrop-blur-xs transition-colors hover:border-aasu-red hover:bg-aasu-red hover:text-aasu-white"
                >
                  {cat.shortTitle}
                </AppLink>
              ))}
            </nav>
          </motion.div>
        </Container>
      </section>

      {/* 2. Featured Current / Rolling Opportunities */}
      <section className="border-b border-border-subtle bg-surface py-14 lg:py-18">
        <Container>
          <Reveal>
            <SectionHeading
              title="Current & Rolling Pathways"
              description="Active AASU-run opportunities open for rolling enquiries or cohort registration. Expired calls are clearly archived below."
            />
          </Reveal>

          <div className="mt-9 grid gap-6 md:grid-cols-3">
            {currentOpportunities.map((item) => (
              <OpportunityCard key={item.id} opportunity={item} />
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Four Opportunity Categories */}
      <section className="border-b border-border-subtle bg-surface-alt py-14 lg:py-18">
        <Container>
          <Reveal>
            <SectionHeading
              title="Browse by Category"
              description="Explore dedicated pathways for scholarships, training, internships and recruitment at AASU."
            />
          </Reveal>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {OPPORTUNITY_CATEGORIES.map((cat) => {
              const count = getOpportunitiesByCategory(cat.id).length
              return (
                <AppLink
                  key={cat.id}
                  href={cat.href}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border-subtle bg-surface-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-aasu-red/50 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <Briefcase
                        className="h-5 w-5 text-aasu-red"
                        aria-hidden="true"
                      />
                      <span className="rounded-full bg-surface-alt px-2.5 py-0.5 font-display text-[11px] font-semibold text-ink-muted">
                        {count}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-base font-bold text-ink group-hover:text-aasu-red">
                      {cat.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink-secondary">
                      {cat.description}
                    </p>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <ArrowUpRight className="h-4 w-4 text-aasu-red" aria-hidden="true" />
                  </div>
                </AppLink>
              )
            })}
          </div>
        </Container>
      </section>

      {/* 4. Full Searchable Opportunities Directory */}
      <section ref={directoryRef} className="bg-surface py-14 lg:py-18">
        <Container>
          <Reveal>
            <SectionHeading
              title="All Verified Opportunities & Archive"
              description="Filter by application status, AASU vs. third-party source, or location."
            />
          </Reveal>

          <div className="mt-8">
            <OpportunityExplorer
              key={appliedQuery}
              opportunities={allOpportunities}
              initialQuery={appliedQuery}
            />
          </div>
        </Container>
      </section>
    </>
  )
}
