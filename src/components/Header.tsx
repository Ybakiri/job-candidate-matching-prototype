import { Link } from 'react-router-dom'

// Import all assets
const imgChevronLeft = "/13a55ba1eb68cbd3a2ee7dbafc25db5943d27e13.svg"
const imgChevronDown = "/fc55516a45197edd90123ad7d8ad8ea29fad77e2.svg"
const imgAvatar = "/74e259ab83e2c2c5a70dcf48d688d48b53268361.svg"
const imgAvatarMask = "/96dbc9b39d97141e30733882ba949f424c821f13.svg"
const imgUserPhoto = "/f076f15cadfc66222e46b3bba8b9d89c4cd5f1f0.png"

interface HeaderProps {
  showBackButton?: boolean
  backTo?: string
  backText?: string
}

export function Header({ showBackButton = true, backTo = '/', backText = 'Return to job listing' }: HeaderProps) {
  return (
    <div className="bg-[#202333] h-16 px-6 py-1 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {showBackButton && (
          <Link to={backTo} className="flex items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center">
              <img alt="Back" className="w-6 h-6" src={imgChevronLeft} />
            </div>
            <div className="text-[#e6e6ea] text-base font-normal">
              {backText}
            </div>
          </Link>
        )}
      </div>
      
      <div className="flex items-center gap-8">
        <button className="flex items-center gap-2 px-3 py-1 rounded">
          <span className="text-[#b8bac3] text-sm font-semibold tracking-tight underline">FR</span>
          <div className="w-6 h-6 flex items-center justify-center">
            <img alt="Language dropdown" className="w-6 h-6" src={imgChevronDown} />
          </div>
        </button>
        
        <div className="flex items-center gap-1">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0">
              <img alt="" className="block max-w-none size-full" src={imgAvatar} />
            </div>
            <div 
              className="absolute inset-0"
              style={{ 
                maskImage: `url('${imgAvatarMask}')`,
                maskSize: '40px 40px',
                maskPosition: '0px',
                maskRepeat: 'no-repeat'
              }}
            >
              <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={imgUserPhoto} />
            </div>
          </div>
          <div className="w-6 h-6 flex items-center justify-center">
            <img alt="User menu" className="w-6 h-6" src={imgChevronDown} />
          </div>
        </div>
      </div>
    </div>
  )
}