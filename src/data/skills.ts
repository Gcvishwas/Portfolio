export type Skill = {
  name: string;
  level: number;
  category: string;
  experience: "Beginner" | "Intermediate" | "Advanced";
};

export const skills: Skill[] = [
  // Frontend
  { name: "HTML/CSS", level: 90, category: "frontend", experience: "Intermediate" },
  { name: "Javascript", level: 80, category: "frontend", experience: "Intermediate" },
  { name: "React", level: 80, category: "frontend", experience: "Intermediate" },
  { name: "Typescript", level: 40, category: "frontend", experience: "Beginner" },
  { name: "Tailwind CSS", level: 80, category: "frontend", experience: "Intermediate" },

  // Backend
  { name: "Node.js", level: 70, category: "backend", experience: "Intermediate" },
  { name: "Express", level: 70, category: "backend", experience: "Intermediate" },
  { name: "SQL", level: 85, category: "backend", experience: "Intermediate" },
  { name: "NoSQL", level: 80, category: "backend", experience: "Intermediate" },

  // Tools
  { name: "Git/GitHub", level: 80, category: "tools", experience: "Intermediate" },
  { name: "Canva", level: 50, category: "tools", experience: "Intermediate" },
  { name: "VS Code", level: 90, category: "tools", experience: "Intermediate" },
];

export const categories = ["all", "frontend", "backend", "tools"] as const;
