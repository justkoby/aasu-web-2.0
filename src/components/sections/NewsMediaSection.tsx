import { ArrowRight, Calendar, FileText } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Button, Reveal, SectionHeading } from '@/components/ui'
import {
  FEATURED_NEWS,
  OFFICIAL_STATEMENTS,
  RECENT_NEWS,
} from '@/data/homepage'

export function NewsMediaSection() {
  return (
    <section
      id="news"
      className="border-y border-neutral-200 bg-aasu-offwhite py-20 lg:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="News & Media"
            title="The Latest from Africa's Student Movement."
            description="Follow AASU's latest institutional engagements, policy contributions, official statements and activities across the continent and internationally."
            action={
              <div className="flex flex-wrap gap-3">
                <Button href="#news" variant="dark" size="sm">
                  All News
                </Button>
                <Button href="#statements" variant="outline" size="sm">
                  Press Releases &amp; Statements
                </Button>
              </div>
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Featured News + Official Statements Column */}
          <div className="space-y-8 lg:col-span-7">
            {/* Prominent Featured Article */}
            <Reveal>
              <article className="group overflow-hidden border border-neutral-200 bg-aasu-white">
                <div className="relative aspect-[16/10] overflow-hidden bg-aasu-black">
                  <img
                    src={FEATURED_NEWS.image}
                    alt={FEATURED_NEWS.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 bg-aasu-red px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-aasu-white">
                    Featured News
                  </span>
                </div>
                <div className="p-7 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500">
                    <span className="font-semibold uppercase tracking-[0.12em] text-aasu-red">
                      {FEATURED_NEWS.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <time className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      {FEATURED_NEWS.date}
                    </time>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-extrabold leading-snug text-aasu-black transition-colors group-hover:text-aasu-red sm:text-[1.65rem]">
                    <a href={FEATURED_NEWS.href}>{FEATURED_NEWS.title}</a>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
                    {FEATURED_NEWS.excerpt}
                  </p>
                  <div className="mt-6">
                    <a
                      href={FEATURED_NEWS.href}
                      className="inline-flex items-center gap-2 font-display text-sm font-bold text-aasu-black transition-colors hover:text-aasu-red"
                    >
                      <span>Read Full Story</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>

            {/* Official Statements Highlight Block */}
            <Reveal delay={0.08}>
              <div
                id="statements"
                className="border-l-4 border-aasu-red bg-aasu-black p-7 text-aasu-white sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <FileText
                      className="h-4 w-4 text-aasu-red"
                      aria-hidden="true"
                    />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-300">
                      Official Statements
                    </span>
                  </div>
                  <span className="text-xs text-neutral-400">
                    Press Releases &amp; Public Positions
                  </span>
                </div>

                <div className="mt-5 divide-y divide-white/10">
                  {OFFICIAL_STATEMENTS.map((stmt) => (
                    <article key={stmt.id} className="py-4 first:pt-0 last:pb-0">
                      <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-neutral-400">
                        <span className="font-semibold text-aasu-red">
                          {stmt.refNumber}
                        </span>
                        <span aria-hidden="true">·</span>
                        <time>{stmt.date}</time>
                      </div>
                      <h3 className="mt-1.5 font-display text-lg font-bold leading-snug text-aasu-white transition-colors hover:text-neutral-200">
                        <a href={stmt.href}>{stmt.title}</a>
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-neutral-300">
                        {stmt.excerpt}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* More from AASU — Three Recent Articles */}
          <div className="flex flex-col justify-between gap-5 lg:col-span-5">
            <div className="flex items-center justify-between border-b border-neutral-300 pb-3">
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-aasu-black">
                More from AASU
              </h3>
              <span className="text-xs text-neutral-500">Latest Updates</span>
            </div>

            <div className="flex flex-1 flex-col gap-5">
              {RECENT_NEWS.map((article, idx) => (
                <Reveal key={article.id} delay={idx * 0.06}>
                  <article className="group grid grid-cols-12 gap-4 border border-neutral-200 bg-aasu-white p-4 transition-colors hover:border-aasu-black/30">
                    <div className="col-span-4 overflow-hidden bg-aasu-offwhite">
                      <img
                        src={article.image}
                        alt={article.imageAlt}
                        className="h-full min-h-[110px] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="col-span-8 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 text-[11px] text-neutral-500">
                          <span className="font-semibold uppercase tracking-[0.1em] text-aasu-red">
                            {article.category}
                          </span>
                          <span aria-hidden="true">·</span>
                          <time>{article.date}</time>
                        </div>
                        <h4 className="mt-1.5 font-display text-base font-bold leading-snug text-aasu-black transition-colors group-hover:text-aasu-red">
                          <a href={article.href}>{article.title}</a>
                        </h4>
                        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-neutral-600">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
