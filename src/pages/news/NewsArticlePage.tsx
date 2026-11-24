import { Navigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Download,
  UserCheck,
} from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { ShareBar } from '@/components/news/ShareBar'
import { AppLink } from '@/components/ui/AppLink'
import { Reveal } from '@/components/ui'
import { getArticleBySlug, getPublishedArticles } from '@/data/newsMedia'
import { usePageMeta } from '@/hooks'

export function NewsArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = getArticleBySlug(slug)

  usePageMeta(
    article ? article.title : 'News Article',
    article
      ? article.excerpt
      : 'Official news article from the All-Africa Students Union (AASU).',
  )

  if (!article) {
    return <Navigate to="/news" replace />
  }

  const relatedStories = getPublishedArticles()
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3)

  return (
    <>
      <InnerPageHero
        title={article.title}
        subtitle={article.excerpt}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'News & Media', href: '/news' },
          { label: article.category },
        ]}
        images={[
          {
            src: article.featuredImage,
            alt: article.featuredImageAlt,
          },
        ]}
      />

      <article className="border-b border-border-subtle bg-surface py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* Metadata & Share Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle pb-6">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="rounded-full bg-aasu-red/10 px-3 py-1 font-display font-semibold text-aasu-red">
                  {article.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-ink-secondary">
                  <Calendar className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                  <time dateTime={article.dateIso}>{article.date}</time>
                </span>
                <span className="inline-flex items-center gap-1.5 text-ink-secondary">
                  <UserCheck className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                  {article.authorOrDepartment}
                </span>
              </div>

              <ShareBar title={article.title} />
            </div>

            {/* Featured Photograph */}
            <Reveal className="mt-8">
              <figure className="overflow-hidden rounded-3xl border border-border-subtle bg-surface-alt">
                <img
                  src={article.featuredImage}
                  alt={article.featuredImageAlt}
                  className="aspect-[16/10] w-full object-cover object-top"
                />
                {article.featuredImageCaption && (
                  <figcaption className="px-5 py-3 text-xs text-ink-secondary">
                    {article.featuredImageCaption}
                  </figcaption>
                )}
              </figure>
            </Reveal>

            {/* Editorial Article Body */}
            <div className="mt-8 space-y-5 text-base leading-[1.8] text-ink-secondary">
              {article.body.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Related Photographs */}
            {article.relatedImages && article.relatedImages.length > 0 && (
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {article.relatedImages.map((img) => (
                  <figure
                    key={img.src}
                    className="overflow-hidden rounded-2xl border border-border-subtle bg-surface-alt"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="aspect-[4/3] w-full object-cover object-top"
                      loading="lazy"
                    />
                    {img.caption && (
                      <figcaption className="px-4 py-2.5 text-xs text-ink-secondary">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            )}

            {/* Relevant Downloads */}
            {article.downloads && article.downloads.length > 0 && (
              <div className="mt-10 rounded-3xl border border-border-subtle bg-surface-alt p-6">
                <h2 className="font-display text-lg font-bold text-ink">
                  Related Documents &amp; Downloads
                </h2>
                <ul className="mt-4 divide-y divide-border-subtle">
                  {article.downloads.map((doc) => (
                    <li
                      key={doc.title}
                      className="flex flex-wrap items-center justify-between gap-3 py-3.5 first:pt-1 last:pb-1"
                    >
                      <span className="font-display text-sm font-semibold text-ink">
                        {doc.title}
                      </span>
                      <a
                        href={doc.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[36px] items-center gap-1.5 rounded-full bg-aasu-red px-4 py-1.5 font-display text-xs font-semibold text-aasu-white transition-colors hover:bg-aasu-red-dark"
                      >
                        <Download className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>
                          {doc.format === 'PDF' ? 'Download PDF' : 'Open Link'}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Bottom Back & Share Bar */}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border-subtle pt-6">
              <AppLink
                href="/news"
                className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ink hover:text-aasu-red"
              >
                <ArrowLeft className="h-4 w-4 text-aasu-red" aria-hidden="true" />
                <span>Back to Newsroom</span>
              </AppLink>
              <ShareBar title={article.title} />
            </div>
          </div>
        </Container>
      </article>

      {/* Related Stories */}
      <section className="bg-surface-alt py-14 lg:py-16">
        <Container>
          <h2 className="font-display text-2xl font-bold text-ink">
            Related Stories
          </h2>
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedStories.map((story) => (
              <AppLink
                key={story.slug}
                href={`/news/${story.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface-card transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="aspect-[16/10] overflow-hidden bg-[#101114]">
                  <img
                    src={story.featuredImage}
                    alt={story.featuredImageAlt}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <span className="text-xs font-medium text-aasu-red">
                      {story.date}
                    </span>
                    <h3 className="mt-1.5 font-display text-base font-bold leading-snug text-ink group-hover:text-aasu-red">
                      {story.title}
                    </h3>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <ArrowUpRight className="h-4 w-4 text-aasu-red" aria-hidden="true" />
                  </div>
                </div>
              </AppLink>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
