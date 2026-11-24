import type { CmsWorkflowStatus } from '@/data/newsMedia'

export type EventType =
  | 'Meetings'
  | 'Conferences'
  | 'Programmes'
  | 'Institutional Engagements'

export type EventLifecycleStatus =
  | 'upcoming'
  | 'ongoing'
  | 'completed'
  | 'cancelled'
  | 'postponed'

export type SummitClassification =
  | 'Continental Conference'
  | 'International Forum & Convening'
  | 'AASU Flagship Summit'

export interface EventRecord {
  id: string
  slug: string
  workflowStatus: CmsWorkflowStatus
  lifecycleStatus: EventLifecycleStatus
  title: string
  edition?: string
  seriesSlug?: string
  eventType: EventType
  summitClassification?: SummitClassification
  programmeTag: string
  prioritySlug?: string
  dateDisplay: string
  timeDisplay?: string
  timezone: string
  startIso: string
  endIso: string
  year: string
  monthKey: string // YYYY-MM
  format: 'In-Person' | 'Online' | 'Hybrid'
  venue: string
  cityOrPlatform: string
  country: string
  region:
    | 'North Africa'
    | 'West Africa'
    | 'Central Africa'
    | 'East Africa'
    | 'Southern Africa'
    | 'International'
    | 'Continental (Online)'
  coverImage: string
  coverImageAlt: string
  shortDescription: string
  overview: string[]
  agendaHighlights?: string[]
  speakers?: { name: string; role: string }[]
  organisersAndPartners: string[]
  registrationUrl?: string
  registrationNote?: string
  relatedNewsSlugs?: string[]
  relatedAlbumSlug?: string
  relatedSpeechSlug?: string
  relatedVideoId?: string
  officialReports?: { title: string; fileUrl: string }[]
  verifiedOutcomes?: string[]
}

export const EVENTS_NAV_CARDS = [
  {
    id: 'events-calendar',
    title: 'Events Calendar',
    description:
      'Browse AASU meetings, conferences, programmes and institutional engagements in calendar or list view.',
    href: '/events',
  },
  {
    id: 'summits-conferences',
    title: 'Major Summits & Conferences',
    description:
      'Flagship AASU convenings, continental conferences and high-level international forums.',
    href: '/events/summits-conferences',
  },
  {
    id: 'past-events',
    title: 'Past Events Archive',
    description:
      'Searchable archive of completed AASU events with verified reports, photo albums and recordings.',
    href: '/events/past',
  },
]

// Authoritative event records sourced directly from AASU's institutional archive
// (aasu/src/data/newsEventsData.js) and linked by stable IDs to News, Gallery & Reports.
export const VERIFIED_EVENTS: EventRecord[] = [
  {
    id: 'event-russia-africa-scientists-2026',
    slug: 'russia-africa-forum-young-scientists-2026',
    workflowStatus: 'published',
    lifecycleStatus: 'completed',
    title: 'Russia-Africa Forum-Competition of Young Scientists 2026',
    edition: '2026 Edition',
    eventType: 'Conferences',
    summitClassification: 'International Forum & Convening',
    programmeTag: 'Science, Innovation & Mobility',
    prioritySlug: 'migration-mobility-and-exchanges',
    dateDisplay: '12-17 October 2026',
    timeDisplay: 'Full-day programme',
    timezone: 'MSK (UTC+3)',
    startIso: '2026-10-12T06:00:00Z',
    endIso: '2026-10-17T15:00:00Z',
    year: '2026',
    monthKey: '2026-10',
    format: 'In-Person',
    venue: 'Empress Catherine II St. Petersburg Mining University',
    cityOrPlatform: 'St. Petersburg',
    country: 'Russia',
    region: 'International',
    coverImage: '/images/events/russia-africa-2026.webp',
    coverImageAlt:
      'Russia-Africa Forum-Competition of Young Scientists 2026 official visual',
    shortDescription:
      'International platform for young African and Russian researchers under the auspices of UNESCO, themed Future Engineers of the World.',
    overview: [
      'Held under the auspices of UNESCO at Empress Catherine II St. Petersburg Mining University, the Russia-Africa Forum-Competition of Young Scientists convened senior undergraduate students, postgraduate researchers and young scientists under 35.',
      'Under the theme "Future Engineers of the World: The Foundation for Sustainable Development," teams of three to five scholars collaborated across English and Russian working languages on global engineering and sustainability challenges.',
    ],
    organisersAndPartners: [
      'UNESCO (Under the auspices of)',
      'Empress Catherine II St. Petersburg Mining University',
      'All-Africa Students Union (AASU)',
    ],
    registrationNote:
      'Application deadline closed on 1 July 2026. Event completed in October 2026.',
  },
  {
    id: 'event-aau-summit-2026',
    slug: 'aau-african-students-leadership-summit-2026',
    workflowStatus: 'published',
    lifecycleStatus: 'completed',
    title: "AAU African Students' Leadership Summit 2026",
    edition: '2026 Cairo Edition',
    seriesSlug: 'aau-african-students-leadership-summit',
    eventType: 'Conferences',
    summitClassification: 'Continental Conference',
    programmeTag: 'Continental Student Leadership',
    prioritySlug: 'capacity-building-skills-development-and-employability',
    dateDisplay: '17-19 August 2026',
    timeDisplay: 'Three-day summit',
    timezone: 'EEST (UTC+3)',
    startIso: '2026-08-17T06:00:00Z',
    endIso: '2026-08-19T15:00:00Z',
    year: '2026',
    monthKey: '2026-08',
    format: 'In-Person',
    venue: 'Cairo Summit Venue',
    cityOrPlatform: 'Cairo',
    country: 'Egypt',
    region: 'North Africa',
    coverImage: '/images/events/aau-summit-2026.webp',
    coverImageAlt: "AAU African Students' Leadership Summit 2026 in Cairo, Egypt",
    shortDescription:
      'Co-organised by AAU and AASU in Cairo under the theme Shaping the Next Generation of African Transformation: Leadership, Innovation and Agenda 2063.',
    overview: [
      "Organised by the Association of African Universities (AAU) in collaboration with the All-Africa Students Union (AASU), this high-level continental summit brought together student leaders, changemakers and young innovators from across Africa.",
      'Through keynote sessions, expert-led discussions, workshops and peer networking, participants strengthened ethical governance skills and Pan-African collaboration aligned with Agenda 2063.',
    ],
    organisersAndPartners: [
      'Association of African Universities (AAU)',
      'All-Africa Students Union (AASU)',
    ],
    registrationNote: 'Summit concluded on 19 August 2026.',
  },
  {
    id: 'event-climate-forward-summit-2026',
    slug: 'climate-forward-summit-2026',
    workflowStatus: 'published',
    lifecycleStatus: 'completed',
    title: 'Climate Forward Summit 2026: The Circular Transition',
    edition: '2026 Edition',
    seriesSlug: 'climate-forward-summit',
    eventType: 'Conferences',
    summitClassification: 'AASU Flagship Summit',
    programmeTag: 'Climate Action & Circular Economy',
    prioritySlug: 'climate-action-and-environmental-sustainability',
    dateDisplay: '9 July 2026',
    timeDisplay: '10:00 AM GMT',
    timezone: 'GMT (UTC+0)',
    startIso: '2026-07-09T10:00:00Z',
    endIso: '2026-07-09T16:30:00Z',
    year: '2026',
    monthKey: '2026-07',
    format: 'In-Person',
    venue: 'Executive Conference Centre, GIMPA',
    cityOrPlatform: 'Accra',
    country: 'Ghana',
    region: 'West Africa',
    coverImage: '/images/web/cfs-panel.webp',
    coverImageAlt:
      'Panelist speaking at the Climate Forward Summit 2026 on circular economy and clean energy',
    shortDescription:
      'Integrating waste-to-wealth pathways and clean energy for green industrialisation, co-convened by The Implementers and AASU.',
    overview: [
      "Presented by The Implementers and the All-Africa Students Union (AASU) alongside sustainability partners, the Climate Forward Summit 2026 convened students, youth innovators and industry stakeholders under the theme 'The Circular Transition: Integrating Waste-to-Wealth Pathways and Clean Energy for Ghana's Green Industrialisation.'",
      'Preceded by the Waste to Wealth Webinar on 25 June 2026, the summit showcased practical student-led circular economy solutions and clean energy entrepreneurship.',
    ],
    organisersAndPartners: [
      'All-Africa Students Union (AASU)',
      'The Implementers',
    ],
    relatedAlbumSlug: 'climate-forward-summit',
    officialReports: [
      {
        title: 'Toolkit on Greening Skills and Qualifications in Africa (2026)',
        fileUrl: '/documents/acqf-toolkit-greening-skills.pdf',
      },
      {
        title: 'Green Skills and Green Jobs Report',
        fileUrl: '/documents/aasu-green-skills-green-jobs.pdf',
      },
    ],
    registrationNote: 'Summit completed on 9 July 2026.',
  },
  {
    id: 'event-gsdc-sustainability-2026',
    slug: 'gsdc-2026-beyond-the-syllabus',
    workflowStatus: 'published',
    lifecycleStatus: 'completed',
    title:
      'Beyond the Syllabus: Embedding Sustainability into the Larger Learning Journey (GSDC 2026)',
    edition: 'GSDC 2026',
    eventType: 'Institutional Engagements',
    summitClassification: 'International Forum & Convening',
    programmeTag: 'Climate Action & Higher Education',
    prioritySlug: 'climate-action-and-environmental-sustainability',
    dateDisplay: '23 June 2026',
    timeDisplay: 'Panel and Workshop',
    timezone: 'UTC',
    startIso: '2026-06-23T09:00:00Z',
    endIso: '2026-06-23T12:30:00Z',
    year: '2026',
    monthKey: '2026-06',
    format: 'In-Person',
    venue: 'Global Sustainable Development Congress 2026',
    cityOrPlatform: 'GSDC 2026',
    country: 'International',
    region: 'International',
    coverImage: '/images/web/the-sustainability-2026.webp',
    coverImageAlt:
      'AASU sustainability feature launched at the Global Sustainable Development Congress 2026',
    shortDescription:
      'Panel and interactive HESI workshop co-facilitated by AASU on embedding sustainability across the entire higher education student experience.',
    overview: [
      'At the Global Sustainable Development Congress (GSDC) 2026, AASU participated in a panel and interactive workshop reinforcing that sustainability must move beyond isolated courses into the entire student learning journey.',
      'Belinda Mensah, Programmes Officer at AASU, moderated the panel on innovative co-curricular and whole-institution approaches to developing sustainability literacy.',
    ],
    speakers: [
      { name: 'Belinda Mensah', role: 'Programmes Officer, AASU (Moderator)' },
      { name: 'Jean-Christophe Carteron', role: 'President, Sulitest' },
      {
        name: 'Santosh Khatri',
        role: 'Chief of Education, UNESCO Regional Office',
      },
      { name: 'Dr. Jingwen Mu', role: 'Hong Kong Baptist University' },
      { name: 'Raghuram Barabadran', role: 'Amrita Vishwa Vidyapeetham' },
      {
        name: 'Shinobu Yume Yamaguchi',
        role: 'Director, UNU Institute for the Advanced Study of Sustainability',
      },
    ],
    organisersAndPartners: [
      'All-Africa Students Union (AASU)',
      'Higher Education Sustainability Initiative (HESI)',
      'Sulitest',
      'United Nations University (UNU)',
    ],
    relatedNewsSlugs: ['times-higher-education-sustainability-2026'],
    registrationNote: 'Completed during GSDC 2026.',
  },
  {
    id: 'event-digital-sovereignty-2026',
    slug: 'digital-sovereignty-vs-the-algorithm-2026',
    workflowStatus: 'published',
    lifecycleStatus: 'completed',
    title: 'Digital Sovereignty vs. The Algorithm Dialogue',
    eventType: 'Meetings',
    programmeTag: 'Technology & Policy Dialogue',
    prioritySlug: 'democracy-good-governance-peace-and-security',
    dateDisplay: '17 June 2026',
    timeDisplay: 'Interactive Session',
    timezone: 'GMT (UTC+0)',
    startIso: '2026-06-17T10:00:00Z',
    endIso: '2026-06-17T13:00:00Z',
    year: '2026',
    monthKey: '2026-06',
    format: 'In-Person',
    venue: 'AASU Secretariat Dialogue Hall',
    cityOrPlatform: 'Accra',
    country: 'Ghana',
    region: 'West Africa',
    coverImage: '/images/events/digital-sovereignty-2026.webp',
    coverImageAlt:
      'Digital Sovereignty vs. The Algorithm Dialogue convened by AASU and The Free Market Fellowship',
    shortDescription:
      'Policy dialogue examining data governance, artificial intelligence, cybersecurity and digital rights for African youth.',
    overview: [
      'Convened by the All-Africa Students Union (AASU) in partnership with The Free Market Fellowship, this interactive dialogue brought together experts and young leaders to examine data governance, cybersecurity, digital identity and artificial intelligence in Africa.',
    ],
    speakers: [
      { name: 'George Sampson-Graves', role: 'Moderator, AASU' },
      { name: 'Eric Chinery', role: 'Chief IT Officer, AASU' },
      { name: 'Ettah Johnson Kwaku', role: 'Panel Contributor' },
      { name: 'Manasseh Lorlornyo Adossi', role: 'Panel Contributor' },
      { name: 'Samuel Eze', role: 'Panel Contributor' },
    ],
    organisersAndPartners: [
      'All-Africa Students Union (AASU)',
      'The Free Market Fellowship',
    ],
    registrationNote: 'Completed on 17 June 2026.',
  },
  {
    id: 'event-youth-students-dialogue-2026',
    slug: 'youth-and-students-dialogue-elearning-africa-2026',
    workflowStatus: 'published',
    lifecycleStatus: 'completed',
    title:
      'Youth and Students Dialogue on Skills, Employability and Entrepreneurship (eLearning Africa 2026)',
    edition: 'eLearning Africa 2026',
    eventType: 'Conferences',
    summitClassification: 'Continental Conference',
    programmeTag: 'Skills, Employability & Digital Innovation',
    prioritySlug: 'capacity-building-skills-development-and-employability',
    dateDisplay: '5 June 2026',
    timeDisplay: '14:45 - 15:45 GMT',
    timezone: 'GMT (UTC+0)',
    startIso: '2026-06-05T14:45:00Z',
    endIso: '2026-06-05T15:45:00Z',
    year: '2026',
    monthKey: '2026-06',
    format: 'In-Person',
    venue: 'Sekondi Hall, Labadi Beach Hotel',
    cityOrPlatform: 'Accra',
    country: 'Ghana',
    region: 'West Africa',
    coverImage: '/images/events/youth-students-dialogue-2026.webp',
    coverImageAlt:
      'Youth and Students Dialogue on Skills, Employability and Entrepreneurship at eLearning Africa 2026',
    shortDescription:
      'Continental dialogue at eLearning Africa 2026 convening students, policymakers and industry partners on practical skills and youth employability.',
    overview: [
      'Hosted during the 19th International Conference and Exhibition on Digital Education, Training and Skills Development (eLearning Africa 2026) in Accra, the Youth and Students Dialogue examined sustainable pathways for youth employability, entrepreneurship and future-ready skills.',
    ],
    organisersAndPartners: [
      'All-Africa Students Union (AASU)',
      'eLearning Africa 2026',
      'Ministry of Education, Republic of Ghana',
    ],
    relatedNewsSlugs: [
      'steam-skills-elearning-africa-2026',
      'climate-resilience-elearning-africa-2026',
    ],
    registrationNote: 'Completed on 5 June 2026.',
  },
  {
    id: 'event-pre-conference-workshop-2026',
    slug: 'pre-conference-workshop-reconnecting-futures-2026',
    workflowStatus: 'published',
    lifecycleStatus: 'completed',
    title:
      'Pre-Conference Workshop: Re-connecting Futures (Indigenous Knowledge & Africa\u2019s Digital Generation)',
    eventType: 'Programmes',
    programmeTag: 'Capacity Building & Innovation',
    prioritySlug: 'capacity-building-skills-development-and-employability',
    dateDisplay: '3 June 2026',
    timeDisplay: '09:30 - 16:30 GMT',
    timezone: 'GMT (UTC+0)',
    startIso: '2026-06-03T09:30:00Z',
    endIso: '2026-06-03T16:30:00Z',
    year: '2026',
    monthKey: '2026-06',
    format: 'In-Person',
    venue: 'Kumasi Hall, Labadi Beach Hotel',
    cityOrPlatform: 'Accra',
    country: 'Ghana',
    region: 'West Africa',
    coverImage: '/images/events/pre-conference-workshop-2026.webp',
    coverImageAlt:
      'Pre-Conference Workshop: Re-connecting Futures at Labadi Beach Hotel, Accra',
    shortDescription:
      'Full-day workshop ahead of eLearning Africa 2026 bridging indigenous knowledge systems with digital transformation.',
    overview: [
      'Part of the Students Dialogue on Skills, Employability and Entrepreneurship, this pre-conference workshop brought together students, educators, innovators and policymakers to explore how Africa can connect indigenous knowledge systems with digital generation innovation.',
    ],
    organisersAndPartners: ['All-Africa Students Union (AASU)'],
    registrationNote: 'Completed on 3 June 2026.',
  },
  {
    id: 'event-inspire-tour-2026',
    slug: 'aasu-inspire-tour-ho-west-2026',
    workflowStatus: 'published',
    lifecycleStatus: 'completed',
    title: 'AASU Inspire Tour: Pre-Tertiary Schools Edition (Ho West)',
    edition: 'Ho West Edition',
    seriesSlug: 'aasu-inspire-tour',
    eventType: 'Programmes',
    programmeTag: 'AASU Inspire Tour',
    prioritySlug: 'education-and-students-rights',
    dateDisplay: '24 April 2026',
    timeDisplay: '09:00 GMT',
    timezone: 'GMT (UTC+0)',
    startIso: '2026-04-24T09:00:00Z',
    endIso: '2026-04-24T15:00:00Z',
    year: '2026',
    monthKey: '2026-04',
    format: 'In-Person',
    venue: 'Selected Basic & Junior High Schools, Ho West Constituency',
    cityOrPlatform: 'Ho West, Volta Region',
    country: 'Ghana',
    region: 'West Africa',
    coverImage: '/images/events/inspire-tour-2026.webp',
    coverImageAlt: 'AASU Inspire Tour Pre-Tertiary Schools Edition in Ho West',
    shortDescription:
      'Strategic outreach by the Education & Students\u2019 Rights Unit equipping pre-tertiary learners with foundational leadership skills and awareness.',
    overview: [
      "Presented through AASU's Education & Students' Rights Working Unit, the Ho West edition of the AASU Inspire Tour engaged basic and junior high school learners in leadership, discipline and student rights awareness.",
    ],
    organisersAndPartners: [
      'All-Africa Students Union (AASU) Education & Students\u2019 Rights Unit',
    ],
    officialReports: [
      {
        title: "Education & Students' Rights Publication (PDF)",
        fileUrl: '/documents/aasu-esr-publication.pdf',
      },
    ],
    registrationNote: 'Outreach completed on 24 April 2026.',
  },
  {
    id: 'event-earthday-2026',
    slug: 'earth-day-webinar-renewable-energy-2026',
    workflowStatus: 'published',
    lifecycleStatus: 'completed',
    title: 'Earth Day Webinar: Renewable Energy and Sustainable Practices',
    eventType: 'Meetings',
    programmeTag: 'Climate Action & Sustainability',
    prioritySlug: 'climate-action-and-environmental-sustainability',
    dateDisplay: '22 April 2026',
    timeDisplay: '11:00 - 12:00 GMT',
    timezone: 'GMT (UTC+0)',
    startIso: '2026-04-22T11:00:00Z',
    endIso: '2026-04-22T12:00:00Z',
    year: '2026',
    monthKey: '2026-04',
    format: 'Online',
    venue: 'Microsoft Teams',
    cityOrPlatform: 'Online',
    country: 'Continental',
    region: 'Continental (Online)',
    coverImage: '/images/events/earthday-webinar-2026.webp',
    coverImageAlt:
      'AASU Earth Day Webinar on Renewable Energy and Sustainable Practices',
    shortDescription:
      'Continental online session under the theme Our Power, Our Planet featuring special remarks from AASU Secretary-General Divine Edem Kwadzodeh.',
    overview: [
      'Marking Earth Day 2026 under the theme "Our Power, Our Planet," this webinar explored youth-driven renewable energy solutions and sustainable campus practices across Africa.',
    ],
    speakers: [
      {
        name: 'Divine Edem Kwadzodeh',
        role: 'Secretary-General, All-Africa Students Union',
      },
    ],
    organisersAndPartners: ['All-Africa Students Union (AASU)'],
    registrationNote: 'Webinar completed on 22 April 2026.',
  },
  {
    id: 'event-nels-partners-meeting-2026',
    slug: 'nels-3rd-strategic-partners-meeting-2026',
    workflowStatus: 'published',
    lifecycleStatus: 'completed',
    title: 'NELS 3rd Strategic Partners Meeting',
    edition: '3rd Consortium Meeting',
    seriesSlug: 'nels-strategic-partners-meeting',
    eventType: 'Meetings',
    programmeTag: 'Next Level Skills for Student Leaders (NELS)',
    prioritySlug: 'capacity-building-skills-development-and-employability',
    dateDisplay: 'March 2026',
    timeDisplay: 'Multi-day consortium meeting',
    timezone: 'GMT (UTC+0)',
    startIso: '2026-03-26T09:00:00Z',
    endIso: '2026-03-28T17:00:00Z',
    year: '2026',
    monthKey: '2026-03',
    format: 'In-Person',
    venue: 'University of Professional Studies, Accra (UPSA)',
    cityOrPlatform: 'Accra',
    country: 'Ghana',
    region: 'West Africa',
    coverImage: '/images/web/nels-breakout.webp',
    coverImageAlt:
      'Consortium partners collaborating during the NELS 3rd Strategic Partners Meeting in Accra',
    shortDescription:
      'African and European consortium partners convened in Accra to advance the Erasmus+ Next Level Skills for Student Leaders curriculum.',
    overview: [
      'Hosted at the University of Professional Studies, Accra (UPSA), the 3rd Strategic Project Meeting of the NELS initiative brought together consortium partners across Europe and Africa to review training modules, peer-learning outcomes and intercultural leadership exchanges.',
    ],
    organisersAndPartners: [
      'All-Africa Students Union (AASU)',
      'University of Professional Studies, Accra (UPSA)',
      'University of Cape Coast (UCC)',
      'University of Applied Sciences Upper Austria (FH OÖ)',
      "European Students' Union (ESU)",
      'Global Student Forum (GSF)',
    ],
    relatedNewsSlugs: ['upsa-nels-strategic-meeting-2026'],
    relatedAlbumSlug: 'nels-partners-meeting',
    registrationNote: 'Consortium meeting completed in March 2026.',
  },
  {
    id: 'event-inauguration-2026',
    slug: 'aasu-honours-and-inauguration-ceremony-2026',
    workflowStatus: 'published',
    lifecycleStatus: 'completed',
    title: 'Historic AASU Honours and Inauguration Ceremony 2026',
    edition: '2026-2029 Administration',
    eventType: 'Institutional Engagements',
    summitClassification: 'AASU Flagship Summit',
    programmeTag: 'Continental Governance',
    prioritySlug: 'democracy-good-governance-peace-and-security',
    dateDisplay: '30 January 2026',
    timeDisplay: '13:00 GMT',
    timezone: 'GMT (UTC+0)',
    startIso: '2026-01-30T13:00:00Z',
    endIso: '2026-01-30T17:00:00Z',
    year: '2026',
    monthKey: '2026-01',
    format: 'In-Person',
    venue: 'Conference Auditorium, Ministry of Foreign Affairs',
    cityOrPlatform: 'Accra',
    country: 'Ghana',
    region: 'West Africa',
    coverImage: '/images/web/inauguration-2026.webp',
    coverImageAlt:
      'AASU Executive Committee at the 2026 Honours and Inauguration Ceremony in Accra',
    shortDescription:
      'Official handing-over, honours and inauguration ceremony for the 2026-2029 Executive Committee under the theme Reimagining Africa\u2019s Education Future.',
    overview: [
      'Held at the Conference Auditorium of the Ministry of Foreign Affairs in Accra under the theme "Reimagining Africa\'s Education Future," the ceremony formally transitioned leadership to the 2026-2029 Executive Committee elected at the 14th Elective Congress.',
      'Diplomats, student leaders, institutional partners and stakeholders from across the continent joined to celebrate continuity, democratic governance and Pan-African solidarity.',
    ],
    organisersAndPartners: [
      'All-Africa Students Union (AASU)',
      'Ministry of Foreign Affairs, Republic of Ghana',
    ],
    relatedNewsSlugs: ['14th-congress-elections-final-phase-2025'],
    officialReports: [
      {
        title: 'Election Guidelines for the 14th Elective Congress (PDF)',
        fileUrl: '/documents/aasu-14th-congress-election-guidelines.pdf',
      },
      {
        title: 'AASU Annual Report 2025 (PDF)',
        fileUrl: '/documents/aasu-annual-report-2025.pdf',
      },
    ],
    registrationNote: 'Ceremony completed on 30 January 2026.',
  },
  {
    id: 'event-learning-planet-2026',
    slug: 'learning-planet-festival-2026-youth-session',
    workflowStatus: 'published',
    lifecycleStatus: 'completed',
    title: 'Learning Planet Festival 2026: Students & Youth Session',
    eventType: 'Programmes',
    programmeTag: 'Green Skills & ACQF',
    prioritySlug: 'climate-action-and-environmental-sustainability',
    dateDisplay: '27 January 2026',
    timeDisplay: '10:00 - 11:30 GMT',
    timezone: 'GMT (UTC+0)',
    startIso: '2026-01-27T10:00:00Z',
    endIso: '2026-01-27T11:30:00Z',
    year: '2026',
    monthKey: '2026-01',
    format: 'Online',
    venue: 'Online via Zoom',
    cityOrPlatform: 'Online',
    country: 'Continental',
    region: 'Continental (Online)',
    coverImage: '/images/events/learning-planet-2026.webp',
    coverImageAlt:
      'Learning Planet Festival 2026 Students and Youth Session on Green Skills',
    shortDescription:
      'Online session exploring Learning to Care for People, Livelihoods and the Planet through Green Skills and Qualifications.',
    overview: [
      'Hosted as part of the Learning Planet Festival 2026, this interactive session examined how green skills and qualification frameworks support green jobs and inclusive growth for African youth.',
    ],
    organisersAndPartners: [
      'All-Africa Students Union (AASU)',
      'ACQF & ETF Green Skills Partnership',
    ],
    relatedNewsSlugs: ['acqf-greening-skills-qualifications-2026'],
    officialReports: [
      {
        title: 'Toolkit on Greening Skills and Qualifications in Africa (2026)',
        fileUrl: '/documents/acqf-toolkit-greening-skills.pdf',
      },
    ],
    registrationNote: 'Session completed on 27 January 2026.',
  },
  {
    id: 'event-haqaa3-workshop-2025',
    slug: 'aasu-haqaa3-workshop-intra-africa-mobility-2025',
    workflowStatus: 'published',
    lifecycleStatus: 'completed',
    title: 'AASU - HAQAA3 Workshop on Student-led Case Studies',
    eventType: 'Programmes',
    programmeTag: 'HAQAA3 & Intra-Africa Mobility',
    prioritySlug: 'migration-mobility-and-exchanges',
    dateDisplay: '8 December 2025',
    timeDisplay: '07:00 GMT',
    timezone: 'GMT (UTC+0)',
    startIso: '2025-12-08T07:00:00Z',
    endIso: '2025-12-08T14:00:00Z',
    year: '2025',
    monthKey: '2025-12',
    format: 'Hybrid',
    venue: 'Press Centre, Ministry of Foreign Affairs & Zoom',
    cityOrPlatform: 'Accra / Online',
    country: 'Ghana',
    region: 'West Africa',
    coverImage: '/images/events/haqaa3-workshop-2025.webp',
    coverImageAlt:
      'AASU - HAQAA3 Workshop on Student-led Case Studies in Accra',
    shortDescription:
      'Hybrid workshop themed Pathways Across Borders: Understanding and Documenting Intra-Africa Mobility.',
    overview: [
      'Bringing together student leaders, quality assurance experts and higher education policymakers in Accra and online, this HAQAA3 workshop focused on documenting student-led case studies on intra-African academic mobility.',
    ],
    organisersAndPartners: [
      'All-Africa Students Union (AASU)',
      'HAQAA3 Initiative',
    ],
    registrationNote: 'Workshop completed on 8 December 2025.',
  },
  {
    id: 'event-agribusiness-forum-2025',
    slug: 'ghana-agribusiness-future-forum-2025',
    workflowStatus: 'published',
    lifecycleStatus: 'completed',
    title: 'The Ghana Agribusiness Future Forum',
    eventType: 'Conferences',
    programmeTag: 'Employability & Sustainable Agriculture',
    prioritySlug: 'climate-action-and-environmental-sustainability',
    dateDisplay: '27 November 2025',
    timeDisplay: '13:00 GMT',
    timezone: 'GMT (UTC+0)',
    startIso: '2025-11-27T13:00:00Z',
    endIso: '2025-11-27T17:00:00Z',
    year: '2025',
    monthKey: '2025-11',
    format: 'In-Person',
    venue: 'UPSA LBC Auditorium',
    cityOrPlatform: 'Accra',
    country: 'Ghana',
    region: 'West Africa',
    coverImage: '/images/events/agribusiness-forum-2025.webp',
    coverImageAlt: 'The Ghana Agribusiness Future Forum at UPSA LBC Auditorium',
    shortDescription:
      'Co-hosted with GRASAG-UPSA on combating illegal mining threats to agribusiness and advancing sustainable food security.',
    overview: [
      'Presented by AASU in partnership with the Graduate Students Association of Ghana (GRASAG-UPSA) under the theme "Innovate. Cultivate. Transform: Combating the Galamsey Threat to Agribusiness and Sustainable Food Security."',
    ],
    organisersAndPartners: [
      'All-Africa Students Union (AASU)',
      'GRASAG-UPSA',
    ],
    registrationNote: 'Forum completed on 27 November 2025.',
  },
  {
    id: 'event-mco-anniversary-2025',
    slug: 'mco-anniversary-2025-kings-college-london',
    workflowStatus: 'published',
    lifecycleStatus: 'completed',
    title: "MCO Anniversary 2025: Future-Generations Strategy (King's College London)",
    eventType: 'Institutional Engagements',
    summitClassification: 'International Forum & Convening',
    programmeTag: 'Global Higher Education Governance',
    prioritySlug: 'education-and-students-rights',
    dateDisplay: '11 November 2025',
    timeDisplay: 'Global Higher Education Session',
    timezone: 'GMT (UTC+0)',
    startIso: '2025-11-11T10:00:00Z',
    endIso: '2025-11-11T16:00:00Z',
    year: '2025',
    monthKey: '2025-11',
    format: 'Hybrid',
    venue: "Bush House, Strand Campus, King's College London",
    cityOrPlatform: 'London',
    country: 'United Kingdom',
    region: 'International',
    coverImage: '/images/news/mco-london-2025.webp',
    coverImageAlt:
      "MCO Anniversary 2025 session at King's College London featuring AASU",
    shortDescription:
      'AASU Secretary-General addressed global university leaders on strengthening student engagement and value-driven higher education.',
    overview: [
      "As part of the Magna Charta Universitatum (MCO) Anniversary 2025 at King's College London, AASU's Secretary-General contributed to the Future-Generations Strategy session examining what universities are for and how student representation strengthens institutional accountability.",
    ],
    speakers: [
      {
        name: 'Secretary-General of AASU',
        role: 'All-Africa Students Union',
      },
    ],
    organisersAndPartners: [
      'Magna Charta Observatory (MCO)',
      "King's College London",
      'All-Africa Students Union (AASU)',
    ],
    relatedSpeechSlug: 'mco-anniversary-2025-kings-college-london',
    relatedVideoId: 'mco-anniversary-2025',
    registrationNote: 'Completed on 11 November 2025. Official recording available.',
  },
]

export function getPublishedEvents(): EventRecord[] {
  return VERIFIED_EVENTS.filter((e) => e.workflowStatus === 'published')
}

export function getEventBySlug(slug?: string): EventRecord | undefined {
  return getPublishedEvents().find((e) => e.slug === slug)
}

export function getUpcomingEvents(): EventRecord[] {
  return getPublishedEvents()
    .filter(
      (e) => e.lifecycleStatus === 'upcoming' || e.lifecycleStatus === 'ongoing',
    )
    .sort((a, b) => a.startIso.localeCompare(b.startIso))
}

export function getPastEvents(): EventRecord[] {
  return getPublishedEvents()
    .filter((e) => e.lifecycleStatus === 'completed')
    .sort((a, b) => b.startIso.localeCompare(a.startIso))
}

export function getMajorSummits(): EventRecord[] {
  return getPublishedEvents().filter((e) => Boolean(e.summitClassification))
}
