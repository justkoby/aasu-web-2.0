import { EXECUTIVE_COMMITTEE, type LeadershipProfile } from '@/data/about'
import type { AfricaRegionId } from '@/types'

export type MembershipCategory =
  | 'Full Member'
  | 'Associate Member'
  | 'Consultative Member'

export type RegionSlug =
  | 'north-africa'
  | 'west-africa'
  | 'central-africa'
  | 'east-africa'
  | 'southern-africa'

export interface MemberUnionRecord {
  slug: string
  name: string
  acronym?: string
  country: string
  regionSlug: RegionSlug
  regionId: AfricaRegionId
  regionName: string
  category: MembershipCategory
  overview?: string
  logo?: string
  website?: string
  socialChannels?: { label: string; href: string }[]
  verifiedSource: string
}

export interface RegionCountryRecord {
  name: string
  note?: string
}

export interface RegionActivityHighlight {
  title: string
  year: string
  summary: string
  href: string
}

export interface RegionPublicationLink {
  title: string
  year: string
  category: string
  fileUrl: string
  cover?: string
}

export interface RegionProfile {
  slug: RegionSlug
  id: AfricaRegionId
  name: string
  shortName: string
  coordinates: [number, number]
  mapPin: { x: string; y: string }
  hubLabel: string
  regionalOfficeCountry: string
  regionalOfficeStatus: string
  heroImage: string
  heroImageAlt: string
  introduction: string
  summary: string
  countries: RegionCountryRecord[]
  activities: RegionActivityHighlight[]
  publications: RegionPublicationLink[]
}

export interface MembershipSectionCard {
  id: string
  title: string
  description: string
  href: string
  image: string
  imageAlt: string
}

export interface MembershipStat {
  id: string
  numericValue: number
  suffix: string
  label: string
  detail: string
}

export interface AffiliationStep {
  step: string
  title: string
  description: string
}

export interface MembershipAccordionItem {
  id: string
  title: string
  points: string[]
}

export interface MemberServiceItem {
  id: string
  title: string
  summary: string
  highlights: string[]
  ctaLabel: string
  href: string
  external?: boolean
  icon: 'shield' | 'book' | 'megaphone' | 'users' | 'mail'
}

function slugify(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function extractAcronym(name: string): string | undefined {
  const parenMatch = name.match(/\(([A-Z0-9./-]{2,14})\)/)
  if (parenMatch) return parenMatch[1]
  const suffixMatch = name.match(/-\s*([A-Z0-9-]{3,14})$/)
  if (suffixMatch) return suffixMatch[1]
  return undefined
}

interface RawUnionEntry {
  name: string
  country: string
  regionSlug: RegionSlug
  category: MembershipCategory
}

const REGION_META: Record<
  RegionSlug,
  { id: AfricaRegionId; name: string }
> = {
  'north-africa': { id: 'north', name: 'North Africa' },
  'west-africa': { id: 'west', name: 'West Africa' },
  'central-africa': { id: 'central', name: 'Central Africa' },
  'east-africa': { id: 'east', name: 'East Africa' },
  'southern-africa': { id: 'southern', name: 'Southern Africa' },
}

// Authoritative member union records sourced directly from AASU's existing institutional register
// (aasu/src/pages/MembershipPage.jsx). No unverified unions, logos, websites or contact details are fabricated.
const RAW_MEMBER_UNIONS: RawUnionEntry[] = [
  // NORTH AFRICA (10 records)
  { regionSlug: 'north-africa', name: 'Union Nationale des Étudiants Algériens (NES)', country: 'Algeria', category: 'Full Member' },
  { regionSlug: 'north-africa', name: 'Students Representative Council of Alexandria University', country: 'Egypt', category: 'Associate Member' },
  { regionSlug: 'north-africa', name: 'Students Representative Council of Cairo University', country: 'Egypt', category: 'Associate Member' },
  { regionSlug: 'north-africa', name: 'American University in Cairo (AUC) Student Government', country: 'Egypt', category: 'Associate Member' },
  { regionSlug: 'north-africa', name: 'General Union of Libya Students (GULS)', country: 'Libya', category: 'Full Member' },
  { regionSlug: 'north-africa', name: 'Union Nationale des Étudiants Mauritaniens', country: 'Mauritania', category: 'Full Member' },
  { regionSlug: 'north-africa', name: "Students' Representative Council, Université de Nouakchott", country: 'Mauritania', category: 'Associate Member' },
  { regionSlug: 'north-africa', name: 'Union Nationale des Étudiants Marocains', country: 'Morocco', category: 'Full Member' },
  { regionSlug: 'north-africa', name: 'Université Abdelmalek Essaâdi Student Union', country: 'Morocco', category: 'Associate Member' },
  { regionSlug: 'north-africa', name: 'Union Générale Tunisienne des Étudiants (UGTE)', country: 'Tunisia', category: 'Full Member' },

  // WEST AFRICA (26 records)
  { regionSlug: 'west-africa', name: 'La Fédération Nationale des Étudiants du Bénin (FNEB)', country: 'Benin', category: 'Full Member' },
  { regionSlug: 'west-africa', name: 'Union Nationale des Étudiants du Bénin (UNEB)', country: 'Benin', category: 'Associate Member' },
  { regionSlug: 'west-africa', name: 'Union Nationale des Scolaires et Étudiants du Bénin (UNSEB)', country: 'Benin', category: 'Associate Member' },
  { regionSlug: 'west-africa', name: "La Fédération Estudiantine et Scolaire pour l'Intégrité au Burkina Faso (FESCIBF)", country: 'Burkina Faso', category: 'Full Member' },
  { regionSlug: 'west-africa', name: 'Fédération Nationale des Élèves et Étudiants Burkinabè (FNEEB)', country: 'Burkina Faso', category: 'Associate Member' },
  { regionSlug: 'west-africa', name: 'Federação Nacional de Estudantes e Desporto Universitário', country: 'Cape Verde', category: 'Full Member' },
  { regionSlug: 'west-africa', name: "La Fédération Estudiantine et Scolaire de Côte d'Ivoire (FESCI)", country: "Côte d'Ivoire", category: 'Full Member' },
  { regionSlug: 'west-africa', name: "Conseil National des Délégués de Côte d'Ivoire", country: "Côte d'Ivoire", category: 'Associate Member' },
  { regionSlug: 'west-africa', name: 'National Union of Gambia Students (NUGS)', country: 'Gambia', category: 'Full Member' },
  { regionSlug: 'west-africa', name: 'National Union of Ghana Students (NUGS)', country: 'Ghana', category: 'Full Member' },
  { regionSlug: 'west-africa', name: 'Graduate Students Association of Ghana (GRASAG)', country: 'Ghana', category: 'Associate Member' },
  { regionSlug: 'west-africa', name: 'Ghana National Union of Technical Students (GNUTS)', country: 'Ghana', category: 'Associate Member' },
  { regionSlug: 'west-africa', name: 'Ghana Union of Professional Students (GUPS)', country: 'Ghana', category: 'Associate Member' },
  { regionSlug: 'west-africa', name: 'University Students Association of Ghana (USAG)', country: 'Ghana', category: 'Associate Member' },
  { regionSlug: 'west-africa', name: 'Association Scolaire et Estudiantine de Guinée (A-SEG)', country: 'Guinea', category: 'Full Member' },
  { regionSlug: 'west-africa', name: 'Guinean Students Empowerment Association (GUISEA)', country: 'Guinea', category: 'Associate Member' },
  { regionSlug: 'west-africa', name: 'Plataforma Nacional das Associações Académicas da Universidade de Guiné-Bissau (PNAAEMS-GB)', country: 'Guinea-Bissau', category: 'Full Member' },
  { regionSlug: 'west-africa', name: 'National Confederation of Student Associations of Guinea-Bissau (CONAEGUIB)', country: 'Guinea-Bissau', category: 'Associate Member' },
  { regionSlug: 'west-africa', name: "Liberia National Students' Union (LINSU)", country: 'Liberia', category: 'Full Member' },
  { regionSlug: 'west-africa', name: 'Association des Élèves et Étudiants du Mali (AEEM)', country: 'Mali', category: 'Full Member' },
  { regionSlug: 'west-africa', name: 'Union des Scolaires Nigériens', country: 'Niger', category: 'Full Member' },
  { regionSlug: 'west-africa', name: 'National Association of Nigerian Students (NANS)', country: 'Nigeria', category: 'Full Member' },
  { regionSlug: 'west-africa', name: 'Postgraduate Students Association of Nigeria (PSAN)', country: 'Nigeria', category: 'Associate Member' },
  { regionSlug: 'west-africa', name: "Students' Representative Council, Cheikh Anta Diop University", country: 'Senegal', category: 'Associate Member' },
  { regionSlug: 'west-africa', name: 'National Union of Sierra Leone Students (NUSS)', country: 'Sierra Leone', category: 'Full Member' },
  { regionSlug: 'west-africa', name: 'Union Nationale des Étudiants du Togo (UNETO)', country: 'Togo', category: 'Full Member' },

  // CENTRAL AFRICA (12 records)
  { regionSlug: 'central-africa', name: 'SOS Éducation Promote', country: 'Cameroon', category: 'Associate Member' },
  { regionSlug: 'central-africa', name: "Association des Étudiants de l'Université de Yaoundé", country: 'Cameroon', category: 'Associate Member' },
  { regionSlug: 'central-africa', name: 'International Relations Institute of Cameroon (IRIC)', country: 'Cameroon', category: 'Associate Member' },
  { regionSlug: 'central-africa', name: 'Association Nationale des Étudiants de Centrafrique', country: 'Central African Republic', category: 'Full Member' },
  { regionSlug: 'central-africa', name: 'Union Nationale des Étudiants Tchadiens (UNET)', country: 'Chad', category: 'Full Member' },
  { regionSlug: 'central-africa', name: 'Association des Étudiants de la Faculté des Sciences (AEFST)', country: 'Republic of Congo', category: 'Associate Member' },
  { regionSlug: 'central-africa', name: 'Mouvement des Élèves et Étudiants du Congo (MEEC)', country: 'Republic of Congo', category: 'Associate Member' },
  { regionSlug: 'central-africa', name: 'Représentation des Étudiants du Congo (R.E.C/RDC)', country: 'DR Congo', category: 'Full Member' },
  { regionSlug: 'central-africa', name: 'La Universidad Nacional de Guinea Ecuatorial', country: 'Equatorial Guinea', category: 'Full Member' },
  { regionSlug: 'central-africa', name: 'Union Nationale des Étudiants du Gabon (UNEG)', country: 'Gabon', category: 'Full Member' },
  { regionSlug: 'central-africa', name: 'Federação Nacional das Associações Académicas da Universidade de São Tomé e Príncipe', country: 'São Tomé and Príncipe', category: 'Full Member' },
  { regionSlug: 'central-africa', name: 'Universidade Lusíada de São Tomé e Príncipe', country: 'São Tomé and Príncipe', category: 'Associate Member' },

  // EAST AFRICA (23 records)
  { regionSlug: 'east-africa', name: 'Burundi National Students Union (BNSU)', country: 'Burundi', category: 'Full Member' },
  { regionSlug: 'east-africa', name: 'Union Nationale de Jeunesse et des Étudiants des Comores', country: 'Comoros', category: 'Full Member' },
  { regionSlug: 'east-africa', name: 'Union Nationale de Jeunesse et des Étudiants de Djibouti', country: 'Djibouti', category: 'Full Member' },
  { regionSlug: 'east-africa', name: 'Association des Jeunes Universitaires et Diplômés', country: 'Djibouti', category: 'Associate Member' },
  { regionSlug: 'east-africa', name: 'Association des Anciens Stagiaires de la JICA (ASS-JICA Djibouti)', country: 'Djibouti', category: 'Consultative Member' },
  { regionSlug: 'east-africa', name: 'National Union of Eritrean Youth and Students', country: 'Eritrea', category: 'Full Member' },
  { regionSlug: 'east-africa', name: 'Ethiopian Higher Education Institutes Students Union (EHEISU)', country: 'Ethiopia', category: 'Full Member' },
  { regionSlug: 'east-africa', name: 'Kenya University Students Organisation (KUSO)', country: 'Kenya', category: 'Full Member' },
  { regionSlug: 'east-africa', name: 'University of Nairobi Students Association (UNSA)', country: 'Kenya', category: 'Associate Member' },
  { regionSlug: 'east-africa', name: 'Kenya Private Universities Association', country: 'Kenya', category: 'Associate Member' },
  { regionSlug: 'east-africa', name: 'Kenyatta University Students Association', country: 'Kenya', category: 'Associate Member' },
  { regionSlug: 'east-africa', name: "Students' Representative Council, Université d'Antananarivo", country: 'Madagascar', category: 'Associate Member' },
  { regionSlug: 'east-africa', name: 'Comité Démocratique des Jeunes et des Étudiants de Madagascar', country: 'Madagascar', category: 'Full Member' },
  { regionSlug: 'east-africa', name: 'Council of Students & Youth Movement of Mauritius (COSYM)', country: 'Mauritius', category: 'Full Member' },
  { regionSlug: 'east-africa', name: 'Rwanda National Students Association', country: 'Rwanda', category: 'Full Member' },
  { regionSlug: 'east-africa', name: "Students' Representative Council, University of Seychelles", country: 'Seychelles', category: 'Associate Member' },
  { regionSlug: 'east-africa', name: 'Somalia Higher Education Students Union', country: 'Somalia', category: 'Full Member' },
  { regionSlug: 'east-africa', name: 'Somali Public Health Students Association (SOPHSA)', country: 'Somalia', category: 'Associate Member' },
  { regionSlug: 'east-africa', name: 'Union Students Universities of Somalia (USUSOM)', country: 'Somalia', category: 'Associate Member' },
  { regionSlug: 'east-africa', name: 'General Sudanese Students Union (GSSU)', country: 'Sudan', category: 'Full Member' },
  { regionSlug: 'east-africa', name: "South Sudanese National Students' Union (SSNSU)", country: 'South Sudan', category: 'Full Member' },
  { regionSlug: 'east-africa', name: 'South Sudanese General Students Union (SSGSU)', country: 'South Sudan', category: 'Associate Member' },
  { regionSlug: 'east-africa', name: 'Tanzania Higher Learning Institution Students Organisation (TAHLISO)', country: 'Tanzania', category: 'Full Member' },

  // SOUTHERN AFRICA (17 records)
  { regionSlug: 'southern-africa', name: "Union Nationale des Étudiants d'Angola", country: 'Angola', category: 'Full Member' },
  { regionSlug: 'southern-africa', name: 'Student Association of Universidade Agostinho Neto (UAN)', country: 'Angola', category: 'Associate Member' },
  { regionSlug: 'southern-africa', name: 'Associação dos Estudantes das Universidades Privadas de Angola (AEUPA)', country: 'Angola', category: 'Associate Member' },
  { regionSlug: 'southern-africa', name: 'Botswana United Students Association (BUSA)', country: 'Botswana', category: 'Full Member' },
  { regionSlug: 'southern-africa', name: 'Swaziland National Union of Students (SNUS)', country: 'Eswatini', category: 'Full Member' },
  { regionSlug: 'southern-africa', name: 'United Lesotho Students Association (ULSA)', country: 'Lesotho', category: 'Full Member' },
  { regionSlug: 'southern-africa', name: 'Malawi National Students Union (MANASU)', country: 'Malawi', category: 'Full Member' },
  { regionSlug: 'southern-africa', name: 'União dos Estudantes Moçambicanos', country: 'Mozambique', category: 'Full Member' },
  { regionSlug: 'southern-africa', name: 'Association of University Finalist Students of Mozambique (AEFUM)', country: 'Mozambique', category: 'Associate Member' },
  { regionSlug: 'southern-africa', name: 'Associação de Estudantes da Universidade Eduardo Mondlane (AEU-UEM)', country: 'Mozambique', category: 'Associate Member' },
  { regionSlug: 'southern-africa', name: 'Namibian National Students Organisation (NANSO)', country: 'Namibia', category: 'Full Member' },
  { regionSlug: 'southern-africa', name: 'South African Students Congress (SASCO)', country: 'South Africa', category: 'Full Member' },
  { regionSlug: 'southern-africa', name: 'South African Union of Students (SAUS)', country: 'South Africa', category: 'Associate Member' },
  { regionSlug: 'southern-africa', name: 'South African Technical Vocational Education and Training Student Association (SATVETSA)', country: 'South Africa', category: 'Associate Member' },
  { regionSlug: 'southern-africa', name: 'Zambia National Students Union (ZANASU)', country: 'Zambia', category: 'Full Member' },
  { regionSlug: 'southern-africa', name: 'Zimbabwe National Students Union (ZINASU)', country: 'Zimbabwe', category: 'Full Member' },
  { regionSlug: 'southern-africa', name: "Zimbabwe Congress of Students' Union (ZICOSU)", country: 'Zimbabwe', category: 'Associate Member' },
]

export const MEMBER_UNIONS: MemberUnionRecord[] = RAW_MEMBER_UNIONS.map(
  (entry) => {
    const region = REGION_META[entry.regionSlug]
    return {
      slug: `${slugify(entry.country)}-${slugify(entry.name)}`,
      name: entry.name,
      acronym: extractAcronym(entry.name),
      country: entry.country,
      regionSlug: entry.regionSlug,
      regionId: region.id,
      regionName: region.name,
      category: entry.category,
      verifiedSource: 'AASU Institutional Membership Register',
    }
  },
)

export const AFRICA_REGION_PROFILES: RegionProfile[] = [
  {
    slug: 'north-africa',
    id: 'north',
    name: 'North Africa',
    shortName: 'North',
    coordinates: [30.0444, 31.2357],
    mapPin: { x: '44%', y: '18%' },
    hubLabel: 'Cairo, Tunis, Rabat, Algiers & Nouakchott',
    regionalOfficeCountry: 'Mauritania',
    regionalOfficeStatus: 'Regional office establishment in progress',
    heroImage: '/images/web/hero-asw.webp',
    heroImageAlt:
      'African student representatives participating in continental higher education dialogue',
    introduction:
      'North Africa connects national student unions and major university representative councils across six countries bordering the Mediterranean and the Sahel, linking North African campuses to continental policy and mobility dialogues.',
    summary:
      'National student unions and university councils across Algeria, Egypt, Libya, Mauritania, Morocco and Tunisia.',
    countries: [
      { name: 'Algeria' },
      { name: 'Egypt' },
      { name: 'Libya' },
      { name: 'Mauritania' },
      { name: 'Morocco' },
      { name: 'Tunisia' },
    ],
    activities: [
      {
        title: "AAU African Students' Leadership Summit 2026",
        year: '2026',
        summary:
          'Co-convened with the Association of African Universities in Cairo, Egypt to strengthen student leadership and university governance.',
        href: '/what-we-do/programmes',
      },
      {
        title: 'Continental Qualifications & Mobility Dialogues',
        year: '2026',
        summary:
          'Advancing cross-border recognition of higher education qualifications and student exchange pathways under ACQF.',
        href: '/what-we-do/strategic-priorities/migration-mobility-and-exchanges',
      },
    ],
    publications: [
      {
        title: 'AASU Annual Report 2025',
        year: '2025',
        category: 'Annual Report',
        fileUrl: '/documents/aasu-annual-report-2025.pdf',
        cover: '/images/publications/cover-annual-report-2025.webp',
      },
      {
        title: 'Toolkit on Greening Skills and Qualifications in Africa',
        year: '2026',
        category: 'ACQF Toolkit',
        fileUrl: '/documents/acqf-toolkit-greening-skills.pdf',
        cover: '/images/publications/acqf-toolkit.png',
      },
    ],
  },
  {
    slug: 'west-africa',
    id: 'west',
    name: 'West Africa',
    shortName: 'West',
    coordinates: [5.6037, -0.187],
    mapPin: { x: '22%', y: '38%' },
    hubLabel: 'Accra Secretariat, Kumasi (1972) & Dakar',
    regionalOfficeCountry: 'Senegal',
    regionalOfficeStatus: 'Regional office establishment in progress',
    heroImage: '/images/web/leadershift-audience.webp',
    heroImageAlt:
      'Student leaders participating in the AASU Leader-Shift Summit in Accra, Ghana',
    introduction:
      "West Africa is the historic birthplace of AASU, founded in Kumasi in 1972, and hosts the Union's permanent Secretariat in Accra, Ghana. The region brings together national unions, postgraduate bodies and campus associations across 15 countries.",
    summary:
      "Home to AASU's founding in Kumasi (1972) and permanent Secretariat in Accra, uniting 15 West African countries.",
    countries: [
      { name: 'Benin' },
      { name: 'Burkina Faso' },
      { name: 'Cape Verde' },
      { name: "Côte d'Ivoire" },
      { name: 'Gambia' },
      { name: 'Ghana' },
      { name: 'Guinea' },
      { name: 'Guinea-Bissau' },
      { name: 'Liberia' },
      { name: 'Mali' },
      { name: 'Niger' },
      { name: 'Nigeria' },
      { name: 'Senegal' },
      { name: 'Sierra Leone' },
      { name: 'Togo' },
    ],
    activities: [
      {
        title: 'Next Level Skills for Student Leaders (NELS) Strategic Meeting',
        year: '2025-2026',
        summary:
          'Hosted in Ghana with African and European university partners including UCC and UTG to build student leadership capacity.',
        href: '/what-we-do/programmes',
      },
      {
        title: 'Day of the African Child Strategic Dialogue in Liberia',
        year: '2026',
        summary:
          'Convened student leaders, government officials and civil society in Liberia on safe learning environments and student rights.',
        href: '/what-we-do/campaigns-advocacy',
      },
    ],
    publications: [
      {
        title: 'AASU Impact Report 2025',
        year: '2025',
        category: 'Impact Report',
        fileUrl: '/documents/aasu-impact-report-2025.pdf',
        cover: '/images/publications/cover-impact-report-2025.webp',
      },
      {
        title: 'Education & Students Rights Publication',
        year: 'Official Archive',
        category: 'Policy Publication',
        fileUrl: '/documents/aasu-esr-publication.pdf',
        cover: '/images/publications/cover-esr-publication.webp',
      },
    ],
  },
  {
    slug: 'central-africa',
    id: 'central',
    name: 'Central Africa',
    shortName: 'Central',
    coordinates: [3.848, 11.5021],
    mapPin: { x: '48%', y: '48%' },
    hubLabel: 'Yaoundé, Kinshasa, Libreville & N\u2019Djamena',
    regionalOfficeCountry: 'Cameroon',
    regionalOfficeStatus: 'Regional office establishment in progress',
    heroImage: '/images/web/nels-plenary.webp',
    heroImageAlt:
      'Student union delegates engaging in regional leadership plenary discussions',
    introduction:
      'Central Africa connects national student unions and university representative bodies across eight countries, advancing academic freedom, bilingual higher education cooperation and inclusive student participation.',
    summary:
      'Advancing student solidarity, academic freedom and institutional cooperation across eight Central African countries.',
    countries: [
      { name: 'Cameroon' },
      { name: 'Central African Republic' },
      { name: 'Chad' },
      { name: 'DR Congo' },
      { name: 'Equatorial Guinea' },
      { name: 'Gabon' },
      { name: 'Republic of Congo' },
      { name: 'São Tomé and Príncipe' },
    ],
    activities: [
      {
        title: 'Regional Student Governance & Representation',
        year: '2026-2029',
        summary:
          'Coordinated through the elected Vice President and Executive Committee Member for Central Africa.',
        href: '/about/governance',
      },
      {
        title: 'Youth, Peace & Security Engagement',
        year: '2025-2026',
        summary:
          'Promoting democratic campus governance, civic participation and peacebuilding across Central African institutions.',
        href: '/what-we-do/strategic-priorities/democracy-good-governance-peace-and-security',
      },
    ],
    publications: [
      {
        title: 'Youth, Peace and Security Publication',
        year: 'Official Archive',
        category: 'Policy Brief',
        fileUrl: '/documents/aasu-youth-peace-security.pdf',
        cover: '/images/publications/cover-youth-peace-security.webp',
      },
      {
        title: '13th Congress Resolutions',
        year: 'Official Archive',
        category: 'Congress Resolutions',
        fileUrl: '/documents/aasu-13th-congress-resolutions.pdf',
        cover: '/images/publications/cover-13th-congress-resolutions.webp',
      },
    ],
  },
  {
    slug: 'east-africa',
    id: 'east',
    name: 'East Africa',
    shortName: 'East',
    coordinates: [-1.2921, 36.8219],
    mapPin: { x: '68%', y: '48%' },
    hubLabel: 'Addis Ababa, Nairobi, Dar es Salaam & Kigali',
    regionalOfficeCountry: 'Ethiopia',
    regionalOfficeStatus: 'Regional office establishment in progress',
    heroImage: '/images/web/au-education-2026.webp',
    heroImageAlt:
      'AASU representative addressing the Innovating Education in Africa 2026 Policy Dialogue in Addis Ababa',
    introduction:
      'East Africa spans the Horn of Africa, the Great Lakes and Indian Ocean island nations, anchoring AASU policy engagement with the African Union Commission in Addis Ababa alongside active national and university student unions.',
    summary:
      'Uniting national unions and campus associations across Eastern Africa, the Horn of Africa and Indian Ocean states.',
    countries: [
      { name: 'Burundi' },
      { name: 'Comoros' },
      { name: 'Djibouti' },
      { name: 'Eritrea' },
      { name: 'Ethiopia' },
      { name: 'Kenya' },
      { name: 'Madagascar' },
      { name: 'Mauritius' },
      { name: 'Rwanda' },
      { name: 'Seychelles' },
      { name: 'Somalia' },
      { name: 'South Sudan' },
      { name: 'Sudan' },
      { name: 'Tanzania' },
      {
        name: 'Uganda',
        note: 'Verified member union directory record pending Secretariat confirmation.',
      },
    ],
    activities: [
      {
        title: 'Innovating Education in Africa 2026 Policy Dialogue',
        year: '2026',
        summary:
          'AASU led a high-level Oxford-style debate in Addis Ababa on sustainable education financing for the AU Decade of Education and Skills (2025-2034).',
        href: '/what-we-do/policy-engagement',
      },
      {
        title: 'NELS Higher Education Partnership (Kenya)',
        year: '2025-2026',
        summary:
          'Consortium collaboration with KCA University and East African student leaders advancing structured leadership training.',
        href: '/what-we-do/programmes',
      },
    ],
    publications: [
      {
        title: 'AU Heads of State Summit Engagement Report',
        year: 'Official Archive',
        category: 'Policy Report',
        fileUrl: '/documents/aasu-au-heads-of-state-summit.pdf',
        cover: '/images/publications/cover-au-heads-of-state-summit.webp',
      },
      {
        title: 'Green Skills and Green Jobs Report',
        year: 'Official Archive',
        category: 'Research Report',
        fileUrl: '/documents/aasu-green-skills-green-jobs.pdf',
        cover: '/images/publications/cover-green-skills-green-jobs.webp',
      },
    ],
  },
  {
    slug: 'southern-africa',
    id: 'southern',
    name: 'Southern Africa',
    shortName: 'Southern',
    coordinates: [-25.7479, 28.2293],
    mapPin: { x: '56%', y: '76%' },
    hubLabel: 'Pretoria, Gaborone, Harare, Lusaka & Windhoek',
    regionalOfficeCountry: 'Botswana',
    regionalOfficeStatus: 'Regional office establishment in progress',
    heroImage: '/images/web/inauguration-2026.webp',
    heroImageAlt:
      'AASU continental leadership at the 2026 Inauguration and Honours Ceremony',
    introduction:
      'Southern Africa carries a historic legacy of student solidarity and educational justice, from the 1976 Soweto Uprising commemorated each June 16 as African Students\u2019 Day to active TVET and university unions across 10 countries.',
    summary:
      'Connecting national student unions, university councils and TVET student bodies across 10 Southern African nations.',
    countries: [
      { name: 'Angola' },
      { name: 'Botswana' },
      { name: 'Eswatini' },
      { name: 'Lesotho' },
      { name: 'Malawi' },
      { name: 'Mozambique' },
      { name: 'Namibia' },
      { name: 'South Africa' },
      { name: 'Zambia' },
      { name: 'Zimbabwe' },
    ],
    activities: [
      {
        title: 'Advocacy for the Protection of African Students in South Africa',
        year: '2026',
        summary:
          'Official continental statement (PR.SG.26.017) calling for enhanced safety and welfare safeguards for African students.',
        href: '/what-we-do/campaigns-advocacy',
      },
      {
        title: 'SADC Regional Higher Education & Mobility Engagement',
        year: '2025-2026',
        summary:
          'Collaborating with regional stakeholders on harmonisation of qualifications and student welfare across Southern Africa.',
        href: '/what-we-do/policy-engagement',
      },
    ],
    publications: [
      {
        title: 'AASU Gender Policy',
        year: 'Official Policy',
        category: 'Institutional Policy',
        fileUrl: '/documents/aasu-gender-policy.pdf',
        cover: '/images/publications/cover-gender-policy.webp',
      },
      {
        title: 'Book of Good Practices for the Greening of Skills and Qualifications in Africa',
        year: '2026',
        category: 'ACQF Case Book',
        fileUrl: '/documents/acqf-book-of-good-practices.pdf',
        cover: '/images/publications/book-of-good-practices.png',
      },
    ],
  },
]

export const CLASSIFICATION_NOTE =
  'AASU organises its continental membership into five African sub-regions: North, West, Central, East and Southern Africa. Country-to-region groupings follow AASU\u2019s institutional directory register. Where a country\u2019s union record is still being confirmed by the Secretariat (such as Uganda) or where territorial status is subject to continental diplomatic conventions (such as Western Sahara / Sahrawi Arab Democratic Republic), AASU maintains a neutral classification pending formal Secretariat directory confirmation.'

export const MEMBERSHIP_ENTRY_CARDS: MembershipSectionCard[] = [
  {
    id: 'our-membership',
    title: 'Our Membership',
    description:
      'How national student unions, associate organisations and continental organs unite under one democratic mandate.',
    href: '/membership/our-membership',
    image: '/images/web/students-letters.webp',
    imageAlt: 'African students standing together holding red AASU emblem letters',
  },
  {
    id: 'member-unions',
    title: 'Member Unions Directory',
    description:
      'Search and filter verified Full, Associate and Consultative member organisations across Africa.',
    href: '/membership/member-unions',
    image: '/images/web/leadershift-audience.webp',
    imageAlt: 'Student leaders convened at the AASU Leader-Shift Summit',
  },
  {
    id: 'regions',
    title: 'Regional Membership',
    description:
      'Explore all five African regions, regional leadership, country presence and regional initiatives.',
    href: '/membership/regions',
    image: '/images/web/au-education-2026.webp',
    imageAlt: 'AASU representative speaking at the African Union in Addis Ababa',
  },
  {
    id: 'affiliation',
    title: 'Membership & Affiliation',
    description:
      'Membership categories, eligibility criteria, affiliation steps and governance participation.',
    href: '/membership/affiliation',
    image: '/images/web/inauguration-2026.webp',
    imageAlt: 'AASU leadership during the 2026 Inauguration and Honours Ceremony',
  },
  {
    id: 'services',
    title: 'Member Services',
    description:
      'Capacity building, policy toolkits, communications coordination and direct Secretariat support.',
    href: '/membership/services',
    image: '/images/web/nels-breakout.webp',
    imageAlt: 'Student union delegates collaborating during an institutional capacity workshop',
  },
]

export const MEMBERSHIP_STATS: MembershipStat[] = [
  {
    id: 'verified-unions',
    numericValue: MEMBER_UNIONS.length,
    suffix: '',
    label: 'Verified Member Organisations',
    detail: 'Listed in AASU\u2019s institutional register across Full, Associate and Consultative categories.',
  },
  {
    id: 'countries-reached',
    numericValue: 54,
    suffix: '',
    label: 'African Countries',
    detail: 'Continental mandate spanning 54 countries across five African sub-regions.',
  },
  {
    id: 'regions',
    numericValue: 5,
    suffix: '',
    label: 'African Regions',
    detail: 'North, West, Central, East and Southern Africa anchored by our Accra Secretariat.',
  },
  {
    id: 'students-represented',
    numericValue: 300,
    suffix: 'M+',
    label: 'Students Represented',
    detail: 'Institutional reach across universities, polytechnics, TVET and secondary institutions.',
  },
]

// Curated featured unions spanning all 5 regions (all verified in MEMBER_UNIONS)
const FEATURED_UNION_SLUGS = [
  'ghana-national-union-of-ghana-students-nugs',
  'nigeria-national-association-of-nigerian-students-nans',
  'kenya-kenya-university-students-organisation-kuso',
  'south-africa-south-african-students-congress-sasco',
  'tunisia-union-generale-tunisienne-des-etudiants-ugte',
  'cameroon-association-des-etudiants-de-l-universite-de-yaounde',
]

export const FEATURED_MEMBER_UNIONS: MemberUnionRecord[] = FEATURED_UNION_SLUGS.map(
  (slug) => MEMBER_UNIONS.find((u) => u.slug === slug),
).filter((u): u is MemberUnionRecord => Boolean(u))

export const AFFILIATION_STEPS: AffiliationStep[] = [
  {
    step: '01',
    title: 'Submit Membership Enquiry & Documentation',
    description:
      'Prepare your organisation\u2019s profile, mandate summary and proof of legitimacy (such as official registration or institutional recognition) and initiate enquiry with the AASU Secretariat.',
  },
  {
    step: '02',
    title: 'Secretariat Eligibility Review',
    description:
      'The AASU Secretariat reviews submitted documentation against AASU\u2019s membership categories, democratic standards and regional representation criteria.',
  },
  {
    step: '03',
    title: 'Governance Approval',
    description:
      'Eligible applications are presented through AASU\u2019s statutory governance structures for formal endorsement and notification.',
  },
  {
    step: '04',
    title: 'Onboarding & Continental Integration',
    description:
      'Approved member unions are onboarded into regional coordination channels, thematic working groups, programmes and continental convenings.',
  },
]

export const RIGHTS_AND_RESPONSIBILITIES: MembershipAccordionItem[] = [
  {
    id: 'full-member-rights',
    title: 'Full Membership Rights & Governance Role',
    points: [
      'Full representation within AASU continental and regional structures.',
      'Voting rights in AASU statutory decision-making bodies, including Congress, in line with electoral guidelines.',
      'Eligibility to nominate candidates for Executive Committee and thematic committee positions.',
      'Direct participation in shaping continental student policy positions and resolutions.',
    ],
  },
  {
    id: 'associate-consultative-rights',
    title: 'Associate & Consultative Participation',
    points: [
      'Participation in AASU programmes, summits, capacity-building workshops and peer-learning networks.',
      'Access to continental knowledge resources, toolkits and partnership opportunities.',
      'Observer participation in statutory decision-making forums and thematic consultations.',
      'Collaboration with national unions and the Secretariat on campus and community initiatives.',
    ],
  },
  {
    id: 'member-responsibilities',
    title: 'Shared Responsibilities of Member Organisations',
    points: [
      'Uphold AASU\u2019s core values of unity, equity and inclusion, advocacy, integrity and Pan-Africanism.',
      'Maintain active communication and institutional coordination with the Secretariat and regional leadership.',
      'Promote democratic student representation and safeguard student rights within national and campus contexts.',
      'Contribute to continental campaigns, research consultations and collective solidarity initiatives.',
    ],
  },
]

export const MEMBER_SERVICES: MemberServiceItem[] = [
  {
    id: 'capacity-building',
    title: 'Institutional Support & Capacity Building',
    summary:
      'Strengthening student union governance, strategic leadership and operational effectiveness through structured continental programmes.',
    highlights: [
      'Next Level Skills for Student Leaders (NELS) training and peer-learning workshops.',
      'Leader-Shift Summit modules on organisational management and civic advocacy.',
      'Guidance for student unions building resilient democratic campus structures.',
    ],
    ctaLabel: 'Explore Programmes',
    href: '/what-we-do/programmes',
    icon: 'shield',
  },
  {
    id: 'resources-guidance',
    title: 'Resources & Guidance for Member Unions',
    summary:
      'Practical policy toolkits, annual reports, gender frameworks and electoral governance documents for student union executives.',
    highlights: [
      'ACQF & AASU Toolkit on Greening Skills and Qualifications in Africa (2026).',
      'AASU Gender Policy and Education & Students\u2019 Rights publications.',
      'Congress resolutions and electoral governance frameworks.',
    ],
    ctaLabel: 'View Governing Documents',
    href: '/about/governance',
    icon: 'book',
  },
  {
    id: 'communications-sharing',
    title: 'Communications & Information Sharing',
    summary:
      'Amplifying member union campaigns, solidarity statements and student voices across continental and international platforms.',
    highlights: [
      'Coordinated continental press releases and rapid-response solidarity statements.',
      'Visibility for national student initiatives across AASU channels and annual highlights.',
      'Direct liaison with the Office of the Secretary for Press and Information.',
    ],
    ctaLabel: 'Explore Campaigns & Advocacy',
    href: '/what-we-do/campaigns-advocacy',
    icon: 'megaphone',
  },
  {
    id: 'engagement-coordination',
    title: 'Member Engagement & Coordination',
    summary:
      'Connecting unions across North, West, Central, East and Southern Africa for joint policy dialogues and continental representation.',
    highlights: [
      'Regional coordination through elected Regional Vice Presidents and Executive Committee Members.',
      'Delegation pathways to African Union, UNESCO, AAU and Global Student Forum dialogues.',
      'Peer exchanges connecting universities and national unions across borders.',
    ],
    ctaLabel: 'Explore Regional Membership',
    href: '/membership/regions',
    icon: 'users',
  },
  {
    id: 'enquiries-support',
    title: 'Member Enquiries & Direct Secretariat Support',
    summary:
      'Dedicated Secretariat assistance in Accra for membership verification, directory updates, accreditation and affiliation guidance.',
    highlights: [
      'Update official union records, leadership contacts or directory profiles.',
      'Request letters of institutional verification or programme partnership guidance.',
      'Direct official channels: info@aasuonline.org and secgen@aasuonline.org.',
    ],
    ctaLabel: 'Email Membership Desk',
    href: 'mailto:info@aasuonline.org?subject=AASU%20Member%20Support%20Enquiry',
    external: true,
    icon: 'mail',
  },
]

// Derived helpers: single source of truth from MEMBER_UNIONS and AFRICA_REGION_PROFILES
export function getRegionBySlug(slug?: string): RegionProfile | undefined {
  return AFRICA_REGION_PROFILES.find((region) => region.slug === slug)
}

export function getUnionsByRegion(regionSlug: RegionSlug): MemberUnionRecord[] {
  return MEMBER_UNIONS.filter((union) => union.regionSlug === regionSlug)
}

export function getUnionBySlug(slug?: string): MemberUnionRecord | undefined {
  return MEMBER_UNIONS.find((union) => union.slug === slug)
}

export function getAllDirectoryCountries(regionSlug?: RegionSlug | 'all'): string[] {
  const source =
    regionSlug && regionSlug !== 'all'
      ? MEMBER_UNIONS.filter((u) => u.regionSlug === regionSlug)
      : MEMBER_UNIONS
  return Array.from(new Set(source.map((u) => u.country))).sort((a, b) =>
    a.localeCompare(b),
  )
}

export function getRegionalLeadership(regionName: string): LeadershipProfile[] {
  return EXECUTIVE_COMMITTEE.filter((leader) => leader.region === regionName)
}
