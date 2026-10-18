import type { ComponentType } from 'react'
import {
  Award,
  BookOpen,
  Briefcase,
  Cloud,
  Code2,
  Cpu,
  Database,
  Download,
  ExternalLink,
  FileText,
  Globe,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Medal,
  Phone,
  Sparkles,
  Star,
  Terminal,
  Trophy,
  Wrench,
} from 'lucide-react'
// lucide-react no longer ships brand icons, so social/platform logos come from react-icons.
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import {
  SiCodechef,
  SiCodeforces,
  SiGeeksforgeeks,
  SiGithub,
  SiHackerrank,
  SiLeetcode,
} from 'react-icons/si'

type IconComponent = ComponentType<{
  className?: string
  size?: number | string
  'aria-hidden'?: boolean | 'true' | 'false'
}>

/**
 * Icon names that JSON files may reference in `icon` fields.
 * Add a new entry here to make a new icon available to the data.
 */
const icons: Record<string, IconComponent> = {
  // Contact / social
  mail: Mail,
  email: Mail,
  linkedin: FaLinkedinIn,
  github: FaGithub,
  globe: Globe,
  website: Globe,
  phone: Phone,
  resume: FileText,
  file: FileText,
  download: Download,
  external: ExternalLink,
  pin: MapPin,

  // Categories / decoration
  code: Code2,
  terminal: Terminal,
  database: Database,
  cloud: Cloud,
  layers: Layers,
  wrench: Wrench,
  book: BookOpen,
  cpu: Cpu,
  graduation: GraduationCap,
  briefcase: Briefcase,
  sparkles: Sparkles,
  star: Star,

  // Achievements
  trophy: Trophy,
  award: Award,
  medal: Medal,

  // Coding platforms (brand icons)
  leetcode: SiLeetcode,
  codeforces: SiCodeforces,
  codechef: SiCodechef,
  hackerrank: SiHackerrank,
  geeksforgeeks: SiGeeksforgeeks,
  'github-brand': SiGithub,
}

interface IconProps {
  name?: string
  className?: string
  size?: number
}

/** Renders the icon registered under `name`, falling back to a generic link icon. Decorative by default. */
export function Icon({ name, className, size = 20 }: IconProps) {
  const Component = (name && icons[name]) || ExternalLink
  return <Component className={className} size={size} aria-hidden="true" />
}
