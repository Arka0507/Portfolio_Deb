export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  status: "COMPLETED" | "CURRENTLY BUILDING" | "RESEARCH PROTOTYPE";
  technologies: string[];
  keyDetails: string[];
  architecture: {
    overview: string;
    components: { name: string; role: string }[];
  };
  metrics?: { label: string; value: string }[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  id: string;
  number: string;
  category: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    proficiency: "Project Experience" | "Working Knowledge" | "Familiar";
    highlight?: boolean;
  }[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  type: "Research Internship" | "Academic Exposure" | "Academic Volunteering";
  summary: string;
  highlights: string[];
  technologies: string[];
  badge: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  details: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  status: "Verified" | "Completed";
}

