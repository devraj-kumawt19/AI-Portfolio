export interface Experience {
  id: string;
  period: string;
  company: string;
  role: string;
  startMonth: string;
  endMonth: string;
  ongoing: boolean;
  bullets: string[];
}

export const experienceData: Experience[] = [
  {
    id: "1",
    period: "2025-Present",
    company: "Coding Club, Poornima College",
    role: "Member / Technical Support",
    startMonth: "Jul 2025",
    endMonth: "Present",
    ongoing: true,
    bullets: [
      "Participated in organizing coding events and technical activities.",
      "Supported coding sessions and helped students improve programming and problem-solving skills.",
      "Contributed to discussions covering DSA, C++, Java, and Python.",
      "Encouraged collaborative learning and technical participation among peers."
    ]
  },
  {
    id: "2",
    period: "2024-Present",
    company: "Event Club, Poornima College",
    role: "Volunteer / Event Team",
    startMonth: "Jul 2024",
    endMonth: "Present",
    ongoing: true,
    bullets: [
      "Assisted in organizing and coordinating college events.",
      "Contributed to event planning and execution activities.",
      "Worked as part of a team to ensure smooth event operations.",
      "Supported logistics and coordination for student events and programs."
    ]
  }
];
