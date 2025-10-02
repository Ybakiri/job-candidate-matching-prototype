import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

// Import assets
const imgCheckCircle = "/3aa1e8c480fcf31fa45b874c46723385435e08af.svg"

interface NotificationProps {
  duration?: number
  onClose: () => void
}

export function Notification({ duration = 5000, onClose }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation on mount
    setTimeout(() => setIsVisible(true), 10)
    
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onClose, 700) // Wait for animation to complete
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 700)
  }

  return (
    <div
      className={`fixed bottom-4 left-4 w-[352px] bg-white border-b-2 border-[#069868] rounded shadow-lg flex flex-col overflow-clip z-50 transition-all duration-700 cubic-bezier(0.4, 0.0, 0.2, 1) ${
        isVisible 
          ? 'translate-x-0 opacity-100' 
          : '-translate-x-full opacity-0'
      }`}
    >
      <div className="flex items-start gap-3 p-4">
        {/* Check Circle Icon */}
        <div className="w-6 h-6 shrink-0">
          <img alt="" className="w-6 h-6 shrink-0" src={imgCheckCircle} />
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <h3 className="text-base font-bold text-[#202333] leading-6 mb-1">
            Invitation sent
          </h3>
          <p className="text-xs text-[#585d72] leading-[18px]">
            The candidate will receive a notification and can apply immediately
          </p>
        </div>
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="w-6 h-6 shrink-0 flex items-center justify-center text-[#585d72] hover:text-[#202333] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}