import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { WhatWeDoRelatedNav } from '@/components/layout/WhatWeDoRelatedNav'
import { Reveal, SectionHeading } from '@/components/ui'
import { PROGRAMMES_CATALOG } from '@/data/whatWeDo'
import type { ProgrammeBucket } from '@/data/whatWeDo'
import { cn } from '@/lib/utils'

const BUCKET_FILTERS: ('All' | ProgrammeBucket)[] = [
  'All',
  'Flagship Programmes',
  'Ongoing Programmes & Projects',
  'Completed Programmes & Projects',
  'Joint & Collaborative Initiatives',
]

export function ProgrammesPage() {
  const [activeBucket, setActiveBucket] = useState<'All' | ProgrammeBucket>('All')

  const visibleProgrammes =
    activeBucket === 'All'
      ? PROGRAMMES_CATALOG
      : PROGRAMMES_CATALOG.filter((p) => p.bucket === activeBucket)

  return (
    <>
      <InnerPageHero
        title="Programmes & Initiatives"
        subtitle="Flagship, ongoing, completed and collaborative initiatives advancing student leadership, employability, mobility and sustainability across Africa."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'What We Do', href: '/what-we-do' },
          { label: 'Programmes & Initiatives' },
        ]}
        images={[
          {
            src: '/images/web/cfs-panel.webp',
            alt: 'Climate Forward Summit panel on green skills and sustainable economies',
          },
        ]}
      />

      <section className="bg-surface py-16 lg:py-22">
        <Container>
          <Reveal>
            <SectionHeading
              title="Explore AASU Programmes"
              description="Filter verified AASU initiatives across flagship programmes, ongoing projects, completed activities and joint international collaborations."
            />
          </Reveal>

          <div
            role="tablist"
            aria-label="Filter programmes by category"
            className="mt-8 flex flex-wrap gap-2"
          >
            {BUCKET_FILTERS.map((bucket) => (
              <button
                key={bucket}
                type="button"
                role="tab"
                aria-selected={activeBucket === bucket}
                onClick={() => setActiveBucket(bucket)}
                className={cn(
                  'rounded-full px-4 py-2 font-display text-xs font-medium transition-colors cursor-pointer',
                  activeBucket === bucket
                    ? 'bg-aasu-red text-aasu-white'
                    : 'border border-border-subtle bg-surface-alt text-ink hover:border-ink/40',
                )}
              >
                {bucket}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {visibleProgrammes.map((prog) => (
              <article
                key={prog.id}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-border-subtle bg-surface-card"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#101114]">
                  <img
                    src={prog.image}
                    alt={prog.imageAlt}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-aasu-red px-3 py-1 text-[11px] font-semibold text-aasu-white">
                    {prog.bucket}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <span className="text-xs font-semibold text-aasu-red">
                      {prog.priorityArea}
                    </span>
                    <h2 className="mt-1.5 font-display text-xl font-bold text-ink sm:text-2xl">
                      {prog.title}
                    </h2>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary">
                      {prog.summary}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {prog.focusPoints.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-xs leading-relaxed text-ink sm:text-sm"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red"
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 border-t border-border-subtle pt-4 text-xs font-medium text-ink-muted">
                    {prog.impact}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <WhatWeDoRelatedNav currentPath="/what-we-do/programmes" />
    </>
  )
}
