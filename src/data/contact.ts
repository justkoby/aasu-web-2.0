// CMS-ready public contact & institutional engagement metadata.
// Sensitive student complaints/reports are explicitly separated from public CMS collections.

export const SECRETARIAT_CONTACT = {
  organisation: 'All-Africa Students Union (AASU)',
  address: 'No. 10 Asante Mireku Avenue, Westlands, Accra, Ghana',
  postalNote: 'Headquarters Secretariat, Accra, Republic of Ghana',
  emails: [
    {
      label: 'General Enquiries & Membership Desk',
      address: 'info@aasuonline.org',
    },
    {
      label: 'Office of the Secretary-General',
      address: 'secgen@aasuonline.org',
    },
  ],
  phones: [
    { label: 'Secretariat Line 1', display: '+233 552 594 294', href: 'tel:+233552594294' },
    { label: 'Secretariat Line 2', display: '+233 203 927 736', href: 'tel:+233203927736' },
  ],
  mapsDirectionsUrl:
    'https://www.google.com/maps/search/?api=1&query=No.+10+Asante+Mireku+Avenue+Westlands+Accra+Ghana',
}

export const DEPARTMENTAL_CONTACTS = [
  {
    department: 'Office of the Secretary-General',
    scope: 'Diplomatic correspondence, institutional partnerships and official invitations.',
    email: 'secgen@aasuonline.org',
  },
  {
    department: 'Membership & Affiliation Desk',
    scope: 'National union directory updates, affiliation enquiries and regional coordination.',
    email: 'info@aasuonline.org',
  },
  {
    department: 'Press, Media & Communications',
    scope: 'Media accreditation, official statements, interview requests and brand assets.',
    email: 'info@aasuonline.org',
  },
  {
    department: 'Programmes, Research & Partnerships',
    scope: 'Joint initiatives, academic collaborations, summits and knowledge resources.',
    email: 'info@aasuonline.org',
  },
]

export const PARTNERSHIP_TRACKS = [
  {
    title: 'Continental & International Institutions',
    description:
      'Policy dialogues, education financing reform, qualifications recognition and youth representation alongside bodies such as the African Union, UNESCO, ETF and regional economic communities.',
  },
  {
    title: 'Universities & Higher Education Networks',
    description:
      'Joint leadership curricula, quality assurance reviews, academic mobility exchanges and research collaborations with African and international universities.',
  },
  {
    title: 'Development Agencies, Foundations & NGOs',
    description:
      'Co-designed programmes advancing gender equity, green skills, adolescent health, student welfare and civic empowerment across African campuses.',
  },
  {
    title: 'Summit & Programme Sponsorship',
    description:
      'Supporting continental convenings, student leadership summits and community sustainability drives with transparent institutional accountability.',
  },
]

export const STUDENT_RIGHTS_GUIDANCE = [
  {
    title: 'Right to Quality & Equitable Education',
    summary:
      'AASU advocates across continental and national policy spaces for accessible, inclusive and adequately financed education free from discrimination.',
  },
  {
    title: 'Academic Freedom & Freedom of Association',
    summary:
      'Students have the right to organise democratically through independent student unions and participate meaningfully in institutional governance.',
  },
  {
    title: 'Safe Learning Environments & Student Mobility',
    summary:
      'AASU calls on governments and university authorities to guarantee student safety, dignity and protection for both domestic and cross-border African students.',
  },
]

export const SAFEGUARDING_PREREQUISITES = [
  'Designated responsible receiving department and authorised case handlers.',
  'Encrypted server-side intake backend completely isolated from public CMS collections.',
  'Approved privacy notice, data retention schedule and role-based access controls.',
  'Verified institutional escalation workflow and external referral protocol.',
]
