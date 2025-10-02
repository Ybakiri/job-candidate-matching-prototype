import { memo } from 'react'
import { Candidate } from '../types'
import { getAvatarForCandidate, shouldShowTitleIcon, getSkillsToDisplay, getSkillsOverflowCount } from '../utils/avatars'
import { Tooltip } from './Tooltip'

// Import all assets
const imgFrame = "/c32f60efbf2f8f5060f19564829272adef72cc01.svg"
const imgSend = "/4e19cf6aa16043911214e92360f13f44c9d070ab.svg"
const imgEye = "/f1f1b208e792733b70c0e76468eea9fc65897414.svg"
const imgCheck = "/fc6475ec9611c903859a42af3500f44e504bfa85.svg"
const imgCheckWhite = "/fc6475ec9611c903859a42af3500f44e504bfa85.svg"
const imgLock = "/de22ee37b8caa98879b6c8ffbe991a6374094f20.svg"

interface CandidateCardProps {
  candidate: Candidate
  onViewDetails: () => void
  onInvite: () => void
}

const CandidateCard = memo(function CandidateCard({ candidate, onViewDetails, onInvite }: CandidateCardProps) {
  return (
    <div 
      onClick={onViewDetails}
      className="bg-white relative rounded border border-[#e6e6ea] p-6 cursor-pointer transition-all duration-200 hover:shadow-card hover:border-[#d1d5db]"
    >
      <div className="flex flex-col gap-6">
        {/* Header Section with Avatar */}
        <div className="flex gap-4 items-center">
          {/* Avatar */}
          <div className="w-[85px] h-[85px] rounded-[68px] overflow-clip shrink-0">
            <img 
              alt="Candidate avatar" 
              className="w-full h-full object-cover" 
              src={getAvatarForCandidate(candidate.id)} 
            />
          </div>
          
          {/* Content and Actions Container */}
          <div className="flex-1 flex gap-3 items-start">
            {/* Info Section */}
            <div className="flex-1 flex flex-col gap-2">
              {/* Title Row */}
              <div className="flex items-center gap-3">
                {shouldShowTitleIcon(candidate.id) ? (
                  <Tooltip 
                    content="This candidate is a top applicant for your position"
                    position="top"
                  >
                    <div className="flex items-center gap-1 cursor-help">
                      <img alt="" className="w-6 h-auto" src={imgFrame} />
                      <h3 className="text-base font-semibold text-black leading-6">{candidate.title}</h3>
                    </div>
                  </Tooltip>
                ) : (
                  <div className="flex items-center gap-1">
                    <h3 className="text-base font-semibold text-black leading-6">{candidate.title}</h3>
                  </div>
                )}
                <span className="bg-[#d9e2fc] px-2 py-[2px] rounded-[20px] text-sm font-semibold text-[#0f204d] tracking-[-0.3px] leading-[21px] h-5 flex items-center">
                  {candidate.yearsExperience} years of experience
                </span>
              </div>
              
              {/* Role */}
              <p className="text-sm font-medium text-[#585d72] tracking-[-0.3px] leading-[21px]">
                {candidate.currentRole}
              </p>
              
              {/* Location */}
              <p className="text-sm font-normal text-[#202333] leading-[21px]">
                {candidate.region}
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-3 shrink-0">
              {candidate.isInvited ? (
                <button
                  disabled
                  className="bg-[#9ED7BE] text-white pl-5 pr-6 py-3 rounded flex items-center gap-2 cursor-not-allowed"
                >
                  <img alt="" className="w-6 h-auto" src={imgCheckWhite} style={{filter: 'brightness(0) invert(1)'}} />
                  <span className="text-base font-bold leading-6">Invited to unlock</span>
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onInvite()
                  }}
                  className="bg-[#0e0e14] text-white pl-5 pr-6 py-3 rounded flex items-center gap-2 hover:bg-[#1a1a1a] transition-colors duration-200"
                >
                  <img alt="" className="w-6 h-auto" src={imgSend} />
                  <span className="text-base font-bold leading-6">Invite to unlock</span>
                </button>
              )}
              
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onViewDetails()
                }}
                className="w-12 h-12 p-3 border border-[#989ba8] rounded flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
              >
                <img alt="View details" className="w-6 h-auto" src={imgEye} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Skills and Info Section */}
        <div className="flex flex-col gap-5">
          {/* Skills */}
          <div className="flex flex-wrap gap-3 items-center">
            {getSkillsToDisplay(candidate).map((skill, index) => (
              <div
                key={index}
                className="h-7 px-3 py-[5.5px] rounded-[40px] flex items-center gap-2 bg-[#e6f5ee]"
              >
                <img alt="" className="w-6 h-auto" src={imgCheck} />
                <span className="text-sm font-semibold text-[#202333] tracking-[-0.3px] leading-[21px]">
                  {skill.name}
                </span>
              </div>
            ))}
            {getSkillsOverflowCount(candidate) > 0 && (
              <span className="text-sm font-semibold text-[#202333] tracking-[-0.3px] leading-[21px]">
                +{getSkillsOverflowCount(candidate)}
              </span>
            )}
          </div>
          
          {/* Past Experiences - Full Width */}
          <div className="border border-[#e6e6ea] rounded p-3">
            <h4 className="text-base font-bold text-[#202333] leading-6 mb-3">Past experiences</h4>
            <div className="flex flex-col gap-2">
              {candidate.experiences.map((exp, index) => (
                <p key={index} className="text-base font-normal text-[#202333] leading-6">
                  {exp.role} in a {exp.industry} company
                </p>
              ))}
            </div>
          </div>
          
          {/* Education & Contact Grid - 2 Columns */}
          <div className="flex gap-5">
            {/* Education - Left Column */}
            <div className="flex-1 border border-[#e6e6ea] rounded p-3">
              <h4 className="text-base font-bold text-[#202333] leading-6 mb-3">Education</h4>
              <div className="flex flex-col gap-2">
                {candidate.education.map((edu, index) => (
                  <p key={index} className="text-base font-normal text-[#202333] leading-6">
                    {edu.degree}
                  </p>
                ))}
              </div>
            </div>
            
            {/* Contact Information - Right Column */}
            <div className="flex-1 border border-[#e6e6ea] rounded p-3">
              <div className="flex items-center gap-1 mb-3">
                <Tooltip 
                  content="This information is private until the candidate accepts your invitation"
                  position="top"
                >
                  <h4 className="text-base font-bold text-[#202333] leading-6">Contact information</h4>
                </Tooltip>
                <img alt="" className="w-4 h-auto" src={imgLock} />
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between">
                  <span className="text-base font-normal text-[#202333] leading-6">Email</span>
                  <span className="text-base font-normal text-[#202333] leading-6 blur-sm text-right">john.smithi9@outok.com</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-base font-normal text-[#202333] leading-6">Phone</span>
                  <div className="flex items-center gap-1">
                    <span className="text-base font-normal text-[#202333] leading-6">+41</span>
                    <span className="text-base font-normal text-[#202333] leading-6 blur-sm">78 783 87 87</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export { CandidateCard }