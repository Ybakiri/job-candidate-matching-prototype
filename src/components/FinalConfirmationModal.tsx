import { Overlay } from './Overlay'

// Import assets
const imgInfo = "/5fa5d4de9a73bf8410be5e2a75547a2c33ae844e.svg"

interface FinalConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  invitedCount: number
}

export function FinalConfirmationModal({ isOpen, onClose, invitedCount }: FinalConfirmationModalProps) {
  if (!isOpen) return null

  const handleFinish = () => {
    // In a real app, this would navigate to the job ad page
    alert(`Finishing with ${invitedCount} invited candidates. Navigating to job ad...`)
    onClose()
  }

  return (
    <>
      {/* Overlay */}
      <Overlay isOpen={isOpen} onClick={onClose} zIndex={50} />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4" onClick={onClose}>
        <div className="bg-white rounded w-[604px] shadow-xl flex flex-col overflow-clip" onClick={e => e.stopPropagation()}>
          {/* Header */}
          <div className="bg-white px-6 pt-6 pb-2">
            <h2 className="text-[20px] font-bold text-[#202333] tracking-[-0.3px] leading-7">
              Are you ready to finish?
            </h2>
          </div>
          
          {/* Content */}
          <div className="bg-white px-6 pt-2 pb-3 flex flex-col gap-3">
            {/* Main Content Box */}
            <div className="border border-[#e6e6ea] rounded p-4 flex flex-col gap-3">
              <p className="text-[14px] text-[#0f204d] leading-[21px]">
                You have invited <strong>{invitedCount} candidates</strong> to apply for your position.
              </p>
              
              <p className="text-[14px] text-[#0f204d] leading-[21px]">
                Once you leave this page, you won't be able to return to invite more candidates.
              </p>
            </div>
            
            {/* Info Banner */}
            <div className="bg-[#f0f4ff] rounded-lg flex gap-2 items-center pl-6 pr-[31px] py-4">
              <div className="w-6 h-6 shrink-0 overflow-clip relative">
                <div className="absolute inset-[8.333%]">
                  <img alt="" className="w-6 h-6 shrink-0" src={imgInfo} />
                </div>
              </div>
              <p className="text-[14px] text-black leading-[21px]">
                Make sure you've invited all the candidates you're interested in before finishing.
              </p>
            </div>
          </div>
          
          {/* Footer */}
          <div className="bg-white px-6 pt-3 pb-6 flex gap-3 justify-end">
            <button
              onClick={onClose}
              className="px-6 py-3 border border-[#989ba8] text-[#202333] rounded font-bold text-base leading-6 hover:border-gray-400 transition-colors"
            >
              Continue browsing
            </button>
            <button
              onClick={handleFinish}
              className="bg-[#0e0e14] text-white px-6 py-3 rounded font-bold text-base leading-6 hover:bg-[#1a1a1a] transition-colors"
            >
              Finish and view job ad
            </button>
          </div>
        </div>
      </div>
    </>
  )
}