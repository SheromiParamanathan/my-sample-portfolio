export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  featured: boolean;
  overview: string;
  features: string[];
  engineeringDecisions: string[];
  challenges: ChallengeItem[];
  status: "production" | "in-progress" | "archived";
}

export interface ChallengeItem {
  challenge: string;
  solution: string;
}

export interface Skill {
  category: string;
  icon: string;
  items: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
