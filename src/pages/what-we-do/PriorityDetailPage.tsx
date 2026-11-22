import { Navigate, useParams } from 'react-router-dom'
import { ArrowUpRight, CheckCircle2, Landmark } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { AppLink } from '@/components/ui/AppLink'
import { DocumentCard } from '@/components/ui/DocumentCard'
import { Reveal, SectionHeading } from '@/components/ui'
import { PRIORITY_DETAILS } from '@/data/whatWeDo'

export function PriorityDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const priority = PRIORITY_DETAILS.find((p) => p.slug === slug)

  if (!priority) {
    return <Navigate to="/what-we-do/strategic-priorities" replace />
  }

  const otherPriorities = PRIORITY_DETAILS.filter((p) => p.slug !== priority.slug)

  return (
    <>
      <InnerPageHero
        title={priority.title}
        subtitle={priority.overview}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'What We Do', href: '/what-we-do' },
          { label: 'Strategic Priorities', href: '/what-we-do/strategic-priorities' },
          { label: `${priority.number}. ${priority.title}` },
        ]}
        images={[
          {
            src: priority.heroImage,
            alt: priority.heroImageAlt,
          },
        ]}
      />

      {/* Objectives */}
      <section className="border-b border-border-subtle bg-surface py-16 lg:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <Reveal className="lg:col-span-4">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-aasu-white p-1.5 shadow-xs">
                  <img
                    src={priority.iconPath}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-contain"
                  />
                </span>
                <div>
                  <span className="font-display text-xs font-semibold tracking-[0.14em] text-aasu-red">
                    Priority {priority.number}
                  </span>
                  <h2 className="mt-0.5 font-display text-2xl font-bold text-ink">
                    Core Objectives
                  </h2>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
                Key institutional objectives guiding AASU&apos;s advocacy,
                programmes and partnerships under {priority.title}.
              </p>
            </Reveal>

            <Reveal delay={0.06} className="lg:col-span-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {priority.objectives.map((obj) => (
                  <div
                    key={obj}
                    className="flex items-start gap-3 rounded-2xl border border-border-subtle bg-surface-alt p-5"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-aasu-red"
                      aria-hidden="true"
                    />
                    <p className="text-sm leading-relaxed text-ink">{obj}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Activities & Projects */}
      <section className="border-b border-border-subtle bg-surface-alt py-16 lg:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              title="Activities & Initiatives"
              description="Verified programmes, dialogues and campus initiatives delivering impact under this priority."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {priority.activities.map((activity, idx) => (
              <Reveal key={activity.name} delay={idx * 0.04}>
                <article className="h-full rounded-2xl border border-border-subtle bg-surface-card p-6">
                  <span className="font-display text-xs font-semibold tracking-[0.14em] text-aasu-red">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink">
                    {activity.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                    {activity.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Policy Engagements */}
      <section className="border-b border-border-subtle bg-surface py-16 lg:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              title="Policy Engagements"
              description="Continental and international policy spaces where AASU represents African students on this priority."
            />
          </Reveal>

          <div className="mt-8 space-y-4">
            {priority.policyEngagements.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-border-subtle bg-surface-alt p-5 sm:p-6"
              >
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-card text-aasu-red">
                  <Landmark className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="text-sm leading-relaxed text-ink sm:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Related Publications */}
      {priority.publications.length > 0 && (
        <section className="border-b border-border-subtle bg-surface-alt py-16 lg:py-20">
          <Container>
            <Reveal>
              <SectionHeading
                title="Related Publications"
                description="Official AASU reports, toolkits and policy resources linked to this strategic priority."
              />
            </Reveal>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {priority.publications.map((doc) => (
                <DocumentCard key={doc.id} document={doc} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Other Strategic Priorities Switcher */}
      <section className="bg-surface py-14 lg:py-18">
        <Container>
          <h2 className="font-display text-2xl font-bold text-ink">
            Other Strategic Priorities
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {otherPriorities.map((item) => (
              <AppLink
                key={item.slug}
                href={`/what-we-do/strategic-priorities/${item.slug}`}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-border-subtle bg-surface-alt p-4 transition-colors hover:border-aasu-red/50"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-aasu-white p-0.5">
                    <img
                      src={item.iconPath}
                      alt=""
                      aria-hidden="true"
                      className="h-full w-full object-contain"
                    />
                  </span>
                  <span className="font-display text-sm font-semibold text-ink group-hover:text-aasu-red">
                    {item.number}. {item.title}
                  </span>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-muted group-hover:text-aasu-red" aria-hidden="true" />
              </AppLink>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
