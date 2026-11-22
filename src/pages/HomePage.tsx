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

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AtAGlanceSection />
      <StrategicPrioritiesSection />
      <MembershipSection />
      <ProgrammesSection />
      <LatestFromAasuSection />
      <KnowledgeHubSection />
      <PartnershipsCtaSection />
    </>
  )
}
