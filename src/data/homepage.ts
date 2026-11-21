import type {
  AfricaRegion,
  InstitutionalPartnerText,
  NavItem,
  NewsArticle,
  OfficialStatement,
  OpportunityCategory,
  PartnerLogo,
  ProgrammeItem,
  PublicationItem,
  StatItem,
  StrategicPriority,
} from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#top' },
  {
    label: 'About',
    href: '#about',
    children: [
      { label: 'Who We Are', href: '#about', description: 'Institutional identity, vision, mission and mandate' },
      { label: 'History & Legacy', href: '#about', description: 'Founded in Kumasi in 1972' },
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
      { label: 'Policy Engagement & Representation', href: '#news', description: 'Continental and international policy dialogues' },
    ],
  },
  {
    label: 'Membership',
    href: '#membership',
    children: [
      { label: 'Our Membership', href: '#membership', description: 'Representative network across five African regions' },
      { label: 'Member Unions Directory', href: '#membership', description: 'Verified national and sub-national member unions' },
      { label: 'Regional Membership', href: '#membership', description: 'North, West, Central, East and Southern Africa' },
      { label: 'Membership & Affiliation', href: '#join', description: 'Categories, eligibility and application procedures' },
    ],
  },
  {
    label: 'News & Media',
    href: '#news',
    children: [
      { label: 'Latest News', href: '#news', description: 'Institutional engagements and updates' },
      { label: 'Press Releases & Statements', href: '#statements', description: 'Official statements and public positions' },
      { label: 'Speeches & Addresses', href: '#news', description: 'Authorised institutional remarks' },
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
  { value: '85+', label: 'National & Sub-national Member Unions', needsConfirmation: true },
  { value: '300M+', label: 'Students Represented', needsConfirmation: true },
  { value: '1972', label: 'Year Established' },
]

export const STRATEGIC_PRIORITIES: StrategicPriority[] = [
  {
    number: '01',
    title: "Education & Students' Rights",
    description:
      "Championing students' rights and welfare, equitable access to quality education, academic freedom and student participation in education policy and governance.",
    href: '#priorities',
  },
  {
    number: '02',
    title: 'Capacity Building, Skills Development & Employability',
    description:
      'Developing student leadership, strengthening institutional capacities and advancing skills, entrepreneurship and employment opportunities for African students.',
    href: '#priorities',
  },
  {
    number: '03',
    title: 'Gender Equity & Social Inclusion',
    description:
      'Addressing discrimination and barriers to participation, promoting gender equality and advancing inclusive policies and opportunities for students of all backgrounds.',
    href: '#priorities',
  },
  {
    number: '04',
    title: 'Climate Action & Environmental Sustainability',
    description:
      'Advancing student leadership in climate action, environmental protection and sustainability, while promoting green skills and education for a changing world.',
    href: '#priorities',
  },
  {
    number: '05',
    title: 'Migration, Mobility & Exchanges',
    description:
      'Advocating for safe and equitable student mobility, academic exchanges, recognition of qualifications and the rights and welfare of students across borders.',
    href: '#priorities',
  },
  {
    number: '06',
    title: 'Democracy, Good Governance, Peace & Security',
    description:
      'Promoting democratic values, accountable governance, peacebuilding and the meaningful participation of students in civic and political processes.',
    href: '#priorities',
  },
  {
    number: '07',
    title: 'Pan-Africanism & African Culture',
    description:
      "Advancing African unity, student solidarity and continental integration while celebrating Africa's cultural heritage, diversity and shared identity.",
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
    category: 'ACQF & European Training Foundation',
    description:
      'AASU has worked with the European Training Foundation and partners under the African Continental Qualifications Framework initiative to advance discussions on green skills, recognition of qualifications and lifelong learning.',
    secondaryText:
      "The work brings the experiences of learners, educators, employers and communities into conversations about Africa's transition towards sustainable economies.",
    ctaLabel: 'Explore the Initiative',
    href: '#knowledge-hub',
    image: '/images/publications/acqf-concept-document.png',
    imageAlt: 'Greening Skills and Qualifications in Africa — ACQF and AASU Concept Document cover',
    featured: true,
  },
  {
    id: 'nels',
    title: 'Next Level Skills for Student Leaders',
    category: 'NELS Initiative',
    description:
      'Through the NELS initiative, AASU and its partners are contributing to the development of student leadership through training, peer learning, research and international cooperation.',
    ctaLabel: 'Discover NELS',
    href: '#partnerships',
    image: '/images/editorial/aasu-nels-workshop.jpg',
    imageAlt: 'Participants collaborating during a Next Level Skills for Student Leaders (NELS) training workshop',
  },
  {
    id: 'inspire-tour',
    title: 'AASU Inspire Tour',
    category: 'Pre-Tertiary & Campus Outreach',
    description:
      'Taking student leadership, mentorship and educational engagement directly to schools and student communities.',
    ctaLabel: 'Explore the Inspire Tour',
    href: '#news',
    image: '/images/editorial/aasu-inspire-tour.jpg',
    imageAlt: 'Official AASU Inspire Tour campaign visual for pre-tertiary schools',
    imageNote: 'Official campaign graphic — replace with approved field photography when available.',
  },
]

export const FEATURED_NEWS: NewsArticle = {
  id: 'news-innovating-education-africa-2026-debate',
  category: 'Education Policy & Financing',
  date: '20 July 2026',
  title: 'AASU Champions Sustainable Financing Reforms at Innovating Education in Africa 2026 Policy Dialogue',
  excerpt:
    'AASU led a high-level Oxford-style debate examining essential education financing reforms needed to realistically achieve the African Union Decade of Education and Skills (2025–2034) targets in Addis Ababa.',
  image: '/images/editorial/aasu-au-education-2026.jpg',
  imageAlt: 'AASU representative speaking at the Innovating Education in Africa 2026 Policy Dialogue at the African Union',
  href: '#news',
}

export const RECENT_NEWS: NewsArticle[] = [
  {
    id: 'news-times-higher-education-sustainability-2026',
    category: 'Climate Action & Sustainability',
    date: '7 July 2026',
    title: 'AASU Featured in Maiden Times Higher Education Sustainability Impact Ratings 2026',
    excerpt:
      'Launched at the Global Sustainable Development Congress (GSDC) 2026, the feature highlights AASU’s mobilisation of African students for climate action and sustainable development.',
    image: '/images/editorial/aasu-the-sustainability-2026.jpeg',
    imageAlt: 'AASU feature page in the Times Higher Education Sustainability Impact Ratings 2026 publication',
    href: '#news',
  },
  {
    id: 'news-adolescence-360-health-2026',
    category: 'Student Welfare & Outreach',
    date: '24 June 2026',
    title: 'AASU Engages JHS Students in Winneba on Menstrual Hygiene and Reproductive Health',
    excerpt:
      'Through the Adolescence 360 Health Outreach Project, AASU created a safe and interactive space for students at A.M.E. Zion "D" JHS, Winneba.',
    image: '/images/editorial/aasu-adol-360-winneba.png',
    imageAlt: 'AASU Adolescence 360 Health Outreach Project team and students in Winneba',
    href: '#news',
  },
  {
    id: 'news-african-child-day-liberia-2026',
    category: "Education & Students' Rights",
    date: '22 June 2026',
    title: 'AASU Convenes High-Level Strategic Dialogue in Liberia for Day of the African Child 2026',
    excerpt:
      'Bringing together student leaders, government officials and civil society in Liberia to advance child rights, safe learning environments and WASH access.',
    image: '/images/editorial/aasu-african-child-2026.png',
    imageAlt: 'AASU Executive Committee representative addressing the Day of the African Child 2026 Strategic Dialogue in Liberia',
    href: '#news',
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
      'The All-Africa Students Union is closely monitoring developments in the Republic of South Africa and calls for urgent safeguards for African students and higher education communities.',
    href: '#statements',
  },
  {
    id: 'pr-nigeria-abductions-2026',
    refNumber: 'PR.SG.26.012',
    date: '3 June 2026',
    category: 'Advocacy Statement',
    title: 'AASU Demands Urgent Action to End the Abduction of Students and Educators in Nigeria',
    excerpt:
      'Expressing deep concern over the abduction of pupils and teachers in Oyo State and continuing insecurity affecting educational institutions.',
    href: '#statements',
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
    { label: 'About AASU', href: '#about' },
    { label: 'What We Do', href: '#priorities' },
    { label: 'Membership', href: '#membership' },
    { label: 'News & Media', href: '#news' },
    { label: 'Events', href: '#opportunities' },
    { label: 'Knowledge Hub', href: '#knowledge-hub' },
    { label: 'Opportunities', href: '#opportunities' },
  ],
  institutional: [
    { label: 'History & Legacy', href: '#about' },
    { label: 'Governance', href: '#about' },
    { label: 'Executive Committee', href: '#about' },
    { label: 'Secretariat', href: '#footer' },
    { label: 'Partners & Institutional Relations', href: '#partnerships' },
  ],
  connect: [
    { label: 'Contact Us', href: '#footer' },
    { label: 'Partner With AASU', href: '#partnerships' },
    { label: 'Student Rights & Support', href: '#join' },
  ],
  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/AASU1972' },
    { label: 'X (Twitter)', href: 'https://x.com/aasu_72' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/aasu1972/' },
    { label: 'Instagram', href: 'https://www.instagram.com/aasu_1972/' },
  ],
}
