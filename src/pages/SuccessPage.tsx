import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CandidateList } from '../components/CandidateList'
import { CandidateLoading } from '../components/CandidateLoading'
import { Header } from '../components/Header'
import { useTranslation } from '../context/LanguageContext'

// Import all assets
const imgCheckCircle = "/3aa1e8c480fcf31fa45b874c46723385435e08af.svg"
const imgCheck = "/75ab6d5d9c8916dd03ca2916df956d98b4f0f331.svg"
const imgEye = "/9c1264132c68b8f06a99feb4fe1a6a7ebc6e88e2.svg"
const imgMockup = "/3db8819fd0a96a562a0eb9fb64ab3faaa9e23f43.png"
const imgFrame = "/80cb9368d7522b42a0cf933e2509f5179c673255.svg"
const imgEmail = "/f4e26e248512c23578fd58708633be39451c208d.svg"
const imgTipsAndUpdates = "/ef8b096da879f0071dbd6a33c476414f95371821.svg"

export function SuccessPage() {
  const { t } = useTranslation()
  const [showCandidates, setShowCandidates] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const handleBrowseCandidates = () => {
    setIsLoading(true)
    // Scroll to candidates section
    setTimeout(() => {
      const element = document.getElementById('candidates-section')
      element?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setShowCandidates(true)
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
                {t('success.title')}
              </h3>
              <p className="text-sm font-normal text-[#202333] leading-[21px]">
                {t('success.description')}
              </p>
            </div>
          </div>
          <Link 
            to="/" 
            className="px-3 py-[5.5px] text-sm font-semibold text-[#202333] tracking-[-0.3px] leading-[21px] underline text-center whitespace-nowrap"
          >
            {t('navigation.backToJobListings')}
          </Link>
        </div>

        {/* Main Section */}
        <div className="w-full bg-white rounded-lg p-[24px] flex flex-col gap-[40px] items-center">
          {/* Header */}
          <div className="flex flex-col gap-1 items-center">
            <div className="flex items-center gap-1">
              <span className="text-base font-normal text-[#202333] leading-6">{t('success.whileYouWait')}</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <h1 className="text-[28px] font-bold text-[#202333] leading-[34px] tracking-[-1px] text-center">
                {t('success.exploreApplicants')}
              </h1>
              <div className="flex items-center gap-2">
                <span className="text-base font-normal text-[#202333] leading-6">{t('success.candidatesFound')}</span>
                <div className="bg-[#e6f5ee] px-[6px] py-[2px] rounded-lg">
                  <span className="text-sm font-semibold text-black tracking-[-0.3px] leading-[21px]">{t('success.jobTitle')}</span>
                </div>
                <span className="text-base font-normal text-[#202333] leading-6">{t('success.position')}</span>
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="w-full flex gap-[44px] items-start justify-center h-[414px]">
            {/* Left Column - Content */}
            <div className="flex flex-col gap-[24px] items-center w-[588px]">
              <div className="flex flex-col gap-[24px] items-start w-full">
                {/* Steps */}
                <div className="flex flex-col gap-4">
                  {/* Step 1 */}
                  <div className="flex gap-4 items-start">
                    <div className="w-6 h-6 shrink-0 overflow-hidden">
                      <img alt="" className="w-full h-full object-contain" src={imgFrame} />
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                      <h3 className="text-base font-bold text-[#202333] leading-6">
                        {t('howItWorks.step1Title')}
                      </h3>
                      <p className="text-base text-[#202333] leading-6">
                        {t('howItWorks.step1Description')}
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4 items-start">
                    <div className="w-6 h-6 shrink-0 overflow-hidden">
                      <img alt="" className="w-full h-full object-contain" src={imgEmail} />
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                      <h3 className="text-base font-bold text-[#202333] leading-6">
                        {t('howItWorks.step2Title')}
                      </h3>
                      <p className="text-base text-[#202333] leading-6">
                        {t('howItWorks.step2Description')}
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4 items-start">
                    <div className="w-6 h-6 shrink-0 overflow-hidden">
                      <img alt="" className="w-full h-full object-contain" src={imgTipsAndUpdates} />
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                      <h3 className="text-base font-bold text-[#202333] leading-6">
                        {t('howItWorks.step3Title')}
                      </h3>
                      <p className="text-base text-[#202333] leading-6">
                        {t('howItWorks.step3Description')}
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Features Box */}
              <div className="border border-[#e6e6ea] rounded p-3 flex flex-col gap-3 w-full">
                  <div className="flex items-center gap-2">
                    <img alt="" className="w-4 h-4 shrink-0" src={imgCheck} />
                    <span className="text-sm text-[#202333] leading-[21px]">
                      {t('features.answerRate')}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img alt="" className="w-4 h-4 shrink-0" src={imgCheck} />
                    <span className="text-sm text-[#202333] leading-[21px]">
                      {t('features.responseTime')}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img alt="" className="w-4 h-4 shrink-0" src={imgCheck} />
                    <span className="text-sm text-[#202333] leading-[21px]">
                      {t('features.pricing')}
                    </span>
                  </div>
              </div>

              {/* Button */}
              <div className="flex gap-[12px] items-center justify-center w-full">
                  {!showCandidates && !isLoading ? (
                    <button
                      onClick={handleBrowseCandidates}
                      className="flex-1 bg-[#0e0e14] text-white px-[24px] py-[12px] rounded-[4px] flex items-center justify-center gap-2 font-bold text-base leading-6"
                    >
                      <img alt="" className="w-5 h-5 shrink-0" src={imgEye} />
                      {t('buttons.browseCandidate')}
                    </button>
                  ) : showCandidates ? (
                    <div className="text-center">
                      <p className="text-base font-medium text-[#202333] mb-1">{t('candidates.readyToHire')}</p>
                      <p className="text-xs text-[#585d72] leading-[18px]">{t('candidates.bestCandidates')}</p>
                    </div>
                  ) : null}
              </div>
            </div>

            {/* Right Column - Mockup */}
            <div className="bg-[#fbf5fc] rounded-lg p-[24px] w-[482px] flex items-center justify-center">
              <div className="w-[413px] h-[339px] relative">
                <img 
                  alt="Candidate mockup" 
                  className="absolute inset-0 max-w-none size-full" 
                  src={imgMockup} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loading or Candidates Section */}
      {isLoading && (
        <CandidateLoading onLoadingComplete={handleLoadingComplete} />
      )}
      
      {showCandidates && (
        <div id="candidates-section" className="border-t border-neutral-100 mt-8">
          <CandidateList />
        </div>
      )}
    </div>
  )
}