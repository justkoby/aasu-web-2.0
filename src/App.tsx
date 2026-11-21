import { MotionConfig } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="flex min-h-screen items-center justify-center bg-aasu-white text-aasu-black">
        <Container className="py-16">
          <div className="max-w-2xl border-l-4 border-aasu-red pl-6">
            <img
              src="/images/brand/aasu-logo-black.png"
              alt="All-Africa Students Union (AASU)"
              className="mb-8 h-14 w-auto"
            />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aasu-red">
              AASU Website 2.0 — Project Initialised
            </p>
            <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-aasu-black sm:text-4xl">
              All-Africa Students Union
            </h1>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide
              Icons are configured with the AASU visual identity. Ready for
              Phase 1 homepage development on the <code className="rounded bg-aasu-offwhite px-1.5 py-0.5 text-sm font-medium text-aasu-black">staging</code> branch.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-aasu-red">
              <span>Awaiting Phase 1 implementation</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </div>
          </div>
        </Container>
      </main>
    </MotionConfig>
  )
}

export default App
