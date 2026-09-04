export interface Project {
  id: string;
  category: string;
  title: string;
  thumbnail: string;
  fallbackThumbnail?: string;
  description: string;
  technologies: string[];
  links: { label: string; url: string }[];
  screenshots: string[];
  fallbackScreenshots?: string[];
}

const githubProfile = "https://github.com/devraj-kumawt19";
const linkedInProfile = "https://www.linkedin.com/in/devraj-kumawat-302289271";

export const projectsData: Project[] = [
  {
    id: "1",
    category: "AI & Computer Vision",
    title: "Indian Railways AI Detection System",
    thumbnail: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900&auto=format&fit=crop",
    description: "An AI-powered Indian Railways platform for train and coach detection, real-time travel information, route insights, and dashboard-based monitoring for smarter rail navigation.",
    technologies: ["Python", "Streamlit", "YOLOv8", "OpenCV", "PyTorch", "Pandas", "REST APIs", "NetworkX", "MongoDB"],
    links: [
      { label: "GitHub", url: "https://github.com/devraj-kumawt19/indian-railways" },
      { label: "LinkedIn", url: linkedInProfile }
    ],
    screenshots: []
  },
  {
    id: "2",
    category: "AI SaaS Platform",
    title: "decidrai-platform",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900&auto=format&fit=crop",
    description: "An AI-powered SaaS platform focused on decision intelligence and discovery workflows, helping users turn data into actionable insights and smarter business decisions.",
    technologies: ["React", "TypeScript", "AI", "Web App", "Decision Intelligence", "Data Insights", "Node.js"],
    links: [
      { label: "GitHub", url: "https://github.com/devraj-kumawt19/decidrai-platform" },
      { label: "LinkedIn", url: linkedInProfile }
    ],
    screenshots: []
  },
  {
    id: "3",
    category: "Travel & Booking",
    title: "Airbin-Websit",
    thumbnail: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=900&auto=format&fit=crop",
    description: "A modern accommodation booking website designed for discovering, booking, and hosting unique stays with a smooth and user-friendly experience.",
    technologies: ["JavaScript", "React", "Frontend", "Booking UI", "Responsive Design", "Web App"],
    links: [
      { label: "GitHub", url: "https://github.com/devraj-kumawt19/Airbin-Websit" },
      { label: "LinkedIn", url: linkedInProfile }
    ],
    screenshots: []
  },
  {
    id: "4",
    category: "Education & Quiz",
    title: "QuizCred.com",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900&auto=format&fit=crop",
    description: "An interactive quiz platform that allows users to take assessments across multiple categories, view instant results, and improve their learning outcomes.",
    technologies: ["JavaScript", "Frontend", "Quiz Platform", "Responsive UI", "Web Development"],
    links: [
      { label: "GitHub", url: "https://github.com/devraj-kumawt19/QuizCred.com" },
      { label: "LinkedIn", url: linkedInProfile }
    ],
    screenshots: []
  },
  {
    id: "5",
    category: "Business Website",
    title: "Devraj-Enterprises",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop",
    description: "A company profile website built to present business information, services, and brand presence in a clean, professional digital format.",
    technologies: ["JavaScript", "Business Site", "UI Design", "Responsive Web", "Branding"],
    links: [
      { label: "GitHub", url: "https://github.com/devraj-kumawt19/Devraj-Enterprises" },
      { label: "LinkedIn", url: linkedInProfile }
    ],
    screenshots: []
  },
  {
    id: "6",
    category: "Business / Company Profile",
    title: "construction-company",
    thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop",
    description: "A construction company portfolio website designed to highlight services, project categories, and corporate information in a polished and professional way.",
    technologies: ["TypeScript", "UI/UX", "Business Portfolio", "Responsive Design", "Website"],
    links: [
      { label: "GitHub", url: "https://github.com/devraj-kumawt19/construction-company" },
      { label: "LinkedIn", url: linkedInProfile }
    ],
    screenshots: []
  }
];
