import { useState, useEffect } from 'react'
import { SkeletonCandidateCard } from './SkeletonCandidateCard'

interface CandidateLoadingProps {
  onLoadingComplete: () => void
}

export function CandidateLoading({ onLoadingComplete }: CandidateLoadingProps) {
  const [currentMessage, setCurrentMessage] = useState('Searching candidate database...')

  const messages = [
    'Searching candidate database...',
    'Analyzing matching profiles...',
    'Ranking candidates by relevance...'
  ]

  useEffect(() => {
    const duration = 4000 // 4 seconds total
    const messageInterval = duration / messages.length
    let currentIndex = 0

    // Update message periodically
    const messageTimer = setInterval(() => {
      currentIndex = (currentIndex + 1) % messages.length
      setCurrentMessage(messages[currentIndex])
    }, messageInterval)

    // Complete loading after duration
    const completeTimer = setTimeout(() => {
      clearInterval(messageTimer)
      onLoadingComplete()
    }, duration)

    return () => {
      clearInterval(messageTimer)
      clearTimeout(completeTimer)
    }
  }, [onLoadingComplete, messages])

  return (
    <div id="candidates-section" className="border-t border-neutral-100 mt-8">
      <div className="max-w-[1248px] mx-auto px-6 py-8">
        {/* Header */}
        <h1 className="text-2xl font-bold text-[#202333] mb-6">
          Loading your matched candidates...
        </h1>

        {/* Progress Section */}
        <div className="mb-8 bg-white rounded-lg border border-[#e6e6ea] p-6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 border-4 border-[#0e0e14] border-t-transparent rounded-full animate-spin" />
            <span className="text-lg font-semibold text-[#202333]">{currentMessage}</span>
          </div>
        </div>

        {/* Skeleton Cards */}
        <div className="space-y-6">
          {Array.from({ length: 4 }, (_, index) => (
            <SkeletonCandidateCard 
              key={index} 
              delay={index * 200} // Staggered animation
            />
          ))}
        </div>

        {/* Additional loading message */}
        <div className="text-center mt-8">
          <p className="text-[#585d72] text-sm">
            Analyzing 43 candidate profiles to find your perfect matches...
          </p>
        </div>
      </div>
    </div>
  )
}