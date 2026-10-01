export type MentorTrack = "Beginner" | "Intermediate" | "Advanced" | "Cross-Track";

export interface Mentor {
  id: string;
  name: string;
  role?: string;
  track?: MentorTrack;
  bio?: string;
  image?: string;
  linkedin?: string;
  github?: string;
}

// The approved Green Sheet confirms mentors, an evaluation panel, and a Faculty Coordinator.
// Official roster names, photographs, and social links are pending announcement prior to launch.
// Kept as an empty array to render the verified pre-launch state.
export const MENTORS: Mentor[] = [];
