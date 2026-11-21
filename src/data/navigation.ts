export interface MegaMenuLink {
  label: string
  href: string
  description?: string
  external?: boolean
}

export interface MegaMenuGroup {
  heading: string
  links: MegaMenuLink[]
}

export interface MegaMenuFeaturedCard {
  tag: string
  title: string
  description: string
  href: string
  external?: boolean
}

export interface MegaMenuCategory {
  id: string
  label: string
  href: string
  groups: MegaMenuGroup[]
  featured: MegaMenuFeaturedCard[]
}

export interface DiscoveryQuickGroup {
  category: string
  links: { label: string; href: string; external?: boolean }[]
}

export const MEGA_MENU_CATEGORIES: MegaMenuCategory[] = [
  {
    id: 'about',
    label: 'About',
    href: '#about',
    groups: [
      {
        heading: 'Who We Are',
        links: [
          {
            label: 'Overview of AASU',
            href: '#about',
            description: 'Institutional identity, vision, mission, values & mandate',
          },
          {
            label: 'History & Legacy',
            href: '#about',
            description: 'Founded in Kumasi in 1972 and five decades of solidarity',
          },
          {
            label: 'Partners & Institutional Relations',
            href: '#partnerships',
            description: 'Continental and international cooperation frameworks',
          },
        ],
      },
      {
        heading: 'Governance',
        links: [
          {
            label: 'Congress & Governance Structures',
            href: '#about',
            description: "The Union's highest democratic decision-making organ",
          },
          {
            label: 'Executive Committee',
            href: '#about',
            description: 'Elected continental student leadership',
          },
          {
            label: 'Secretariat',
            href: '#footer',
            description: 'Headquarters in Accra, Ghana — management & departments',
          },
        ],
      },
    ],
    featured: [
      {
        tag: 'Institutional Legacy',
        title: 'More Than Five Decades of African Student Solidarity',
        description:
          'Founded in 1972 in Kumasi, Ghana, AASU brings together national and sub-national student unions across Africa.',
        href: '#about',
      },
      {
        tag: 'Continental Reach',
        title: 'One Union. Across Africa.',
        description:
          'Representing African students across North, West, Central, East and Southern Africa.',
        href: '#reach',
      },
    ],
  },
  {
    id: 'what-we-do',
    label: 'What We Do',
    href: '#priorities',
    groups: [
      {
        heading: 'Our Strategic Priorities',
        links: [
          { label: "01. Education & Students' Rights", href: '#priorities' },
          { label: '02. Capacity Building, Skills & Employability', href: '#priorities' },
          { label: '03. Gender Equity & Social Inclusion', href: '#priorities' },
          { label: '04. Climate Action & Sustainability', href: '#priorities' },
          { label: '05. Migration, Mobility & Exchanges', href: '#priorities' },
          { label: '06. Democracy, Governance, Peace & Security', href: '#priorities' },
          { label: '07. Pan-Africanism & African Culture', href: '#priorities' },
        ],
      },
      {
        heading: 'Programmes, Policy & Impact',
        links: [
          {
            label: 'Programmes & Initiatives',
            href: '#programmes',
            description: 'Greening Skills (ACQF), NELS & AASU Inspire Tour',
          },
          {
            label: 'Campaigns & Advocacy',
            href: '#programmes',
            description: 'Student rights, welfare and education policy advocacy',
          },
          {
            label: 'Policy Engagement & Representation',
            href: '#news',
            description: 'Continental and international policy dialogues',
          },
          {
            label: 'Results & Impact',
            href: '#knowledge-hub',
            description: 'Institutional achievements and annual highlights',
          },
        ],
      },
    ],
    featured: [
      {
        tag: 'Flagship Initiative',
        title: 'Greening Skills and Qualifications in Africa',
        description:
          'Advancing green skills, recognition of qualifications and lifelong learning with ETF and ACQF partners.',
        href: '#programmes',
      },
      {
        tag: 'Leadership',
        title: 'Next Level Skills for Student Leaders (NELS)',
        description:
          'Developing student leadership through training, peer learning, research and international cooperation.',
        href: '#programmes',
      },
    ],
  },
  {
    id: 'membership',
    label: 'Membership',
    href: '#membership',
    groups: [
      {
        heading: 'Network & Regions',
        links: [
          {
            label: 'Our Membership',
            href: '#membership',
            description: 'Representative structure and continental reach',
          },
          {
            label: 'Member Unions Directory',
            href: '#regional-explorer',
            description: 'Searchable directory of verified member unions',
          },
          {
            label: 'Regional Membership (5 Regions)',
            href: '#regional-explorer',
            description: 'North, West, Central, East & Southern Africa',
          },
        ],
      },
      {
        heading: 'Affiliation & Services',
        links: [
          {
            label: 'Membership & Affiliation',
            href: '#join',
            description: 'Categories, eligibility and application procedures',
          },
          {
            label: 'Member Services',
            href: '#join',
            description: 'Institutional support, coordination & guidance',
          },
        ],
      },
    ],
    featured: [
      {
        tag: 'Regional Explorer',
        title: 'Across Borders. United in Purpose.',
        description:
          'Explore verified national and sub-national student unions across all five African regions.',
        href: '#regional-explorer',
      },
    ],
  },
  {
    id: 'news-media',
    label: 'News & Media',
    href: '#news',
    groups: [
      {
        heading: 'Newsroom',
        links: [
          {
            label: 'Latest News',
            href: '#news',
            description: 'Institutional engagements, updates and developments',
          },
          {
            label: 'Press Releases & Statements',
            href: '#statements',
            description: 'Official statements and public policy positions',
          },
          {
            label: 'Speeches & Addresses',
            href: '#news',
            description: 'Official remarks by authorised AASU representatives',
          },
        ],
      },
      {
        heading: 'Media Resources',
        links: [
          {
            label: 'Media Gallery',
            href: '#news',
            description: 'Event and programme visual archives',
          },
          {
            label: 'Media Centre',
            href: '#footer',
            description: 'Press enquiries, official logos and brand assets',
          },
        ],
      },
    ],
    featured: [
      {
        tag: 'Featured Story · 20 July 2026',
        title: 'Sustainable Financing Reforms at Innovating Education in Africa 2026',
        description:
          'AASU led a high-level Oxford-style debate supporting the AU Decade of Education and Skills (2025–2034).',
        href: '#news',
      },
      {
        tag: 'Official Statement · PR.SG.26.017',
        title: 'Enhanced Protection of African Students in South Africa',
        description:
          "Read AASU's official public statement calling for safeguards for African students.",
        href: '#statements',
      },
    ],
  },
  {
    id: 'events',
    label: 'Events',
    href: '#opportunities',
    groups: [
      {
        heading: 'Convenings & Forums',
        links: [
          {
            label: 'Events Calendar',
            href: '#opportunities',
            description: 'Upcoming meetings, conferences and engagements',
          },
          {
            label: 'Major Summits & Conferences',
            href: '#opportunities',
            description: 'AASU flagship summits and continental forums',
          },
          {
            label: 'Past Events',
            href: '#news',
            description: 'Completed activities, reports and highlights',
          },
        ],
      },
    ],
    featured: [
      {
        tag: 'Events & Conferences',
        title: 'Find Your Next Opportunity',
        description:
          'Explore upcoming continental summits, policy dialogues and international student convenings.',
        href: '#opportunities',
      },
    ],
  },
  {
    id: 'knowledge-hub',
    label: 'Knowledge Hub',
    href: '#knowledge-hub',
    groups: [
      {
        heading: 'Publications & Research',
        links: [
          {
            label: 'Knowledge Hub Overview',
            href: '#knowledge-hub',
            description: 'Featured publications and institutional resource library',
          },
          { label: 'Research & Policy Papers', href: '#knowledge-hub' },
          { label: 'Reports & Annual Reports', href: '#knowledge-hub' },
          { label: 'Policy Briefs & Position Papers', href: '#knowledge-hub' },
        ],
      },
      {
        heading: 'Resources & Governance Docs',
        links: [
          {
            label: 'Toolkits, Guides & Learning Resources',
            href: '#knowledge-hub',
            description: 'Practical guides and student leadership manuals',
          },
          {
            label: 'Institutional Documents',
            href: '#knowledge-hub',
            description: 'AASU Constitution, strategic plans and policies',
          },
        ],
      },
    ],
    featured: [
      {
        tag: '2026 Toolkit · PDF',
        title: 'Toolkit on Greening Skills and Qualifications in Africa',
        description:
          'Developed by AASU and partners under the African Continental Qualifications Framework.',
        href: '/documents/acqf-toolkit-greening-skills.pdf',
        external: true,
      },
      {
        tag: '2026 Case Book · PDF',
        title: 'Book of Good Practices for Greening Skills & Qualifications',
        description:
          'Practical examples supporting greener education and qualification systems across Africa.',
        href: '/documents/acqf-book-of-good-practices.pdf',
        external: true,
      },
    ],
  },
  {
    id: 'opportunities',
    label: 'Opportunities',
    href: '#opportunities',
    groups: [
      {
        heading: 'Student & Youth Pathways',
        links: [
          {
            label: 'Opportunities Portal',
            href: '#opportunities',
            description: 'Directory of current opportunities for students and youth',
          },
          { label: 'Scholarships & Fellowships', href: '#opportunities' },
          { label: 'Conferences, Exchanges & Training', href: '#opportunities' },
          { label: 'Internships & Volunteering', href: '#opportunities' },
          { label: 'Careers at AASU', href: '#footer' },
        ],
      },
    ],
    featured: [
      {
        tag: 'Student Mobility & Growth',
        title: 'Scholarships, Fellowships & Exchanges',
        description:
          'Discover programmes that support learning, leadership, mobility and professional experience.',
        href: '#opportunities',
      },
    ],
  },
]

export const DISCOVERY_QUICK_GROUPS: DiscoveryQuickGroup[] = [
  {
    category: 'Institutional',
    links: [
      { label: 'About AASU & History (1972)', href: '#about' },
      { label: 'Seven Strategic Priorities', href: '#priorities' },
      { label: 'Regional Member Unions', href: '#regional-explorer' },
      { label: 'Partner With AASU', href: '#partnerships' },
    ],
  },
  {
    category: 'Programmes & Resources',
    links: [
      { label: 'Greening Skills & Qualifications (ACQF)', href: '#programmes' },
      { label: 'Next Level Skills for Student Leaders (NELS)', href: '#programmes' },
      { label: 'AASU Inspire Tour', href: '#programmes' },
      { label: 'Knowledge Hub & 2026 Publications', href: '#knowledge-hub' },
      { label: 'Official Statements & Press Releases', href: '#statements' },
      { label: 'Events, Scholarships & Fellowships', href: '#opportunities' },
    ],
  },
]

export const DISCOVERY_FEATURED: MegaMenuFeaturedCard[] = [
  {
    tag: 'Policy Dialogue · 2026',
    title: 'Sustainable Financing Reforms at Innovating Education in Africa 2026',
    description:
      'AASU led a high-level Oxford-style debate examining financing reforms for the AU Decade of Education and Skills (2025–2034).',
    href: '#news',
  },
  {
    tag: '2026 Publication · PDF',
    title: 'Toolkit on Greening Skills and Qualifications in Africa',
    description:
      'Read the official ACQF & AASU resource supporting sustainable education and qualification systems across Africa.',
    href: '/documents/acqf-toolkit-greening-skills.pdf',
    external: true,
  },
  {
    tag: 'Official Statement · PR.SG.26.017',
    title: 'AASU Calls for Enhanced Protection of African Students in South Africa',
    description:
      "Read the Union's official public position advocating for the safety and welfare of African students.",
    href: '#statements',
  },
]
