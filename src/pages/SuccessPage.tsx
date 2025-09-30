import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CandidateList } from '../components/CandidateList'
import { Header } from '../components/Header'

// Import all assets
const imgCheckCircle = "/3aa1e8c480fcf31fa45b874c46723385435e08af.svg"
const imgCheck = "/75ab6d5d9c8916dd03ca2916df956d98b4f0f331.svg"
const imgEye = "/9c1264132c68b8f06a99feb4fe1a6a7ebc6e88e2.svg"
const imgMockup = "/3db8819fd0a96a562a0eb9fb64ab3faaa9e23f43.png"

export function SuccessPage() {
  const [showCandidates, setShowCandidates] = useState(false)
  
  const handleBrowseCandidates = () => {
    setShowCandidates(true)
    // Scroll to candidates section
    setTimeout(() => {
      const element = document.getElementById('candidates-section')
      element?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="bg-[#f9f9fa] min-h-screen font-open-sans">
      <Header />

      {/* Main Content */}
      <div className="flex flex-col gap-8 items-center max-w-[1248px] mx-auto px-6 mt-8">
        {/* Success Banner */}
        <div className="bg-[#e6f5ee] w-full rounded-lg flex gap-4 items-center pl-6 pr-8 py-4">
          <div className="flex-1 flex items-start gap-2">
            <div className="w-6 h-6 shrink-0">
              <img alt="" className="block max-w-none size-full" src={imgCheckCircle} />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-[#202333] tracking-[-0.3px] leading-[21px] mb-1">
                Your ad will be online soon
              </h3>
              <p className="text-sm font-normal text-[#202333] leading-[21px]">
                You have successfully booked one of our products for your job advertisement. Please check your inbox for more information.
              </p>
            </div>
          </div>
          <Link 
            to="/" 
            className="px-3 py-[5.5px] rounded text-sm font-semibold text-[#202333] tracking-[-0.3px] leading-[21px] underline text-center whitespace-nowrap"
          >
            Back to job listings
          </Link>
        </div>

        {/* Main Section */}
        <div className="w-full flex flex-col gap-9 items-center">
          {/* Header */}
          <div className="flex flex-col gap-1 items-center">
            <div className="flex items-center gap-1">
              <div className="bg-[#d9e2fc] px-2 py-[2px] rounded-[20px] h-5 flex items-center">
                <span className="text-sm font-semibold text-[#0f204d] tracking-[-0.3px] leading-[21px]">New</span>
              </div>
              <span className="text-base font-normal text-[#202333] leading-6">Accelerate your hiring</span>
            </div>
            <h1 className="text-[32px] font-bold text-[#202333] leading-[38px] tracking-[-1px] text-center">
              We've already found the best candidates for you
            </h1>
          </div>

          {/* Two Column Layout */}
          <div className="w-full flex gap-[22px]">
            {/* Left Column - Content */}
            <div className="flex-1 bg-white rounded-lg p-6">
              <div className="flex flex-col gap-6">
                {/* Steps */}
                <div className="flex flex-col gap-5">
                  {/* Step 1 */}
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold text-[#202333] leading-6">
                        1. Invite pre-matched candidates
                      </h3>
                      <p className="text-base text-[#202333] leading-6">
                        Based on your job requirements
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold text-[#202333] leading-6">
                        2. They receive automatic invitations
                      </h3>
                      <p className="text-base text-[#202333] leading-6">
                        The candidates see your interest and can apply immediately
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold text-[#202333] leading-6">
                        3. Only pay for what you get
                      </h3>
                      <p className="text-base text-[#202333] leading-6">
                        Transparent per-response pricing, no hidden fees.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features Box */}
                <div className="border border-[#e6e6ea] rounded p-3 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 shrink-0">
                      <img alt="" className="block w-full h-auto" src={imgCheck} />
                    </div>
                    <span className="text-sm text-[#202333] leading-[21px]">
                      Typically 90% answer rate
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 shrink-0">
                      <img alt="" className="block w-full h-auto" src={imgCheck} />
                    </div>
                    <span className="text-sm text-[#202333] leading-[21px]">
                      Candidates answer within a few hours
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 shrink-0">
                      <img alt="" className="block w-full h-auto" src={imgCheck} />
                    </div>
                    <span className="text-sm text-[#202333] leading-[21px]">
                      Starting from CHF 40.- per response
                    </span>
                  </div>
                </div>

                {/* Button and Footer */}
                <div className="flex flex-col gap-3 items-center">
                  {!showCandidates ? (
                    <button
                      onClick={handleBrowseCandidates}
                      className="bg-[#0e0e14] text-white px-6 py-3 rounded flex items-center gap-2 font-bold text-base leading-6"
                    >
                      <div className="w-6 h-6">
                        <img alt="" className="block max-w-none size-full" src={imgEye} />
                      </div>
                      Browse 43 matched candidates
                    </button>
                  ) : (
                    <div className="text-xs text-[#585d72] leading-[18px] text-center">
                      The best candidates get hired quickly!
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Mockup */}
            <div className="flex-1 bg-[#fbf5fc] rounded-lg p-6 h-[482px] flex items-center justify-center">
              <div className="w-[463px] h-[434px] overflow-hidden relative">
                <img 
                  alt="Candidate mockup" 
                  className="absolute -left-[17px] top-[13px] w-[495px] h-[405px] max-w-none" 
                  src={imgMockup} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Candidates Section */}
      {showCandidates && (
        <div id="candidates-section" className="border-t border-neutral-100 mt-8">
          <CandidateList />
        </div>
      )}
    </div>
  )
}