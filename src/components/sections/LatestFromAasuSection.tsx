import {
  ArrowUpRight,
  CalendarDays,
  FileText,
  Newspaper,
} from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Button, Reveal, SectionHeading } from '@/components/ui'
import {
  FEATURED_NEWS,
  OFFICIAL_STATEMENTS,
  RECENT_NEWS,
  VERIFIED_OPPORTUNITIES,
} from '@/data/homepage'

export function LatestFromAasuSection() {
  const latestStatement = OFFICIAL_STATEMENTS[0]

  return (
    <section
      id="latest"
      className="border-b border-border-subtle bg-surface-alt py-16 lg:py-22"
    >
      <Container>
        <Reveal>
          <SectionHeading
            title="Latest from Africa's Student Movement."
            action={
              <div className="flex flex-wrap gap-2.5">
                <Button href="#latest" variant="dark" size="sm">
                  All News
                </Button>
                <Button href="#statements" variant="outline" size="sm">
                  Statements
                </Button>
              </div>
            }
          />
        </Reveal>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-12">
          {/* Left Column (7 cols): Featured Story + Supporting Stories */}
          <div className="space-y-5 lg:col-span-7">
            <Reveal>
              <a
                href={FEATURED_NEWS.href}
                className="group block overflow-hidden rounded-3xl border border-border-subtle bg-surface-card transition-shadow duration-200 hover:shadow-md"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#101114]">
                  <img
                    src={FEATURED_NEWS.image}
                    alt={FEATURED_NEWS.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-aasu-red px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-aasu-white">
                    <Newspaper className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                    Featured Story
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-ink-muted">
                    <span className="font-semibold uppercase tracking-[0.12em] text-aasu-red">
                      {FEATURED_NEWS.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <time>{FEATURED_NEWS.date}</time>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold leading-snug text-ink transition-colors group-hover:text-aasu-red sm:text-2xl">
                    {FEATURED_NEWS.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-secondary">
                    {FEATURED_NEWS.excerpt}
                  </p>
                </div>
              </a>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {RECENT_NEWS.slice(0, 2).map((article, idx) => (
                <Reveal key={article.id} delay={idx * 0.05}>
                  <a
                    href={article.href}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-surface-alt">
                      <img
                        src={article.image}
                        alt={article.imageAlt}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-5">
                      <div>
                        <div className="flex items-center gap-2 text-[11px] text-ink-muted">
                          <span className="font-semibold uppercase tracking-[0.1em] text-aasu-red">
                            {article.category}
                          </span>
                          <span aria-hidden="true">·</span>
                          <time>{article.date}</time>
                        </div>
                        <h4 className="mt-1.5 font-display text-base font-bold leading-snug text-ink transition-colors group-hover:text-aasu-red">
                          {article.title}
                        </h4>
                      </div>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols): Naturally Sized Official Statement + Events & Opportunities */}
          <div className="flex flex-col gap-5 self-start lg:col-span-5">
            {latestStatement && (
              <Reveal>
                <a
                  id="statements"
                  href={latestStatement.href}
                  className="group block rounded-3xl border border-white/10 bg-[#121212] p-6 text-aasu-white transition-shadow hover:shadow-lg dark:bg-[#181A1F]"
                >
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="inline-flex items-center gap-2 font-semibold uppercase tracking-[0.16em] text-aasu-red">
                      <FileText className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                      Official Statement
                    </span>
                    <span className="text-[#B7BBC3]">
                      {latestStatement.refNumber}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold leading-snug text-aasu-white group-hover:text-neutral-200">
                    {latestStatement.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#B7BBC3]">
                    {latestStatement.date} · {latestStatement.excerpt}
                  </p>
                </a>
              </Reveal>
            )}

            <Reveal delay={0.06}>
              <div
                id="opportunities"
                className="rounded-3xl border border-border-subtle bg-surface-card p-6"
              >
                <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                  <div className="flex items-center gap-2">
                    <CalendarDays
                      className="h-4 w-4 text-aasu-red"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ink">
                      Events &amp; Opportunities
                    </h3>
                  </div>
                  <span className="text-xs text-ink-muted">2026</span>
                </div>

                <div className="mt-4 divide-y divide-border-subtle">
                  {VERIFIED_OPPORTUNITIES.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="group flex items-start justify-between gap-4 py-3.5 first:pt-0 last:pb-0"
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-2 text-[11px]">
                          <span className="font-semibold uppercase tracking-[0.12em] text-aasu-red">
                            {item.type}
                          </span>
                          <span className="text-ink-muted" aria-hidden="true">
                            ·
                          </span>
                          <span className="font-medium text-ink-secondary">
                            {item.dateLabel}
                          </span>
                        </div>
                        <p className="mt-1 font-display text-sm font-bold leading-snug text-ink transition-colors group-hover:text-aasu-red">
                          {item.title}
                        </p>
                        <p className="mt-0.5 text-xs text-ink-secondary">
                          {item.locationOrMeta}
                        </p>
                      </div>
                      <ArrowUpRight
                        className="mt-1 h-4 w-4 shrink-0 text-ink-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-aasu-red"
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
