import { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { Overlay } from './Overlay'

// Import all assets
const imgInfo = "/3a6c87b6e67ec62dc1e13a5769351370c7f3110a.svg"
const imgSend = "/4e19cf6aa16043911214e92360f13f44c9d070ab.svg"

interface InvitationModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

export function InvitationModal({ isOpen, onClose, onConfirm }: InvitationModalProps) {
  const { setShowPricingWarning } = useAppContext()
  const [dontShowAgain, setDontShowAgain] = useState(false)

  if (!isOpen) return null

  const handleConfirm = () => {
    if (dontShowAgain) {
      setShowPricingWarning(false)
    }
    onConfirm()
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
              Confirm invitation & cost
            </h2>
          </div>
          
          {/* Content */}
          <div className="bg-white px-6 pt-2 pb-3 flex flex-col gap-3">
            {/* Main Content Box */}
            <div className="border border-[#e6e6ea] rounded p-4 flex flex-col gap-3">
              <p className="text-[14px] text-[#0f204d] leading-[21px]">
                Each invitation incurs a small fee of <strong>CHF 40.</strong> Only pay for the applicants who answer.
              </p>
              
              <p className="text-[14px] text-black leading-[21px]">For example:</p>
              
              <ul className="text-[14px] text-black leading-[21px] list-disc ml-[21px]">
                <li className="mb-0">Send 5 invitations → 5 candidates respond = CHF 200</li>
                <li className="mb-0">Send 5 invitations → 2 candidates respond = CHF 80</li>
                <li>Send 5 invitations → 0 candidates respond = CHF 0</li>
              </ul>
            </div>
            
            {/* Info Banner */}
            <div className="bg-[#f0f4ff] rounded-lg flex gap-2 items-center pl-6 pr-[31px] py-4">
              <div className="w-6 h-6 shrink-0 overflow-clip relative">
                <div className="absolute inset-[8.333%]">
                  <img alt="" className="w-6 h-6 shrink-0" src={imgInfo} />
                </div>
              </div>
              <p className="text-[14px] text-black leading-[21px] font-bold tracking-[-0.3px]">
                No answer, no charge.{' '}
                <span className="font-normal">
                  You won't be charged if the applicant doesn't answer{' '}
                </span>
                <span className="font-normal">until your job ad expires.</span>
              </p>
            </div>
            
            {/* Checkbox */}
            <div className="py-3 flex items-start gap-3">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={dontShowAgain}
                  onChange={(e) => setDontShowAgain(e.target.checked)}
                  className="sr-only"
                />
                <div className="w-6 h-6 shrink-0 overflow-clip relative">
                  {dontShowAgain ? (
                    <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-6 h-6 border-2 border-[#e6e6ea] rounded bg-white"></div>
                  )}
                </div>
                <span className="text-base text-[#202333] leading-6">Don't show this again</span>
              </label>
            </div>
          </div>
          
          {/* Footer */}
          <div className="bg-white px-6 pt-3 pb-6 flex gap-3 justify-end">
            <button
              onClick={onClose}
              className="px-6 py-3 border border-[#989ba8] text-[#202333] rounded font-bold text-base leading-6"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="bg-[#0e0e14] text-white pl-5 pr-6 py-3 rounded flex items-center gap-2 font-bold text-base leading-6"
            >
              <img alt="" className="w-4 h-4 shrink-0" src={imgSend} />
              Confirm invitation
            </button>
          </div>
        </div>
      </div>
    </>
  )
}