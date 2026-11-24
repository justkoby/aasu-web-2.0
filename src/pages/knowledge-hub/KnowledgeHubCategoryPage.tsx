import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { KnowledgeHubRelatedNav } from '@/components/layout/KnowledgeHubRelatedNav'
import { PublicationCard } from '@/components/knowledge-hub/PublicationCard'
import { PublicationLibraryExplorer } from '@/components/knowledge-hub/PublicationLibraryExplorer'
import { AppLink } from '@/components/ui/AppLink'
import { SectionHeading } from '@/components/ui'
import {
  getCategoryMeta,
  getPublicationsByCategory,
  type KnowledgeCategoryId,
} from '@/data/publications'
import { usePageMeta } from '@/hooks'

interface KnowledgeHubCategoryPageProps {
  category: KnowledgeCategoryId
}

export function KnowledgeHubCategoryPage({
  category,
}: KnowledgeHubCategoryPageProps) {
  const meta = getCategoryMeta(category)
  const items = getPublicationsByCategory(category)

  usePageMeta(meta.title, meta.heroSubtitle)

  const annualReports =
    category === 'reports'
      ? items.filter((i) => i.subcategory === 'Annual Report')
      : []

  return (
    <>
      <InnerPageHero
        title={meta.title}
        subtitle={meta.heroSubtitle}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Knowledge Hub', href: '/knowledge-hub' },
          { label: meta.title },
        ]}
        images={[
          {
            src: meta.heroImage,
            alt: meta.heroImageAlt,
          },
        ]}
      />

      {/* Category-specific Institutional Annual Reports Distinction */}
      {category === 'reports' && annualReports.length > 0 && (
        <section className="border-b border-border-subtle bg-surface-alt py-12 lg:py-16">
          <Container>
            <SectionHeading
              title="Institutional Annual Reports"
              description="Flagship annual institutional records distinct from thematic programme, conference and M&E reports."
            />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {annualReports.map((pub) => (
                <PublicationCard key={pub.id} publication={pub} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Policy Briefs Cross-Link Banner to Policy Engagement */}
      {category === 'policy-briefs' && (
        <section className="border-b border-border-subtle bg-surface-alt py-8">
          <Container>
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border-subtle bg-surface-card p-5">
              <p className="max-w-2xl text-sm text-ink-secondary">
                Official AASU policy briefs complement our continental advocacy
                with the African Union, UNESCO and regional bodies.
              </p>
              <AppLink
                href="/what-we-do/policy-engagement"
                className="inline-flex items-center gap-1.5 font-display text-xs font-semibold text-ink hover:text-aasu-red"
              >
                <span>Explore Policy Engagement</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
              </AppLink>
            </div>
          </Container>
        </section>
      )}

      {/* Main Searchable & Filterable Collection */}
      <section className="bg-surface py-12 lg:py-16">
        <Container>
          <PublicationLibraryExplorer
            publications={items}
            showCategoryFilter={items.length > 2}
            pageSize={9}
          />
        </Container>
      </section>

      <KnowledgeHubRelatedNav currentPath={meta.href} />
    </>
  )
}
