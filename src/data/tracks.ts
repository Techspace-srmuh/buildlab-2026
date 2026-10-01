export interface Track {
  id: string;
  name: string;
  tagline: string;
  teamSize: string;
  targetAudience: string;
  description: string;
  accentColor: string;
  softColor: string;
  requirements: string[];
}

export const TRACKS: Track[] = [
  {
    id: "beginner",
    name: "Beginner",
    tagline: "SOLO",
    teamSize: "1 Member",
    targetAudience: "New to Git/GitHub or building first complete project",
    description:
      "Small, well-scoped projects that demonstrate a clean working solution with thorough documentation and fundamental version control workflows.",
    accentColor: "#1457D9",
    softColor: "#DCEBFF",
    requirements: [
      "Individual project delivery",
      "Git fundamentals & clean commit history",
      "Comprehensive README and setup instructions",
      "Working prototype with core features implemented",
    ],
  },
  {
    id: "intermediate",
    name: "Intermediate",
    tagline: "DUO",
    teamSize: "2 Members",
    targetAudience: "Prior project experience and working knowledge of Git",
    description:
      "Multi-feature systems demonstrating effective work division, branch management, Pull Requests, and peer code reviews before mentor merging.",
    accentColor: "#62C94A",
    softColor: "#E5F4D8",
    requirements: [
      "Collaborative 2-person engineering",
      "Feature branching & pull request workflow",
      "Peer review on all merged changes",
      "Robust state management and API integration",
    ],
  },
  {
    id: "advanced",
    name: "Advanced",
    tagline: "SQUAD",
    teamSize: "3–4 Members",
    targetAudience: "Strong fundamentals, solid system design and team workflow",
    description:
      "Technically ambitious, production-grade applications with modular architecture, strict PRD milestones, CI automation, and stretch deliverables.",
    accentColor: "#F3D21A",
    softColor: "#FFF3B8",
    requirements: [
      "Squad collaboration (3–4 engineers)",
      "Strict PRD milestone adherence",
      "Automated testing and CI/CD validation",
      "Ambitious technical complexity & stretch goals",
    ],
  },
];
