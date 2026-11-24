import { useState } from 'react'
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  FileText,
  GraduationCap,
  Mail,
  Shield,
} from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { MembershipRelatedNav } from '@/components/layout/MembershipRelatedNav'
import { AppLink } from '@/components/ui/AppLink'
import { Button, Reveal, SectionHeading } from '@/components/ui'
import {
  AFFILIATION_STEPS,
  RIGHTS_AND_RESPONSIBILITIES,
} from '@/data/membership'
import { usePageMeta } from '@/hooks'
import { cn } from '@/lib/utils'

export function MembershipAffiliationPage() {
  const [openAccordionId, setOpenAccordionId] = useState<string>(
    RIGHTS_AND_RESPONSIBILITIES[0].id,
  )

  usePageMeta(
    'Membership & Affiliation',
    'Understand AASU membership categories, eligibility requirements, affiliation procedures, rights, responsibilities and governance participation.',
  )

  return (
    <>
      <InnerPageHero
        title="Membership & Affiliation"
        subtitle="Official pathways for national student unions, tertiary institutions and student-led organisations seeking to affiliate with the All-Africa Students Union."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Membership', href: '/membership' },
          { label: 'Membership & Affiliation' },
        ]}
        images={[
          {
            src: '/images/web/inauguration-2026.webp',
            alt: 'AASU leadership during the 2026 Inauguration and Honours Ceremony',
          },
        ]}
      />

      {/* 1. Membership Categories */}
      <section className="border-b border-border-subtle bg-surface py-16 lg:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              title="1. Membership Categories"
              description="AASU recognises Full Membership for national student unions alongside Associate and Consultative categories for tertiary institutions and student-led organisations."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {/* Full Membership */}
            <Reveal>
              <article className="flex h-full flex-col rounded-3xl border border-aasu-red/35 bg-surface-card p-7">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-aasu-red/10 text-aasu-red">
                    <Shield className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">
                      Full Membership
                    </h3>
                    <p className="text-xs font-medium text-aasu-red">
                      National Student Unions
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
                  Open to recognised national student unions representing
                  students at the national level across African countries.
                </p>
                <ul className="mt-5 space-y-2.5 text-sm text-ink-secondary">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                    <span>Full representation within AASU continental structures.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                    <span>Voting rights in statutory decision-making bodies.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                    <span>Eligibility for Executive Committee and leadership roles.</span>
                  </li>
                </ul>
              </article>
            </Reveal>

            {/* Associate Membership */}
            <Reveal delay={0.05}>
              <article className="flex h-full flex-col rounded-3xl border border-border-subtle bg-surface-card p-7">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-surface-alt text-ink">
                    <GraduationCap className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">
                      Associate Membership
                    </h3>
                    <p className="text-xs font-medium text-ink-muted">
                      Institutions &amp; Student Organisations
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
                  Open to university and polytechnic student councils,
                  postgraduate and TVET associations, and youth-oriented student
                  organisations.
                </p>
                <ul className="mt-5 space-y-2.5 text-sm text-ink-secondary">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                    <span>Participation in AASU programmes, trainings and summits.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                    <span>Access to continental peer networks and partnerships.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                    <span>Observer participation in statutory decision-making forums.</span>
                  </li>
                </ul>
              </article>
            </Reveal>

            {/* Consultative Membership */}
            <Reveal delay={0.1}>
              <article className="flex h-full flex-col rounded-3xl border border-border-subtle bg-surface-card p-7">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-surface-alt text-ink">
                    <Building2 className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">
                      Consultative Status
                    </h3>
                    <p className="text-xs font-medium text-ink-muted">
                      Thematic &amp; Alumni Student Bodies
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
                  Recognised in AASU&apos;s institutional register for
                  specialised youth and educational associations contributing to
                  thematic consultations.
                </p>
                <p className="mt-5 rounded-2xl border border-border-subtle bg-surface-alt p-4 text-xs leading-relaxed text-ink-secondary">
                  Specific constitutional criteria for Consultative status and
                  annual subscription schedules are confirmed directly by the
                  Secretariat pending publication of the official AASU
                  Constitution PDF.
                </p>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2. Eligibility & Requirements */}
      <section className="border-b border-border-subtle bg-surface-alt py-16 lg:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              title="2. Eligibility & Requirements"
              description="Core institutional criteria verified by AASU during affiliation review."
            />
          </Reveal>

          <div className="mt-9 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-border-subtle bg-surface-card p-7">
                <h3 className="font-display text-lg font-bold text-ink">
                  For Full Member Applicants
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-ink-secondary">
                  <li className="flex items-start gap-2.5">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                    <span>Must be a recognised national student union.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                    <span>Must demonstrate student representation at the national level.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                    <span>Must align with AASU values, democratic governance and Pan-African principles.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                    <span>Must provide proof of legitimacy (registration certificate or recognised institutional mandate).</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="h-full rounded-3xl border border-border-subtle bg-surface-card p-7">
                <h3 className="font-display text-lg font-bold text-ink">
                  For Associate Member Applicants
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-ink-secondary">
                  <li className="flex items-start gap-2.5">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                    <span>Must be a registered tertiary institution union or student-led organisation.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                    <span>Must be student-focused or youth-oriented in its core mandate.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                    <span>Must align with AASU&apos;s mission, vision and ethical standards.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                    <span>Must submit official organisational documentation for Secretariat verification.</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 3. Step-by-Step Application & Affiliation Procedures */}
      <section className="border-b border-border-subtle bg-surface py-16 lg:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              title="3. Application & Affiliation Procedures"
              description="Four institutional stages from initial enquiry to formal onboarding into AASU."
            />
          </Reveal>

          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AFFILIATION_STEPS.map((item, idx) => (
              <Reveal key={item.step} delay={idx * 0.05}>
                <li className="flex h-full flex-col rounded-3xl border border-border-subtle bg-surface-card p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-aasu-red font-display text-sm font-bold text-aasu-white">
                    {item.step}
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                    {item.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* 4. Rights & Responsibilities (Accessible Accordions) */}
      <section className="border-b border-border-subtle bg-surface-alt py-16 lg:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              title="4. Rights & Responsibilities of Members"
              description="How affiliated student organisations participate in, contribute to and uphold AASU's continental mandate."
            />
          </Reveal>

          <div className="mt-9 max-w-4xl space-y-3">
            {RIGHTS_AND_RESPONSIBILITIES.map((item) => {
              const isOpen = openAccordionId === item.id
              return (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-2xl border border-border-subtle bg-surface-card"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`panel-${item.id}`}
                    onClick={() =>
                      setOpenAccordionId(isOpen ? '' : item.id)
                    }
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-bold text-ink sm:text-lg">
                      {item.title}
                    </span>
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 text-aasu-red transition-transform duration-200',
                        isOpen && 'rotate-180',
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div
                      id={`panel-${item.id}`}
                      className="border-t border-border-subtle px-6 pb-6 pt-4"
                    >
                      <ul className="space-y-2.5 text-sm text-ink-secondary">
                        {item.points.map((point) => (
                          <li key={point} className="flex items-start gap-2.5">
                            <CheckCircle2
                              className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red"
                              aria-hidden="true"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* 5. Membership Governance & Official Enquiry CTA */}
      <section className="bg-surface py-16 lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-7">
              <SectionHeading
                title="5. Membership Governance & Participation"
                description="Accredited member unions participate in Congress, continental elections, thematic committees and policy consultations governed by AASU's statutory frameworks."
              />
              <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
                Because formal membership dues, accreditation windows and
                detailed constitutional articles are governed by the AASU
                Constitution and Congress regulations, AASU does not operate an
                unverified automated online submission form. All affiliation
                enquiries are handled directly through the Secretariat to ensure
                accurate documentation and data handling.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <AppLink
                  href="/about/governance"
                  className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface-alt px-4 py-2 font-display text-xs font-semibold text-ink hover:border-aasu-red hover:text-aasu-red"
                >
                  <FileText className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                  <span>Governance &amp; Documents</span>
                </AppLink>
                <a
                  href="/documents/aasu-14th-congress-election-guidelines.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface-alt px-4 py-2 font-display text-xs font-semibold text-ink hover:border-aasu-red hover:text-aasu-red"
                >
                  <FileText className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                  <span>14th Congress Election Guidelines (PDF)</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.05} className="lg:col-span-5">
              <div className="rounded-3xl bg-[#101114] p-7 text-aasu-white">
                <h3 className="font-display text-xl font-bold text-aasu-white">
                  Initiate a Membership Enquiry
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#B7BBC3]">
                  Contact the AASU Secretariat in Accra to request current
                  affiliation guidance, verification checklists and statutory
                  documentation.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Button
                    href="mailto:info@aasuonline.org?subject=AASU%20Membership%20Affiliation%20Enquiry"
                    variant="primary"
                    size="md"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span>Email info@aasuonline.org</span>
                  </Button>
                  <Button
                    href="mailto:secgen@aasuonline.org?subject=Office%20of%20the%20Secretary%20General%20-%20Membership%20Enquiry"
                    variant="outlineLight"
                    size="md"
                  >
                    <span>Office of the Secretary General</span>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <MembershipRelatedNav currentPath="/membership/affiliation" />
    </>
  )
}
