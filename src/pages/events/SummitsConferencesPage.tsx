import { ArrowUpRight, Calendar, MapPin, Users } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { EventsRelatedNav } from '@/components/layout/EventsRelatedNav'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { AppLink } from '@/components/ui/AppLink'
import { Reveal, SectionHeading } from '@/components/ui'
import {
  getMajorSummits,
  type SummitClassification,
} from '@/data/events'
import { usePageMeta } from '@/hooks'

const SUMMIT_SECTIONS: {
  key: SummitClassification
  title: string
  description: string
}[] = [
  {
    key: 'AASU Flagship Summit',
    title: 'AASU Flagship Summits & Ceremonies',
    description:
      'Verified flagship convenings led or co-convened directly by the All-Africa Students Union.',
  },
  {
    key: 'Continental Conference',
    title: 'Continental Conferences',
    description:
      'Pan-African higher education, leadership and skills conferences co-organised with continental partners.',
  },
  {
    key: 'International Forum & Convening',
    title: 'International Forums & Convenings',
    description:
      'Global sustainability, science and higher education governance forums where AASU represents African students.',
  },
]

export function SummitsConferencesPage() {
  usePageMeta(
    'Major Summits & Conferences',
    'Explore verified AASU flagship summits, continental conferences and international higher education forums.',
  )

  const summits = getMajorSummits()

  return (
    <>
      <InnerPageHero
        title="Major Summits & Conferences"
        subtitle="Flagship AASU convenings, continental student leadership conferences and high-level international forums."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Events', href: '/events' },
          { label: 'Major Summits & Conferences' },
        ]}
        images={[
          {
            src: '/images/web/inauguration-2026.webp',
            alt: 'AASU Honours and Inauguration Ceremony 2026',
          },
          {
            src: '/images/web/cfs-panel.webp',
            alt: 'Climate Forward Summit panel on circular economy',
          },
        ]}
      />

      {SUMMIT_SECTIONS.map((section, sectionIdx) => {
        const items = summits.filter(
          (item) => item.summitClassification === section.key,
        )
        if (items.length === 0) return null

        return (
          <section
            key={section.key}
            className={`border-b border-border-subtle py-14 lg:py-18 ${
              sectionIdx % 2 === 0 ? 'bg-surface' : 'bg-surface-alt'
            }`}
          >
            <Container>
              <Reveal>
                <SectionHeading
                  title={section.title}
                  description={section.description}
                />
              </Reveal>

              <div className="mt-9 grid gap-6 lg:grid-cols-2">
                {items.map((item, idx) => (
                  <Reveal key={item.id} delay={idx * 0.05}>
                    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border-subtle bg-surface-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
                      <AppLink
                        href={`/events/${item.slug}`}
                        className="relative block aspect-[16/10] overflow-hidden bg-[#101114]"
                      >
                        <img
                          src={item.coverImage}
                          alt={item.coverImageAlt}
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                        {item.edition && (
                          <span className="absolute left-4 top-4 rounded-full bg-aasu-red px-3 py-1 font-display text-[11px] font-semibold text-aasu-white">
                            {item.edition}
                          </span>
                        )}
                      </AppLink>

                      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                        <div>
                          <div className="flex flex-wrap items-center gap-3 text-xs text-ink-muted">
                            <span className="inline-flex items-center gap-1.5 font-display font-semibold text-aasu-red">
                              <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                              {item.dateDisplay}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <MapPin className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                              {item.cityOrPlatform}, {item.country}
                            </span>
                          </div>

                          <h2 className="mt-3 font-display text-xl font-bold leading-snug text-ink sm:text-2xl">
                            <AppLink
                              href={`/events/${item.slug}`}
                              className="transition-colors group-hover:text-aasu-red"
                            >
                              {item.title}
                            </AppLink>
                          </h2>

                          <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary">
                            {item.shortDescription}
                          </p>
                        </div>

                        <div className="mt-6 space-y-4 border-t border-border-subtle pt-4">
                          <div className="flex items-start gap-2 text-xs text-ink-secondary">
                            <Users
                              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-aasu-red"
                              aria-hidden="true"
                            />
                            <span>
                              {item.organisersAndPartners.join(' · ')}
                            </span>
                          </div>

                          <AppLink
                            href={`/events/${item.slug}`}
                            className="inline-flex items-center gap-1.5 font-display text-xs font-semibold text-ink hover:text-aasu-red"
                          >
                            <span>Open Dedicated Event Profile</span>
                            <ArrowUpRight className="h-4 w-4 text-aasu-red" aria-hidden="true" />
                          </AppLink>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </Container>
          </section>
        )
      })}

      <EventsRelatedNav currentPath="/events/summits-conferences" />
    </>
  )
}
