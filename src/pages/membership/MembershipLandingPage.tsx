import { ArrowRight, ArrowUpRight, MapPinned } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { AnimatedStatCounter } from '@/components/membership/AnimatedStatCounter'
import { InteractiveAfricaRegionsMap } from '@/components/membership/InteractiveAfricaRegionsMap'
import { AppLink } from '@/components/ui/AppLink'
import { Button, Reveal, SectionHeading } from '@/components/ui'
import {
  FEATURED_MEMBER_UNIONS,
  MEMBERSHIP_ENTRY_CARDS,
  MEMBERSHIP_STATS,
} from '@/data/membership'
import { usePageMeta } from '@/hooks'
import { AASU_EASE } from '@/lib/motion'

export function MembershipLandingPage() {
  const prefersReducedMotion = useReducedMotion()

  usePageMeta(
    'Membership',
    'Explore the continental membership network of the All-Africa Students Union (AASU) across North, West, Central, East and Southern Africa.',
  )

  return (
    <>
      {/* 1. Editorial Photography Hero */}
      <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-[#101114] text-aasu-white lg:min-h-[68vh]">
        <div className="absolute inset-0">
          <img
            src="/images/web/students-letters.webp"
            alt="African student leaders standing together holding large red AASU emblem letters"
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#101114]/88 via-[#101114]/55 to-transparent"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#101114]/92 via-[#101114]/25 to-[#101114]/30"
            aria-hidden="true"
          />
        </div>

        <Container className="relative z-10 pb-14 pt-32 sm:pb-18 sm:pt-36">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: AASU_EASE }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-aasu-white sm:text-5xl lg:text-[3.75rem]">
              One Continent. A United Student Voice.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-200 sm:text-lg">
              AASU unites national student unions, university representative
              councils and student organisations across 54 African countries,
              amplifying learner voices in continental and international
              decision-making since 1972.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Button href="/membership/member-unions" variant="primary" size="md">
                <span>Explore Member Unions</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                href="/membership/affiliation"
                variant="outlineLight"
                size="md"
              >
                <span>Membership &amp; Affiliation</span>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* 2. Membership at a Glance */}
      <section className="border-b border-border-subtle bg-surface py-16 lg:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              title="Membership at a Glance"
              description="Verified directory reach alongside AASU's continental representative mandate across five African regions."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {MEMBERSHIP_STATS.map((stat, idx) => (
              <Reveal key={stat.id} delay={idx * 0.05}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-border-subtle bg-surface-card p-6">
                  <div>
                    <p className="font-display text-4xl font-bold tracking-tight text-aasu-red sm:text-[2.75rem]">
                      <AnimatedStatCounter
                        value={stat.numericValue}
                        suffix={stat.suffix}
                      />
                    </p>
                    <h3 className="mt-2 font-display text-base font-bold text-ink">
                      {stat.label}
                    </h3>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-ink-secondary sm:text-sm">
                    {stat.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Explore Our Membership (5 Photography-Led Cards) */}
      <section className="border-b border-border-subtle bg-surface-alt py-16 lg:py-22">
        <Container>
          <Reveal>
            <SectionHeading
              title="Explore Our Membership"
              description="Navigate AASU's representative structure, searchable union directory, five African regions, affiliation guidelines and member services."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
            {MEMBERSHIP_ENTRY_CARDS.map((card, idx) => (
              <Reveal
                key={card.id}
                delay={idx * 0.05}
                className={idx < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}
              >
                <AppLink
                  href={card.href}
                  className="group relative flex min-h-[290px] flex-col justify-end overflow-hidden rounded-3xl bg-[#101114] text-aasu-white shadow-sm transition-shadow duration-300 hover:shadow-xl sm:min-h-[320px]"
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
                  <div className="relative z-10 flex items-end justify-between gap-4 p-6">
                    <div>
                      <h3 className="font-display text-xl font-bold leading-snug text-aasu-white sm:text-2xl">
                        {card.title}
                      </h3>
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

      {/* 4. Our Continental Presence (Interactive 5-Region Map) */}
      <section className="border-b border-border-subtle bg-surface py-16 lg:py-22">
        <Container>
          <Reveal>
            <SectionHeading
              title="Our Continental Presence"
              description="Select any of Africa's five sub-regions to view regional membership hubs, country coverage and verified student unions."
            />
          </Reveal>

          <Reveal delay={0.05} className="mt-9">
            <InteractiveAfricaRegionsMap navigateOnPinClick darkSurface />
          </Reveal>
        </Container>
      </section>

      {/* 5. Featured Member Unions */}
      <section className="border-b border-border-subtle bg-surface-alt py-16 lg:py-22">
        <Container>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <Reveal>
              <SectionHeading
                title="Featured Member Unions"
                description="A verified selection of national and university member organisations across North, West, Central, East and Southern Africa."
              />
            </Reveal>
            <AppLink
              href="/membership/member-unions"
              className="inline-flex shrink-0 items-center gap-1.5 font-display text-sm font-semibold text-ink transition-colors hover:text-aasu-red"
            >
              <span>View Full Directory</span>
              <ArrowUpRight className="h-4 w-4 text-aasu-red" aria-hidden="true" />
            </AppLink>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_MEMBER_UNIONS.map((union, idx) => (
              <Reveal key={union.slug} delay={idx * 0.04}>
                <AppLink
                  href={`/membership/member-unions/${union.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border-subtle bg-surface-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-aasu-red/50 hover:shadow-md"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="inline-flex items-center gap-1.5 font-medium text-ink-secondary">
                        <MapPinned
                          className="h-3.5 w-3.5 text-aasu-red"
                          aria-hidden="true"
                        />
                        {union.country}
                      </span>
                      <span className="rounded-full border border-border-subtle bg-surface-alt px-2.5 py-0.5 text-[11px] font-medium text-ink-secondary">
                        {union.category}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-base font-bold leading-snug text-ink transition-colors group-hover:text-aasu-red sm:text-lg">
                      {union.name}
                    </h3>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-border-subtle pt-3.5 text-xs">
                    <span className="text-ink-muted">{union.regionName}</span>
                    <span className="inline-flex items-center gap-1 font-display font-semibold text-ink group-hover:text-aasu-red">
                      <span>View Profile</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>
                </AppLink>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Membership CTA */}
      <section className="bg-[#101114] py-16 text-aasu-white lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-7">
              <h2 className="font-display text-3xl font-bold tracking-tight text-aasu-white sm:text-4xl">
                Representing a Student Union or Youth Organisation?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#B7BBC3]">
                Learn how national student unions, tertiary institutions and
                student-led organisations affiliate with AASU, or reach out to
                our Secretariat for member support and directory updates.
              </p>
            </Reveal>

            <Reveal
              delay={0.05}
              className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end"
            >
              <Button href="/membership/affiliation" variant="primary" size="md">
                <span>Membership &amp; Affiliation</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                href="/membership/services"
                variant="outlineLight"
                size="md"
              >
                <span>Member Services</span>
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
