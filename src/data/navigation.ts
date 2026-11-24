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
    href: '/about',
    groups: [
      {
        heading: 'Who We Are',
        links: [
          {
            label: 'About AASU Overview',
            href: '/about',
            description: 'Explore AASU identity, legacy, governance and partners',
          },
          {
            label: 'Who We Are',
            href: '/about/who-we-are',
            description: 'Institutional identity, vision, mission, core values & mandate',
          },
          {
            label: 'History & Legacy',
            href: '/about/history-legacy',
            description: 'Founded in Kumasi in 1972 and five decades of solidarity',
          },
          {
            label: 'Partners & Institutional Relations',
            href: '/about/partners',
            description: 'Continental and international cooperation frameworks',
          },
        ],
      },
      {
        heading: 'Governance',
        links: [
          {
            label: 'Governance Overview & Congress',
            href: '/about/governance',
            description: "The Union's highest democratic decision-making organ",
          },
          {
            label: 'Executive Committee (2026-2029)',
            href: '/about/governance',
            description: 'Elected continental student leadership',
          },
          {
            label: 'Secretariat & Governing Documents',
            href: '/about/governance',
            description: 'Headquarters in Accra, Ghana and official instruments',
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
        href: '/about/history-legacy',
      },
      {
        tag: 'Democratic Leadership',
        title: 'Executive Committee & Continental Governance',
        description:
          'Meet the elected 2026-2029 Executive Committee and explore AASU\u2019s democratic organs.',
        href: '/about/governance',
      },
    ],
  },
  {
    id: 'our-work',
    label: 'Our Work',
    href: '/what-we-do',
    groups: [
      {
        heading: 'Our Strategic Priorities',
        links: [
          {
            label: "01. Education & Students' Rights",
            href: '/what-we-do/strategic-priorities/education-and-students-rights',
          },
          {
            label: '02. Capacity Building, Skills Development & Employability',
            href: '/what-we-do/strategic-priorities/capacity-building-skills-development-and-employability',
          },
          {
            label: '03. Gender Equity & Social Inclusion',
            href: '/what-we-do/strategic-priorities/gender-equity-and-social-inclusion',
          },
          {
            label: '04. Migration, Mobility & Exchanges',
            href: '/what-we-do/strategic-priorities/migration-mobility-and-exchanges',
          },
          {
            label: '05. Climate Action & Environmental Sustainability',
            href: '/what-we-do/strategic-priorities/climate-action-and-environmental-sustainability',
          },
          {
            label: '06. Democracy, Good Governance, Peace & Security',
            href: '/what-we-do/strategic-priorities/democracy-good-governance-peace-and-security',
          },
          {
            label: '07. Pan Africanism & African Culture',
            href: '/what-we-do/strategic-priorities/pan-africanism-and-african-culture',
          },
        ],
      },
      {
        heading: 'Programmes, Policy & Impact',
        links: [
          {
            label: 'What We Do Overview',
            href: '/what-we-do',
            description: 'Overview of AASU priorities, programmes and outcomes',
          },
          {
            label: 'Programmes & Initiatives',
            href: '/what-we-do/programmes',
            description: 'Flagship, ongoing, completed and joint initiatives',
          },
          {
            label: 'Campaigns & Advocacy',
            href: '/what-we-do/campaigns-advocacy',
            description: 'Student rights, welfare and education policy advocacy',
          },
          {
            label: 'Policy Engagement & Representation',
            href: '/what-we-do/policy-engagement',
            description: 'Continental and international policy dialogues',
          },
          {
            label: 'Results & Impact',
            href: '/what-we-do/results-impact',
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
        href: '/what-we-do/programmes',
      },
      {
        tag: 'Impact & Reports',
        title: 'Results & Annual Highlights',
        description:
          'Explore verified 2025-2026 outcomes, policy dialogues and official annual reports.',
        href: '/what-we-do/results-impact',
      },
    ],
  },
  {
    id: 'membership',
    label: 'Membership',
    href: '/membership',
    groups: [
      {
        heading: 'Network & Regions',
        links: [
          {
            label: 'Our Membership',
            href: '/membership/our-membership',
            description: 'Representative structure and continental reach',
          },
          {
            label: 'Member Unions Directory',
            href: '/membership/member-unions',
            description: 'Searchable directory of verified member unions',
          },
          {
            label: 'Regional Membership',
            href: '/membership/regions',
            description: 'North, West, Central, East & Southern Africa',
          },
        ],
      },
      {
        heading: 'Affiliation & Services',
        links: [
          {
            label: 'Membership & Affiliation',
            href: '/membership/affiliation',
            description: 'Categories, eligibility and application procedures',
          },
          {
            label: 'Member Services',
            href: '/membership/services',
            description: 'Institutional support, coordination & guidance',
          },
        ],
      },
    ],
    featured: [
      {
        tag: 'Continental Network',
        title: 'One Continent. A United Student Voice.',
        description:
          'Explore verified national and sub-national student unions across all five African regions.',
        href: '/membership/member-unions',
      },
      {
        tag: 'Regional Explorer',
        title: 'Five Regions Across Africa',
        description:
          'Browse North, West, Central, East and Southern Africa regional hubs and leadership.',
        href: '/membership/regions',
      },
    ],
  },
  {
    id: 'explore',
    label: 'Explore',
    href: '/news',
    groups: [
      {
        heading: 'News & Media',
        links: [
          { label: 'Latest News', href: '/news' },
          { label: 'Press Releases & Statements', href: '/news/press-releases' },
          { label: 'Speeches & Addresses', href: '/news/speeches' },
          { label: 'Media Gallery', href: '/news/gallery' },
          { label: 'Media Centre', href: '/news/media-centre' },
        ],
      },
      {
        heading: 'Events',
        links: [
          { label: 'Events Calendar', href: '/events' },
          { label: 'Major Summits & Conferences', href: '/events/summits-conferences' },
          { label: 'Past Events & Highlights', href: '/events/past' },
        ],
      },
      {
        heading: 'Knowledge Hub',
        links: [
          { label: 'Knowledge Hub Overview', href: '/knowledge-hub' },
          { label: 'Research & Policy Papers', href: '/knowledge-hub/research' },
          { label: 'Reports & Annual Reports', href: '/knowledge-hub/reports' },
          { label: 'Policy Briefs & Position Papers', href: '/knowledge-hub/policy-briefs' },
          { label: 'Toolkits & Guides', href: '/knowledge-hub/resources' },
          { label: 'Institutional Documents', href: '/knowledge-hub/institutional-documents' },
        ],
      },
      {
        heading: 'Opportunities',
        links: [
          { label: 'Opportunities Portal', href: '/opportunities' },
          { label: 'Scholarships & Fellowships', href: '/opportunities/scholarships-fellowships' },
          { label: 'Conferences, Exchanges & Training', href: '/opportunities/conferences-training' },
          { label: 'Internships & Volunteering', href: '/opportunities/internships-volunteering' },
          { label: 'Careers at AASU', href: '/opportunities/careers' },
        ],
      },
    ],
    featured: [
      {
        tag: 'Featured Story · 20 July 2026',
        title: 'Sustainable Financing Reforms at Innovating Education in Africa 2026',
        description:
          'AASU led a high-level Oxford-style debate supporting the AU Decade of Education and Skills (2025-2034).',
        href: '/news/innovating-education-africa-2026-debate',
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
      { label: 'About AASU & History (1972)', href: '/about' },
      { label: 'Seven Strategic Priorities', href: '/what-we-do/strategic-priorities' },
      { label: 'Member Unions Directory', href: '/membership/member-unions' },
      { label: 'Regional Membership (5 Regions)', href: '/membership/regions' },
      { label: 'Membership & Affiliation', href: '/membership/affiliation' },
      { label: 'Partner With AASU', href: '/about/partners' },
    ],
  },
  {
    category: 'Programmes & Resources',
    links: [
      { label: 'Greening Skills & Qualifications (ACQF)', href: '#programmes' },
      { label: 'Next Level Skills for Student Leaders (NELS)', href: '#programmes' },
      { label: 'AASU Inspire Tour', href: '#programmes' },
      { label: 'Knowledge Hub & Publications', href: '/knowledge-hub' },
      { label: 'Official Statements & Press Releases', href: '/news/press-releases' },
      { label: 'Media Gallery & Media Centre', href: '/news/gallery' },
      { label: 'Events Calendar & Summits', href: '/events' },
      { label: 'Opportunities Portal & Internships', href: '/opportunities' },
      { label: 'Contact & Student Support', href: '/contact' },
    ],
  },
]

export const DISCOVERY_FEATURED: MegaMenuFeaturedCard[] = [
  {
    tag: 'Policy Dialogue · 2026',
    title: 'Sustainable Financing Reforms at Innovating Education in Africa 2026',
    description:
      'AASU led a high-level Oxford-style debate examining financing reforms for the AU Decade of Education and Skills (2025-2034).',
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
