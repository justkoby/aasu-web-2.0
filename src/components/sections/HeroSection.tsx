import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui'
import { HERO_SLIDES } from '@/data/homepage'
import { AASU_EASE } from '@/lib/motion'
import { cn } from '@/lib/utils'

const AUTO_ADVANCE_MS = 7000

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const slideCount = HERO_SLIDES.length
  const activeSlide = HERO_SLIDES[currentIndex] ?? HERO_SLIDES[0]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slideCount)
  }, [slideCount])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slideCount) % slideCount)
  }, [slideCount])

  useEffect(() => {
    if (paused || prefersReducedMotion || slideCount <= 1) return
    const timer = window.setInterval(nextSlide, AUTO_ADVANCE_MS)
    return () => window.clearInterval(timer)
  }, [paused, prefersReducedMotion, slideCount, nextSlide])

  return (
    <section
      id="top"
      aria-roledescription="carousel"
      aria-label="All-Africa Students Union Highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      className="relative flex min-h-[84vh] items-end overflow-hidden bg-[#101114] text-aasu-white lg:min-h-[90vh]"
    >
      {/* Dynamic Slide Background Photography */}
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: AASU_EASE }}
          className="absolute inset-0"
        >
          <img
            src={activeSlide.image}
            alt={activeSlide.imageAlt}
            className="h-full w-full object-cover object-top"
            fetchPriority={currentIndex === 0 ? 'high' : 'auto'}
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#101114]/92 via-[#101114]/65 to-[#101114]/25"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#101114] via-[#101114]/20 to-[#101114]/35"
            aria-hidden="true"
          />
        </motion.div>
      </AnimatePresence>

      {/* Foreground Editorial Content */}
      <Container className="relative z-10 pb-12 pt-32 sm:pb-16 sm:pt-36 lg:pb-20">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -10 }}
              transition={{ duration: 0.45, ease: AASU_EASE }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-3 border-l-2 border-aasu-red pl-3.5">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-200">
                  {activeSlide.eyebrow}
                </span>
              </div>

              <h1 className="mt-5 font-display text-[40px] font-bold leading-[1.04] tracking-tight text-aasu-white sm:text-5xl lg:text-[4.25rem] xl:text-[4.75rem]">
                {activeSlide.headline}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-200 sm:text-lg">
                {activeSlide.subheading}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Button
                  href={activeSlide.primaryCta.href}
                  variant="primary"
                  size="lg"
                >
                  <span>{activeSlide.primaryCta.label}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button
                  href={activeSlide.secondaryCta.href}
                  variant="outlineLight"
                  size="lg"
                >
                  {activeSlide.secondaryCta.label}
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Controls & Progress Indicators */}
          <div className="flex items-center justify-between gap-4 lg:flex-col lg:items-end">
            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((slide, idx) => {
                const isActive = idx === currentIndex
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}: ${slide.headline}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'h-1.5 rounded-full transition-all duration-300 cursor-pointer',
                      isActive
                        ? 'w-10 bg-aasu-red'
                        : 'w-4 bg-white/40 hover:bg-white/70',
                    )}
                  />
                )
              })}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous hero slide"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#101114]/40 text-aasu-white backdrop-blur-xs transition-colors hover:border-white hover:bg-white hover:text-[#101114] cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next hero slide"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#101114]/40 text-aasu-white backdrop-blur-xs transition-colors hover:border-white hover:bg-white hover:text-[#101114] cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
