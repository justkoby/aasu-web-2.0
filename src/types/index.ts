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

export interface HeroSlide {
  id: string
  eyebrow: string
  headline: string
  subheading: string
  image: string
  imageAlt: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
}

export interface StatItem {
  value: string
  label: string
  needsConfirmation?: boolean
}

export type PriorityIconKey =
  | 'education'
  | 'skills'
  | 'gender'
  | 'climate'
  | 'mobility'
  | 'governance'
  | 'panafricanism'

export interface StrategicPriority {
  number: string
  title: string
  shortTitle: string
  shortDescription: string
  description: string
  icon: PriorityIconKey
  image: string
  imageAlt: string
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
  shortDescription: string
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

export interface OpportunityHighlight {
  id: string
  type: 'Event' | 'Opportunity' | 'Pathway'
  title: string
  dateLabel: string
  locationOrMeta: string
  ctaLabel: string
  href: string
  external?: boolean
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
