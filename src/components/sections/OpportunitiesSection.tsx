import { ArrowRight, Award, Calendar, Globe } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Button, Reveal, SectionHeading } from '@/components/ui'
import { OPPORTUNITY_CATEGORIES } from '@/data/homepage'
import type { OpportunityCategory } from '@/types'

function CategoryIcon({ icon }: { icon: OpportunityCategory['icon'] }) {
  switch (icon) {
    case 'calendar':
      return <Calendar className="h-6 w-6 text-aasu-red" aria-hidden="true" />
    case 'award':
      return <Award className="h-6 w-6 text-aasu-red" aria-hidden="true" />
    case 'globe':
      return <Globe className="h-6 w-6 text-aasu-red" aria-hidden="true" />
  }
}

export function OpportunitiesSection() {
  return (
    <section
      id="opportunities"
      className="border-y border-neutral-200 bg-aasu-offwhite py-20 lg:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Events & Opportunities"
            title="Find Your Next Opportunity."
            description="Discover upcoming AASU events, continental and international conferences, scholarships, fellowships, training programmes and other opportunities for students and young people."
            action={
              <div className="flex flex-wrap gap-3">
                <Button href="#opportunities" variant="dark" size="sm">
                  Explore Events
                </Button>
                <Button href="#opportunities" variant="outline" size="sm">
                  Browse Opportunities
                </Button>
              </div>
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {OPPORTUNITY_CATEGORIES.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.08}>
              <article className="group flex h-full flex-col justify-between border border-neutral-200 bg-aasu-white p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-aasu-black/30 hover:shadow-md">
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center bg-aasu-offwhite">
                    <CategoryIcon icon={item.icon} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-aasu-black">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-neutral-100 pt-5">
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 font-display text-sm font-bold text-aasu-black transition-colors group-hover:text-aasu-red"
                  >
                    <span>{item.ctaLabel}</span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
