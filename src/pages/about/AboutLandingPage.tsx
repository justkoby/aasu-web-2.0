import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { AppLink } from '@/components/ui/AppLink'
import { Reveal, SectionHeading } from '@/components/ui'
import { ABOUT_ENTRY_CARDS } from '@/data/about'
import { CONTINENTAL_STATS } from '@/data/homepage'

export function AboutLandingPage() {
  return (
    <>
      <InnerPageHero
        title="About the All-Africa Students Union"
        subtitle="An autonomous, democratic and student-led continental representative organisation uniting African student unions since 1972."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About AASU' },
        ]}
        images={[
          {
            src: '/images/web/hero-asw.webp',
            alt: 'All-Africa Students Union delegates on stage at Africa Skills Week alongside African Union and Ghana flags',
          },
          {
            src: '/images/web/inauguration-2026.webp',
            alt: 'All-Africa Students Union leadership at the 2026 Inauguration and Honours Ceremony',
          },
        ]}
      />

      {/* Four Image-Led Entry Cards */}
      <section className="border-b border-border-subtle bg-surface py-16 lg:py-22">
        <Container>
          <Reveal>
            <SectionHeading
              title="Explore the Union"
              description="Discover AASU's institutional mandate, five-decade history, democratic governance structures and continental partnerships."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {ABOUT_ENTRY_CARDS.map((card, idx) => (
              <Reveal key={card.id} delay={idx * 0.06}>
                <AppLink
                  href={card.href}
                  className="group relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-3xl bg-[#101114] text-aasu-white shadow-sm transition-shadow duration-300 hover:shadow-xl sm:min-h-[380px]"
                >
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#101114]/95 via-[#101114]/50 to-[#101114]/15"
                    aria-hidden="true"
                  />

                  <div className="relative z-10 p-6 sm:p-8">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h2 className="font-display text-2xl font-bold leading-snug text-aasu-white sm:text-3xl">
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
                  </div>
                </AppLink>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Concise Continental Snapshot Strip */}
      <section className="bg-surface-alt py-14 lg:py-18">
        <Container>
          <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {CONTINENTAL_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border-subtle bg-surface-card p-6"
              >
                <dd className="font-display text-3xl font-bold text-ink sm:text-4xl">
                  <span>{stat.value}</span>
                  {stat.needsConfirmation && (
                    <span className="ml-0.5 align-super text-xs font-semibold text-aasu-red">
                      *
                    </span>
                  )}
                </dd>
                <dt className="mt-1 text-xs font-medium text-ink-secondary sm:text-sm">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-[11px] text-ink-muted">
            * Figures subject to final institutional verification prior to
            production publication.
          </p>
        </Container>
      </section>
    </>
  )
}
