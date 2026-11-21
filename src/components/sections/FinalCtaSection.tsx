import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Button, Reveal } from '@/components/ui'

export function FinalCtaSection() {
  return (
    <section id="join" className="bg-aasu-red py-20 text-aasu-white lg:py-24">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aasu-white/80">
              Join the Continental Movement
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-aasu-white sm:text-4xl lg:text-[2.75rem]">
              Be Part of Africa&apos;s Student Movement.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-aasu-white/90 sm:text-lg">
              Whether you represent a student union, an institution or a
              prospective partner, there are opportunities to connect,
              collaborate and contribute to AASU&apos;s work.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              href="#membership"
              variant="dark"
              size="lg"
              className="bg-aasu-white text-aasu-black hover:bg-aasu-offwhite"
            >
              <span>Explore Membership</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="#footer" variant="outlineLight" size="lg">
              Get in Touch
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
