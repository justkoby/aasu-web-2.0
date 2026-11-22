import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Button, Reveal, SectionHeading } from '@/components/ui'
import { CONTINENTAL_STATS } from '@/data/homepage'

export function AtAGlanceSection() {
  return (
    <section
      id="at-a-glance"
      aria-labelledby="at-a-glance-heading"
      className="border-b border-border-subtle bg-surface py-16 lg:py-22"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: Concise Identity + 2x2 Statistics */}
          <Reveal className="lg:col-span-6">
            <SectionHeading
              eyebrow="AASU at a Glance"
              title="One Union. Five Decades of Student Solidarity."
            />

            <p className="mt-4 text-base leading-relaxed text-ink-secondary">
              Founded in Kumasi, Ghana in 1972, AASU is the autonomous,
              democratic representative body of African students—advocating for
              students&apos; rights, quality education and youth leadership
              across the continent.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-4 sm:gap-5">
              {CONTINENTAL_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border-subtle bg-surface-alt p-5"
                >
                  <dd className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                    <span>{stat.value}</span>
                    {stat.needsConfirmation && (
                      <span
                        className="ml-0.5 align-super text-xs font-semibold text-aasu-red"
                        title="Pending final institutional verification"
                      >
                        *
                      </span>
                    )}
                  </dd>
                  <dt className="mt-1 text-xs font-medium text-ink-secondary sm:text-sm">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-3">
                <Button href="#priorities" variant="dark" size="md">
                  <span>About AASU</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button href="#membership" variant="outline" size="md">
                  Our History &amp; Legacy
                </Button>
              </div>
            </div>

            <p className="mt-4 text-[11px] text-ink-muted">
              * Figures subject to final institutional verification prior to
              production publication.
            </p>
          </Reveal>

          {/* Right: Dominant Editorial Photograph */}
          <Reveal delay={0.08} className="lg:col-span-6">
            <figure className="overflow-hidden rounded-3xl border border-border-subtle bg-surface-alt">
              <img
                src="/images/editorial/aasu-inauguration-2026.jpg"
                alt="All-Africa Students Union leadership at the 2026 Inauguration and Honours Ceremony"
                className="aspect-[4/3] w-full object-cover object-top"
                loading="lazy"
              />
              <figcaption className="flex flex-wrap items-center justify-between gap-2 px-5 py-3.5 text-xs text-ink-secondary">
                <span>AASU Inauguration &amp; Honours Ceremony</span>
                <span className="font-display font-semibold uppercase tracking-[0.14em] text-aasu-red">
                  Kumasi 1972 → Accra HQ
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
