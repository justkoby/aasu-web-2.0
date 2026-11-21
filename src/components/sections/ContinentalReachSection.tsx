import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/ui'
import { CONTINENTAL_STATS } from '@/data/homepage'

export function ContinentalReachSection() {
  return (
    <section
      id="reach"
      aria-labelledby="reach-heading"
      className="border-b border-neutral-200 bg-aasu-white"
    >
      <Container className="py-12 lg:py-16">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 border-b border-neutral-200 pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aasu-red">
                Continental Reach
              </p>
              <h2
                id="reach-heading"
                className="mt-2 font-display text-2xl font-extrabold tracking-tight text-aasu-black sm:text-3xl"
              >
                One Union. Across Africa.
              </h2>
            </div>
            <p className="text-xs text-neutral-500">
              * Figures subject to final institutional verification prior to
              production publication.
            </p>
          </div>

          <dl className="grid grid-cols-2 divide-y divide-neutral-200 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {CONTINENTAL_STATS.map((stat, idx) => (
              <div
                key={stat.label}
                className={`py-7 lg:py-8 ${
                  idx === 0 ? 'lg:pr-8' : 'lg:px-8'
                } ${idx % 2 === 0 ? 'pr-4 sm:pr-6' : 'pl-4 sm:pl-6'}`}
              >
                <dt className="order-2 mt-2 text-xs font-medium leading-snug text-neutral-600 sm:text-sm">
                  {stat.label}
                </dt>
                <dd className="order-1 font-display text-3xl font-extrabold tracking-tight text-aasu-black sm:text-4xl lg:text-5xl">
                  <span>{stat.value}</span>
                  {stat.needsConfirmation && (
                    <span
                      className="ml-0.5 align-super text-sm font-semibold text-aasu-red"
                      title="Pending final institutional confirmation"
                    >
                      *
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  )
}
