export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'mail' | 'cv' | 'custom';
}

export interface PersonalInfo {
  name: string;
  title: string;
  roleDescription: string;
  location: string;
  avatarUrl: string;
  availableForWork: boolean;
  resumeUrl: string;
  bio: string[];
  socials: {
    github?: string;
    linkedin?: string;
    email: string;
    twitter?: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  current: boolean;
  description: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image?: string; // Opcional
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  category: 'Lenguajes' | 'Frontend' | 'Backend' | 'Bases de Datos' | 'DevOps & Herramientas';
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
}
