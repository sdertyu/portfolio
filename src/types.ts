// types/index.ts
export interface NavItem {
  href: string
  label: string
}

export interface Stat {
  number: string
  label: string
}

export interface Experience {
  period: string
  title: string
  company: string
  description: string
  skills: string[]
}

export interface Skill {
  icon: string
  title: string
  description: string
}

export interface Project {
  icon: string
  title: string
  description: string
  technologies: string[]
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface SocialLink {
  href: string
  title: string
  icon: string
}
