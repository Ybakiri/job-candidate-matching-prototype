// Available avatar images - Modern circular avatar designs from Figma
export const avatars = [
  "/2f62fcccd9d3553669b041430837dfd0ca8dea76.svg", // Avatar 1 - Modern circular design
  "/6091e90be7200d27b4ff012dda1fd2fa54b10678.svg", // Avatar 2 - Modern circular design
  "/1b1f7c2820283e0237e9cc3de8472e3cae2737f2.svg", // Avatar 3 - Modern circular design
  "/a99fc72070be6b64761a31b0ab3b5173e37b7283.svg", // Avatar 4 - Modern circular design
  "/39d034a63b910cf01736adc47d2bdfdbea6ec547.svg", // Avatar 5 - Modern circular design
  "/866774f3a053e3ecded2a7149c1e61fbc768dd0e.svg", // Avatar 6 - Modern circular design
  "/114cf83b244dcd96763b689870c10b651da33de2.svg", // Avatar 7 - Modern circular design
]

// Get a consistent avatar for a candidate based on their ID
export function getAvatarForCandidate(candidateId: string): string {
  // Use a simple hash of the ID to get a consistent index
  const hash = candidateId.split('').reduce((acc, char) => {
    return acc + char.charCodeAt(0)
  }, 0)
  
  const index = hash % avatars.length
  return avatars[index]
}

// Get a random avatar (useful for testing)
export function getRandomAvatar(): string {
  const randomIndex = Math.floor(Math.random() * avatars.length)
  return avatars[randomIndex]
}

// Get all available avatars (useful for admin/preview purposes)
export function getAllAvatars(): string[] {
  return [...avatars]
}

// Get the total number of available avatars
export function getAvatarCount(): number {
  return avatars.length
}

// Add a new avatar to the collection (for dynamic avatar management)
export function addAvatar(avatarPath: string): void {
  if (!avatars.includes(avatarPath)) {
    avatars.push(avatarPath)
  }
}

// Remove an avatar from the collection
export function removeAvatar(avatarPath: string): boolean {
  const index = avatars.indexOf(avatarPath)
  if (index > -1) {
    avatars.splice(index, 1)
    return true
  }
  return false
}

// Check if a candidate should display the special icon next to their title
export function shouldShowTitleIcon(candidateId: string): boolean {
  return candidateId === 'candidate-1' || candidateId === 'candidate-2' || candidateId === 'candidate-3'
}

// Get the maximum number of skills to display for a candidate
export function getMaxSkillsForCandidate(candidateId: string): number {
  return shouldShowTitleIcon(candidateId) ? 7 : 4 // 3 more skills for top candidates
}

// Get skills to display for a candidate (matching skills only)
export function getSkillsToDisplay(candidate: { id: string; skills: { name: string; matches: boolean }[] }) {
  const matchingSkills = candidate.skills.filter(skill => skill.matches)
  const maxSkills = getMaxSkillsForCandidate(candidate.id)
  return matchingSkills.slice(0, maxSkills)
}

// Get count of remaining skills not displayed
export function getSkillsOverflowCount(candidate: { id: string; skills: { name: string; matches: boolean }[] }): number {
  const matchingSkills = candidate.skills.filter(skill => skill.matches)
  const maxSkills = getMaxSkillsForCandidate(candidate.id)
  const remaining = matchingSkills.length - maxSkills
  return remaining > 0 ? remaining : 0
}