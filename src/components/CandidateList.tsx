import { useState } from 'react'
import { CandidateCard } from './CandidateCard'
import { CandidateDrawer } from './CandidateDrawer'
import { InvitationModal } from './InvitationModal'
import { StickyFooter } from './StickyFooter'
import { Notification } from './Notification'
import { useAppContext } from '../context/AppContext'
import { useTranslation } from '../context/LanguageContext'
import { Candidate } from '../types'

export function CandidateList() {
  const { state, inviteCandidate, getFilteredCandidates } = useAppContext()
  const { t } = useTranslation()
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null)
  const [showDrawer, setShowDrawer] = useState(false)
  const [showPricingModal, setShowPricingModal] = useState(false)
  const [candidateToInvite, setCandidateToInvite] = useState<Candidate | null>(null)
  const [showNotification, setShowNotification] = useState(false)
  const [showPrivacyBanner, setShowPrivacyBanner] = useState(true)
  const [displayedCount, setDisplayedCount] = useState(10)

  const CANDIDATES_PER_PAGE = 10
  const candidates = getFilteredCandidates
  const displayedCandidates = candidates.slice(0, displayedCount)
  const hasMoreCandidates = displayedCount < candidates.length


  const handleViewCandidate = (candidate: Candidate) => {
    setSelectedCandidate(candidate)
    setShowDrawer(true)
  }

  const handleInviteCandidate = (candidate: Candidate) => {
    if (state.showPricingWarning) {
      setCandidateToInvite(candidate)
      setShowPricingModal(true)
    } else {
      inviteCandidate(candidate.id)
      setShowNotification(true)
    }
  }

  const handleConfirmInvitation = () => {
    if (candidateToInvite) {
      inviteCandidate(candidateToInvite.id)
      setCandidateToInvite(null)
      setShowPricingModal(false)
      setShowNotification(true)
    }
  }

  const handleShowMore = () => {
    setDisplayedCount(prev => Math.min(prev + CANDIDATES_PER_PAGE, candidates.length))
  }

  return (
    <div className="max-w-[1248px] mx-auto px-6 py-8">
        {/* Header and How it works - Horizontal Layout */}
        <div className="flex gap-8 mb-8">
          {/* Left Side - Header */}
          <div className="w-[600px]">
            <h1 className="text-2xl font-bold text-[#202333] mb-4">
              {t('candidates.matchesFound', { count: candidates.length })}
            </h1>
            <p className="text-base text-[#585d72]">
              {t('candidates.description')}
            </p>
          </div>

          {/* Right Side - How it works */}
          <div className="bg-white rounded-lg p-6 flex-1">
            <h2 className="text-lg font-bold text-[#202333] mb-4">{t('howItWorks.title')}</h2>
            <ol className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#0e0e14] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">1</div>
                <span className="text-base text-[#202333]">{t('howItWorks.step1Title')}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#0e0e14] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">2</div>
                <span className="text-base text-[#202333]">{t('howItWorks.step2Title')}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#0e0e14] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">3</div>
                <span className="text-base text-[#202333]">{t('howItWorks.step3Title')}</span>
              </li>
            </ol>
          </div>
        </div>

        {/* Privacy Notice */}
        {showPrivacyBanner && (
          <div className="bg-[#f0f4ff] rounded-lg flex gap-2 items-center pl-6 pr-[31px] py-4 mb-8">
            <div className="size-[24px] shrink-0 overflow-clip relative">
              <div className="absolute inset-[4.17%_12.5%]">
                <div className="w-[18px] h-5">
                  <img alt="" className="block" src="/971fcbac8ff1deafcaa107bdcd1527b61bb2b24e.svg" />
                </div>
              </div>
            </div>
            <p className="flex-1 text-sm font-normal text-[#0f204d] leading-[21px]">
              {t('privacy.description')}
            </p>
            <button 
              onClick={() => setShowPrivacyBanner(false)}
              className="text-sm text-black underline"
            >
              {t('privacy.dismiss')}
            </button>
          </div>
        )}

        {/* Candidates List */}
        <div className="space-y-6 mb-10 pb-25">
          {displayedCandidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
              onViewDetails={() => handleViewCandidate(candidate)}
              onInvite={() => handleInviteCandidate(candidate)}
            />
          ))}
        </div>

        {/* Show More */}
        {hasMoreCandidates && (
          <div className="text-center pb-[100px]">
            <button 
              onClick={handleShowMore}
              className="bg-white border border-[#e6e6ea] rounded-lg px-6 py-3 text-base font-semibold text-[#202333] hover:bg-gray-50 hover:border-[#d1d5db] transition-colors duration-200"
            >
              {t('buttons.showMore', { count: candidates.length - displayedCount })}
            </button>
          </div>
        )}

      {/* Drawer */}
      {showDrawer && selectedCandidate && (
        <CandidateDrawer
          candidate={candidates.find(c => c.id === selectedCandidate.id) || selectedCandidate}
          isOpen={showDrawer}
          onClose={() => setShowDrawer(false)}
          onInvite={() => handleInviteCandidate(selectedCandidate)}
        />
      )}

      {/* Pricing Modal */}
      {showPricingModal && (
        <InvitationModal
          isOpen={showPricingModal}
          onClose={() => setShowPricingModal(false)}
          onConfirm={handleConfirmInvitation}
        />
      )}

      {/* Sticky Footer */}
      <StickyFooter />

      {/* Notification */}
      {showNotification && (
        <Notification
          onClose={() => setShowNotification(false)}
        />
      )}
      </div>
  )
}