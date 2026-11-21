import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Button, Reveal, SectionHeading } from '@/components/ui'
import { FEATURED_PROGRAMMES } from '@/data/homepage'

export function ProgrammesSection() {
  const [leadProgramme, ...secondaryProgrammes] = FEATURED_PROGRAMMES

  return (
    <section id="programmes" className="bg-aasu-white py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Programmes & Initiatives"
            title="Our Work. Across Africa and Beyond."
            description="Explore some of the programmes, policy engagements and partnerships through which AASU is advancing its mandate."
            action={
              <Button href="#knowledge-hub" variant="outline" size="md">
                View All Programmes &amp; Initiatives
              </Button>
            }
          />
        </Reveal>

        {/* Lead Featured Initiative */}
        {leadProgramme && (
          <Reveal className="mt-14">
            <article className="group grid overflow-hidden border border-neutral-200 bg-aasu-offwhite lg:grid-cols-12">
              <div className="relative overflow-hidden bg-aasu-black lg:col-span-5">
                <img
                  src={leadProgramme.image}
                  alt={leadProgramme.imageAlt}
                  className="h-full max-h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] lg:max-h-none"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-between p-8 sm:p-10 lg:col-span-7 lg:p-12">
                <div>
                  <span className="inline-block border-l-2 border-aasu-red pl-3 text-xs font-semibold uppercase tracking-[0.16em] text-aasu-red">
                    {leadProgramme.category}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-extrabold leading-tight text-aasu-black sm:text-3xl">
                    {leadProgramme.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-neutral-700">
                    {leadProgramme.description}
                  </p>
                  {leadProgramme.secondaryText && (
                    <p className="mt-3 text-base leading-relaxed text-neutral-600">
                      {leadProgramme.secondaryText}
                    </p>
                  )}
                </div>

                <div className="mt-8">
                  <Button href={leadProgramme.href} variant="dark" size="md">
                    <span>{leadProgramme.ctaLabel}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </article>
          </Reveal>
        )}

        {/* Secondary Initiatives Grid */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {secondaryProgrammes.map((programme, idx) => (
            <Reveal key={programme.id} delay={idx * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden border border-neutral-200 bg-aasu-white transition-shadow duration-200 hover:shadow-md">
                <div className="relative aspect-[16/10] overflow-hidden bg-aasu-offwhite">
                  <img
                    src={programme.image}
                    alt={programme.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-aasu-red">
                      {programme.category}
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-extrabold leading-snug text-aasu-black">
                      {programme.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
                      {programme.description}
                    </p>
                  </div>

                  <div className="mt-7 border-t border-neutral-100 pt-5">
                    <a
                      href={programme.href}
                      className="inline-flex items-center gap-2 font-display text-sm font-bold text-aasu-black transition-colors group-hover:text-aasu-red"
                    >
                      <span>{programme.ctaLabel}</span>
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
