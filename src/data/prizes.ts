export interface PrizeTrack {
  track: string;
  format: string;
  teamSize: string;
  award: string;
  awardDescription: string;
  accent: "beginner" | "intermediate" | "advanced";
  accentHex: string;
  softHex: string;
  number: string;
}

export const PRIZES: PrizeTrack[] = [
  {
    track: "Beginner",
    format: "Solo",
    teamSize: "1 Member",
    award: "Exciting Prizes",
    awardDescription: "To the winning solo builder",
    accent: "beginner",
    accentHex: "#1457D9",
    softHex: "#DCEBFF",
    number: "01",
  },
  {
    track: "Intermediate",
    format: "Duo",
    teamSize: "2 Members",
    award: "Exciting Prizes",
    awardDescription: "To the winning duo team",
    accent: "intermediate",
    accentHex: "#62C94A",
    softHex: "#E5F4D8",
    number: "02",
  },
  {
    track: "Advanced",
    format: "Squad",
    teamSize: "3–4 Members",
    award: "Exciting Prizes",
    awardDescription: "To the winning squad",
    accent: "advanced",
    accentHex: "#F3D21A",
    softHex: "#FFF3B8",
    number: "03",
  },
];

export const RECOGNITION = {
  headline: "Exciting prizes to the winner from each track",
  certificates: [
    "Completion certificates",
    "Winner certificates",
  ],
};
