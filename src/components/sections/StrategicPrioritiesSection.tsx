import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Button, Reveal, SectionHeading } from '@/components/ui'
import { STRATEGIC_PRIORITIES } from '@/data/homepage'

export function StrategicPrioritiesSection() {
  return (
    <section
      id="priorities"
      className="border-y border-neutral-200 bg-aasu-offwhite py-20 lg:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Strategic Priorities"
            title="Advancing the Issues That Matter to African Students."
            description="From access to quality education and student welfare to employment, climate action and democratic governance, AASU works with its members and partners to advance the interests of African students through advocacy, policy engagement, partnerships and programmes that address challenges across the continent. Our work is guided by seven strategic priorities."
            action={
              <Button href="#programmes" variant="outline" size="md">
                Explore Our Strategic Priorities
              </Button>
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STRATEGIC_PRIORITIES.map((priority, idx) => (
            <Reveal
              key={priority.number}
              delay={idx * 0.04}
              className={idx === 6 ? 'sm:col-span-2 lg:col-span-3' : undefined}
            >
              <article className="group relative flex h-full flex-col justify-between border border-neutral-200 bg-aasu-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-aasu-black/30 hover:shadow-md">
                {/* Red top accent line on hover */}
                <span
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-aasu-red transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden="true"
                />

                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-extrabold tracking-[0.14em] text-aasu-red">
                      {priority.number}
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-neutral-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-aasu-red"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold leading-snug text-aasu-black">
                    {priority.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {priority.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-neutral-100 pt-4">
                  <a
                    href={priority.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-aasu-black transition-colors group-hover:text-aasu-red"
                  >
                    <span>Priority {priority.number}</span>
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
