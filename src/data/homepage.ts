import type {
  AfricaRegion,
  HeroSlide,
  InstitutionalPartnerText,
  NavItem,
  NewsArticle,
  OfficialStatement,
  OpportunityCategory,
  OpportunityHighlight,
  PartnerLogo,
  ProgrammeItem,
  PublicationItem,
  StatItem,
  StrategicPriority,
} from '@/types'

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'continental-voice',
    eyebrow: 'All-Africa Students Union · Est. 1972',
    headline: "The Continental Voice of Africa's Students",
    subheading:
      'Representing the interests and aspirations of African students since 1972.',
    image: '/images/editorial/aasu-hero-asw.jpg',
    imageAlt:
      'All-Africa Students Union representatives on stage during Africa Skills Week alongside the African Union and Ghana flags',
    primaryCta: { label: 'Discover AASU', href: '#at-a-glance' },
    secondaryCta: { label: 'Explore Our Work', href: '#priorities' },
  },
  {
    id: 'climate-forward',
    eyebrow: 'Climate Forward Summit · Green Economy',
    headline: 'Student Leadership for a Sustainable Africa',
    subheading:
      'Mobilising African students and partners around climate action, circular economies and green skills.',
    image: '/images/Climate Forward Summit/CFS-142.webp',
    imageAlt:
      'Panelist speaking during the Climate Forward Summit on circular economy and clean energy',
    primaryCta: { label: 'Climate & Green Skills', href: '#programmes' },
    secondaryCta: { label: 'Knowledge Hub', href: '#knowledge-hub' },
  },
  {
    id: 'leader-shift',
    eyebrow: 'Leader-Shift Summit · Capacity Building',
    headline: 'Empowering the Next Generation of Student Leaders',
    subheading:
      'Strengthening institutional capacity, civic leadership and youth participation across African campuses.',
    image: '/images/Leader-Shift Summit/IMG_0378.webp',
    imageAlt:
      'Participants engaged in sessions at the AASU Leader-Shift Summit',
    primaryCta: { label: 'Strategic Priorities', href: '#priorities' },
    secondaryCta: { label: 'Explore Membership', href: '#membership' },
  },
  {
    id: 'nels-ghana',
    eyebrow: 'NELS 3rd Strategic Partners Meeting · Ghana',
    headline: 'Cross-Border Cooperation in Student Governance',
    subheading:
      'Co-creating student leadership training, peer learning and international partnerships through NELS.',
    image:
      '/images/NELS 3rd Strategic Partners Meeting - AASU_Ghana/Day 1/Breakouts/untitled-154.webp',
    imageAlt:
      'Collaborative breakout session on partnerships during the NELS 3rd Strategic Partners Meeting in Ghana',
    primaryCta: { label: 'Discover NELS', href: '#programmes' },
    secondaryCta: { label: 'Our Partners', href: '#partnerships' },
  },
  {
    id: 'beach-cleanup',
    eyebrow: 'Environmental Action · Youth Mobilisation',
    headline: 'From Policy Dialogues to Community Action',
    subheading:
      'African students leading grassroots environmental sustainability and coastal clean-up initiatives.',
    image: '/images/Beach Clean up/IMG_0194.webp',
    imageAlt:
      'AASU student volunteers after a coastal beach clean-up sustainability drive',
    primaryCta: { label: 'Latest from AASU', href: '#latest' },
    secondaryCta: { label: 'Partner With AASU', href: '#partnerships' },
  },
]

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#top' },
  {
    label: 'About',
    href: '#at-a-glance',
    children: [
      { label: 'Who We Are', href: '#at-a-glance', description: 'Institutional identity, vision, mission and mandate' },
      { label: 'History & Legacy', href: '#at-a-glance', description: 'Founded in Kumasi in 1972' },
      { label: 'Governance', href: '#footer', description: 'Congress, Executive Committee and Secretariat' },
      { label: 'Partners & Institutional Relations', href: '#partnerships', description: 'Continental and international relations' },
    ],
  },
  {
    label: 'What We Do',
    href: '#priorities',
    children: [
      { label: 'Our Strategic Priorities', href: '#priorities', description: 'Seven priorities guiding our continental work' },
      { label: 'Programmes & Initiatives', href: '#programmes', description: 'Flagship, ongoing and joint programmes' },
      { label: 'Campaigns & Advocacy', href: '#programmes', description: 'Student rights and education policy advocacy' },
      { label: 'Policy Engagement & Representation', href: '#latest', description: 'Continental and international policy dialogues' },
    ],
  },
  {
    label: 'Membership',
    href: '#membership',
    children: [
      { label: 'Our Membership', href: '#membership', description: 'Representative network across five African regions' },
      { label: 'Member Unions Directory', href: '#regional-explorer', description: 'Verified national and sub-national member unions' },
      { label: 'Regional Membership', href: '#regional-explorer', description: 'North, West, Central, East and Southern Africa' },
      { label: 'Membership & Affiliation', href: '#partnerships', description: 'Categories, eligibility and application procedures' },
    ],
  },
  {
    label: 'News & Media',
    href: '#latest',
    children: [
      { label: 'Latest News', href: '#latest', description: 'Institutional engagements and updates' },
      { label: 'Press Releases & Statements', href: '#statements', description: 'Official statements and public positions' },
      { label: 'Speeches & Addresses', href: '#latest', description: 'Authorised institutional remarks' },
      { label: 'Media Centre', href: '#footer', description: 'Brand assets and press enquiries' },
    ],
  },
  { label: 'Events', href: '#opportunities' },
  { label: 'Knowledge Hub', href: '#knowledge-hub' },
  { label: 'Opportunities', href: '#opportunities' },
  { label: 'Contact', href: '#footer' },
]

export const CONTINENTAL_STATS: StatItem[] = [
  { value: '54', label: 'African Countries', needsConfirmation: true },
  { value: '85+', label: 'Member Unions', needsConfirmation: true },
  { value: '300M+', label: 'Students Represented', needsConfirmation: true },
  { value: '1972', label: 'Year Established' },
]

// Full approved copy preserved in `description` for future inner pages;
// `shortDescription` powers the condensed homepage cards.
export const STRATEGIC_PRIORITIES: StrategicPriority[] = [
  {
    number: '01',
    title: "Education & Students' Rights",
    shortTitle: "Education & Students' Rights",
    shortDescription: 'Equitable quality education, academic freedom and student welfare.',
    description:
      "Championing students' rights and welfare, equitable access to quality education, academic freedom and student participation in education policy and governance.",
    icon: 'education',
    image: '/images/editorial/aasu-au-education-2026.jpg',
    imageAlt: 'AASU representative addressing the Innovating Education in Africa 2026 Policy Dialogue',
    href: '#priorities',
  },
  {
    number: '02',
    title: 'Capacity Building, Skills Development & Employability',
    shortTitle: 'Skills & Employability',
    shortDescription: 'Student leadership, institutional capacity and career readiness.',
    description:
      'Developing student leadership, strengthening institutional capacities and advancing skills, entrepreneurship and employment opportunities for African students.',
    icon: 'skills',
    image: '/images/Leader-Shift Summit/IMG_0378.webp',
    imageAlt: 'Student leaders participating in the AASU Leader-Shift Summit',
    href: '#priorities',
  },
  {
    number: '03',
    title: 'Gender Equity & Social Inclusion',
    shortTitle: 'Gender Equity & Inclusion',
    shortDescription: 'Equal participation and inclusive policies for every student.',
    description:
      'Addressing discrimination and barriers to participation, promoting gender equality and advancing inclusive policies and opportunities for students of all backgrounds.',
    icon: 'gender',
    image: '/images/GGEM/GGEC-73.webp',
    imageAlt: 'Water and Gender community outreach session during the GGEM School Tour',
    href: '#priorities',
  },
  {
    number: '04',
    title: 'Climate Action & Environmental Sustainability',
    shortTitle: 'Climate & Sustainability',
    shortDescription: 'Student-led climate action, sustainability and green skills.',
    description:
      'Advancing student leadership in climate action, environmental protection and sustainability, while promoting green skills and education for a changing world.',
    icon: 'climate',
    image: '/images/Beach Clean up/IMG_0194.webp',
    imageAlt: 'AASU student volunteers leading a coastal beach clean-up campaign',
    href: '#priorities',
  },
  {
    number: '05',
    title: 'Migration, Mobility & Exchanges',
    shortTitle: 'Migration & Mobility',
    shortDescription: 'Safe student mobility, exchanges and qualification recognition.',
    description:
      'Advocating for safe and equitable student mobility, academic exchanges, recognition of qualifications and the rights and welfare of students across borders.',
    icon: 'mobility',
    image:
      '/images/NELS 3rd Strategic Partners Meeting - AASU_Ghana/Day 1/Breakouts/untitled-154.webp',
    imageAlt: 'Intercultural partnership planning at the NELS 3rd Strategic Partners Meeting in Ghana',
    href: '#priorities',
  },
  {
    number: '06',
    title: 'Democracy, Good Governance, Peace & Security',
    shortTitle: 'Governance & Peace',
    shortDescription: 'Democratic values, accountability and student civic participation.',
    description:
      'Promoting democratic values, accountable governance, peacebuilding and the meaningful participation of students in civic and political processes.',
    icon: 'governance',
    image: '/images/editorial/aasu-inauguration-2026.jpg',
    imageAlt: 'AASU democratic student leadership at the 2026 Inauguration and Honours Ceremony',
    href: '#priorities',
  },
  {
    number: '07',
    title: 'Pan-Africanism & African Culture',
    shortTitle: 'Pan-Africanism & Culture',
    shortDescription: 'Continental unity, student solidarity and shared heritage.',
    description:
      "Advancing African unity, student solidarity and continental integration while celebrating Africa's cultural heritage, diversity and shared identity.",
    icon: 'panafricanism',
    image: '/images/editorial/aasu-hero-asw.jpg',
    imageAlt: 'Pan-African student representation alongside African Union and national flags',
    href: '#priorities',
  },
]

// Verified member unions sourced directly from AASU's existing institutional directory (MembershipPage.jsx)
export const AFRICA_REGIONS: AfricaRegion[] = [
  {
    id: 'north',
    name: 'North Africa',
    summary: 'Connecting national student unions and university representative councils across North Africa.',
    unions: [
      { name: 'Union Nationale des Étudiants Algériens (NES)', country: 'Algeria', membershipType: 'Full Member' },
      { name: 'Students Representative Council of Alexandria University', country: 'Egypt', membershipType: 'Associate Member' },
      { name: 'Students Representative Council of Cairo University', country: 'Egypt', membershipType: 'Associate Member' },
      { name: 'American University in Cairo (AUC) Student Government', country: 'Egypt', membershipType: 'Associate Member' },
      { name: 'General Union of Libya Students (GULS)', country: 'Libya', membershipType: 'Full Member' },
      { name: 'Union Nationale des Étudiants Mauritaniens', country: 'Mauritania', membershipType: 'Full Member' },
      { name: 'Union Nationale des Étudiants Marocains', country: 'Morocco', membershipType: 'Full Member' },
      { name: 'Union Générale Tunisienne des Étudiants (UGTE)', country: 'Tunisia', membershipType: 'Full Member' },
    ],
  },
  {
    id: 'west',
    name: 'West Africa',
    summary: 'Home to AASU’s founding in Kumasi (1972) and its continental Secretariat in Accra, Ghana.',
    unions: [
      { name: 'National Union of Ghana Students (NUGS)', country: 'Ghana', membershipType: 'Full Member' },
      { name: 'Graduate Students Association of Ghana (GRASAG)', country: 'Ghana', membershipType: 'Associate Member' },
      { name: 'National Association of Nigerian Students (NANS)', country: 'Nigeria', membershipType: 'Full Member' },
      { name: 'La Fédération Nationale des Étudiants du Bénin (FNEB)', country: 'Benin', membershipType: 'Full Member' },
      { name: "La Fédération Estudiantine et Scolaire de Côte d'Ivoire (FESCI)", country: "Côte d'Ivoire", membershipType: 'Full Member' },
      { name: 'National Union of Gambia Students (NUGS)', country: 'Gambia', membershipType: 'Full Member' },
      { name: "Liberia National Students' Union (LINSU)", country: 'Liberia', membershipType: 'Full Member' },
      { name: 'Association des Élèves et Étudiants du Mali (AEEM)', country: 'Mali', membershipType: 'Full Member' },
      { name: 'National Union of Sierra Leone Students (NUSS)', country: 'Sierra Leone', membershipType: 'Full Member' },
      { name: 'Union Nationale des Étudiants du Togo (UNETO)', country: 'Togo', membershipType: 'Full Member' },
      { name: "Students' Representative Council, Cheikh Anta Diop University", country: 'Senegal', membershipType: 'Associate Member' },
      { name: 'Federação Nacional de Estudantes e Desporto Universitário', country: 'Cape Verde', membershipType: 'Full Member' },
    ],
  },
  {
    id: 'central',
    name: 'Central Africa',
    summary: 'Advancing student solidarity, academic freedom and regional cooperation across Central Africa.',
    unions: [
      { name: "Association des Étudiants de l'Université de Yaoundé", country: 'Cameroon', membershipType: 'Associate Member' },
      { name: 'Association Nationale des Étudiants de Centrafrique', country: 'Central African Republic', membershipType: 'Full Member' },
      { name: 'Union Nationale des Étudiants Tchadiens (UNET)', country: 'Chad', membershipType: 'Full Member' },
      { name: 'Représentation des Étudiants du Congo (R.E.C/RDC)', country: 'DR Congo', membershipType: 'Full Member' },
      { name: 'Mouvement des Élèves et Étudiants du Congo (MEEC)', country: 'Republic of Congo', membershipType: 'Associate Member' },
      { name: 'Union Nationale des Étudiants du Gabon (UNEG)', country: 'Gabon', membershipType: 'Full Member' },
      { name: 'La Universidad Nacional de Guinea Ecuatorial', country: 'Equatorial Guinea', membershipType: 'Full Member' },
      { name: 'Federação Nacional das Associações Académicas da USTP', country: 'São Tomé and Príncipe', membershipType: 'Full Member' },
    ],
  },
  {
    id: 'east',
    name: 'East Africa',
    summary: 'Uniting higher education student unions and youth representatives across Eastern Africa and the Indian Ocean.',
    unions: [
      { name: 'Kenya University Students Organisation (KUSO)', country: 'Kenya', membershipType: 'Full Member' },
      { name: 'Tanzania Higher Learning Institution Students Organisation (TAHLISO)', country: 'Tanzania', membershipType: 'Full Member' },
      { name: 'Ethiopian Higher Education Institutes Students Union (EHEISU)', country: 'Ethiopia', membershipType: 'Full Member' },
      { name: 'Rwanda National Students Association', country: 'Rwanda', membershipType: 'Full Member' },
      { name: 'Burundi National Students Union (BNSU)', country: 'Burundi', membershipType: 'Full Member' },
      { name: 'General Sudanese Students Union (GSSU)', country: 'Sudan', membershipType: 'Full Member' },
      { name: "South Sudanese National Students' Union (SSNSU)", country: 'South Sudan', membershipType: 'Full Member' },
      { name: 'Somalia Higher Education Students Union', country: 'Somalia', membershipType: 'Full Member' },
      { name: 'Council of Students & Youth Movement of Mauritius (COSYM)', country: 'Mauritius', membershipType: 'Full Member' },
      { name: 'Comité Démocratique des Jeunes et des Étudiants de Madagascar', country: 'Madagascar', membershipType: 'Full Member' },
    ],
  },
  {
    id: 'southern',
    name: 'Southern Africa',
    summary: 'Building on a proud legacy of student mobilisation and educational justice across Southern Africa.',
    unions: [
      { name: 'South African Students Congress (SASCO)', country: 'South Africa', membershipType: 'Full Member' },
      { name: 'South African Union of Students (SAUS)', country: 'South Africa', membershipType: 'Associate Member' },
      { name: 'Zimbabwe National Students Union (ZINASU)', country: 'Zimbabwe', membershipType: 'Full Member' },
      { name: 'Zambia National Students Union (ZANASU)', country: 'Zambia', membershipType: 'Full Member' },
      { name: 'Namibian National Students Organisation (NANSO)', country: 'Namibia', membershipType: 'Full Member' },
      { name: 'Botswana United Students Association (BUSA)', country: 'Botswana', membershipType: 'Full Member' },
      { name: 'Malawi National Students Union (MANASU)', country: 'Malawi', membershipType: 'Full Member' },
      { name: 'União dos Estudantes Moçambicanos', country: 'Mozambique', membershipType: 'Full Member' },
      { name: 'United Lesotho Students Association (ULSA)', country: 'Lesotho', membershipType: 'Full Member' },
      { name: 'Swaziland National Union of Students (SNUS)', country: 'Eswatini', membershipType: 'Full Member' },
      { name: "Union Nationale des Étudiants d'Angola", country: 'Angola', membershipType: 'Full Member' },
    ],
  },
]

export const FEATURED_PROGRAMMES: ProgrammeItem[] = [
  {
    id: 'greening-skills',
    title: 'Greening Skills and Qualifications in Africa',
    category: 'ACQF & ETF Partnership',
    shortDescription:
      'Advancing green skills, qualification recognition and lifelong learning for sustainable economies.',
    description:
      'AASU has worked with the European Training Foundation and partners under the African Continental Qualifications Framework initiative to advance discussions on green skills, recognition of qualifications and lifelong learning.',
    secondaryText:
      "The work brings the experiences of learners, educators, employers and communities into conversations about Africa's transition towards sustainable economies.",
    ctaLabel: 'Explore the Initiative',
    href: '#knowledge-hub',
    image: '/images/Climate Forward Summit/CFS-142.webp',
    imageAlt: 'Climate Forward Summit panel on green skills and circular economy in Africa',
    featured: true,
  },
  {
    id: 'nels',
    title: 'Next Level Skills for Student Leaders',
    category: 'NELS Initiative',
    shortDescription:
      'Strengthening student leadership through training, peer learning and international cooperation.',
    description:
      'Through the NELS initiative, AASU and its partners are contributing to the development of student leadership through training, peer learning, research and international cooperation.',
    ctaLabel: 'Discover NELS',
    href: '#partnerships',
    image:
      '/images/NELS 3rd Strategic Partners Meeting - AASU_Ghana/Day 1/Breakouts/untitled-154.webp',
    imageAlt: 'Partners collaborating during the NELS 3rd Strategic Partners Meeting in Ghana',
  },
  {
    id: 'inspire-tour',
    title: 'AASU Inspire Tour',
    category: 'Schools & Campus Outreach',
    shortDescription:
      'Taking student leadership, mentorship and educational engagement directly to school communities.',
    description:
      'Taking student leadership, mentorship and educational engagement directly to schools and student communities.',
    ctaLabel: 'Explore the Inspire Tour',
    href: '#latest',
    image: '/images/GGEM/GGEC-73.webp',
    imageAlt: 'AASU outreach speaker engaging school and community participants during a school tour',
  },
]

export const FEATURED_NEWS: NewsArticle = {
  id: 'news-innovating-education-africa-2026-debate',
  category: 'Education Policy',
  date: '20 July 2026',
  title: 'AASU Champions Sustainable Financing Reforms at Innovating Education in Africa 2026',
  excerpt:
    'AASU led a high-level Oxford-style debate examining education financing reforms for the AU Decade of Education and Skills (2025–2034).',
  image: '/images/editorial/aasu-au-education-2026.jpg',
  imageAlt: 'AASU representative speaking at the Innovating Education in Africa 2026 Policy Dialogue at the African Union',
  href: '#latest',
}

export const RECENT_NEWS: NewsArticle[] = [
  {
    id: 'news-times-higher-education-sustainability-2026',
    category: 'Climate & Sustainability',
    date: '7 July 2026',
    title: 'AASU Featured in Times Higher Education Sustainability Impact Ratings 2026',
    excerpt:
      'Highlighting AASU’s mobilisation of African students for climate action and sustainable development at GSDC 2026.',
    image: '/images/editorial/aasu-the-sustainability-2026.jpeg',
    imageAlt: 'AASU feature page in the Times Higher Education Sustainability Impact Ratings 2026 publication',
    href: '#latest',
  },
  {
    id: 'news-adolescence-360-health-2026',
    category: 'Student Welfare',
    date: '24 June 2026',
    title: 'AASU Engages JHS Students in Winneba on Adolescent Health & Wellbeing',
    excerpt:
      'Through Adolescence 360, AASU hosted interactive outreach sessions at A.M.E. Zion "D" JHS, Winneba.',
    image: '/images/editorial/aasu-adol-360-winneba.png',
    imageAlt: 'AASU Adolescence 360 Health Outreach Project team and students in Winneba',
    href: '#latest',
  },
  {
    id: 'news-african-child-day-liberia-2026',
    category: "Students' Rights",
    date: '22 June 2026',
    title: 'AASU Convenes Strategic Dialogue in Liberia for Day of the African Child 2026',
    excerpt:
      'Student leaders, government officials and civil society convened on child rights and safe learning environments.',
    image: '/images/editorial/aasu-african-child-2026.png',
    imageAlt: 'AASU Executive Committee representative addressing the Day of the African Child 2026 Strategic Dialogue in Liberia',
    href: '#latest',
  },
]

export const OFFICIAL_STATEMENTS: OfficialStatement[] = [
  {
    id: 'pr-protection-african-students-sa-2026',
    refNumber: 'PR.SG.26.017',
    date: '3 July 2026',
    category: 'Official Statement',
    title: 'AASU Calls for Enhanced Protection of African Students in South Africa',
    excerpt:
      'Calling for urgent safeguards for African students and higher education communities.',
    href: '#statements',
  },
  {
    id: 'pr-nigeria-abductions-2026',
    refNumber: 'PR.SG.26.012',
    date: '3 June 2026',
    category: 'Advocacy Statement',
    title: 'AASU Demands Urgent Action to End the Abduction of Students and Educators in Nigeria',
    excerpt:
      'Expressing deep concern over insecurity affecting schools and communities.',
    href: '#statements',
  },
]

export const VERIFIED_OPPORTUNITIES: OpportunityHighlight[] = [
  {
    id: 'event-aau-summit-2026',
    type: 'Event',
    title: "AAU African Students' Leadership Summit 2026",
    dateLabel: '17–19 Aug 2026',
    locationOrMeta: 'Cairo, Egypt · AAU & AASU',
    ctaLabel: 'Summit details',
    href: 'https://pay.aau.org/sls-cairo-2026',
    external: true,
  },
  {
    id: 'event-russia-africa-scientists-2026',
    type: 'Opportunity',
    title: 'Russia–Africa Forum-Competition of Young Scientists 2026',
    dateLabel: '12–17 Oct 2026',
    locationOrMeta: 'Under the auspices of UNESCO',
    ctaLabel: 'View call',
    href: 'https://bit.ly/RAFYS-26',
    external: true,
  },
  {
    id: 'pathway-scholarships',
    type: 'Pathway',
    title: 'Scholarships & Fellowships',
    dateLabel: 'Ongoing',
    locationOrMeta: 'Academic, research & leadership funding',
    ctaLabel: 'Browse opportunities',
    href: '#opportunities',
  },
  {
    id: 'pathway-training',
    type: 'Pathway',
    title: 'Training, Exchanges & Internships',
    dateLabel: 'Ongoing',
    locationOrMeta: 'Mobility, peer learning & professional growth',
    ctaLabel: 'Explore programmes',
    href: '#programmes',
  },
]

export const FEATURED_PUBLICATIONS: PublicationItem[] = [
  {
    id: 'toolkit-greening-skills-2026',
    title: 'Toolkit on Greening Skills and Qualifications in Africa',
    type: 'Toolkit',
    year: '2026',
    cover: '/images/publications/acqf-toolkit.png',
    coverAlt: 'Cover of Toolkit on Greening Skills and Qualifications in Africa (2026)',
    pdfUrl: '/documents/acqf-toolkit-greening-skills.pdf',
    externalUrl: 'https://acqf.africa/resources/research/green-skills/acqf-aasu-toolkit-on-greening-skills-and-qualifications-in-africa',
  },
  {
    id: 'book-good-practices-greening-2026',
    title: 'Book of Good Practices for the Greening of Skills and Qualifications in Africa',
    type: 'Case Book',
    year: '2026',
    cover: '/images/publications/book-of-good-practices.png',
    coverAlt: 'Cover of Book of Good Practices for the Greening of Skills and Qualifications in Africa (2026)',
    pdfUrl: '/documents/acqf-book-of-good-practices.pdf',
    externalUrl: 'https://acqf.africa/resources/research/green-skills/acqf-case-book-on-green-skills-qualifications-good-practices',
  },
  {
    id: 'greening-skills-engagement-2026',
    title: "Greening Skills and Qualifications in Africa: Users' Engagement",
    type: 'Concept Document',
    year: '2026',
    cover: '/images/publications/acqf-concept-document.png',
    coverAlt: "Cover of Greening Skills and Qualifications in Africa Users' Engagement (2026)",
    pdfUrl: '/documents/acqf-users-engagement.pdf',
    externalUrl: 'https://acqf.africa/resources/research/green-skills/acqf-greening-skills-and-qualifications-in-africa-users-engagement',
  },
]

// Preserved for inner pages
export const OPPORTUNITY_CATEGORIES: OpportunityCategory[] = [
  {
    id: 'events-conferences',
    title: 'Events & Conferences',
    description: 'Explore upcoming summits, conferences, dialogues and other AASU engagements.',
    ctaLabel: 'Explore Events',
    href: '#opportunities',
    icon: 'calendar',
  },
  {
    id: 'scholarships-fellowships',
    title: 'Scholarships & Fellowships',
    description: 'Find educational, research and professional development opportunities.',
    ctaLabel: 'Browse Scholarships',
    href: '#opportunities',
    icon: 'award',
  },
  {
    id: 'training-exchanges-internships',
    title: 'Training, Exchanges & Internships',
    description: 'Discover programmes that support learning, leadership, mobility and professional experience.',
    ctaLabel: 'View Programmes',
    href: '#opportunities',
    icon: 'globe',
  },
]

export const VERIFIED_PARTNER_LOGOS: PartnerLogo[] = [
  { name: 'Global Student Forum (GSF)', shortName: 'GSF', logo: '/images/partners/gsf.webp', href: 'https://globalstudentforum.org' },
  { name: "European Students' Union (ESU)", shortName: 'ESU', logo: '/images/partners/esu.webp', href: 'https://esu-online.org' },
  { name: 'University of Cape Coast (UCC)', shortName: 'UCC', logo: '/images/partners/ucc.webp', href: 'https://www.ucc.edu.gh' },
  { name: 'African Council for Distance Education (ACDE)', shortName: 'ACDE', logo: '/images/partners/acde.webp' },
  { name: 'University of Applied Sciences Upper Austria (FH OÖ)', shortName: 'FH OÖ', logo: '/images/partners/fhooe.webp' },
  { name: 'Austrian National Union of Students (ÖH)', shortName: 'ÖH', logo: '/images/partners/oeh.webp' },
  { name: 'KCA University', shortName: 'KCA', logo: '/images/partners/kca.webp' },
  { name: 'University of The Gambia (UTG)', shortName: 'UTG', logo: '/images/partners/utg.webp' },
]

export const STRATEGIC_INSTITUTIONAL_PARTNERS: InstitutionalPartnerText[] = [
  { name: 'African Union (AU) & AU Commission', role: 'Agenda 2063 & Continental Education Strategy for Africa (CESA)' },
  { name: 'UNESCO', role: 'Education 2030 & Recognition of Higher Education Qualifications' },
  { name: 'European Training Foundation (ETF) & ACQF', role: 'African Continental Qualifications Framework & Green Skills' },
  { name: 'Association of African Universities (AAU)', role: 'Higher Education Quality Assurance & Student Leadership' },
  { name: 'ECOWAS & SADC', role: 'Regional Education Integration & Student Mobility' },
]

export const FOOTER_LINKS = {
  explore: [
    { label: 'About AASU', href: '#at-a-glance' },
    { label: 'What We Do', href: '#priorities' },
    { label: 'Membership', href: '#membership' },
    { label: 'News & Media', href: '#latest' },
    { label: 'Events', href: '#opportunities' },
    { label: 'Knowledge Hub', href: '#knowledge-hub' },
    { label: 'Opportunities', href: '#opportunities' },
  ],
  institutional: [
    { label: 'History & Legacy', href: '#at-a-glance' },
    { label: 'Governance', href: '#at-a-glance' },
    { label: 'Executive Committee', href: '#at-a-glance' },
    { label: 'Secretariat', href: '#footer' },
    { label: 'Partners & Institutional Relations', href: '#partnerships' },
  ],
  connect: [
    { label: 'Contact Us', href: '#footer' },
    { label: 'Partner With AASU', href: '#partnerships' },
    { label: 'Student Rights & Support', href: '#partnerships' },
  ],
  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/AASU1972' },
    { label: 'X (Twitter)', href: 'https://x.com/aasu_72' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/aasu1972/' },
    { label: 'Instagram', href: 'https://www.instagram.com/aasu_1972/' },
  ],
}
