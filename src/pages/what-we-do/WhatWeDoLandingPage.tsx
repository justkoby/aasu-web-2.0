import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { AppLink } from '@/components/ui/AppLink'
import { Reveal, SectionHeading } from '@/components/ui'
import { PRIORITY_DETAILS, WHAT_WE_DO_ENTRY_CARDS } from '@/data/whatWeDo'

export function WhatWeDoLandingPage() {
  return (
    <>
      <InnerPageHero
        title="What We Do"
        subtitle="Advancing African student rights, leadership, education policy and sustainable development through seven strategic priorities and continental programmes."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'What We Do' },
        ]}
        images={[
          {
            src: '/images/web/cfs-panel.webp',
            alt: 'AASU and partners during the Climate Forward Summit',
          },
          {
            src: '/images/web/leadershift-audience.webp',
            alt: 'Student leaders engaged at the AASU Leader-Shift Summit',
          },
        ]}
      />

      {/* Five Pillars of Our Work */}
      <section className="border-b border-border-subtle bg-surface py-16 lg:py-22">
        <Container>
          <Reveal>
            <SectionHeading
              title="Areas of Action"
              description="Explore how AASU translates its continental mandate into programmes, advocacy, policy representation and measurable outcomes."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WHAT_WE_DO_ENTRY_CARDS.map((card, idx) => (
              <Reveal
                key={card.id}
                delay={idx * 0.05}
                className={idx < 2 ? 'lg:col-span-3 md:col-span-1 lg:odd:col-span-2 lg:even:col-span-1' : undefined}
              >
                <AppLink
                  href={card.href}
                  className="group relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-3xl bg-[#101114] text-aasu-white shadow-sm transition-shadow duration-300 hover:shadow-xl sm:min-h-[330px]"
                >
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#101114]/95 via-[#101114]/55 to-[#101114]/15"
                    aria-hidden="true"
                  />
                  <div className="relative z-10 flex items-end justify-between gap-4 p-6 sm:p-7">
                    <div>
                      <h2 className="font-display text-xl font-bold leading-snug text-aasu-white sm:text-2xl">
                        {card.title}
                      </h2>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-neutral-200">
                        {card.description}
                      </p>
                    </div>
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-aasu-white backdrop-blur-xs transition-colors group-hover:border-aasu-red group-hover:bg-aasu-red">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </AppLink>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Quick Directory of All 7 Official Strategic Priorities */}
      <section className="bg-surface-alt py-16 lg:py-22">
        <Container>
          <Reveal>
            <SectionHeading
              title="Our Seven Strategic Priorities"
              description="Each priority area has a dedicated page outlining its objectives, activities, policy engagements and publications."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRIORITY_DETAILS.map((priority) => (
              <AppLink
                key={priority.slug}
                href={`/what-we-do/strategic-priorities/${priority.slug}`}
                className="group flex items-start gap-4 rounded-2xl border border-border-subtle bg-surface-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-aasu-red/50 hover:shadow-md"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-aasu-white p-1">
                  <img
                    src={priority.iconPath}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-contain"
                  />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="font-display text-xs font-semibold tracking-[0.14em] text-aasu-red">
                    {priority.number}
                  </span>
                  <h3 className="mt-0.5 font-display text-base font-bold leading-snug text-ink transition-colors group-hover:text-aasu-red">
                    {priority.title}
                  </h3>
                </div>
                <ArrowUpRight
                  className="mt-1 h-4 w-4 shrink-0 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-aasu-red"
                  aria-hidden="true"
                />
              </AppLink>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
