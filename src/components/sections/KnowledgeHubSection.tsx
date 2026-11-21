import { ArrowUpRight, BookOpen } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Button, Reveal, SectionHeading } from '@/components/ui'
import { FEATURED_PUBLICATIONS } from '@/data/homepage'

export function KnowledgeHubSection() {
  return (
    <section id="knowledge-hub" className="bg-aasu-white py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Knowledge Hub"
            title="Ideas, Evidence and Perspectives for Africa's Future."
            description="AASU contributes to research and policy discussions on education, students' rights and the wider challenges shaping Africa's development. Explore our research papers, policy briefs, reports, toolkits and other institutional publications."
            action={
              <Button href="#knowledge-hub" variant="primary" size="md">
                Explore the Knowledge Hub
              </Button>
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {FEATURED_PUBLICATIONS.map((pub, idx) => (
            <Reveal key={pub.id} delay={idx * 0.08}>
              <article className="group flex h-full flex-col border border-neutral-200 bg-aasu-offwhite transition-all duration-200 hover:-translate-y-0.5 hover:border-aasu-black/30 hover:shadow-md">
                {/* Original Publication Cover */}
                <a
                  href={pub.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden bg-aasu-black p-6 pb-0"
                >
                  <div className="overflow-hidden shadow-lg">
                    <img
                      src={pub.cover}
                      alt={pub.coverAlt}
                      className="aspect-[3/4] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                </a>

                <div className="flex flex-1 flex-col justify-between bg-aasu-white p-6">
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-semibold uppercase tracking-[0.14em] text-aasu-red">
                        {pub.type}
                      </span>
                      <span className="font-display font-bold text-aasu-black">
                        {pub.year}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-lg font-bold leading-snug text-aasu-black transition-colors group-hover:text-aasu-red">
                      <a
                        href={pub.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {pub.title}
                      </a>
                    </h3>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4">
                    <a
                      href={pub.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-[0.12em] text-aasu-black transition-colors hover:text-aasu-red"
                    >
                      <BookOpen className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
                      <span>Read Publication (PDF)</span>
                    </a>
                    <ArrowUpRight
                      className="h-4 w-4 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-aasu-red"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
