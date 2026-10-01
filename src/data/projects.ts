export interface ProjectCatalogueItem {
  id: string;
  code: string;
  title: string;
  oneLiner: string;
  track: "Beginner" | "Intermediate" | "Advanced";
  domain: "Web" | "AI / ML" | "Backend" | "Mobile" | "Systems" | "Automation";
  coreFeatures: string[];
  stretchFeatures: string[];
  techStack: string[];
}

export const PROJECT_DOMAINS = [
  "ALL",
  "WEB",
  "AI / ML",
  "BACKEND",
  "MOBILE",
  "SYSTEMS",
  "AUTOMATION",
] as const;

// Project catalogue will be populated before program kickoff.
// Participants can also submit their own projects via the PRD process.
export const PROJECTS_PLACEHOLDER_NOTICE =
  "Official curated project catalogue will be revealed at inauguration. Participants are also invited to propose custom projects through the PRD pipeline.";

export const PROJECTS: ProjectCatalogueItem[] = [
  {
    id: "bl-sample-01",
    code: "PRJ-01",
    title: "Project Catalogue Sample",
    oneLiner: "Curated problem statement for the BuildLab cohort.",
    track: "Beginner",
    domain: "Web",
    coreFeatures: ["Interactive UI", "REST API Consumption", "Accessible Design"],
    stretchFeatures: ["Persistent Local Caching", "Keyboard Shortcuts"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];
