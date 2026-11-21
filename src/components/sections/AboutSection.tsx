import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Button, Reveal, SectionHeading } from '@/components/ui'

export function AboutSection() {
  return (
    <section id="about" className="bg-aasu-white py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Editorial Text Column */}
          <Reveal className="lg:col-span-6">
            <SectionHeading
              eyebrow="About AASU"
              title="More Than Five Decades of African Student Solidarity."
            />

            <div className="mt-8 space-y-5 text-base leading-relaxed text-neutral-700">
              <p>
                Founded in 1972 in Kumasi, Ghana, the All-Africa Students Union
                emerged at a time when African students were deeply involved in
                the struggles for liberation, justice and continental unity.
              </p>
              <p>
                Today, AASU is the continental representative organisation of
                African students, bringing together national and sub-national
                student unions across Africa. As an autonomous, democratic and
                student-led institution, the Union advocates for students&apos;
                rights, engages in education policy and promotes student
                participation in the political, social and economic development
                of Africa.
              </p>
              <p className="font-medium text-aasu-black">
                Our history is rooted in the belief that students have an
                important place in shaping the societies in which they live.
                That conviction continues to guide our work.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="#priorities" variant="dark" size="md">
                <span>Get to Know AASU</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="#membership" variant="outline" size="md">
                Our History &amp; Legacy
              </Button>
            </div>
          </Reveal>

          {/* Editorial Photography Column */}
          <Reveal delay={0.1} className="lg:col-span-6">
            <figure className="relative">
              <div className="overflow-hidden bg-aasu-offwhite">
                <img
                  src="/images/editorial/aasu-inauguration-2026.jpg"
                  alt="All-Africa Students Union Executive leadership at the 2026 Inauguration and Honours Ceremony"
                  className="aspect-[4/3] w-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Editorial Institutional Caption Block */}
              <figcaption className="mt-4 flex flex-col justify-between gap-2 border-l-2 border-aasu-red pl-4 sm:flex-row sm:items-center">
                <span className="text-xs font-medium text-neutral-600">
                  AASU Inauguration &amp; Honours Ceremony — Continental Student
                  Leadership
                </span>
                <span className="shrink-0 font-display text-xs font-bold uppercase tracking-[0.16em] text-aasu-black">
                  Kumasi, 1972 → Today
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
