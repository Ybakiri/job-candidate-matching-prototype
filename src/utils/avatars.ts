// Available avatar images - Modern circular avatar designs from Figma
export const avatars = [
  "/e6c0950837c29641f74f48d474bf6838ac8a1e7b.svg", // Avatar 1 - New design from Figma
  "/54f8c483f6a68c4caf32deeadcb67371931fbd6b.svg", // Avatar 2 - New design from Figma
  "/0e2920525d754f3b12660b08265ba1eb4d1b556c.svg", // Avatar 3 - New design from Figma
  "/1adc7c20b4fee7c9c2da89cdb8b3cc3cb0e8cda7.svg", // Avatar 4 - New design from Figma
  "/f697ac88047ec076283abc2312c96440d3159e2b.svg", // Avatar 5 - New design from Figma
  "/91a7a8969d94033f17ba5fb551700faae3f75d3a.svg", // Avatar 6 - New design from Figma
  "/d1c93621efa238878c750cab77cb2ac32de471a9.svg", // Avatar 7 - New design from Figma
  "/0f76fa0188451e247953aa07c2df12978481c908.svg", // Avatar 8 - New design from Figma
  "/73bc2cd7e9c11e8506ca369d03505cf87ce2e26a.svg", // Avatar 9 - New design from Figma
  "/dc38f20f408f56c71207e0309dba265eb685c91c.svg", // Avatar 10 - New design from Figma
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
export function getMaxSkillsForCandidate(_candidateId: string): number {
  return 4 // Show maximum 4 skills for all candidates
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
  const nonMatchingSkills = candidate.skills.filter(skill => !skill.matches)
  const maxSkills = getMaxSkillsForCandidate(candidate.id)
  const remainingMatchingSkills = matchingSkills.length - maxSkills
  const totalRemainingSkills = (remainingMatchingSkills > 0 ? remainingMatchingSkills : 0) + nonMatchingSkills.length
  return totalRemainingSkills
}