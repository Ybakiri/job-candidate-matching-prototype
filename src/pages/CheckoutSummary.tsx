import { useNavigate } from 'react-router-dom'
import { Header } from '../components/Header'
import { useTranslation } from '../context/LanguageContext'

// Import all assets
const imgSend = "/4e19cf6aa16043911214e92360f13f44c9d070ab.svg"
const imgJobsLogo = "/4ead4e0133f54c46f6c5f6b66d2e8e8ec4a952f3.svg"
const imgEllipse92 = "/1d986f157ad337c0f2e219154b968d3b1d44aa75.svg"
const imgEllipse93 = "/2b7aa68a01b84c3424083e0a826a4959a997f858.svg"

export function CheckoutSummary() {
  const navigate = useNavigate()
  const { t, language } = useTranslation()

  const handlePublishNow = () => {
    navigate(`/${language}/success`)
  }

  return (
    <div className="bg-[#f9f9fa] min-h-screen font-open-sans pb-[3rem]">
      <Header />

      {/* Stepper */}
      <div className="max-w-4xl mx-auto px-4 pt-16 pb-8">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-8 md:space-x-16">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="relative w-12 h-12">
                <img alt="" className="w-12 h-12" src={imgEllipse92} />
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">1</div>
              </div>
              <span className="mt-2 text-sm text-[#202333] text-center max-w-[120px]">{t('checkout.steps.jobAd')}</span>
            </div>
            
            {/* Connector Line 1 */}
            <div className="hidden sm:block w-8 md:w-16 h-px bg-gray-300"></div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="relative w-12 h-12">
                <img alt="" className="w-12 h-12" src={imgEllipse92} />
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">2</div>
              </div>
              <span className="mt-2 text-sm text-[#202333] text-center max-w-[120px]">{t('checkout.steps.preview')}</span>
            </div>
            
            {/* Connector Line 2 */}
            <div className="hidden sm:block w-8 md:w-16 h-px bg-gray-300"></div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="relative w-12 h-12">
                <img alt="" className="w-12 h-12" src={imgEllipse92} />
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">3</div>
              </div>
              <span className="mt-2 text-sm text-[#202333] text-center max-w-[120px]">{t('checkout.steps.productSelection')}</span>
            </div>
            
            {/* Connector Line 3 */}
            <div className="hidden sm:block w-8 md:w-16 h-px bg-gray-300"></div>
            
            {/* Step 4 - Active */}
            <div className="flex flex-col items-center">
              <div className="relative w-12 h-12">
                <img alt="" className="w-12 h-12" src={imgEllipse93} />
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">4</div>
              </div>
              <span className="mt-2 text-sm font-semibold text-[#202333] text-center max-w-[120px] tracking-tight">{t('checkout.steps.summary')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-2xl font-bold text-[#202333] mb-4 tracking-tight">{t('checkout.title')}</h1>
        <p className="text-base text-[#202333]">{t('checkout.subtitle')}</p>
      </div>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-6">
        {/* Order Details Card */}
        <div className="lg:w-2/5 bg-white rounded shadow-[0px_4px_6px_-4px_rgba(24,39,75,0.12),0px_8px_8px_-4px_rgba(24,39,75,0.08)] p-6 h-fit">
          <h2 className="text-xl font-bold text-[#202333] mb-6">{t('checkout.orderDetails.title')}</h2>
          
          <div className="mb-6">
            <p className="text-xs text-[#585d72] mb-4">{t('checkout.orderDetails.billedTo')}</p>
            <div className="space-y-3.5">
              <p className="text-sm font-semibold text-[#202333] tracking-tight leading-[21px]">TX Capital AG</p>
              <p className="text-sm font-semibold text-[#202333] tracking-tight leading-[21px]">Ebenaustrasse 22</p>
              <p className="text-sm font-semibold text-[#202333] tracking-tight leading-[21px]">6048 Horw</p>
            </div>
          </div>
          
          <button className="text-base font-semibold text-[#0e0e14] underline hover:no-underline leading-6">
            {t('checkout.orderDetails.addNotesForInvoice')}
          </button>
        </div>
        
        {/* Order Summary Card */}
        <div className="lg:w-3/5 bg-white rounded shadow-[0px_4px_6px_-4px_rgba(24,39,75,0.12),0px_8px_8px_-4px_rgba(24,39,75,0.08)] p-8 h-fit">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-[#202333]">{t('checkout.orderSummary.title')}</h2>
          {/* Jobs.ch logo - x=620, y=355, width=103.125, height=20 */}
          <div className="w-[103px] h-5">
            <img alt="jobs.ch" className="block h-full" src={imgJobsLogo} />
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="flex justify-between items-baseline">
            <p className="text-xs text-[#585d72]">{t('checkout.orderSummary.product')}</p>
            <p className="text-xs text-[#585d72] text-right">{t('checkout.orderSummary.priceInCHF')}</p>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-base text-[#202333]">{t('checkout.orderSummary.jobsBasic')}</span>
              <button className="text-base font-semibold text-[#0e0e14] underline hover:no-underline leading-[21px]">
                {t('checkout.orderSummary.edit')}
              </button>
            </div>
            <span className="text-sm font-semibold text-[#202333] tracking-tight leading-[21px]">650.00</span>
          </div>
          
          <button className="text-base font-semibold text-[#0e0e14] underline hover:no-underline leading-6">
            {t('checkout.orderSummary.useACoupon')}
          </button>
          
          {/* Divider line - x=621, y=522, width=623, height=1 */}
          <div className="border-t border-[#e6e6ea] pt-6 space-y-4">
            <div className="flex justify-between">
              <span className="text-sm font-semibold text-[#202333] tracking-tight leading-[21px]">{t('checkout.orderSummary.subtotal')}</span>
              <span className="text-sm font-semibold text-[#202333] tracking-tight leading-[21px]">650.00</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-sm font-semibold text-[#202333] tracking-tight leading-[21px]">{t('checkout.orderSummary.incVAT')}</span>
              <span className="text-sm font-semibold text-[#202333] tracking-tight leading-[21px]">50.05</span>
            </div>
            
            <div className="flex justify-between pt-4">
              <span className="text-base font-bold text-[#202333] leading-[19px]">{t('checkout.orderSummary.totalInCHF')}</span>
              <span className="text-base font-bold text-[#202333] leading-[19px]">700.05</span>
            </div>
            
            <p className="text-xs text-[#585d72] leading-[18px]">{t('checkout.orderSummary.incVAT')}</p>
          </div>
          
          <div className="pt-6">
            <p className="text-xs text-[#585d72] mb-6 leading-[18px] w-[624px]">
              {t('checkout.orderSummary.termsText')}
            </p>
            
            {/* Publish Button - x=1080, y=786, width=174, height=48 */}
            <div className="flex justify-end">
              <button
                onClick={handlePublishNow}
                className="bg-[#222222] text-white px-5 pr-6 py-3 rounded flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors font-bold"
              >
                <div className="w-6 h-6">
                  <div className="w-5 h-5">
                    <img alt="" className="block" src={imgSend} />
                  </div>
                </div>
                <span className="text-base leading-6">{t('checkout.orderSummary.publishNow')}</span>
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}