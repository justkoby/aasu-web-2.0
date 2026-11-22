import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Button, Reveal, SectionHeading } from '@/components/ui'
import { FEATURED_PROGRAMMES } from '@/data/homepage'

export function ProgrammesSection() {
  return (
    <section
      id="programmes"
      className="border-b border-border-subtle bg-surface py-16 lg:py-22"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Featured Programmes"
            title="Our Work. Across Africa and Beyond."
            action={
              <Button href="#knowledge-hub" variant="outline" size="sm">
                View All Programmes
              </Button>
            }
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {FEATURED_PROGRAMMES.map((programme, idx) => (
            <Reveal key={programme.id} delay={idx * 0.06}>
              <a
                href={programme.href}
                className="group relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-3xl bg-[#101114] text-aasu-white shadow-sm transition-shadow duration-300 hover:shadow-xl sm:min-h-[420px]"
              >
                <img
                  src={programme.image}
                  alt={programme.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#101114]/95 via-[#101114]/55 to-[#101114]/15"
                  aria-hidden="true"
                />

                <div className="relative z-10 p-6 sm:p-7">
                  <span className="inline-block rounded-full bg-aasu-red px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-aasu-white">
                    {programme.category}
                  </span>

                  <h3 className="mt-4 font-display text-2xl font-bold leading-snug text-aasu-white">
                    {programme.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-200">
                    {programme.shortDescription}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-aasu-white transition-colors group-hover:text-aasu-red">
                    <span>{programme.ctaLabel}</span>
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
