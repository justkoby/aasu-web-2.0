import { useState } from 'react'
import { Building2, CheckCircle2, Mail, MapPin, Phone, Users } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { RelatedPagesNav } from '@/components/layout/RelatedPagesNav'
import { DocumentCard } from '@/components/ui/DocumentCard'
import { LeadershipCard } from '@/components/ui/LeadershipCard'
import { Reveal, SectionHeading } from '@/components/ui'
import {
  EXECUTIVE_COMMITTEE,
  GOVERNANCE_DOCUMENTS,
  GOVERNANCE_ORGANS,
  SECRETARIAT_TEAM,
} from '@/data/about'
import { cn } from '@/lib/utils'

const EXEC_FILTERS = [
  'All',
  'Continental Leadership',
  'North Africa',
  'West Africa',
  'Central Africa',
  'East Africa',
  'Southern Africa',
  'Secretaries',
]

export function GovernancePage() {
  const [selectedOrganId, setSelectedOrganId] = useState(
    GOVERNANCE_ORGANS[0].id,
  )
  const [execFilter, setExecFilter] = useState('All')

  const activeOrgan =
    GOVERNANCE_ORGANS.find((o) => o.id === selectedOrganId) ??
    GOVERNANCE_ORGANS[0]

  const visibleExecutives =
    execFilter === 'All'
      ? EXECUTIVE_COMMITTEE
      : EXECUTIVE_COMMITTEE.filter((m) => m.region === execFilter)

  return (
    <>
      <InnerPageHero
        title="Governance"
        subtitle="AASU's democratic institutional structures: the Congress, the elected Executive Committee, the Secretariat in Accra and official governing instruments."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About AASU', href: '/about' },
          { label: 'Governance' },
        ]}
        images={[
          {
            src: '/images/web/inauguration-2026.webp',
            alt: 'All-Africa Students Union Executive Committee at the 2026 Inauguration and Honours Ceremony',
          },
        ]}
      />

      {/* A & B. Interactive Governance Overview Diagram */}
      <section className="border-b border-border-subtle bg-surface py-16 lg:py-22">
        <Container>
          <Reveal>
            <SectionHeading
              title="Democratic Organs of the Union"
              description="Select an institutional organ to inspect its official role within the All-Africa Students Union."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-start">
            {/* Interactive Organ Selector */}
            <div
              role="tablist"
              aria-label="AASU Governance Organs"
              className="space-y-3 lg:col-span-5"
            >
              {GOVERNANCE_ORGANS.map((organ, idx) => {
                const isSelected = organ.id === selectedOrganId
                return (
                  <button
                    key={organ.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedOrganId(organ.id)}
                    className={cn(
                      'w-full rounded-2xl border p-5 text-left transition-all duration-200 cursor-pointer',
                      isSelected
                        ? 'border-aasu-red bg-surface-alt shadow-xs'
                        : 'border-border-subtle bg-surface-card hover:border-ink/30',
                    )}
                  >
                    <span className="font-display text-xs font-semibold tracking-[0.14em] text-aasu-red">
                      0{idx + 1} · {organ.roleLabel}
                    </span>
                    <h3 className="mt-1.5 font-display text-xl font-bold text-ink">
                      {organ.title}
                    </h3>
                  </button>
                )
              })}
            </div>

            {/* Selected Organ Detail Panel */}
            <div
              role="tabpanel"
              aria-label={activeOrgan.title}
              className="rounded-3xl border border-border-subtle bg-surface-alt p-7 sm:p-9 lg:col-span-7"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-aasu-red">
                {activeOrgan.roleLabel}
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
                {activeOrgan.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink-secondary">
                {activeOrgan.summary}
              </p>

              <ul className="mt-6 space-y-3 border-t border-border-subtle pt-6">
                {activeOrgan.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-3 text-sm leading-relaxed text-ink"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red"
                      aria-hidden="true"
                    />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* C. Executive Committee (2026-2029 Verified Leadership) */}
      <section className="border-b border-border-subtle bg-surface-alt py-16 lg:py-22">
        <Container>
          <Reveal>
            <SectionHeading
              title="Executive Committee (2026-2029)"
              description="Elected at the 14th Elective Congress to execute the policies and programmes adopted by Congress across all five African regions."
            />
          </Reveal>

          <div
            role="tablist"
            aria-label="Filter Executive Committee by region or portfolio"
            className="mt-8 flex flex-wrap gap-2"
          >
            {EXEC_FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={execFilter === filter}
                onClick={() => setExecFilter(filter)}
                className={cn(
                  'rounded-full px-4 py-2 font-display text-xs font-medium transition-colors cursor-pointer',
                  execFilter === filter
                    ? 'bg-aasu-red text-aasu-white'
                    : 'border border-border-subtle bg-surface-card text-ink hover:border-ink/40',
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {visibleExecutives.map((profile) => (
              <LeadershipCard key={profile.id} profile={profile} />
            ))}
          </div>
        </Container>
      </section>

      {/* D. The Secretariat */}
      <section className="border-b border-border-subtle bg-surface py-16 lg:py-20">
        <Container>
          <div className="grid gap-8 rounded-3xl border border-border-subtle bg-surface-alt p-7 sm:p-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-surface-card text-aasu-red">
                <Building2 className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">
                The Continental Secretariat
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink-secondary">
                Hosted in Accra, Ghana, the Secretariat coordinates institutional
                operations, member-union relations, policy research, programmes
                and communications on behalf of the Union.
              </p>
            </div>

            <div className="space-y-3 rounded-2xl border border-border-subtle bg-surface-card p-6 text-sm text-ink-secondary lg:col-span-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                <span>No. 10 Asante Mireku Avenue, Westlands, Accra, Ghana</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                <div className="flex flex-col gap-0.5">
                  <a href="mailto:secgen@aasuonline.org" className="hover:text-aasu-red">
                    secgen@aasuonline.org
                  </a>
                  <a href="mailto:info@aasuonline.org" className="hover:text-aasu-red">
                    info@aasuonline.org
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                <span>+233 552 594 294 / +233 203 927 736</span>
              </div>
              <div className="flex items-start gap-3">
                <Users className="mt-0.5 h-4 w-4 shrink-0 text-aasu-red" aria-hidden="true" />
                <span>Office of the Secretary General &amp; Operational Departments</span>
              </div>
            </div>
          </div>

          {/* Verified Secretariat & Technical Team */}
          <div className="mt-12">
            <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
              Secretariat &amp; Technical Team
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-ink-secondary">
              Operational officers and staff supporting AASU programmes,
              administration, communications and member services from the Accra
              Secretariat.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {SECRETARIAT_TEAM.map((member) => {
                const initials = member.name
                  .split(' ')
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((w) => w[0]?.toUpperCase() ?? '')
                  .join('')

                return (
                  <article
                    key={member.id}
                    className="flex items-center gap-3.5 rounded-2xl border border-border-subtle bg-surface-card p-4"
                  >
                    {member.portrait ? (
                      <img
                        src={member.portrait}
                        alt={member.name}
                        className="h-14 w-14 shrink-0 rounded-full object-cover object-top"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-surface-alt font-display text-sm font-bold text-aasu-red">
                        {initials}
                      </div>
                    )}
                    <div className="min-w-0">
                      <h4 className="font-display text-sm font-bold leading-snug text-ink">
                        {member.name}
                      </h4>
                      <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-ink-secondary">
                        {member.position}
                      </p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* E. Constitution and Governing Instruments */}
      <section className="bg-surface-alt py-16 lg:py-22">
        <Container>
          <Reveal>
            <SectionHeading
              title="Constitution & Governing Instruments"
              description="Official electoral guidelines, Congress resolutions and institutional governance documents."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {GOVERNANCE_DOCUMENTS.map((doc) => (
              <DocumentCard key={doc.id} document={doc} />
            ))}
          </div>
        </Container>
      </section>

      <RelatedPagesNav currentPath="/about/governance" />
    </>
  )
}
