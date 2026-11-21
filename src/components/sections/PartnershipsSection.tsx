import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Button, Reveal, SectionHeading } from '@/components/ui'
import {
  STRATEGIC_INSTITUTIONAL_PARTNERS,
  VERIFIED_PARTNER_LOGOS,
} from '@/data/homepage'

export function PartnershipsSection() {
  return (
    <section id="partnerships" className="bg-aasu-white py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <SectionHeading
              eyebrow="Partnerships"
              title="Partnering for the Future of African Education."
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-600">
              <p>
                AASU works with governments, the African Union, educational
                institutions, regional and international organisations, and
                development partners on shared priorities affecting African
                students.
              </p>
              <p>
                Through these relationships, the Union contributes student
                perspectives to policy processes, supports institutional
                cooperation and develops initiatives addressing education and
                development challenges.
              </p>
              <p className="font-medium text-aasu-black">
                We welcome partnerships that advance the interests of African
                students and strengthen their participation in Africa&apos;s
                future.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="#footer" variant="dark" size="md">
                <span>Our Partners</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="#footer" variant="outline" size="md">
                Partner With AASU
              </Button>
            </div>
          </Reveal>

          {/* Strategic Institutional Partners Overview */}
          <Reveal delay={0.08} className="lg:col-span-6">
            <div className="border border-neutral-200 bg-aasu-offwhite p-7 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-aasu-red">
                Continental &amp; Institutional Cooperation
              </p>
              <ul className="mt-5 divide-y divide-neutral-200">
                {STRATEGIC_INSTITUTIONAL_PARTNERS.map((partner) => (
                  <li key={partner.name} className="py-4 first:pt-0 last:pb-0">
                    <div className="font-display text-base font-bold text-aasu-black">
                      {partner.name}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                      {partner.role}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Verified Partner Logo Grid */}
        <Reveal delay={0.12} className="mt-14 border-t border-neutral-200 pt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Verified Programme &amp; Academic Partner Logos
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {VERIFIED_PARTNER_LOGOS.map((partner) => {
              const tile = (
                <div className="flex h-20 items-center justify-center border border-neutral-200 bg-aasu-offwhite/60 p-4 transition-all duration-200 hover:border-aasu-black/30 hover:bg-aasu-white">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    title={partner.name}
                    className="max-h-11 w-auto max-w-full object-contain grayscale transition-all duration-200 hover:grayscale-0"
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
  )
}
