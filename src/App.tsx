import { MotionConfig } from 'framer-motion'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import {
  AboutSection,
  ContinentalReachSection,
  FinalCtaSection,
  HeroSection,
  KnowledgeHubSection,
  MembershipSection,
  NewsMediaSection,
  OpportunitiesSection,
  PartnershipsSection,
  ProgrammesSection,
  StrategicPrioritiesSection,
} from '@/components/sections'

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col bg-aasu-white text-aasu-black">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-aasu-red focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-aasu-white"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content" className="flex-1">
          <HeroSection />
          <ContinentalReachSection />
          <AboutSection />
          <StrategicPrioritiesSection />
          <MembershipSection />
          <ProgrammesSection />
          <NewsMediaSection />
          <KnowledgeHubSection />
          <OpportunitiesSection />
          <PartnershipsSection />
          <FinalCtaSection />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
