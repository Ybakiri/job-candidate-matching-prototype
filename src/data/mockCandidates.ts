import { Candidate, MatchScore } from '../types'

const adjectives = ['Experienced', 'Strategic', 'Dynamic', 'Customer-focused', 'Results-driven', 'Innovative', 'Analytical', 'Relationship-oriented', 'Data-driven', 'Collaborative']
const roles = ['CRM Manager', 'Customer Success Manager', 'Marketing Manager', 'Sales Manager', 'Customer Experience Manager', 'Business Development Manager']
const industries = ['automotive', 'telecommunications', 'retail', 'financial services', 'technology', 'manufacturing', 'consulting', 'e-commerce', 'healthcare', 'insurance']
const regions = ['Zurich region', 'Bern region', 'Geneva region', 'Basel region', 'Lausanne region', 'St. Gallen region', 'Lucerne region', 'Ticino region']

const allSkills = [
  { name: 'Salesforce', matches: true },
  { name: 'HubSpot', matches: true },
  { name: 'Microsoft Dynamics', matches: true },
  { name: 'Customer Segmentation', matches: true },
  { name: 'Email Marketing', matches: true },
  { name: 'Marketing Automation', matches: true },
  { name: 'Customer Analytics', matches: true },
  { name: 'Lead Generation', matches: true },
  { name: 'Customer Journey Mapping', matches: true },
  { name: 'SQL', matches: true },
  { name: 'Excel/Power BI', matches: true },
  { name: 'A/B Testing', matches: true },
  { name: 'Pipedrive', matches: false },
  { name: 'Marketo', matches: false },
  { name: 'Pardot', matches: false },
  { name: 'Zendesk', matches: false },
  { name: 'Google Analytics', matches: false },
  { name: 'Tableau', matches: false },
  { name: 'GDPR Compliance', matches: false },
  { name: 'Project Management', matches: false },
  { name: 'Agile/Scrum', matches: false },
  { name: 'Python', matches: false },
  { name: 'Adobe Campaign', matches: false },
  { name: 'Oracle CX', matches: false },
  { name: 'Customer Support', matches: false },
]

const degrees = ['masterBusinessAdmin', 'bachelorMarketing', 'masterMarketing', 'bachelorBusinessAdmin', 'masterDigitalMarketing', 'bachelorCommunications']
const fields = ['Business Administration', 'Marketing', 'Digital Marketing', 'Communications', 'Customer Relations', 'Business Management']

function generateExperiences(): { role: string; industry: string }[] {
  return [
    {
      role: `Head of ${roles[Math.floor(Math.random() * roles.length)]}`,
      industry: industries[Math.floor(Math.random() * industries.length)]
    },
    {
      role: roles[Math.floor(Math.random() * roles.length)],
      industry: industries[Math.floor(Math.random() * industries.length)]
    }
  ]
}

function generateSkills(): { name: string; matches: boolean }[] {
  const shuffled = [...allSkills].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, 8 + Math.floor(Math.random() * 5))
}

function generateEducation(): { degree: string; field: string }[] {
  const numEducations = Math.random() > 0.5 ? 2 : 1
  const educations = []
  
  for (let i = 0; i < numEducations; i++) {
    educations.push({
      degree: degrees[Math.floor(Math.random() * degrees.length)],
      field: fields[Math.floor(Math.random() * fields.length)]
    })
  }
  
  return educations
}

function generateInsights(candidate: Partial<Candidate>): { summaryIndex: number; summaryYears: number; advantageIndices: number[]; disadvantageIndices: number[] } {
  const yearsOfExp = candidate.yearsExperience || 5
  
  // We have 3 summaries, 8 advantages, and 4 disadvantages in translations
  const summaryIndex = Math.floor(Math.random() * 3)
  
  // Generate random indices for advantages (3-4 items)
  const allAdvantageIndices = [0, 1, 2, 3, 4, 5, 6, 7]
  const shuffledAdvantages = allAdvantageIndices.sort(() => Math.random() - 0.5)
  const advantageIndices = shuffledAdvantages.slice(0, 3 + Math.floor(Math.random() * 2))
  
  // Generate random indices for disadvantages (1-2 items)  
  const allDisadvantageIndices = [0, 1, 2, 3]
  const shuffledDisadvantages = allDisadvantageIndices.sort(() => Math.random() - 0.5)
  const disadvantageIndices = shuffledDisadvantages.slice(0, 1 + Math.floor(Math.random() * 2))
  
  return {
    summaryIndex,
    summaryYears: yearsOfExp,
    advantageIndices,
    disadvantageIndices
  }
}

function generateCandidate(index: number): Candidate {
  const yearsExperience = 2 + Math.floor(Math.random() * 13)
  const matchPercentage = 40 + Math.floor(Math.random() * 56)
  
  let matchScore: MatchScore
  if (matchPercentage >= 80) {
    matchScore = 'great'
  } else if (matchPercentage >= 60) {
    matchScore = 'good'
  } else {
    matchScore = 'average'
  }
  
  // Use index to deterministically select title (will be localized in component)
  const titleIndex = (index - 1) % 43 // We have 43 title combinations
  
  const currentRoleTitle = roles[Math.floor(Math.random() * roles.length)]
  const currentRoleIndustry = industries[Math.floor(Math.random() * industries.length)]
  
  const candidate: Partial<Candidate> = {
    id: `candidate-${index}`,
    matchScore,
    matchPercentage,
    titleIndex, // Store index instead of actual title
    title: `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${roles[Math.floor(Math.random() * roles.length)]}`, // Fallback for non-i18n usage
    yearsExperience,
    currentRole: `${currentRoleTitle} at a ${currentRoleIndustry} company`, // Fallback for non-i18n usage
    currentRoleTitle, // Store separately for translation
    currentRoleIndustry, // Store separately for translation
    companyIndustry: industries[Math.floor(Math.random() * industries.length)],
    region: regions[Math.floor(Math.random() * regions.length)],
    skills: generateSkills(),
    experiences: generateExperiences(),
    education: generateEducation(),
    contact: {
      email: '••••••••••••••@•••••.ch',
      phone: '+41 •• ••• •• ••'
    },
    isInvited: false
  }
  
  return {
    ...candidate,
    insights: generateInsights(candidate)
  } as Candidate
}

// Pre-generate and cache candidates to avoid re-generation on every import
const _cachedCandidates: Candidate[] = Array.from({ length: 43 }, (_, i) => generateCandidate(i + 1))

export const mockCandidates: Candidate[] = _cachedCandidates