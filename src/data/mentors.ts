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
  featured?: boolean;
}

export const MENTORS: Mentor[] = [
  {
    id: "harsh-wardhan",
    name: "Harsh Wardhan",
    role: "Technical & Innovation Lead",
    track: "Cross-Track",
    bio: "Full-stack engineer focusing on scalable software, system architecture, and robust GitHub workflows.",
    image: "/team/harsh_pic.jpg",
    linkedin: "https://linkedin.com/in/harsh-wardhan-singh-cse",
    github: "https://github.com/harshwardhan1507",
  },
  {
    id: "aryan-arya",
    name: "Aryan Arya",
    role: "AI & Fullstack Lead",
    track: "Advanced",
    bio: "Focusing on AI/ML architectures, distributed Python backends, and full-stack engineering.",
    image: "/team/aryanarya_pic.png",
    linkedin: "https://www.linkedin.com/in/aryan-kumar-0a54aa2a5/",
    github: "https://github.com/Aryankumar0022",
  },
  {
    id: "aryan-tailor",
    name: "Aryan Tailor",
    role: "AI & Systems Lead",
    track: "Advanced",
    bio: "CS student passionate about Artificial Intelligence, Data Structures & Algorithms, and core problem solving.",
    image: "/team/aryantailor_pic.png",
    linkedin: "https://www.linkedin.com/in/aryan-tailor/",
    github: "https://github.com/aryanexe07",
  },
  {
    id: "aryan-tathagat",
    name: "Aryan Tathagat",
    role: "Full-Stack Development Lead",
    track: "Intermediate",
    bio: "Full-stack developer focused on building responsive, user-friendly web applications.",
    image: "/team/tathagat_pic.png",
    linkedin: "https://www.linkedin.com/in/tathagat-aryan-4993a1286",
    github: "https://github.com/Aryan689t",
  },
  {
    id: "yash-goel",
    name: "Yash Goel",
    role: "Mentor",
    image: "/team/yash_pic.jpg",
  },
  {
    id: "karan-aggarwal",
    name: "Karan Aggarwal",
    role: "Mentor",
  },
  {
    id: "javin-gulati",
    name: "Javin Gulati",
    role: "Mentor",
  },
  {
    id: "ananay",
    name: "Ananay",
    role: "Mentor",
  },
];
