export type ProjectTrack = "all" | "beginner" | "intermediate" | "advanced";

export interface Project {
  id: string;
  code?: string;
  name: string;
  shortDescription: string;
  track: "beginner" | "intermediate" | "advanced";
  domain?: string;
  difficulty?: string;
  coreRequirements?: string[];
  stretchRequirements?: string[];
  technologies?: string[];
  status?: string;
}

export const PROJECT_TRACK_FILTERS: { id: ProjectTrack; label: string }[] = [
  { id: "all", label: "ALL" },
  { id: "beginner", label: "BEGINNER" },
  { id: "intermediate", label: "INTERMEDIATE" },
  { id: "advanced", label: "ADVANCED" },
];

// The Green Sheet does NOT provide the project catalogue yet.
// Set to an empty array so the intentional pre-launch state is rendered.
export const PROJECTS: Project[] = [];
