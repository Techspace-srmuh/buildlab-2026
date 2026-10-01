export interface Mentor {
  id: string;
  name: string;
  role: string;
  track: "Beginner" | "Intermediate" | "Advanced" | "Cross-Track";
  bio: string;
  image?: string;
  github?: string;
  linkedin?: string;
  isConfirmed: boolean;
}

// Mentor roster will be officially announced prior to inauguration.
// Configured with explicit placeholders per the proposal.
export const MENTORS: Mentor[] = [
  {
    id: "mentor-placeholder-1",
    name: "To Be Announced",
    role: "Beginner Track Lead",
    track: "Beginner",
    bio: "Technical guidance on Git workflows, repository hygiene, and core prototype development.",
    isConfirmed: false,
  },
  {
    id: "mentor-placeholder-2",
    name: "To Be Announced",
    role: "Intermediate Track Lead",
    track: "Intermediate",
    bio: "Architecture consulting, Pull Request reviews, and cross-team branch synchronization.",
    isConfirmed: false,
  },
  {
    id: "mentor-placeholder-3",
    name: "To Be Announced",
    role: "Advanced Track Lead",
    track: "Advanced",
    bio: "Scalable system design, automated testing pipelines, and technical complexity review.",
    isConfirmed: false,
  },
];
