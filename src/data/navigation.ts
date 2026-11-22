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
    href: '#at-a-glance',
    groups: [
      {
        heading: 'Who We Are',
        links: [
          {
            label: 'Overview of AASU',
            href: '#at-a-glance',
            description: 'Institutional identity, vision, mission, values & mandate',
          },
          {
            label: 'History & Legacy',
            href: '#at-a-glance',
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
            href: '#at-a-glance',
            description: "The Union's highest democratic decision-making organ",
          },
          {
            label: 'Executive Committee',
            href: '#at-a-glance',
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
        href: '#at-a-glance',
      },
      {
        tag: 'Continental Reach',
        title: 'One Union. Across Africa.',
        description:
          'Representing African students across North, West, Central, East and Southern Africa.',
        href: '#at-a-glance',
      },
    ],
  },
  {
    id: 'our-work',
    label: 'Our Work',
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
            href: '#latest',
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
    id: 'explore',
    label: 'Explore',
    href: '#latest',
    groups: [
      {
        heading: 'News & Media',
        links: [
          { label: 'Latest News', href: '#latest' },
          { label: 'Press Releases & Statements', href: '#statements' },
          { label: 'Speeches & Addresses', href: '#latest' },
          { label: 'Media Gallery & Media Centre', href: '#footer' },
        ],
      },
      {
        heading: 'Events',
        links: [
          { label: 'Events Calendar', href: '#opportunities' },
          { label: 'Major Summits & Conferences', href: '#opportunities' },
          { label: 'Past Events & Highlights', href: '#latest' },
        ],
      },
      {
        heading: 'Knowledge Hub',
        links: [
          { label: 'Knowledge Hub Overview', href: '#knowledge-hub' },
          { label: 'Research & Policy Papers', href: '#knowledge-hub' },
          { label: 'Reports & Annual Reports', href: '#knowledge-hub' },
          { label: 'Toolkits, Guides & Institutional Docs', href: '#knowledge-hub' },
        ],
      },
      {
        heading: 'Opportunities',
        links: [
          { label: 'Opportunities Portal', href: '#opportunities' },
          { label: 'Scholarships & Fellowships', href: '#opportunities' },
          { label: 'Conferences, Exchanges & Training', href: '#opportunities' },
          { label: 'Internships, Volunteering & Careers', href: '#opportunities' },
        ],
      },
    ],
    featured: [
      {
        tag: 'Featured Story · 20 July 2026',
        title: 'Sustainable Financing Reforms at Innovating Education in Africa 2026',
        description:
          'AASU led a high-level Oxford-style debate supporting the AU Decade of Education and Skills (2025–2034).',
        href: '#latest',
      },
      {
        tag: '2026 Toolkit · PDF',
        title: 'Toolkit on Greening Skills and Qualifications in Africa',
        description:
          'Developed by AASU and partners under the African Continental Qualifications Framework.',
        href: '/documents/acqf-toolkit-greening-skills.pdf',
        external: true,
      },
    ],
  },
]

export const DISCOVERY_QUICK_GROUPS: DiscoveryQuickGroup[] = [
  {
    category: 'Institutional',
    links: [
      { label: 'About AASU & History (1972)', href: '#at-a-glance' },
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
    href: '#latest',
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
