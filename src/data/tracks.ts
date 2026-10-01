import { CATALOGUE_STATS } from "./projects";

export interface TrackMetadata {
  id: "beginner" | "intermediate" | "advanced";
  number: string;
  name: string;
  format: string;
  teamSize: string;
  count: number;
  description: string;
  accent: "blue" | "green" | "yellow";
  accentHex: string;
  softHex: string;
  borderHover: string;
  bgSoft: string;
  textAccent: string;
  symbol: string;
  headline: string;
}

export type Track = TrackMetadata;

export const TRACK_DETAILS: Record<"beginner" | "intermediate" | "advanced", TrackMetadata> = {
  beginner: {
    id: "beginner",
    number: "01",
    name: "Beginner",
    format: "Solo",
    teamSize: "1 Member",
    count: CATALOGUE_STATS.beginner,
    description: "Build your first serious project. Focused scopes with room to explore.",
    headline: "BUILD FROM THE BASICS.",
    accent: "blue",
    accentHex: "#1457D9",
    softHex: "#DCEBFF",
    borderHover: "hover:border-[var(--blue)]",
    bgSoft: "bg-[var(--blue-soft)]",
    textAccent: "text-[var(--blue)]",
    symbol: "MOL-01",
  },
  intermediate: {
    id: "intermediate",
    number: "02",
    name: "Intermediate",
    format: "Duo",
    teamSize: "2 Members",
    count: CATALOGUE_STATS.intermediate,
    description: "Build with a partner. More involved systems, APIs and applied development.",
    headline: "COLLABORATIVE APPLIED SYSTEMS.",
    accent: "green",
    accentHex: "#62C94A",
    softHex: "#E5F4D8",
    borderHover: "hover:border-[var(--green)]",
    bgSoft: "bg-[var(--green-soft)]",
    textAccent: "text-[#206313] dark:text-[var(--green)]",
    symbol: "LATTICE-02",
  },
  advanced: {
    id: "advanced",
    number: "03",
    name: "Advanced",
    format: "Squad",
    teamSize: "3–4 Members",
    count: CATALOGUE_STATS.advanced,
    description: "Tackle larger engineering systems. Designed for deeper architecture and collaboration.",
    headline: "PRODUCTION ARCHITECTURES.",
    accent: "yellow",
    accentHex: "#F3D21A",
    softHex: "#FFF3B8",
    borderHover: "hover:border-[var(--yellow)]",
    bgSoft: "bg-[var(--yellow-soft)]",
    textAccent: "text-[#6b5600] dark:text-[var(--yellow)]",
    symbol: "POLYHEDRON-03",
  },
};

export const TRACKS = [
  TRACK_DETAILS.beginner,
  TRACK_DETAILS.intermediate,
  TRACK_DETAILS.advanced,
];
