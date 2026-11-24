import { useMemo, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  FileText,
  Images,
  Mic,
  Search,
} from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { AppLink } from '@/components/ui/AppLink'
import { Reveal, SectionHeading } from '@/components/ui'
import {
  getPublishedAlbums,
  getPublishedArticles,
  getPublishedPressReleases,
  getPublishedSpeeches,
  NEWS_MEDIA_NAV_CARDS,
} from '@/data/newsMedia'
import { usePageMeta } from '@/hooks'
import { cn } from '@/lib/utils'

const PAGE_SIZE = 6

export function NewsLandingPage() {
  usePageMeta(
    'News & Media',
    'Official AASU newsroom featuring continental education policy dispatches, official press statements, leadership speeches, curated photography and media resources.',
  )

  const articles = getPublishedArticles()
  const latestStatement = getPublishedPressReleases()[0]
  const featuredSpeech = getPublishedSpeeches()[0]
  const featuredAlbum = getPublishedAlbums()[0]

  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(articles.map((a) => a.category)))],
    [articles],
  )

  const isFiltering =
    selectedCategory !== 'All' || searchQuery.trim().length > 0

  const featuredArticle = articles.find((a) => a.featured) ?? articles[0]

  const filteredArticles = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    const base = isFiltering
      ? articles
      : articles.filter((a) => a.slug !== featuredArticle?.slug)

    return base.filter((article) => {
      if (selectedCategory !== 'All' && article.category !== selectedCategory) {
        return false
      }
      if (q) {
        const haystack =
          `${article.title} ${article.excerpt} ${article.category} ${article.authorOrDepartment}`.toLowerCase()
        if (!haystack.includes(q)) return false
      }
      return true
    })
  }, [articles, featuredArticle, isFiltering, searchQuery, selectedCategory])

  const visibleArticles = filteredArticles.slice(0, visibleCount)
  const hasMore = visibleCount < filteredArticles.length

  return (
    <>
      <InnerPageHero
        title="News & Media"
        subtitle="Official reporting, policy dialogues, press statements, leadership addresses and visual archives from the All-Africa Students Union."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'News & Media' },
        ]}
        images={[
          {
            src: '/images/web/au-education-2026.webp',
            alt: 'AASU representative speaking during Innovating Education in Africa 2026 Policy Dialogue',
          },
          {
            src: '/images/web/leadershift-audience.webp',
            alt: 'African student leaders gathered at the AASU Leader-Shift Summit',
          },
        ]}
      />

      {/* Quick Section Strip */}
      <section className="border-b border-border-subtle bg-surface-alt py-5">
        <Container>
          <nav
            aria-label="News and Media sections"
            className="flex flex-wrap items-center gap-2.5"
          >
            {NEWS_MEDIA_NAV_CARDS.map((item) => {
              const isCurrent = item.href === '/news'
              return (
                <AppLink
                  key={item.id}
                  href={item.href}
                  className={cn(
                    'inline-flex min-h-[38px] items-center rounded-full px-4 py-1.5 font-display text-xs font-semibold transition-colors',
                    isCurrent
                      ? 'bg-aasu-red text-aasu-white'
                      : 'border border-border-subtle bg-surface-card text-ink hover:border-aasu-red hover:text-aasu-red',
                  )}
                >
                  {item.title}
                </AppLink>
              )
            })}
          </nav>
        </Container>
      </section>

      {/* Editorial Lead Story + Latest Official Statement Preview */}
      {!isFiltering && featuredArticle && (
        <section className="border-b border-border-subtle bg-surface py-12 lg:py-16">
          <Container>
            <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
              {/* Dominant Featured News Article */}
              <Reveal className="lg:col-span-8">
                <AppLink
                  href={`/news/${featuredArticle.slug}`}
                  className="group grid h-full overflow-hidden rounded-3xl border border-border-subtle bg-surface-card transition-shadow duration-300 hover:shadow-lg md:grid-cols-12"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-[#101114] md:col-span-6 md:aspect-auto">
                    <img
                      src={featuredArticle.featuredImage}
                      alt={featuredArticle.featuredImageAlt}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-col justify-between p-6 sm:p-8 md:col-span-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 text-xs">
                        <span className="rounded-full bg-aasu-red/10 px-3 py-1 font-display font-semibold text-aasu-red">
                          {featuredArticle.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-ink-muted">
                          <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                          {featuredArticle.date}
                        </span>
                      </div>
                      <h2 className="mt-4 font-display text-2xl font-bold leading-snug text-ink transition-colors group-hover:text-aasu-red">
                        {featuredArticle.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                        {featuredArticle.excerpt}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-border-subtle pt-4 text-xs">
                      <span className="text-ink-muted">
                        {featuredArticle.authorOrDepartment}
                      </span>
                      <span className="inline-flex items-center gap-1 font-display font-semibold text-ink group-hover:text-aasu-red">
                        <span>Read Story</span>
                        <ArrowRight className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </AppLink>
              </Reveal>

              {/* Latest Official Statement Preview */}
              {latestStatement && (
                <Reveal delay={0.05} className="lg:col-span-4">
                  <article className="flex h-full flex-col justify-between rounded-3xl bg-[#101114] p-6 text-aasu-white sm:p-7">
                    <div>
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="inline-flex items-center gap-1.5 font-display font-semibold text-aasu-red">
                          <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                          Official Statement
                        </span>
                        {latestStatement.refNumber && (
                          <span className="rounded-md border border-white/15 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-neutral-300">
                            {latestStatement.refNumber}
                          </span>
                        )}
                      </div>
                      <h2 className="mt-4 font-display text-xl font-bold leading-snug text-aasu-white">
                        <AppLink
                          href={`/news/press-releases/${latestStatement.slug}`}
                          className="transition-colors hover:text-aasu-red"
                        >
                          {latestStatement.title}
                        </AppLink>
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-[#B7BBC3]">
                        {latestStatement.excerpt}
                      </p>
                    </div>

                    <div className="mt-6 space-y-3 border-t border-white/10 pt-4">
                      <p className="text-xs text-neutral-400">
                        Issued {latestStatement.date} · {latestStatement.signatory}
                      </p>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <AppLink
                          href={`/news/press-releases/${latestStatement.slug}`}
                          className="inline-flex items-center gap-1.5 font-display text-xs font-semibold text-aasu-white hover:text-aasu-red"
                        >
                          <span>Read Full Statement</span>
                          <ArrowUpRight className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                        </AppLink>
                        <AppLink
                          href="/news/press-releases"
                          className="font-display text-xs text-neutral-300 underline decoration-white/30 underline-offset-4 hover:text-aasu-white"
                        >
                          All Statements
                        </AppLink>
                      </div>
                    </div>
                  </article>
                </Reveal>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* Editorial Newsroom Grid with Category Filters, Search & Load More */}
      <section className="border-b border-border-subtle bg-surface-alt py-14 lg:py-18">
        <Container>
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <SectionHeading
              title="Latest Dispatches"
              description="Verified news articles covering continental advocacy, summits, youth leadership and partnerships."
            />

            <label className="relative block w-full lg:w-80">
              <span className="sr-only">Search AASU news articles</span>
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setVisibleCount(PAGE_SIZE)
                }}
                placeholder="Search newsroom..."
                className="min-h-[44px] w-full rounded-full border border-border-subtle bg-surface-card py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-ink-muted focus:border-aasu-red focus:outline-none"
              />
            </label>
          </div>

          {/* Category Filter Pills */}
          <div
            role="group"
            aria-label="Filter news by category"
            className="mt-6 flex flex-wrap gap-2"
          >
            {categories.map((category) => {
              const active = selectedCategory === category
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(category)
                    setVisibleCount(PAGE_SIZE)
                  }}
                  aria-pressed={active}
                  className={cn(
                    'min-h-[38px] cursor-pointer rounded-full px-4 py-1.5 font-display text-xs font-medium transition-colors',
                    active
                      ? 'bg-aasu-red text-aasu-white'
                      : 'border border-border-subtle bg-surface-card text-ink-secondary hover:border-aasu-red/50 hover:text-ink',
                  )}
                >
                  {category}
                </button>
              )
            })}
          </div>

          {/* Articles Grid */}
          {visibleArticles.length === 0 ? (
            <div className="mt-8 rounded-3xl border border-border-subtle bg-surface-card px-6 py-12 text-center">
              <h3 className="font-display text-lg font-bold text-ink">
                No published articles match your filter
              </h3>
              <p className="mt-2 text-sm text-ink-secondary">
                Try clearing your search or selecting another category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All')
                  setSearchQuery('')
                }}
                className="mt-5 min-h-[40px] cursor-pointer rounded-full bg-aasu-red px-5 py-2 font-display text-xs font-semibold text-aasu-white hover:bg-aasu-red-dark"
              >
                Reset Newsroom Filters
              </button>
            </div>
          ) : (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visibleArticles.map((article, idx) => (
                <Reveal key={article.slug} delay={(idx % 3) * 0.04}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border-subtle bg-surface-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                    <AppLink
                      href={`/news/${article.slug}`}
                      className="block aspect-[16/10] overflow-hidden bg-[#101114]"
                    >
                      <img
                        src={article.featuredImage}
                        alt={article.featuredImageAlt}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </AppLink>
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                          <span className="font-display font-semibold text-aasu-red">
                            {article.category}
                          </span>
                          <span className="text-ink-muted">{article.date}</span>
                        </div>
                        <h3 className="mt-2.5 font-display text-lg font-bold leading-snug text-ink transition-colors group-hover:text-aasu-red">
                          <AppLink href={`/news/${article.slug}`}>
                            {article.title}
                          </AppLink>
                        </h3>
                        <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-ink-secondary">
                          {article.excerpt}
                        </p>
                      </div>

                      <div className="mt-5 flex items-center justify-between border-t border-border-subtle pt-3.5 text-xs">
                        <span className="truncate pr-2 text-ink-muted">
                          {article.authorOrDepartment}
                        </span>
                        <AppLink
                          href={`/news/${article.slug}`}
                          className="inline-flex shrink-0 items-center gap-1 font-display font-semibold text-ink hover:text-aasu-red"
                        >
                          <span>Read</span>
                          <ArrowUpRight className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                        </AppLink>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}

          {hasMore && (
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full border border-border-subtle bg-surface-card px-6 py-2.5 font-display text-xs font-semibold text-ink transition-colors hover:border-aasu-red hover:bg-aasu-red hover:text-aasu-white"
              >
                <span>
                  Load More Articles ({filteredArticles.length - visibleCount}{' '}
                  remaining)
                </span>
              </button>
            </div>
          )}
        </Container>
      </section>

      {/* Featured Speech & Featured Media Album Spotlight */}
      <section className="bg-surface py-14 lg:py-18">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {featuredSpeech && (
              <Reveal>
                <article className="flex h-full flex-col justify-between rounded-3xl border border-border-subtle bg-surface-card p-6 sm:p-7">
                  <div>
                    <span className="inline-flex items-center gap-1.5 font-display text-xs font-semibold text-aasu-red">
                      <Mic className="h-3.5 w-3.5" aria-hidden="true" />
                      Featured Address · {featuredSpeech.date}
                    </span>
                    <h2 className="mt-3 font-display text-xl font-bold leading-snug text-ink sm:text-2xl">
                      {featuredSpeech.title}
                    </h2>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary">
                      {featuredSpeech.summary}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border-subtle pt-4">
                    <span className="text-xs text-ink-muted">
                      {featuredSpeech.speaker}
                    </span>
                    <div className="flex items-center gap-4">
                      <AppLink
                        href={`/news/speeches/${featuredSpeech.slug}`}
                        className="inline-flex items-center gap-1 font-display text-xs font-semibold text-ink hover:text-aasu-red"
                      >
                        <span>View Address</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                      </AppLink>
                      <AppLink
                        href="/news/speeches"
                        className="font-display text-xs text-ink-muted hover:text-ink"
                      >
                        All Speeches
                      </AppLink>
                    </div>
                  </div>
                </article>
              </Reveal>
            )}

            {featuredAlbum && (
              <Reveal delay={0.05}>
                <AppLink
                  href={`/news/gallery/${featuredAlbum.slug}`}
                  className="group relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-3xl bg-[#101114] text-aasu-white"
                >
                  <img
                    src={featuredAlbum.coverThumb}
                    alt={featuredAlbum.coverAlt}
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#101114]/95 via-[#101114]/50 to-[#101114]/15"
                    aria-hidden="true"
                  />
                  <div className="relative z-10 p-6 sm:p-7">
                    <span className="inline-flex items-center gap-1.5 font-display text-xs font-semibold text-aasu-red">
                      <Images className="h-3.5 w-3.5" aria-hidden="true" />
                      Featured Photo Album · {featuredAlbum.assets.length} Photos
                    </span>
                    <h2 className="mt-2 font-display text-xl font-bold text-aasu-white sm:text-2xl">
                      {featuredAlbum.title}
                    </h2>
                    <p className="mt-1.5 text-sm text-neutral-200">
                      {featuredAlbum.location} · {featuredAlbum.date}
                    </p>
                  </div>
                </AppLink>
              </Reveal>
            )}
          </div>
        </Container>
      </section>
    </>
  )
}
