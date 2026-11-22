import { useState } from 'react'
import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { RelatedPagesNav } from '@/components/layout/RelatedPagesNav'
import { AppLink } from '@/components/ui/AppLink'
import { PartnerCard } from '@/components/ui/PartnerCard'
import { Button, Reveal, SectionHeading } from '@/components/ui'
import {
  FEATURED_COLLABORATIONS,
  VERIFIED_PARTNERS_DIRECTORY,
} from '@/data/about'
import type { PartnerCategoryName } from '@/data/about'
import { VERIFIED_PARTNER_LOGOS } from '@/data/homepage'
import { cn } from '@/lib/utils'

const PARTNER_CATEGORIES: ('All' | PartnerCategoryName)[] = [
  'All',
  'Strategic Partners',
  'Academic & Education Partners',
  'Development & NGO Partners',
  'Programme & Event Partners',
]

export function PartnersPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<'All' | PartnerCategoryName>('All')

  const visiblePartners =
    selectedCategory === 'All'
      ? VERIFIED_PARTNERS_DIRECTORY
      : VERIFIED_PARTNERS_DIRECTORY.filter(
          (p) => p.category === selectedCategory,
        )

  return (
    <>
      <InnerPageHero
        title="Partners & Institutional Relations"
        subtitle="AASU collaborates with governments, the African Union, universities, regional bodies and international partners to advance African education and youth leadership."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About AASU', href: '/about' },
          { label: 'Partners & Institutional Relations' },
        ]}
        images={[
          {
            src: '/images/web/nels-breakout.webp',
            alt: 'International partners collaborating during the NELS 3rd Strategic Partners Meeting in Ghana',
          },
        ]}
      />

      {/* Verified Partner Logo Strip */}
      <section className="border-b border-border-subtle bg-surface py-14 lg:py-18">
        <Container>
          <Reveal>
            <SectionHeading
              title="Institutional Partnerships & Affiliations"
              description="Verified academic, student-union and programme partner logos currently held in AASU's official brand repository."
            />

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
              {VERIFIED_PARTNER_LOGOS.map((partner) => {
                const tile = (
                  <div className="flex h-16 items-center justify-center rounded-2xl border border-border-subtle bg-aasu-white p-3.5 transition-all duration-200 hover:border-aasu-red/40 hover:shadow-xs">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      title={partner.name}
                      className="max-h-9 w-auto max-w-full object-contain grayscale transition-all duration-200 hover:grayscale-0"
                      loading="lazy"
                    />
                  </div>
                )
                return partner.href ? (
                  <a
                    key={partner.name}
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={partner.name}
                  >
                    {tile}
                  </a>
                ) : (
                  <div key={partner.name}>{tile}</div>
                )
              })}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Featured Collaboration Stories */}
      <section className="border-b border-border-subtle bg-surface-alt py-16 lg:py-22">
        <Container>
          <Reveal>
            <SectionHeading
              title="Collaborative Frameworks in Action"
              description="Selected verified initiatives advancing green skills, qualification recognition and student leadership."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {FEATURED_COLLABORATIONS.map((story, idx) => (
              <Reveal key={story.id} delay={idx * 0.06}>
                <AppLink
                  href={story.href}
                  external={story.external}
                  className="group grid overflow-hidden rounded-3xl border border-border-subtle bg-surface-card transition-shadow hover:shadow-md sm:grid-cols-12"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-[#101114] sm:col-span-5 sm:aspect-auto">
                    <img
                      src={story.image}
                      alt={story.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col justify-between p-6 sm:col-span-7">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-aasu-red">
                        {story.partner}
                      </span>
                      <h3 className="mt-2 font-display text-xl font-bold leading-snug text-ink transition-colors group-hover:text-aasu-red">
                        {story.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                        {story.summary}
                      </p>
                    </div>
                    <div className="mt-5 inline-flex items-center gap-1.5 font-display text-xs font-semibold text-ink group-hover:text-aasu-red">
                      <span>Explore Collaboration</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                    </div>
                  </div>
                </AppLink>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Verified Institutional Partners Directory */}
      <section className="border-b border-border-subtle bg-surface py-16 lg:py-22">
        <Container>
          <Reveal>
            <SectionHeading
              title="Partner Directory"
              description="Browse verified strategic, academic, development and programme partners."
            />
          </Reveal>

          <div
            role="tablist"
            aria-label="Filter partners by category"
            className="mt-8 flex flex-wrap gap-2"
          >
            {PARTNER_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  'rounded-full px-4 py-2 font-display text-xs font-medium transition-colors cursor-pointer',
                  selectedCategory === category
                    ? 'bg-aasu-red text-aasu-white'
                    : 'border border-border-subtle bg-surface-alt text-ink hover:border-ink/40',
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visiblePartners.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </div>
        </Container>
      </section>

      {/* Partnership Enquiry CTA */}
      <section className="bg-surface-alt py-16 lg:py-20">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-aasu-red p-8 text-aasu-white sm:p-10 lg:flex-row lg:items-center lg:p-12">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-bold leading-tight text-aasu-white sm:text-4xl">
                Partner With the All-Africa Students Union
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-aasu-white/90 sm:text-base">
                We welcome institutional cooperation, research collaborations
                and joint programmes that advance African education and youth
                leadership.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5">
              <Button
                href="mailto:info@aasuonline.org?subject=Institutional%20Partnership%20Enquiry%20(AASU)"
                variant="dark"
                size="lg"
                className="bg-aasu-white text-aasu-black hover:bg-neutral-100 dark:bg-aasu-white dark:text-aasu-black dark:hover:bg-neutral-200"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Send Partnership Enquiry</span>
              </Button>
              <Button href="mailto:secgen@aasuonline.org" variant="outlineLight" size="lg">
                <span>Office of the Secretary General</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <RelatedPagesNav currentPath="/about/partners" />
    </>
  )
}
