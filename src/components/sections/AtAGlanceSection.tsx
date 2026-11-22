import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Button, Reveal, SectionHeading } from '@/components/ui'
import { CONTINENTAL_STATS, GLANCE_SEQUENCE } from '@/data/homepage'
import { AASU_EASE } from '@/lib/motion'

const SEQUENCE_INTERVAL_MS = 6000

export function AtAGlanceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { amount: 0.25 })
  const prefersReducedMotion = useReducedMotion()
  const [photoIndex, setPhotoIndex] = useState(0)

  useEffect(() => {
    if (!isInView || prefersReducedMotion || GLANCE_SEQUENCE.length <= 1) {
      return
    }
    const timer = window.setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % GLANCE_SEQUENCE.length)
    }, SEQUENCE_INTERVAL_MS)
    return () => window.clearInterval(timer)
  }, [isInView, prefersReducedMotion])

  const activePhoto = GLANCE_SEQUENCE[photoIndex] ?? GLANCE_SEQUENCE[0]

  return (
    <section
      ref={sectionRef}
      id="at-a-glance"
      aria-labelledby="at-a-glance-heading"
      className="border-b border-border-subtle bg-surface py-16 lg:py-22"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: Institutional Intro + 4 Headline Statistics */}
          <Reveal className="lg:col-span-6">
            <SectionHeading
              id="at-a-glance-heading"
              title="One Union. Five Decades of Student Solidarity."
            />

            <p className="mt-4 text-base leading-relaxed text-ink-secondary">
              Founded in Kumasi, Ghana in 1972, AASU is the autonomous,
              democratic representative body of African students, advocating for
              students&apos; rights, quality education and youth leadership
              across the continent.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-4 sm:gap-5">
              {CONTINENTAL_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border-subtle bg-surface-alt p-5"
                >
                  <dd className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                    <span>{stat.value}</span>
                    {stat.needsConfirmation && (
                      <span
                        className="ml-0.5 align-super text-xs font-semibold text-aasu-red"
                        title="Pending final institutional verification"
                      >
                        *
                      </span>
                    )}
                  </dd>
                  <dt className="mt-1 text-xs font-medium text-ink-secondary sm:text-sm">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/about" variant="dark" size="md">
                <span>About AASU</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="/about/history-legacy" variant="outline" size="md">
                Our History &amp; Legacy
              </Button>
            </div>

            <p className="mt-4 text-[11px] text-ink-muted">
              * Figures subject to final institutional verification prior to
              production publication.
            </p>
          </Reveal>

          {/* Right: Curated 3-Image Storytelling Crossfade Sequence */}
          <Reveal delay={0.08} className="lg:col-span-6">
            <figure className="overflow-hidden rounded-3xl border border-border-subtle bg-surface-alt">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#101114]">
                <AnimatePresence mode="sync" initial={false}>
                  <motion.img
                    key={activePhoto.id}
                    src={activePhoto.src}
                    alt={activePhoto.alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.85,
                      ease: AASU_EASE,
                    }}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                </AnimatePresence>
              </div>

              <figcaption className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 text-xs text-ink-secondary">
                <div>
                  <span className="font-medium text-ink">
                    {activePhoto.caption}
                  </span>
                  <span className="mx-2 text-ink-muted" aria-hidden="true">
                    ·
                  </span>
                  <span>{activePhoto.period}</span>
                </div>

                {/* Subtle sequence indicator dots */}
                <div
                  className="flex items-center gap-1.5"
                  aria-label="Story sequence position"
                >
                  {GLANCE_SEQUENCE.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPhotoIndex(idx)}
                      aria-label={`View photo ${idx + 1}: ${item.caption}`}
                      aria-current={idx === photoIndex ? 'true' : undefined}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === photoIndex
                          ? 'w-5 bg-aasu-red'
                          : 'w-1.5 bg-ink-muted/40 hover:bg-ink-muted'
                      }`}
                    />
                  ))}
                </div>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
