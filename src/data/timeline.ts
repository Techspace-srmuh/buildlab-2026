export interface TimelineMilestone {
  id: string;
  date: string;
  shortDate: string;
  year: string;
  title: string;
  subtitle?: string;
  time?: string;
  location?: string;
  type: "in-person" | "program-end" | "online";
  description: string;
}

// Confirmed event points from the authoritative Green Sheet.
// Intermediate milestones will be added once officially announced.
export const TIMELINE: TimelineMilestone[] = [
  {
    id: "inauguration",
    date: "06 October 2026",
    shortDate: "06 OCT",
    year: "’26",
    title: "INAUGURATION",
    subtitle: "IN-PERSON KICK-OFF",
    time: "10:30 AM",
    location: "5th Floor, Conference Room, Engineering Block",
    type: "in-person",
    description:
      "Official briefing, track walkthrough, and Discord onboarding. The program continues online via GitHub and Discord.",
  },
  {
    id: "conclusion",
    date: "23 October 2026",
    shortDate: "23 OCT",
    year: "’26",
    title: "PROGRAM CONCLUSION",
    subtitle: "FINAL EVALUATION",
    type: "program-end",
    description:
      "Conclusion of the three-week project-based learning competition across all tracks.",
  },
];
