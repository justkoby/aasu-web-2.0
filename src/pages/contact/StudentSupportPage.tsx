import { ArrowUpRight, Lock, Mail, ShieldAlert, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { AppLink } from '@/components/ui/AppLink'
import { Reveal, SectionHeading } from '@/components/ui'
import {
  SAFEGUARDING_PREREQUISITES,
  STUDENT_RIGHTS_GUIDANCE,
} from '@/data/contact'
import { usePageMeta } from '@/hooks'

export function StudentSupportPage() {
  usePageMeta(
    'Student Rights & Support',
    'Information on AASU student rights advocacy, member union referral pathways and governance prerequisites for secure student rights reporting.',
  )

  return (
    <>
      <InnerPageHero
        title="Student Rights & Support"
        subtitle="Information on AASU's student rights mandate, national union referral channels and our commitment to responsible, secure handling of sensitive student concerns."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
          { label: 'Student Rights & Support' },
        ]}
        images={[
          {
            src: '/images/web/african-child-2026.webp',
            alt: 'AASU representative advocating for student rights and safe learning environments',
          },
        ]}
      />

      {/* 1. Student Rights Information & Guidance */}
      <section className="border-b border-border-subtle bg-surface py-14 lg:py-18">
        <Container>
          <Reveal>
            <SectionHeading
              title="Student Rights Information & Guidance"
              description="Defending academic freedom, safe campuses and equitable access to education is foundational to AASU's mandate since 1972."
            />
          </Reveal>

          <div className="mt-9 grid gap-6 md:grid-cols-3">
            {STUDENT_RIGHTS_GUIDANCE.map((item) => (
              <Reveal key={item.title}>
                <article className="h-full rounded-3xl border border-border-subtle bg-surface-card p-6">
                  <ShieldCheck
                    className="h-5 w-5 text-aasu-red"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                    {item.summary}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 2. Report a Student Rights Issue (Deliberately Inactive Pending Safeguarding Approval) */}
      <section className="border-b border-border-subtle bg-surface-alt py-14 lg:py-18">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <div className="rounded-3xl border border-aasu-red/35 bg-surface-card p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-aasu-red/10 px-3.5 py-1 font-display text-xs font-semibold text-aasu-red">
                  <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Online Reporting Portal Inactive Pending Approval</span>
                </div>

                <h2 className="mt-4 font-display text-2xl font-bold text-ink">
                  Report a Student Rights Issue
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-secondary sm:text-base">
                  Student complaints and rights concerns may involve sensitive
                  personal information. To protect students, AASU has
                  deliberately kept online complaint submission disabled on this
                  website until all institutional safeguarding, legal and
                  technical controls are formally approved and verified.
                </p>

                <h3 className="mt-6 font-display text-sm font-bold text-ink">
                  Required Controls Before Online Activation:
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-ink-secondary">
                  {SAFEGUARDING_PREREQUISITES.map((req) => (
                    <li key={req} className="flex items-start gap-2.5">
                      <ShieldAlert
                        className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red"
                        aria-hidden="true"
                      />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 rounded-2xl border border-border-subtle bg-surface-alt p-4 text-xs leading-relaxed text-ink-secondary">
                  Do not submit sensitive personal data or confidential evidence
                  through browser forms, chat widgets or public channels on this
                  staging site.
                </p>
              </div>
            </Reveal>

            {/* 3. Support & Referral Information */}
            <Reveal delay={0.05} className="lg:col-span-5">
              <div className="flex h-full flex-col justify-between rounded-3xl bg-[#101114] p-6 text-aasu-white sm:p-8">
                <div>
                  <h2 className="font-display text-xl font-bold text-aasu-white">
                    Student Support &amp; Referral Pathways
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#B7BBC3]">
                    Students facing urgent safety risks should always contact
                    local emergency services, university student welfare
                    offices, consular missions (for international students) or
                    recognised national student unions first.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#B7BBC3]">
                    For institutional student-rights correspondence or to
                    connect with a recognised national student union in your
                    country, use the verified channels below.
                  </p>
                </div>

                <div className="mt-7 space-y-3 border-t border-white/10 pt-5">
                  <AppLink
                    href="/membership/member-unions"
                    className="inline-flex min-h-[42px] w-full items-center justify-center gap-2 rounded-full bg-aasu-red px-5 py-2.5 font-display text-xs font-semibold text-aasu-white hover:bg-aasu-red-dark"
                  >
                    <span>Find Your National Student Union</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </AppLink>
                  <a
                    href="mailto:secgen@aasuonline.org?subject=Institutional%20Student%20Rights%20Enquiry"
                    className="inline-flex min-h-[42px] w-full items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-2.5 font-display text-xs font-semibold text-aasu-white hover:border-aasu-white hover:bg-white/10"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span>Office of the Secretary-General</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Related Advocacy & Publications */}
      <section className="bg-surface py-12">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="font-display text-sm font-semibold text-ink">
              Explore AASU&apos;s ongoing advocacy on student rights and welfare:
            </p>
            <div className="flex flex-wrap gap-3">
              <AppLink
                href="/what-we-do/strategic-priorities/education-and-students-rights"
                className="inline-flex items-center gap-1 font-display text-xs font-semibold text-aasu-red hover:underline"
              >
                <span>Education &amp; Students&apos; Rights</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </AppLink>
              <AppLink
                href="/news/press-releases"
                className="inline-flex items-center gap-1 font-display text-xs font-semibold text-ink hover:text-aasu-red"
              >
                <span>Official Solidarity Statements</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
              </AppLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
