import { CheckCircle2, Globe2, Landmark, MessageSquare, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { WhatWeDoRelatedNav } from '@/components/layout/WhatWeDoRelatedNav'
import { DocumentCard } from '@/components/ui/DocumentCard'
import { Reveal, SectionHeading } from '@/components/ui'
import { ANNUAL_HIGHLIGHT_REPORTS, POLICY_PILLARS } from '@/data/whatWeDo'

const PILLAR_ICONS = [Landmark, Globe2, ShieldCheck, MessageSquare]

export function PolicyEngagementPage() {
  return (
    <>
      <InnerPageHero
        title="Policy Engagement & Representation"
        subtitle="Ensuring African students are recognised as active partners in continental, regional and international education and governance decision-making."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'What We Do', href: '/what-we-do' },
          { label: 'Policy Engagement & Representation' },
        ]}
        images={[
          {
            src: '/images/web/au-education-2026.webp',
            alt: 'AASU representative speaking at Innovating Education in Africa 2026 in Addis Ababa',
          },
        ]}
      />

      <section className="border-b border-border-subtle bg-surface py-16 lg:py-22">
        <Container>
          <Reveal>
            <SectionHeading
              title="Representation Across Policy Spaces"
              description="From the African Union and regional economic communities to UNESCO and global higher education forums."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {POLICY_PILLARS.map((pillar, idx) => {
              const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length]
              return (
                <Reveal key={pillar.id} delay={idx * 0.05}>
                  <article className="flex h-full flex-col rounded-3xl border border-border-subtle bg-surface-alt p-7 sm:p-8">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-surface-card text-aasu-red">
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <h2 className="mt-5 font-display text-2xl font-bold text-ink">
                      {pillar.title}
                    </h2>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary sm:text-base">
                      {pillar.summary}
                    </p>

                    <ul className="mt-6 space-y-3 border-t border-border-subtle pt-5">
                      {pillar.engagements.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-relaxed text-ink"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="bg-surface-alt py-16 lg:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              title="Policy & Summit Documentation"
              description="Verified reports documenting AASU's continental policy contributions."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {ANNUAL_HIGHLIGHT_REPORTS.slice(2, 4).map((doc) => (
              <DocumentCard key={doc.id} document={doc} />
            ))}
          </div>
        </Container>
      </section>

      <WhatWeDoRelatedNav currentPath="/what-we-do/policy-engagement" />
    </>
  )
}
