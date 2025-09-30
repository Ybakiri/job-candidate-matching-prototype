import { useEffect } from 'react'

interface OverlayProps {
  isOpen: boolean
  onClick?: () => void
  zIndex?: number
  className?: string
}

export function Overlay({ isOpen, onClick, zIndex = 40, className = '' }: OverlayProps) {
  // Prevent body scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className={`
        fixed inset-0 
        bg-[#000000]/60 
        backdrop-blur-sm
        transition-all duration-300 ease-out
        ${isOpen ? 'opacity-100' : 'opacity-0'}
        ${className}
      `}
      style={{ zIndex }}
      onClick={onClick}
      aria-hidden="true"
    />
  )
}