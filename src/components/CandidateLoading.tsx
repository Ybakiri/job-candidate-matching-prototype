import { useState, useEffect } from 'react'
import { SkeletonCandidateCard } from './SkeletonCandidateCard'

interface CandidateLoadingProps {
  onLoadingComplete: () => void
}

export function CandidateLoading({ onLoadingComplete }: CandidateLoadingProps) {
  const [progress, setProgress] = useState(0)
  const [currentMessage, setCurrentMessage] = useState('Searching candidate database...')

  const messages = [
    'Searching candidate database...',
    'Analyzing matching profiles...',
    'Ranking candidates by relevance...',
    'Finalizing best matches...',
    'Ready to show candidates!'
  ]

  useEffect(() => {
    const duration = 5000 // 5 seconds
    const interval = 50 // Update every 50ms for smooth animation
    const increment = 100 / (duration / interval)

    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment
        
        // Update message based on progress
        const messageIndex = Math.min(Math.floor((newProgress / 100) * messages.length), messages.length - 1)
        setCurrentMessage(messages[messageIndex])
        
        if (newProgress >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            onLoadingComplete()
          }, 200) // Small delay before showing actual content
          return 100
        }
        
        return newProgress
      })
    }, interval)

    return () => clearInterval(timer)
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