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
import { MemberServicesPage } from '@/pages/membership/MemberServicesPage'
import { MemberUnionProfilePage } from '@/pages/membership/MemberUnionProfilePage'
import { MemberUnionsDirectoryPage } from '@/pages/membership/MemberUnionsDirectoryPage'
import { MembershipAffiliationPage } from '@/pages/membership/MembershipAffiliationPage'
import { MembershipLandingPage } from '@/pages/membership/MembershipLandingPage'
import { OurMembershipPage } from '@/pages/membership/OurMembershipPage'
import { RegionalDetailPage } from '@/pages/membership/RegionalDetailPage'
import { RegionalMembershipIndexPage } from '@/pages/membership/RegionalMembershipIndexPage'
import { GalleryAlbumDetailPage } from '@/pages/news/GalleryAlbumDetailPage'
import { MediaCentrePage } from '@/pages/news/MediaCentrePage'
import { MediaGalleryPage } from '@/pages/news/MediaGalleryPage'
import { NewsArticlePage } from '@/pages/news/NewsArticlePage'
import { NewsLandingPage } from '@/pages/news/NewsLandingPage'
import { PressReleaseDetailPage } from '@/pages/news/PressReleaseDetailPage'
import { PressReleasesPage } from '@/pages/news/PressReleasesPage'
import { SpeechDetailPage } from '@/pages/news/SpeechDetailPage'
import { SpeechesPage } from '@/pages/news/SpeechesPage'
import { EventDetailPage } from '@/pages/events/EventDetailPage'
import { EventsLandingPage } from '@/pages/events/EventsLandingPage'
import { PastEventsPage } from '@/pages/events/PastEventsPage'
import { SummitsConferencesPage } from '@/pages/events/SummitsConferencesPage'
import { KnowledgeHubCategoryPage } from '@/pages/knowledge-hub/KnowledgeHubCategoryPage'
import { KnowledgeHubLandingPage } from '@/pages/knowledge-hub/KnowledgeHubLandingPage'
import { PublicationDetailPage } from '@/pages/knowledge-hub/PublicationDetailPage'
import { OpportunitiesCategoryPage } from '@/pages/opportunities/OpportunitiesCategoryPage'
import { OpportunitiesLandingPage } from '@/pages/opportunities/OpportunitiesLandingPage'
import { OpportunityDetailPage } from '@/pages/opportunities/OpportunityDetailPage'
import { ContactPage } from '@/pages/contact/ContactPage'
import { PartnerWithAasuPage } from '@/pages/contact/PartnerWithAasuPage'
import { StudentSupportPage } from '@/pages/contact/StudentSupportPage'

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

              {/* Membership */}
              <Route path="/membership" element={<MembershipLandingPage />} />
              <Route
                path="/membership/our-membership"
                element={<OurMembershipPage />}
              />
              <Route
                path="/membership/member-unions"
                element={<MemberUnionsDirectoryPage />}
              />
              <Route
                path="/membership/member-unions/:slug"
                element={<MemberUnionProfilePage />}
              />
              <Route
                path="/membership/regions"
                element={<RegionalMembershipIndexPage />}
              />
              <Route
                path="/membership/regions/:region"
                element={<RegionalDetailPage />}
              />
              <Route
                path="/membership/affiliation"
                element={<MembershipAffiliationPage />}
              />
              <Route
                path="/membership/services"
                element={<MemberServicesPage />}
              />

              {/* News & Media */}
              <Route path="/news" element={<NewsLandingPage />} />
              <Route
                path="/news/press-releases"
                element={<PressReleasesPage />}
              />
              <Route
                path="/news/press-releases/:slug"
                element={<PressReleaseDetailPage />}
              />
              <Route path="/news/speeches" element={<SpeechesPage />} />
              <Route path="/news/speeches/:slug" element={<SpeechDetailPage />} />
              <Route path="/news/gallery" element={<MediaGalleryPage />} />
              <Route
                path="/news/gallery/:albumSlug"
                element={<GalleryAlbumDetailPage />}
              />
              <Route path="/news/media-centre" element={<MediaCentrePage />} />
              <Route path="/news/:slug" element={<NewsArticlePage />} />

              {/* Events */}
              <Route path="/events" element={<EventsLandingPage />} />
              <Route
                path="/events/summits-conferences"
                element={<SummitsConferencesPage />}
              />
              <Route path="/events/past" element={<PastEventsPage />} />
              <Route path="/events/:slug" element={<EventDetailPage />} />

              {/* Knowledge Hub */}
              <Route
                path="/knowledge-hub"
                element={<KnowledgeHubLandingPage />}
              />
              <Route
                path="/knowledge-hub/research"
                element={<KnowledgeHubCategoryPage category="research" />}
              />
              <Route
                path="/knowledge-hub/reports"
                element={<KnowledgeHubCategoryPage category="reports" />}
              />
              <Route
                path="/knowledge-hub/policy-briefs"
                element={<KnowledgeHubCategoryPage category="policy-briefs" />}
              />
              <Route
                path="/knowledge-hub/resources"
                element={<KnowledgeHubCategoryPage category="resources" />}
              />
              <Route
                path="/knowledge-hub/institutional-documents"
                element={
                  <KnowledgeHubCategoryPage category="institutional-documents" />
                }
              />
              <Route
                path="/knowledge-hub/publications/:slug"
                element={<PublicationDetailPage />}
              />

              {/* Opportunities */}
              <Route
                path="/opportunities"
                element={<OpportunitiesLandingPage />}
              />
              <Route
                path="/opportunities/scholarships-fellowships"
                element={
                  <OpportunitiesCategoryPage category="scholarships-fellowships" />
                }
              />
              <Route
                path="/opportunities/conferences-training"
                element={
                  <OpportunitiesCategoryPage category="conferences-training" />
                }
              />
              <Route
                path="/opportunities/internships-volunteering"
                element={
                  <OpportunitiesCategoryPage category="internships-volunteering" />
                }
              />
              <Route
                path="/opportunities/careers"
                element={<OpportunitiesCategoryPage category="careers" />}
              />
              <Route
                path="/opportunities/:slug"
                element={<OpportunityDetailPage />}
              />

              {/* Contact & Engagement */}
              <Route path="/contact" element={<ContactPage />} />
              <Route
                path="/contact/partner"
                element={<PartnerWithAasuPage />}
              />
              <Route
                path="/contact/student-support"
                element={<StudentSupportPage />}
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
