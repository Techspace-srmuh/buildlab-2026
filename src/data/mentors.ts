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
    track: "Cross-Track",
    bio: "CS student passionate about Artificial Intelligence, Data Structures & Algorithms, and core problem solving.",
    image: "/team/aryantailor_pic.png",
    linkedin: "https://www.linkedin.com/in/aryan-tailor/",
    github: "https://github.com/aryanexe07",
  },
  {
    id: "tathagat-aryan",
    name: "Tathagat Aryan",
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
    role: "Web, Mobile & DevOps Lead",
    track: "Cross-Track",
    bio: "Specializing in full-stack web development, mobile applications, and DevOps/cloud infrastructure.",
    image: "/team/yash_pic.png",
    linkedin: "https://www.linkedin.com/in/yashgoyal-dev/",
    github: "https://github.com/yash-144",
  },
  {
    id: "karan-agrawal",
    name: "Karan Agrawal",
    role: "AI/ML Mentor",
    track: "Intermediate",
    bio: "AI/ML developer focused on machine learning models and intelligent applications for Beginner and Intermediate tracks.",
    image: "/team/karan_pic.png",
    linkedin: "https://www.linkedin.com/in/karan-agrawal-398b1734a/",
    github: "https://github.com/Karanagrawal955",
  },
  {
    id: "javin-gulati",
    name: "Javin Gulati",
    role: "AI & Python Mentor",
    track: "Beginner",
    bio: "AI/ML student and Python developer passionate about core problem solving, data structures, and backend systems.",
    image: "/team/javin_pic.png",
    linkedin: "https://www.linkedin.com/in/javin-gulati-36b962340",
    github: "https://github.com/JavinGulati",
  },
  {
    id: "ananay-gajraj",
    name: "Ananay Gajraj",
    role: "Mentor",
    track: "Beginner",
    bio: "Developer focused on practical software engineering, Python tooling, and full-stack web applications.",
    image: "/team/ananay_pic.png",
    linkedin: "https://www.linkedin.com/in/deprecatism/",
    github: "https://github.com/deprecatism",
  },
];
