import { Navigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Globe,
  Mail,
  MapPin,
  Shield,
} from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { AppLink } from '@/components/ui/AppLink'
import { Reveal } from '@/components/ui'
import {
  getRegionBySlug,
  getRegionalLeadership,
  getUnionBySlug,
  getUnionsByRegion,
} from '@/data/membership'
import { usePageMeta } from '@/hooks'

export function MemberUnionProfilePage() {
  const { slug } = useParams<{ slug: string }>()
  const union = getUnionBySlug(slug)

  usePageMeta(
    union ? `${union.name} (${union.country})` : 'Member Union Profile',
    union
      ? `Official AASU member profile for ${union.name} in ${union.country} (${union.regionName}, ${union.category}).`
      : 'Verified AASU member union directory profile.',
  )

  if (!union) {
    return <Navigate to="/membership/member-unions" replace />
  }

  const region = getRegionBySlug(union.regionSlug)
  const regionalLeaders = getRegionalLeadership(union.regionName)
  const relatedUnions = getUnionsByRegion(union.regionSlug)
    .filter((item) => item.slug !== union.slug)
    .slice(0, 6)

  return (
    <>
      <InnerPageHero
        title={union.name}
        subtitle={`${union.category} of the All-Africa Students Union representing students in ${union.country} (${union.regionName}).`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Membership', href: '/membership' },
          { label: 'Member Unions', href: '/membership/member-unions' },
          { label: union.acronym ?? union.country },
        ]}
        images={[
          {
            src: region?.heroImage ?? '/images/web/students-letters.webp',
            alt:
              region?.heroImageAlt ??
              'All-Africa Students Union continental student network',
          },
        ]}
      />

      <section className="border-b border-border-subtle bg-surface py-12 lg:py-16">
        <Container>
          {/* Return to Directory Bar */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle pb-5">
            <AppLink
              href="/membership/member-unions"
              className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ink transition-colors hover:text-aasu-red"
            >
              <ArrowLeft className="h-4 w-4 text-aasu-red" aria-hidden="true" />
              <span>Return to Member Unions Directory</span>
            </AppLink>
            <AppLink
              href={`/membership/regions/${union.regionSlug}`}
              className="inline-flex items-center gap-1.5 font-display text-xs font-semibold text-ink-secondary transition-colors hover:text-aasu-red"
            >
              <span>Explore {union.regionName}</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
            </AppLink>
          </div>

          <div className="grid gap-10 lg:grid-cols-12">
            {/* Main Column */}
            <div className="space-y-8 lg:col-span-8">
              <Reveal>
                <div className="rounded-3xl border border-border-subtle bg-surface-card p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-2.5 text-xs">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-aasu-red/10 px-3 py-1 font-display font-semibold text-aasu-red">
                      <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                      {union.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-surface-alt px-3 py-1 font-medium text-ink-secondary">
                      <MapPin className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                      {union.country}
                    </span>
                    {union.acronym && (
                      <span className="rounded-full border border-border-subtle bg-surface-alt px-3 py-1 font-display font-semibold text-ink">
                        {union.acronym}
                      </span>
                    )}
                  </div>

                  <h2 className="mt-5 font-display text-2xl font-bold text-ink">
                    Organisation Overview
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-secondary sm:text-base">
                    {union.overview ??
                      `${union.name} is listed in the official institutional register of the All-Africa Students Union as a verified ${union.category} in ${union.country}, within the ${union.regionName} region.`}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                    Extended organisational narratives, founding dates and
                    official union emblems are published once submitted and
                    verified directly by the member union through the AASU
                    Secretariat.
                  </p>
                </div>
              </Reveal>

              {/* Relevant Regional Activities & Publications */}
              {region && (
                <Reveal delay={0.05}>
                  <div className="rounded-3xl border border-border-subtle bg-surface-card p-6 sm:p-8">
                    <h2 className="font-display text-xl font-bold text-ink">
                      Relevant Regional Initiatives &amp; Publications
                    </h2>
                    <p className="mt-1.5 text-sm text-ink-secondary">
                      Continental programmes and official AASU documents
                      relevant to member unions in {region.name}.
                    </p>

                    <div className="mt-5 divide-y divide-border-subtle border-y border-border-subtle">
                      {region.activities.map((activity) => (
                        <div key={activity.title} className="py-4">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h3 className="font-display text-base font-bold text-ink">
                              {activity.title}
                            </h3>
                            <span className="font-display text-xs font-semibold text-aasu-red">
                              {activity.year}
                            </span>
                          </div>
                          <p className="mt-1.5 text-sm text-ink-secondary">
                            {activity.summary}
                          </p>
                          <AppLink
                            href={activity.href}
                            className="mt-2 inline-flex items-center gap-1 font-display text-xs font-semibold text-ink hover:text-aasu-red"
                          >
                            <span>Learn more</span>
                            <ArrowUpRight className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                          </AppLink>
                        </div>
                      ))}
                    </div>

                    {region.publications.length > 0 && (
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {region.publications.map((pub) => (
                          <a
                            key={pub.title}
                            href={pub.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start justify-between gap-3 rounded-2xl border border-border-subtle bg-surface-alt p-4 transition-colors hover:border-aasu-red/50"
                          >
                            <div>
                              <span className="font-display text-[11px] font-semibold text-aasu-red">
                                {pub.category} · {pub.year}
                              </span>
                              <p className="mt-1 font-display text-sm font-bold text-ink group-hover:text-aasu-red">
                                {pub.title}
                              </p>
                            </div>
                            <BookOpen
                              className="mt-1 h-4 w-4 shrink-0 text-aasu-red"
                              aria-hidden="true"
                            />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </Reveal>
              )}
            </div>

            {/* Sidebar: Verified Affiliation & Official Channels */}
            <aside className="space-y-6 lg:col-span-4">
              <Reveal delay={0.04}>
                <div className="rounded-3xl border border-border-subtle bg-surface-card p-6">
                  <div className="flex items-center gap-2.5">
                    <Shield className="h-5 w-5 text-aasu-red" aria-hidden="true" />
                    <h2 className="font-display text-lg font-bold text-ink">
                      Verified Affiliation
                    </h2>
                  </div>

                  <dl className="mt-4 divide-y divide-border-subtle text-sm">
                    <div className="flex justify-between gap-3 py-3">
                      <dt className="text-ink-muted">Category</dt>
                      <dd className="text-right font-semibold text-ink">
                        {union.category}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-3 py-3">
                      <dt className="text-ink-muted">Country</dt>
                      <dd className="text-right font-semibold text-ink">
                        {union.country}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-3 py-3">
                      <dt className="text-ink-muted">Region</dt>
                      <dd className="text-right font-semibold text-ink">
                        <AppLink
                          href={`/membership/regions/${union.regionSlug}`}
                          className="hover:text-aasu-red"
                        >
                          {union.regionName}
                        </AppLink>
                      </dd>
                    </div>
                    <div className="flex justify-between gap-3 py-3">
                      <dt className="text-ink-muted">Register Source</dt>
                      <dd className="text-right text-xs font-medium text-ink-secondary">
                        {union.verifiedSource}
                      </dd>
                    </div>
                  </dl>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="rounded-3xl border border-border-subtle bg-surface-card p-6">
                  <div className="flex items-center gap-2.5">
                    <Globe className="h-5 w-5 text-aasu-red" aria-hidden="true" />
                    <h2 className="font-display text-lg font-bold text-ink">
                      Official Channels
                    </h2>
                  </div>
                  {union.website ? (
                    <a
                      href={union.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 font-display text-sm font-semibold text-aasu-red hover:underline"
                    >
                      <span>Visit Official Website</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <p className="mt-3 text-xs leading-relaxed text-ink-secondary">
                      Verified website, official logo and public social media
                      links for this union have not yet been published in the
                      digital directory. Representatives may submit verified
                      details to the AASU Secretariat.
                    </p>
                  )}

                  <a
                    href={`mailto:info@aasuonline.org?subject=${encodeURIComponent(`Directory Profile Update: ${union.name} (${union.country})`)}`}
                    className="mt-5 inline-flex min-h-[40px] w-full items-center justify-center gap-2 rounded-full border border-border-subtle bg-surface-alt px-4 py-2 font-display text-xs font-semibold text-ink transition-colors hover:border-aasu-red hover:text-aasu-red"
                  >
                    <Mail className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                    <span>Submit Verified Profile Update</span>
                  </a>
                </div>
              </Reveal>

              {regionalLeaders.length > 0 && (
                <Reveal delay={0.1}>
                  <div className="rounded-3xl border border-border-subtle bg-surface-card p-6">
                    <h2 className="font-display text-base font-bold text-ink">
                      {union.regionName} Leadership (2026-2029)
                    </h2>
                    <ul className="mt-4 space-y-3">
                      {regionalLeaders.map((leader) => (
                        <li key={leader.id} className="flex items-center gap-3">
                          <img
                            src={leader.portrait}
                            alt={leader.name}
                            className="h-11 w-11 shrink-0 rounded-full object-cover object-top"
                            loading="lazy"
                          />
                          <div className="min-w-0">
                            <p className="truncate font-display text-sm font-bold text-ink">
                              {leader.name}
                            </p>
                            <p className="text-xs text-ink-secondary">
                              {leader.position} ({leader.country})
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}
            </aside>
          </div>
        </Container>
      </section>

      {/* Related Unions from the Same Region */}
      {relatedUnions.length > 0 && (
        <section className="bg-surface-alt py-14 lg:py-16">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-2xl font-bold text-ink">
                More Member Unions in {union.regionName}
              </h2>
              <AppLink
                href={`/membership/regions/${union.regionSlug}`}
                className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-ink hover:text-aasu-red"
              >
                <span>View All in {union.regionName}</span>
                <ArrowUpRight className="h-4 w-4 text-aasu-red" aria-hidden="true" />
              </AppLink>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedUnions.map((item) => (
                <AppLink
                  key={item.slug}
                  href={`/membership/member-unions/${item.slug}`}
                  className="group flex flex-col justify-between rounded-2xl border border-border-subtle bg-surface-card p-5 transition-all hover:-translate-y-0.5 hover:border-aasu-red/50 hover:shadow-md"
                >
                  <div>
                    <span className="text-xs font-medium text-ink-muted">
                      {item.country} · {item.category}
                    </span>
                    <h3 className="mt-2 font-display text-base font-bold leading-snug text-ink group-hover:text-aasu-red">
                      {item.name}
                    </h3>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <ArrowUpRight className="h-4 w-4 text-aasu-red" aria-hidden="true" />
                  </div>
                </AppLink>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  )
}
