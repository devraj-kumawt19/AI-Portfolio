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
    period: "3 Months",
    company: "System Logic Software Solutions Pvt. Ltd.",
    role: "Software Engineer",
    startMonth: "Jun 2024",
    endMonth: "Aug 2024",
    ongoing: false,
    bullets: [
      "Worked as a Software Engineer and contributed to application development and issue resolution.",
      "Collaborated with the development team to build, test, and improve software features.",
      "Helped debug technical issues and support smooth project execution in a real-world environment.",
      "Gained practical exposure to software development workflows, teamwork, and delivery practices."
    ]
  },
  {
    id: "2",
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
    id: "3",
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
