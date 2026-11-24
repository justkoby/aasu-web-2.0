import { ArrowUpRight, MapPin } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { MembershipRelatedNav } from '@/components/layout/MembershipRelatedNav'
import { InteractiveAfricaRegionsMap } from '@/components/membership/InteractiveAfricaRegionsMap'
import { AppLink } from '@/components/ui/AppLink'
import { Reveal, SectionHeading } from '@/components/ui'
import {
  AFRICA_REGION_PROFILES,
  CLASSIFICATION_NOTE,
  getUnionsByRegion,
} from '@/data/membership'
import { usePageMeta } from '@/hooks'

export function RegionalMembershipIndexPage() {
  usePageMeta(
    'Regional Membership',
    'Explore AASU regional membership across North, West, Central, East and Southern Africa, including regional hubs, countries and verified member unions.',
  )

  return (
    <>
      <InnerPageHero
        title="Regional Membership"
        subtitle="Explore AASU's continental structure across five African sub-regions: North, West, Central, East and Southern Africa."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Membership', href: '/membership' },
          { label: 'Regional Membership' },
        ]}
        images={[
          {
            src: '/images/web/au-education-2026.webp',
            alt: 'AASU continental delegation engaging at the African Union in Addis Ababa',
          },
        ]}
      />

      {/* Interactive Africa Regional Map */}
      <section className="border-b border-border-subtle bg-surface py-14 lg:py-18">
        <Container>
          <Reveal>
            <SectionHeading
              title="Interactive Continental Explorer"
              description="Select a region to preview its verified union count, country coverage and regional hub, or open its full regional page."
            />
          </Reveal>

          <Reveal delay={0.05} className="mt-9">
            <InteractiveAfricaRegionsMap navigateOnPinClick darkSurface />
          </Reveal>
        </Container>
      </section>

      {/* Five Visually Distinct Regional Cards */}
      <section className="border-b border-border-subtle bg-surface-alt py-16 lg:py-22">
        <Container>
          <Reveal>
            <SectionHeading
              title="Five African Regions"
              description="Each regional page presents verified member unions, country lists, regional Executive Committee representatives and relevant initiatives."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
            {AFRICA_REGION_PROFILES.map((region, idx) => {
              const unionCount = getUnionsByRegion(region.slug).length
              return (
                <Reveal
                  key={region.slug}
                  delay={idx * 0.05}
                  className={idx < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}
                >
                  <AppLink
                    href={`/membership/regions/${region.slug}`}
                    className="group relative flex min-h-[310px] flex-col justify-end overflow-hidden rounded-3xl bg-[#101114] text-aasu-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
                  >
                    <img
                      src={region.heroImage}
                      alt={region.heroImageAlt}
                      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#101114]/95 via-[#101114]/55 to-[#101114]/15"
                      aria-hidden="true"
                    />
                    <div className="relative z-10 p-6">
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className="rounded-full bg-aasu-red px-2.5 py-0.5 font-display font-semibold text-aasu-white">
                          {unionCount} Verified Unions
                        </span>
                        <span className="rounded-full border border-white/25 bg-black/35 px-2.5 py-0.5 text-neutral-200">
                          {region.countries.length} Countries
                        </span>
                      </div>

                      <h2 className="mt-3 font-display text-2xl font-bold text-aasu-white">
                        {region.name}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-200">
                        {region.summary}
                      </p>

                      <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-3.5 text-xs text-neutral-200">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                          Hub: {region.regionalOfficeCountry}
                        </span>
                        <span className="inline-flex items-center gap-1 font-display font-semibold text-aasu-white group-hover:text-aasu-red">
                          <span>Explore</span>
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </AppLink>
                </Reveal>
              )
            })}
          </div>

          {/* Transparent Regional Classification Note */}
          <div className="mt-10 rounded-2xl border border-border-subtle bg-surface-card p-5 text-xs leading-relaxed text-ink-secondary">
            <strong className="font-display font-semibold text-ink">
              Regional Classification Note:
            </strong>{' '}
            {CLASSIFICATION_NOTE}
          </div>
        </Container>
      </section>

      <MembershipRelatedNav currentPath="/membership/regions" />
    </>
  )
}
