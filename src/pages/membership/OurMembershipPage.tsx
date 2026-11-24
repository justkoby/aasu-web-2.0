import { ArrowRight, ArrowUpRight, Building2, Globe, MapPin, Users } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { MembershipRelatedNav } from '@/components/layout/MembershipRelatedNav'
import { AppLink } from '@/components/ui/AppLink'
import { Button, Reveal, SectionHeading } from '@/components/ui'
import {
  AFRICA_REGION_PROFILES,
  getUnionsByRegion,
} from '@/data/membership'
import { usePageMeta } from '@/hooks'

const STRUCTURE_TIERS = [
  {
    level: '01',
    title: 'Campus, Sub-National & Associate Bodies',
    icon: Users,
    description:
      'University student representative councils, postgraduate associations, TVET and polytechnic student bodies, and youth-focused student organisations engage directly through Associate and Consultative membership pathways.',
  },
  {
    level: '02',
    title: 'National Student Unions (Full Members)',
    icon: Building2,
    description:
      'Recognised national student unions represent learners at the national level across Africa, holding full voting rights in AASU statutory decision-making bodies and shaping continental policy resolutions.',
  },
  {
    level: '03',
    title: 'Regional & Continental AASU Structures',
    icon: Globe,
    description:
      'Through five Regional Vice Presidents, Regional Executive Committee Members, the Congress and the permanent Secretariat in Accra, Ghana, member unions coordinate continental advocacy and international representation.',
  },
]

const MEMBER_ROLES = [
  {
    title: 'Continental Advocacy & Student Rights',
    description:
      'Member unions articulate national student welfare priorities, enabling AASU to issue timely solidarity statements and advocate for academic freedom and safe learning environments.',
  },
  {
    title: 'Policy Representation & Institutional Dialogue',
    description:
      'Through AASU delegations, member union perspectives inform education financing, qualifications recognition and youth inclusion debates at the African Union, UNESCO, AAU and Global Student Forum.',
  },
  {
    title: 'Cross-Border Solidarity & Peer Learning',
    description:
      'Student leaders collaborate across linguistic and regional boundaries through initiatives such as NELS, the Leader-Shift Summit and regional policy consultations.',
  },
  {
    title: 'Democratic Accountability & Continental Governance',
    description:
      'Accredited member unions convene at Congress to adopt strategic resolutions, review institutional performance and elect the Executive Committee.',
  },
]

export function OurMembershipPage() {
  usePageMeta(
    'Our Membership',
    'Learn how AASU unites national student unions, sub-national organisations and regional structures across 54 African countries.',
  )

  return (
    <>
      <InnerPageHero
        title="Our Membership"
        subtitle="A democratic continental network uniting national student unions, university councils and student organisations across Africa's five sub-regions."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Membership', href: '/membership' },
          { label: 'Our Membership' },
        ]}
        images={[
          {
            src: '/images/web/students-letters.webp',
            alt: 'African students standing together holding red AASU emblem letters',
          },
          {
            src: '/images/web/nels-delegates.webp',
            alt: 'International student union delegates collaborating in Ghana',
          },
        ]}
      />

      {/* 1. Institutional Overview & Photography */}
      <section className="border-b border-border-subtle bg-surface py-16 lg:py-22">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-6">
              <SectionHeading
                title="Built on Student Solidarity Since 1972"
                description="Membership of the All-Africa Students Union comprises national student unions across Africa's 54 countries alongside tertiary institutions, youth groups and student-led organisations."
              />
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-secondary sm:text-base">
                <p>
                  Founded at the Kwame Nkrumah University of Science and
                  Technology in Kumasi, Ghana, AASU was created to give African
                  students a united, independent and democratic continental
                  platform. Today, that mandate connects learners across
                  universities, polytechnics, technical and vocational colleges,
                  and secondary institutions.
                </p>
                <p>
                  Whether engaging national ministries of education or
                  continental bodies such as the African Union Commission,
                  AASU derives its legitimacy directly from the democratic
                  mandate of its affiliated student organisations.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/membership/member-unions" variant="primary" size="md">
                  <span>Browse Member Directory</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button href="/about/governance" variant="outline" size="md">
                  <span>View Governance Structure</span>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.06} className="lg:col-span-6">
              <figure className="overflow-hidden rounded-3xl border border-border-subtle bg-surface-alt">
                <img
                  src="/images/web/hero-asw.webp"
                  alt="AASU representatives on stage during Africa Skills Week alongside African Union and Ghana flags"
                  className="aspect-[4/3] w-full object-cover object-top"
                  loading="lazy"
                />
                <figcaption className="px-6 py-3.5 text-xs text-ink-secondary">
                  AASU representing African student unions during continental
                  skills and education dialogues.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2. Representative Structure Diagram */}
      <section className="border-b border-border-subtle bg-surface-alt py-16 lg:py-22">
        <Container>
          <Reveal>
            <SectionHeading
              title="Representative Structure"
              description="How campus associations, national student unions and continental organs connect within AASU."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {STRUCTURE_TIERS.map((tier, idx) => {
              const Icon = tier.icon
              return (
                <Reveal key={tier.level} delay={idx * 0.06}>
                  <article className="flex h-full flex-col rounded-3xl border border-border-subtle bg-surface-card p-7">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-aasu-red/10 text-aasu-red">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="font-display text-sm font-bold text-aasu-red">
                        Tier {tier.level}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-xl font-bold text-ink">
                      {tier.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                      {tier.description}
                    </p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* 3. Continental Reach & Regional Presence */}
      <section className="border-b border-border-subtle bg-surface py-16 lg:py-22">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <Reveal className="lg:col-span-5">
              <SectionHeading
                title="Continental Reach & Regional Hubs"
                description="Headquartered in Accra, Ghana, AASU coordinates member unions across five African sub-regions while advancing regional offices across the continent."
              />
              <div className="mt-6 rounded-2xl border border-border-subtle bg-surface-alt p-5">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-aasu-red"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-display text-base font-bold text-ink">
                      Continental Secretariat Headquarters
                    </h3>
                    <p className="mt-1 text-sm text-ink-secondary">
                      No. 10 Asante Mireku Avenue, Westlands, Accra, Ghana
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-ink-muted">
                Regional offices in Mauritania (North Africa), Senegal (West
                Africa), Cameroon (Central Africa), Ethiopia (East Africa) and
                Botswana (Southern Africa) are currently in progress to deepen
                local coordination.
              </p>
            </Reveal>

            <Reveal delay={0.06} className="lg:col-span-7">
              <div className="divide-y divide-border-subtle rounded-3xl border border-border-subtle bg-surface-card">
                {AFRICA_REGION_PROFILES.map((region) => {
                  const unionCount = getUnionsByRegion(region.slug).length
                  return (
                    <AppLink
                      key={region.slug}
                      href={`/membership/regions/${region.slug}`}
                      className="group flex flex-wrap items-center justify-between gap-4 p-5 transition-colors hover:bg-surface-alt/70 first:rounded-t-3xl last:rounded-b-3xl"
                    >
                      <div>
                        <h3 className="font-display text-base font-bold text-ink transition-colors group-hover:text-aasu-red">
                          {region.name}
                        </h3>
                        <p className="mt-1 text-xs text-ink-secondary">
                          {region.countries.length} countries · Planned regional
                          hub: {region.regionalOfficeCountry}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-surface-alt px-3 py-1 font-display text-xs font-semibold text-ink">
                          {unionCount} verified unions
                        </span>
                        <ArrowUpRight
                          className="h-4 w-4 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-aasu-red"
                          aria-hidden="true"
                        />
                      </div>
                    </AppLink>
                  )
                })}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 4. Role of Member Unions */}
      <section className="bg-surface-alt py-16 lg:py-22">
        <Container>
          <Reveal>
            <SectionHeading
              title="The Role of Member Unions"
              description="Member unions are active partners in shaping education policy, defending student rights and building continental solidarity."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {MEMBER_ROLES.map((role, idx) => (
              <Reveal key={role.title} delay={idx * 0.05}>
                <article className="h-full rounded-2xl border border-border-subtle bg-surface-card p-6">
                  <span className="font-display text-xs font-bold text-aasu-red">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink">
                    {role.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary">
                    {role.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <MembershipRelatedNav currentPath="/membership/our-membership" />
    </>
  )
}
