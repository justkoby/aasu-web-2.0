export interface NavChildLink {
  label: string
  href: string
  description?: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavChildLink[]
}

export interface StatItem {
  value: string
  label: string
  needsConfirmation?: boolean
}

export interface StrategicPriority {
  number: string
  title: string
  description: string
  href: string
}

export type AfricaRegionId = 'north' | 'west' | 'central' | 'east' | 'southern'

export interface MemberUnion {
  name: string
  country: string
  membershipType: 'Full Member' | 'Associate Member' | 'Consultative Member'
}

export interface AfricaRegion {
  id: AfricaRegionId
  name: string
  summary: string
  unions: MemberUnion[]
}

export interface ProgrammeItem {
  id: string
  title: string
  category: string
  description: string
  secondaryText?: string
  ctaLabel: string
  href: string
  image: string
  imageAlt: string
  featured?: boolean
  imageNote?: string
}

export interface NewsArticle {
  id: string
  title: string
  category: string
  date: string
  excerpt: string
  image: string
  imageAlt: string
  href: string
}

export interface OfficialStatement {
  id: string
  refNumber: string
  date: string
  category: string
  title: string
  excerpt: string
  href: string
}

export interface PublicationItem {
  id: string
  title: string
  type: string
  year: string
  cover: string
  coverAlt: string
  pdfUrl: string
  externalUrl?: string
}

export interface OpportunityCategory {
  id: string
  title: string
  description: string
  ctaLabel: string
  href: string
  icon: 'calendar' | 'award' | 'globe'
}

export interface PartnerLogo {
  name: string
  shortName: string
  logo: string
  href?: string
}

export interface InstitutionalPartnerText {
  name: string
  role: string
}
