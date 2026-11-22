import { ArrowUpRight, BookOpen } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Button, Reveal, SectionHeading } from '@/components/ui'
import { FEATURED_PUBLICATIONS } from '@/data/homepage'

export function KnowledgeHubSection() {
  return (
    <section
      id="knowledge-hub"
      className="border-b border-border-subtle bg-surface py-16 lg:py-22"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Knowledge Hub"
            title="Research, Toolkits & Publications."
            action={
              <Button href="#knowledge-hub" variant="outline" size="sm">
                Explore Knowledge Hub
              </Button>
            }
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {FEATURED_PUBLICATIONS.map((pub, idx) => (
            <Reveal key={pub.id} delay={idx * 0.06}>
              <a
                href={pub.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border-subtle bg-surface-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="overflow-hidden bg-[#101114] p-5 pb-0">
                  <img
                    src={pub.cover}
                    alt={pub.coverAlt}
                    className="aspect-[3/4] w-full rounded-t-xl object-cover object-top shadow-md transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold uppercase tracking-[0.14em] text-aasu-red">
                        {pub.type}
                      </span>
                      <span className="font-display font-bold text-ink">
                        {pub.year}
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-base font-bold leading-snug text-ink transition-colors group-hover:text-aasu-red">
                      {pub.title}
                    </h3>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-border-subtle pt-3.5 text-xs font-semibold text-ink-secondary">
                    <span className="inline-flex items-center gap-1.5 font-display text-ink group-hover:text-aasu-red">
                      <BookOpen
                        className="h-3.5 w-3.5 text-aasu-red"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                      Read PDF
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-ink-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-aasu-red"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
