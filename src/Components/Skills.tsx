import { useState } from "react";
import { cn } from "../lib/utils";

type Skill = {
  name: string;
  level: number;
  category: string;
  experience: "Beginner" | "Intermediate" | "Advanced";
};
const skills: Skill[] = [
  // Frontend
  {
    name: "HTML/CSS",
    level: 90,
    category: "frontend",
    experience: "Intermediate",
  },
  {
    name: "Javascript",
    level: 80,
    category: "frontend",
    experience: "Intermediate",
  },
  {
    name: "React",
    level: 80,
    category: "frontend",
    experience: "Intermediate",
  },
  {
    name: "Typescript",
    level: 40,
    category: "frontend",
    experience: "Beginner",
  },
  {
    name: "Tailwind CSS",
    level: 80,
    category: "frontend",
    experience: "Intermediate",
  },

  // Backend
  {
    name: "Node.js",
    level: 70,
    category: "backend",
    experience: "Intermediate",
  },
  {
    name: "Express",
    level: 70,
    category: "backend",
    experience: "Intermediate",
  },
  { name: "SQL", level: 85, category: "backend", experience: "Intermediate" },
  { name: "NoSQL", level: 80, category: "backend", experience: "Intermediate" },

  // Tools
  {
    name: "Git/GitHub",
    level: 80,
    category: "tools",
    experience: "Intermediate",
  },
  { name: "Canva", level: 50, category: "tools", experience: "Intermediate" },
  { name: "VS Code", level: 90, category: "tools", experience: "Intermediate" },
];
const categories = ["all", "frontend", "backend", "tools"];
const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My<span className="text-primary"> Skills</span>
        </h2>
        <div className="flex flex-wrap  justify-center gap-4 text-center">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize ",
                activeCategory === category
                  ? "bg-primary text-primary-foreground mb-4"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-lg shadow-xs card-hover "
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2  overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]
"
                  style={{
                    width: skill.level + "%",
                  }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted- foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
