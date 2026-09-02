export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: string[];
  color: string;
}

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Building efficient solutions with core programming languages and strong problem-solving fundamentals.",
    icon: "Code",
    skills: ["C++", "Python", "Java", "JavaScript", "TypeScript", "SQL"],
    color: "bg-indigo-50 border-indigo-100 text-indigo-700"
  },
  {
    title: "Frontend & Web",
    description: "Creating engaging user interfaces and responsive, modern web experiences.",
    icon: "Browser",
    skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap"],
    color: "bg-violet-50 border-violet-100 text-violet-700"
  },
  {
    title: "Backend",
    description: "Designing APIs and backend services for scalable full-stack products.",
    icon: "Server",
    skills: ["Node.js", "REST APIs", "Microservices"],
    color: "bg-emerald-50 border-emerald-100 text-emerald-700"
  },
  {
    title: "Databases",
    description: "Managing data models, storage, and scalable application data flows.",
    icon: "Database",
    skills: ["MongoDB", "Redis"],
    color: "bg-sky-50 border-sky-100 text-sky-700"
  },
  {
    title: "AI / ML / Data",
    description: "Working with intelligent systems, data analysis, and machine learning workflows.",
    icon: "Brain",
    skills: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch", "Seaborn", "OpenCV"],
    color: "bg-amber-50 border-amber-100 text-amber-700"
  },
  {
    title: "Artificial Intelligence",
    description: "Exploring language, learning, and intelligent model-driven application design.",
    icon: "Sparkles",
    skills: ["NLP", "LLM", "LSTM"],
    color: "bg-rose-50 border-rose-100 text-rose-700"
  },
  {
    title: "Core Computer Science",
    description: "Applying strong theoretical foundations to real-world technical challenges.",
    icon: "BookOpen",
    skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "Theory of Automata", "System Design"],
    color: "bg-cyan-50 border-cyan-100 text-cyan-700"
  },
  {
    title: "Soft Skills",
    description: "Working effectively in teams and driving problem-solving with ownership and focus.",
    icon: "Users",
    skills: ["Algorithmic Reasoning", "Collaboration", "Leadership", "Ownership", "Prioritization"],
    color: "bg-fuchsia-50 border-fuchsia-100 text-fuchsia-700"
  }
];
