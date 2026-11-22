import { BookOpen, Eye, Globe, Shield, Target, Users } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { RelatedPagesNav } from '@/components/layout/RelatedPagesNav'
import { Reveal, SectionHeading } from '@/components/ui'
import { WHO_WE_ARE_DATA } from '@/data/about'

const PILLAR_ICONS = [Shield, Target, BookOpen, Globe, Users]

export function WhoWeArePage() {
  return (
    <>
      <InnerPageHero
        title={WHO_WE_ARE_DATA.heroTitle}
        subtitle={WHO_WE_ARE_DATA.heroSubtitle}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About AASU', href: '/about' },
          { label: 'Who We Are' },
        ]}
        images={[
          {
            src: '/images/web/hero-asw.webp',
            alt: 'All-Africa Students Union delegates speaking at Africa Skills Week',
          },
        ]}
      />

      {/* A. Institutional Overview */}
      <section className="border-b border-border-subtle bg-surface py-16 lg:py-22">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-6">
              <SectionHeading title="Institutional Overview" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-secondary">
                {WHO_WE_ARE_DATA.overviewParagraphs.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-6">
              <figure className="overflow-hidden rounded-3xl border border-border-subtle bg-surface-alt">
                <img
                  src="/images/web/au-education-2026.webp"
                  alt="AASU representative addressing the Innovating Education in Africa 2026 Policy Dialogue in Addis Ababa"
                  className="aspect-[4/3] w-full object-cover object-top"
                  loading="lazy"
                />
                <figcaption className="px-5 py-3.5 text-xs text-ink-secondary">
                  AASU policy representation at the African Union, Addis Ababa
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* B & C. Vision and Mission Panels */}
      <section className="border-b border-border-subtle bg-surface-alt py-16 lg:py-22">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <article className="flex h-full flex-col justify-between rounded-3xl border border-border-subtle bg-surface-card p-8 sm:p-10">
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-alt text-aasu-red">
                    <Eye className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h2 className="mt-6 font-display text-2xl font-bold text-ink sm:text-3xl">
                    Our Vision
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-ink-secondary sm:text-lg">
                    {WHO_WE_ARE_DATA.vision}
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.06}>
              <article className="flex h-full flex-col justify-between rounded-3xl bg-[#121212] p-8 text-aasu-white dark:border dark:border-border-subtle dark:bg-[#181A1F] sm:p-10">
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-aasu-red text-aasu-white">
                    <Target className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h2 className="mt-6 font-display text-2xl font-bold text-aasu-white sm:text-3xl">
                    Our Mission
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-neutral-200 sm:text-lg">
                    {WHO_WE_ARE_DATA.mission}
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* D. Core Values */}
      <section className="border-b border-border-subtle bg-surface py-16 lg:py-22">
        <Container>
          <Reveal>
            <SectionHeading
              title="Our Core Values"
              description="The principles guiding AASU's representation, democratic governance and continental solidarity."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {WHO_WE_ARE_DATA.coreValues.map((value, idx) => (
              <Reveal key={value.title} delay={idx * 0.04}>
                <article className="flex h-full flex-col rounded-2xl border border-border-subtle bg-surface-alt p-6">
                  <span className="font-display text-xs font-bold tracking-[0.14em] text-aasu-red">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                    {value.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* E. Our Mandate */}
      <section className="bg-surface-alt py-16 lg:py-22">
        <Container>
          <Reveal>
            <SectionHeading
              title="Our Mandate"
              description={WHO_WE_ARE_DATA.mandateIntro}
            />
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHO_WE_ARE_DATA.mandatePillars.map((pillar, idx) => {
              const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length]
              return (
                <Reveal key={pillar.title} delay={idx * 0.04}>
                  <article className="flex h-full flex-col rounded-2xl border border-border-subtle bg-surface-card p-6">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-surface-alt text-aasu-red">
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-ink">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                      {pillar.description}
                    </p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      <RelatedPagesNav currentPath="/about/who-we-are" />
    </>
  )
}
