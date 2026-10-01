export interface Track {
  id: string;
  number: string;
  name: string;
  format: string;
  teamSize?: string;
  accent: "blue" | "green" | "yellow";
  accentHex: string;
  softHex: string;
  symbol: string;
}

export const TRACKS: Track[] = [
  {
    id: "beginner",
    number: "01",
    name: "Beginner",
    format: "Solo",
    teamSize: "1 Member",
    accent: "blue",
    accentHex: "#1457D9",
    softHex: "#DCEBFF",
    symbol: "MOL-01",
  },
  {
    id: "intermediate",
    number: "02",
    name: "Intermediate",
    format: "Duo",
    teamSize: "2 Members",
    accent: "green",
    accentHex: "#62C94A",
    softHex: "#E5F4D8",
    symbol: "LATTICE-02",
  },
  {
    id: "advanced",
    number: "03",
    name: "Advanced",
    format: "Squad",
    teamSize: "3–4 Members",
    accent: "yellow",
    accentHex: "#F3D21A",
    softHex: "#FFF3B8",
    symbol: "POLYHEDRON-03",
  },
];
