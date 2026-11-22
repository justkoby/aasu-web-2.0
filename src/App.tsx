import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { DevFontSwitcher } from '@/components/ui'
import { HomePage } from '@/pages/HomePage'
import { AboutLandingPage } from '@/pages/about/AboutLandingPage'
import { GovernancePage } from '@/pages/about/GovernancePage'
import { HistoryLegacyPage } from '@/pages/about/HistoryLegacyPage'
import { PartnersPage } from '@/pages/about/PartnersPage'
import { WhoWeArePage } from '@/pages/about/WhoWeArePage'
import { CampaignsAdvocacyPage } from '@/pages/what-we-do/CampaignsAdvocacyPage'
import { PolicyEngagementPage } from '@/pages/what-we-do/PolicyEngagementPage'
import { PriorityDetailPage } from '@/pages/what-we-do/PriorityDetailPage'
import { ProgrammesPage } from '@/pages/what-we-do/ProgrammesPage'
import { ResultsImpactPage } from '@/pages/what-we-do/ResultsImpactPage'
import { StrategicPrioritiesLandingPage } from '@/pages/what-we-do/StrategicPrioritiesLandingPage'
import { WhatWeDoLandingPage } from '@/pages/what-we-do/WhatWeDoLandingPage'

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col bg-surface text-ink">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-aasu-red focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-aasu-white"
          >
            Skip to main content
          </a>

          <Navbar />

          <main id="main-content" className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />

              {/* About AASU */}
              <Route path="/about" element={<AboutLandingPage />} />
              <Route path="/about/who-we-are" element={<WhoWeArePage />} />
              <Route path="/about/history-legacy" element={<HistoryLegacyPage />} />
              <Route path="/about/governance" element={<GovernancePage />} />
              <Route path="/about/partners" element={<PartnersPage />} />

              {/* What We Do */}
              <Route path="/what-we-do" element={<WhatWeDoLandingPage />} />
              <Route
                path="/what-we-do/strategic-priorities"
                element={<StrategicPrioritiesLandingPage />}
              />
              <Route
                path="/what-we-do/strategic-priorities/:slug"
                element={<PriorityDetailPage />}
              />
              <Route path="/what-we-do/programmes" element={<ProgrammesPage />} />
              <Route
                path="/what-we-do/campaigns-advocacy"
                element={<CampaignsAdvocacyPage />}
              />
              <Route
                path="/what-we-do/policy-engagement"
                element={<PolicyEngagementPage />}
              />
              <Route
                path="/what-we-do/results-impact"
                element={<ResultsImpactPage />}
              />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />
          <DevFontSwitcher />
        </div>
      </BrowserRouter>
    </MotionConfig>
  )
}

export default App
