import { Candidate } from '../types'
import { cn } from '../utils/cn'
import { getAvatarForCandidate, shouldShowTitleIcon } from '../utils/avatars'
import { Tooltip } from './Tooltip'
import { Overlay } from './Overlay'
import { useTranslation } from '../context/LanguageContext'

// Import assets from Figma
const imgClose = "/905f6dd1f7b91e6eac955f99fd1061badc613fcc.svg"
const imgFrame = "/910f7884f4fab723e37f775736171da7073066ac.svg"
const imgSend = "/4e19cf6aa16043911214e92360f13f44c9d070ab.svg"
const imgCheck = "/fc6475ec9611c903859a42af3500f44e504bfa85.svg"
const imgCheckWhite = "/fc6475ec9611c903859a42af3500f44e504bfa85.svg"
const imgLock = "/de22ee37b8caa98879b6c8ffbe991a6374094f20.svg"
const imgUpgrade = "/8780281fbb5450db750ad6cac88e5f04b0deff5d.svg"
const imgInfo = "/5fa5d4de9a73bf8410be5e2a75547a2c33ae844e.svg"
const imgAdvantage = "/beb5b76b611c274fd6605ceae0a4fdd00d5c4395.svg"
const imgDisadvantage = "/2a373fec3ce03f489120c4c8eebc84b2ecd228fb.svg"

interface CandidateDrawerProps {
  candidate: Candidate
  isOpen: boolean
  onClose: () => void
  onInvite: () => void
}

export function CandidateDrawer({ candidate, isOpen, onClose, onInvite }: CandidateDrawerProps) {
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
  
  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <Overlay isOpen={isOpen} onClick={onClose} zIndex={40} />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full lg:w-3/5 bg-white shadow-xl z-50 overflow-hidden flex flex-col animate-slide-in">
        {/* Header */}
        <div className="bg-white flex items-center justify-between px-8 py-4 rounded-tl-lg rounded-tr-lg">
          <div className="flex-1" />
        </div>

        {/* Profile Header */}
        <div className="bg-white flex items-center px-6 pb-6">
          <div className="flex gap-4 items-center flex-1">
            {/* Avatar */}
            <div className="w-[85px] h-[85px] rounded-[68px] overflow-clip shrink-0">
              <img 
                alt="Candidate avatar" 
                className="w-full h-full object-cover" 
                src={getAvatarForCandidate(candidate.id)} 
              />
            </div>
            
            {/* Content */}
            <div className="flex gap-3 items-start flex-1">
              <div className="flex flex-col gap-2 flex-1">
                {/* Title Row */}
                <div className="flex gap-1 items-center">
                  <div className="flex gap-3 items-center">
                    {shouldShowTitleIcon(candidate.id) ? (
                      <Tooltip 
                        content={t('candidateDrawer.topCandidateTooltip')}
                        position="top"
                      >
                        <div className="flex gap-1 items-center cursor-help">
                          <div className="w-6 h-6 flex items-center justify-center">
                            <img alt="" className="block" src={imgFrame} />
                          </div>
                          <h2 className="text-base font-bold text-black leading-6">{getLocalizedTitle()}</h2>
                        </div>
                      </Tooltip>
                    ) : (
                      <div className="flex gap-1 items-center">
                        <h2 className="text-base font-bold text-black leading-6">{getLocalizedTitle()}</h2>
                      </div>
                    )}
                    <div className="bg-[#d9e2fc] px-2 py-[2px] rounded-[20px] h-5 flex items-center">
                      <span className="text-sm font-semibold text-[#0f204d] tracking-[-0.3px] leading-[21px]">
                        {t('candidates.yearsExperience', { years: candidate.yearsExperience })}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Role */}
                <p className="text-sm font-semibold text-[#585d72] tracking-[-0.3px] leading-[21px]">
                  {candidate.currentRoleTitle && candidate.currentRoleIndustry ? 
                    t('candidates.currentRoleFormat', { 
                      role: candidate.currentRoleTitle, 
                      industry: candidate.currentRoleIndustry 
                    }) : 
                    candidate.currentRole
                  }
                </p>
                
                {/* Location */}
                <p className="text-sm font-normal text-[#202333] leading-[21px]">
                  {candidate.region}
                </p>
              </div>
              
              {/* Invite Button */}
              <div className="flex items-center">
                {candidate.isInvited ? (
                  <button
                    disabled
                    className="bg-[#9ED7BE] text-white pl-5 pr-6 py-3 rounded flex items-center gap-2 cursor-not-allowed"
                  >
                    <div className="w-5 h-4">
                      <img alt="" className="block" src={imgCheckWhite} style={{filter: 'brightness(0) invert(1)'}} />
                    </div>
                    <span className="text-base font-bold leading-6">{t('buttons.invited')}</span>
                  </button>
                ) : (
                  <button
                    onClick={onInvite}
                    className="bg-[#0e0e14] text-white pl-5 pr-6 py-3 rounded flex items-center gap-2"
                  >
                    <div className="w-6 h-5 flex items-center justify-center">
                      <img alt="" className="block" src={imgSend} />
                    </div>
                    <span className="text-base font-bold leading-6">{t('buttons.inviteToUnlock')}</span>
                  </button>
                )}
                
                {/* Close Button */}
                <div className="flex items-center justify-center p-1 rounded shrink-0 size-[27px] ml-4">
                  <button
                    onClick={onClose}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <div className="w-5 h-5">
                      <img alt="" className="block" src={imgClose} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="bg-[#f9f9fa] px-6 py-8 flex flex-col gap-6">
            {/* Skills */}
            <div className="bg-white rounded p-4 flex flex-col gap-5">
              <h3 className="text-base font-bold text-[#202333] tracking-[-0.3px] leading-[21px]">{t('candidateDrawer.skills')}</h3>
              <div className="flex flex-wrap gap-3">
                {candidate.skills.sort((a, b) => (b.matches ? 1 : 0) - (a.matches ? 1 : 0)).map((skill, index) => (
                  <div
                    key={index}
                    className={cn(
                      "h-7 px-3 py-[5.5px] rounded-[40px] flex items-center gap-2",
                      skill.matches ? "bg-[#e6f5ee]" : "border border-[#e6e6ea]"
                    )}
                  >
                    {skill.matches && (
                      <div className="w-5 h-4 flex items-center justify-center">
                        <img alt="" className="block" src={imgCheck} />
                      </div>
                    )}
                    <span className="text-sm font-semibold text-[#202333] tracking-[-0.3px] leading-[21px]">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded p-4 flex flex-col gap-5">
              <div className="flex gap-1 items-center">
                <Tooltip 
                  content={t('privacy.contactTooltip')}
                  position="right"
                >
                  <h3 className="text-base font-bold text-[#202333] tracking-[-0.3px] leading-[21px]">{t('candidateDrawer.contactInfo')}</h3>
                </Tooltip>
                <div className="w-4 h-4 flex items-center justify-center">
                  <div className="w-4 h-4">
                    <img alt="" className="block" src={imgLock} />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-5">
                <div className="flex items-center">
                  <span className="text-base font-normal text-[#202333] leading-6 underline blur-sm">
                    hugo.muller08@gmx.ch
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-base font-normal text-[#202333] leading-6 underline">
                    +41
                  </span>
                  <span className="text-base font-normal text-[#202333] leading-6 underline blur-sm">
                    +41 76 123 45 67
                  </span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded p-4 flex flex-col gap-5">
              <h3 className="text-base font-bold text-[#202333] tracking-[-0.3px] leading-[21px]">{t('candidateDrawer.education')}</h3>
              <div className="flex flex-col gap-0">
                {candidate.education.map((edu, index) => (
                  <p key={index} className="text-base font-normal text-[#202333] leading-6">
                    {t(`education.degrees.${edu.degree}`)}
                  </p>
                ))}
              </div>
            </div>

            {/* Past Experiences */}
            <div className="bg-white rounded p-4 flex flex-col gap-5">
              <h3 className="text-base font-bold text-[#202333] tracking-[-0.3px] leading-[21px]">{t('candidateDrawer.pastExperiences')}</h3>
              <div className="flex flex-col gap-0">
                {candidate.experiences.map((exp, index) => (
                  <p key={index} className="text-base font-normal text-[#202333] leading-6">
                    {t('candidates.experienceFormat', { role: exp.role, industry: exp.industry })}
                  </p>
                ))}
              </div>
            </div>

            {/* Insights */}
            <div className="bg-white rounded p-4 flex flex-col gap-6">
              <h3 className="text-base font-bold text-[#202333] tracking-[-0.3px] leading-[21px]">{t('candidateDrawer.insights')}</h3>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <img alt="" className="block" src={imgUpgrade} />
                    </div>
                    <span className="text-sm font-normal text-[#2141a1] leading-4">
                      {t('candidateDrawer.aiGenerated')}
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <span className="text-sm font-semibold text-[#585d72] underline">
                      {t('candidateDrawer.moreInfo')}
                    </span>
                    <div className="w-4 h-4 flex items-center justify-center">
                      <div className="w-4 h-4">
                        <img alt="" className="block" src={imgInfo} />
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-base font-normal text-[#202333] leading-normal">
                  {candidate.insights.summaryIndex !== undefined ? 
                    t(`insights.summaries[${candidate.insights.summaryIndex}]`, { years: candidate.insights.summaryYears || 5 }) :
                    candidate.insights.summary
                  }
                </p>
              </div>

              <div className="flex flex-col gap-6">
                {/* Advantages */}
                <div className="flex flex-col gap-4">
                  <h4 className="text-sm font-semibold text-[#585d72]">{t('candidateDrawer.advantages')}</h4>
                  <div className="flex flex-col gap-3">
                    {(candidate.insights.advantageIndices || []).map((advantageIndex, index) => (
                      <div key={index} className="flex gap-2 items-start">
                        <div className="w-6 h-6 shrink-0 flex items-center justify-center">
                          <img alt="" className="block" src={imgAdvantage} />
                        </div>
                        <span className="text-base font-normal text-[#202333] leading-6">
                          {t(`insights.advantages[${advantageIndex}]`)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Disadvantages */}
                <div className="flex flex-col gap-4">
                  <h4 className="text-sm font-semibold text-[#585d72]">{t('candidateDrawer.disadvantages')}</h4>
                  <div className="flex flex-col gap-3">
                    {(candidate.insights.disadvantageIndices || []).map((disadvantageIndex, index) => (
                      <div key={index} className="flex gap-2 items-start">
                        <div className="w-6 h-6 shrink-0 flex items-center justify-center">
                          <img alt="" className="block" src={imgDisadvantage} />
                        </div>
                        <span className="text-base font-normal text-[#202333] leading-6">
                          {t(`insights.disadvantages[${disadvantageIndex}]`)}
                        </span>
                      </div>
                    ))}
                    {/* Fallback for old format */}
                    {!candidate.insights.disadvantageIndices && candidate.insights.disadvantages && (
                      <div className="flex gap-2 items-start">
                        <div className="w-6 h-6 shrink-0 flex items-center justify-center">
                          <img alt="" className="block" src={imgDisadvantage} />
                        </div>
                        <span className="text-base font-normal text-[#202333] leading-6">
                          {candidate.insights.disadvantages[0]}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}