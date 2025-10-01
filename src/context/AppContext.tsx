import { createContext, useContext, useReducer, useEffect, useCallback, useMemo, ReactNode } from 'react'
import { AppState, Candidate } from '../types'
import { mockCandidates } from '../data/mockCandidates'

type AppAction =
  | { type: 'INVITE_CANDIDATE'; candidateId: string }
  | { type: 'TOGGLE_FILTER_INVITED' }
  | { type: 'SET_SHOW_PRICING_WARNING'; show: boolean }
  | { type: 'LOAD_STATE'; state: Partial<AppState> }

const initialState: AppState = {
  candidates: mockCandidates,
  invitedIds: [],
  showPricingWarning: true,
  filterInvitedOnly: false,
}

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'INVITE_CANDIDATE':
      return {
        ...state,
        invitedIds: [...state.invitedIds, action.candidateId],
        candidates: state.candidates.map(candidate =>
          candidate.id === action.candidateId
            ? { ...candidate, isInvited: true }
            : candidate
        ),
      }
    
    case 'TOGGLE_FILTER_INVITED':
      return {
        ...state,
        filterInvitedOnly: !state.filterInvitedOnly,
      }
    
    case 'SET_SHOW_PRICING_WARNING':
      return {
        ...state,
        showPricingWarning: action.show,
      }
    
    case 'LOAD_STATE':
      return {
        ...state,
        ...action.state,
        invitedIds: [], // Always start with empty invitedIds
        candidates: mockCandidates.map(candidate => ({
          ...candidate,
          isInvited: false // Reset all candidates to not invited
        }))
      }
    
    default:
      return state
  }
}

interface AppContextType {
  state: AppState
  inviteCandidate: (candidateId: string) => void
  toggleFilterInvited: () => void
  setShowPricingWarning: (show: boolean) => void
  getFilteredCandidates: Candidate[]
  getInvitationCost: number
}

const AppContext = createContext<AppContextType | undefined>(undefined)

const STORAGE_KEY = 'job-candidate-matching-state'

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  // Load state from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem(STORAGE_KEY)
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState)
        dispatch({ type: 'LOAD_STATE', state: parsedState })
      } catch (error) {
        console.error('Failed to load saved state:', error)
      }
    }
  }, [])

  // Save state to localStorage whenever it changes (debounced)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const stateToSave = {
        showPricingWarning: state.showPricingWarning,
        filterInvitedOnly: state.filterInvitedOnly,
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave))
    }, 500) // Debounce localStorage writes

    return () => clearTimeout(timeoutId)
  }, [state.showPricingWarning, state.filterInvitedOnly])

  const inviteCandidate = useCallback((candidateId: string) => {
    dispatch({ type: 'INVITE_CANDIDATE', candidateId })
  }, [])

  const toggleFilterInvited = useCallback(() => {
    dispatch({ type: 'TOGGLE_FILTER_INVITED' })
  }, [])

  const setShowPricingWarning = useCallback((show: boolean) => {
    dispatch({ type: 'SET_SHOW_PRICING_WARNING', show })
  }, [])

  const getFilteredCandidates = useMemo(() => {
    if (state.filterInvitedOnly) {
      return state.candidates.filter(candidate => candidate.isInvited)
    }
    return state.candidates
  }, [state.candidates, state.filterInvitedOnly])

  const getInvitationCost = useMemo(() => {
    const invitedCount = state.invitedIds.length
    
    // Bulk pricing logic
    if (invitedCount === 0) return 0
    if (invitedCount === 2) return 20
    if (invitedCount === 5) return 50
    
    // Default: 10 CHF per invitation
    return invitedCount * 10
  }, [state.invitedIds.length])

  const value: AppContextType = useMemo(() => ({
    state,
    inviteCandidate,
    toggleFilterInvited,
    setShowPricingWarning,
    getFilteredCandidates,
    getInvitationCost,
  }), [state, inviteCandidate, toggleFilterInvited, setShowPricingWarning, getFilteredCandidates, getInvitationCost])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}