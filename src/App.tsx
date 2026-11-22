import { MotionConfig } from 'framer-motion'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import {
  AtAGlanceSection,
  HeroSection,
  KnowledgeHubSection,
  LatestFromAasuSection,
  MembershipSection,
  PartnershipsCtaSection,
  ProgrammesSection,
  StrategicPrioritiesSection,
} from '@/components/sections'
import { DevFontSwitcher } from '@/components/ui'

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col bg-surface text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-aasu-red focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-aasu-white"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content" className="flex-1">
          <HeroSection />
          <AtAGlanceSection />
          <StrategicPrioritiesSection />
          <MembershipSection />
          <ProgrammesSection />
          <LatestFromAasuSection />
          <KnowledgeHubSection />
          <PartnershipsCtaSection />
        </main>

        <Footer />
        <DevFontSwitcher />
      </div>
    </MotionConfig>
  )
}

export default App
