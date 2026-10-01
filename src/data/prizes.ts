export interface PrizeTrack {
  track: string;
  format: string;
  teamSize: string;
  amount: string;
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
    amount: "₹1,000",
    accent: "beginner",
    accentHex: "#1457D9",
    softHex: "#DCEBFF",
    number: "01",
  },
  {
    track: "Intermediate",
    format: "Duo",
    teamSize: "2 Members",
    amount: "₹1,000",
    accent: "intermediate",
    accentHex: "#62C94A",
    softHex: "#E5F4D8",
    number: "02",
  },
  {
    track: "Advanced",
    format: "Squad",
    teamSize: "3–4 Members",
    amount: "₹1,000",
    accent: "advanced",
    accentHex: "#F3D21A",
    softHex: "#FFF3B8",
    number: "03",
  },
];

export const RECOGNITION = {
  totalCashPrizes: "₹3,000",
  certificatesMisc: "₹500",
  certificates: [
    "Completion certificates",
    "Winner certificates",
  ],
};
