export interface AboutEntryCard {
  id: string
  title: string
  description: string
  href: string
  image: string
  imageAlt: string
}

export interface CoreValueItem {
  title: string
  description: string
}

export interface MandatePillar {
  title: string
  description: string
}

export interface HistoricalMilestone {
  id: string
  year: string
  period: '1970s' | '1980s-1990s' | '2000s-Present'
  title: string
  location: string
  summary: string
}

export interface ArchivePhotoItem {
  id: string
  period: 'Legacy Archive' | 'Continental Dialogues' | 'Recent Engagements'
  src: string
  alt: string
  caption: string
  year: string
}

export interface PastLeaderRecord {
  id: string
  name: string
  position: string
  period: string
  photo?: string
  placeholderNote?: string
}

export interface GovernanceOrgan {
  id: string
  title: string
  roleLabel: string
  summary: string
  details: string[]
}

export interface LeadershipProfile {
  id: string
  name: string
  position: string
  country: string
  region: string
  portrait: string
  term: string
  bio?: string
}

export interface SecretariatMember {
  id: string
  name: string
  position: string
  portrait?: string
}

export interface GovernanceDocument {
  id: string
  title: string
  category: string
  year: string
  description: string
  fileUrl?: string
  placeholderStatus?: string
}

export type PartnerCategoryName =
  | 'Strategic Partners'
  | 'Academic & Education Partners'
  | 'Development & NGO Partners'
  | 'Programme & Event Partners'

export interface InstitutionalPartnerRecord {
  name: string
  category: PartnerCategoryName
  description: string
  collaboration: string
  url?: string
  logo?: string
}

export interface CollaborationStory {
  id: string
  partner: string
  title: string
  summary: string
  image: string
  imageAlt: string
  href: string
  external?: boolean
}

export const ABOUT_ENTRY_CARDS: AboutEntryCard[] = [
  {
    id: 'who-we-are',
    title: 'Who We Are',
    description:
      'Our institutional identity, vision, mission, core values and continental mandate.',
    href: '/about/who-we-are',
    image: '/images/web/hero-asw.webp',
    imageAlt:
      'All-Africa Students Union representatives speaking at Africa Skills Week alongside African Union and Ghana flags',
  },
  {
    id: 'history-legacy',
    title: 'History & Legacy',
    description:
      'From our founding in Kumasi in 1972 to more than five decades of African student solidarity.',
    href: '/about/history-legacy',
    image: '/images/web/students-letters.webp',
    imageAlt:
      'African students holding large red AASU letters during a student solidarity gathering',
  },
  {
    id: 'governance',
    title: 'Governance',
    description:
      'Congress, the elected Executive Committee, the Secretariat in Accra and governing instruments.',
    href: '/about/governance',
    image: '/images/web/inauguration-2026.webp',
    imageAlt:
      'All-Africa Students Union Executive Committee leadership at the 2026 Inauguration and Honours Ceremony',
  },
  {
    id: 'partners',
    title: 'Partners & Institutional Relations',
    description:
      'Continental and international cooperation with the African Union, UNESCO, universities and partners.',
    href: '/about/partners',
    image: '/images/web/nels-breakout.webp',
    imageAlt:
      'International partners collaborating during the NELS 3rd Strategic Partners Meeting in Ghana',
  },
]

export const WHO_WE_ARE_DATA = {
  heroTitle: 'Who We Are',
  heroSubtitle:
    'The principal continental body representing the interests, aspirations and collective voice of African students since 1972.',
  overviewParagraphs: [
    'Founded in 1972 in Kumasi, Ghana, the All-Africa Students Union (AASU) is the continental representative organisation of African students, bringing together national and sub-national student unions across North, West, Central, East and Southern Africa.',
    'As an autonomous, democratic and student-led institution, AASU operates at the intersection of education, policy and youth development. The Union advocates for students\u2019 rights, engages governments, regional bodies and international organisations, and promotes student participation in the political, social and economic development of Africa.',
    'Beyond representation, AASU is a continental movement that fosters solidarity, builds leadership capacity and empowers young people to shape inclusive societies across Africa.',
  ],
  vision:
    'A united, empowered and influential African student movement shaping inclusive, equitable and transformative education systems across the continent.',
  mission:
    'To mobilise, represent and strengthen African students by advocating for accessible and quality education, promoting student rights and welfare, and influencing policies at national, regional and global levels.',
  coreValues: [
    {
      title: 'Unity',
      description: 'Strengthening solidarity and cooperation among student unions across all five African regions.',
    },
    {
      title: 'Equity & Inclusion',
      description: 'Promoting fair, inclusive and equal access to quality education and leadership.',
    },
    {
      title: 'Advocacy',
      description: 'Amplifying African student voices in national, continental and international policy spaces.',
    },
    {
      title: 'Integrity',
      description: 'Upholding transparency, democratic accountability and responsible student governance.',
    },
    {
      title: 'Pan-Africanism',
      description: 'Advancing continental integration, shared identity and collective African progress.',
    },
  ] as CoreValueItem[],
  mandateIntro:
    'AASU delivers its mandate through interconnected institutional pillars that keep the Union responsive to the evolving needs of African students.',
  mandatePillars: [
    {
      title: 'Advocacy & Student Rights',
      description:
        'Campaigning for the protection of students\u2019 rights, academic freedom and democratic education policies.',
    },
    {
      title: 'Capacity Development',
      description:
        'Equipping student leaders with practical skills through summits, workshops, peer learning and training.',
    },
    {
      title: 'Research & Knowledge',
      description:
        'Producing evidence-based toolkits, policy briefs and reports to inform institutional dialogue.',
    },
    {
      title: 'Continental Networking',
      description:
        'Connecting national and sub-national student unions across borders to build common positions.',
    },
    {
      title: 'Institutional Partnerships',
      description:
        'Collaborating with governments, the African Union, academic institutions and global organisations.',
    },
  ] as MandatePillar[],
}

export const HISTORICAL_MILESTONES: HistoricalMilestone[] = [
  {
    id: 'kumasi-1972',
    year: '1972',
    period: '1970s',
    title: 'Founding and First Congress',
    location: 'Kumasi, Ghana',
    summary:
      'The constitutive First Congress of AASU was held at the University of Science and Technology (now Kwame Nkrumah University of Science and Technology, KNUST) in Kumasi, Ghana, uniting student representatives across Africa.',
  },
  {
    id: 'early-congresses-1973-1976',
    year: '1973-1976',
    period: '1970s',
    title: 'Continental Expansion and Liberation Solidarity',
    location: 'Dar es Salaam, Alexandria & Accra',
    summary:
      'Subsequent congresses in Dar es Salaam, Alexandria and Accra expanded AASU rapidly, welcoming national student organisations alongside student sections of liberation movements including the ANC and SWAPO.',
  },
  {
    id: 'addis-ababa-1982',
    year: '1982',
    period: '1980s-1990s',
    title: 'Declaration of African Students\u2019 Day (June 16)',
    location: 'Addis Ababa, Ethiopia',
    summary:
      'At its Sixth Congress in Addis Ababa, AASU declared June 16 as African Students\u2019 Day in honour of the pupils of the 1976 Soweto Uprising and all African students standing for justice and educational freedom.',
  },
  {
    id: 'consolidation-1987-1992',
    year: '1987-1992',
    period: '1980s-1990s',
    title: 'Consolidation Across Southern and West Africa',
    location: 'Luanda, Angola & Accra, Ghana',
    summary:
      'The Seventh Congress in Luanda (1987) and Eighth Congress in Accra (1992) deepened continental coordination and solidified AASU\u2019s institutional leadership.',
  },
  {
    id: 'reorganisation-2000',
    year: '2000+',
    period: '2000s-Present',
    title: 'Reorganisation and Institutional Renewal',
    location: 'Tripoli, Libya & Accra, Ghana',
    summary:
      'Following the Ninth Congress in Tripoli (2000) and periods of internal restructuring, the Tenth Congress in Accra marked a pivotal renewal of unity and Secretariat operations.',
  },
  {
    id: 'fourteenth-congress-2025-2026',
    year: '2025-2026',
    period: '2000s-Present',
    title: '14th Elective Congress and 2026-2029 Administration',
    location: 'Continental & Accra Secretariat',
    summary:
      'Conducted in two phases concluding in December 2025, the 14th Elective Congress ushered in the 2026-2029 Executive Committee and inaugurated a renewed programme of continental advocacy, green skills and student leadership.',
  },
]

export const ARCHIVE_GALLERY: ArchivePhotoItem[] = [
  {
    id: 'arch-1',
    period: 'Legacy Archive',
    src: '/images/web/students-letters.webp',
    alt: 'Students holding large red AASU letters during a student solidarity gathering',
    caption: 'Student solidarity gathering with AASU emblem letters',
    year: 'Archive',
  },
  {
    id: 'arch-2',
    period: 'Continental Dialogues',
    src: '/images/web/hero-asw.webp',
    alt: 'AASU delegates speaking on stage during Africa Skills Week alongside AU and Ghana flags',
    caption: 'AASU representation at Africa Skills Week (African Union)',
    year: '2024',
  },
  {
    id: 'arch-3',
    period: 'Continental Dialogues',
    src: '/images/web/au-education-2026.webp',
    alt: 'AASU speaker at the Innovating Education in Africa 2026 Policy Dialogue in Addis Ababa',
    caption: 'Innovating Education in Africa Policy Dialogue, Addis Ababa',
    year: '2026',
  },
  {
    id: 'arch-4',
    period: 'Recent Engagements',
    src: '/images/web/inauguration-2026.webp',
    alt: 'AASU Executive Committee at the 2026 Inauguration and Honours Ceremony',
    caption: 'AASU Inauguration and Honours Ceremony',
    year: '2026',
  },
  {
    id: 'arch-5',
    period: 'Recent Engagements',
    src: '/images/web/leadershift-audience.webp',
    alt: 'Student leaders participating in the AASU Leader-Shift Summit',
    caption: 'AASU Leader-Shift Summit, Accra',
    year: '2026',
  },
  {
    id: 'arch-6',
    period: 'Recent Engagements',
    src: '/images/web/beach-cleanup-group.webp',
    alt: 'AASU student volunteers after a coastal beach clean-up sustainability drive',
    caption: 'AASU Coastal Environmental Sustainability Drive',
    year: '2026',
  },
]

export const PAST_LEADERSHIP_RECORDS: PastLeaderRecord[] = [
  {
    id: 'past-presidents-archive',
    name: 'Past Presidents Archive (1972-2025)',
    position: 'Presidents of the All-Africa Students Union',
    period: '1972-2025',
    placeholderNote:
      'Verified chronological records and official portraits of past AASU Presidents are being compiled by the Secretariat archive for publication.',
  },
  {
    id: 'past-secgen-archive',
    name: 'Past Secretaries General Archive (1972-2025)',
    position: 'Secretaries General of AASU',
    period: '1972-2025',
    placeholderNote:
      'Verified terms in office and official archival portraits of past Secretaries General are awaiting final historical confirmation.',
  },
  {
    id: 'historical-delegates-archive',
    name: 'Founding Delegates of Kumasi 1972',
    position: 'Constitutive Congress Representatives',
    period: '1972',
    placeholderNote:
      'Official archival roster and photographs from the First Congress at UST (KNUST), Kumasi will be published upon Secretariat verification.',
  },
]

export const GOVERNANCE_ORGANS: GovernanceOrgan[] = [
  {
    id: 'congress',
    title: 'The Congress',
    roleLabel: 'Highest Decision-Making Organ',
    summary:
      'The Congress is the supreme organ of the All-Africa Students Union, bringing together accredited national and sub-national member unions to adopt continental policies, resolutions and elect Union leadership.',
    details: [
      'Convenes member unions across North, West, Central, East and Southern Africa.',
      'Adopts strategic resolutions, constitutional amendments and policy mandates.',
      'Elects the Executive Committee through transparent continental electoral processes, most recently the 14th Elective Congress (concluded December 2025 for the 2026-2029 term).',
    ],
  },
  {
    id: 'executive-committee',
    title: 'Executive Committee',
    roleLabel: 'Second Highest Organ of the Union',
    summary:
      'The Executive Committee assumes responsibility for executing all policies and programmes adopted by the Congress and meets annually with representation from every African sub-region.',
    details: [
      'Comprises elected continental officers, five Regional Vice Presidents, five Regional Executive Committee Members and thematic Secretaries.',
      'Ensures balanced regional representation across North, West, Central, East and Southern Africa.',
      'Oversees strategic implementation and continental representation between Congresses.',
    ],
  },
  {
    id: 'secretariat',
    title: 'The Secretariat',
    roleLabel: 'Permanent Administrative & Operational Headquarters',
    summary:
      'Hosted in Accra, Ghana, the Secretariat coordinates the day-to-day administration, programmes, communications, research and institutional partnerships of the Union.',
    details: [
      'Located at No. 10 Asante Mireku Avenue, Westlands, Accra, Ghana.',
      'Led administratively by the Office of the Secretary General.',
      'Supports member unions, programme delivery, policy dialogues and official diplomatic engagement.',
    ],
  },
]

// Verified 2026-2029 Executive Committee sourced from aasu/src/pages/ExecutiveCommitteePage.jsx
export const EXECUTIVE_COMMITTEE: LeadershipProfile[] = [
  {
    id: 'osisiogu-osikenyi',
    name: 'Osisiogu Osikenyi Enyinnaya',
    position: 'President',
    country: 'Nigeria',
    region: 'Continental Leadership',
    portrait: '/images/leadership/1-01.webp',
    term: '2026-2029',
  },
  {
    id: 'divine-edem-kwadzodeh',
    name: 'Divine Edem Kwadzodeh',
    position: 'Secretary General',
    country: 'Ghana',
    region: 'Continental Leadership',
    portrait: '/images/leadership/3-01.webp',
    term: '2026-2029',
  },
  {
    id: 'maravilha-kapaia',
    name: 'Maravilha Kapaia',
    position: 'Deputy President',
    country: 'Angola',
    region: 'Continental Leadership',
    portrait: '/images/leadership/2-01.webp',
    term: '2026-2029',
  },
  {
    id: 'alistar-pfunye',
    name: 'Alistar Pfunye',
    position: 'Deputy Secretary General',
    country: 'Zimbabwe',
    region: 'Continental Leadership',
    portrait: '/images/leadership/4-01.webp',
    term: '2026-2029',
  },
  {
    id: 'jaber-maataoui',
    name: 'Jaber Maataoui',
    position: 'Vice President for North Africa',
    country: 'Morocco',
    region: 'North Africa',
    portrait: '/images/leadership/jaber-maataoui-01.webp',
    term: '2026-2029',
  },
  {
    id: 'rosalia-djedjo',
    name: 'Rosália Djedjo',
    position: 'Vice President for West Africa',
    country: 'Guinea-Bissau',
    region: 'West Africa',
    portrait: '/images/leadership/5-01.webp',
    term: '2026-2029',
  },
  {
    id: 'crescence-naomie-mban-ny',
    name: 'Créscence Naomie Mban-ny',
    position: 'Vice President for Central Africa',
    country: 'Cameroon',
    region: 'Central Africa',
    portrait: '/images/leadership/crescence-naomie-mban-ny-01.webp',
    term: '2026-2029',
  },
  {
    id: 'valentine-mugun-chepkoech',
    name: 'Valentine Mugun Chepkoech',
    position: 'Vice President for East Africa',
    country: 'Kenya',
    region: 'East Africa',
    portrait: '/images/leadership/valentine-01.webp',
    term: '2026-2029',
  },
  {
    id: 'buthanani-thobela',
    name: 'Buthanani Thobela',
    position: 'Vice President for Southern Africa',
    country: 'South Africa',
    region: 'Southern Africa',
    portrait: '/images/leadership/buthanani-thobela-01.webp',
    term: '2026-2029',
  },
  {
    id: 'habiba-mohamed-abdallah',
    name: 'Habiba Mohamed Abdallah',
    position: 'Executive Committee Member for North Africa',
    country: 'Egypt',
    region: 'North Africa',
    portrait: '/images/leadership/habiba-mohamed-mohamed-ibraheim-01.webp',
    term: '2026-2029',
  },
  {
    id: 'oumu-sall',
    name: 'Oumu Sall',
    position: 'Executive Committee Member for West Africa',
    country: 'Liberia',
    region: 'West Africa',
    portrait: '/images/leadership/oumu-sall-01.webp',
    term: '2026-2029',
  },
  {
    id: 'benita-ndokolo-mfuke',
    name: 'Benita Ndokolo Mfuke',
    position: 'Executive Committee Member for Central Africa',
    country: 'DR Congo',
    region: 'Central Africa',
    portrait: '/images/leadership/benita-ndokolo-mfuke-01.webp',
    term: '2026-2029',
  },
  {
    id: 'stellah-akur-garang',
    name: 'Stellah Akur Garang',
    position: 'Executive Committee Member for East Africa',
    country: 'South Sudan',
    region: 'East Africa',
    portrait: '/images/leadership/stellah-akur-garang-01.webp',
    term: '2026-2029',
  },
  {
    id: 'esther-gomani',
    name: 'Esther Gomani',
    position: 'Executive Committee Member for Southern Africa',
    country: 'Malawi',
    region: 'Southern Africa',
    portrait: '/images/leadership/esther-gomani-01.webp',
    term: '2026-2029',
  },
  {
    id: 'ajavon-kokoe-vanessa',
    name: 'Ajavon Kokoe Vanéssa Augustine',
    position: 'Secretary for Finance and Administration',
    country: 'Togo',
    region: 'Secretaries',
    portrait: '/images/leadership/6-01.webp',
    term: '2026-2029',
  },
  {
    id: 'ben-christ-tresor',
    name: 'Ben-Christ Trésor Saizonou',
    position: "Secretary for Education and Students' Rights",
    country: 'Benin',
    region: 'Secretaries',
    portrait: '/images/leadership/ben-christ-tresor-saizonou-01.webp',
    term: '2026-2029',
  },
  {
    id: 'amadou-jobarteh',
    name: 'Amadou B. Jobarteh',
    position: 'Secretary for Press and Information',
    country: 'The Gambia',
    region: 'Secretaries',
    portrait: '/images/leadership/amadou-b.-jobarteh-01.webp',
    term: '2026-2029',
  },
  {
    id: 'boago-dodo-chingapani',
    name: 'Boago Dodo Chingapani',
    position: 'Secretary for Gender & Affirmative Action',
    country: 'Botswana',
    region: 'Secretaries',
    portrait: '/images/leadership/boago-dodo-chingapani-01.webp',
    term: '2026-2029',
  },
]

// Verified Secretariat & Technical Team sourced from aasu/src/pages/TechnicalTeamPage.jsx
export const SECRETARIAT_TEAM: SecretariatMember[] = [
  { id: 'jemilatu-bawa', name: 'Jemilatu Mamshie Bawa', position: 'Chief Operating Officer', portrait: '/images/secretariat/mrs-bawa.webp' },
  { id: 'bismark-kudoafor', name: 'Bismark Amefianu Kudoafor', position: 'Deputy Chief Operating Officer (Administration)', portrait: '/images/secretariat/cto.webp' },
  { id: 'samuel-adonteng', name: 'Samuel Sasu Adonteng', position: 'Deputy Chief Operating Officer (Technical)', portrait: '/images/secretariat/cco.webp' },
  { id: 'james-kodjie', name: 'James Kodjie', position: 'Chief Programmes Officer', portrait: '/images/secretariat/cpo.webp' },
  { id: 'akua-adusei', name: 'Akua Asantewaa Adusei', position: 'Chief Procurement Officer' },
  { id: 'eric-chinery', name: 'Eric Chinery', position: 'Chief IT Officer', portrait: '/images/secretariat/it-officer.webp' },
  { id: 'hilda-osei-poku', name: 'Hilda Osei-Poku', position: 'Programmes Officer for Migration, Mobility and Exchanges', portrait: '/images/secretariat/pom.webp' },
  { id: 'raymond-frimpong', name: 'Raymond Frimpong', position: 'Programmes Officer, Democracy, Good Governance, Peace and Security' },
  { id: 'memunatu-abubakari', name: 'Memunatu Abubakari', position: 'Programmes Officer for Gender Equity and Social Inclusion', portrait: '/images/secretariat/pog.webp' },
  { id: 'belinda-mensah', name: 'Belinda Mensah', position: 'Programmes Officer, Environment and Climate Action', portrait: '/images/secretariat/belinda.webp' },
  { id: 'eunice-kaanye', name: 'Eunice Kaanye', position: "Assistant Programmes Officer for Education and Students' Rights", portrait: '/images/secretariat/eunice.webp' },
  { id: 'walter-siameh', name: 'Walter Nana Owusu Annoh Siameh', position: "Assistant Programmes Officer for Education and Students' Rights" },
  { id: 'solomon-darko', name: 'Solomon Pobi Darko', position: 'Digital Media & Web Communications Officer', portrait: '/images/secretariat/creative-lead.webp' },
  { id: 'hamdia-suleman', name: 'Hamdia Suleman', position: 'Head of Accounts', portrait: '/images/secretariat/accountant.webp' },
  { id: 'jacob-aryee', name: 'Jacob Aryee', position: 'Assistant Accountant Officer' },
  { id: 'prince-ali', name: 'Prince Teye Ali', position: 'Internal Auditor', portrait: '/images/secretariat/auditer.webp' },
  { id: 'george-sampson-graves', name: 'George Sampson-Graves', position: 'Human Resource Officer', portrait: '/images/secretariat/hr.webp' },
  { id: 'sulemana-shamsia', name: 'Sulemana Atawa Shamsia', position: 'Administrative Secretary', portrait: '/images/secretariat/administrative-sec.webp' },
  { id: 'jasmine-mohammed', name: 'Jasmine Salisu Mohammed', position: 'Protocol Officer', portrait: '/images/secretariat/protocol-officer.webp' },
  { id: 'ramzy-fuseini', name: 'Ramzy Fuseini', position: 'Special Projects and Strategic Initiatives Coordinator' },
  { id: 'solomon-abeka', name: 'Solomon Abeka', position: 'Assistant Branding and Creative Officer' },
  { id: 'stephen-brako', name: 'Stephen Brako', position: 'Estate/Stores Officer' },
  { id: 'ettah-johnson', name: 'Ettah Johnson', position: 'Assistant Photographer and Videographer Officer' },
  { id: 'emmanuel-owusu', name: 'Emmanuel Nyamekye Owusu', position: 'Assistant Editorial and Public Relations Officer' },
  { id: 'jerome-kudolo', name: 'Jerome Kudolo', position: 'Executive Assistant to the Secretary General' },
  { id: 'robert-idan', name: 'Robert Idan', position: 'Principal Driver', portrait: '/images/secretariat/driver-2.webp' },
  { id: 'john-yewenu', name: 'John Yewenu', position: 'Assistant Driver', portrait: '/images/secretariat/driver-1.webp' },
]

export const GOVERNANCE_DOCUMENTS: GovernanceDocument[] = [
  {
    id: 'aasu-constitution',
    title: 'Constitution of the All-Africa Students Union',
    category: 'Governing Instrument',
    year: 'Official Document',
    description:
      'The foundational legal and governance instrument setting out AASU\u2019s membership, organs, rights and democratic procedures.',
    placeholderStatus: 'Awaiting approved official PDF upload from Secretariat',
  },
  {
    id: 'aasu-gender-policy',
    title: 'AASU Gender Policy',
    category: 'Approved Institutional Policy',
    year: 'Official Policy',
    description:
      'Institutional policy framework guiding gender equity, affirmative action and safe inclusion across AASU.',
    fileUrl: '/documents/aasu-gender-policy.pdf',
  },
  {
    id: '14th-congress-guidelines',
    title: 'Election Guidelines for the 14th Elective Congress',
    category: 'Electoral Governance',
    year: '2025',
    description:
      'Official electoral procedures and eligibility framework governing the 14th Elective Congress.',
    fileUrl: '/documents/aasu-14th-congress-election-guidelines.pdf',
  },
  {
    id: '13th-congress-resolutions',
    title: '13th Congress Resolutions',
    category: 'Congress Resolutions',
    year: 'Official Archive',
    description:
      'Adopted policy resolutions and institutional commitments from the 13th Elective Congress.',
    fileUrl: '/documents/aasu-13th-congress-resolutions.pdf',
  },
  {
    id: 'congress-report',
    title: 'AASU Congress Report',
    category: 'Institutional Report',
    year: 'Official Archive',
    description:
      'Comprehensive institutional record of Congress deliberations, representation and outcomes.',
    fileUrl: '/documents/aasu-congress-report.pdf',
  },
]

// Verified institutional partners sourced from aasu/src/pages/PartnersPage.jsx and verified partner assets
export const VERIFIED_PARTNERS_DIRECTORY: InstitutionalPartnerRecord[] = [
  {
    name: 'African Union (AU) & African Union Commission',
    category: 'Strategic Partners',
    description: 'The primary continental body for Africa\u2019s integration and development.',
    collaboration:
      'AASU serves as a key youth stakeholder contributing to Agenda 2063 and the Continental Education Strategy for Africa (CESA).',
    url: 'https://au.int',
  },
  {
    name: 'UNESCO',
    category: 'Strategic Partners',
    description: 'United Nations Educational, Scientific and Cultural Organization.',
    collaboration:
      'Strategic collaboration on Education 2030, recognition of higher education qualifications and youth inclusion.',
    url: 'https://www.unesco.org',
  },
  {
    name: 'European Training Foundation (ETF) & ACQF',
    category: 'Strategic Partners',
    description: 'African Continental Qualifications Framework and European Training Foundation.',
    collaboration:
      'Jointly delivered the ACQF Pilot II resources on Greening Skills and Qualifications in Africa.',
    url: 'https://acqf.africa',
  },
  {
    name: 'Global Student Forum (GSF)',
    category: 'Strategic Partners',
    description: 'The worldwide umbrella body for democratic student unions.',
    collaboration:
      'AASU is a founding member coordinating global advocacy for student rights and public education financing.',
    url: 'https://globalstudentforum.org',
    logo: '/images/partners/gsf.webp',
  },
  {
    name: "European Students' Union (ESU)",
    category: 'Strategic Partners',
    description: 'Continental representative organisation of European student unions.',
    collaboration:
      'Collaborates with AASU on international student leadership capacity building including the NELS initiative.',
    url: 'https://esu-online.org',
    logo: '/images/partners/esu.webp',
  },
  {
    name: 'ECOWAS',
    category: 'Strategic Partners',
    description: 'Economic Community of West African States.',
    collaboration:
      'Partners on regional educational integration, student rights advocacy and peacebuilding in West Africa.',
    url: 'https://ecowas.int',
  },
  {
    name: 'SADC',
    category: 'Strategic Partners',
    description: 'Southern African Development Community.',
    collaboration:
      'Engages in regional policy dialogues on student mobility and harmonisation of qualifications in Southern Africa.',
    url: 'https://www.sadc.int',
  },
  {
    name: 'Ministry of Foreign Affairs, Republic of Ghana',
    category: 'Strategic Partners',
    description: 'Principal diplomatic institution of AASU\u2019s host country.',
    collaboration:
      'Supports student diplomacy, international mobility coordination and diplomatic protocol for continental convenings.',
    url: 'https://mfa.gov.gh',
  },
  {
    name: 'Association of African Universities (AAU)',
    category: 'Academic & Education Partners',
    description: 'The apex organisation for higher education institutions in Africa.',
    collaboration:
      'Co-organises the African Students\u2019 Leadership Summit and collaborates on higher education quality assurance.',
    url: 'https://www.aau.org',
  },
  {
    name: 'University of Cape Coast (UCC)',
    category: 'Academic & Education Partners',
    description: 'Leading public research and teaching university in Ghana.',
    collaboration:
      'Academic partner on NELS leadership development, teacher education standards and student excellence.',
    url: 'https://www.ucc.edu.gh',
    logo: '/images/partners/ucc.webp',
  },
  {
    name: 'African Council for Distance Education (ACDE)',
    category: 'Academic & Education Partners',
    description: 'Continental network promoting open and distance learning across Africa.',
    collaboration:
      'Collaborates on inclusive higher education access and the NELS leadership partnership.',
    logo: '/images/partners/acde.webp',
  },
  {
    name: 'University of Applied Sciences Upper Austria (FH OÖ)',
    category: 'Academic & Education Partners',
    description: 'Leading Austrian university of applied sciences.',
    collaboration:
      'Key academic partner delivering the Next Level Skills for Student Leaders (NELS) curriculum.',
    logo: '/images/partners/fhooe.webp',
  },
  {
    name: 'KCA University',
    category: 'Academic & Education Partners',
    description: 'Higher education institution in Kenya.',
    collaboration: 'Consortium partner supporting the NELS student leadership programme.',
    logo: '/images/partners/kca.webp',
  },
  {
    name: 'University of The Gambia (UTG)',
    category: 'Academic & Education Partners',
    description: 'National public university of The Gambia.',
    collaboration: 'Academic consortium partner supporting student leadership training under NELS.',
    logo: '/images/partners/utg.webp',
  },
  {
    name: 'International Association of Universities (IAU)',
    category: 'Academic & Education Partners',
    description: 'Global association of higher education institutions.',
    collaboration:
      'Works on global higher education policy and student participation in university governance.',
    url: 'https://www.iau-aiu.net',
  },
  {
    name: 'Scholars at Risk Network',
    category: 'Academic & Education Partners',
    description: 'International network protecting threatened scholars and academic freedom.',
    collaboration:
      'Jointly advocates for the protection of student activists and preservation of academic freedom.',
    url: 'https://www.scholarsatrisk.org',
  },
  {
    name: 'UNICEF',
    category: 'Development & NGO Partners',
    description: 'United Nations Children\u2019s Fund.',
    collaboration:
      'Collaborates on children and youth rights advocacy, including International Day of the Girl Child initiatives.',
    url: 'https://www.unicef.org',
  },
  {
    name: 'UNHCR',
    category: 'Development & NGO Partners',
    description: 'United Nations High Commissioner for Refugees.',
    collaboration:
      'Collaborates on the inclusion of refugee students in higher education and protection of displaced youth.',
    url: 'https://www.unhcr.org',
  },
  {
    name: 'GIZ',
    category: 'Development & NGO Partners',
    description: 'German Agency for International Cooperation.',
    collaboration:
      'Supports technical and vocational education (TVET), green skills and youth employability initiatives.',
    url: 'https://www.giz.de',
  },
  {
    name: 'Forum for African Women Educationalists (FAWE)',
    category: 'Development & NGO Partners',
    description: 'Pan-African non-governmental organisation promoting girls\u2019 education.',
    collaboration:
      'Collaborates on gender-transformative education and women\u2019s representation in student leadership.',
    url: 'https://fawe.org',
  },
  {
    name: 'Austrian National Union of Students (ÖH)',
    category: 'Programme & Event Partners',
    description: 'National representative body of students in Austria.',
    collaboration:
      'Co-facilitates peer learning and student organising sessions under the NELS partnership.',
    logo: '/images/partners/oeh.webp',
  },
  {
    name: 'Groningen Declaration Network (GDN)',
    category: 'Programme & Event Partners',
    description: 'Global network advancing digital student data mobility.',
    collaboration:
      'Collaborates on digital credentials and smoother international academic mobility for African students.',
    url: 'https://www.groningendeclaration.org',
  },
  {
    name: 'Global Campaign for Education (GCE)',
    category: 'Programme & Event Partners',
    description: 'Civil society movement promoting the right to education.',
    collaboration:
      'Jointly advocates for public education as a human right and sustainable education financing.',
    url: 'https://campaignforeducation.org',
  },
  {
    name: 'British Council',
    category: 'Programme & Event Partners',
    description: 'International organisation for cultural relations and educational opportunities.',
    collaboration:
      'Collaborates on 21st-century skills training, scholarships and student capacity development.',
    url: 'https://www.britishcouncil.org',
  },
  {
    name: 'Students Organizing for Sustainability International (SOS-I)',
    category: 'Programme & Event Partners',
    description: 'Global student network for sustainability.',
    collaboration:
      'Strategic partner for Greening Skills initiatives and continental climate action workshops.',
    url: 'https://sosi.world',
  },
  {
    name: 'Kofi Annan International Peacekeeping Training Centre (KAIPTC)',
    category: 'Programme & Event Partners',
    description: 'Centre of excellence for peace and security training.',
    collaboration:
      'Partners on Youth, Peace and Security dialogues and student leadership in conflict resolution.',
    url: 'https://www.kaiptc.org',
  },
  {
    name: 'Pan African Youth Union (PAYU)',
    category: 'Programme & Event Partners',
    description: 'Continental coordinating body for youth organisations in Africa.',
    collaboration:
      'Coordinates high-level youth representation at African Union and international summits.',
    url: 'https://payu.org',
  },
]

export const FEATURED_COLLABORATIONS: CollaborationStory[] = [
  {
    id: 'collab-acqf',
    partner: 'European Training Foundation & ACQF',
    title: 'Greening Skills and Qualifications in Africa',
    summary:
      'Joint publication of the 2026 Toolkit, Book of Good Practices and Users\u2019 Engagement Concept Document aligning green skills with African qualifications frameworks.',
    image: '/images/web/cfs-panel.webp',
    imageAlt: 'Climate Forward Summit discussion on green skills and sustainable economies',
    href: '/documents/acqf-toolkit-greening-skills.pdf',
    external: true,
  },
  {
    id: 'collab-nels',
    partner: 'NELS International Consortium',
    title: 'Next Level Skills for Student Leaders (NELS)',
    summary:
      'Multi-partner training, peer learning and cross-border student governance cooperation hosted with African and European universities and student unions.',
    image: '/images/web/nels-breakout.webp',
    imageAlt: 'NELS 3rd Strategic Partners Meeting collaborative breakout session in Ghana',
    href: '/about/governance',
  },
]
