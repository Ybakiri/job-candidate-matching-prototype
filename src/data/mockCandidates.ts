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

const degrees = ['Master in Business Administration', 'Bachelor in Marketing', 'Master in Marketing', 'Bachelor in Business Administration', 'Master in Digital Marketing', 'Bachelor in Communications']
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

function generateInsights(candidate: Partial<Candidate>): { summary: string; advantages: string[]; disadvantages: string[] } {
  const yearsOfExp = candidate.yearsExperience || 5
  
  const summaries = [
    `This candidate brings ${yearsOfExp} years of solid CRM and customer relationship experience with strong proficiency in Salesforce and marketing automation. They have demonstrated success in customer retention and lead generation but lack specific automotive industry experience.`,
    `With ${yearsOfExp} years in customer success and CRM management, this professional has proven expertise in customer segmentation and data-driven marketing. Their cross-industry experience provides valuable perspective for customer relationship strategies.`,
    `This CRM professional combines ${yearsOfExp} years of hands-on experience with customer analytics and relationship management. They have successfully implemented CRM solutions that improved customer retention rates and sales conversion.`
  ]
  
  const advantages = [
    'Has extensive experience with Salesforce and HubSpot CRM platforms.',
    'Proven track record in customer retention and churn reduction strategies.',
    'Strong analytical skills with experience in customer segmentation and targeting.',
    'Demonstrated success in email marketing campaigns and automation.',
    'Experience in leading cross-functional teams across sales and marketing.',
    'Excellent communication skills in German, French, and English.',
    'Has managed customer databases with 10,000+ contacts effectively.',
    'Proven ability to increase customer lifetime value through strategic initiatives.'
  ]
  
  const disadvantages = [
    'Limited direct experience in the automotive industry and dealership operations.',
    'No formal certification in advanced CRM platforms like Microsoft Dynamics.',
    'May require additional training in automotive-specific customer journey mapping.',
    'Limited experience with enterprise-level CRM integrations and data migration.'
  ]
  
  return {
    summary: summaries[Math.floor(Math.random() * summaries.length)],
    advantages: advantages.sort(() => Math.random() - 0.5).slice(0, 3 + Math.floor(Math.random() * 2)),
    disadvantages: disadvantages.sort(() => Math.random() - 0.5).slice(0, 1 + Math.floor(Math.random() * 2))
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
  
  const candidate: Partial<Candidate> = {
    id: `candidate-${index}`,
    matchScore,
    matchPercentage,
    titleIndex, // Store index instead of actual title
    title: `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${roles[Math.floor(Math.random() * roles.length)]}`, // Fallback for non-i18n usage
    yearsExperience,
    currentRole: `${roles[Math.floor(Math.random() * roles.length)]} at a ${industries[Math.floor(Math.random() * industries.length)]} company`,
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