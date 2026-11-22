import { useState } from 'react'
import { Megaphone } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { WhatWeDoRelatedNav } from '@/components/layout/WhatWeDoRelatedNav'
import { Reveal, SectionHeading } from '@/components/ui'
import { CAMPAIGNS_DATA } from '@/data/whatWeDo'
import type { CampaignBucket } from '@/data/whatWeDo'
import { cn } from '@/lib/utils'

const CAMPAIGN_FILTERS: ('All' | CampaignBucket)[] = [
  'All',
  'Current Advocacy Campaigns',
  'Student Rights & Welfare',
  'Education Policy Advocacy',
  'Continental Mobilisation',
  'Past Campaigns & Initiatives',
]

export function CampaignsAdvocacyPage() {
  const [filter, setFilter] = useState<'All' | CampaignBucket>('All')

  const visibleCampaigns =
    filter === 'All'
      ? CAMPAIGNS_DATA
      : CAMPAIGNS_DATA.filter((c) => c.bucket === filter)

  return (
    <>
      <InnerPageHero
        title="Campaigns & Advocacy"
        subtitle="Mobilising student unions across Africa to defend student rights, strengthen public education financing and build safe learning environments."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'What We Do', href: '/what-we-do' },
          { label: 'Campaigns & Advocacy' },
        ]}
        images={[
          {
            src: '/images/web/ggem-outreach.webp',
            alt: 'AASU outreach speaker addressing students and community members',
          },
        ]}
      />

      <section className="bg-surface py-16 lg:py-22">
        <Container>
          <Reveal>
            <SectionHeading
              title="Advocacy Across the Continent"
              description="Filter AASU's current campaigns, student rights interventions, education policy advocacy, continental mobilisation and past initiatives."
            />
          </Reveal>

          <div
            role="tablist"
            aria-label="Filter campaigns by category"
            className="mt-8 flex flex-wrap gap-2"
          >
            {CAMPAIGN_FILTERS.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={filter === cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  'rounded-full px-4 py-2 font-display text-xs font-medium transition-colors cursor-pointer',
                  filter === cat
                    ? 'bg-aasu-red text-aasu-white'
                    : 'border border-border-subtle bg-surface-alt text-ink hover:border-ink/40',
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {visibleCampaigns.map((camp) => (
              <article
                key={camp.id}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-border-subtle bg-surface-card"
              >
                {camp.image && (
                  <div className="aspect-[16/9] overflow-hidden bg-[#101114]">
                    <img
                      src={camp.image}
                      alt={camp.imageAlt ?? camp.title}
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-aasu-red">
                      <Megaphone className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{camp.bucket}</span>
                    </span>
                    <h2 className="mt-2 font-display text-xl font-bold text-ink">
                      {camp.title}
                    </h2>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary">
                      {camp.summary}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-border-subtle pt-4">
                    {camp.keyFocus.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-surface-alt px-3 py-1 text-xs font-medium text-ink-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <WhatWeDoRelatedNav currentPath="/what-we-do/campaigns-advocacy" />
    </>
  )
}
