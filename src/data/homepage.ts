import type {
  AfricaRegion,
  GlancePhoto,
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
    contextLabel: 'All-Africa Students Union · Est. 1972',
    headline: "The Continental Voice of Africa's Students",
    subheading:
      'Representing the interests and aspirations of African students since 1972.',
    image: '/images/web/hero-asw.webp',
    imageAlt:
      'All-Africa Students Union representatives on stage during Africa Skills Week alongside the African Union and Ghana flags',
    primaryCta: { label: 'Discover AASU', href: '#at-a-glance' },
    secondaryCta: { label: 'Explore Our Work', href: '#priorities' },
  },
  {
    id: 'historical-legacy',
    contextLabel: 'Kumasi 1972 to Today',
    headline: 'Five Decades of African Student Solidarity',
    subheading:
      'Rooted in student unity, democratic governance and Pan-African purpose across five regions.',
    image: '/images/web/inauguration-2026.webp',
    imageAlt:
      'All-Africa Students Union Executive leadership at the 2026 Inauguration and Honours Ceremony',
    primaryCta: { label: 'Our Legacy', href: '#at-a-glance' },
    secondaryCta: { label: 'Explore Membership', href: '#membership' },
  },
  {
    id: 'climate-forward',
    contextLabel: 'Climate Forward Summit · Green Economy',
    headline: 'Student Leadership for a Sustainable Africa',
    subheading:
      'Advancing green skills, circular economies and environmental stewardship with continental partners.',
    image: '/images/web/cfs-panel.webp',
    imageAlt:
      'Panelist speaking during the Climate Forward Summit on circular economy and clean energy',
    primaryCta: { label: 'Featured Programmes', href: '#programmes' },
    secondaryCta: { label: 'Knowledge Hub', href: '#knowledge-hub' },
  },
  {
    id: 'leader-shift',
    contextLabel: 'Leader-Shift Summit · Capacity Building',
    headline: 'Empowering the Next Generation of Student Leaders',
    subheading:
      'Building institutional capacity, leadership skills and civic participation across campuses.',
    image: '/images/web/leadershift-audience.webp',
    imageAlt:
      'Participants engaged in sessions at the AASU Leader-Shift Summit',
    primaryCta: { label: 'Strategic Priorities', href: '#priorities' },
    secondaryCta: { label: 'Latest from AASU', href: '#latest' },
  },
  {
    id: 'environmental-action',
    contextLabel: 'Youth Mobilisation · Environmental Action',
    headline: 'From Policy Dialogues to Community Impact',
    subheading:
      'African students turning continental advocacy into practical action in schools and communities.',
    image: '/images/web/beach-cleanup-group.webp',
    imageAlt:
      'AASU student volunteers after a coastal beach clean-up sustainability drive',
    primaryCta: { label: 'Partner With AASU', href: '#partnerships' },
    secondaryCta: { label: 'Explore Opportunities', href: '#opportunities' },
  },
]

export const GLANCE_SEQUENCE: GlancePhoto[] = [
  {
    id: 'legacy-archive',
    src: '/images/web/students-letters.webp',
    alt: 'African students holding large red AASU letters during a student solidarity gathering',
    caption: 'AASU Student Movement Archive',
    period: 'Founded in Kumasi, 1972',
  },
  {
    id: 'continental-engagement',
    src: '/images/web/au-education-2026.webp',
    alt: 'AASU representative speaking at the Innovating Education in Africa 2026 Policy Dialogue at the African Union',
    caption: 'Innovating Education in Africa Policy Dialogue, Addis Ababa',
    period: 'Continental Policy Representation',
  },
  {
    id: 'recent-student-activity',
    src: '/images/web/leadershift-audience.webp',
    alt: 'Student leaders participating in the AASU Leader-Shift Summit',
    caption: 'AASU Leader-Shift Summit, Accra',
    period: 'Student Leadership in Action',
  },
]

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#at-a-glance' },
  { label: 'Our Work', href: '#priorities' },
  { label: 'Membership', href: '#membership' },
  { label: 'Explore', href: '#latest' },
  { label: 'Contact', href: '#footer' },
]

export const CONTINENTAL_STATS: StatItem[] = [
  { value: '54', label: 'African Countries', needsConfirmation: true },
  { value: '85+', label: 'Member Unions', needsConfirmation: true },
  { value: '300M+', label: 'Students Represented', needsConfirmation: true },
  { value: '1972', label: 'Year Established' },
]

// Official AASU Strategic Priorities in exact approved order and naming.
// Full approved copy preserved in `description` for dedicated future pages.
export const STRATEGIC_PRIORITIES: StrategicPriority[] = [
  {
    number: '01',
    title: "Education & Students' Rights",
    shortDescription:
      "Championing students' rights and welfare, equitable access to quality education and academic freedom.",
    description:
      "Championing students' rights and welfare, equitable access to quality education, academic freedom and student participation in education policy and governance.",
    iconPath: '/images/priority area icons (single)/EDUCATION AND STUDENT RIGHTS.png',
    photos: [
      {
        src: '/images/web/au-education-2026.webp',
        alt: 'AASU representative addressing the Innovating Education in Africa 2026 Policy Dialogue',
        caption: 'Innovating Education in Africa 2026, Addis Ababa',
      },
      {
        src: '/images/web/african-child-2026.webp',
        alt: 'AASU Executive Committee representative addressing the Day of the African Child 2026 Strategic Dialogue in Liberia',
        caption: 'Day of the African Child Strategic Dialogue, Liberia',
      },
    ],
    futureRoute: '/what-we-do/strategic-priorities/education-and-students-rights',
    href: '/what-we-do/strategic-priorities/education-and-students-rights',
  },
  {
    number: '02',
    title: 'Capacity Building, Skills Development & Employability',
    shortDescription:
      'Developing student leadership, institutional capacities and career readiness across Africa.',
    description:
      'Developing student leadership, strengthening institutional capacities and advancing skills, entrepreneurship and employment opportunities for African students.',
    iconPath: '/images/priority area icons (single)/CAPACITY BUILDING.png',
    photos: [
      {
        src: '/images/web/leadershift-audience.webp',
        alt: 'Student leaders participating in the AASU Leader-Shift Summit',
        caption: 'AASU Leader-Shift Summit, Accra',
      },
      {
        src: '/images/web/leadershift-speaker.webp',
        alt: 'Speaker addressing participants at the Leader-Shift Summit at ISSER, University of Ghana',
        caption: 'Leadership and institutional capacity workshop, ISSER',
      },
    ],
    futureRoute: '/what-we-do/strategic-priorities/capacity-building-skills-development-and-employability',
    href: '/what-we-do/strategic-priorities/capacity-building-skills-development-and-employability',
  },
  {
    number: '03',
    title: 'Gender Equity & Social Inclusion',
    shortDescription:
      'Addressing barriers to participation, promoting gender equality and advancing inclusive policies.',
    description:
      'Addressing discrimination and barriers to participation, promoting gender equality and advancing inclusive policies and opportunities for students of all backgrounds.',
    iconPath: '/images/priority area icons (single)/GENDER ADVOCACY.png',
    photos: [
      {
        src: '/images/web/ggem-outreach.webp',
        alt: 'Water and Gender community outreach session during the GGEM School Tour',
        caption: 'GGEM School and Community Outreach Tour',
      },
      {
        src: '/images/web/adol-360-winneba.webp',
        alt: 'AASU Adolescence 360 Health Outreach team and students in Winneba',
        caption: 'Adolescence 360 Health Outreach, Winneba',
      },
      {
        src: '/images/web/ggem-speaker.webp',
        alt: 'AASU facilitator engaging community members during the GGEM tour',
        caption: 'Community dialogue on gender and education',
      },
    ],
    futureRoute: '/what-we-do/strategic-priorities/gender-equity-and-social-inclusion',
    href: '/what-we-do/strategic-priorities/gender-equity-and-social-inclusion',
  },
  {
    number: '04',
    title: 'Migration, Mobility & Exchanges',
    shortDescription:
      'Advocating for safe student mobility, academic exchanges and recognition of qualifications across borders.',
    description:
      'Advocating for safe and equitable student mobility, academic exchanges, recognition of qualifications and the rights and welfare of students across borders.',
    iconPath: '/images/priority area icons (single)/MIGRATION & MOBILITY.png',
    photos: [
      {
        src: '/images/web/nels-breakout.webp',
        alt: 'Intercultural partnership planning at the NELS 3rd Strategic Partners Meeting in Ghana',
        caption: 'NELS 3rd Strategic Partners Meeting, Ghana',
      },
      {
        src: '/images/web/nels-plenary.webp',
        alt: 'European and African student partners exchanging ideas during the NELS plenary in Ghana',
        caption: 'Cross-border student leadership exchange',
      },
      {
        src: '/images/web/nels-delegates.webp',
        alt: 'International NELS partner delegates during Day 3 exchange in Ghana',
        caption: 'International academic and student union delegates',
      },
    ],
    futureRoute: '/what-we-do/strategic-priorities/migration-mobility-and-exchanges',
    href: '/what-we-do/strategic-priorities/migration-mobility-and-exchanges',
  },
  {
    number: '05',
    title: 'Climate Action & Environmental Sustainability',
    shortDescription:
      'Advancing student leadership in climate action, environmental protection and green skills.',
    description:
      'Advancing student leadership in climate action, environmental protection and sustainability, while promoting green skills and education for a changing world.',
    iconPath: '/images/priority area icons (single)/ENVIRONMENT.png',
    photos: [
      {
        src: '/images/web/beach-cleanup-group.webp',
        alt: 'AASU student volunteers leading a coastal beach clean-up campaign',
        caption: 'AASU Coastal Beach Clean-Up Campaign',
      },
      {
        src: '/images/web/cfs-panel.webp',
        alt: 'Panelist speaking at the Climate Forward Summit on circular economy and clean energy',
        caption: 'Climate Forward Summit panel on green economies',
      },
      {
        src: '/images/web/beach-cleanup-action.webp',
        alt: 'Student volunteers collecting coastal waste during the AASU Beach Clean-Up',
        caption: 'Student-led environmental sustainability action',
      },
    ],
    futureRoute: '/what-we-do/strategic-priorities/climate-action-and-environmental-sustainability',
    href: '/what-we-do/strategic-priorities/climate-action-and-environmental-sustainability',
  },
  {
    number: '06',
    title: 'Democracy, Good Governance, Peace & Security',
    shortDescription:
      'Promoting democratic values, accountable governance, peacebuilding and student civic participation.',
    description:
      'Promoting democratic values, accountable governance, peacebuilding and the meaningful participation of students in civic and political processes.',
    iconPath: '/images/priority area icons (single)/DEMOCRACY AND GOOD GOVERNANCE.png',
    photos: [
      {
        src: '/images/web/inauguration-2026.webp',
        alt: 'AASU democratic student leadership at the 2026 Inauguration and Honours Ceremony',
        caption: 'AASU Inauguration and Honours Ceremony, 2026',
      },
    ],
    futureRoute: '/what-we-do/strategic-priorities/democracy-good-governance-peace-and-security',
    href: '/what-we-do/strategic-priorities/democracy-good-governance-peace-and-security',
  },
  {
    number: '07',
    title: 'Pan Africanism & African Culture',
    shortDescription:
      "Advancing African unity, student solidarity and celebrating Africa's shared cultural heritage.",
    description:
      "Advancing African unity, student solidarity and continental integration while celebrating Africa's cultural heritage, diversity and shared identity.",
    iconPath: '/images/priority area icons (single)/PAN-AFRICANISM AND AFRICAN CULTURE.png',
    photos: [
      {
        src: '/images/web/hero-asw.webp',
        alt: 'Pan-African student representation alongside African Union and national flags',
        caption: 'Continental representation at Africa Skills Week',
      },
      {
        src: '/images/web/cfs-delegate.webp',
        alt: 'Delegate in traditional African attire participating in the Climate Forward Summit',
        caption: 'Celebrating African cultural identity and diversity',
      },
    ],
    futureRoute: '/what-we-do/strategic-priorities/pan-africanism-and-african-culture',
    href: '/what-we-do/strategic-priorities/pan-africanism-and-african-culture',
  },
]

// Verified member unions sourced directly from AASU's existing institutional directory (MembershipPage.jsx)
export const AFRICA_REGIONS: AfricaRegion[] = [
  {
    id: 'north',
    name: 'North Africa',
    coordinates: [30.0444, 31.2357],
    hubLabel: 'Cairo, Tunis, Rabat & Algiers',
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
    coordinates: [5.6037, -0.187],
    hubLabel: 'Accra Secretariat & Kumasi (1972)',
    summary: "Home to AASU's founding in Kumasi (1972) and its continental Secretariat in Accra, Ghana.",
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
    coordinates: [3.848, 11.5021],
    hubLabel: 'Yaoundé, Kinshasa & Libreville',
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
    coordinates: [-1.2921, 36.8219],
    hubLabel: 'Nairobi, Addis Ababa & Dar es Salaam',
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
    coordinates: [-25.7479, 28.2293],
    hubLabel: 'Pretoria, Harare, Lusaka & Windhoek',
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
    image: '/images/web/cfs-panel.webp',
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
    image: '/images/web/nels-breakout.webp',
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
    image: '/images/web/ggem-outreach.webp',
    imageAlt: 'AASU outreach speaker engaging school and community participants during a school tour',
  },
]

export const FEATURED_NEWS: NewsArticle = {
  id: 'news-innovating-education-africa-2026-debate',
  category: 'Education Policy',
  date: '20 July 2026',
  title: 'AASU Champions Sustainable Financing Reforms at Innovating Education in Africa 2026',
  excerpt:
    'AASU led a high-level Oxford-style debate examining education financing reforms for the AU Decade of Education and Skills (2025-2034).',
  image: '/images/web/au-education-2026.webp',
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
      "Highlighting AASU's mobilisation of African students for climate action and sustainable development at GSDC 2026.",
    image: '/images/web/the-sustainability-2026.webp',
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
    image: '/images/web/adol-360-winneba.webp',
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
    image: '/images/web/african-child-2026.webp',
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
    dateLabel: '17-19 Aug 2026',
    locationOrMeta: 'Cairo, Egypt · AAU & AASU',
    ctaLabel: 'Summit details',
    href: 'https://pay.aau.org/sls-cairo-2026',
    external: true,
  },
  {
    id: 'event-russia-africa-scientists-2026',
    type: 'Opportunity',
    title: 'Russia-Africa Forum-Competition of Young Scientists 2026',
    dateLabel: '12-17 Oct 2026',
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
    { label: 'About AASU', href: '/about' },
    { label: 'Our Work', href: '/what-we-do' },
    { label: 'Membership', href: '/membership' },
    { label: 'Member Unions Directory', href: '/membership/member-unions' },
    { label: 'Regional Membership', href: '/membership/regions' },
    { label: 'News & Media', href: '/news' },
    { label: 'Events', href: '/events' },
    { label: 'Press Releases', href: '/news/press-releases' },
    { label: 'Media Gallery', href: '/news/gallery' },
    { label: 'Knowledge Hub', href: '/knowledge-hub' },
    { label: 'Opportunities', href: '/opportunities' },
  ],
  institutional: [
    { label: 'Who We Are', href: '/about/who-we-are' },
    { label: 'History & Legacy', href: '/about/history-legacy' },
    { label: 'Governance', href: '/about/governance' },
    { label: 'Membership & Affiliation', href: '/membership/affiliation' },
    { label: 'Member Services', href: '/membership/services' },
    { label: 'Media Centre', href: '/news/media-centre' },
    { label: 'Partners & Institutional Relations', href: '/about/partners' },
  ],
  connect: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Partner With AASU', href: '/contact/partner' },
    { label: 'Student Rights & Support', href: '/contact/student-support' },
  ],
  social: [
    { id: 'facebook' as const, label: 'Facebook', href: 'https://www.facebook.com/AASU1972' },
    { id: 'x' as const, label: 'X (Twitter)', href: 'https://x.com/aasu_72' },
    { id: 'linkedin' as const, label: 'LinkedIn', href: 'https://www.linkedin.com/company/aasu1972/' },
    { id: 'instagram' as const, label: 'Instagram', href: 'https://www.instagram.com/aasu_1972/' },
  ],
}
