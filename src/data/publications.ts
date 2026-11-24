export type KnowledgeCategoryId =
  | 'research'
  | 'reports'
  | 'policy-briefs'
  | 'resources'
  | 'institutional-documents'

export type ApprovalStatus =
  | 'draft'
  | 'review'
  | 'published'
  | 'archived'
  | 'awaiting-upload'

export interface PublicationRecord {
  id: string
  slug: string
  title: string
  summary: string
  category: KnowledgeCategoryId
  subcategory: string
  authors?: string[]
  publisher: string
  publicationDate?: string
  year: string
  language: 'English' | 'French'
  keywords: string[]
  coverImage?: string
  pdfUrl?: string
  externalUrl?: string
  fileSize?: string
  pageCount?: number
  version?: string
  audience?: string
  approvalStatus: ApprovalStatus
  availabilityNote?: string
  relatedPriorityIds: string[]
  relatedProgrammeIds: string[]
  relatedEventIds: string[]
  relatedNewsIds: string[]
  featured?: boolean
  publishedAt: string
}

export interface KnowledgeCategoryMeta {
  id: KnowledgeCategoryId
  title: string
  shortTitle: string
  href: string
  heroSubtitle: string
  description: string
  heroImage: string
  heroImageAlt: string
}

export const KNOWLEDGE_CATEGORIES: KnowledgeCategoryMeta[] = [
  {
    id: 'research',
    title: 'Research & Policy Papers',
    shortTitle: 'Research & Papers',
    href: '/knowledge-hub/research',
    heroSubtitle:
      'Research studies, policy research and technical papers examining higher education, student rights, climate resilience and digital transformation in Africa.',
    description:
      'Research studies, policy analyses and technical thematic papers from AASU and partners.',
    heroImage: '/images/web/au-education-2026.webp',
    heroImageAlt: 'AASU policy research presentation at the African Union',
  },
  {
    id: 'reports',
    title: 'Reports & Annual Reports',
    shortTitle: 'Reports',
    href: '/knowledge-hub/reports',
    heroSubtitle:
      'Institutional annual reports, impact assessments, programme evaluations and official conference reports documenting AASU\u2019s continental work.',
    description:
      'Annual reports, impact reports, conference records and programme evaluations.',
    heroImage: '/images/web/inauguration-2026.webp',
    heroImageAlt: 'AASU institutional leadership at the 2026 Honours and Inauguration Ceremony',
  },
  {
    id: 'policy-briefs',
    title: 'Policy Briefs & Position Papers',
    shortTitle: 'Policy Briefs',
    href: '/knowledge-hub/policy-briefs',
    heroSubtitle:
      'Official AASU policy positions, summit briefs and thematic recommendations advancing African student perspectives in continental governance.',
    description:
      'Policy briefs, position papers and thematic policy recommendations.',
    heroImage: '/images/web/hero-asw.webp',
    heroImageAlt: 'AASU representatives presenting student policy positions',
  },
  {
    id: 'resources',
    title: 'Toolkits, Guides & Learning Resources',
    shortTitle: 'Toolkits & Guides',
    href: '/knowledge-hub/resources',
    heroSubtitle:
      'Practical toolkits, case books, training syllabi and capacity-building guides designed for student leaders, educators and institutions.',
    description:
      'Toolkits, training manuals, case books and student leadership guides.',
    heroImage: '/images/web/leadershift-audience.webp',
    heroImageAlt: 'Student leaders participating in an AASU training workshop',
  },
  {
    id: 'institutional-documents',
    title: 'Institutional Documents',
    shortTitle: 'Institutional Docs',
    href: '/knowledge-hub/institutional-documents',
    heroSubtitle:
      'Governing instruments, approved policies, annual programmes, electoral guidelines and Congress resolutions of the All-Africa Students Union.',
    description:
      'Constitution, approved policies, annual programmes and Congress resolutions.',
    heroImage: '/images/web/students-letters.webp',
    heroImageAlt: 'All-Africa Students Union institutional archive',
  },
]

export const PRIORITY_LABELS: Record<string, string> = {
  'education-and-students-rights': "Education & Students' Rights",
  'capacity-building-skills-development-and-employability':
    'Capacity Building, Skills Development & Employability',
  'gender-equity-and-social-inclusion': 'Gender Equity & Social Inclusion',
  'migration-mobility-and-exchanges': 'Migration, Mobility & Exchanges',
  'climate-action-and-environmental-sustainability':
    'Climate Action & Environmental Sustainability',
  'democracy-good-governance-peace-and-security':
    'Democracy, Good Governance, Peace & Security',
  'pan-africanism-and-african-culture': 'Pan Africanism & African Culture',
}

// Single authoritative CMS-ready publication dataset audited from public/documents/ and legacy aasu/public/
export const PUBLICATIONS: PublicationRecord[] = [
  // ── FEATURED 2026 ACQF TOOLKITS & CASE BOOKS ───────────────────────────
  {
    id: 'pub-acqf-toolkit-2026',
    slug: 'toolkit-on-greening-skills-and-qualifications-in-africa',
    title: 'Toolkit on Greening Skills and Qualifications in Africa',
    summary:
      'A practical stakeholder toolkit developed under the ACQF Pilot II initiative guiding national qualifications authorities, educators and student unions in embedding green skills into African education and training systems.',
    category: 'resources',
    subcategory: 'Toolkit & Manual',
    publisher:
      'All-Africa Students Union (AASU) & European Training Foundation (ETF) / ACQF',
    publicationDate: 'July 2026',
    year: '2026',
    language: 'English',
    keywords: [
      'green skills',
      'qualifications',
      'ACQF',
      'climate action',
      'employability',
      'toolkit',
      'sustainability',
      'TVET',
    ],
    coverImage: '/images/publications/acqf-toolkit.png',
    pdfUrl: '/documents/acqf-toolkit-greening-skills.pdf',
    externalUrl:
      'https://acqf.africa/resources/research/green-skills/acqf-aasu-toolkit-on-greening-skills-and-qualifications-in-africa',
    fileSize: '732 KB',
    pageCount: 34,
    version: 'ACQF Pilot II Deliverable (2026)',
    audience: 'Student leaders, educators, policymakers & qualification authorities',
    approvalStatus: 'published',
    relatedPriorityIds: [
      'climate-action-and-environmental-sustainability',
      'capacity-building-skills-development-and-employability',
    ],
    relatedProgrammeIds: ['greening-skills'],
    relatedEventIds: [
      'climate-forward-summit-2026',
      'learning-planet-festival-2026-youth-session',
    ],
    relatedNewsIds: ['acqf-greening-skills-qualifications-2026'],
    featured: true,
    publishedAt: '2026-07-29',
  },
  {
    id: 'pub-acqf-case-book-2026',
    slug: 'book-of-good-practices-greening-skills-qualifications-africa',
    title:
      'Book of Good Practices for the Greening of Skills and Qualifications in Africa',
    summary:
      'A continental case book documenting real-world examples and institutional practices advancing green skills, recognition of prior learning and sustainable qualifications across African education systems.',
    category: 'resources',
    subcategory: 'Case Book & Practical Guide',
    publisher:
      'All-Africa Students Union (AASU) & European Training Foundation (ETF) / ACQF',
    publicationDate: 'July 2026',
    year: '2026',
    language: 'English',
    keywords: [
      'green skills',
      'good practices',
      'case book',
      'ACQF',
      'sustainability',
      'qualifications',
    ],
    coverImage: '/images/publications/book-of-good-practices.png',
    pdfUrl: '/documents/acqf-book-of-good-practices.pdf',
    externalUrl:
      'https://acqf.africa/resources/research/green-skills/acqf-case-book-on-green-skills-qualifications-good-practices',
    fileSize: '950 KB',
    version: 'ACQF Pilot II Deliverable (2026)',
    audience: 'Universities, TVET institutions, policymakers & student unions',
    approvalStatus: 'published',
    relatedPriorityIds: [
      'climate-action-and-environmental-sustainability',
      'capacity-building-skills-development-and-employability',
    ],
    relatedProgrammeIds: ['greening-skills'],
    relatedEventIds: ['climate-forward-summit-2026'],
    relatedNewsIds: ['acqf-greening-skills-qualifications-2026'],
    featured: true,
    publishedAt: '2026-07-29',
  },
  {
    id: 'pub-acqf-users-engagement-2026',
    slug: 'greening-skills-and-qualifications-in-africa-users-engagement',
    title: "Greening Skills and Qualifications in Africa: Users' Engagement",
    summary:
      'Conceptual framework and user-engagement study synthesising stakeholder surveys and interviews with African students, qualification authorities, employers and academics on green skills.',
    category: 'research',
    subcategory: 'Policy Research',
    publisher:
      'All-Africa Students Union (AASU) & European Training Foundation (ETF) / ACQF',
    publicationDate: 'July 2026',
    year: '2026',
    language: 'English',
    keywords: [
      'green skills',
      'users engagement',
      'ACQF',
      'qualifications framework',
      'research',
      'climate',
    ],
    coverImage: '/images/publications/acqf-concept-document.png',
    pdfUrl: '/documents/acqf-users-engagement.pdf',
    externalUrl:
      'https://acqf.africa/resources/research/green-skills/acqf-greening-skills-and-qualifications-in-africa-users-engagement',
    fileSize: '812 KB',
    version: 'ACQF Pilot II Concept Document (2026)',
    approvalStatus: 'published',
    relatedPriorityIds: [
      'climate-action-and-environmental-sustainability',
      'migration-mobility-and-exchanges',
    ],
    relatedProgrammeIds: ['greening-skills'],
    relatedEventIds: ['learning-planet-festival-2026-youth-session'],
    relatedNewsIds: ['acqf-greening-skills-qualifications-2026'],
    featured: true,
    publishedAt: '2026-07-29',
  },

  // ── REPORTS & ANNUAL REPORTS ───────────────────────────────────────────
  {
    id: 'pub-annual-report-2025',
    slug: 'aasu-annual-report-2025',
    title: 'AASU Annual Report 2025',
    summary:
      'Official institutional annual report of the All-Africa Students Union covering 2025 continental programmes, policy representation, partnerships and governance milestones.',
    category: 'reports',
    subcategory: 'Annual Report',
    publisher: 'All-Africa Students Union (AASU)',
    publicationDate: '2026',
    year: '2025',
    language: 'English',
    keywords: [
      'annual report',
      '2025',
      'institutional report',
      'governance',
      'programmes',
      'impact',
    ],
    coverImage: '/images/publications/cover-annual-report-2025.webp',
    pdfUrl: '/documents/aasu-annual-report-2025.pdf',
    fileSize: '8.9 MB',
    pageCount: 88,
    version: '2025 Edition',
    approvalStatus: 'published',
    relatedPriorityIds: ['education-and-students-rights'],
    relatedProgrammeIds: ['greening-skills', 'nels'],
    relatedEventIds: ['aasu-honours-and-inauguration-ceremony-2026'],
    relatedNewsIds: [],
    featured: true,
    publishedAt: '2026-02-01',
  },
  {
    id: 'pub-impact-report-2025',
    slug: 'aasu-impact-report-2025',
    title: 'AASU Impact Report 2025',
    summary:
      'Monitoring and evaluation overview detailing AASU\u2019s continental reach, student engagement outcomes and strategic priority milestones throughout 2025.',
    category: 'reports',
    subcategory: 'Monitoring & Evaluation Report',
    publisher: 'All-Africa Students Union (AASU)',
    publicationDate: '2026',
    year: '2025',
    language: 'English',
    keywords: [
      'impact report',
      '2025',
      'monitoring and evaluation',
      'outcomes',
      'results',
    ],
    coverImage: '/images/publications/cover-impact-report-2025.webp',
    pdfUrl: '/documents/aasu-impact-report-2025.pdf',
    fileSize: '6.0 MB',
    pageCount: 26,
    version: '2025 Edition',
    approvalStatus: 'published',
    relatedPriorityIds: [
      'education-and-students-rights',
      'capacity-building-skills-development-and-employability',
    ],
    relatedProgrammeIds: ['nels'],
    relatedEventIds: [],
    relatedNewsIds: [],
    publishedAt: '2026-01-20',
  },
  {
    id: 'pub-inauguration-report-2026',
    slug: 'report-on-aasu-handing-over-inauguration-and-honours-ceremony-2026',
    title:
      'Report on the AASU Handing Over, Inauguration and Honours Ceremony (January 2026)',
    summary:
      'Official event report documenting the 30 January 2026 leadership transition and inauguration of the 2026-2029 Executive Committee at the Ministry of Foreign Affairs in Accra.',
    category: 'reports',
    subcategory: 'Conference & Event Report',
    publisher: 'All-Africa Students Union (AASU)',
    publicationDate: 'February 2026',
    year: '2026',
    language: 'English',
    keywords: [
      'inauguration',
      'handing over',
      'honours ceremony',
      '2026',
      'governance',
      'executive committee',
    ],
    coverImage: '/images/publications/cover-inauguration-report-2026.webp',
    pdfUrl: '/documents/aasu-inauguration-honours-report-2026.pdf',
    fileSize: '1.7 MB',
    pageCount: 16,
    approvalStatus: 'published',
    relatedPriorityIds: ['democracy-good-governance-peace-and-security'],
    relatedProgrammeIds: [],
    relatedEventIds: ['aasu-honours-and-inauguration-ceremony-2026'],
    relatedNewsIds: ['14th-congress-elections-final-phase-2025'],
    publishedAt: '2026-02-15',
  },
  {
    id: 'pub-haqaa3-pre-dissemination-2025',
    slug: 'haqaa3-pre-dissemination-project-report-2025',
    title: 'HAQAA3 Pre-Dissemination Project Report',
    summary:
      'Comprehensive programme report on AASU\u2019s student engagement and quality assurance advocacy under the Harmonisation of African Higher Education Quality Assurance and Accreditation (HAQAA3) initiative.',
    category: 'reports',
    subcategory: 'Programme & Project Report',
    publisher: 'All-Africa Students Union (AASU)',
    year: '2025',
    language: 'English',
    keywords: [
      'HAQAA3',
      'quality assurance',
      'higher education',
      'accreditation',
      'student mobility',
    ],
    coverImage: '/images/publications/cover-haqaa3-2025.webp',
    pdfUrl: '/documents/aasu-haqaa3-pre-dissemination-2025.pdf',
    fileSize: '1.7 MB',
    pageCount: 44,
    approvalStatus: 'published',
    relatedPriorityIds: [
      'education-and-students-rights',
      'migration-mobility-and-exchanges',
    ],
    relatedProgrammeIds: [],
    relatedEventIds: ['aasu-haqaa3-workshop-intra-africa-mobility-2025'],
    relatedNewsIds: [],
    publishedAt: '2025-12-10',
  },
  {
    id: 'pub-impact-report-2024',
    slug: 'aasu-impact-report-2024',
    title:
      'AASU Impact Report 2024: Partnerships to Transform Education in Africa',
    summary:
      'Impact assessment spotlighting student agency in driving the Continental Education Strategy for Africa (CESA) through continental partnerships in 2024.',
    category: 'reports',
    subcategory: 'Monitoring & Evaluation Report',
    publisher: 'All-Africa Students Union (AASU)',
    year: '2024',
    language: 'English',
    keywords: ['impact report', '2024', 'CESA', 'partnerships', 'education'],
    coverImage: '/images/publications/cover-impact-report-2024.webp',
    pdfUrl: '/documents/aasu-impact-report-2024.pdf',
    fileSize: '4.8 MB',
    pageCount: 14,
    approvalStatus: 'published',
    relatedPriorityIds: ['education-and-students-rights'],
    relatedProgrammeIds: [],
    relatedEventIds: [],
    relatedNewsIds: [],
    publishedAt: '2024-12-20',
  },
  {
    id: 'pub-au-summit-2024',
    slug: 'aasu-engagement-at-the-au-heads-of-state-summit-2024',
    title: 'AASU Engagement at the AU Heads of State Summit (February 2024)',
    summary:
      'Full report documenting AASU\u2019s continental policy representation and high-level student advocacy during the African Union Heads of State Summit in Addis Ababa.',
    category: 'reports',
    subcategory: 'Conference & Event Report',
    publisher: 'All-Africa Students Union (AASU)',
    publicationDate: 'February 2024',
    year: '2024',
    language: 'English',
    keywords: [
      'African Union',
      'AU Summit',
      'policy engagement',
      'Addis Ababa',
      'advocacy',
    ],
    coverImage: '/images/publications/cover-au-heads-of-state-summit.webp',
    pdfUrl: '/documents/aasu-au-heads-of-state-summit.pdf',
    fileSize: '5.0 MB',
    pageCount: 13,
    approvalStatus: 'published',
    relatedPriorityIds: ['democracy-good-governance-peace-and-security'],
    relatedProgrammeIds: [],
    relatedEventIds: [],
    relatedNewsIds: ['innovating-education-africa-2026-debate'],
    publishedAt: '2024-03-01',
  },
  {
    id: 'pub-green-skills-green-jobs-2024',
    slug: 'green-skills-and-green-jobs-report-2024',
    title: 'Green Skills and Green Jobs Report',
    summary:
      'Programme report examining green skills pathways, TVET alignment and sustainable employment opportunities for African students and young graduates.',
    category: 'reports',
    subcategory: 'Programme & Project Report',
    publisher: 'All-Africa Students Union (AASU)',
    year: '2024',
    language: 'English',
    keywords: [
      'green skills',
      'green jobs',
      'employability',
      'TVET',
      'climate action',
    ],
    coverImage: '/images/publications/cover-green-skills-green-jobs.webp',
    pdfUrl: '/documents/aasu-green-skills-green-jobs.pdf',
    fileSize: '5.2 MB',
    approvalStatus: 'published',
    relatedPriorityIds: [
      'climate-action-and-environmental-sustainability',
      'capacity-building-skills-development-and-employability',
    ],
    relatedProgrammeIds: ['greening-skills'],
    relatedEventIds: ['climate-forward-summit-2026'],
    relatedNewsIds: [],
    publishedAt: '2024-09-15',
  },
  {
    id: 'pub-congress-report',
    slug: 'aasu-congress-report',
    title: 'AASU Congress Report',
    summary:
      'Official institutional record of Congress deliberations, member union representation, resolutions and democratic governance proceedings.',
    category: 'reports',
    subcategory: 'Conference & Event Report',
    publisher: 'All-Africa Students Union (AASU)',
    year: '2025',
    language: 'English',
    keywords: ['congress', 'governance', 'member unions', 'resolutions'],
    coverImage: '/images/publications/cover-congress-report.webp',
    pdfUrl: '/documents/aasu-congress-report.pdf',
    fileSize: '1.2 MB',
    pageCount: 22,
    approvalStatus: 'published',
    relatedPriorityIds: ['democracy-good-governance-peace-and-security'],
    relatedProgrammeIds: [],
    relatedEventIds: ['aasu-honours-and-inauguration-ceremony-2026'],
    relatedNewsIds: ['14th-congress-elections-final-phase-2025'],
    publishedAt: '2025-12-20',
  },

  // ── RESEARCH & POLICY PAPERS ───────────────────────────────────────────
  {
    id: 'pub-addressing-funding-gap-2023',
    slug: 'addressing-the-funding-gap-education-financing-in-emergencies',
    title:
      'Addressing the Funding Gap: How African Governments Can Build Resilience to Finance Education in Emergencies',
    summary:
      'Policy research examining sustainable domestic and international education financing mechanisms to protect African schools and higher education systems during crises and emergencies.',
    category: 'research',
    subcategory: 'Policy Research',
    publisher: 'All-Africa Students Union (AASU)',
    year: '2023',
    language: 'English',
    keywords: [
      'education financing',
      'funding gap',
      'education in emergencies',
      'student rights',
      'public education',
      'budget',
    ],
    coverImage: '/images/publications/cover-addressing-funding-gap-2023.webp',
    pdfUrl: '/documents/aasu-addressing-the-funding-gap-2023.pdf',
    fileSize: '2.1 MB',
    pageCount: 5,
    approvalStatus: 'published',
    relatedPriorityIds: ['education-and-students-rights'],
    relatedProgrammeIds: [],
    relatedEventIds: [],
    relatedNewsIds: ['innovating-education-africa-2026-debate'],
    publishedAt: '2023-08-15',
  },
  {
    id: 'pub-esr-social-contract-2021',
    slug: 'rewriting-the-3rd-education-social-contract',
    title:
      'Rewriting the 3rd Education Social Contract to Create an Equitable Society for All',
    summary:
      'Flagship Education & Students\u2019 Rights publication advancing student-centred frameworks for equitable, inclusive and democratically governed education systems across Africa.',
    category: 'research',
    subcategory: 'Research Study',
    publisher: 'All-Africa Students Union (AASU)',
    year: '2021',
    language: 'English',
    keywords: [
      'student rights',
      'education social contract',
      'equity',
      'academic freedom',
      'education policy',
    ],
    coverImage: '/images/publications/cover-esr-publication.webp',
    pdfUrl: '/documents/aasu-esr-publication.pdf',
    fileSize: '636 KB',
    approvalStatus: 'published',
    relatedPriorityIds: ['education-and-students-rights'],
    relatedProgrammeIds: ['inspire-tour'],
    relatedEventIds: ['aasu-inspire-tour-ho-west-2026'],
    relatedNewsIds: ['african-child-day-liberia-2026'],
    publishedAt: '2021-11-10',
  },
  {
    id: 'pub-global-convention-higher-ed-2021',
    slug: 'global-convention-recognition-higher-education-qualifications-student-perspective',
    title:
      'Global Convention on the Recognition of Higher Education Qualifications: A Perspective from the Student Community',
    summary:
      'In-depth student research paper analysing cross-border recognition of higher education qualifications, academic mobility and fair credit transfer across Africa and globally.',
    category: 'research',
    subcategory: 'Technical & Thematic Paper',
    publisher: 'All-Africa Students Union (AASU)',
    year: '2021',
    language: 'English',
    keywords: [
      'recognition of qualifications',
      'higher education',
      'UNESCO Global Convention',
      'student mobility',
      'migration',
    ],
    coverImage: '/images/publications/cover-global-convention-2021.webp',
    pdfUrl: '/documents/aasu-global-convention-higher-education-2021.pdf',
    fileSize: '2.3 MB',
    pageCount: 31,
    approvalStatus: 'published',
    relatedPriorityIds: [
      'migration-mobility-and-exchanges',
      'education-and-students-rights',
    ],
    relatedProgrammeIds: [],
    relatedEventIds: ['aasu-haqaa3-workshop-intra-africa-mobility-2025'],
    relatedNewsIds: ['gdn-regional-meeting-uk-2026', 'saqa-ceo-courtesy-visit-2026'],
    publishedAt: '2021-09-15',
  },
  {
    id: 'pub-decolonising-education-2021',
    slug: 'decolonising-education-in-africa-pan-africanism',
    title:
      'Decolonising Education in Africa: Why Pan-Africanism Can Break the Jinx',
    summary:
      'Thematic paper examining epistemic justice, African knowledge systems and the role of Pan-African student solidarity in transforming inherited curricula.',
    category: 'research',
    subcategory: 'Technical & Thematic Paper',
    publisher: 'All-Africa Students Union (AASU)',
    year: '2021',
    language: 'English',
    keywords: [
      'Pan-Africanism',
      'decolonising education',
      'African culture',
      'curriculum reform',
      'epistemic justice',
    ],
    coverImage: '/images/publications/cover-decolonising-education-2021.webp',
    pdfUrl: '/documents/aasu-decolonising-education-2021.pdf',
    fileSize: '363 KB',
    pageCount: 21,
    approvalStatus: 'published',
    relatedPriorityIds: [
      'pan-africanism-and-african-culture',
      'education-and-students-rights',
    ],
    relatedProgrammeIds: [],
    relatedEventIds: ['pre-conference-workshop-reconnecting-futures-2026'],
    relatedNewsIds: ['reparatory-justice-ghana-2026'],
    publishedAt: '2021-07-01',
  },
  {
    id: 'pub-4th-ir-2021',
    slug: 'what-the-4th-industrial-revolution-means-to-the-youth-of-africa',
    title:
      'What the 4th Industrial Revolution Means to the Youth of Africa: Prospects and Opportunities to Spur Economic Growth',
    summary:
      'Research study exploring digital transformation, STEAM competencies, automation and economic growth opportunities for African students and young graduates.',
    category: 'research',
    subcategory: 'Research Study',
    publisher: 'All-Africa Students Union (AASU)',
    year: '2021',
    language: 'English',
    keywords: [
      '4th Industrial Revolution',
      'digital skills',
      'STEAM',
      'employability',
      'youth economy',
    ],
    coverImage: '/images/publications/cover-4th-industrial-revolution-2021.webp',
    pdfUrl: '/documents/aasu-4th-industrial-revolution-2021.pdf',
    fileSize: '550 KB',
    pageCount: 24,
    approvalStatus: 'published',
    relatedPriorityIds: [
      'capacity-building-skills-development-and-employability',
    ],
    relatedProgrammeIds: [],
    relatedEventIds: [
      'youth-and-students-dialogue-elearning-africa-2026',
      'digital-sovereignty-vs-the-algorithm-2026',
    ],
    relatedNewsIds: ['steam-skills-elearning-africa-2026'],
    publishedAt: '2021-06-15',
  },
  {
    id: 'pub-climate-change-sdgs-2021',
    slug: 'climate-change-the-sdgs-and-africa',
    title: 'Climate Change, the SDGs and Africa',
    summary:
      'Thematic research paper analysing the intersection of climate change, Sustainable Development Goals (SDGs) and youth-led environmental stewardship across Africa.',
    category: 'research',
    subcategory: 'Technical & Thematic Paper',
    publisher: 'All-Africa Students Union (AASU)',
    year: '2021',
    language: 'English',
    keywords: [
      'climate change',
      'SDGs',
      'environmental sustainability',
      'climate resilience',
    ],
    coverImage: '/images/publications/cover-climate-change-sdgs-2021.webp',
    pdfUrl: '/documents/aasu-climate-change-sdgs-2021.pdf',
    fileSize: '2.0 MB',
    pageCount: 29,
    approvalStatus: 'published',
    relatedPriorityIds: ['climate-action-and-environmental-sustainability'],
    relatedProgrammeIds: ['greening-skills'],
    relatedEventIds: ['earth-day-webinar-renewable-energy-2026'],
    relatedNewsIds: ['climate-resilience-elearning-africa-2026'],
    publishedAt: '2021-10-01',
  },

  // ── POLICY BRIEFS & POSITION PAPERS ────────────────────────────────────
  {
    id: 'pub-youth-peace-security-2023',
    slug: 'youth-peace-and-security-combatting-disinformation',
    title:
      'Youth, Peace and Security: Empowering African Youth for Peace and Security (Combatting Disinformation)',
    summary:
      'Thematic policy document and webinar brief examining African youth roles in peacebuilding, democratic resilience and countering disinformation.',
    category: 'policy-briefs',
    subcategory: 'Policy Brief',
    publisher: 'All-Africa Students Union (AASU)',
    year: '2023',
    language: 'English',
    keywords: [
      'youth peace and security',
      'democracy',
      'disinformation',
      'peacebuilding',
      'governance',
    ],
    coverImage: '/images/publications/cover-youth-peace-security.webp',
    pdfUrl: '/documents/aasu-youth-peace-security.pdf',
    fileSize: '4.3 MB',
    pageCount: 10,
    approvalStatus: 'published',
    relatedPriorityIds: ['democracy-good-governance-peace-and-security'],
    relatedProgrammeIds: [],
    relatedEventIds: [],
    relatedNewsIds: ['au-reflection-forum-2026'],
    publishedAt: '2023-10-15',
  },

  // ── TOOLKITS, GUIDES & LEARNING RESOURCES ──────────────────────────────
  {
    id: 'pub-nels-syllabus-2025',
    slug: 'nels-2025-student-leadership-training-syllabus',
    title: '2025 NELS Syllabus: Next Level Skills for Student Leaders',
    summary:
      'Structured training syllabus for the Erasmus+ co-funded NELS programme covering critical thinking, media literacy, stakeholder communication, conflict resolution and sustainability.',
    category: 'resources',
    subcategory: 'Training Material',
    publisher: 'AASU & NELS Consortium',
    year: '2025',
    language: 'English',
    keywords: [
      'NELS',
      'student leadership',
      'syllabus',
      'training',
      'capacity building',
      'media literacy',
    ],
    coverImage: '/images/publications/cover-nels-syllabus-2025.webp',
    pdfUrl: '/documents/aasu-nels-syllabus-2025.pdf',
    fileSize: '417 KB',
    pageCount: 7,
    audience: 'Student union executives & emerging student leaders',
    approvalStatus: 'published',
    relatedPriorityIds: [
      'capacity-building-skills-development-and-employability',
      'migration-mobility-and-exchanges',
    ],
    relatedProgrammeIds: ['nels'],
    relatedEventIds: ['nels-3rd-strategic-partners-meeting-2026'],
    relatedNewsIds: ['upsa-nels-strategic-meeting-2026'],
    publishedAt: '2025-05-01',
  },
  {
    id: 'pub-nels-one-sheet-2025',
    slug: 'nels-programme-one-sheet-overview',
    title: 'NELS One-Sheet Programme Overview (A4)',
    summary:
      'Concise single-page institutional reference outlining the objectives, consortium universities and training pathways of Next Level Skills for Student Leaders.',
    category: 'resources',
    subcategory: 'Student Leadership Guide',
    publisher: 'AASU & NELS Consortium',
    year: '2025',
    language: 'English',
    keywords: ['NELS', 'overview', 'student leadership', 'consortium', 'guide'],
    coverImage: '/images/publications/cover-nels-one-sheet-2025.webp',
    pdfUrl: '/documents/aasu-nels-one-sheet-2025.pdf',
    fileSize: '147 KB',
    pageCount: 1,
    audience: 'Prospective participants, member unions & university partners',
    approvalStatus: 'published',
    relatedPriorityIds: [
      'capacity-building-skills-development-and-employability',
    ],
    relatedProgrammeIds: ['nels'],
    relatedEventIds: ['nels-3rd-strategic-partners-meeting-2026'],
    relatedNewsIds: ['upsa-nels-strategic-meeting-2026'],
    publishedAt: '2025-05-01',
  },

  // ── INSTITUTIONAL DOCUMENTS ────────────────────────────────────────────
  {
    id: 'pub-aasu-constitution',
    slug: 'constitution-of-the-all-africa-students-union',
    title: 'Constitution of the All-Africa Students Union (AASU)',
    summary:
      'The foundational governing instrument establishing AASU\u2019s continental mandate, membership categories, statutory organs (Congress, Executive Committee and Secretariat) and democratic procedures.',
    category: 'institutional-documents',
    subcategory: 'Governing Instrument',
    publisher: 'All-Africa Students Union (AASU)',
    year: 'Official Instrument',
    language: 'English',
    keywords: [
      'constitution',
      'governance',
      'statutes',
      'membership',
      'congress',
    ],
    version: 'Awaiting approved official PDF upload',
    approvalStatus: 'awaiting-upload',
    availabilityNote:
      'The verified digital PDF of the AASU Constitution is awaiting formal Secretariat upload. For constitutional enquiries, contact info@aasuonline.org.',
    relatedPriorityIds: ['democracy-good-governance-peace-and-security'],
    relatedProgrammeIds: [],
    relatedEventIds: [],
    relatedNewsIds: [],
    publishedAt: '2026-01-01',
  },
  {
    id: 'pub-2026-annual-programme',
    slug: 'aasu-2026-annual-programme-workplan',
    title: 'AASU 2026 Annual Programme',
    summary:
      'Official 2026 annual programme outlining planned continental initiatives, strategic priority activities and institutional milestones.',
    category: 'institutional-documents',
    subcategory: 'Strategic Plans & Annual Programmes',
    publisher: 'All-Africa Students Union (AASU)',
    year: '2026',
    language: 'English',
    keywords: ['workplan', 'annual programme', '2026', 'strategic plan'],
    coverImage: '/images/publications/cover-2026-annual-programme.webp',
    pdfUrl: '/documents/aasu-2026-annual-programme.pdf',
    fileSize: '3.7 MB',
    pageCount: 22,
    version: '2026 Programme Edition',
    approvalStatus: 'published',
    relatedPriorityIds: ['education-and-students-rights'],
    relatedProgrammeIds: [],
    relatedEventIds: [],
    relatedNewsIds: [],
    publishedAt: '2026-01-15',
  },
  {
    id: 'pub-gender-policy',
    slug: 'aasu-gender-policy',
    title: 'AASU Gender Policy',
    summary:
      'Approved institutional policy framework guiding gender equity, affirmative action, inclusive leadership and safe participation across AASU structures and member unions.',
    category: 'institutional-documents',
    subcategory: 'Approved Policy & Framework',
    publisher: 'All-Africa Students Union (AASU)',
    year: '2022',
    language: 'English',
    keywords: [
      'gender policy',
      'gender equity',
      'social inclusion',
      'affirmative action',
      'policy',
    ],
    coverImage: '/images/publications/cover-gender-policy.webp',
    pdfUrl: '/documents/aasu-gender-policy.pdf',
    fileSize: '821 KB',
    version: 'Approved Institutional Policy',
    approvalStatus: 'published',
    relatedPriorityIds: ['gender-equity-and-social-inclusion'],
    relatedProgrammeIds: [],
    relatedEventIds: [],
    relatedNewsIds: ['adolescence-360-health-2026'],
    publishedAt: '2022-06-01',
  },
  {
    id: 'pub-14th-congress-election-guidelines',
    slug: 'election-guidelines-14th-elective-congress',
    title: 'Election Guidelines for the 14th Elective Congress',
    summary:
      'Official electoral procedures, nomination rules and eligibility framework governing the 14th Elective Congress of AASU for the 2026-2029 term.',
    category: 'institutional-documents',
    subcategory: 'Public Institutional Document',
    publisher: 'AASU Electoral Commission',
    publicationDate: '2025',
    year: '2025',
    language: 'English',
    keywords: [
      '14th congress',
      'election guidelines',
      'governance',
      'elections',
      'student leadership',
    ],
    coverImage: '/images/publications/cover-14th-congress-guidelines.webp',
    pdfUrl: '/documents/aasu-14th-congress-election-guidelines.pdf',
    fileSize: '327 KB',
    pageCount: 4,
    version: '14th Elective Congress (2025)',
    approvalStatus: 'published',
    relatedPriorityIds: ['democracy-good-governance-peace-and-security'],
    relatedProgrammeIds: [],
    relatedEventIds: ['aasu-honours-and-inauguration-ceremony-2026'],
    relatedNewsIds: ['14th-congress-elections-final-phase-2025'],
    publishedAt: '2025-10-01',
  },
  {
    id: 'pub-13th-congress-resolutions-en',
    slug: '13th-elective-congress-resolutions-english',
    title: 'Resolutions of the 13th Elective Congress (English)',
    summary:
      'Adopted policy resolutions and institutional commitments from the 13th Elective Congress held in Kibi, Ghana (20-22 December 2021).',
    category: 'institutional-documents',
    subcategory: 'Public Institutional Document',
    publisher: 'All-Africa Students Union (AASU)',
    publicationDate: 'December 2021',
    year: '2021',
    language: 'English',
    keywords: [
      '13th congress',
      'resolutions',
      'Kibi',
      'governance',
      'student rights',
    ],
    coverImage: '/images/publications/cover-13th-congress-resolutions.webp',
    pdfUrl: '/documents/aasu-13th-congress-resolutions.pdf',
    fileSize: '1.9 MB',
    pageCount: 15,
    version: 'Archived (13th Congress, 2021)',
    approvalStatus: 'published',
    relatedPriorityIds: ['democracy-good-governance-peace-and-security'],
    relatedProgrammeIds: [],
    relatedEventIds: [],
    relatedNewsIds: [],
    publishedAt: '2021-12-22',
  },
  {
    id: 'pub-13th-congress-resolutions-fr',
    slug: '13th-elective-congress-resolutions-french',
    title:
      "Résolutions du 13ème Congrès Électif de l'Union Pan-Africaine des Étudiants (Français)",
    summary:
      'Version française officielle des résolutions adoptées lors du 13ème Congrès Électif de l\u2019AASU à Kibi, Ghana (20-22 décembre 2021).',
    category: 'institutional-documents',
    subcategory: 'Public Institutional Document',
    publisher: "Union Pan-Africaine des Étudiants (AASU)",
    publicationDate: 'Décembre 2021',
    year: '2021',
    language: 'French',
    keywords: [
      '13ème congrès',
      'résolutions',
      'français',
      'gouvernance',
      'droits des étudiants',
    ],
    coverImage: '/images/publications/cover-13th-congress-resolutions-fr.webp',
    pdfUrl: '/documents/aasu-13th-congress-resolutions-fr.pdf',
    fileSize: '1.0 MB',
    pageCount: 15,
    version: 'Archivé (13ème Congrès, 2021)',
    approvalStatus: 'published',
    relatedPriorityIds: ['democracy-good-governance-peace-and-security'],
    relatedProgrammeIds: [],
    relatedEventIds: [],
    relatedNewsIds: [],
    publishedAt: '2021-12-22',
  },
]

export function getPublicPublications(): PublicationRecord[] {
  return PUBLICATIONS.filter(
    (p) => p.approvalStatus === 'published' || p.approvalStatus === 'awaiting-upload',
  )
}

export function getFeaturedPublications(): PublicationRecord[] {
  return PUBLICATIONS.filter(
    (p) => p.approvalStatus === 'published' && p.featured,
  )
}

export function getPublicationBySlug(
  slug?: string,
): PublicationRecord | undefined {
  return getPublicPublications().find((p) => p.slug === slug)
}

export function getPublicationsByCategory(
  category: KnowledgeCategoryId,
): PublicationRecord[] {
  return getPublicPublications().filter((p) => p.category === category)
}

export function getCategoryMeta(
  id: KnowledgeCategoryId,
): KnowledgeCategoryMeta {
  return (
    KNOWLEDGE_CATEGORIES.find((c) => c.id === id) ?? KNOWLEDGE_CATEGORIES[0]
  )
}

export function matchesPublicationQuery(
  pub: PublicationRecord,
  rawQuery: string,
): boolean {
  const q = rawQuery.trim().toLowerCase()
  if (!q) return true
  const priorityText = pub.relatedPriorityIds
    .map((id) => PRIORITY_LABELS[id] ?? id)
    .join(' ')
  const haystack = [
    pub.title,
    pub.summary,
    pub.subcategory,
    pub.publisher,
    pub.year,
    pub.language,
    pub.authors?.join(' ') ?? '',
    pub.keywords.join(' '),
    priorityText,
  ]
    .join(' ')
    .toLowerCase()

  return q.split(/\s+/).every((token) => haystack.includes(token))
}
