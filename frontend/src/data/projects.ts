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

const githubProfile = "https://github.com/";
const linkedInProfile = "https://www.linkedin.com/";

export const projectsData: Project[] = [
  {
    id: "1",
    category: "AI & Computer Vision",
    title: "Indian Railways AI Detection System",
    thumbnail: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900&auto=format&fit=crop",
    description: "An AI-powered Indian Railways platform for train and coach detection, live rail information, and route-based analytics using computer vision and real-time data sources.",
    technologies: ["Python", "Streamlit", "YOLOv8", "OpenCV", "PyTorch", "Pandas", "REST APIs", "NetworkX", "MongoDB"],
    links: [
      { label: "GitHub", url: githubProfile },
      { label: "LinkedIn", url: linkedInProfile }
    ],
    screenshots: []
  },
  {
    id: "2",
    category: "AI CCTV Surveillance",
    title: "AI CCTV Surveillance System",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900&auto=format&fit=crop",
    description: "A smart AI security platform that detects suspicious activities, tracks human entry and exit times, and captures real-time evidence of security events.",
    technologies: ["Python", "YOLO", "OpenCV", "Docker", "MongoDB", "Redis"],
    links: [
      { label: "GitHub", url: githubProfile },
      { label: "LinkedIn", url: linkedInProfile }
    ],
    screenshots: []
  },
  {
    id: "3",
    category: "Full Stack Web App",
    title: "Airbnb Clone",
    thumbnail: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=900&auto=format&fit=crop",
    description: "A full-stack property booking application inspired by Airbnb, built with a responsive frontend and a Node.js backend for managing listings and user interactions.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML", "CSS", "EJS"],
    links: [
      { label: "GitHub", url: githubProfile },
      { label: "LinkedIn", url: linkedInProfile }
    ],
    screenshots: []
  }
];
