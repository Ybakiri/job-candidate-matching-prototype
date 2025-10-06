import { memo } from 'react'
import { Candidate } from '../types'
import { getAvatarForCandidate, shouldShowTitleIcon, getSkillsToDisplay, getSkillsOverflowCount } from '../utils/avatars'
import { Tooltip } from './Tooltip'
import { useTranslation } from '../context/LanguageContext'

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
  const { t } = useTranslation()
  
  // Get localized title
  const getLocalizedTitle = () => {
    if (candidate.titleIndex !== undefined) {
      const titles = t('candidateTitles.titles')
      if (Array.isArray(titles) && titles[candidate.titleIndex]) {
        return titles[candidate.titleIndex]
      }
    }
    // Fallback to original title
    return candidate.title
  }
  
  return (
    <div className="bg-white relative rounded border border-[#e6e6ea] transition-all duration-200 hover:shadow-card hover:border-[#d1d5db] flex flex-col h-full">
      {/* Card Content - Clickable Area */}
      <div 
        onClick={onViewDetails}
        className="flex-1 p-6 cursor-pointer"
      >
        {/* Header Section with Avatar */}
        <div className="flex gap-4 items-center mb-4">
          {/* Avatar */}
          <div className="w-[85px] h-[85px] rounded-[68px] overflow-clip shrink-0">
            <img 
              alt="Candidate avatar" 
              className="w-full h-full object-cover" 
              src={getAvatarForCandidate(candidate.id)} 
            />
          </div>
          
          {/* Info Section */}
          <div className="flex-1 flex flex-col gap-2">
            {/* Title Row */}
            <div className="flex items-center gap-2 flex-wrap">
              {shouldShowTitleIcon(candidate.id) ? (
                <Tooltip 
                  content="This candidate is a top applicant for your position"
                  position="top"
                >
                  <div className="flex items-center gap-1 cursor-help">
                    <div className="w-6 h-6">
                      <img alt="" className="block" src={imgFrame} />
                    </div>
                    <h3 className="text-base font-semibold text-black leading-6">{getLocalizedTitle()}</h3>
                  </div>
                </Tooltip>
              ) : (
                <h3 className="text-base font-semibold text-black leading-6">{getLocalizedTitle()}</h3>
              )}
              <span className="bg-[#d9e2fc] px-2 py-[2px] rounded-[20px] text-sm font-semibold text-[#0f204d] tracking-[-0.3px] leading-[21px] h-5 flex items-center">
                {t('candidates.yearsExperience', { years: candidate.yearsExperience })}
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
        </div>
        
        {/* Skills */}
        <div className="flex flex-wrap gap-2 items-center mb-4">
          {getSkillsToDisplay(candidate).map((skill, index) => (
            <div
              key={index}
              className="h-7 px-3 py-[5.5px] rounded-[40px] flex items-center gap-2 bg-[#e6f5ee]"
            >
              <div className="w-4 h-3">
                <img alt="" className="block" src={imgCheck} />
              </div>
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
        
        {/* Past Experiences - Condensed */}
        <div className="border border-[#e6e6ea] rounded p-3 mb-3">
          <h4 className="text-sm font-bold text-[#202333] leading-5 mb-2">{t('candidates.pastExperiences')}</h4>
          <div className="flex flex-col gap-1">
            {candidate.experiences.slice(0, 2).map((exp, index) => (
              <p key={index} className="text-sm font-normal text-[#202333] leading-5">
                {exp.role} in a {exp.industry} company
              </p>
            ))}
            {candidate.experiences.length > 2 && (
              <span className="text-sm font-semibold text-[#585d72]">
                +{candidate.experiences.length - 2} more
              </span>
            )}
          </div>
        </div>
        
        {/* Education & Contact Grid - 2 Columns */}
        <div className="flex gap-3">
          {/* Education - Left Column */}
          <div className="flex-1 border border-[#e6e6ea] rounded p-3">
            <h4 className="text-sm font-bold text-[#202333] leading-5 mb-2">{t('candidates.education')}</h4>
            <div className="flex flex-col gap-1">
              {candidate.education.slice(0, 1).map((edu, index) => (
                <p key={index} className="text-sm font-normal text-[#202333] leading-5">
                  {edu.degree}
                </p>
              ))}
              {candidate.education.length > 1 && (
                <span className="text-sm font-semibold text-[#585d72]">
                  +{candidate.education.length - 1} more
                </span>
              )}
            </div>
          </div>
          
          {/* Contact Information - Right Column */}
          <div className="flex-1 border border-[#e6e6ea] rounded p-3">
            <div className="flex items-center gap-1 mb-2">
              <Tooltip 
                content={t('privacy.contactTooltip')}
                position="top"
              >
                <h4 className="text-sm font-bold text-[#202333] leading-5">{t('candidates.contactInfo')}</h4>
              </Tooltip>
              <div className="w-3 h-3">
                <img alt="" className="block" src={imgLock} />
              </div>
            </div>
            
            <div className="flex flex-col gap-1">
              <div className="flex items-start justify-between">
                <span className="text-sm font-normal text-[#202333] leading-5">Email</span>
                <span className="text-sm font-normal text-[#202333] leading-5 blur-sm text-right">john.smithi9@outok.com</span>
              </div>
              <div className="flex items-start justify-between">
                <span className="text-sm font-normal text-[#202333] leading-5">Phone</span>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-normal text-[#202333] leading-5">+41</span>
                  <span className="text-sm font-normal text-[#202333] leading-5 blur-sm">78 783 87 87</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer with Action Buttons */}
      <div className="border-t border-[#e6e6ea] p-4 flex gap-3">
        {candidate.isInvited ? (
          <button
            disabled
            className="flex-1 bg-[#9ED7BE] text-white py-3 px-4 rounded flex items-center justify-center gap-2 cursor-not-allowed"
          >
            <div className="w-5 h-4">
              <img alt="" className="block" src={imgCheckWhite} style={{filter: 'brightness(0) invert(1)'}} />
            </div>
            <span className="text-base font-bold leading-6">{t('buttons.invited')}</span>
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.stopPropagation()
              onInvite()
            }}
            className="flex-1 border border-[#989ba8] text-[#202333] py-3 px-4 rounded flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="w-5 h-4">
              <img alt="" className="block" src={imgSend} style={{filter: 'brightness(0) saturate(100%) invert(12%) sepia(8%) saturate(1158%) hue-rotate(185deg) brightness(97%) contrast(93%)'}} />
            </div>
            <span className="text-base font-bold leading-6">{t('buttons.inviteToUnlock')}</span>
          </button>
        )}
        
        <button
          onClick={(e) => {
            e.stopPropagation()
            onViewDetails()
          }}
          className="w-12 h-12 border border-[#989ba8] rounded flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
        >
          <div className="w-6 h-5">
            <img alt="View details" className="block" src={imgEye} />
          </div>
        </button>
      </div>
    </div>
  )
})

export { CandidateCard }