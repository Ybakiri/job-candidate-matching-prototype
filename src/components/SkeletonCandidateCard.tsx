import { memo } from 'react'

interface SkeletonCandidateCardProps {
  delay?: number
}

const SkeletonCandidateCard = memo(function SkeletonCandidateCard({ delay = 0 }: SkeletonCandidateCardProps) {
  return (
    <div 
      className="bg-white relative rounded border border-[#e6e6ea] transition-all duration-200 flex flex-col h-full animate-pulse"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Card Content - Main clickable area */}
      <div className="flex-1 p-6">
        {/* Header Section with Avatar */}
        <div className="flex gap-4 items-center mb-4">
          {/* Avatar Skeleton */}
          <div className="w-[85px] h-[85px] rounded-[68px] bg-gray-200 shrink-0" />
          
          {/* Info Section */}
          <div className="flex-1 flex flex-col gap-2">
            {/* Title Row */}
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 bg-gray-200 rounded" />
                <div className="h-6 bg-gray-200 rounded w-[180px]" />
              </div>
              <div className="bg-gray-200 px-2 py-[2px] rounded-[20px] h-5 w-[120px]" />
            </div>
            
            {/* Role */}
            <div className="h-[21px] bg-gray-200 rounded w-[200px]" />
            
            {/* Location */}
            <div className="h-[21px] bg-gray-200 rounded w-[140px]" />
          </div>
        </div>
        
        {/* Skills */}
        <div className="flex flex-wrap gap-2 items-center mb-4">
          <div className="h-7 w-20 bg-gray-200 rounded-[40px]" />
          <div className="h-7 w-16 bg-gray-200 rounded-[40px]" />
          <div className="h-7 w-24 bg-gray-200 rounded-[40px]" />
          <div className="h-7 w-18 bg-gray-200 rounded-[40px]" />
          <div className="h-7 w-6 bg-gray-200 rounded" />
        </div>
        
        {/* Past Experiences - Condensed */}
        <div className="border border-[#e6e6ea] rounded p-3 mb-3">
          <div className="h-5 bg-gray-200 rounded w-[120px] mb-2" />
          <div className="flex flex-col gap-1">
            <div className="h-5 bg-gray-200 rounded w-full" />
            <div className="h-5 bg-gray-200 rounded w-[85%]" />
            <div className="h-4 bg-gray-200 rounded w-[60px]" />
          </div>
        </div>
        
        {/* Education & Contact Grid - 2 Columns */}
        <div className="flex gap-3">
          {/* Education - Left Column */}
          <div className="flex-1 border border-[#e6e6ea] rounded p-3">
            <div className="h-5 bg-gray-200 rounded w-[60px] mb-2" />
            <div className="flex flex-col gap-1">
              <div className="h-5 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-[50px]" />
            </div>
          </div>
          
          {/* Contact Information - Right Column */}
          <div className="flex-1 border border-[#e6e6ea] rounded p-3">
            <div className="flex items-center gap-1 mb-2">
              <div className="h-5 bg-gray-200 rounded w-[100px]" />
              <div className="w-3 h-3 bg-gray-200 rounded" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-start justify-between">
                <div className="h-5 bg-gray-200 rounded w-[35px]" />
                <div className="h-5 bg-gray-200 rounded w-[120px]" />
              </div>
              <div className="flex items-start justify-between">
                <div className="h-5 bg-gray-200 rounded w-[35px]" />
                <div className="h-5 bg-gray-200 rounded w-[100px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer with Action Buttons */}
      <div className="border-t border-[#e6e6ea] p-4 flex gap-3">
        <div className="flex-1 bg-gray-200 h-12 rounded" />
        <div className="flex-1 bg-gray-200 h-12 rounded" />
      </div>
    </div>
  )
})

export { SkeletonCandidateCard }