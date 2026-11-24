import { Navigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
} from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { OpportunityCard } from '@/components/opportunities/OpportunityCard'
import { ShareBar } from '@/components/news/ShareBar'
import { AppLink } from '@/components/ui/AppLink'
import {
  getOpportunityBySlug,
  getOpportunityCategoryMeta,
  getPublishedOpportunities,
} from '@/data/opportunities'
import { usePageMeta } from '@/hooks'

export function OpportunityDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const opportunity = getOpportunityBySlug(slug)

  usePageMeta(
    opportunity ? opportunity.title : 'Opportunity Details',
    opportunity
      ? opportunity.overview[0]
      : 'Verified opportunity from the All-Africa Students Union Opportunities Portal.',
  )

  if (!opportunity) {
    return <Navigate to="/opportunities" replace />
  }

  const categoryMeta = getOpportunityCategoryMeta(opportunity.category)
  const related = getPublishedOpportunities()
    .filter((o) => o.slug !== opportunity.slug)
    .slice(0, 3)

  return (
    <>
      <InnerPageHero
        title={opportunity.title}
        subtitle={`${opportunity.providerType} · ${opportunity.provider}`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Opportunities', href: '/opportunities' },
          { label: categoryMeta.title, href: categoryMeta.href },
          { label: opportunity.subcategory },
        ]}
        images={[
          {
            src: categoryMeta.heroImage,
            alt: categoryMeta.heroImageAlt,
          },
        ]}
      />

      <section className="border-b border-border-subtle bg-surface py-12 lg:py-16">
        <Container>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle pb-5">
            <AppLink
              href={categoryMeta.href}
              className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ink hover:text-aasu-red"
            >
              <ArrowLeft className="h-4 w-4 text-aasu-red" aria-hidden="true" />
              <span>Back to {categoryMeta.title}</span>
            </AppLink>
            <ShareBar title={opportunity.title} />
          </div>

          <div className="grid gap-10 lg:grid-cols-12">
            {/* Main Column */}
            <div className="space-y-8 lg:col-span-8">
              <div className="rounded-3xl border border-border-subtle bg-surface-card p-6 sm:p-8">
                <h2 className="font-display text-2xl font-bold text-ink">
                  Overview
                </h2>
                <div className="mt-4 space-y-4 text-base leading-[1.8] text-ink-secondary">
                  {opportunity.overview.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-border-subtle bg-surface-card p-6 sm:p-8">
                <h2 className="font-display text-xl font-bold text-ink">
                  Eligibility
                </h2>
                <ul className="mt-4 space-y-2.5 text-sm text-ink-secondary">
                  {opportunity.eligibility.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {opportunity.benefits && opportunity.benefits.length > 0 && (
                  <div className="mt-7 border-t border-border-subtle pt-6">
                    <h3 className="font-display text-lg font-bold text-ink">
                      Key Benefits
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-ink-secondary">
                      {opportunity.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aasu-red"
                            aria-hidden="true"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {opportunity.requirements &&
                  opportunity.requirements.length > 0 && (
                    <div className="mt-7 border-t border-border-subtle pt-6">
                      <h3 className="font-display text-lg font-bold text-ink">
                        Requirements
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm text-ink-secondary">
                        {opportunity.requirements.map((r) => (
                          <li key={r} className="flex items-start gap-2.5">
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aasu-red"
                              aria-hidden="true"
                            />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
              </div>

              <div className="rounded-3xl border border-border-subtle bg-surface-card p-6 sm:p-8">
                <h2 className="font-display text-xl font-bold text-ink">
                  Application Procedure
                </h2>
                <ol className="mt-4 space-y-3 text-sm text-ink-secondary">
                  {opportunity.applicationProcedure.map((step, idx) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-aasu-red font-display text-xs font-bold text-aasu-white">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Sidebar: Key Dates, Location & Prominent Official CTA */}
            <aside className="space-y-6 lg:col-span-4">
              <div className="rounded-3xl border border-border-subtle bg-surface-card p-6">
                <span className="rounded-full bg-aasu-red/10 px-3 py-1 font-display text-xs font-semibold text-aasu-red">
                  {opportunity.providerType}
                </span>

                <dl className="mt-5 space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                    <div>
                      <dt className="text-xs text-ink-muted">
                        Application Deadline
                      </dt>
                      <dd className="font-display font-semibold text-ink">
                        {opportunity.deadlineDisplay}
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                    <div>
                      <dt className="text-xs text-ink-muted">Location</dt>
                      <dd className="font-display font-semibold text-ink">
                        {opportunity.location}
                      </dd>
                    </div>
                  </div>

                  {opportunity.studyLevel && (
                    <div className="flex items-start gap-3">
                      <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                      <div>
                        <dt className="text-xs text-ink-muted">
                          Target / Study Level
                        </dt>
                        <dd className="font-display font-semibold text-ink">
                          {opportunity.studyLevel}
                        </dd>
                      </div>
                    </div>
                  )}
                </dl>

                {/* Primary Application CTA */}
                <div className="mt-6 space-y-2.5 border-t border-border-subtle pt-5">
                  {opportunity.status === 'closed' ? (
                    <div className="rounded-2xl border border-border-subtle bg-surface-alt p-4 text-xs leading-relaxed text-ink-secondary">
                      This opportunity is currently closed or archived.
                    </div>
                  ) : opportunity.applicationUrl ? (
                    <a
                      href={opportunity.applicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-aasu-red px-5 py-2.5 font-display text-xs font-semibold text-aasu-white transition-colors hover:bg-aasu-red-dark"
                    >
                      <span>Visit Official Application Portal</span>
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  ) : opportunity.applicationEmail ? (
                    <a
                      href={opportunity.applicationEmail}
                      className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-aasu-red px-5 py-2.5 font-display text-xs font-semibold text-aasu-white transition-colors hover:bg-aasu-red-dark"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      <span>Submit Official Email Enquiry</span>
                    </a>
                  ) : null}

                  {opportunity.relatedEventSlug && (
                    <AppLink
                      href={`/events/${opportunity.relatedEventSlug}`}
                      className="inline-flex min-h-[40px] w-full items-center justify-center gap-1.5 rounded-full border border-border-subtle bg-surface-alt px-4 py-2 font-display text-xs font-semibold text-ink hover:border-aasu-red hover:text-aasu-red"
                    >
                      <span>View Associated Event Page</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                    </AppLink>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-surface-alt py-14 lg:py-16">
          <Container>
            <h2 className="font-display text-2xl font-bold text-ink">
              Related Opportunities
            </h2>
            <div className="mt-7 grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <OpportunityCard key={item.id} opportunity={item} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  )
}
