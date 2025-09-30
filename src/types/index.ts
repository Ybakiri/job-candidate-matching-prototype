export type MatchScore = 'great' | 'good' | 'average'

export interface Skill {
  name: string
  matches: boolean
}

export interface Experience {
  role: string
  industry: string
}

export interface Education {
  degree: string
  field: string
}

export interface Contact {
  email: string
  phone: string
}

export interface CandidateInsights {
  summary: string
  advantages: string[]
  disadvantages: string[]
}

export interface Candidate {
  id: string
  matchScore: MatchScore
  matchPercentage: number
  title: string
  yearsExperience: number
  currentRole: string
  companyIndustry: string
  region: string
  skills: Skill[]
  experiences: Experience[]
  education: Education[]
  contact: Contact
  insights: CandidateInsights
  isInvited: boolean
}

export interface InvitationPricing {
  basePrice: number
  bulkPricing: {
    [key: number]: number
  }
}

export interface AppState {
  candidates: Candidate[]
  invitedIds: string[]
  showPricingWarning: boolean
  filterInvitedOnly: boolean
}

export interface OrderDetails {
  company: {
    name: string
    address: string
    city: string
  }
  product: {
    name: string
    price: number
  }
  subtotal: number
  vat: number
  total: number
}