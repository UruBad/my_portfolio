export interface LocalizedText {
  ru: string;
  en: string;
}

export interface PersonProfile {
  fullName: LocalizedText;
  role: LocalizedText;
  location: LocalizedText;
  summary: LocalizedText;
}

export interface ContactInfo {
  phone: string;
  email: string;
  githubUrl: string;
  location: LocalizedText;
}

export interface ExperienceProject {
  name: LocalizedText;
  description: LocalizedText;
  techStack: string[];
}

export interface ExperienceItem {
  company: string;
  location?: string;
  position: string;
  start: string;
  end?: string;
  description: LocalizedText;
  projects?: ExperienceProject[];
}

export interface Skill {
  name: string;
  level?: 'core' | 'confident' | 'familiar';
}

export interface SkillCategory {
  id: string;
  title: LocalizedText;
  skills: Skill[];
}

export interface EducationItem {
  institution: string;
  degree: LocalizedText;
  faculty: LocalizedText;
  year: number;
}

export interface CourseItem {
  title: LocalizedText;
  provider: string;
  year: number;
  certificateUrl?: string;
}

export interface ServiceItem {
  title: LocalizedText;
  description: LocalizedText;
}

export interface ProjectItem {
  title: LocalizedText;
  shortDescription: LocalizedText;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  details?: LocalizedText;
   imageUrl?: string;
}

