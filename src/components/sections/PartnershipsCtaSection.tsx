import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Button, Reveal, SectionHeading } from '@/components/ui'
import {
  STRATEGIC_INSTITUTIONAL_PARTNERS,
  VERIFIED_PARTNER_LOGOS,
} from '@/data/homepage'

export function PartnershipsCtaSection() {
  return (
    <section id="partnerships" className="bg-surface-alt py-16 lg:py-22">
      <Container>
        {/* Partner Strip */}
        <Reveal>
          <SectionHeading
            title="Partnering for the Future of African Education."
            description="Collaborating with governments, the African Union, UNESCO, universities and international partners."
            action={
              <Button href="/contact/partner" variant="outline" size="sm">
                Partner With AASU
              </Button>
            }
          />

          {/* Verified Partner Logos (always on light neutral tiles so logos never invert) */}
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

          {/* Key Strategic Institutional Partners Pills */}
          <div className="mt-5 flex flex-wrap gap-2">
            {STRATEGIC_INSTITUTIONAL_PARTNERS.map((partner) => (
              <span
                key={partner.name}
                className="rounded-full border border-border-subtle bg-surface-card px-3.5 py-1.5 text-xs font-medium text-ink-secondary"
              >
                {partner.name}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Integrated Bold AASU Red Contact / Membership CTA */}
        <Reveal delay={0.08} className="mt-12">
          <div
            id="join"
            className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-aasu-red p-8 text-aasu-white sm:p-10 lg:flex-row lg:items-center lg:p-12"
          >
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-aasu-white sm:text-4xl">
                Be Part of Africa&apos;s Student Movement.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-aasu-white/90 sm:text-base">
                Connect with AASU as a student union, academic institution or
                strategic partner.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5">
              <Button
                href="/membership"
                variant="dark"
                size="lg"
                className="bg-aasu-white text-aasu-black hover:bg-neutral-100 dark:bg-aasu-white dark:text-aasu-black dark:hover:bg-neutral-200"
              >
                <span>Explore Membership</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="/contact" variant="outlineLight" size="lg">
                Get in Touch
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
