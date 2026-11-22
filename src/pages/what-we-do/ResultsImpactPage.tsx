import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { WhatWeDoRelatedNav } from '@/components/layout/WhatWeDoRelatedNav'
import { DocumentCard } from '@/components/ui/DocumentCard'
import { Reveal, SectionHeading } from '@/components/ui'
import {
  ANNUAL_HIGHLIGHT_REPORTS,
  IMPACT_METRICS,
  IMPACT_STORIES,
} from '@/data/whatWeDo'

export function ResultsImpactPage() {
  return (
    <>
      <InnerPageHero
        title="Results & Impact"
        subtitle="Institutional achievements, programme outcomes, policy contributions and official annual reports from across Africa's student movement."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'What We Do', href: '/what-we-do' },
          { label: 'Results & Impact' },
        ]}
        images={[
          {
            src: '/images/web/leadershift-audience.webp',
            alt: 'Participants at the AASU Leader-Shift Summit',
          },
        ]}
      />

      {/* Headline Impact Metrics */}
      <section className="border-b border-border-subtle bg-surface py-16 lg:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              title="Institutional Achievements at a Glance"
              description="Cumulative reach across AASU's programmes, dialogues and partnerships."
            />

            <dl className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {IMPACT_METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-border-subtle bg-surface-alt p-6"
                >
                  <dd className="font-display text-3xl font-bold text-ink sm:text-4xl">
                    {metric.value}
                  </dd>
                  <dt className="mt-1 font-display text-sm font-semibold text-ink">
                    {metric.label}
                  </dt>
                  <p className="mt-1 text-xs text-ink-secondary">
                    {metric.detail}
                  </p>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-[11px] text-ink-muted">
              * Figures sourced from AASU programme records and subject to final
              institutional verification prior to production publication.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Impact Stories & Case Studies */}
      <section className="border-b border-border-subtle bg-surface-alt py-16 lg:py-22">
        <Container>
          <Reveal>
            <SectionHeading
              title="Impact Stories & Case Studies"
              description="Verified 2026 milestones demonstrating AASU's programme outcomes and policy influence."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {IMPACT_STORIES.map((story, idx) => (
              <Reveal key={story.id} delay={idx * 0.05}>
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border-subtle bg-surface-card">
                  <div className="aspect-[16/10] overflow-hidden bg-[#101114]">
                    <img
                      src={story.image}
                      alt={story.imageAlt}
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-aasu-red">
                        {story.tag}
                      </span>
                      <h3 className="mt-2 font-display text-lg font-bold leading-snug text-ink">
                        {story.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary">
                        {story.summary}
                      </p>
                    </div>
                    <p className="mt-5 border-t border-border-subtle pt-4 text-xs font-semibold text-ink">
                      {story.outcome}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Annual Highlights & Official Reports */}
      <section className="bg-surface py-16 lg:py-22">
        <Container>
          <Reveal>
            <SectionHeading
              title="Annual Highlights & Official Reports"
              description="Download verified AASU annual reports, impact assessments and summit reports."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ANNUAL_HIGHLIGHT_REPORTS.map((doc) => (
              <DocumentCard key={doc.id} document={doc} />
            ))}
          </div>
        </Container>
      </section>

      <WhatWeDoRelatedNav currentPath="/what-we-do/results-impact" />
    </>
  )
}
