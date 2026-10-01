export interface TimelineEvent {
  phase: string;
  date: string;
  dayNumber?: string;
  title: string;
  venue?: string;
  time?: string;
  description: string;
  accent?: string;
}

export const TIMELINE: TimelineEvent[] = [
  {
    phase: "00",
    date: "Before Day 1",
    title: "Registration & Entry Task",
    description:
      "Participant registration, GitHub entry task completion, track selection, and squad formation.",
  },
  {
    phase: "01",
    date: "5 October 2026",
    dayNumber: "05",
    title: "Inauguration & Kick-off",
    venue: "5th Floor, Conference Room, EB",
    time: "10:30 AM",
    description:
      "Official briefing, track walkthrough, rules announcement, PRD process orientation, and Discord server onboarding.",
    accent: "#1457D9",
  },
  {
    phase: "02",
    date: "5–7 October 2026",
    dayNumber: "05–07",
    title: "PRD Drafting & Submission",
    description:
      "Teams define problem statements, feature specifications, architecture, milestones, and success criteria.",
    accent: "#18B8D4",
  },
  {
    phase: "03",
    date: "7 October 2026",
    dayNumber: "07",
    title: "PRD Approval Deadline",
    description:
      "Mentors review and approve PRD documents. Development begins officially only after mentor sign-off.",
    accent: "#62C94A",
  },
  {
    phase: "04",
    date: "8–15 October 2026",
    dayNumber: "08–15",
    title: "Core Development",
    description:
      "Repositories, Issues, Branches, and Pull Requests are utilized to build core project requirements.",
  },
  {
    phase: "05",
    date: "15 October 2026",
    dayNumber: "15",
    title: "Mid-Program Milestone Review",
    description:
      "Milestone progress check against approved PRDs to keep all teams on track for successful delivery.",
    accent: "#F3D21A",
  },
  {
    phase: "06",
    date: "16–20 October 2026",
    dayNumber: "16–20",
    title: "Completion, Testing & Documentation",
    description:
      "Teams complete core features, implement stretch goals, write test suites, and finalize documentation.",
  },
  {
    phase: "07",
    date: "21 October 2026",
    dayNumber: "21",
    title: "Final Submission & Code Freeze",
    description:
      "Repositories are frozen for evaluation by mentors and faculty evaluation panel.",
  },
  {
    phase: "08",
    date: "22 October 2026",
    dayNumber: "22",
    title: "Demonstrations & Evaluation",
    description:
      "Live project demonstrations and evaluation by mentors and faculty evaluation panel against published rubric.",
    accent: "#1457D9",
  },
  {
    phase: "09",
    date: "23 October 2026",
    dayNumber: "23",
    title: "Results & Closing Ceremony",
    description:
      "Announcement of track champions, prize distribution (₹1,000 per track), and completion/winner certificates.",
    accent: "#62C94A",
  },
];
