import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { AppLink } from '@/components/ui/AppLink'
import { OPPORTUNITY_CATEGORIES } from '@/data/opportunities'

interface OpportunitiesRelatedNavProps {
  currentPath: string
}

export function OpportunitiesRelatedNav({
  currentPath,
}: OpportunitiesRelatedNavProps) {
  const related = OPPORTUNITY_CATEGORIES.filter(
    (item) => item.href !== currentPath,
  )

  return (
    <section
      aria-label="Explore more Opportunities"
      className="border-t border-border-subtle bg-surface-alt py-14 lg:py-16"
    >
      <Container>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Explore More Opportunities
          </h2>
          <AppLink
            href="/opportunities"
            className="inline-flex items-center gap-1.5 font-display text-sm font-medium text-ink transition-colors hover:text-aasu-red"
          >
            <span>Opportunities Portal</span>
            <ArrowUpRight className="h-4 w-4 text-aasu-red" aria-hidden="true" />
          </AppLink>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {related.map((item) => (
            <AppLink
              key={item.id}
              href={item.href}
              className="group flex flex-col justify-between rounded-2xl border border-border-subtle bg-surface-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-aasu-red/50 hover:shadow-md"
            >
              <div>
                <h3 className="font-display text-lg font-bold text-ink transition-colors group-hover:text-aasu-red">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                  {item.description}
                </p>
              </div>
              <div className="mt-5 flex items-center justify-end">
                <ArrowUpRight
                  className="h-4 w-4 text-ink-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-aasu-red"
                  aria-hidden="true"
                />
              </div>
            </AppLink>
          ))}
        </div>
      </Container>
    </section>
  )
}
