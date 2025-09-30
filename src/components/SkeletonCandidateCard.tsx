import { memo } from 'react'

interface SkeletonCandidateCardProps {
  delay?: number
}

const SkeletonCandidateCard = memo(function SkeletonCandidateCard({ delay = 0 }: SkeletonCandidateCardProps) {
  return (
    <div 
      className="bg-white relative rounded border border-[#e6e6ea] p-6 animate-pulse"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col gap-6">
        {/* Header Section with Avatar */}
        <div className="flex gap-4 items-center">
          {/* Avatar Skeleton */}
          <div className="w-[85px] h-[85px] rounded-[68px] bg-gray-200 shrink-0" />
          
          {/* Content and Actions Container */}
          <div className="flex-1 flex gap-3 items-start">
            {/* Info Section */}
            <div className="flex-1 flex flex-col gap-2">
              {/* Title Row */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 flex-1">
                  <div className="w-6 h-6 bg-gray-200 rounded" />
                  <div className="h-6 bg-gray-200 rounded flex-1 max-w-[200px]" />
                </div>
                <div className="bg-gray-200 px-2 py-[2px] rounded-[20px] h-5 w-[120px]" />
              </div>
              
              {/* Role */}
              <div className="h-[21px] bg-gray-200 rounded w-[180px]" />
              
              {/* Location */}
              <div className="h-[21px] bg-gray-200 rounded w-[140px]" />
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="bg-gray-200 h-12 w-[174px] rounded" />
              <div className="w-12 h-12 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
        
        {/* Skills and Info Section */}
        <div className="flex flex-col gap-5">
          {/* Skills */}
          <div className="flex flex-wrap gap-3 items-center">
            <div className="h-7 w-16 bg-gray-200 rounded-[40px]" />
            <div className="h-7 w-20 bg-gray-200 rounded-[40px]" />
            <div className="h-7 w-14 bg-gray-200 rounded-[40px]" />
            <div className="h-7 w-18 bg-gray-200 rounded-[40px]" />
            <div className="h-7 w-12 bg-gray-200 rounded-[40px]" />
          </div>
          
          {/* Past Experiences */}
          <div className="border border-[#e6e6ea] rounded p-3">
            <div className="h-6 bg-gray-200 rounded w-[120px] mb-3" />
            <div className="flex flex-col gap-2">
              <div className="h-6 bg-gray-200 rounded w-full" />
              <div className="h-6 bg-gray-200 rounded w-[80%]" />
            </div>
          </div>
          
          {/* Education & Contact Grid */}
          <div className="flex gap-5">
            {/* Education */}
            <div className="flex-1 border border-[#e6e6ea] rounded p-3">
              <div className="h-6 bg-gray-200 rounded w-[80px] mb-3" />
              <div className="flex flex-col gap-2">
                <div className="h-6 bg-gray-200 rounded w-full" />
                <div className="h-6 bg-gray-200 rounded w-[70%]" />
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="flex-1 border border-[#e6e6ea] rounded p-3">
              <div className="flex items-center gap-1 mb-3">
                <div className="h-6 bg-gray-200 rounded w-[140px]" />
                <div className="w-4 h-4 bg-gray-200 rounded" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between">
                  <div className="h-6 bg-gray-200 rounded w-[40px]" />
                  <div className="h-6 bg-gray-200 rounded w-[120px]" />
                </div>
                <div className="flex items-start justify-between">
                  <div className="h-6 bg-gray-200 rounded w-[40px]" />
                  <div className="h-6 bg-gray-200 rounded w-[100px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export { SkeletonCandidateCard }