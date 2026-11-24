import type { CmsWorkflowStatus } from '@/data/newsMedia'

export type OpportunityCategoryId =
  | 'scholarships-fellowships'
  | 'conferences-training'
  | 'internships-volunteering'
  | 'careers'

export type OpportunityStatus = 'open' | 'rolling' | 'closed'

export type OpportunityProviderType = 'AASU Programme' | 'Third-Party Opportunity'

export interface OpportunityRecord {
  id: string
  slug: string
  workflowStatus: CmsWorkflowStatus
  title: string
  provider: string
  providerType: OpportunityProviderType
  category: OpportunityCategoryId
  subcategory: string
  location: string
  countryOrFormat: string
  studyLevel?: string
  openingDate?: string
  deadlineDisplay: string
  deadlineIso?: string
  status: OpportunityStatus
  overview: string[]
  eligibility: string[]
  benefits?: string[]
  requirements?: string[]
  applicationProcedure: string[]
  applicationUrl?: string
  applicationEmail?: string
  relatedEventSlug?: string
  relatedPrioritySlug?: string
  featured?: boolean
  publishedAt: string
}

export interface OpportunityCategoryMeta {
  id: OpportunityCategoryId
  title: string
  shortTitle: string
  href: string
  heroSubtitle: string
  description: string
  heroImage: string
  heroImageAlt: string
}

export const OPPORTUNITY_CATEGORIES: OpportunityCategoryMeta[] = [
  {
    id: 'scholarships-fellowships',
    title: 'Scholarships & Fellowships',
    shortTitle: 'Scholarships',
    href: '/opportunities/scholarships-fellowships',
    heroSubtitle:
      'Verified academic scholarships, research fellowships and international funding programmes shared with African students.',
    description:
      'Academic scholarships, fellowships and research funding from verified institutional partners.',
    heroImage: '/images/web/au-education-2026.webp',
    heroImageAlt: 'African student leaders at an academic policy dialogue',
  },
  {
    id: 'conferences-training',
    title: 'Conferences, Exchanges & Training',
    shortTitle: 'Conferences & Training',
    href: '/opportunities/conferences-training',
    heroSubtitle:
      'Leadership training cohorts, international student exchanges, quality assurance panels and summit participation calls.',
    description:
      'Leadership workshops, academic exchanges, capacity-building cohorts and summit calls.',
    heroImage: '/images/web/leadershift-audience.webp',
    heroImageAlt: 'Student leaders participating in an AASU leadership training summit',
  },
  {
    id: 'internships-volunteering',
    title: 'Internships & Volunteering',
    shortTitle: 'Internships & Volunteering',
    href: '/opportunities/internships-volunteering',
    heroSubtitle:
      'Hands-on Secretariat internships, campus ambassador volunteering and student engagement opportunities with AASU.',
    description:
      'AASU Secretariat internships, volunteer teams and continental student engagement roles.',
    heroImage: '/images/web/nels-breakout.webp',
    heroImageAlt: 'Youth leaders collaborating during an AASU institutional workshop',
  },
  {
    id: 'careers',
    title: 'Careers at AASU',
    shortTitle: 'Careers',
    href: '/opportunities/careers',
    heroSubtitle:
      'Official employment vacancies, Secretariat recruitment announcements and application guidance at the All-Africa Students Union.',
    description:
      'Employment vacancies and official recruitment announcements at the AASU Secretariat.',
    heroImage: '/images/web/inauguration-2026.webp',
    heroImageAlt: 'All-Africa Students Union institutional leadership in Accra',
  },
]

// Single shared opportunity registry sourced strictly from verified AASU legacy records
// (InternshipPage.jsx, VolunteerPage.jsx, newsEventsData.js). Zero invented vacancies or deadlines.
export const OPPORTUNITIES: OpportunityRecord[] = [
  {
    id: 'opp-aasu-internship-programme',
    slug: 'aasu-secretariat-internship-programme',
    workflowStatus: 'published',
    title: 'AASU Secretariat Internship Programme',
    provider: 'All-Africa Students Union (AASU)',
    providerType: 'AASU Programme',
    category: 'internships-volunteering',
    subcategory: 'Internship Opportunity',
    location: 'Accra, Ghana / Hybrid',
    countryOrFormat: 'Ghana / Hybrid',
    studyLevel: 'Undergraduate & Postgraduate',
    deadlineDisplay: 'Rolling Intake',
    status: 'rolling',
    overview: [
      'The AASU Internship Programme offers African students and recent graduates hands-on professional experience in a continental student organisation headquartered in Accra, Ghana.',
      'Interns contribute across five core tracks: Policy & Advocacy, Communications & Media, Research, Programs & Events, and Administration & Operations.',
    ],
    eligibility: [
      'Currently enrolled university/polytechnic student or recent graduate from an African institution.',
      'Strong written communication skills and commitment to African student development.',
      'Ability to work collaboratively in a multicultural institutional environment.',
    ],
    benefits: [
      'Practical experience inside a continental representative organisation.',
      'Mentorship from AASU Secretariat officers and exposure to international partners.',
      'Official Certificate of Completion upon successful internship conclusion.',
    ],
    requirements: [
      'Full name, institutional affiliation and preferred Secretariat track.',
      'Brief statement of motivation and updated Curriculum Vitae (CV).',
    ],
    applicationProcedure: [
      'Prepare your CV and brief motivation statement indicating your preferred track (Policy & Advocacy, Communications & Media, Research, Programs & Events, or Administration).',
      'Submit your internship enquiry directly to the AASU Secretariat via info@aasuonline.org.',
      'Shortlisted applicants are invited for screening and a virtual interview.',
    ],
    applicationEmail:
      'mailto:info@aasuonline.org?subject=AASU%20Internship%20Programme%20Application',
    relatedPrioritySlug: 'capacity-building-skills-development-and-employability',
    featured: true,
    publishedAt: '2026-06-01',
  },
  {
    id: 'opp-aasu-volunteer-network',
    slug: 'aasu-continental-volunteer-network',
    workflowStatus: 'published',
    title: 'AASU Continental Volunteer & Campus Ambassador Network',
    provider: 'All-Africa Students Union (AASU)',
    providerType: 'AASU Programme',
    category: 'internships-volunteering',
    subcategory: 'Volunteer Opportunity',
    location: 'Pan-African / Online & Campus',
    countryOrFormat: 'Online / Continental',
    studyLevel: 'All Tertiary Students',
    deadlineDisplay: 'Rolling Intake',
    status: 'rolling',
    overview: [
      'The AASU Volunteer Network mobilises students across Africa to support campus campaigns, research, communications, events and regional coordination.',
      'Available volunteer streams include Campus Ambassadors, Communications & Media, Research & Policy, Programs & Events, and Regional Coordination.',
    ],
    eligibility: [
      'Enrolled students and youth advocates across African campuses and diaspora communities.',
      'Commitment to AASU\u2019s values of unity, equity, integrity and Pan-Africanism.',
    ],
    benefits: [
      'Access to continental and international student networks.',
      'Participation in AASU training workshops and capacity-building programmes.',
      'Official certificates and recognition for verified volunteer service.',
    ],
    applicationProcedure: [
      'Identify your preferred volunteer stream (Campus Ambassador, Communications & Media, Research & Policy, Programs & Events, or Regional Coordinator).',
      'Send your name, country, institution, skills and motivation to info@aasuonline.org.',
      'Selected volunteers receive onboarding and orientation from the Secretariat.',
    ],
    applicationEmail:
      'mailto:info@aasuonline.org?subject=AASU%20Volunteer%20Network%20Enquiry',
    relatedPrioritySlug: 'pan-africanism-and-african-culture',
    featured: true,
    publishedAt: '2026-06-01',
  },
  {
    id: 'opp-nels-training-portal',
    slug: 'nels-next-level-skills-student-leaders-training',
    workflowStatus: 'published',
    title: 'Next Level Skills for Student Leaders (NELS) Training Portal',
    provider: 'AASU & NELS Erasmus+ Consortium',
    providerType: 'AASU Programme',
    category: 'conferences-training',
    subcategory: 'Leadership & Training',
    location: 'Online (Africa & Europe Consortium)',
    countryOrFormat: 'Online',
    studyLevel: 'Student Leaders & Executives',
    deadlineDisplay: 'Cohort-Based Intake (Check Portal)',
    status: 'rolling',
    overview: [
      'Co-funded by the European Union and implemented by AASU alongside 11 African and European partner institutions, NELS delivers interactive leadership training covering sustainability, stakeholder communication, media literacy and cross-cultural student organising.',
      'Interested student leaders can check upcoming cohort registration windows directly on the official NELS portal.',
    ],
    eligibility: [
      'Elected or emerging student leaders and union representatives across African higher education institutions.',
    ],
    benefits: [
      'Structured online training modules delivered by African and European university partners.',
      'Peer-learning exchanges across Sub-Saharan Africa and Europe.',
    ],
    applicationProcedure: [
      'Visit the official NELS registration portal at nels.training to view active cohort schedules.',
      'Complete the consortium registration form for upcoming sessions.',
    ],
    applicationUrl: 'https://nels.training',
    relatedEventSlug: 'nels-3rd-strategic-partners-meeting-2026',
    relatedPrioritySlug: 'capacity-building-skills-development-and-employability',
    featured: true,
    publishedAt: '2026-04-10',
  },
  {
    id: 'opp-russia-africa-young-scientists-2026',
    slug: 'russia-africa-forum-competition-young-scientists-2026',
    workflowStatus: 'published',
    title:
      'Russia-Africa Forum-Competition of Young Scientists 2026 (Application Archive)',
    provider: 'Empress Catherine II St. Petersburg Mining University (UNESCO)',
    providerType: 'Third-Party Opportunity',
    category: 'conferences-training',
    subcategory: 'Conference & Competition',
    location: 'St. Petersburg, Russia',
    countryOrFormat: 'Russia',
    studyLevel: 'Senior Undergraduate, Postgraduate & Researchers (<35)',
    deadlineDisplay: 'Closed (1 July 2026)',
    deadlineIso: '2026-07-01',
    status: 'closed',
    overview: [
      'Third-party international competition held under the auspices of UNESCO for teams of 3 to 5 young scholars and engineers from Africa and Russia under the theme "Future Engineers of the World."',
      'This call closed on 1 July 2026 and the forum concluded in October 2026. Archived here for reference.',
    ],
    eligibility: [
      'Teams of 3 to 5 senior undergraduate students, postgraduate students or young scientists under 35 years.',
      'Working languages: English and Russian.',
    ],
    benefits: [
      'No registration fee; accommodation, meals and cultural programme covered by the organiser for selected teams.',
    ],
    applicationProcedure: [
      'Applications closed on 1 July 2026 via the external organiser link.',
    ],
    relatedEventSlug: 'russia-africa-forum-young-scientists-2026',
    relatedPrioritySlug: 'migration-mobility-and-exchanges',
    publishedAt: '2026-06-10',
  },
  {
    id: 'opp-denmark-africa-universities-2025',
    slug: 'denmark-africa-university-partnerships-scholarships-2025',
    workflowStatus: 'published',
    title:
      'Denmark-Africa University Partnerships & Scholarship Initiative (Danida Fellowship Centre)',
    provider:
      'Ministry of Foreign Affairs & Ministry of Higher Education and Research, Denmark',
    providerType: 'Third-Party Opportunity',
    category: 'scholarships-fellowships',
    subcategory: 'Scholarship & Mobility Funding',
    location: 'Denmark & Partner African Universities',
    countryOrFormat: 'Denmark',
    studyLevel: 'Higher Education & Postgraduate',
    openingDate: '17 June 2025',
    deadlineDisplay: 'External Provider Cycles (Check Danida)',
    status: 'closed',
    overview: [
      'Third-party DKK 430 million initiative launched by the Danish Ministry of Foreign Affairs and Ministry of Higher Education and Research, managed by the Danida Fellowship Centre, to strengthen partnerships between Danish and African universities through scholarships, Erasmus+ support and academic mobility.',
      'AASU shared this announcement for student awareness; AASU does not administer selections or guarantee placements.',
    ],
    eligibility: [
      'Eligibility and institutional partnership criteria are set directly by the Danida Fellowship Centre and participating universities.',
    ],
    benefits: [
      'Scholarships for African students, Erasmus+ academic mobility and joint university research exchanges.',
    ],
    applicationProcedure: [
      'Check current funding calls and eligibility directly through the Danida Fellowship Centre official website.',
    ],
    applicationUrl: 'https://dfcentre.com',
    relatedPrioritySlug: 'migration-mobility-and-exchanges',
    publishedAt: '2025-06-17',
  },
  {
    id: 'opp-haqaa3-student-reps-2025',
    slug: 'haqaa3-quality-assurance-student-representatives-2025',
    workflowStatus: 'published',
    title:
      '2nd Call for Student Representatives: HAQAA3 Quality Assurance Reviews (Closed)',
    provider: 'All-Africa Students Union (AASU) & HAQAA3',
    providerType: 'AASU Programme',
    category: 'conferences-training',
    subcategory: 'Training & Policy Panel',
    location: 'Continental (Africa)',
    countryOrFormat: 'Continental',
    studyLevel: 'Currently Enrolled Higher Education Students',
    deadlineDisplay: 'Closed (1 May 2025)',
    deadlineIso: '2025-05-01',
    status: 'closed',
    overview: [
      'Call for African higher education students to serve on peer-review panels for HAQAA3 Quality Assurance Agency Reviews, ensuring student-centred accreditation standards across Africa.',
      'Applications closed on 1 May 2025. Archived for transparency.',
    ],
    eligibility: [
      'Currently enrolled African higher education student with at least one year remaining.',
      'Fluency in English, French or Portuguese (Arabic advantageous).',
    ],
    applicationProcedure: [
      'Applications closed on 1 May 2025.',
    ],
    relatedEventSlug: 'aasu-haqaa3-workshop-intra-africa-mobility-2025',
    relatedPrioritySlug: 'education-and-students-rights',
    publishedAt: '2025-04-15',
  },
  {
    id: 'opp-nsp-call-2025-2026',
    slug: 'aasu-national-service-personnel-2025-2026',
    workflowStatus: 'published',
    title:
      'Call for National Service Personnel (NSPs) 2025/2026 Service Year (Closed)',
    provider: 'All-Africa Students Union (AASU) Secretariat',
    providerType: 'AASU Programme',
    category: 'internships-volunteering',
    subcategory: 'Student Engagement / National Service',
    location: 'Accra, Ghana',
    countryOrFormat: 'Ghana',
    studyLevel: 'Final-Year Tertiary Students (Ghana NSS)',
    deadlineDisplay: 'Closed (20 June 2025)',
    deadlineIso: '2025-06-20',
    status: 'closed',
    overview: [
      'Annual call for qualified final-year students in Ghana to undertake National Service placement at the AASU Secretariat across research, M&E, design, web management, accounting, HR, IT and communications.',
      'The 2025/2026 intake closed on 20 June 2025.',
    ],
    eligibility: [
      'Final-year tertiary students eligible for Ghana National Service Scheme (NSS) posting.',
    ],
    applicationProcedure: [
      'The 2025/2026 application window closed on 20 June 2025. Watch this portal for future service-year announcements.',
    ],
    relatedPrioritySlug: 'capacity-building-skills-development-and-employability',
    publishedAt: '2025-06-01',
  },
]

export function getPublishedOpportunities(): OpportunityRecord[] {
  return OPPORTUNITIES.filter((o) => o.workflowStatus === 'published').sort(
    (a, b) => b.publishedAt.localeCompare(a.publishedAt),
  )
}

export function getOpportunitiesByCategory(
  category: OpportunityCategoryId,
): OpportunityRecord[] {
  return getPublishedOpportunities().filter((o) => o.category === category)
}

export function getOpportunityBySlug(
  slug?: string,
): OpportunityRecord | undefined {
  return getPublishedOpportunities().find((o) => o.slug === slug)
}

export function getOpportunityCategoryMeta(
  id: OpportunityCategoryId,
): OpportunityCategoryMeta {
  return (
    OPPORTUNITY_CATEGORIES.find((c) => c.id === id) ?? OPPORTUNITY_CATEGORIES[0]
  )
}
