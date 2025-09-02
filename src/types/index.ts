export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: "fullstack" | "frontend" | "design";
}

export interface TechSkill {
  name: string;
  category: "frontend" | "backend" | "database" | "tools";
  proficiency: number; // 1-5 scale
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  linkedin?: string;
  github?: string;
}
