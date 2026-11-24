import type { GovernanceDocument } from '@/data/about'

export interface WhatWeDoEntryCard {
  id: string
  title: string
  description: string
  href: string
  image: string
  imageAlt: string
}

export interface PriorityProjectItem {
  name: string
  description: string
  image?: string
  imageAlt?: string
}

export interface PriorityPolicyItem {
  date: string
  location?: string
  title: string
  summary: string
  href?: string
  linkLabel?: string
  external?: boolean
}

export interface PriorityDetailRecord {
  slug: string
  number: string
  title: string
  iconPath: string
  heroImage: string
  heroImageAlt: string
  overview: string
  objectives: string[]
  activities: PriorityProjectItem[]
  policyImage?: string
  policyImageAlt?: string
  policyImageCaption?: string
  policyEngagements: PriorityPolicyItem[]
  publications: GovernanceDocument[]
}

export type ProgrammeBucket =
  | 'Flagship Programmes'
  | 'Ongoing Programmes & Projects'
  | 'Completed Programmes & Projects'
  | 'Joint & Collaborative Initiatives'

export interface ProgrammeCatalogItem {
  id: string
  title: string
  bucket: ProgrammeBucket
  priorityArea: string
  summary: string
  focusPoints: string[]
  impact: string
  image: string
  imageAlt: string
}

export type CampaignBucket =
  | 'Current Advocacy Campaigns'
  | 'Student Rights & Welfare'
  | 'Education Policy Advocacy'
  | 'Continental Mobilisation'
  | 'Past Campaigns & Initiatives'

export interface CampaignRecord {
  id: string
  title: string
  bucket: CampaignBucket
  summary: string
  keyFocus: string[]
  image?: string
  imageAlt?: string
}

export interface PolicyPillarRecord {
  id: string
  title: string
  summary: string
  engagements: string[]
}

export interface ImpactStoryRecord {
  id: string
  tag: string
  title: string
  summary: string
  outcome: string
  image: string
  imageAlt: string
}

export const WHAT_WE_DO_ENTRY_CARDS: WhatWeDoEntryCard[] = [
  {
    id: 'strategic-priorities',
    title: 'Our Strategic Priorities',
    description:
      'Seven thematic priority areas guiding AASU advocacy, programmes and continental policy.',
    href: '/what-we-do/strategic-priorities',
    image: '/images/web/hero-asw.webp',
    imageAlt: 'AASU delegates representing African students at Africa Skills Week',
  },
  {
    id: 'programmes',
    title: 'Programmes & Initiatives',
    description:
      'Flagship, ongoing and joint initiatives advancing student leadership, skills and sustainability.',
    href: '/what-we-do/programmes',
    image: '/images/web/cfs-panel.webp',
    imageAlt: 'Panel session during the Climate Forward Summit on green skills',
  },
  {
    id: 'campaigns-advocacy',
    title: 'Campaigns & Advocacy',
    description:
      'Continental mobilisation defending student rights, campus safety and equitable education funding.',
    href: '/what-we-do/campaigns-advocacy',
    image: '/images/web/ggem-outreach.webp',
    imageAlt: 'AASU outreach speaker engaging students and community members',
  },
  {
    id: 'policy-engagement',
    title: 'Policy Engagement & Representation',
    description:
      'Representing African students at the African Union, UNESCO and international policy forums.',
    href: '/what-we-do/policy-engagement',
    image: '/images/web/au-education-2026.webp',
    imageAlt: 'AASU representative addressing the Innovating Education in Africa 2026 Policy Dialogue',
  },
  {
    id: 'results-impact',
    title: 'Results & Impact',
    description:
      'Institutional achievements, programme outcomes, case studies and official annual reports.',
    href: '/what-we-do/results-impact',
    image: '/images/web/leadershift-audience.webp',
    imageAlt: 'Student leaders participating in the AASU Leader-Shift Summit',
  },
]

// All 7 Official Strategic Priorities (exact official order & names)
// Sourced from AASU NEW WEBSITE - HOME.docx and aasu/src/data/programsData.js
export const PRIORITY_DETAILS: PriorityDetailRecord[] = [
  {
    slug: 'education-and-students-rights',
    number: '01',
    title: "Education & Students' Rights",
    iconPath: '/images/priority area icons (single)/EDUCATION AND STUDENT RIGHTS.png',
    heroImage: '/images/web/au-education-2026.webp',
    heroImageAlt: 'AASU representative speaking at Innovating Education in Africa 2026 in Addis Ababa',
    overview:
      "Championing students' rights and welfare, equitable access to quality education, academic freedom and student participation in education policy and governance across Africa.",
    objectives: [
      'Advocate for adequate public education financing and equitable access across all levels of learning.',
      'Defend academic freedom, student union autonomy and safe learning environments.',
      'Strengthen student participation in higher education quality assurance and governance.',
      'Monitor progress toward Sustainable Development Goal 4 (Quality Education) from a student perspective.',
    ],
    activities: [
      {
        name: 'Justice for Africa Campaign',
        description:
          'Continental advocacy initiative addressing systemic inequalities in education financing and public education systems across 30+ African countries.',
        image: '/images/web/au-panel-2026.webp',
        imageAlt: 'AASU speakers debating education financing reforms at Innovating Education in Africa 2026',
      },
      {
        name: 'Day of the African Child & Safe Learning Dialogues',
        description:
          'High-level national and regional dialogues advancing child rights, safe school environments and universal WASH access.',
        image: '/images/web/african-child-2026.webp',
        imageAlt: 'AASU Executive Committee representative addressing the Day of the African Child 2026 Strategic Dialogue in Liberia',
      },
      {
        name: 'SDG 4 Monitoring & QA Ambassadors',
        description:
          'Student-led research tracking education quality and expanding student participation in higher education quality assurance governance.',
      },
      {
        name: 'Africa Digital Students Initiative & Story Book Bank 2.0',
        description:
          'Promoting literacy, inclusive learning resources and student leadership in digital education transformation.',
      },
    ],
    policyImage: '/images/web/au-education-2026.webp',
    policyImageAlt: 'AASU representative addressing the Innovating Education in Africa 2026 Policy Dialogue in Addis Ababa',
    policyImageCaption: 'Innovating Education in Africa 2026 Policy Dialogue, Addis Ababa',
    policyEngagements: [
      {
        date: 'July 2026',
        location: 'Addis Ababa, Ethiopia',
        title: 'Innovating Education in Africa 2026 Policy Dialogue',
        summary:
          'AASU organised and chaired an Oxford-style debate examining education financing reforms for the AU Decade of Education and Skills (2025-2034).',
      },
      {
        date: 'June 2026',
        location: 'Liberia',
        title: 'Day of the African Child Strategic Dialogue',
        summary:
          'Convened student leaders, government officials and civil society on educational equity, child rights and WASH in schools.',
      },
      {
        date: 'June - July 2026',
        location: 'Continental',
        title: 'Official Student Protection Statements',
        summary:
          'Issued formal public statements (PR.SG.26.017 and PR.SG.26.012) calling for enhanced protection of African students and educators.',
        href: '/#statements',
        linkLabel: 'View Official Statements',
      },
    ],
    publications: [
      {
        id: 'esr-pub',
        title: "Education & Students' Rights Institutional Publication",
        category: 'Research & Policy',
        year: 'Official Archive',
        description: "Analysis and student perspectives on education access, rights and welfare across Africa.",
        fileUrl: '/documents/aasu-esr-publication.pdf',
        cover: '/images/publications/cover-esr-publication.webp',
      },
      {
        id: 'annual-2025-ed',
        title: 'AASU Annual Report 2025',
        category: 'Annual Report',
        year: '2025',
        description: 'Comprehensive record of AASU education advocacy, policy dialogues and continental activities.',
        fileUrl: '/documents/aasu-annual-report-2025.pdf',
        cover: '/images/publications/cover-annual-report-2025.webp',
      },
    ],
  },
  {
    slug: 'capacity-building-skills-development-and-employability',
    number: '02',
    title: 'Capacity Building, Skills Development & Employability',
    iconPath: '/images/priority area icons (single)/CAPACITY BUILDING.png',
    heroImage: '/images/web/leadershift-audience.webp',
    heroImageAlt: 'Student leaders participating in the AASU Leader-Shift Summit',
    overview:
      'Developing student leadership, strengthening institutional capacities and advancing skills, entrepreneurship and employment opportunities for African students.',
    objectives: [
      'Equip student union officers with ethical leadership, organisational and advocacy competencies.',
      'Bridge the gap between academic study and employability through future-ready digital and professional skills.',
      'Expand peer learning and international capacity-building programmes for African student leaders.',
      'Build a continental network of trained student quality-assurance experts.',
    ],
    activities: [
      {
        name: 'Leader-Shift Summit & Leadership Workshops',
        description:
          'Continental leadership convenings building ethical governance, institutional capacity and practical management skills.',
        image: '/images/web/leadershift-speaker.webp',
        imageAlt: 'Speaker addressing participants at the AASU Leader-Shift Summit at ISSER, University of Ghana',
      },
      {
        name: 'Next Level Skills for Student Leaders (NELS)',
        description:
          'International partnership programme advancing student leadership through structured training, peer learning and research.',
        image: '/images/web/nels-breakout.webp',
        imageAlt: 'Collaborative breakout session during the NELS 3rd Strategic Partners Meeting in Ghana',
      },
      {
        name: '4.0 Skills Training Program',
        description:
          'Hybrid and LMS-delivered training equipping African students with ICT, AI awareness, entrepreneurship and career skills.',
      },
      {
        name: 'Job Shadow & QA Student Expert Training',
        description:
          'Hands-on industry exposure and structured training for student representatives in higher education quality assurance.',
      },
    ],
    policyImage: '/images/web/hero-asw.webp',
    policyImageAlt: 'AASU representatives on stage during Africa Skills Week alongside African Union and Ghana flags',
    policyImageCaption: 'AASU engagement at African Union Africa Skills Week',
    policyEngagements: [
      {
        date: 'October 2024',
        location: 'Accra, Ghana',
        title: 'African Union Africa Skills Week',
        summary:
          'Represented African student perspectives on TVET, employability and continental skills frameworks alongside African Union stakeholders.',
      },
      {
        date: 'August 2026',
        location: 'Cairo, Egypt',
        title: "AAU African Students' Leadership Summit 2026",
        summary:
          'Co-organising continental student leadership convening with the Association of African Universities under Agenda 2063.',
      },
      {
        date: '2026',
        location: 'Ghana',
        title: 'NELS 3rd Strategic Partners Meeting',
        summary:
          'Co-designed student leadership training curricula and quality assurance feedback frameworks with African and European partners.',
      },
    ],
    publications: [
      {
        id: 'impact-2025-skills',
        title: 'AASU Impact Report 2025',
        category: 'Impact Report',
        year: '2025',
        description: 'Review of AASU leadership training, capacity-building programmes and continental reach.',
        fileUrl: '/documents/aasu-impact-report-2025.pdf',
        cover: '/images/publications/cover-impact-report-2025.webp',
      },
      {
        id: 'acqf-toolkit-skills',
        title: 'Toolkit on Greening Skills and Qualifications in Africa',
        category: 'Toolkit',
        year: '2026',
        description: 'Practical stakeholder toolkit developed with ETF and ACQF partners.',
        fileUrl: '/documents/acqf-toolkit-greening-skills.pdf',
        cover: '/images/publications/acqf-toolkit.png',
      },
    ],
  },
  {
    slug: 'gender-equity-and-social-inclusion',
    number: '03',
    title: 'Gender Equity & Social Inclusion',
    iconPath: '/images/priority area icons (single)/GENDER ADVOCACY.png',
    heroImage: '/images/web/ggem-outreach.webp',
    heroImageAlt: 'Water and Gender community outreach session during the GGEM School Tour',
    overview:
      'Addressing discrimination and barriers to participation, promoting gender equality and advancing inclusive policies and opportunities for students of all backgrounds.',
    objectives: [
      'Promote girls\u2019 access to quality education, STEM participation and leadership mentorship.',
      'Eliminate sexual and gender-based violence (SGBV) and foster safe, inclusive campus environments.',
      'Advance affirmative action and women\u2019s equal representation in student governance.',
      'Address menstrual health and social barriers that affect school attendance and retention.',
    ],
    activities: [
      {
        name: 'Adolescence 360 & Pad a Girl Health Outreach',
        description:
          'Targeted school outreach tackling period poverty, menstrual hygiene education and adolescent wellbeing so girls stay in school.',
        image: '/images/web/adol-360-classroom.webp',
        imageAlt: 'AASU Adolescence 360 Health Outreach session with students in Winneba',
      },
      {
        name: 'GGEM School & Community Gender Tour',
        description:
          'Direct community and school dialogues promoting water access, girls\u2019 education and inclusive participation.',
        image: '/images/web/ggem-speaker.webp',
        imageAlt: 'AASU facilitator engaging community members during the GGEM tour',
      },
      {
        name: 'Girls in STEM 2.0',
        description:
          'Bootcamps, ICT training and mentorship pairing empowering girls to lead in science, technology and innovation.',
      },
      {
        name: 'SGBV Campus Tour & Affirmative Action Advocacy',
        description:
          'Campus workshops, 16 Days of Activism mobilisation and policy forums advancing safe, inclusive student leadership.',
      },
    ],
    policyImage: '/images/web/adol-360-winneba.webp',
    policyImageAlt: 'AASU Adolescence 360 Health Outreach team and students in Winneba',
    policyImageCaption: 'Adolescence 360 Health Outreach, Winneba (June 2026)',
    policyEngagements: [
      {
        date: 'Official Policy',
        location: 'Continental',
        title: 'AASU Gender Policy Implementation',
        summary:
          'Guiding institutional inclusion, affirmative action and safe campus advocacy across member unions.',
        href: '/documents/aasu-gender-policy.pdf',
        linkLabel: 'Read AASU Gender Policy',
        external: true,
      },
      {
        date: 'June 2026',
        location: 'Winneba, Ghana',
        title: 'Adolescence 360 School Engagement',
        summary:
          'Hosted interactive sessions with JHS students at A.M.E. Zion "D" JHS on puberty, menstrual hygiene and adolescent wellbeing.',
      },
      {
        date: 'Ongoing',
        location: 'Continental',
        title: 'Partnerships with FAWE & UNICEF',
        summary:
          'Collaborating on gender-transformative education, International Day of the Girl Child and women\u2019s leadership in student unions.',
      },
    ],
    publications: [
      {
        id: 'gender-policy-doc',
        title: 'AASU Gender Policy',
        category: 'Institutional Policy',
        year: 'Official Policy',
        description: 'Official AASU framework for gender equity, affirmative action and safe inclusion.',
        fileUrl: '/documents/aasu-gender-policy.pdf',
        cover: '/images/publications/cover-gender-policy.webp',
      },
    ],
  },
  {
    slug: 'migration-mobility-and-exchanges',
    number: '04',
    title: 'Migration, Mobility & Exchanges',
    iconPath: '/images/priority area icons (single)/MIGRATION & MOBILITY.png',
    heroImage: '/images/web/nels-breakout.webp',
    heroImageAlt: 'Intercultural partnership planning at the NELS 3rd Strategic Partners Meeting in Ghana',
    overview:
      'Advocating for safe and equitable student mobility, academic exchanges, recognition of qualifications and the rights and welfare of students across borders.',
    objectives: [
      'Expand equitable intra-African and international academic exchange and scholarship pathways.',
      'Advance continental recognition of qualifications through the ACQF and UNESCO conventions.',
      'Protect the rights, dignity and welfare of African migrant, diaspora and refugee students.',
      'Strengthen cross-border partnerships between African and global higher education networks.',
    ],
    activities: [
      {
        name: 'NELS Cross-Border Strategic Exchanges',
        description:
          'Joint Africa-Europe student leadership exchanges and intercultural collaboration with ESU, ÖH and university partners.',
        image: '/images/web/nels-consortium.webp',
        imageAlt: 'African and European NELS consortium partners together',
      },
      {
        name: 'Youth Mobility Programme & Info Sessions',
        description:
          'Connecting African students to international scholarships, academic exchanges and global university pathways.',
        image: '/images/web/nels-plenary.webp',
        imageAlt: 'European and African student partners exchanging ideas during NELS plenary',
      },
      {
        name: 'Migrant Students Network Initiative (MSNI)',
        description:
          'Building a coordinated support network connecting African students studying abroad with institutions and embassies.',
      },
      {
        name: 'Students Advocating for Refugees',
        description:
          'Mobilising institutions and partners around World Refugee Day to expand higher education access for displaced students.',
      },
    ],
    policyImage: '/images/web/nels-delegates.webp',
    policyImageAlt: 'International NELS partner delegates during Day 3 exchange in Ghana',
    policyImageCaption: 'NELS international partner delegation in Ghana',
    policyEngagements: [
      {
        date: 'July 2026',
        location: 'Continental',
        title: 'ACQF Pilot II Qualifications Deliverables',
        summary:
          'Contributed student perspectives to the African Continental Qualifications Framework (ACQF) on qualification recognition and lifelong learning.',
      },
      {
        date: 'Ongoing',
        location: 'Global',
        title: 'UNESCO & Groningen Declaration Network Cooperation',
        summary:
          'Advocating for fair qualification recognition and digital student data mobility across borders.',
      },
      {
        date: 'Ongoing',
        location: 'Continental',
        title: 'Refugee Higher Education Inclusion with UNHCR',
        summary:
          'Advocating for safe, inclusive higher education pathways for displaced and refugee youth.',
      },
    ],
    publications: [
      {
        id: 'acqf-users-mob',
        title: "Greening Skills and Qualifications in Africa: Users' Engagement",
        category: 'Concept Document',
        year: '2026',
        description: 'Stakeholder engagement and qualifications recognition insights under ACQF Pilot II.',
        fileUrl: '/documents/acqf-users-engagement.pdf',
        cover: '/images/publications/acqf-concept-document.png',
      },
    ],
  },
  {
    slug: 'climate-action-and-environmental-sustainability',
    number: '05',
    title: 'Climate Action & Environmental Sustainability',
    iconPath: '/images/priority area icons (single)/ENVIRONMENT.png',
    heroImage: '/images/web/beach-cleanup-group.webp',
    heroImageAlt: 'AASU student volunteers after a coastal beach clean-up sustainability drive',
    overview:
      'Advancing student leadership in climate action, environmental protection and sustainability, while promoting green skills and education for a changing world.',
    objectives: [
      'Embed green skills and sustainability literacy across African education and qualifications frameworks.',
      'Mobilise campus and community environmental action including clean-ups and reforestation.',
      'Amplify African youth and student voices in continental and global climate policy spaces.',
      'Partner with international sustainability networks to scale student-led climate solutions.',
    ],
    activities: [
      {
        name: 'Greening Skills and Qualifications in Africa (ACQF Pilot II)',
        description:
          'Joint initiative with the European Training Foundation producing a conceptual framework, casebook and stakeholder toolkit.',
        image: '/images/web/cfs-panel.webp',
        imageAlt: 'Panelist speaking at the Climate Forward Summit on circular economy and clean energy',
      },
      {
        name: 'Coastal Beach Clean-Up & World Clean-Up Day',
        description:
          'Grassroots student mobilisation tackling plastic pollution and coastal waste management.',
        image: '/images/web/beach-cleanup-action.webp',
        imageAlt: 'Student volunteers collecting coastal plastic waste during the AASU Beach Clean-Up',
      },
      {
        name: 'Climate Forward Summit & Green Ghana Day',
        description:
          'Youth dialogues on circular economies, clean energy and student-led tree planting.',
      },
      {
        name: 'Climate & Peace Dialogues',
        description:
          'Exploring the links between climate resilience, youth leadership and sustainable communities.',
      },
    ],
    policyImage: '/images/web/the-sustainability-2026.webp',
    policyImageAlt: 'AASU feature page in the Times Higher Education Sustainability Impact Ratings 2026',
    policyImageCaption: 'AASU featured in Times Higher Education Sustainability Impact Ratings 2026',
    policyEngagements: [
      {
        date: 'July 2026',
        location: 'Global Sustainable Development Congress',
        title: 'Times Higher Education Sustainability Impact Ratings 2026',
        summary:
          'Featured in the maiden global publication recognising AASU\u2019s mobilisation of African students for climate action and the SDGs.',
      },
      {
        date: 'June 2026',
        location: 'GSDC 2026',
        title: 'Beyond the Syllabus Panel & HESI Workshop',
        summary:
          'Moderated international higher education dialogue with UNESCO, Sulitest and UNU on embedding sustainability across the entire student learning journey.',
      },
      {
        date: 'July 2026',
        location: 'Continental',
        title: 'ETF & ACQF Green Skills Policy Deliverables',
        summary:
          'Released three continental resources guiding green skills integration in African education and training systems.',
      },
    ],
    publications: [
      {
        id: 'acqf-toolkit-clim',
        title: 'Toolkit on Greening Skills and Qualifications in Africa',
        category: 'Toolkit',
        year: '2026',
        description: 'Stakeholder guide for embedding green skills into African education and training systems.',
        fileUrl: '/documents/acqf-toolkit-greening-skills.pdf',
        cover: '/images/publications/acqf-toolkit.png',
      },
      {
        id: 'acqf-book-clim',
        title: 'Book of Good Practices for the Greening of Skills and Qualifications in Africa',
        category: 'Case Book',
        year: '2026',
        description: 'Real-world examples of greening skills and qualifications across Africa.',
        fileUrl: '/documents/acqf-book-of-good-practices.pdf',
        cover: '/images/publications/book-of-good-practices.png',
      },
      {
        id: 'green-skills-jobs-report',
        title: 'Green Skills & Green Jobs Report',
        category: 'Programme Report',
        year: 'Official Archive',
        description: 'Student perspectives and findings on green skills and sustainable employment.',
        fileUrl: '/documents/aasu-green-skills-green-jobs.pdf',
        cover: '/images/publications/cover-green-skills-green-jobs.webp',
      },
    ],
  },
  {
    slug: 'democracy-good-governance-peace-and-security',
    number: '06',
    title: 'Democracy, Good Governance, Peace & Security',
    iconPath: '/images/priority area icons (single)/DEMOCRACY AND GOOD GOVERNANCE.png',
    heroImage: '/images/web/inauguration-2026.webp',
    heroImageAlt: 'AASU democratic student leadership at the 2026 Inauguration and Honours Ceremony',
    overview:
      'Promoting democratic values, accountable governance, peacebuilding and the meaningful participation of students in civic and political processes.',
    objectives: [
      'Strengthen democratic governance and transparent elections within student unions across Africa.',
      'Advance the Youth, Peace and Security (YPS) agenda through campus and regional dialogues.',
      'Promote civic education, accountable leadership and peaceful conflict resolution.',
      'Ensure meaningful student participation in African Union and regional governance frameworks.',
    ],
    activities: [
      {
        name: '14th Elective Congress & Democratic Transitions',
        description:
          'Transparent two-phase continental student elections concluding in December 2025 for the 2026-2029 Executive Committee.',
        image: '/images/web/inauguration-2026.webp',
        imageAlt: 'Elected AASU Executive leadership at the 2026 Inauguration and Honours Ceremony',
      },
      {
        name: 'Africa Students Dialogue Series',
        description:
          'Continental platform connecting student leaders with the African Union and regional institutions on democratic governance.',
      },
      {
        name: 'Youth, Peace & Security (YPS) Initiatives',
        description:
          'Empowering African students to lead peacebuilding and conflict prevention in partnership with KAIPTC and regional bodies.',
      },
      {
        name: 'National Democracy Conversations & YouLead Summit',
        description:
          'Promoting civic engagement, accountability and youth participation in public policy.',
      },
    ],
    policyEngagements: [
      {
        date: 'December 2025 - 2026',
        location: 'Continental',
        title: '14th Elective Congress Electoral Process',
        summary:
          'Conducted transparent continental elections and formal handover to the 2026-2029 administration.',
        href: '/about/governance',
        linkLabel: 'View Governance & Executive Committee',
      },
      {
        date: 'Ongoing',
        location: 'Continental & Regional',
        title: 'African Union, ECOWAS & SADC Policy Representation',
        summary:
          'Representing student perspectives in regional peace, civic participation and governance dialogues.',
      },
      {
        date: 'Ongoing',
        location: 'Regional',
        title: 'Youth, Peace & Security Collaboration with KAIPTC',
        summary:
          'Equipping student leaders to engage constructively in conflict prevention and democratic accountability.',
      },
    ],
    publications: [
      {
        id: 'yps-report',
        title: 'Youth, Peace and Security Report',
        category: 'Policy Report',
        year: 'Official Archive',
        description: 'AASU perspectives and initiatives advancing the Youth, Peace and Security agenda in Africa.',
        fileUrl: '/documents/aasu-youth-peace-security.pdf',
        cover: '/images/publications/cover-youth-peace-security.webp',
      },
      {
        id: 'au-summit-gov',
        title: 'AASU Engagement at the AU Heads of State Summit',
        category: 'Institutional Report',
        year: 'Official Archive',
        description: 'Documentation of AASU policy advocacy and representation at the African Union Summit.',
        fileUrl: '/documents/aasu-au-heads-of-state-summit.pdf',
        cover: '/images/publications/cover-au-heads-of-state-summit.webp',
      },
    ],
  },
  {
    slug: 'pan-africanism-and-african-culture',
    number: '07',
    title: 'Pan Africanism & African Culture',
    iconPath: '/images/priority area icons (single)/PAN-AFRICANISM AND AFRICAN CULTURE.png',
    heroImage: '/images/web/hero-asw.webp',
    heroImageAlt: 'Pan-African student representation alongside African Union and national flags',
    overview:
      "Advancing African unity, student solidarity and continental integration while celebrating Africa's cultural heritage, diversity and shared identity.",
    objectives: [
      'Foster Pan-African unity and cross-regional solidarity among national student unions.',
      'Celebrate African languages, arts, heritage and cultural diversity on campuses.',
      'Connect African students on the continent with the global African diaspora.',
      'Preserve the historical legacy of African student movements since Kumasi 1972.',
    ],
    activities: [
      {
        name: 'Pan-African Youth Engagement & Solidarity',
        description:
          'Continental solidarity campaigns and joint student union declarations reinforcing shared African purpose across all five regions.',
        image: '/images/web/students-letters.webp',
        imageAlt: 'African students holding large red AASU letters in solidarity',
      },
      {
        name: 'International Cultural Day & Heritage Showcase',
        description:
          'Showcasing African creative expression, traditional attire, arts and cultural diversity across AASU networks.',
        image: '/images/web/cfs-delegate.webp',
        imageAlt: 'Delegate in traditional African attire representing cultural heritage',
      },
      {
        name: 'June 16 African Students\u2019 Day Commemorations',
        description:
          'Annual continental remembrance honouring the legacy of the Soweto students and Pan-African solidarity.',
      },
      {
        name: 'Global Cultural Diplomacy',
        description:
          'Representing African student heritage and identity in international youth and diplomatic forums.',
      },
    ],
    policyImage: '/images/web/cfs-delegate.webp',
    policyImageAlt: 'Delegate wearing traditional woven African attire at continental convening',
    policyImageCaption: 'Celebrating African cultural identity across continental student forums',
    policyEngagements: [
      {
        date: 'Ongoing',
        location: 'Continental',
        title: 'African Union Agenda 2063 Cultural Alignment',
        summary:
          'Aligning youth cultural programming with Aspiration 5: an Africa with a strong cultural identity, common heritage and shared values.',
      },
      {
        date: 'Annual · June 16',
        location: 'All 5 African Regions',
        title: "African Students' Day Continental Commemoration",
        summary:
          'Coordinating member unions across North, West, Central, East and Southern Africa to mark June 16 since the 1982 Sixth Congress declaration.',
        href: '/about/history-legacy',
        linkLabel: 'Explore History & Legacy',
      },
    ],
    publications: [
      {
        id: 'congress-res-pan',
        title: '13th Congress Resolutions',
        category: 'Congress Resolutions',
        year: 'Official Archive',
        description: 'Continental resolutions affirming Pan-African student unity and collective priorities.',
        fileUrl: '/documents/aasu-13th-congress-resolutions.pdf',
        cover: '/images/publications/cover-13th-congress-resolutions.webp',
      },
    ],
  },
]

export const PROGRAMMES_CATALOG: ProgrammeCatalogItem[] = [
  {
    id: 'greening-skills-acqf',
    title: 'Greening Skills and Qualifications in Africa',
    bucket: 'Joint & Collaborative Initiatives',
    priorityArea: 'Climate Action & Environmental Sustainability',
    summary:
      'Implemented with the European Training Foundation (ETF) under the African Continental Qualifications Framework (ACQF Pilot II) to align green skills with education and qualifications systems.',
    focusPoints: [
      'African conceptual framework on green skills',
      'Book of Good Practices across African education systems',
      'Stakeholder toolkit for educators, learners and employers',
    ],
    impact: 'Three major 2026 deliverables published for continental adoption.',
    image: '/images/web/cfs-panel.webp',
    imageAlt: 'Climate Forward Summit panel on green skills and circular economy',
  },
  {
    id: 'nels-initiative',
    title: 'Next Level Skills for Student Leaders (NELS)',
    bucket: 'Joint & Collaborative Initiatives',
    priorityArea: 'Capacity Building, Skills Development & Employability',
    summary:
      'Multi-partner leadership development initiative strengthening student unions through training, peer learning, research and Africa-Europe institutional cooperation.',
    focusPoints: [
      'Cross-cultural communication and stakeholder engagement',
      'Quality assurance and participatory student governance',
      'Joint cohorts with ESU, FH OÖ, UCC, KCA, UTG and ÖH',
    ],
    impact: 'Multiple student leadership cohorts trained and 3rd Strategic Partners Meeting hosted in Ghana.',
    image: '/images/web/nels-breakout.webp',
    imageAlt: 'NELS 3rd Strategic Partners Meeting breakout collaboration in Ghana',
  },
  {
    id: 'aasu-inspire-tour',
    title: 'AASU Inspire Tour',
    bucket: 'Ongoing Programmes & Projects',
    priorityArea: "Education & Students' Rights",
    summary:
      'Taking student leadership, mentorship, discipline and educational engagement directly to pre-tertiary schools and campus communities.',
    focusPoints: [
      'Direct mentorship in junior and senior high schools',
      'Leadership values and academic motivation',
      'Community and school-level student engagement',
    ],
    impact: 'Reaching pre-tertiary beneficiary schools directly across communities.',
    image: '/images/web/ggem-outreach.webp',
    imageAlt: 'AASU outreach speaker engaging school and community participants',
  },
  {
    id: 'justice-for-africa',
    title: 'Justice for Africa Campaign',
    bucket: 'Flagship Programmes',
    priorityArea: "Education & Students' Rights",
    summary:
      'Continental advocacy flagship tackling systemic inequalities in education financing and strengthening equitable public education systems.',
    focusPoints: [
      'Sustainable public education financing',
      'Equitable access across underserved communities',
      'Engagement with ministries and continental policymakers',
    ],
    impact: 'Implemented across 30+ African countries with governments and global partners.',
    image: '/images/web/au-education-2026.webp',
    imageAlt: 'AASU representative speaking at Innovating Education in Africa 2026',
  },
  {
    id: 'skills-4-0',
    title: '4.0 Skills Training Program',
    bucket: 'Flagship Programmes',
    priorityArea: 'Capacity Building, Skills Development & Employability',
    summary:
      'Preparing African students for the digital economy through hybrid and LMS-delivered training in ICT, AI awareness and entrepreneurship.',
    focusPoints: [
      'Digital literacy and ICT competence',
      'AI awareness and practical application',
      'Entrepreneurship and career readiness',
    ],
    impact: 'Scalable virtual and physical delivery reaching students across regions.',
    image: '/images/web/leadershift-audience.webp',
    imageAlt: 'Student leaders engaged at the AASU Leader-Shift Summit',
  },
  {
    id: 'youth-mobility-programme',
    title: 'Youth Mobility Programme',
    bucket: 'Flagship Programmes',
    priorityArea: 'Migration, Mobility & Exchanges',
    summary:
      'Expanding access to international scholarships, academic exchanges and cross-border mobility pathways for African students.',
    focusPoints: [
      'Study-abroad info sessions and career fairs',
      'Migrant Students Network Initiative (MSNI)',
      'Partnerships with Erasmus+, DAAD and global universities',
    ],
    impact: 'Thousands of students connected to global mobility and scholarship opportunities.',
    image: '/images/web/nels-plenary.webp',
    imageAlt: 'International student partners exchanging ideas during NELS plenary',
  },
  {
    id: 'adolescence-360-and-pad-a-girl',
    title: 'Adolescence 360 & Pad a Girl Outreach',
    bucket: 'Ongoing Programmes & Projects',
    priorityArea: 'Gender Equity & Social Inclusion',
    summary:
      'School-based health outreach breaking stigmas around menstrual hygiene, reproductive health and adolescent wellbeing so girls stay in school.',
    focusPoints: [
      'Safe interactive sessions in junior high schools',
      'Menstrual health education and sanitary support',
      'Community and educator engagement',
    ],
    impact: 'Direct student outreach including A.M.E. Zion "D" JHS in Winneba (June 2026).',
    image: '/images/web/adol-360-winneba.webp',
    imageAlt: 'AASU Adolescence 360 Health Outreach team and students in Winneba',
  },
  {
    id: 'coastal-beach-cleanup',
    title: 'Coastal Clean-Up & Green Ghana Initiatives',
    bucket: 'Completed Programmes & Projects',
    priorityArea: 'Climate Action & Environmental Sustainability',
    summary:
      'Student-led environmental restoration campaigns combining coastal waste clean-ups, tree planting and campus sustainability education.',
    focusPoints: [
      'Student volunteer coastal waste recovery',
      'Tree planting and campus greening',
      'Youth climate awareness mobilisation',
    ],
    impact: 'Hundreds of student volunteers mobilised across coastal and campus communities.',
    image: '/images/web/beach-cleanup-group.webp',
    imageAlt: 'AASU student volunteers after a coastal beach clean-up sustainability drive',
  },
]

export const CAMPAIGNS_DATA: CampaignRecord[] = [
  {
    id: 'camp-justice-africa',
    title: 'Justice for Africa Education Campaign',
    bucket: 'Current Advocacy Campaigns',
    summary:
      'Driving continental mobilisation for fair, inclusive and sustainably funded public education systems across Africa.',
    keyFocus: ['Education financing reform', 'Public education equity', 'Regional policy accountability'],
    image: '/images/web/au-education-2026.webp',
    imageAlt: 'AASU representative addressing Innovating Education in Africa 2026',
  },
  {
    id: 'camp-safe-schools',
    title: 'Protection & Safety of African Students',
    bucket: 'Student Rights & Welfare',
    summary:
      'Rapid-response advocacy defending the safety, welfare and dignity of African students, including official statements addressing student security in South Africa and Nigeria (2026).',
    keyFocus: ['Safe learning environments', 'Protection of migrant students', 'Rapid-response official statements'],
  },
  {
    id: 'camp-au-financing',
    title: 'AU Decade of Education & Skills (2025-2034) Financing Advocacy',
    bucket: 'Education Policy Advocacy',
    summary:
      'Advocating for comprehensive financing reform so African nations can realistically achieve the AU Decade of Education and Skills targets.',
    keyFocus: ['Continental education budgets', 'Student voice in AU policy', 'Evidence-based policy debate'],
  },
  {
    id: 'camp-sgbv-16-days',
    title: 'SGBV Campus Tour & 16 Days of Activism',
    bucket: 'Continental Mobilisation',
    summary:
      'Mobilising student unions across campuses to eliminate sexual and gender-based violence and build safe, respectful learning spaces.',
    keyFocus: ['Campus workshops', 'Prevention & reporting pathways', 'Gender-inclusive governance'],
    image: '/images/web/ggem-outreach.webp',
    imageAlt: 'Gender and education community outreach dialogue',
  },
  {
    id: 'camp-african-child-day',
    title: 'Day of the African Child & June 16 Commemorations',
    bucket: 'Continental Mobilisation',
    summary:
      'Annual continental mobilisation honouring the Soweto students and convening governments, youth and civil society on child rights and WASH in schools.',
    keyFocus: ['Child rights & education access', 'WASH in learning institutions', 'Pan-African solidarity'],
    image: '/images/web/african-child-2026.webp',
    imageAlt: 'AASU Day of the African Child 2026 Strategic Dialogue in Liberia',
  },
  {
    id: 'camp-past-covid-refugees',
    title: 'Students Advocating for Refugees & Global Vaccine Equity',
    bucket: 'Past Campaigns & Initiatives',
    summary:
      'Past continental advocacy campaigns amplifying displaced students\u2019 right to higher education and equitable global pandemic recovery.',
    keyFocus: ['Refugee higher education access', 'Pandemic learning continuity', 'Humanitarian coalitions'],
  },
]

export const POLICY_PILLARS: PolicyPillarRecord[] = [
  {
    id: 'continental-policy',
    title: 'Continental Policy Engagement',
    summary:
      'Representing African students directly within the African Union, regional economic communities and continental education frameworks.',
    engagements: [
      'Active stakeholder in African Union Agenda 2063 and the Continental Education Strategy for Africa (CESA).',
      'Led high-level financing reform debate at Innovating Education in Africa 2026 (Addis Ababa) for the AU Decade of Education and Skills (2025-2034).',
      'Regional policy cooperation with ECOWAS and SADC on student mobility, peacebuilding and qualification harmonisation.',
    ],
  },
  {
    id: 'international-policy',
    title: 'International Policy Engagement',
    summary:
      'Amplifying African student perspectives across United Nations agencies, European partners and global higher education coalitions.',
    engagements: [
      'Collaboration with UNESCO on Education 2030 and the Global Convention on Recognition of Qualifications.',
      'Joint ACQF Pilot II deliverables with the European Training Foundation (ETF) on green skills and lifelong learning.',
      'Co-moderation and HESI workshop leadership at the Global Sustainable Development Congress (GSDC 2026).',
    ],
  },
  {
    id: 'institutional-representation',
    title: 'Student Representation in Institutional Processes',
    summary:
      'Ensuring students are recognised as equal partners in higher education quality assurance, university autonomy and governance.',
    engagements: [
      'Quality Assurance Ambassadors Project with the Association of African Universities (AAU).',
      'Founding member of the Global Student Forum (GSF) coordinating worldwide democratic student representation.',
      'Engagement with the Bologna Follow-Up Group (BFUG), IAU and Magna Charta Universitatum Observatory.',
    ],
  },
  {
    id: 'consultations-dialogues',
    title: 'Policy Consultations & Dialogues',
    summary:
      'Gathering authentic grassroots evidence from learners, educators and member unions to inform continental policy positions.',
    engagements: [
      'Continental surveys and stakeholder interviews informing the 2026 ACQF Greening Skills Toolkit and Casebook.',
      'Africa Students Dialogue Series and national student consultations across member unions.',
      'Strategic dialogues in member states including Liberia (Day of the African Child 2026) and Ghana (Leader-Shift Summit).',
    ],
  },
]

export const IMPACT_METRICS = [
  { value: '250,000+', label: 'Students Reached', detail: 'Across the continent*', needsConfirmation: true },
  { value: '1,000+', label: 'Policymakers Engaged', detail: 'In high-level dialogues*', needsConfirmation: true },
  { value: '50+', label: 'Conferences & Summits', detail: 'Globally and regionally*', needsConfirmation: true },
  { value: '20+', label: 'Co-Created Initiatives', detail: 'With institutional partners*', needsConfirmation: true },
]

export const IMPACT_STORIES: ImpactStoryRecord[] = [
  {
    id: 'story-acqf',
    tag: 'Green Skills & Policy · 2026',
    title: 'Three Continental Deliverables Released Under ACQF Pilot II',
    summary:
      'In partnership with the European Training Foundation (ETF), AASU consulted learners, educators, qualification authorities and employers to produce practical resources for Africa\u2019s green transition.',
    outcome: 'Toolkit, Book of Good Practices and Concept Document published in July 2026.',
    image: '/images/web/cfs-panel.webp',
    imageAlt: 'Climate Forward Summit panel on green economies',
  },
  {
    id: 'story-the-sustainability',
    tag: 'Global Recognition · 2026',
    title: 'Featured in Maiden Times Higher Education Sustainability Impact Ratings',
    summary:
      'Launched at the Global Sustainable Development Congress (GSDC) 2026, the global publication highlighted AASU\u2019s mobilisation of African students for climate action and the SDGs.',
    outcome: 'Positioned African student leadership within the global higher education sustainability dialogue.',
    image: '/images/web/the-sustainability-2026.webp',
    imageAlt: 'AASU feature in Times Higher Education Sustainability Impact Ratings 2026',
  },
  {
    id: 'story-au-financing',
    tag: 'Continental Advocacy · 2026',
    title: 'Championing Financing Reform at the African Union',
    summary:
      'AASU chaired and convened a high-level Oxford-style policy debate at Innovating Education in Africa 2026 examining how African states can sustainably resource the AU Decade of Education and Skills.',
    outcome: 'Elevated student perspectives directly within continental education financing discussions.',
    image: '/images/web/au-education-2026.webp',
    imageAlt: 'AASU speaking at Innovating Education in Africa 2026',
  },
]

export const ANNUAL_HIGHLIGHT_REPORTS: GovernanceDocument[] = [
  {
    id: 'annual-report-2025',
    title: 'AASU Annual Report 2025',
    category: 'Annual Report',
    year: '2025',
    description: 'Official institutional review of AASU activities, governance and continental engagements.',
    fileUrl: '/documents/aasu-annual-report-2025.pdf',
  },
  {
    id: 'impact-report-2025',
    title: 'AASU Impact Report 2025',
    category: 'Impact Report',
    year: '2025',
    description: 'Detailed assessment of AASU programme reach, advocacy outcomes and continental partnerships.',
    fileUrl: '/documents/aasu-impact-report-2025.pdf',
  },
  {
    id: 'au-summit-report',
    title: 'AASU Engagement at the AU Heads of State Summit',
    category: 'Policy Engagement Report',
    year: 'Official Archive',
    description: 'Record of AASU high-level diplomatic representation and advocacy at the African Union Summit.',
    fileUrl: '/documents/aasu-au-heads-of-state-summit.pdf',
  },
  {
    id: 'green-skills-report',
    title: 'Green Skills & Green Jobs Report',
    category: 'Thematic Report',
    year: 'Official Archive',
    description: 'Findings and recommendations advancing green employability for African students.',
    fileUrl: '/documents/aasu-green-skills-green-jobs.pdf',
  },
]
