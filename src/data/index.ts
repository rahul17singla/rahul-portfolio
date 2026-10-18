/**
 * Single import point for all site content.
 *
 * Each JSON file is assigned to its TypeScript type here, so `npm run build`
 * (which runs `tsc`) catches a malformed JSON file before it reaches the browser.
 */
import type {
  Achievement,
  CodingProfile,
  Company,
  Education,
  Profile,
  Project,
  SiteConfig,
  SkillCategory,
  Summary,
} from '../types'

import siteJson from './site.json'
import profileJson from './profile.json'
import summaryJson from './summary.json'
import experienceJson from './experience.json'
import educationJson from './education.json'
import skillsJson from './skills.json'
import projectsJson from './projects.json'
import codingProfilesJson from './codingProfiles.json'
import achievementsJson from './achievements.json'

export const site: SiteConfig = siteJson
export const profile: Profile = profileJson
export const summary: Summary = summaryJson
export const experience: Company[] = experienceJson
export const education: Education[] = educationJson
export const skills: SkillCategory[] = skillsJson
export const projects: Project[] = projectsJson
export const codingProfiles: CodingProfile[] = codingProfilesJson
export const achievements: Achievement[] = achievementsJson
