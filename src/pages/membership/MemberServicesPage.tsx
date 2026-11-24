import {
  ArrowUpRight,
  BookOpen,
  Mail,
  Megaphone,
  Shield,
  Users,
} from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { MembershipRelatedNav } from '@/components/layout/MembershipRelatedNav'
import { AppLink } from '@/components/ui/AppLink'
import { Reveal, SectionHeading } from '@/components/ui'
import { MEMBER_SERVICES, type MemberServiceItem } from '@/data/membership'
import { usePageMeta } from '@/hooks'

const SERVICE_ICONS: Record<MemberServiceItem['icon'], typeof Shield> = {
  shield: Shield,
  book: BookOpen,
  megaphone: Megaphone,
  users: Users,
  mail: Mail,
}

export function MemberServicesPage() {
  usePageMeta(
    'Member Services',
    'Institutional support, capacity building, policy resources, communications coordination and Secretariat assistance for AASU member unions.',
  )

  return (
    <>
      <InnerPageHero
        title="Member Services"
        subtitle="Practical institutional support, capacity building, policy toolkits and continental coordination for affiliated African student unions."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Membership', href: '/membership' },
          { label: 'Member Services' },
        ]}
        images={[
          {
            src: '/images/web/nels-breakout.webp',
            alt: 'Student union delegates collaborating during an AASU institutional capacity workshop',
          },
        ]}
      />

      <section className="border-b border-border-subtle bg-surface py-16 lg:py-22">
        <Container>
          <Reveal>
            <SectionHeading
              title="Institutional Support Hub"
              description="Five core service areas connecting member unions to AASU programmes, publications, advocacy channels and Secretariat coordination."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
            {MEMBER_SERVICES.map((service, idx) => {
              const Icon = SERVICE_ICONS[service.icon]
              return (
                <Reveal
                  key={service.id}
                  delay={idx * 0.05}
                  className={idx < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}
                >
                  <article className="flex h-full flex-col justify-between rounded-3xl border border-border-subtle bg-surface-card p-7">
                    <div>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-aasu-red/10 text-aasu-red">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h2 className="mt-5 font-display text-xl font-bold text-ink">
                        {service.title}
                      </h2>
                      <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary">
                        {service.summary}
                      </p>

                      <ul className="mt-5 space-y-2 border-t border-border-subtle pt-4 text-xs leading-relaxed text-ink-secondary sm:text-sm">
                        {service.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aasu-red"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-2">
                      <AppLink
                        href={service.href}
                        external={service.external}
                        className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full border border-border-subtle bg-surface-alt px-4 py-2 font-display text-xs font-semibold text-ink transition-colors hover:border-aasu-red hover:bg-aasu-red hover:text-aasu-white"
                      >
                        <span>{service.ctaLabel}</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </AppLink>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Quick Direct Links to Official Resources */}
      <section className="bg-surface-alt py-14 lg:py-16">
        <Container>
          <div className="rounded-3xl bg-[#101114] p-7 text-aasu-white sm:p-9">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <h2 className="font-display text-2xl font-bold text-aasu-white sm:text-3xl">
                  Need to Update Your Union&apos;s Official Record?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#B7BBC3]">
                  Affiliated national unions and associate organisations can
                  submit newly elected executive contacts, official union logos
                  and verified website URLs directly to the Accra Secretariat.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
                <a
                  href="mailto:info@aasuonline.org?subject=AASU%20Member%20Union%20Record%20Update"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-aasu-red px-5 py-2.5 font-display text-xs font-semibold text-aasu-white transition-colors hover:bg-aasu-red-dark"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>info@aasuonline.org</span>
                </a>
                <AppLink
                  href="/membership/member-unions"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 font-display text-xs font-semibold text-aasu-white transition-colors hover:border-aasu-white hover:bg-white/10"
                >
                  <span>View Directory</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </AppLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <MembershipRelatedNav currentPath="/membership/services" />
    </>
  )
}
