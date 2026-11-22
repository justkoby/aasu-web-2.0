import {
  ArrowUpRight,
  BriefcaseBusiness,
  Globe2,
  GraduationCap,
  Leaf,
  Network,
  Scale,
  UsersRound,
} from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Button, Reveal, SectionHeading } from '@/components/ui'
import { STRATEGIC_PRIORITIES } from '@/data/homepage'
import type { PriorityIconKey } from '@/types'

function PriorityIcon({ icon }: { icon: PriorityIconKey }) {
  const props = {
    className:
      'h-4 w-4 text-aasu-red transition-colors duration-200 group-hover:text-aasu-white',
    strokeWidth: 1.75,
    'aria-hidden': true as const,
  }

  switch (icon) {
    case 'education':
      return <GraduationCap {...props} />
    case 'skills':
      return <BriefcaseBusiness {...props} />
    case 'gender':
      return <UsersRound {...props} />
    case 'climate':
      return <Leaf {...props} />
    case 'mobility':
      return <Globe2 {...props} />
    case 'governance':
      return <Scale {...props} />
    case 'panafricanism':
      return <Network {...props} />
  }
}

export function StrategicPrioritiesSection() {
  return (
    <section
      id="priorities"
      className="border-b border-border-subtle bg-surface-alt py-16 lg:py-22"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Strategic Priorities"
            title="Seven Priorities Guiding Our Continental Work."
            description="Advocacy, policy engagement and student-led programmes across the issues that matter most."
            action={
              <Button href="#programmes" variant="outline" size="sm">
                Explore All Priorities
              </Button>
            }
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STRATEGIC_PRIORITIES.map((priority, idx) => (
            <Reveal
              key={priority.number}
              delay={idx * 0.03}
              className={idx === 6 ? 'sm:col-span-2' : undefined}
            >
              <a
                href={priority.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface-card transition-all duration-200 hover:-translate-y-0.5 hover:border-aasu-red/50 hover:shadow-md"
              >
                {/* Authentic Event Photography Header */}
                <div className="relative aspect-[16/9] overflow-hidden bg-[#101114]">
                  <img
                    src={priority.image}
                    alt={priority.imageAlt}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#101114]/65 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute left-3.5 top-3.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-surface-card/92 backdrop-blur-xs transition-colors duration-200 group-hover:bg-aasu-red">
                    <PriorityIcon icon={priority.icon} />
                  </span>
                  <span className="absolute bottom-3 right-3.5 font-display text-xs font-semibold tracking-[0.14em] text-aasu-white/90">
                    {priority.number}
                  </span>
                </div>

                {/* Concise Card Body */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="font-display text-base font-bold leading-snug text-ink transition-colors group-hover:text-aasu-red">
                      {priority.shortTitle}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-secondary sm:text-sm">
                      {priority.shortDescription}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-end">
                    <ArrowUpRight
                      className="h-4 w-4 text-ink-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-aasu-red"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
