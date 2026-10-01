export interface DemoMessage {
  id: string;
  sender: string;
  role: "bot" | "mentor" | "team" | "participant";
  align?: "left" | "right";
  avatarText: string;
  roleColor?: string;
  timestamp: string;
  content: string[];
  codeSnippet?: {
    language: string;
    code: string;
  };
  statusBadge?: {
    text: string;
    variant: "success" | "warning" | "neutral" | "info";
  };
}

export type WorkflowStepId =
  | "join"
  | "getting-started"
  | "choose-track"
  | "build-discuss"
  | "get-help"
  | "submit";

export interface DiscordChannelData {
  id: string;
  category: string;
  name: string;
  purpose: string;
  description: string;
  workflowStep: WorkflowStepId;
  demoMessages: DemoMessage[];
}

export interface DiscordCategoryData {
  name: string;
  icon: string;
  channels: DiscordChannelData[];
}

export interface WorkflowStep {
  id: WorkflowStepId;
  number: string;
  title: string;
  subtitle: string;
  associatedChannels: string[];
}

export const BUILDLAB_WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: "join",
    number: "01",
    title: "JOIN",
    subtitle: "Inauguration & Discord Onboarding",
    associatedChannels: ["getting-started", "rules"],
  },
  {
    id: "getting-started",
    number: "02",
    title: "GETTING STARTED",
    subtitle: "Program Guidelines & FAQ",
    associatedChannels: ["announcements", "faq", "introductions"],
  },
  {
    id: "choose-track",
    number: "03",
    title: "CHOOSE TRACK",
    subtitle: "Solo, Duo, or Squad Formation",
    associatedChannels: ["beginner", "intermediate", "advanced"],
  },
  {
    id: "build-discuss",
    number: "04",
    title: "BUILD & DISCUSS",
    subtitle: "Architecture & Progress Sprints",
    associatedChannels: ["project-discussion", "weekly-updates", "general"],
  },
  {
    id: "get-help",
    number: "05",
    title: "GET HELP",
    subtitle: "Git Reviews & Technical Debugging",
    associatedChannels: ["help", "github-help", "debugging"],
  },
  {
    id: "submit",
    number: "06",
    title: "SUBMIT",
    subtitle: "PRD & Final Repository Review",
    associatedChannels: ["submissions"],
  },
];

export const DISCORD_CATEGORIES: DiscordCategoryData[] = [
  {
    name: "INFORMATION",
    icon: "📌",
    channels: [
      {
        id: "getting-started",
        category: "INFORMATION",
        name: "getting-started",
        purpose: "START HERE",
        description:
          "Start here to understand BuildLab and find the resources you need.",
        workflowStep: "join",
        demoMessages: [
          {
            id: "gs-1",
            sender: "BOT",
            role: "bot",
            align: "left",
            avatarText: "BOT",
            timestamp: "10:00 AM",
            content: ["Welcome to BuildLab ’26."],
          },
          {
            id: "gs-2",
            sender: "PARTICIPANT",
            role: "participant",
            align: "right",
            avatarText: "P",
            timestamp: "10:01 AM",
            content: ["Where should I start?"],
          },
          {
            id: "gs-3",
            sender: "BOT",
            role: "bot",
            align: "left",
            avatarText: "BOT",
            timestamp: "10:02 AM",
            content: ["Start with the project catalogue and choose a track."],
          },
          {
            id: "gs-4",
            sender: "PARTICIPANT",
            role: "participant",
            align: "right",
            avatarText: "P",
            timestamp: "10:03 AM",
            content: ["Thanks! Exploring the catalogue now."],
          },
        ],
      },
      {
        id: "announcements",
        category: "INFORMATION",
        name: "announcements",
        purpose: "OFFICIAL NOTICES",
        description:
          "Official updates, important notices and program news.",
        workflowStep: "getting-started",
        demoMessages: [
          {
            id: "ann-1",
            sender: "BUILDLAB TEAM",
            role: "team",
            align: "left",
            avatarText: "BL",
            timestamp: "09:00 AM",
            content: [
              "BuildLab ’26 is officially live across all 3 tracks: Beginner, Intermediate, and Advanced.",
            ],
          },
          {
            id: "ann-2",
            sender: "PARTICIPANT",
            role: "participant",
            align: "right",
            avatarText: "P",
            timestamp: "09:05 AM",
            content: ["Are all 42 project repositories provisioned on GitHub?"],
          },
          {
            id: "ann-3",
            sender: "BOT",
            role: "bot",
            align: "left",
            avatarText: "BOT",
            timestamp: "09:06 AM",
            content: [
              "All repositories are live in the TechSpace organization and ready to clone.",
            ],
          },
        ],
      },
      {
        id: "rules",
        category: "INFORMATION",
        name: "rules",
        purpose: "SERVER & PROGRAM GUIDELINES",
        description:
          "Read the server and BuildLab guidelines before you get started.",
        workflowStep: "join",
        demoMessages: [
          {
            id: "rul-1",
            sender: "BUILDLAB TEAM",
            role: "team",
            align: "left",
            avatarText: "BL",
            timestamp: "10:00 AM",
            content: [
              "Welcome everyone. Please make sure all code is written by your team during the sprint.",
            ],
          },
          {
            id: "rul-2",
            sender: "PARTICIPANT",
            role: "participant",
            align: "right",
            avatarText: "P",
            timestamp: "10:02 AM",
            content: ["Can we use third-party libraries and packages?"],
          },
          {
            id: "rul-3",
            sender: "MENTOR",
            role: "mentor",
            align: "left",
            avatarText: "M",
            timestamp: "10:04 AM",
            content: [
              "Yes, as long as they are documented in your requirements and PRD.",
            ],
          },
        ],
      },
      {
        id: "faq",
        category: "INFORMATION",
        name: "faq",
        purpose: "COMMON QUESTIONS",
        description:
          "Quick answers to common BuildLab questions.",
        workflowStep: "getting-started",
        demoMessages: [
          {
            id: "faq-1",
            sender: "PARTICIPANT",
            role: "participant",
            align: "right",
            avatarText: "P",
            timestamp: "11:20 AM",
            content: [
              "Are we required to use all the technologies listed in a problem statement?",
            ],
          },
          {
            id: "faq-2",
            sender: "BOT",
            role: "bot",
            align: "left",
            avatarText: "BOT",
            timestamp: "11:21 AM",
            content: [
              "No. Pick exactly one implementation option from the listed choices.",
            ],
          },
          {
            id: "faq-3",
            sender: "PARTICIPANT",
            role: "participant",
            align: "right",
            avatarText: "P",
            timestamp: "11:23 AM",
            content: ["Should we complete Stretch features right away?"],
          },
          {
            id: "faq-4",
            sender: "MENTOR",
            role: "mentor",
            align: "left",
            avatarText: "M",
            timestamp: "11:24 AM",
            content: [
              "Complete your Core prototype cleanly before expanding to Stretch scope.",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "BUILDLAB",
    icon: "🧭",
    channels: [
      {
        id: "project-discussion",
        category: "BUILDLAB",
        name: "project-discussion",
        purpose: "COLLABORATE & SHARE IDEAS",
        description:
          "Talk about your project, share ideas and learn from other participants.",
        workflowStep: "build-discuss",
        demoMessages: [
          {
            id: "pd-1",
            sender: "PARTICIPANT",
            role: "participant",
            align: "right",
            avatarText: "AK",
            timestamp: "02:40 PM",
            content: [
              "I'm working on B07. How are you handling file collisions?",
            ],
          },
          {
            id: "pd-2",
            sender: "PARTICIPANT",
            role: "participant",
            align: "left",
            avatarText: "RM",
            timestamp: "02:42 PM",
            content: [
              "I rename conflicting files instead of overwriting them.",
            ],
          },
          {
            id: "pd-3",
            sender: "MENTOR",
            role: "mentor",
            align: "left",
            avatarText: "DR",
            timestamp: "02:44 PM",
            content: [
              "Good approach. Make sure the original file is preserved.",
            ],
          },
        ],
      },
      {
        id: "weekly-updates",
        category: "BUILDLAB",
        name: "weekly-updates",
        purpose: "WEEKLY SPRINT UPDATES",
        description:
          "Weekly updates about what is happening in BuildLab.",
        workflowStep: "build-discuss",
        demoMessages: [
          {
            id: "wu-1",
            sender: "BUILDLAB TEAM",
            role: "team",
            align: "left",
            avatarText: "BL",
            timestamp: "06:00 PM",
            content: [
              "Sprint checkpoint is open. Share your progress updates below.",
            ],
          },
          {
            id: "wu-2",
            sender: "PARTICIPANT",
            role: "participant",
            align: "right",
            avatarText: "VT",
            timestamp: "06:15 PM",
            content: [
              "CLI parser and file router complete. Writing unit tests now.",
            ],
          },
          {
            id: "wu-3",
            sender: "MENTOR",
            role: "mentor",
            align: "left",
            avatarText: "M",
            timestamp: "06:18 PM",
            content: [
              "Great velocity. Remember to keep commits atomic.",
            ],
          },
        ],
      },
      {
        id: "submissions",
        category: "BUILDLAB",
        name: "submissions",
        purpose: "SUBMIT YOUR PROJECT",
        description:
          "Use this channel for project submission updates and instructions.",
        workflowStep: "submit",
        demoMessages: [
          {
            id: "sub-1",
            sender: "PARTICIPANT",
            role: "participant",
            align: "right",
            avatarText: "SN",
            timestamp: "04:30 PM",
            content: ["Project B07 is ready."],
          },
          {
            id: "sub-2",
            sender: "BOT",
            role: "bot",
            align: "left",
            avatarText: "BOT",
            timestamp: "04:31 PM",
            content: ["Submission status updated."],
          },
          {
            id: "sub-3",
            sender: "MENTOR",
            role: "mentor",
            align: "left",
            avatarText: "M",
            timestamp: "04:35 PM",
            content: [
              "Reviewing your pull request and repository demo now.",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "COMMUNITY",
    icon: "💬",
    channels: [
      {
        id: "general",
        category: "COMMUNITY",
        name: "general",
        purpose: "COMMUNITY CHAT",
        description:
          "A place to chat with other BuildLab participants.",
        workflowStep: "build-discuss",
        demoMessages: [
          {
            id: "gen-1",
            sender: "PARTICIPANT",
            role: "participant",
            align: "right",
            avatarText: "KP",
            timestamp: "03:15 PM",
            content: ["Anyone else working with Fastify on the backend?"],
          },
          {
            id: "gen-2",
            sender: "PARTICIPANT",
            role: "participant",
            align: "left",
            avatarText: "AS",
            timestamp: "03:18 PM",
            content: ["Yes! Pairing it with SQLite for the cache layer."],
          },
          {
            id: "gen-3",
            sender: "PARTICIPANT",
            role: "participant",
            align: "right",
            avatarText: "KP",
            timestamp: "03:20 PM",
            content: ["Nice, the query speed is great."],
          },
        ],
      },
      {
        id: "introductions",
        category: "COMMUNITY",
        name: "introductions",
        purpose: "MEET THE COMMUNITY",
        description:
          "Introduce yourself and meet the people building alongside you.",
        workflowStep: "getting-started",
        demoMessages: [
          {
            id: "int-1",
            sender: "PARTICIPANT",
            role: "participant",
            align: "right",
            avatarText: "NK",
            timestamp: "11:45 AM",
            content: [
              "Hey everyone! Harsh here, building on the Web track.",
            ],
          },
          {
            id: "int-2",
            sender: "PARTICIPANT",
            role: "participant",
            align: "left",
            avatarText: "DL",
            timestamp: "11:47 AM",
            content: [
              "Welcome Harsh! Working on the CLI systems track here.",
            ],
          },
          {
            id: "int-3",
            sender: "BOT",
            role: "bot",
            align: "left",
            avatarText: "BOT",
            timestamp: "11:48 AM",
            content: [
              "Welcome to BuildLab ’26. Head over to #getting-started to begin.",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "SUPPORT",
    icon: "🛠",
    channels: [
      {
        id: "help",
        category: "SUPPORT",
        name: "help",
        purpose: "GET HELP WITH YOUR PROJECT",
        description:
          "Get help when you're stuck or run into a technical problem.",
        workflowStep: "get-help",
        demoMessages: [
          {
            id: "hlp-1",
            sender: "PARTICIPANT",
            role: "participant",
            align: "right",
            avatarText: "MS",
            timestamp: "05:10 PM",
            content: ["I'm having trouble setting up my local SQLite database."],
          },
          {
            id: "hlp-2",
            sender: "BOT",
            role: "bot",
            align: "left",
            avatarText: "BOT",
            timestamp: "05:11 PM",
            content: [
              "Share your OS, framework version and the exact error you're seeing.",
            ],
          },
          {
            id: "hlp-3",
            sender: "PARTICIPANT",
            role: "participant",
            align: "right",
            avatarText: "MS",
            timestamp: "05:12 PM",
            content: [
              "I'm using Python and Flask. SQLite says it can't open the database.",
            ],
          },
          {
            id: "hlp-4",
            sender: "MENTOR",
            role: "mentor",
            align: "left",
            avatarText: "M",
            timestamp: "05:14 PM",
            content: [
              "Check that the project directory is writable and that the database path points to a valid location.",
            ],
          },
        ],
      },
      {
        id: "github-help",
        category: "SUPPORT",
        name: "github-help",
        purpose: "GIT & GITHUB SUPPORT",
        description:
          "Get help with Git, GitHub, repositories and pull requests.",
        workflowStep: "get-help",
        demoMessages: [
          {
            id: "gh-1",
            sender: "PARTICIPANT",
            role: "participant",
            align: "right",
            avatarText: "PR",
            timestamp: "11:20 AM",
            content: ["My push is being rejected with non-fast-forward."],
          },
          {
            id: "gh-2",
            sender: "MENTOR",
            role: "mentor",
            align: "left",
            avatarText: "M",
            timestamp: "11:22 AM",
            content: [
              "Run git status first and check which branch you're currently on.",
            ],
          },
          {
            id: "gh-3",
            sender: "PARTICIPANT",
            role: "participant",
            align: "right",
            avatarText: "PR",
            timestamp: "11:24 AM",
            content: ["I was on main instead of my feature branch!"],
          },
          {
            id: "gh-4",
            sender: "MENTOR",
            role: "mentor",
            align: "left",
            avatarText: "M",
            timestamp: "11:26 AM",
            content: [
              "Checkout your branch with git checkout -b feat/your-name, then push.",
            ],
            codeSnippet: {
              language: "bash",
              code: "git checkout -b feat/your-name\ngit push origin feat/your-name",
            },
          },
        ],
      },
      {
        id: "debugging",
        category: "SUPPORT",
        name: "debugging",
        purpose: "DEBUGGING & ERROR RESOLUTION",
        description:
          "Share bugs and errors and work through them with the community.",
        workflowStep: "get-help",
        demoMessages: [
          {
            id: "dbg-1",
            sender: "PARTICIPANT",
            role: "participant",
            align: "right",
            avatarText: "TY",
            timestamp: "04:12 PM",
            content: ["My API is returning a 500."],
          },
          {
            id: "dbg-2",
            sender: "MENTOR",
            role: "mentor",
            align: "left",
            avatarText: "M",
            timestamp: "04:14 PM",
            content: [
              "Check the server traceback and identify the first application error.",
            ],
          },
          {
            id: "dbg-3",
            sender: "PARTICIPANT",
            role: "participant",
            align: "right",
            avatarText: "TY",
            timestamp: "04:15 PM",
            content: ["Found it — missing environment variable for JWT secret."],
          },
          {
            id: "dbg-4",
            sender: "MENTOR",
            role: "mentor",
            align: "left",
            avatarText: "M",
            timestamp: "04:16 PM",
            content: [
              "Add a check in your config loader so it fails fast on missing envs.",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "TRACKS",
    icon: "👨‍💻",
    channels: [
      {
        id: "beginner",
        category: "TRACKS",
        name: "beginner",
        purpose: "BEGINNER TRACK · SOLO",
        description:
          "Solo track building core prototypes and learning Git fundamentals.",
        workflowStep: "choose-track",
        demoMessages: [
          {
            id: "trk-b1",
            sender: "BOT",
            role: "bot",
            align: "left",
            avatarText: "BOT",
            timestamp: "11:30 AM",
            content: [
              "Welcome Beginner track participants! You are building solo on 1 of 14 curated problem statements.",
            ],
          },
          {
            id: "trk-b2",
            sender: "PARTICIPANT",
            role: "participant",
            align: "right",
            avatarText: "P",
            timestamp: "11:32 AM",
            content: ["Should we focus on the core scope first?"],
          },
          {
            id: "trk-b3",
            sender: "MENTOR",
            role: "mentor",
            align: "left",
            avatarText: "M",
            timestamp: "11:34 AM",
            content: [
              "Yes. Complete your Core prototype cleanly before exploring Stretch features.",
            ],
          },
        ],
      },
      {
        id: "intermediate",
        category: "TRACKS",
        name: "intermediate",
        purpose: "INTERMEDIATE TRACK · DUO",
        description:
          "Duo track collaborating with divided tasks and branch reviews.",
        workflowStep: "choose-track",
        demoMessages: [
          {
            id: "trk-i1",
            sender: "BOT",
            role: "bot",
            align: "left",
            avatarText: "BOT",
            timestamp: "11:30 AM",
            content: [
              "Welcome Intermediate track duos! You are building across 20 problem statements.",
            ],
          },
          {
            id: "trk-i2",
            sender: "PARTICIPANT",
            role: "participant",
            align: "right",
            avatarText: "P",
            timestamp: "11:33 AM",
            content: [
              "We've split frontend and API routes into separate branches.",
            ],
          },
          {
            id: "trk-i3",
            sender: "MENTOR",
            role: "mentor",
            align: "left",
            avatarText: "M",
            timestamp: "11:35 AM",
            content: [
              "Excellent. Open PRs against main and review each other's code before merging.",
            ],
          },
        ],
      },
      {
        id: "advanced",
        category: "TRACKS",
        name: "advanced",
        purpose: "ADVANCED TRACK · SQUAD",
        description:
          "Squad track engineering production architectures and systems.",
        workflowStep: "choose-track",
        demoMessages: [
          {
            id: "trk-a1",
            sender: "BOT",
            role: "bot",
            align: "left",
            avatarText: "BOT",
            timestamp: "11:30 AM",
            content: [
              "Welcome Advanced track squads! 8 production-grade systems challenges.",
            ],
          },
          {
            id: "trk-a2",
            sender: "PARTICIPANT",
            role: "participant",
            align: "right",
            avatarText: "P",
            timestamp: "11:34 AM",
            content: [
              "We are setting up Docker sandboxes for isolated code execution.",
            ],
          },
          {
            id: "trk-a3",
            sender: "MENTOR",
            role: "mentor",
            align: "left",
            avatarText: "M",
            timestamp: "11:36 AM",
            content: [
              "Ensure strict memory limits and timeout enforcement in your worker containers.",
            ],
          },
        ],
      },
    ],
  },
];

// Ticket Demo Flow Interface & Data
export interface TicketMessage {
  id: string;
  sender: string;
  role: "participant" | "bot" | "mentor";
  align: "left" | "right";
  avatarText: string;
  timestamp: string;
  content: string[];
}

export type TicketStatus = "OPEN" | "IN PROGRESS" | "RESOLVED" | "CLOSED";

export interface TicketDemoData {
  ticketNumber: string;
  category: string;
  issueTitle: string;
  steps: {
    number: string;
    title: string;
    description: string;
  }[];
  statuses: TicketStatus[];
  messages: TicketMessage[];
}

export const TICKET_DEMO_DATA: TicketDemoData = {
  ticketNumber: "#ticket-0042",
  category: "TECHNICAL SUPPORT",
  issueTitle: "SQLite local database unable to open file",
  steps: [
    {
      number: "01",
      title: "OPEN A TICKET",
      description: "Describe the issue you're facing.",
    },
    {
      number: "02",
      title: "GET HELP",
      description: "A BuildLab team member or mentor can respond.",
    },
    {
      number: "03",
      title: "SOLVE",
      description: "Work through the issue together.",
    },
    {
      number: "04",
      title: "CLOSE",
      description: "Once resolved, the ticket is closed.",
    },
  ],
  statuses: ["OPEN", "IN PROGRESS", "RESOLVED", "CLOSED"],
  messages: [
    {
      id: "t-1",
      sender: "PARTICIPANT",
      role: "participant",
      align: "right",
      avatarText: "MS",
      timestamp: "05:10 PM",
      content: [
        "I'm unable to get my project database working. I've tried SQLite but the application can't find the file.",
      ],
    },
    {
      id: "t-2",
      sender: "BOT",
      role: "bot",
      align: "left",
      avatarText: "BOT",
      timestamp: "05:10 PM",
      content: [
        "Your support ticket has been created. A BuildLab team member can now help you.",
      ],
    },
    {
      id: "t-3",
      sender: "MENTOR",
      role: "mentor",
      align: "left",
      avatarText: "M",
      timestamp: "05:11 PM",
      content: [
        "Can you share the error message and the path you're using for the database file?",
      ],
    },
    {
      id: "t-4",
      sender: "PARTICIPANT",
      role: "participant",
      align: "right",
      avatarText: "MS",
      timestamp: "05:12 PM",
      content: ['The error says: "unable to open database file"'],
    },
    {
      id: "t-5",
      sender: "MENTOR",
      role: "mentor",
      align: "left",
      avatarText: "M",
      timestamp: "05:13 PM",
      content: [
        "Check that the directory exists and that your application has permission to write there.",
      ],
    },
    {
      id: "t-6",
      sender: "PARTICIPANT",
      role: "participant",
      align: "right",
      avatarText: "MS",
      timestamp: "05:14 PM",
      content: ["That fixed it. Thanks!"],
    },
    {
      id: "t-7",
      sender: "BOT",
      role: "bot",
      align: "left",
      avatarText: "BOT",
      timestamp: "05:15 PM",
      content: ["Ticket resolved."],
    },
  ],
};

// Helper to find any channel by ID
export function getChannelById(channelId: string): DiscordChannelData {
  for (const cat of DISCORD_CATEGORIES) {
    const found = cat.channels.find((c) => c.id === channelId);
    if (found) return found;
  }
  return DISCORD_CATEGORIES[0].channels[0];
}

// Auto-demo script sequence of representative channels to step through
export const AUTO_DEMO_CHANNELS = [
  "getting-started",
  "project-discussion",
  "github-help",
  "debugging",
  "submissions",
];
