import { ArrowUpRight, Mail } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { OpportunitiesRelatedNav } from '@/components/layout/OpportunitiesRelatedNav'
import { OpportunityExplorer } from '@/components/opportunities/OpportunityExplorer'
import { AppLink } from '@/components/ui/AppLink'
import {
  getOpportunitiesByCategory,
  getOpportunityCategoryMeta,
  type OpportunityCategoryId,
} from '@/data/opportunities'
import { usePageMeta } from '@/hooks'

interface OpportunitiesCategoryPageProps {
  category: OpportunityCategoryId
}

export function OpportunitiesCategoryPage({
  category,
}: OpportunitiesCategoryPageProps) {
  const meta = getOpportunityCategoryMeta(category)
  const items = getOpportunitiesByCategory(category)

  usePageMeta(meta.title, meta.heroSubtitle)

  return (
    <>
      <InnerPageHero
        title={meta.title}
        subtitle={meta.heroSubtitle}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Opportunities', href: '/opportunities' },
          { label: meta.title },
        ]}
        images={[
          {
            src: meta.heroImage,
            alt: meta.heroImageAlt,
          },
        ]}
      />

      <section className="bg-surface py-12 lg:py-16">
        <Container>
          {/* Context Banner for Conferences & Training (Avoids Duplicating Events) */}
          {category === 'conferences-training' && (
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border-subtle bg-surface-alt p-5">
              <p className="max-w-2xl text-sm text-ink-secondary">
                Looking for full conference schedules, venues and event reports?
                Browse the dedicated AASU Events Calendar alongside these
                participation calls.
              </p>
              <AppLink
                href="/events"
                className="inline-flex items-center gap-1.5 font-display text-xs font-semibold text-ink hover:text-aasu-red"
              >
                <span>Open Events Calendar</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
              </AppLink>
            </div>
          )}

          {/* Dedicated Honest Empty State for Careers at AASU */}
          {category === 'careers' && items.length === 0 ? (
            <div className="mx-auto max-w-3xl rounded-3xl border border-border-subtle bg-surface-card p-8 text-center sm:p-10">
              <h2 className="font-display text-2xl font-bold text-ink">
                No Verified Current Vacancies
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-secondary sm:text-base">
                There are currently no open staff employment vacancies published
                at the All-Africa Students Union Secretariat. Official
                recruitment announcements, job descriptions and deadlines are
                posted here as positions are formally approved.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <AppLink
                  href="/opportunities/internships-volunteering"
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-full bg-aasu-red px-5 py-2.5 font-display text-xs font-semibold text-aasu-white hover:bg-aasu-red-dark"
                >
                  <span>Explore Internships &amp; Volunteering</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </AppLink>
                <a
                  href="mailto:info@aasuonline.org?subject=AASU%20Recruitment%20Enquiry"
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-full border border-border-subtle bg-surface-alt px-5 py-2.5 font-display text-xs font-semibold text-ink hover:border-aasu-red hover:text-aasu-red"
                >
                  <Mail className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                  <span>Secretariat Recruitment Desk</span>
                </a>
              </div>
            </div>
          ) : (
            <OpportunityExplorer
              opportunities={items}
              emptyTitle={`No verified records currently listed under ${meta.title}`}
              emptyDescription="Check back as new verified calls are approved by the AASU Secretariat."
            />
          )}

          {/* Third-Party Disclaimer */}
          <div className="mt-10 rounded-2xl border border-border-subtle bg-surface-alt p-5 text-xs leading-relaxed text-ink-secondary">
            <strong className="font-display font-semibold text-ink">
              Notice on Third-Party Opportunities:
            </strong>{' '}
            Opportunities marked &ldquo;Third-Party Opportunity&rdquo; are
            administered independently by external institutions. Sharing an
            opportunity for student awareness does not imply AASU guarantees
            placements or administers external selections.
          </div>
        </Container>
      </section>

      <OpportunitiesRelatedNav currentPath={meta.href} />
    </>
  )
}
