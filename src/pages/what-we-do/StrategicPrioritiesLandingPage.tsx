import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { WhatWeDoRelatedNav } from '@/components/layout/WhatWeDoRelatedNav'
import { AppLink } from '@/components/ui/AppLink'
import { Reveal, SectionHeading } from '@/components/ui'
import { PRIORITY_DETAILS } from '@/data/whatWeDo'

export function StrategicPrioritiesLandingPage() {
  return (
    <>
      <InnerPageHero
        title="Our Strategic Priorities"
        subtitle="Seven interconnected priority areas guiding AASU's continental advocacy, student programmes and policy representation."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'What We Do', href: '/what-we-do' },
          { label: 'Our Strategic Priorities' },
        ]}
        images={[
          {
            src: '/images/web/hero-asw.webp',
            alt: 'All-Africa Students Union delegates speaking at Africa Skills Week',
          },
        ]}
      />

      <section className="bg-surface py-16 lg:py-22">
        <Container>
          <Reveal>
            <SectionHeading
              title="Explore All Seven Priorities"
              description="Select any priority area to review its institutional objectives, activities, policy engagements and related publications."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRIORITY_DETAILS.map((priority, idx) => (
              <Reveal key={priority.slug} delay={idx * 0.04}>
                <AppLink
                  href={`/what-we-do/strategic-priorities/${priority.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border-subtle bg-surface-card transition-all duration-200 hover:-translate-y-0.5 hover:border-aasu-red/50 hover:shadow-md"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#101114]">
                    <img
                      src={priority.heroImage}
                      alt={priority.heroImageAlt}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <span className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-aasu-white p-1 shadow-sm">
                      <img
                        src={priority.iconPath}
                        alt=""
                        aria-hidden="true"
                        className="h-full w-full object-contain"
                      />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <span className="font-display text-xs font-semibold tracking-[0.14em] text-aasu-red">
                        Priority {priority.number}
                      </span>
                      <h2 className="mt-1.5 font-display text-lg font-bold leading-snug text-ink transition-colors group-hover:text-aasu-red">
                        {priority.title}
                      </h2>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-secondary">
                        {priority.overview}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-border-subtle pt-4 text-xs font-semibold text-ink group-hover:text-aasu-red">
                      <span>View Priority Details</span>
                      <ArrowUpRight className="h-4 w-4 text-aasu-red" aria-hidden="true" />
                    </div>
                  </div>
                </AppLink>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <WhatWeDoRelatedNav currentPath="/what-we-do/strategic-priorities" />
    </>
  )
}
