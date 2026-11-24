import { Navigate, useParams } from 'react-router-dom'
import { ArrowUpRight, BookOpen, Calendar, MapPin } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { AppLink } from '@/components/ui/AppLink'
import { Reveal, SectionHeading } from '@/components/ui'
import { PRIORITY_DETAILS } from '@/data/whatWeDo'

export function PriorityDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const priority = PRIORITY_DETAILS.find((p) => p.slug === slug)

  if (!priority) {
    return <Navigate to="/what-we-do/strategic-priorities" replace />
  }

  const [featuredActivity, ...supportingActivities] = priority.activities
  const otherPriorities = PRIORITY_DETAILS.filter(
    (p) => p.slug !== priority.slug,
  )

  return (
    <>
      {/* 1. Consistent Photography-Led Hero */}
      <InnerPageHero
        title={priority.title}
        subtitle={priority.overview}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'What We Do', href: '/what-we-do' },
          {
            label: 'Strategic Priorities',
            href: '/what-we-do/strategic-priorities',
          },
          { label: `${priority.number}. ${priority.title}` },
        ]}
        images={[
          {
            src: priority.heroImage,
            alt: priority.heroImageAlt,
          },
        ]}
      />

      {/* 2. Core Objectives: Clean Editorial Numbered List (Zero Heavy Boxes) */}
      <section className="border-b border-border-subtle bg-surface py-14 lg:py-18">
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
                  <span className="font-display text-xs font-semibold text-aasu-red">
                    Priority {priority.number}
                  </span>
                  <h2 className="mt-0.5 font-display text-2xl font-bold text-ink">
                    Core Objectives
                  </h2>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
                Focused institutional goals guiding AASU advocacy, programmes
                and partnerships under {priority.title}.
              </p>
            </Reveal>

            <Reveal delay={0.05} className="lg:col-span-8">
              <ol className="divide-y divide-border-subtle border-y border-border-subtle">
                {priority.objectives.map((objective, idx) => (
                  <li
                    key={objective}
                    className="flex items-baseline gap-5 py-4 first:pt-3.5 last:pb-3.5"
                  >
                    <span className="font-display text-sm font-bold text-aasu-red">
                      0{idx + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-ink sm:text-base">
                      {objective}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 3. Activities & Initiatives: Image-Led Asymmetric Editorial Showcase */}
      <section className="border-b border-border-subtle bg-surface-alt py-14 lg:py-18">
        <Container>
          <Reveal>
            <SectionHeading
              title="Activities & Initiatives"
              description="Verified programmes and campus initiatives delivering impact under this priority."
            />
          </Reveal>

          <div className="mt-9 grid items-start gap-6 lg:grid-cols-12">
            {/* Featured Image-Led Initiative */}
            {featuredActivity && (
              <Reveal className="lg:col-span-7">
                <article className="overflow-hidden rounded-3xl border border-border-subtle bg-surface-card">
                  {featuredActivity.image && (
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#101114]">
                      <img
                        src={featuredActivity.image}
                        alt={featuredActivity.imageAlt ?? featuredActivity.name}
                        className="h-full w-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-6 sm:p-7">
                    <span className="font-display text-xs font-semibold text-aasu-red">
                      Featured Initiative
                    </span>
                    <h3 className="mt-1.5 font-display text-xl font-bold text-ink sm:text-2xl">
                      {featuredActivity.name}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary sm:text-base">
                      {featuredActivity.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            )}

            {/* Supporting Initiatives (Image-Led where Verified Photo Exists + Clean Editorial Rows) */}
            <div className="space-y-4 lg:col-span-5">
              {supportingActivities.map((activity, idx) => (
                <Reveal key={activity.name} delay={idx * 0.05}>
                  {activity.image ? (
                    <article className="grid overflow-hidden rounded-2xl border border-border-subtle bg-surface-card sm:grid-cols-12">
                      <div className="aspect-[16/10] overflow-hidden bg-[#101114] sm:col-span-5 sm:aspect-auto">
                        <img
                          src={activity.image}
                          alt={activity.imageAlt ?? activity.name}
                          className="h-full w-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5 sm:col-span-7">
                        <h3 className="font-display text-base font-bold leading-snug text-ink">
                          {activity.name}
                        </h3>
                        <p className="mt-1.5 text-xs leading-relaxed text-ink-secondary sm:text-sm">
                          {activity.description}
                        </p>
                      </div>
                    </article>
                  ) : (
                    <article className="border-l-2 border-aasu-red/50 bg-surface-card/70 px-5 py-4 rounded-r-2xl">
                      <h3 className="font-display text-base font-bold leading-snug text-ink">
                        {activity.name}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-ink-secondary sm:text-sm">
                        {activity.description}
                      </p>
                    </article>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Policy Engagements: Editorial Timeline + Authentic Photography */}
      <section className="border-b border-border-subtle bg-surface py-14 lg:py-18">
        <Container>
          <Reveal>
            <SectionHeading
              title="Policy Engagements"
              description="Continental and international policy spaces where AASU represents African students."
            />
          </Reveal>

          <div className="mt-9 grid items-start gap-10 lg:grid-cols-12">
            {/* Editorial Timeline */}
            <div
              className={
                priority.policyImage ? 'lg:col-span-7' : 'lg:col-span-10'
              }
            >
              <ol className="space-y-6 border-l-2 border-aasu-red/30 pl-6">
                {priority.policyEngagements.map((item) => (
                  <li key={item.title} className="relative">
                    <span
                      className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-aasu-red bg-surface"
                      aria-hidden="true"
                    />
                    <div className="flex flex-wrap items-center gap-3 text-xs text-ink-muted">
                      <span className="inline-flex items-center gap-1.5 font-display font-semibold text-aasu-red">
                        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                        {item.date}
                      </span>
                      {item.location && (
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                          {item.location}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-1.5 font-display text-lg font-bold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">
                      {item.summary}
                    </p>
                    {item.href && item.linkLabel && (
                      <div className="mt-2.5">
                        <AppLink
                          href={item.href}
                          external={item.external}
                          className="inline-flex items-center gap-1 font-display text-xs font-semibold text-ink transition-colors hover:text-aasu-red"
                        >
                          <span>{item.linkLabel}</span>
                          <ArrowUpRight
                            className="h-3.5 w-3.5 text-aasu-red"
                            aria-hidden="true"
                          />
                        </AppLink>
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </div>

            {/* Accompanying Authentic Photograph */}
            {priority.policyImage && (
              <Reveal delay={0.06} className="lg:col-span-5">
                <figure className="overflow-hidden rounded-3xl border border-border-subtle bg-surface-alt">
                  <img
                    src={priority.policyImage}
                    alt={priority.policyImageAlt ?? priority.title}
                    className="aspect-[4/3] w-full object-cover object-top"
                    loading="lazy"
                  />
                  {priority.policyImageCaption && (
                    <figcaption className="px-5 py-3 text-xs text-ink-secondary">
                      {priority.policyImageCaption}
                    </figcaption>
                  )}
                </figure>
              </Reveal>
            )}
          </div>
        </Container>
      </section>

      {/* 5. Related Publications: Visual Cover Shelf (Original PDF Covers) */}
      {priority.publications.length > 0 && (
        <section className="border-b border-border-subtle bg-surface-alt py-14 lg:py-18">
          <Container>
            <Reveal>
              <SectionHeading
                title="Related Publications"
                description="Official AASU reports, toolkits and policy documents with original publication covers."
              />
            </Reveal>

            <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {priority.publications.map((doc) => (
                <a
                  key={doc.id}
                  href={doc.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border-subtle bg-surface-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  {doc.cover && (
                    <div className="overflow-hidden bg-[#101114] p-5 pb-0">
                      <img
                        src={doc.cover}
                        alt={`Original cover of ${doc.title}`}
                        className="aspect-[3/4] w-full rounded-t-xl object-cover object-top shadow-md transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-aasu-red">
                          {doc.category}
                        </span>
                        <span className="font-display font-semibold text-ink">
                          {doc.year}
                        </span>
                      </div>
                      <h3 className="mt-2 font-display text-base font-bold leading-snug text-ink transition-colors group-hover:text-aasu-red">
                        {doc.title}
                      </h3>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-border-subtle pt-3.5 text-xs font-semibold">
                      <span className="inline-flex items-center gap-1.5 font-display text-ink group-hover:text-aasu-red">
                        <BookOpen
                          className="h-3.5 w-3.5 text-aasu-red"
                          aria-hidden="true"
                        />
                        Download PDF
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 text-ink-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-aasu-red"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 6. Other Strategic Priorities: Compact Responsive Emblem Strip */}
      <section className="bg-surface py-12 lg:py-14">
        <Container>
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-display text-lg font-bold text-ink sm:text-xl">
              Other Strategic Priorities
            </h2>
            <AppLink
              href="/what-we-do/strategic-priorities"
              className="inline-flex items-center gap-1 font-display text-xs font-semibold text-ink-secondary hover:text-aasu-red"
            >
              <span>View All</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
            </AppLink>
          </div>

          <div className="mt-5 flex gap-2.5 overflow-x-auto pb-2 lg:flex-wrap lg:overflow-visible lg:pb-0">
            {otherPriorities.map((item) => (
              <AppLink
                key={item.slug}
                href={`/what-we-do/strategic-priorities/${item.slug}`}
                className="group inline-flex shrink-0 items-center gap-2.5 rounded-full border border-border-subtle bg-surface-alt py-2 pl-2 pr-4 transition-colors hover:border-aasu-red/50 hover:bg-surface-card"
              >
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-aasu-white p-0.5">
                  <img
                    src={item.iconPath}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-contain"
                  />
                </span>
                <span className="whitespace-nowrap font-display text-xs font-medium text-ink group-hover:text-aasu-red">
                  {item.number}. {item.title}
                </span>
              </AppLink>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
