/**
 * Shapes for every JSON file under src/data.
 *
 * Keep these in sync with the JSON: the build runs `tsc`, so a JSON file that
 * is missing a required field (or has the wrong type) fails the build with a
 * clear error instead of rendering a broken page.
 *
 * `icon` fields are free-form strings resolved by src/lib/icons.tsx — see the
 * `icons` map there for the full list of supported names.
 */

/* ---------------------------------- site.json ---------------------------------- */

export interface SectionConfig {
  /** Unique id — also used as the URL hash (#experience) and as the key into the section registry in App.tsx. */
  id: string
  /** Text shown in the navigation bar and as the section title. */
  label: string
  /** Small accent label rendered above the section title. */
  eyebrow?: string
  /** Optional one-line description rendered under the section title. */
  description?: string
  /** Set to false to hide a section (and its nav link) without deleting its data. */
  enabled: boolean
}

export interface SiteConfig {
  /** Browser tab title. */
  title: string
  /** <meta name="description"> content. */
  description: string
  theme: {
    /** Any valid CSS colour. Drives buttons, links, highlights and the timeline. */
    accent: string
    /** "system" | "light" | "dark" — used only when the visitor has no saved preference. */
    defaultMode: string
  }
  /** Sections render in this order. */
  sections: SectionConfig[]
  footer: {
    text: string
  }
}

/* -------------------------------- profile.json --------------------------------- */

export interface SocialLink {
  label: string
  icon: string
  url: string
}

export interface Highlight {
  value: string
  label: string
}

export interface Profile {
  name: string
  firstName: string
  lastName: string
  title: string
  company?: string
  companyUrl?: string
  tagline: string
  location: string
  email: string
  /** Rendered in the Contact section only when non-empty. Leave "" to keep it off the public site. */
  phone?: string
  /** Path under /public, e.g. "/Rahul_Singla_Resume.pdf". Omit to hide the resume button. */
  resumeUrl?: string
  status?: {
    text: string
    show: boolean
  }
  social: SocialLink[]
  /** Big-number stat cards shown in the hero. */
  highlights: Highlight[]
  contact: {
    heading: string
    text: string
  }
}

/* -------------------------------- summary.json --------------------------------- */

export interface Summary {
  paragraphs: string[]
  /** Short list of focus areas rendered as chips next to the summary. */
  focus?: string[]
}

/* ------------------------------- experience.json ------------------------------- */

export interface Bullet {
  /** Optional bold lead-in, e.g. "Offer Ranking Plugin". */
  title?: string
  text: string
}

export interface Role {
  title: string
  /** e.g. "Full-time", "Internship" */
  type?: string
  start: string
  end: string
  bullets: Array<string | Bullet>
  tech?: string[]
}

export interface Company {
  company: string
  companyUrl?: string
  location: string
  /** Most recent role first. A company with several roles renders them under one heading. */
  roles: Role[]
}

/* -------------------------------- education.json ------------------------------- */

export interface Education {
  institution: string
  institutionUrl?: string
  degree: string
  field: string
  location: string
  start: string
  end: string
  grade?: string
  highlights?: string[]
}

/* --------------------------------- skills.json --------------------------------- */

export interface SkillCategory {
  name: string
  icon?: string
  skills: string[]
}

/* -------------------------------- projects.json -------------------------------- */

export interface ProjectLink {
  label: string
  url: string
  icon?: string
}

export interface Project {
  name: string
  organization?: string
  period?: string
  /** The situation / problem. */
  context: string
  /** What you personally did. */
  contribution: string
  /** The measurable outcome. */
  impact: string
  tech: string[]
  links?: ProjectLink[]
}

/* ----------------------------- codingProfiles.json ----------------------------- */

export interface ProfileStat {
  label: string
  value: string
}

export interface CodingProfile {
  platform: string
  icon: string
  /** Username on the platform. Optional. */
  handle?: string
  /** Full profile URL. Leave "" to render the card without a link. */
  url?: string
  stats: ProfileStat[]
  note?: string
}

/* ------------------------------ achievements.json ------------------------------ */

export interface Achievement {
  title: string
  description?: string
  year?: string
  icon?: string
}

/* ------------------------------ shared component props ------------------------- */

export interface SectionProps {
  id: string
  label: string
  eyebrow?: string
  description?: string
}
