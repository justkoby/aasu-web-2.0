import { useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, FileText, Search, Shield } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { PublicationCard } from '@/components/knowledge-hub/PublicationCard'
import { PublicationLibraryExplorer } from '@/components/knowledge-hub/PublicationLibraryExplorer'
import { AppLink } from '@/components/ui/AppLink'
import { Reveal, SectionHeading } from '@/components/ui'
import {
  getFeaturedPublications,
  getPublicPublications,
  getPublicationsByCategory,
  KNOWLEDGE_CATEGORIES,
} from '@/data/publications'
import { usePageMeta } from '@/hooks'
import { AASU_EASE } from '@/lib/motion'

export function KnowledgeHubLandingPage() {
  const prefersReducedMotion = useReducedMotion()
  const libraryRef = useRef<HTMLElement>(null)
  const [heroSearch, setHeroSearch] = useState('')
  const [appliedQuery, setAppliedQuery] = useState('')

  usePageMeta(
    'Knowledge Hub',
    'Ideas, evidence and perspectives for Africa\u2019s future. Search AASU research papers, annual reports, policy briefs, toolkits and institutional documents.',
  )

  const featured = getFeaturedPublications()
  const allPublications = getPublicPublications()

  const handleHeroSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAppliedQuery(heroSearch)
    libraryRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* 1. Editorial Knowledge Hub Hero with Prominent Search */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-[#101114] text-aasu-white lg:min-h-[66vh]">
        <div className="absolute inset-0">
          <img
            src="/images/web/au-education-2026.webp"
            alt="AASU policy research and education dialogue at the African Union"
            className="h-full w-full object-cover object-top"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#101114]/92 via-[#101114]/70 to-[#101114]/40"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#101114]/95 via-[#101114]/35 to-[#101114]/30"
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
              Ideas, Evidence and Perspectives for Africa&apos;s Future.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-200 sm:text-lg">
              Explore AASU&apos;s institutional library of research studies,
              annual reports, policy briefs, toolkits and governing documents
              shaping African education and student leadership.
            </p>

            {/* Prominent Publication Search Bar */}
            <form
              onSubmit={handleHeroSearchSubmit}
              className="mt-7 flex max-w-2xl flex-col gap-2.5 sm:flex-row"
            >
              <label className="relative flex-1">
                <span className="sr-only">
                  Search AASU Knowledge Hub publications
                </span>
                <Search
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={heroSearch}
                  onChange={(e) => setHeroSearch(e.target.value)}
                  placeholder='Search "education financing", "green skills", "student rights"...'
                  className="min-h-[48px] w-full rounded-full border border-white/20 bg-white/10 py-3 pl-11 pr-4 text-sm text-aasu-white placeholder:text-neutral-300 backdrop-blur-md focus:border-aasu-red focus:bg-[#101114]/90 focus:outline-none"
                />
              </label>
              <button
                type="submit"
                className="inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-full bg-aasu-red px-6 py-3 font-display text-xs font-semibold text-aasu-white transition-colors hover:bg-aasu-red-dark"
              >
                <span>Search Library</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>

            {/* Quick Category Pills */}
            <nav
              aria-label="Knowledge Hub categories"
              className="mt-6 flex flex-wrap gap-2"
            >
              {KNOWLEDGE_CATEGORIES.map((cat) => (
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

      {/* 2. Featured Publications Shelf */}
      <section className="border-b border-border-subtle bg-surface py-14 lg:py-18">
        <Container>
          <Reveal>
            <SectionHeading
              title="Featured Publications"
              description="Recent flagship toolkits, case books and institutional reports with original covers."
            />
          </Reveal>

          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((pub) => (
              <PublicationCard key={pub.id} publication={pub} />
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Browse by Document Category */}
      <section className="border-b border-border-subtle bg-surface-alt py-14 lg:py-18">
        <Container>
          <Reveal>
            <SectionHeading
              title="Browse by Collection"
              description="Five curated publication collections powered by AASU's central document registry."
            />
          </Reveal>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {KNOWLEDGE_CATEGORIES.map((cat) => {
              const count = getPublicationsByCategory(cat.id).length
              return (
                <AppLink
                  key={cat.id}
                  href={cat.href}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border-subtle bg-surface-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-aasu-red/50 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <FileText
                        className="h-5 w-5 text-aasu-red"
                        aria-hidden="true"
                      />
                      <span className="rounded-full bg-surface-alt px-2.5 py-0.5 font-display text-[11px] font-semibold text-ink-muted">
                        {count}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-base font-bold leading-snug text-ink group-hover:text-aasu-red">
                      {cat.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink-secondary">
                      {cat.description}
                    </p>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <ArrowUpRight
                      className="h-4 w-4 text-aasu-red"
                      aria-hidden="true"
                    />
                  </div>
                </AppLink>
              )
            })}
          </div>
        </Container>
      </section>

      {/* 4. Full Searchable Resource Library */}
      <section
        ref={libraryRef}
        id="library"
        className="border-b border-border-subtle bg-surface py-14 lg:py-18"
      >
        <Container>
          <Reveal>
            <SectionHeading
              title="Searchable Resource Library"
              description="Filter verified AASU publications by document type, year, strategic priority or language."
            />
          </Reveal>

          <div className="mt-8">
            <PublicationLibraryExplorer
              key={appliedQuery}
              publications={allPublications}
              initialQuery={appliedQuery}
              showCategoryFilter
              pageSize={9}
            />
          </div>
        </Container>
      </section>

      {/* 5. Institutional Documents Shortcut */}
      <section className="bg-[#101114] py-14 text-aasu-white lg:py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 font-display text-xs font-semibold text-aasu-red">
                <Shield className="h-4 w-4" aria-hidden="true" />
                <span>Governing Instruments &amp; Policies</span>
              </div>
              <h2 className="mt-2 font-display text-2xl font-bold text-aasu-white sm:text-3xl">
                Looking for Institutional Documents &amp; Congress Resolutions?
              </h2>
              <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-[#B7BBC3]">
                Access the AASU Gender Policy, 2026 Annual Programme, 14th
                Elective Congress Election Guidelines and archived Congress
                resolutions in English and French.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <AppLink
                href="/knowledge-hub/institutional-documents"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-aasu-red px-6 py-2.5 font-display text-xs font-semibold text-aasu-white transition-colors hover:bg-aasu-red-dark"
              >
                <span>Open Institutional Documents</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </AppLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
