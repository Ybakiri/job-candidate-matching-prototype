import { Candidate, MatchScore } from '../types'

const adjectives = ['Innovative', 'Creative', 'Strategic', 'Visionary', 'Insightful', 'Dynamic', 'Analytical', 'Pioneering', 'Experienced', 'Talented']
const roles = ['Data Scientist', 'ML Engineer', 'Data Analyst', 'Data Engineer', 'AI Specialist', 'BI Developer']
const industries = ['telecommunications', 'social media', 'fintech', 'healthcare', 'e-commerce', 'retail', 'consulting', 'technology', 'banking', 'insurance']
const regions = ['Zurich region', 'Bern region', 'Geneva region', 'Basel region', 'Lausanne region', 'St. Gallen region', 'Lucerne region', 'Ticino region']

const allSkills = [
  { name: 'Python', matches: true },
  { name: 'R', matches: true },
  { name: 'SQL', matches: true },
  { name: 'Tableau', matches: true },
  { name: 'TensorFlow', matches: false },
  { name: 'PyTorch', matches: false },
  { name: 'Machine learning', matches: true },
  { name: 'Deep learning', matches: false },
  { name: 'Statistics', matches: true },
  { name: 'Data visualization', matches: true },
  { name: 'Big data', matches: false },
  { name: 'Cloud computing', matches: false },
  { name: 'Data governance', matches: false },
  { name: 'Cluster analysis', matches: false },
  { name: 'Time series analysis', matches: false },
  { name: 'NLP', matches: false },
]

const degrees = ['PhD in Computer Science', 'Master in Data Science', 'Bachelor in Statistics', 'Master in Mathematics', 'Bachelor in Computer Science', 'PhD in Statistics']
const fields = ['Computer Science', 'Data Science', 'Statistics', 'Mathematics', 'Information Systems', 'Engineering']

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
    `The candidate has a solid background in C++ development with over ${yearsOfExp} years of experience, but lacks a Master's degree in computer science. They possess strong programming skills and experience in multithreading, but do not meet all the specific requirements for project management and graphics APIs.`,
    `With ${yearsOfExp} years in data science and analytics, this candidate brings strong technical skills in Python and machine learning. Their experience spans multiple industries, providing valuable cross-functional insights.`,
    `This professional combines ${yearsOfExp} years of hands-on experience with cutting-edge data science technologies. They have demonstrated success in implementing ML solutions at scale.`
  ]
  
  const advantages = [
    'Has approximately 4.0 years of industry experience working as a software engineer.',
    'Has communication and writing skills in both German and English.',
    'Has strong programming skills using C++ in large codebases.',
    'Has experience with concurrent programming and multi-threading.',
    'Experienced in Python, R, and SQL with proven track record.',
    'Strong background in machine learning and statistical analysis.',
    'Has led cross-functional teams in data-driven projects.',
    'Demonstrated ability to translate business needs into technical solutions.'
  ]
  
  const disadvantages = [
    'Does not have a master\'s degree in computer science or a related field.',
    'Limited experience with cloud platforms (AWS, Azure, GCP).',
    'No formal certification in project management methodologies.',
    'May require additional training in specific industry domain knowledge.'
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
  
  const candidate: Partial<Candidate> = {
    id: `candidate-${index}`,
    matchScore,
    matchPercentage,
    title: `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${roles[Math.floor(Math.random() * roles.length)]}`,
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