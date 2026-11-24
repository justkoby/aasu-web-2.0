export type CmsWorkflowStatus =
  | 'draft'
  | 'editorial_review'
  | 'approved'
  | 'scheduled'
  | 'published'
  | 'archived'

export interface RelatedDownload {
  title: string
  fileUrl: string
  format: 'PDF' | 'External'
  externalUrl?: string
}

export interface NewsArticleRecord {
  slug: string
  status: CmsWorkflowStatus
  title: string
  date: string
  dateIso: string
  category:
    | 'Education Policy'
    | 'Climate & Sustainability'
    | 'Capacity Building'
    | 'Governance & Democracy'
    | 'Gender & Health'
    | 'International Engagements'
  authorOrDepartment: string
  featuredImage: string
  featuredImageAlt: string
  featuredImageCaption?: string
  excerpt: string
  body: string[]
  relatedImages?: { src: string; alt: string; caption?: string }[]
  downloads?: RelatedDownload[]
  featured?: boolean
}

export type StatementType =
  | 'Official Press Release'
  | 'Public Statement'
  | 'Policy Position'

export interface PressReleaseRecord {
  slug: string
  status: CmsWorkflowStatus
  refNumber?: string
  statementType: StatementType
  topic: string
  title: string
  date: string
  dateIso: string
  year: string
  issuingAuthority: string
  signatory: string
  excerpt: string
  fullText: string[]
  pdfUrl?: string
  pdfStatusNote?: string
  relatedArticleSlug?: string
}

export interface SpeechRecord {
  slug: string
  status: CmsWorkflowStatus
  kind: 'Official Speech' | 'Address' | 'Remarks' | 'Memorial Tribute'
  title: string
  speaker: string
  positionAtTime: string
  event: string
  date: string
  dateIso: string
  location: string
  photograph: string
  photographAlt: string
  summary: string
  verifiedQuote?: string
  transcript?: string[]
  transcriptStatusNote?: string
  videoUrl?: string
  videoEmbedId?: string
  relatedDocuments?: RelatedDownload[]
}

export interface MediaAssetRecord {
  id: string
  thumbSrc: string
  fullSrc: string
  alt: string
  caption: string
  credit: string
}

export interface MediaAlbumRecord {
  slug: string
  status: CmsWorkflowStatus
  title: string
  category: string
  date: string
  location: string
  description: string
  coverThumb: string
  coverFull: string
  coverAlt: string
  assets: MediaAssetRecord[]
}

export interface ExternalArchiveAlbum {
  title: string
  category: string
  year: string
  url: string
}

export interface VideoMediaRecord {
  id: string
  status: CmsWorkflowStatus
  title: string
  event: string
  date: string
  location: string
  speaker: string
  description: string
  youtubeId: string
  watchUrl: string
  posterImage: string
  posterAlt: string
}

export interface PressResourceRecord {
  id: string
  title: string
  category: string
  year: string
  description: string
  fileUrl: string
  format: string
}

export interface BrandAssetDownload {
  id: string
  title: string
  description: string
  preview: string
  darkPreview?: boolean
  formats: { label: string; url: string }[]
}

export const NEWS_MEDIA_NAV_CARDS = [
  {
    id: 'news',
    title: 'Latest News',
    description:
      'Editorial dispatches, continental policy dialogues and programme updates from across Africa.',
    href: '/news',
  },
  {
    id: 'press-releases',
    title: 'Press Releases & Statements',
    description:
      'Searchable institutional archive of official statements, communiques and policy positions.',
    href: '/news/press-releases',
  },
  {
    id: 'speeches',
    title: 'Speeches & Addresses',
    description:
      'Official addresses, high-level remarks and institutional tributes by AASU leadership.',
    href: '/news/speeches',
  },
  {
    id: 'gallery',
    title: 'Media Gallery',
    description:
      'Curated photo albums, programme photography and verified video engagements.',
    href: '/news/gallery',
  },
  {
    id: 'media-centre',
    title: 'Media Centre',
    description:
      'Official press contacts, unchanged brand logos, boilerplate facts and downloadable reports.',
    href: '/news/media-centre',
  },
]

// Verified AASU news articles imported directly from AASU's institutional news archive
export const NEWS_ARTICLES: NewsArticleRecord[] = [
  {
    slug: 'acqf-greening-skills-qualifications-2026',
    status: 'published',
    featured: true,
    title:
      'AASU & ETF Release Key Deliverables for ACQF Pilot II on Greening Skills and Qualifications in Africa',
    date: '29 July 2026',
    dateIso: '2026-07-29',
    category: 'Climate & Sustainability',
    authorOrDepartment: 'AASU Secretariat & Climate Action Unit',
    featuredImage: '/images/news/acqf-deliverables-2026.webp',
    featuredImageAlt:
      'AASU and European Training Foundation ACQF Pilot II deliverables on Greening Skills and Qualifications in Africa',
    featuredImageCaption:
      'ACQF Pilot II deliverables produced by AASU and the European Training Foundation.',
    excerpt:
      'The All-Africa Students Union (AASU), in collaboration with the European Training Foundation (ETF) and partners, has released three essential resources on greening skills and qualifications in Africa.',
    body: [
      'The All-Africa Students Union, in collaboration with the European Training Foundation (ETF) and other partners, undertook the ACQF Pilot II Project on Greening Skills and Qualifications in Africa User Engagement.',
      'The project focused on establishing a strong foundation for aligning green skills with education and qualifications frameworks across the African continent. It sought to develop a conceptual framework containing a working definition of green skills adapted to the African context, produce a casebook of good practices on greening skills and qualifications in Africa, and create a stakeholder toolkit for embedding green skills into education and training systems.',
      'Following the successful implementation of the project, the three key deliverables have now been completed and made available. These resources reflect the views, experiences, and recommendations gathered through surveys and interviews with a wide range of stakeholders, including students and young people, National Qualifications Authorities, policymakers, industry leaders, academics, and religious leaders.',
      'Whether you are a student, educator, policymaker, researcher, or youth leader, these three essential resources provide valuable insights, practical strategies, and real-world examples needed to support the development of greener and more sustainable education, training, and qualification systems across Africa.',
    ],
    downloads: [
      {
        title: 'Toolkit on Greening Skills and Qualifications in Africa (2026)',
        fileUrl: '/documents/acqf-toolkit-greening-skills.pdf',
        format: 'PDF',
        externalUrl:
          'https://acqf.africa/resources/research/green-skills/acqf-aasu-toolkit-on-greening-skills-and-qualifications-in-africa',
      },
      {
        title:
          'Book of Good Practices for the Greening of Skills and Qualifications in Africa (2026)',
        fileUrl: '/documents/acqf-book-of-good-practices.pdf',
        format: 'PDF',
        externalUrl:
          'https://acqf.africa/resources/research/green-skills/acqf-case-book-on-green-skills-qualifications-good-practices',
      },
      {
        title:
          "Greening Skills and Qualifications in Africa: Users' Engagement (2026)",
        fileUrl: '/documents/acqf-users-engagement.pdf',
        format: 'PDF',
        externalUrl:
          'https://acqf.africa/resources/research/green-skills/acqf-greening-skills-and-qualifications-in-africa-users-engagement',
      },
    ],
  },
  {
    slug: 'innovating-education-africa-2026-debate',
    status: 'published',
    title:
      'AASU Champions Sustainable Financing Reforms at Innovating Education in Africa 2026 Policy Dialogue',
    date: '20 July 2026',
    dateIso: '2026-07-20',
    category: 'Education Policy',
    authorOrDepartment: 'AASU Policy & Strategic Initiatives',
    featuredImage: '/images/web/au-education-2026.webp',
    featuredImageAlt:
      'AASU representative addressing the Innovating Education in Africa 2026 Policy Dialogue at the African Union',
    featuredImageCaption:
      'Oxford-style policy debate organised by AASU during Innovating Education in Africa 2026.',
    excerpt:
      'AASU led a high-level Oxford-style debate examining essential education financing reforms needed to realistically achieve the AU Decade of Education and Skills (2025-2034) targets.',
    body: [
      "As part of the Innovating Education in Africa 2026 Policy Dialogue, the All-Africa Students Union (AASU) participated in and organised a high-level Oxford-style debate addressing one of the continent's most urgent questions: whether the African Union's Decade of Education and Skills (2025-2034) targets require comprehensive financing reform to be realistically achievable.",
      "The debate provided a vibrant, high-impact platform for critical engagement on how African nations can sustainably resource the ambitious goals of the African Union's 10-year education framework.",
      "Chaired by Ramzy Fuseini, AASU's Special Projects and Strategic Initiatives Coordinator, the session featured contributions from Proposition and Opposition speakers Umar Farouk Abdul-Karim, Yaa Asantewaa Asante, Tahir Ahmad Muslim, and Elorm Joachim Desewu. Together, they explored perspectives on continental education financing models, public policy implementation, institutional governance, and the future of African youth.",
      'Through high-level policy dialogues such as this, AASU continues to ensure that African students are represented in continental governance spaces and recognised as essential partners in driving the successful implementation of the AU Decade of Education and Skills (2025-2034).',
    ],
    relatedImages: [
      {
        src: '/images/web/au-panel-2026.webp',
        alt: 'Panelists at the Innovating Education in Africa 2026 Policy Dialogue',
        caption: 'Panel dialogue during Innovating Education in Africa 2026.',
      },
    ],
  },
  {
    slug: 'times-higher-education-sustainability-2026',
    status: 'published',
    title:
      'AASU Featured in Maiden Times Higher Education Sustainability Impact Ratings 2026',
    date: '7 July 2026',
    dateIso: '2026-07-07',
    category: 'Climate & Sustainability',
    authorOrDepartment: 'AASU Communications & Sustainability Desk',
    featuredImage: '/images/web/the-sustainability-2026.webp',
    featuredImageAlt:
      'AASU feature page in the Times Higher Education Sustainability Impact Ratings 2026 publication',
    excerpt:
      'The All-Africa Students Union (AASU) has been featured in the maiden Times Higher Education Sustainability Impact Ratings 2026 publication, launched at the Global Sustainable Development Congress (GSDC) 2026.',
    body: [
      'The All-Africa Students Union (AASU) has been featured in the maiden Times Higher Education Sustainability Impact Ratings 2026 publication, launched at the Global Sustainable Development Congress (GSDC) 2026.',
      'The Sustainability Impact Ratings highlights the efforts of higher education institutions and stakeholders advancing the United Nations Sustainable Development Goals (SDGs), showcasing impactful sustainability initiatives from around the world.',
      "The feature highlights AASU's commitment to mobilising students across Africa to drive climate action, environmental sustainability, and sustainable development.",
      'AASU extended its gratitude to Times Higher Education and Naomi Firsht for the opportunity to contribute African student perspectives to the global sustainability conversation.',
    ],
    downloads: [
      {
        title: 'Read Times Higher Education Sustainability Impact Ratings 2026',
        fileUrl:
          'https://flipbooks.timeshighereducation.com/19712/148288/index.html?98172=&page=2',
        format: 'External',
      },
    ],
  },
  {
    slug: 'au-reflection-forum-2026',
    status: 'published',
    title:
      'Secretary-General Represents AASU at African Union Reflection Forum on Unconstitutional Changes of Government',
    date: '3 July 2026',
    dateIso: '2026-07-03',
    category: 'Governance & Democracy',
    authorOrDepartment: 'Office of the Secretary-General',
    featuredImage: '/images/news/au-reflection-forum-2026.webp',
    featuredImageAlt:
      'AASU Secretary-General Divine Kwadzodeh at the Third African Union Reflection Forum in Accra',
    excerpt:
      'Divine Kwadzodeh represented AASU at the Opening Session of the Third African Union Reflection Forum in Accra under the theme "Youth Inclusion for African Stability."',
    body: [
      'On Friday, 3 July 2026, the Secretary-General of the All-Africa Students Union (AASU), Divine Kwadzodeh, participated in the Opening Session of the Third African Union Reflection Forum on Unconstitutional Changes of Government, held in Accra from 3 to 4 July 2026 under the theme "Youth Inclusion for African Stability."',
      "Convened by the African Union Commission in partnership with the Government of Ghana, the Forum brought together government ministers, security chiefs, policymakers, governance experts, youth leaders and development partners to examine the causes of unconstitutional changes of government and to strengthen Africa's collective response to democratic instability.",
      "The Forum speaks directly to one of AASU's strategic priorities: Democracy, Good Governance, Peace and Security. Across the continent, political instability disrupts education, weakens public institutions, displaces communities and denies millions of young Africans the opportunity to learn, participate and contribute meaningfully to national development.",
      'Through its participation, AASU continues to ensure that the perspectives of African students form part of continental conversations on governance, peace and democratic development.',
    ],
  },
  {
    slug: 'adolescence-360-health-2026',
    status: 'published',
    title:
      'AASU Engages JHS Students in Winneba on Menstrual Hygiene and Reproductive Health',
    date: '24 June 2026',
    dateIso: '2026-06-24',
    category: 'Gender & Health',
    authorOrDepartment: 'AASU Gender Equity & Social Inclusion Unit',
    featuredImage: '/images/web/adol-360-winneba.webp',
    featuredImageAlt:
      'AASU Adolescence 360 Health Outreach Project team with junior high school students in Winneba',
    excerpt:
      'Through the Adolescence 360 Health Outreach Project, AASU engaged students of A.M.E. Zion "D" JHS in Winneba to break stigmas and promote healthy practices.',
    body: [
      'The All-Africa Students Union (AASU) engaged students of A.M.E. Zion "D" JHS in Winneba through the Adolescence 360 Health Outreach Project, creating a safe and interactive space for discussions on puberty, menstrual hygiene, reproductive health, and overall adolescent wellbeing.',
      'By providing accurate information and encouraging open dialogue, the outreach helps break harmful stigmas, promote healthy practices, and empower young people to make informed decisions about their health and future.',
      'The initiative reflects AASU\u2019s ongoing commitment to student welfare, inclusive education and community-level impact.',
    ],
    relatedImages: [
      {
        src: '/images/web/adol-360-classroom.webp',
        alt: 'Interactive classroom health education session during Adolescence 360 in Winneba',
        caption: 'Classroom session during the Adolescence 360 outreach in Winneba.',
      },
    ],
  },
  {
    slug: 'african-child-day-liberia-2026',
    status: 'published',
    title:
      'AASU Convenes High-Level Strategic Dialogue in Liberia for Day of the African Child 2026',
    date: '22 June 2026',
    dateIso: '2026-06-22',
    category: 'Education Policy',
    authorOrDepartment: 'AASU West Africa Regional Representation',
    featuredImage: '/images/web/african-child-2026.webp',
    featuredImageAlt:
      'AASU Executive Committee Member Oumu Sall addressing the Day of the African Child 2026 Strategic Dialogue in Liberia',
    excerpt:
      'AASU Executive Committee Member for West Africa Amb Oumu Sall convened youth, government and community stakeholders in Liberia to discuss child rights and WASH services.',
    body: [
      "As part of the All-Africa Students Union's activities commemorating the Day of the African Child 2026, AASU's Executive Committee Member for West Africa, Amb Oumu Sall, convened a high-level Strategic Dialogue bringing together student leaders, youth organisations, government officials, development partners, civil society actors and community leaders in Liberia.",
      'Held under the African Union\u2019s 2026 theme, "Ensuring Universal Access to Water, Sanitation and Hygiene for Every Child in Africa," the dialogue provided a platform to reflect on progress made in advancing the rights and welfare of African children while examining ongoing barriers to quality education and safe learning environments.',
      'Honouring the memory of the students of Soweto, participants explored educational equity, child rights, youth participation in governance, and the impact of water, sanitation and hygiene on learning outcomes.',
    ],
  },
  {
    slug: 'world-youth-forum-china-2026',
    status: 'published',
    title:
      'AASU President Osisiogu Osikenyi Represents African Students at the World Youth Development Forum in China',
    date: '22 June 2026',
    dateIso: '2026-06-22',
    category: 'International Engagements',
    authorOrDepartment: 'Office of the President',
    featuredImage: '/images/news/world-youth-forum-china-2026.webp',
    featuredImageAlt:
      'AASU President Osisiogu Osikenyi representing African students at the World Youth Development Forum in China',
    excerpt:
      'President Osisiogu Osikenyi represented AASU in Wuhan and Hubei Province, strengthening China-Africa youth relations and engaging African students in the diaspora.',
    body: [
      'The World Youth Development Forum was held in Wuhan, China, from 14 to 17 June 2026, bringing together more than 500 representatives of United Nations agencies, international youth organisations, and young leaders from over 120 countries.',
      'The All-Africa Students Union (AASU) was represented by its President, Osisiogu Osikenyi, who participated in the youth roundtable discussion on international cooperation, youth leadership, shared prosperity, and inclusive sustainable development.',
      'Following the Forum, President Osisiogu addressed the China-Africa Youth Culture Forum held in Shiyan, Hubei Province, from 18 to 19 June 2026, and met with African students at Hubei University of Medicine to discuss student welfare, academic mobility and diaspora solidarity.',
    ],
  },
  {
    slug: 'reparatory-justice-ghana-2026',
    status: 'published',
    title:
      'AASU Participates in High-Level Consultative Conference on Reparatory Justice in Accra',
    date: '19 June 2026',
    dateIso: '2026-06-19',
    category: 'Governance & Democracy',
    authorOrDepartment: 'Office of the Secretary-General',
    featuredImage: '/images/news/reparatory-justice-ghana-2026.webp',
    featuredImageAlt:
      'AASU Secretary-General Divine Kwadzodeh at the High-Level Consultative Conference on Reparatory Justice in Accra',
    excerpt:
      'Secretary-General Divine Kwadzodeh represented AASU at the Accra conference advancing implementation of UN Resolution A/RES/80/250 on Reparatory Justice.',
    body: [
      'The All-Africa Students Union (AASU) participated in the High-Level Consultative Conference on the Next Steps to the Landmark United Nations Resolution A/RES/80/250 on Reparatory Justice, held in Accra, Ghana.',
      'The conference brought together Heads of State and Government, policymakers, scholars, advocates, youth leaders, and stakeholders to advance global dialogue on justice, historical accountability, and reparatory justice for Africa and people of African descent.',
      'Representing AASU, Secretary-General Divine Kwadzodeh reaffirmed the importance of moving from recognition to implementation and ensuring that African youth remain active participants in shaping a just and equitable future.',
    ],
  },
  {
    slug: 'climate-resilience-elearning-africa-2026',
    status: 'published',
    title:
      'AASU Showcases Youth-Led Climate Action and Resilience Building at eLearning Africa 2026',
    date: '5 June 2026',
    dateIso: '2026-06-05',
    category: 'Climate & Sustainability',
    authorOrDepartment: 'AASU Programmes Directorate',
    featuredImage: '/images/news/climate-resilience-2026.webp',
    featuredImageAlt:
      'AASU Programmes Officer Hilda Osei-Poku presenting on climate resilience at eLearning Africa 2026 in Accra',
    excerpt:
      'Ms. Hilda Osei-Poku represented AASU at eLearning Africa 2026 in Accra, highlighting youth-led climate education and community resilience initiatives.',
    body: [
      'The All-Africa Students Union (AASU) amplified the voices and contributions of African youth in global conversations on sustainable development through its active participation in eLearning Africa 2026 in Accra, Ghana.',
      'Representing the Union, Ms. Hilda Osei-Poku, Programmes Officer at AASU, delivered a presentation and facilitated discussions on the role of climate education, community action, and local resilience in addressing environmental challenges across Africa.',
      'Drawing on youth-led and student-driven projects across the continent, the session emphasised that young people must be recognised as active partners, innovators, and co-creators of sustainable change.',
    ],
  },
  {
    slug: 'steam-skills-elearning-africa-2026',
    status: 'published',
    title:
      'AASU Champions Practical STEAM and Digital Skills Development at eLearning Africa 2026',
    date: '5 June 2026',
    dateIso: '2026-06-05',
    category: 'Capacity Building',
    authorOrDepartment: 'AASU Capacity Building & Skills Unit',
    featuredImage: '/images/news/steam-skills-2026.webp',
    featuredImageAlt:
      'Bismark Amefianu moderating a STEAM and digital skills session at eLearning Africa 2026',
    excerpt:
      'At eLearning Africa 2026, Bismark Amefianu moderated a solution-oriented session on practical STEAM and digital skills models for youth innovation.',
    body: [
      'At the 19th International Conference and Exhibition on Digital Education, Training and Skills Development (eLearning Africa 2026), co-hosted by the Ministry of Education of the Republic of Ghana, Mr. Bismark Amefianu moderated a session titled "Practical STEAM and Digital Skills Models for Youth Digital Innovation."',
      'Educators, policymakers, youth development practitioners and innovators examined how Science, Technology, Engineering, Arts and Mathematics (STEAM) education and digital competencies drive employability and entrepreneurship among African youth.',
      'Case studies from THE CUBE in The Gambia and Partnership Bureau in Ghana demonstrated scalable, community-centred models connecting learning to real-world digital transformation.',
    ],
  },
  {
    slug: 'gdn-regional-meeting-uk-2026',
    status: 'published',
    title:
      'AASU Represented at Groningen Declaration Network Regional Meeting in the United Kingdom',
    date: '5 June 2026',
    dateIso: '2026-06-05',
    category: 'International Engagements',
    authorOrDepartment: 'AASU Policy Advisory',
    featuredImage: '/images/news/gdn-uk-2026.webp',
    featuredImageAlt:
      'AASU Policy Advisor Spencer Kyirem at the Groningen Declaration Network Regional Meeting in Manchester',
    excerpt:
      'Policy Advisor Spencer Kyirem represented AASU at the Groningen Declaration Network Regional Meeting hosted by Manchester Metropolitan University.',
    body: [
      'The All-Africa Students Union (AASU) was represented by Policy Advisor Spencer Kyirem at the Groningen Declaration Network (GDN) Regional Meeting hosted by Manchester Metropolitan University in the United Kingdom under the theme "Skills Without Limits: Developing the Future Skills Ecosystem."',
      'Discussions focused on digital credentials, recognition of qualifications, lifelong learning, academic mobility, and workforce readiness.',
      "AASU's participation reflects the Union's ongoing commitment to advocating for policies that improve recognition of African qualifications and reduce barriers to cross-border student mobility.",
    ],
  },
  {
    slug: 'saqa-ceo-courtesy-visit-2026',
    status: 'published',
    title:
      'AASU Secretary-General Receives SAQA CEO on Courtesy Visit to Strengthen Pan-African Educational Cooperation',
    date: '4 June 2026',
    dateIso: '2026-06-04',
    category: 'International Engagements',
    authorOrDepartment: 'AASU Secretariat, Accra',
    featuredImage: '/images/news/saqa-ceo-visit-2026.webp',
    featuredImageAlt:
      'AASU Secretary-General Divine Kwadzodeh with SAQA CEO Nadia Starr at the AASU Secretariat in Accra',
    featuredImageCaption:
      'Secretary-General Divine Kwadzodeh with SAQA CEO Ms. Nadia Starr at the AASU Secretariat in Accra, 4 June 2026.',
    excerpt:
      'Secretary-General Divine Kwadzodeh welcomed South African Qualifications Authority (SAQA) CEO Ms. Nadia Starr to the AASU Secretariat in Ghana.',
    body: [
      'The Secretary-General of the All-Africa Students Union (AASU), Mr. Divine Kwadzodeh, welcomed the Chief Executive Officer of the South African Qualifications Authority (SAQA), Ms. Nadia Starr, to the AASU Secretariat in Ghana during her first official visit to the country.',
      "Discussions explored strengthening partnerships that promote academic excellence, youth leadership, and the recognition of qualifications to facilitate greater educational and professional mobility across Africa in support of the African Union's Agenda 2063.",
      'Both leaders reaffirmed their shared commitment to advancing inclusive quality education and meaningful institutional cooperation across the continent.',
    ],
  },
  {
    slug: 'upsa-nels-strategic-meeting-2026',
    status: 'published',
    title: 'UPSA Hosts 3rd Strategic Project Meeting of the NELS Project',
    date: '28 March 2026',
    dateIso: '2026-03-28',
    category: 'Capacity Building',
    authorOrDepartment: 'AASU Capacity Building & NELS Consortium',
    featuredImage: '/images/web/nels-consortium.webp',
    featuredImageAlt:
      'Consortium partners during the 3rd Strategic Project Meeting of the NELS Project in Accra',
    excerpt:
      'The University of Professional Studies, Accra (UPSA) hosted the 3rd Strategic Project Meeting of the Next Level Skills for Student Leaders (NELS) initiative.',
    body: [
      'The University of Professional Studies, Accra (UPSA) hosted the 3rd Strategic Project Meeting of the Next Level Skills for Student Leaders (NELS) Project, reaffirming its commitment to student leadership development and international academic collaboration.',
      'Implemented by a consortium of universities and student organisations across Africa and Europe, the NELS Project equips student leaders with practical leadership, digital, and intercultural competencies.',
    ],
  },
  {
    slug: '14th-congress-elections-final-phase-2025',
    status: 'published',
    title:
      'Second and Final Phase of Elections of the 14th AASU Elective Congress Concluded',
    date: '16 December 2025',
    dateIso: '2025-12-16',
    category: 'Governance & Democracy',
    authorOrDepartment: 'AASU Electoral Commission',
    featuredImage: '/images/news/elections-final-2025.webp',
    featuredImageAlt:
      'Official announcement graphic for the conclusion of the 14th AASU Elective Congress elections',
    excerpt:
      'AASU formally announced the conclusion of the second and final phase of elections for the 14th Elective Congress, completing the 2026-2029 Executive Committee.',
    body: [
      'On 16 December 2025, the All-Africa Students Union (AASU) formally announced the successful conduct and conclusion of the second and final phase of elections for the 14th Elective Congress, held on 15 December 2025.',
      'In accordance with the AASU Constitution and the Electoral Guidelines of the 14th Elective Congress, all outstanding Executive Committee and Secretariat positions were duly filled following a transparent voting process overseen by Electoral Commission Chairperson Miss Angel Mbuthia.',
      'The newly elected leadership assumed office in early 2026 for the 2026-2029 term, advancing the welfare, rights and aspirations of African students across the continent and in the diaspora.',
    ],
    downloads: [
      {
        title: 'Election Guidelines for the 14th Elective Congress (PDF)',
        fileUrl: '/documents/aasu-14th-congress-election-guidelines.pdf',
        format: 'PDF',
      },
    ],
  },
]

// Verified Official Press Releases & Statements (exact institutional wording & reference numbers preserved)
export const PRESS_RELEASES: PressReleaseRecord[] = [
  {
    slug: 'protection-african-students-south-africa-2026',
    status: 'published',
    refNumber: 'PR.SG.26.017',
    statementType: 'Public Statement',
    topic: "Education & Students' Rights",
    title: 'AASU Calls for Enhanced Protection of African Students in South Africa',
    date: '3 July 2026',
    dateIso: '2026-07-03',
    year: '2026',
    issuingAuthority: 'Office of the Secretary-General, AASU',
    signatory: 'Divine Edem Kwadzodeh, Secretary-General',
    excerpt:
      'The All-Africa Students Union (AASU) is closely monitoring recent developments in South Africa and calling for visible institutional protection for African students.',
    fullText: [
      'The All-Africa Students Union (AASU) is closely monitoring recent developments in the Republic of South Africa and the concerns these have generated among African students, their families, national student unions and higher education stakeholders across the continent.',
      "As Africa advances the African Union's vision of continental integration, academic mobility and people-to-people cooperation, the safety and dignity of every African student studying beyond his or her national borders must remain a shared continental responsibility. No student should have to pursue his or her education under conditions of fear, uncertainty or intimidation. Over the past several days, AASU has engaged recognised student unions and student leaders in South Africa and other parts of the continent to obtain first-hand information on the evolving situation.",
      'From these consultations, the Union notes the assurances received from South African student leaders that, based on information currently available to them, there have been no verified reports of organised attacks specifically targeting foreign students within universities and other higher education institutions. We commend South African student unions for their responsible engagement with university authorities, their efforts to reassure students, discourage misinformation and promote calm across campuses.',
      'At the same time, AASU recognises that incidents reported in some communities and schools, together with heightened public tensions surrounding migration, have understandably generated anxiety among many African students and their families. Even where university campuses remain stable, the broader environment requires vigilance and proactive measures to safeguard students.',
      'The Union therefore emphasises that student safety cannot depend solely on the absence of reported attacks. It must be guaranteed through visible institutional protection, effective coordination among relevant authorities, and sustained public confidence. Every African student in South Africa should be able to study, conduct research, move freely and participate fully in academic life without fear of harassment, discrimination, intimidation or violence. AASU unequivocally condemns xenophobia, hate speech, vigilantism, collective punishment and every form of violence directed against foreign nationals.',
      "The Union equally recognises that the management of migration and the enforcement of immigration laws remain the sovereign responsibility of the Government of the Republic of South Africa. Such responsibilities must, however, be exercised through lawful institutions, due process and full respect for constitutional principles, human dignity and South Africa's regional and international obligations. Legitimate policy debates concerning migration can never justify violence, intimidation or discrimination against individuals on account of their nationality or perceived immigration status.",
    ],
    pdfStatusNote:
      'Signed letterhead PDF copy pending upload from the AASU Secretariat press archive.',
  },
  {
    slug: 'congratulations-nans-president-afeez-2026',
    status: 'published',
    refNumber: 'PR.SG.26.013',
    statementType: 'Official Press Release',
    topic: 'Member Unions & Leadership',
    title:
      'AASU Congratulates Comrade Akinteye Babatunde Afeez on His Election as President of NANS',
    date: '4 June 2026',
    dateIso: '2026-06-04',
    year: '2026',
    issuingAuthority: 'Office of the Secretary-General, AASU',
    signatory: 'Divine Edem Kwadzodeh, Secretary-General',
    excerpt:
      'The All-Africa Students Union (AASU) extended heartfelt congratulations to Comrade Akinteye Babatunde Afeez on his election as President of the National Association of Nigerian Students (NANS).',
    fullText: [
      "The All-Africa Students Union (AASU) has extended its heartfelt congratulations to Comrade Akinteye Babatunde Afeez on his election as President of the National Association of Nigerian Students (NANS), one of Africa's most influential student representative bodies.",
      'AASU noted that his emergence reflects the confidence reposed in his vision, leadership capabilities, and commitment to advancing the interests of students and young people.',
      'The Union highlighted the critical role student leadership continues to play in shaping conversations around education, governance, social development, and democratic participation across the continent.',
      'AASU recognized the strategic role of NANS in promoting student welfare, educational advocacy, civic engagement, and youth empowerment in Nigeria. The Union also acknowledged the contributions of NANS in inspiring student movements beyond national borders.',
      'Expressing confidence in the new leadership, AASU stated that it looks forward to strengthening collaboration with NANS in pursuit of shared objectives, including educational transformation, youth leadership development, Pan-African solidarity, and sustainable progress for students across Africa.',
      'The Union once again congratulated Comrade Akinteye Babatunde Afeez and wished him a successful and impactful tenure in office.',
    ],
    pdfStatusNote:
      'Signed letterhead PDF copy pending upload from the AASU Secretariat press archive.',
  },
  {
    slug: 'end-abduction-students-educators-nigeria-2026',
    status: 'published',
    refNumber: 'PR.SG.26.012',
    statementType: 'Policy Position',
    topic: "Education & Students' Rights",
    title:
      'AASU Demands Urgent Action to End the Abduction of Students and Educators in Nigeria',
    date: '3 June 2026',
    dateIso: '2026-06-03',
    year: '2026',
    issuingAuthority: 'Office of the President & Secretary-General, AASU',
    signatory:
      'Divine Edem Kwadzodeh (Secretary-General) & Osisiogu Osikenyi E. (President)',
    excerpt:
      'The All-Africa Students Union (AASU) expressed deep concern over the abduction of pupils and teachers in Oyo State, Nigeria, calling for decisive school security measures.',
    fullText: [
      'The All-Africa Students Union (AASU) has expressed deep concern over the abduction of pupils and teachers in Oyo State, Nigeria, and the continuing insecurity affecting educational institutions and communities across the country.',
      'The Union noted that the reported kidnapping of schoolchildren and educators once again exposes the growing threats facing students, teachers, and educational systems in parts of Africa.',
      'AASU emphasized that educational institutions must remain safe spaces for learning, growth, and development, free from fear, violence, and criminal attacks.',
      'The Union expressed solidarity with the affected pupils, teachers, families, and communities while calling for the immediate and safe release of all victims. AASU also commended the efforts of security agencies and relevant authorities while urging intensified operations to secure the release of those affected and prevent future occurrences.',
      'AASU further stressed the need for stronger security measures around schools, improved intelligence gathering, community-based protection mechanisms, and sustained investment in safeguarding educational environments.',
      'The Union noted its willingness to work closely with the leadership of the National Association of Nigerian Students (NANS) under the stewardship of Comrade Akinteye Babatunde Afeez to promote safer learning environments and stronger protection mechanisms for students.',
      'AASU called on the Federal Government of Nigeria, security agencies, and state authorities to act decisively to address the security challenges confronting schools and ensure that every Nigerian student can pursue education safely and with dignity.',
    ],
    pdfStatusNote:
      'Signed letterhead PDF copy pending upload from the AASU Secretariat press archive.',
  },
  {
    slug: 'utumishi-girls-academy-school-safety-kenya-2026',
    status: 'published',
    refNumber: 'PR.SG.26.011',
    statementType: 'Public Statement',
    topic: 'Student Safety & Condolences',
    title:
      'AASU Calls for Accountability and Enhanced School Safety Following the Utumishi Girls Academy Tragedy in Kenya',
    date: '3 June 2026',
    dateIso: '2026-06-03',
    year: '2026',
    issuingAuthority: 'Office of the Secretary-General, AASU',
    signatory: 'Divine Edem Kwadzodeh, Secretary-General',
    excerpt:
      'AASU expressed profound sorrow over the fire outbreak at Utumishi Girls Academy in Gilgil, Kenya, urging stronger safety standards and inspections in schools.',
    fullText: [
      'The All-Africa Students Union (AASU) has expressed profound sorrow over the tragic fire outbreak at Utumishi Girls Academy in Gilgil, Kenya, which resulted in the loss of young lives and left families, students, and communities in deep grief.',
      'AASU described the incident as a painful reminder of the importance of ensuring safe and secure learning environments across Africa.',
      'The Union expressed concern over reports indicating possible breaches of safety protocols, including overcrowding and challenges relating to emergency exit accessibility. While investigations remain ongoing, AASU noted that the incident highlights the urgent need for stronger safety standards, regular inspections, emergency preparedness measures, and effective enforcement of regulations within educational institutions.',
      'AASU commended Kenyan authorities for initiating investigations and called for a transparent, professional, and thorough process to establish accountability wherever negligence or failure to uphold safety obligations is identified.',
      'The Union further urged governments, school authorities, educational regulators, and stakeholders across Africa to prioritize student safety and invest in infrastructure, fire prevention systems, emergency response mechanisms, and student welfare services.',
      'AASU stands in solidarity with the Government and people of Kenya, the affected families, students, and school community during this difficult period.',
    ],
    pdfStatusNote:
      'Signed letterhead PDF copy pending upload from the AASU Secretariat press archive.',
  },
  {
    slug: 'condemnation-suspension-burkina-faso-student-union-2026',
    status: 'published',
    refNumber: 'PR.SG.26.008',
    statementType: 'Policy Position',
    topic: "Education & Students' Rights",
    title:
      "AASU Condemns the Suspension of Burkina Faso's Student Union and Calls for Protection of Student Rights",
    date: '28 May 2026',
    dateIso: '2026-05-28',
    year: '2026',
    issuingAuthority: 'Office of the Secretary-General, AASU',
    signatory: 'Divine Edem Kwadzodeh, Secretary-General',
    excerpt:
      'AASU condemned the suspension of the General Union of Students of Burkina Faso (UGEB) and called for the immediate restoration of freedom of student association.',
    fullText: [
      'The All-Africa Students Union (AASU) has strongly condemned the suspension of the General Union of Students of Burkina Faso (UGEB) and the reported arrest of student leaders and members in Burkina Faso.',
      'According to the Union, the development represents a setback to student representation, civic participation, and the fundamental rights of young people to organize and express themselves through legitimate student structures.',
      "AASU expressed deep concern over measures that restrict the operations of student organizations and undermine students' ability to participate effectively in matters affecting their education, welfare, and future.",
      'The Union emphasized that freedom of association and expression are fundamental principles that must be protected and respected.',
      "AASU called for the immediate restoration of students' rights to organize freely through their representative bodies and urged authorities to ensure the safety, dignity, and welfare of all affected students and student leaders.",
      'The Union further encouraged dialogue and engagement as the most appropriate means of addressing concerns involving students and their representative organizations.',
      'AASU reaffirmed its solidarity with the students of Burkina Faso and reiterated its commitment to defending student rights, academic freedom, democratic participation, and the voice of African youth across the continent.',
    ],
    pdfStatusNote:
      'Signed letterhead PDF copy pending upload from the AASU Secretariat press archive.',
  },
  {
    slug: 'africa-day-2026-water-sanitation',
    status: 'published',
    refNumber: 'PR.SG.26.007',
    statementType: 'Policy Position',
    topic: 'Pan-Africanism & Climate',
    title:
      'AASU Commemorates Africa Day 2026 and Calls for Sustainable Water and Sanitation Systems',
    date: '25 May 2026',
    dateIso: '2026-05-25',
    year: '2026',
    issuingAuthority: 'Office of the Secretary-General, AASU',
    signatory: 'Divine Edem Kwadzodeh, Secretary-General',
    excerpt:
      'Marking the 63rd anniversary of the OAU/AU, AASU called for strengthened investment in sustainable water availability and safe sanitation systems under Agenda 2063.',
    fullText: [
      'The All-Africa Students Union (AASU) joined Africans across the continent and in the diaspora in commemorating Africa Day 2026, marking the 63rd anniversary of the founding of the Organization of African Unity (OAU), now the African Union (AU).',
      'This year\u2019s commemoration was observed under the theme: "Assuring Sustainable Water Availability and Safe Sanitation Systems to Achieve the Goals of Agenda 2063."',
      'AASU noted that access to clean water and proper sanitation remains a major challenge in several African countries, affecting public health, food security, human dignity, and sustainable development.',
      'The Union emphasized that safe water and sanitation are not only development concerns but also matters of social justice, equity, and fundamental human rights. It stressed that sustainable development cannot be achieved while communities continue to face preventable health risks resulting from unsafe water and inadequate sanitation.',
      'AASU therefore called on African governments, institutions, development partners, and stakeholders to strengthen investments in sustainable water systems, sanitation infrastructure, environmental protection, and climate-resilient policies.',
      'The Union further encouraged African students and young people to contribute actively to environmental sustainability through advocacy, innovation, community engagement, and responsible environmental practices within their schools and communities.',
      'As Africa continues its journey toward greater integration and transformation, AASU reaffirmed its commitment to building a continent where every individual has access to safe water, quality education, good health, and equal opportunities for growth and development. Happy Africa Day.',
    ],
    pdfStatusNote:
      'Signed letterhead PDF copy pending upload from the AASU Secretariat press archive.',
  },
  {
    slug: 'rwanda-1994-genocide-commemoration-2026',
    status: 'published',
    refNumber: 'PR.SG.26.004',
    statementType: 'Public Statement',
    topic: 'Peace & Remembrance',
    title:
      'Official Statement on the Commemoration of the 1994 Genocide Against the Tutsi in Rwanda',
    date: '7 April 2026',
    dateIso: '2026-04-07',
    year: '2026',
    issuingAuthority: 'Office of the Secretary-General, AASU',
    signatory: 'Divine Edem Kwadzodeh, Secretary-General',
    excerpt:
      'AASU joined the people of Rwanda and the global community in solemn remembrance of the victims of the 1994 Genocide against the Tutsi.',
    fullText: [
      'The All-Africa Students Union (AASU) joins the people of Rwanda and the global community in solemn remembrance of the victims of the 1994 Genocide against the Tutsi.',
      "This tragic chapter in Africa's history remains a painful reminder of the devastating consequences of hatred, division, and indifference. Over one million lives were lost in a period that continues to shape our collective conscience as a continent and as a global community.",
      'As the continental voice of African students, AASU stands in solidarity with survivors and honours the resilience, courage, and commitment to unity demonstrated by the people of Rwanda in the years of rebuilding and reconciliation.',
      'This commemoration is not only a moment of reflection but also a call to action. It reminds us of the responsibility we carry, particularly as young people, to reject all forms of discrimination, promote tolerance, and actively work towards peaceful coexistence across our communities.',
      'AASU emphasises that the lessons of the genocide must remain central to our efforts to build a more united and inclusive Africa. We must continue to strengthen values of respect for human dignity, social cohesion, and shared humanity.',
      'We further encourage African students and youth to use their voices and platforms to promote peace, challenge divisive narratives, and contribute to efforts that prevent such tragedies from ever occurring again. Together, we remember. Together, we stand. Together, we say: Never Again.',
    ],
    pdfStatusNote:
      'Signed letterhead PDF copy pending upload from the AASU Secretariat press archive.',
  },
  {
    slug: 'passing-of-president-varney-alieu-jarsey-2025',
    status: 'published',
    refNumber: 'PR.SG.25.015',
    statementType: 'Official Press Release',
    topic: 'Executive Committee & Condolences',
    title: 'AASU Regrets to Announce the Passing of Its President',
    date: '24 October 2025',
    dateIso: '2025-10-24',
    year: '2025',
    issuingAuthority: 'Office of the Secretary-General, AASU',
    signatory: 'Peter Kwasi Kodjie, Secretary-General',
    excerpt:
      'It is with deep regret that the All-Africa Students Union announces the passing of its President, Varney Alieu Jarsey.',
    fullText: [
      'The All-Africa Students Union (AASU) regrets to announce the passing of its President, Varney Alieu Jarsey.',
      "President Jarsey served the Union with distinction and dedication. His commitment to advancing the rights, welfare, and voice of Africa's students will be remembered with deep respect.",
      'This loss is deeply felt by the AASU family, member unions, partners, and the African student community.',
      'We extend our heartfelt condolences to his family and loved ones.',
    ],
    pdfStatusNote:
      'Signed letterhead PDF copy pending upload from the AASU Secretariat press archive.',
  },
  {
    slug: 'congratulations-julian-cobbinah-nya-2025',
    status: 'published',
    refNumber: 'PR.SG.25.009',
    statementType: 'Official Press Release',
    topic: 'Youth Leadership & Governance',
    title:
      'AASU Congratulates Mr. Julian Cobbinah on His Appointment as NYA Governing Board Chairperson',
    date: '8 May 2025',
    dateIso: '2025-05-08',
    year: '2025',
    issuingAuthority: 'Office of the Secretary-General, AASU',
    signatory: 'Peter Kwasi Kodjie, Secretary-General',
    excerpt:
      'AASU extended warm congratulations to former NUGS President Julian Cobbinah on his appointment as Chairperson of the Governing Board of the National Youth Authority of Ghana.',
    fullText: [
      'The All-Africa Students Union (AASU) extends its warmest congratulations to Mr. Julian Cobbinah on his appointment as Chairperson of the Governing Board of the National Youth Authority (NYA) of Ghana.',
      "Mr. Cobbinah's appointment reflects his distinguished track record in youth leadership, policy advocacy, and nation-building. Having served as President of the National Union of Ghana Students (NUGS), he brings significant experience and insight to the role.",
      "AASU recognises the strategic importance of youth institutions such as the NYA in shaping Africa's future and expresses confidence in Mr. Cobbinah's leadership to strengthen youth empowerment across Ghana.",
      'The Union looks forward to continued collaboration with the NYA to advance youth engagement, inclusive policy development, and sustainable development across the continent.',
    ],
    pdfStatusNote:
      'Signed letterhead PDF copy pending upload from the AASU Secretariat press archive.',
  },
]

// Verified Speeches, Addresses & Remarks (zero fabricated transcripts or invented quotes)
export const SPEECHES_AND_ADDRESSES: SpeechRecord[] = [
  {
    slug: 'mco-anniversary-2025-kings-college-london',
    status: 'published',
    kind: 'Address',
    title:
      'MCO Future-Generations Strategy: What Are Universities For? Address at King\u2019s College London',
    speaker: 'Secretary-General of the All-Africa Students Union',
    positionAtTime: 'Secretary-General, AASU',
    event: 'Magna Charta Universitatum (MCO) Anniversary 2025',
    date: '11 November 2025',
    dateIso: '2025-11-11',
    location: "Bush House, Strand Campus, King's College London, United Kingdom",
    photograph: '/images/news/mco-london-2025.webp',
    photographAlt:
      "MCO Anniversary 2025 session at King's College London featuring AASU leadership",
    summary:
      'As part of the session on the MCO Future-Generations Strategy, the Secretary-General of AASU shared African student perspectives on strengthening student engagement, fostering future-focused leadership, and ensuring universities remain responsible, value-driven institutions.',
    transcriptStatusNote:
      'Full verbatim transcript has not yet been released by the AASU Secretariat archive. The verified official session recording is available below.',
    videoUrl: 'https://www.youtube.com/watch?v=be_h_cIM_jI',
    videoEmbedId: 'be_h_cIM_jI',
  },
  {
    slug: 'candlelight-tribute-dr-murtala-mohammed-2025',
    status: 'published',
    kind: 'Memorial Tribute',
    title:
      'Tribute at the Candlelight Procession and Inter-Faith Memorial for Fallen Heroes',
    speaker: 'Divine Edem Kwadzodeh',
    positionAtTime: 'AASU Representative (Policy & Advocacy)',
    event: 'AASU & NUGS Candlelight Procession and Inter-Faith Memorial Service',
    date: '14 August 2025',
    dateIso: '2025-08-14',
    location: 'Accra, Ghana',
    photograph: '/images/news/candlelight-memorial-2025.webp',
    photographAlt:
      'AASU and NUGS student leaders at the candlelight memorial procession in Accra',
    summary:
      'Delivered during the solemn candlelight procession organised with the National Union of Ghana Students (NUGS) honouring eight departed public servants, including former AASU Secretary-General Hon. Dr. Ibrahim Murtala Muhammed.',
    verifiedQuote:
      'Comrade Murtala was not just a name in our archives, but a son of the Continental student movement who put Pan-Africanism at the centre of every activity we undertook as a Union.',
    transcriptStatusNote:
      'Only the verified published excerpt above is available in AASU records; full verbatim remarks are pending archival confirmation.',
  },
  {
    slug: 'au-high-level-dialogue-reparations-2025',
    status: 'published',
    kind: 'Remarks',
    title:
      'Remarks at the 13th African Union High-Level Dialogue: Youth-Led Conversation on Reparations, Justice and State Building',
    speaker: 'Divine Edem Kwadzodeh',
    positionAtTime: 'Policy Advisor on Education Policy and Advocacy, AASU',
    event:
      '13th High-Level Dialogue, African Governance Architecture (AGA) Continental Youth Consultations',
    date: '26 July 2025',
    dateIso: '2025-07-26',
    location: 'African Union Continental Youth Consultations',
    photograph: '/images/news/reparations-dialogue-2025.webp',
    photographAlt:
      'Divine Edem Kwadzodeh representing AASU at the African Union Continental Youth Consultations on Reparations and Justice',
    summary:
      'Representing AASU under the African Governance Architecture (AGA), Divine Edem Kwadzodeh asserted that reparative justice must go beyond financial compensation to dismantle colonial economic and socio-political structures, confronting extractive trade systems, discriminatory visa regimes, debt traps and epistemic injustice in education.',
    transcriptStatusNote:
      'Official published summary verified from AASU archives. Full verbatim transcript awaits Secretariat publication.',
    relatedDocuments: [
      {
        title: 'AU Heads of State Summit Engagement Report (PDF)',
        fileUrl: '/documents/aasu-au-heads-of-state-summit.pdf',
        format: 'PDF',
      },
    ],
  },
  {
    slug: 'china-africa-youth-culture-forum-2026',
    status: 'published',
    kind: 'Official Speech',
    title:
      'Address at the China-Africa Youth Culture Forum and World Youth Development Forum',
    speaker: 'Osisiogu Osikenyi Enyinnaya',
    positionAtTime: 'President, All-Africa Students Union',
    event: 'World Youth Development Forum & China-Africa Youth Culture Forum',
    date: '18 June 2026',
    dateIso: '2026-06-18',
    location: 'Wuhan & Shiyan, Hubei Province, China',
    photograph: '/images/news/world-youth-forum-china-2026.webp',
    photographAlt:
      'AASU President Osisiogu Osikenyi at the World Youth Development Forum in China',
    summary:
      'Addressing over 500 international delegates from more than 120 countries in Wuhan and Shiyan, President Osisiogu Osikenyi championed international youth cooperation, cultural exchange, academic mobility and welfare support for African students in the diaspora.',
    transcriptStatusNote:
      'Full verbatim speech text is pending archival publication by the Office of the President.',
  },
]

function buildAlbumAssets(
  slug: string,
  count: number,
  eventTitle: string,
  location: string,
): MediaAssetRecord[] {
  return Array.from({ length: count }, (_, idx) => {
    const num = String(idx + 1).padStart(2, '0')
    return {
      id: `${slug}-${num}`,
      thumbSrc: `/images/gallery/${slug}/photo-${num}-thumb.webp`,
      fullSrc: `/images/gallery/${slug}/photo-${num}.webp`,
      alt: `${eventTitle} photograph ${idx + 1} (${location})`,
      caption: `${eventTitle}, ${location}`,
      credit: 'All-Africa Students Union (AASU) Media Archive',
    }
  })
}

// Curated Photo & Event Albums strictly from reliably identified local AASU event folders
export const MEDIA_ALBUMS: MediaAlbumRecord[] = [
  {
    slug: 'leader-shift-summit',
    status: 'published',
    title: 'AASU Leader-Shift Summit',
    category: 'Capacity Building',
    date: '2026',
    location: 'ISSER, University of Ghana, Accra',
    description:
      'Selected photographs capturing student leadership workshops, plenary sessions and institutional capacity dialogues at the AASU Leader-Shift Summit.',
    coverThumb: '/images/gallery/leader-shift-summit/photo-01-thumb.webp',
    coverFull: '/images/gallery/leader-shift-summit/photo-01.webp',
    coverAlt: 'Participants at the AASU Leader-Shift Summit in Accra',
    assets: buildAlbumAssets(
      'leader-shift-summit',
      6,
      'AASU Leader-Shift Summit',
      'Accra, Ghana',
    ),
  },
  {
    slug: 'climate-forward-summit',
    status: 'published',
    title: 'Climate Forward Summit',
    category: 'Climate & Sustainability',
    date: 'July 2026',
    location: 'Accra, Ghana',
    description:
      'Highlights from panel discussions, delegate interventions and circular-economy dialogues at the Climate Forward Summit.',
    coverThumb: '/images/gallery/climate-forward-summit/photo-01-thumb.webp',
    coverFull: '/images/gallery/climate-forward-summit/photo-01.webp',
    coverAlt: 'Speakers and youth delegates at the Climate Forward Summit',
    assets: buildAlbumAssets(
      'climate-forward-summit',
      6,
      'Climate Forward Summit',
      'Accra, Ghana',
    ),
  },
  {
    slug: 'nels-partners-meeting',
    status: 'published',
    title: 'NELS 3rd Strategic Partners Meeting',
    category: 'Capacity Building',
    date: 'March 2026',
    location: 'Accra, Ghana',
    description:
      'Breakout workshops, consortium strategy sessions and cross-continental partner exchanges during the 3rd Strategic Partners Meeting of the NELS Project.',
    coverThumb: '/images/gallery/nels-partners-meeting/photo-01-thumb.webp',
    coverFull: '/images/gallery/nels-partners-meeting/photo-01.webp',
    coverAlt: 'Consortium partners at the NELS 3rd Strategic Partners Meeting in Ghana',
    assets: buildAlbumAssets(
      'nels-partners-meeting',
      6,
      'NELS 3rd Strategic Partners Meeting',
      'Accra, Ghana',
    ),
  },
  {
    slug: 'beach-clean-up',
    status: 'published',
    title: 'AASU Coastal Beach Clean-Up Campaign',
    category: 'Climate & Sustainability',
    date: '2025-2026',
    location: 'Accra Coastline, Ghana',
    description:
      'Student volunteers mobilising for coastal environmental stewardship, marine waste collection and climate action awareness.',
    coverThumb: '/images/gallery/beach-clean-up/photo-01-thumb.webp',
    coverFull: '/images/gallery/beach-clean-up/photo-01.webp',
    coverAlt: 'AASU student volunteers during the Coastal Beach Clean-Up Campaign',
    assets: buildAlbumAssets(
      'beach-clean-up',
      6,
      'AASU Coastal Beach Clean-Up Campaign',
      'Accra, Ghana',
    ),
  },
  {
    slug: 'ggem-outreach',
    status: 'published',
    title: 'GGEM School & Community Outreach',
    category: 'Gender & Inclusion',
    date: '2025-2026',
    location: 'Ghana',
    description:
      'Community dialogues, school engagements and youth inclusion sessions delivered through the GGEM outreach tour.',
    coverThumb: '/images/gallery/ggem-outreach/photo-01-thumb.webp',
    coverFull: '/images/gallery/ggem-outreach/photo-01.webp',
    coverAlt: 'Facilitators and participants during the GGEM School and Community Outreach',
    assets: buildAlbumAssets(
      'ggem-outreach',
      6,
      'GGEM School & Community Outreach',
      'Ghana',
    ),
  },
  {
    slug: 'student-leaders-capacity-3rd',
    status: 'published',
    title: 'Third Edition: Student Leaders Capacity Building Training',
    category: 'Capacity Building',
    date: 'Official Archive',
    location: 'AASU Programme Archive',
    description:
      'Verified photographs from the Third Edition of AASU\u2019s Student Leaders Capacity Building Training.',
    coverThumb: '/images/gallery/student-leaders-capacity-3rd/photo-01-thumb.webp',
    coverFull: '/images/gallery/student-leaders-capacity-3rd/photo-01.webp',
    coverAlt: 'Participants during the Third Edition of the Student Leaders Capacity Building Training',
    assets: buildAlbumAssets(
      'student-leaders-capacity-3rd',
      6,
      'Third Edition: Student Leaders Capacity Building Training',
      'AASU Archive',
    ),
  },
]

// Verified external Google Drive archive albums from AASU legacy galleryData.js
export const EXTERNAL_GALLERY_ARCHIVES: ExternalArchiveAlbum[] = [
  {
    title: 'Africa Skills Week',
    category: 'Capacity Building',
    year: '2024',
    url: 'https://drive.google.com/drive/folders/18B1IFYypO9FvmLFNslLE24uYoliCbo9_?usp=sharing',
  },
  {
    title: 'Africa Educate Her Campaign Launch',
    category: 'Education',
    year: '2024',
    url: 'https://drive.google.com/drive/folders/1_ePCmfcD4SOhKWj2JnChJWOZ1a_mvzPr?usp=drive_link',
  },
  {
    title: 'International Day of the Girl 2025',
    category: 'Gender Equity',
    year: '2025',
    url: 'https://drive.google.com/drive/folders/1VKGRsj9nmlrU0o1w9kJEWBkyLbl-Ro3Q?usp=sharing',
  },
  {
    title: 'Eco Ambassadors Training Workshop 2025',
    category: 'Climate Action',
    year: '2025',
    url: 'https://drive.google.com/drive/folders/1rkJsIQ3wxL5AFAEslvKLFmoqkMZDumll?usp=drive_link',
  },
  {
    title: 'Affirmative Action 2.0',
    category: 'Gender Equity',
    year: '2024',
    url: 'https://drive.google.com/drive/folders/1ZHGa3_m5HSnJYD8wrqdGE1WOg9MpQymb?usp=sharing',
  },
  {
    title: 'West Africa Sub-Regional Leadership Workshop',
    category: 'Capacity Building',
    year: '2024',
    url: 'https://drive.google.com/drive/folders/1Kv_A3C98RzUS3XfS-yc3SdlVjxetLCe',
  },
]

export const VERIFIED_VIDEOS: VideoMediaRecord[] = [
  {
    id: 'mco-anniversary-2025',
    status: 'published',
    title: "MCO Anniversary 2025: Future-Generations Strategy (King's College London)",
    event: 'Magna Charta Universitatum Anniversary 2025',
    date: '11 November 2025',
    location: 'London, United Kingdom',
    speaker: 'Secretary-General, All-Africa Students Union',
    description:
      "Official recorded livestream of the MCO Future-Generations Strategy session at King's College London featuring AASU's perspectives on student engagement and responsible universities.",
    youtubeId: 'be_h_cIM_jI',
    watchUrl: 'https://www.youtube.com/watch?v=be_h_cIM_jI',
    posterImage: '/images/news/mco-london-2025.webp',
    posterAlt: "MCO Anniversary 2025 at King's College London session poster",
  },
]

export const BRAND_LOGO_DOWNLOADS: BrandAssetDownload[] = [
  {
    id: 'primary-logo-dark-text',
    title: 'Official Primary Logo (For Light Backgrounds)',
    description:
      'Original unchanged All-Africa Students Union primary horizontal logo for light surfaces and print documents.',
    preview: '/images/brand/aasu-logo-black.png',
    formats: [
      { label: 'PNG', url: '/images/brand/aasu-logo-black.png' },
      { label: 'SVG', url: '/images/brand/aasu-logo.svg' },
      { label: 'PDF', url: '/images/brand/aasu-logo.pdf' },
    ],
  },
  {
    id: 'primary-logo-white-text',
    title: 'Official Primary Logo (For Dark Backgrounds)',
    description:
      'Original unchanged All-Africa Students Union white-text logo for dark backgrounds and stage backdrops.',
    preview: '/images/brand/aasu-logo-white.png',
    darkPreview: true,
    formats: [
      { label: 'PNG', url: '/images/brand/aasu-logo-white.png' },
      { label: 'PDF', url: '/images/brand/aasu-logo.pdf' },
    ],
  },
  {
    id: 'official-emblem',
    title: 'Official AASU Emblem / Symbol',
    description:
      'Compact official AASU crest mark for approved co-branding, social avatars and digital badges.',
    preview: '/images/brand/aasu-symbol.png',
    formats: [{ label: 'PNG', url: '/images/brand/aasu-symbol.png' }],
  },
]

export const PRESS_RESOURCES: PressResourceRecord[] = [
  {
    id: 'annual-report-2025',
    title: 'AASU Annual Report 2025',
    category: 'Annual Report',
    year: '2025',
    description:
      'Official overview of AASU continental programmes, policy representation and institutional milestones in 2025.',
    fileUrl: '/documents/aasu-annual-report-2025.pdf',
    format: 'PDF',
  },
  {
    id: 'impact-report-2025',
    title: 'AASU Impact Report 2025',
    category: 'Impact Report',
    year: '2025',
    description:
      'Key outcomes and student-centred deliverables across AASU\u2019s seven strategic priorities.',
    fileUrl: '/documents/aasu-impact-report-2025.pdf',
    format: 'PDF',
  },
  {
    id: 'acqf-toolkit-2026',
    title: 'Toolkit on Greening Skills and Qualifications in Africa',
    category: 'Flagship Publication',
    year: '2026',
    description:
      'Joint ACQF and AASU stakeholder toolkit for embedding green skills in African education systems.',
    fileUrl: '/documents/acqf-toolkit-greening-skills.pdf',
    format: 'PDF',
  },
  {
    id: '14th-congress-guidelines',
    title: 'Election Guidelines for the 14th Elective Congress',
    category: 'Governance Reference',
    year: '2025',
    description:
      'Official electoral procedures governing the 14th Elective Congress for the 2026-2029 administration.',
    fileUrl: '/documents/aasu-14th-congress-election-guidelines.pdf',
    format: 'PDF',
  },
]

export function getPublishedArticles(): NewsArticleRecord[] {
  return NEWS_ARTICLES.filter((item) => item.status === 'published')
}

export function getArticleBySlug(slug?: string): NewsArticleRecord | undefined {
  return getPublishedArticles().find((item) => item.slug === slug)
}

export function getPublishedPressReleases(): PressReleaseRecord[] {
  return PRESS_RELEASES.filter((item) => item.status === 'published')
}

export function getPressReleaseBySlug(
  slug?: string,
): PressReleaseRecord | undefined {
  return getPublishedPressReleases().find((item) => item.slug === slug)
}

export function getPublishedSpeeches(): SpeechRecord[] {
  return SPEECHES_AND_ADDRESSES.filter((item) => item.status === 'published')
}

export function getSpeechBySlug(slug?: string): SpeechRecord | undefined {
  return getPublishedSpeeches().find((item) => item.slug === slug)
}

export function getPublishedAlbums(): MediaAlbumRecord[] {
  return MEDIA_ALBUMS.filter((item) => item.status === 'published')
}

export function getAlbumBySlug(slug?: string): MediaAlbumRecord | undefined {
  return getPublishedAlbums().find((item) => item.slug === slug)
}
