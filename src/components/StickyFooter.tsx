import { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { useTranslation } from '../context/LanguageContext'
import { FinalConfirmationModal } from './FinalConfirmationModal'

export function StickyFooter() {
  const { state, toggleFilterInvited } = useAppContext()
  const { t } = useTranslation()
  const [showFinalModal, setShowFinalModal] = useState(false)

  const invitedCount = state.invitedIds.length

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 z-30">
        <div className="flex gap-8 items-center justify-end pl-6 pr-24 py-2">
          {/* Checkbox Section - Only show when at least 1 candidate is invited */}
          {invitedCount > 0 && (
            <button
              onClick={toggleFilterInvited}
              className="flex gap-3 items-start pl-1 py-3 hover:bg-gray-50 rounded transition-colors cursor-pointer"
            >
              <div className="w-6 h-6 flex items-center justify-center shrink-0">
                <div className="w-6 h-6 shrink-0 overflow-clip relative">
                  {state.filterInvitedOnly ? (
                    <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-6 h-6 border-2 border-[#e6e6ea] rounded bg-white"></div>
                  )}
                </div>
              </div>
              <div className="flex flex-col font-open-sans font-normal justify-center leading-0 relative shrink-0 text-[#202333] text-base text-nowrap">
                <p className="leading-6 whitespace-pre">{t('stickyFooter.showInvitedOnly')}</p>
              </div>
            </button>
          )}

          {/* Button */}
          <div className="relative rounded border border-[#989ba8] shrink-0">
            <button
              onClick={() => setShowFinalModal(true)}
              className="box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-6 py-3 relative hover:border-gray-400 transition-colors"
            >
              <div className="flex flex-col font-open-sans font-semibold justify-center leading-0 relative shrink-0 text-[#202333] text-base text-center text-nowrap">
                <p className="leading-6 whitespace-pre font-bold">{t('stickyFooter.finishAndViewJobAd')}</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      <FinalConfirmationModal
        isOpen={showFinalModal}
        onClose={() => setShowFinalModal(false)}
        invitedCount={invitedCount}
      />
    </>
  )
}