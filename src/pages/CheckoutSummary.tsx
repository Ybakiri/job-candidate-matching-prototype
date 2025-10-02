import { useNavigate } from 'react-router-dom'
import { Header } from '../components/Header'

// Import all assets
const imgSend = "/4e19cf6aa16043911214e92360f13f44c9d070ab.svg"
const imgJobsLogo = "/4ead4e0133f54c46f6c5f6b66d2e8e8ec4a952f3.svg"
const imgEllipse92 = "/1d986f157ad337c0f2e219154b968d3b1d44aa75.svg"
const imgEllipse93 = "/2b7aa68a01b84c3424083e0a826a4959a997f858.svg"

export function CheckoutSummary() {
  const navigate = useNavigate()

  const handlePublishNow = () => {
    navigate('/success')
  }

  return (
    <div className="bg-[#f9f9fa] min-h-screen font-open-sans pb-[3rem]">
      <Header />

      {/* Main Container */}
      <div className="relative max-w-[1440px] mx-auto min-h-[900px]">
        {/* Stepper - Positioned at x=394, y=88, width=652, height=79 */}
        <div className="absolute left-[394px] top-[88px] w-[652px] h-[79px]">
        <div className="flex items-center justify-between">
          {/* Step 1 - x=450, y=88 */}
          <div className="flex flex-col items-center">
            <div className="relative w-12 h-12">
              <img alt="" className="icon-sm" src={imgEllipse92} />
              <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">1</div>
            </div>
            <span className="mt-2 text-sm text-[#202333] w-40 text-center">Job ad</span>
          </div>
          
          {/* Step 2 - x=614, y=88 */}
          <div className="flex flex-col items-center">
            <div className="relative w-12 h-12">
              <img alt="" className="icon-sm" src={imgEllipse92} />
              <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">2</div>
            </div>
            <span className="mt-2 text-sm text-[#202333] w-40 text-center">Preview</span>
          </div>
          
          {/* Step 3 - x=778, y=88 */}
          <div className="flex flex-col items-center">
            <div className="relative w-12 h-12">
              <img alt="" className="icon-sm" src={imgEllipse92} />
              <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">3</div>
            </div>
            <span className="mt-2 text-sm text-[#202333] w-40 text-center">Product Selection</span>
          </div>
          
          {/* Step 4 - Active - x=942, y=88 */}
          <div className="flex flex-col items-center">
            <div className="relative w-12 h-12">
              <img alt="" className="icon-sm" src={imgEllipse93} />
              <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">4</div>
            </div>
            <span className="mt-2 text-sm font-semibold text-[#202333] w-40 text-center tracking-tight">Summary</span>
          </div>
        </div>
      </div>

      {/* Title Section - x=505, y=215, width=431, height=65 */}
      <div className="absolute left-[505px] top-[215px] w-[431px] h-[65px] text-center">
        <h1 className="text-2xl font-bold text-[#202333] mb-4 tracking-tight">Order Summary</h1>
        <p className="text-base text-[#202333]">Check the invoice details and post your job advertisement</p>
      </div>

      {/* Cards Container */}
      <div>
        {/* Order Details Card - x=164, y=323, width=408, height=543 */}
        <div className="absolute left-[164px] top-[323px] w-[408px] h-[570px] bg-white rounded shadow-[0px_4px_6px_-4px_rgba(24,39,75,0.12),0px_8px_8px_-4px_rgba(24,39,75,0.08)] p-6">
          <h2 className="text-xl font-bold text-[#202333] mb-6">Order Details</h2>
          
          <div className="mb-6">
            <p className="text-xs text-[#585d72] mb-4">Billed to</p>
            <div className="space-y-3.5">
              <p className="text-sm font-semibold text-[#202333] tracking-tight leading-[21px]">TX Capital AG</p>
              <p className="text-sm font-semibold text-[#202333] tracking-tight leading-[21px]">Ebenaustrasse 22</p>
              <p className="text-sm font-semibold text-[#202333] tracking-tight leading-[21px]">6048 Horw</p>
            </div>
          </div>
          
          <button className="text-base font-semibold text-[#0e0e14] underline hover:no-underline leading-6">
            Add notes for the invoice
          </button>
        </div>
        
        {/* Order Summary Card - x=588, y=323, width=688, height=543 */}
        <div className="absolute left-[588px] top-[323px] w-[688px] h-[570px] bg-white rounded shadow-[0px_4px_6px_-4px_rgba(24,39,75,0.12),0px_8px_8px_-4px_rgba(24,39,75,0.08)] p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-[#202333]">Order Summary</h2>
          {/* Jobs.ch logo - x=620, y=355, width=103.125, height=20 */}
          <div className="w-[103px] h-5">
            <img alt="jobs.ch" className="block max-w-none h-full" src={imgJobsLogo} />
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="flex justify-between items-baseline">
            <p className="text-xs text-[#585d72]">Product</p>
            <p className="text-xs text-[#585d72] text-right">Price in CHF</p>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-base text-[#202333]">jobs.ch Basic</span>
              <button className="text-base font-semibold text-[#0e0e14] underline hover:no-underline leading-[21px]">
                Edit
              </button>
            </div>
            <span className="text-sm font-semibold text-[#202333] tracking-tight leading-[21px]">650.00</span>
          </div>
          
          <button className="text-base font-semibold text-[#0e0e14] underline hover:no-underline leading-6">
            Use a coupon
          </button>
          
          {/* Divider line - x=621, y=522, width=623, height=1 */}
          <div className="border-t border-[#e6e6ea] pt-6 space-y-4">
            <div className="flex justify-between">
              <span className="text-sm font-semibold text-[#202333] tracking-tight leading-[21px]">Subtotal</span>
              <span className="text-sm font-semibold text-[#202333] tracking-tight leading-[21px]">650.00</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-sm font-semibold text-[#202333] tracking-tight leading-[21px]">Inc. VAT</span>
              <span className="text-sm font-semibold text-[#202333] tracking-tight leading-[21px]">50.05</span>
            </div>
            
            <div className="flex justify-between pt-4">
              <span className="text-base font-bold text-[#202333] leading-[19px]">Total in CHF</span>
              <span className="text-base font-bold text-[#202333] leading-[19px]">700.05</span>
            </div>
            
            <p className="text-xs text-[#585d72] leading-[18px]">Inc. VAT</p>
          </div>
          
          <div className="pt-6">
            <p className="text-xs text-[#585d72] mb-6 leading-[18px] w-[624px]">
              By continuing, you accept our Terms and Conditions and acknowledge our Data Protection policy.
            </p>
            
            {/* Publish Button - x=1080, y=786, width=174, height=48 */}
            <div className="flex justify-end">
              <button
                onClick={handlePublishNow}
                className="bg-[#222222] text-white px-5 pr-6 py-3 rounded flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors font-bold"
              >
                <div className="w-6 h-6">
                  <img alt="" className="icon-sm" src={imgSend} />
                </div>
                <span className="text-base leading-6">Publish now</span>
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}