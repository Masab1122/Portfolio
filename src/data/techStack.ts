import type { TechSkill  } from "../types";

export const techStack: TechSkill[] = [
  // Frontend
  { name: "HTML/CSS", category: "frontend", proficiency: 4, icon: "🌐" },
  { name: "JavaScript", category: "frontend", proficiency: 4, icon: "⚡" },
  { name: "React.js", category: "frontend", proficiency: 4, icon: "⚛️" },
  { name: "TypeScript", category: "frontend", proficiency: 3, icon: "🔷" },
  { name: "Tailwind CSS", category: "frontend", proficiency: 4, icon: "🎨" },
  { name: "Bootstrap", category: "frontend", proficiency: 3, icon: "🅱️" },
  { name: "Redux Toolkit", category: "frontend", proficiency: 3, icon: "🔄" },

  // Backend
  { name: "Node.js", category: "backend", proficiency: 3, icon: "💚" },
  { name: "Express.js", category: "backend", proficiency: 3, icon: "🚀" },

  // Database
  { name: "MongoDB", category: "database", proficiency: 3, icon: "🍃" },
];
