import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, BookOpen, MapPin, MapPinned } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { AppLink } from '@/components/ui/AppLink'
import { Reveal, SectionHeading } from '@/components/ui'
import {
  AFRICA_REGION_PROFILES,
  getRegionBySlug,
  getRegionalLeadership,
  getUnionsByRegion,
} from '@/data/membership'
import { usePageMeta } from '@/hooks'
import { cn } from '@/lib/utils'

export function RegionalDetailPage() {
  const { region: regionParam } = useParams<{ region: string }>()
  const region = getRegionBySlug(regionParam)
  const [selectedCountry, setSelectedCountry] = useState<string>('all')

  usePageMeta(
    region ? `${region.name} Membership` : 'Regional Membership',
    region
      ? `Explore verified AASU member unions, countries, regional leadership and initiatives across ${region.name}.`
      : 'Explore AASU regional membership across Africa.',
  )

  if (!region) {
    return <Navigate to="/membership/regions" replace />
  }

  const regionUnions = getUnionsByRegion(region.slug)
  const regionalLeaders = getRegionalLeadership(region.name)
  const otherRegions = AFRICA_REGION_PROFILES.filter(
    (item) => item.slug !== region.slug,
  )

  const activeCountryRecord = region.countries.find(
    (c) => c.name === selectedCountry,
  )
  const effectiveCountry = activeCountryRecord ? selectedCountry : 'all'

  const visibleUnions =
    effectiveCountry === 'all'
      ? regionUnions
      : regionUnions.filter((u) => u.country === effectiveCountry)

  return (
    <>
      <InnerPageHero
        title={region.name}
        subtitle={region.introduction}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Membership', href: '/membership' },
          { label: 'Regional Membership', href: '/membership/regions' },
          { label: region.name },
        ]}
        images={[
          {
            src: region.heroImage,
            alt: region.heroImageAlt,
          },
        ]}
      />

      {/* 1. Regional Summary Strip + Country Selector */}
      <section className="border-b border-border-subtle bg-surface py-12 lg:py-16">
        <Container>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle pb-5">
            <AppLink
              href="/membership/regions"
              className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ink transition-colors hover:text-aasu-red"
            >
              <ArrowLeft className="h-4 w-4 text-aasu-red" aria-hidden="true" />
              <span>All Five African Regions</span>
            </AppLink>
            <span className="inline-flex items-center gap-1.5 text-xs text-ink-secondary">
              <MapPin className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
              Planned Regional Office: {region.regionalOfficeCountry} (
              {region.regionalOfficeStatus})
            </span>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                Countries &amp; Verified Member Unions
              </h2>
              <p className="mt-1.5 text-sm text-ink-secondary">
                {regionUnions.length} verified member organisations across{' '}
                {region.countries.length} countries in {region.name}.
              </p>
            </div>
            <AppLink
              href={`/membership/member-unions?region=${region.slug}`}
              className="inline-flex items-center gap-1.5 font-display text-xs font-semibold text-ink hover:text-aasu-red"
            >
              <span>Open in Full Directory</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
            </AppLink>
          </div>

          {/* Country Filter Pills (Works Cleanly on Mobile & Desktop) */}
          <div
            role="group"
            aria-label={`Filter ${region.name} unions by country`}
            className="mt-6 flex flex-wrap gap-2"
          >
            <button
              type="button"
              onClick={() => setSelectedCountry('all')}
              aria-pressed={effectiveCountry === 'all'}
              className={cn(
                'min-h-[36px] cursor-pointer rounded-full px-3.5 py-1.5 font-display text-xs font-medium transition-colors',
                effectiveCountry === 'all'
                  ? 'bg-aasu-red text-aasu-white'
                  : 'border border-border-subtle bg-surface-alt text-ink-secondary hover:border-aasu-red/50 hover:text-ink',
              )}
            >
              All Countries ({regionUnions.length})
            </button>
            {region.countries.map((country) => {
              const count = regionUnions.filter(
                (u) => u.country === country.name,
              ).length
              const active = effectiveCountry === country.name
              return (
                <button
                  key={country.name}
                  type="button"
                  onClick={() => setSelectedCountry(country.name)}
                  aria-pressed={active}
                  className={cn(
                    'min-h-[36px] cursor-pointer rounded-full px-3.5 py-1.5 font-display text-xs font-medium transition-colors',
                    active
                      ? 'bg-aasu-red text-aasu-white'
                      : 'border border-border-subtle bg-surface-alt text-ink-secondary hover:border-aasu-red/50 hover:text-ink',
                  )}
                >
                  {country.name} ({count})
                </button>
              )
            })}
          </div>

          {/* Verified Unions Grid or Honest Pending State */}
          {visibleUnions.length === 0 ? (
            <div className="mt-7 rounded-3xl border border-border-subtle bg-surface-alt p-8 text-center">
              <h3 className="font-display text-lg font-bold text-ink">
                {selectedCountry} Directory Record Pending Confirmation
              </h3>
              <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-ink-secondary">
                {activeCountryRecord?.note ??
                  'No verified member union record is currently published for this country in AASU\u2019s digital directory.'}
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedCountry('all')}
                  className="min-h-[40px] cursor-pointer rounded-full bg-aasu-red px-5 py-2 font-display text-xs font-semibold text-aasu-white hover:bg-aasu-red-dark"
                >
                  Show All {region.name} Unions
                </button>
                <a
                  href={`mailto:info@aasuonline.org?subject=${encodeURIComponent(`AASU Directory Update: ${selectedCountry}`)}`}
                  className="inline-flex min-h-[40px] items-center rounded-full border border-border-subtle bg-surface px-5 py-2 font-display text-xs font-semibold text-ink hover:border-aasu-red hover:text-aasu-red"
                >
                  Contact Secretariat
                </a>
              </div>
            </div>
          ) : (
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visibleUnions.map((union) => (
                <AppLink
                  key={union.slug}
                  href={`/membership/member-unions/${union.slug}`}
                  className="group flex flex-col justify-between rounded-2xl border border-border-subtle bg-surface-card p-5 transition-all hover:-translate-y-0.5 hover:border-aasu-red/50 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs">
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
                    <h3 className="mt-3 font-display text-base font-bold leading-snug text-ink group-hover:text-aasu-red">
                      {union.name}
                    </h3>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-border-subtle pt-3 text-xs">
                    <span className="text-ink-muted">
                      {union.acronym ?? 'Official Member'}
                    </span>
                    <span className="inline-flex items-center gap-1 font-display font-semibold text-ink group-hover:text-aasu-red">
                      <span>Profile</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                    </span>
                  </div>
                </AppLink>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* 2. Regional Executive Committee Leadership */}
      {regionalLeaders.length > 0 && (
        <section className="border-b border-border-subtle bg-surface-alt py-14 lg:py-18">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <Reveal>
                <SectionHeading
                  title={`${region.name} Leadership (2026-2029)`}
                  description="Elected Executive Committee representatives coordinating AASU programmes and member unions across the region."
                />
              </Reveal>
              <AppLink
                href="/about/governance"
                className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-ink hover:text-aasu-red"
              >
                <span>Full Executive Committee</span>
                <ArrowUpRight className="h-4 w-4 text-aasu-red" aria-hidden="true" />
              </AppLink>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {regionalLeaders.map((leader) => (
                <article
                  key={leader.id}
                  className="flex items-center gap-5 rounded-3xl border border-border-subtle bg-surface-card p-5"
                >
                  <img
                    src={leader.portrait}
                    alt={leader.name}
                    className="h-20 w-20 shrink-0 rounded-2xl object-cover object-top"
                    loading="lazy"
                  />
                  <div>
                    <span className="font-display text-xs font-semibold text-aasu-red">
                      {leader.country} · {leader.term}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-bold text-ink">
                      {leader.name}
                    </h3>
                    <p className="mt-0.5 text-sm text-ink-secondary">
                      {leader.position}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 3. Regional Activities & Publications */}
      <section className="border-b border-border-subtle bg-surface py-14 lg:py-18">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading
                title="Regional Activities & Initiatives"
                description={`Selected verified engagements and policy dialogues connected to ${region.name}.`}
              />
              <div className="mt-6 divide-y divide-border-subtle border-y border-border-subtle">
                {region.activities.map((activity) => (
                  <article key={activity.title} className="py-5">
                    <span className="font-display text-xs font-semibold text-aasu-red">
                      {activity.year}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-bold text-ink">
                      {activity.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">
                      {activity.summary}
                    </p>
                    <AppLink
                      href={activity.href}
                      className="mt-3 inline-flex items-center gap-1 font-display text-xs font-semibold text-ink hover:text-aasu-red"
                    >
                      <span>Explore Related Work</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                    </AppLink>
                  </article>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <SectionHeading
                title="Related Publications"
                description="Official AASU reports and toolkits supporting member unions."
              />
              <div className="mt-6 space-y-4">
                {region.publications.map((pub) => (
                  <a
                    key={pub.title}
                    href={pub.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-border-subtle bg-surface-card p-4 transition-colors hover:border-aasu-red/50"
                  >
                    {pub.cover && (
                      <img
                        src={pub.cover}
                        alt={`Cover of ${pub.title}`}
                        className="h-20 w-15 shrink-0 rounded-lg object-cover object-top shadow-xs"
                        loading="lazy"
                      />
                    )}
                    <div className="min-w-0 flex-1">
                      <span className="font-display text-xs font-semibold text-aasu-red">
                        {pub.category} · {pub.year}
                      </span>
                      <h3 className="mt-1 font-display text-sm font-bold leading-snug text-ink group-hover:text-aasu-red">
                        {pub.title}
                      </h3>
                      <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-ink-muted group-hover:text-ink">
                        <BookOpen className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                        Download PDF
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Compact Other Regions Strip */}
      <section className="bg-surface-alt py-12">
        <Container>
          <h2 className="font-display text-lg font-bold text-ink">
            Explore Other Regions
          </h2>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {otherRegions.map((item) => (
              <AppLink
                key={item.slug}
                href={`/membership/regions/${item.slug}`}
                className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-border-subtle bg-surface-card px-4 py-2 font-display text-xs font-semibold text-ink transition-colors hover:border-aasu-red hover:text-aasu-red"
              >
                <span>{item.name}</span>
                <span className="text-ink-muted">
                  ({getUnionsByRegion(item.slug).length})
                </span>
              </AppLink>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
