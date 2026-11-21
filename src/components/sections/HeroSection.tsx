import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui'
import { AASU_EASE } from '@/lib/motion'

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[82vh] items-end overflow-hidden bg-aasu-black text-aasu-white lg:min-h-[88vh]"
    >
      {/* Authentic AASU Continental Photography */}
      <img
        src="/images/editorial/aasu-hero-asw.jpg"
        alt="All-Africa Students Union representatives on stage during Africa Skills Week alongside the African Union and Ghana flags"
        className="absolute inset-0 h-full w-full object-cover object-top"
        fetchPriority="high"
      />

      {/* Editorial Dark Gradient Scrim for High-Contrast Typography */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-aasu-black/92 via-aasu-black/72 to-aasu-black/35"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-aasu-black via-transparent to-aasu-black/30"
        aria-hidden="true"
      />

      <Container className="relative z-10 py-20 sm:py-24 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: AASU_EASE }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-3 border-l-2 border-aasu-red pl-3.5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-200">
              All-Africa Students Union · Est. 1972
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-aasu-white sm:text-5xl lg:text-6xl xl:text-[4rem]">
            The Continental Voice of Africa&apos;s Students
          </h1>

          <p className="mt-6 font-display text-lg font-medium leading-snug text-neutral-100 sm:text-xl lg:text-2xl">
            Representing the interests and aspirations of African students since
            1972.
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-300 sm:text-base">
            From classrooms and campuses to the highest levels of policy and
            decision-making, the All-Africa Students Union (AASU) brings African
            students together to defend their rights, advance educational
            opportunities and influence the future of the continent.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#about" variant="primary" size="lg">
              <span>Discover AASU</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="#priorities" variant="outlineLight" size="lg">
              Explore Our Work
            </Button>
          </div>
        </motion.div>

        {/* Discreet Scroll Cue */}
        <a
          href="#reach"
          className="mt-12 hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-300 transition-colors hover:text-aasu-white lg:inline-flex"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="h-3.5 w-3.5 text-aasu-red" aria-hidden="true" />
        </a>
      </Container>
    </section>
  )
}
