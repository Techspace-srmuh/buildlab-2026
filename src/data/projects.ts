export type ProjectTrack = "all" | "beginner" | "intermediate" | "advanced";
export type ProjectLevel = "Starter" | "Core";

export interface Project {
  id: string;
  code: string;
  title: string;
  name: string; // Backward compatibility alias for title
  track: "beginner" | "intermediate" | "advanced";
  teamSize: string;
  level?: ProjectLevel;
  category: string;
  brief: string;
  shortDescription: string; // Backward compatibility alias for brief
  core: string[];
  stretch?: string[];
  techStack: string[];
  repository?: string;
  domain?: string; // Backward compatibility alias for category
  difficulty?: string; // Backward compatibility alias for level/teamSize
}

export const PROJECT_TRACK_FILTERS: { id: ProjectTrack; label: string }[] = [
  { id: "all", label: "ALL" },
  { id: "beginner", label: "BEGINNER" },
  { id: "intermediate", label: "INTERMEDIATE" },
  { id: "advanced", label: "ADVANCED" },
];

export const PROJECTS: Project[] = [
  // ==========================================
  // BEGINNER TRACK (14 PROJECTS · SOLO)
  // ==========================================
  {
    id: "b01",
    code: "B01",
    title: "Campus Lost & Found",
    name: "Campus Lost & Found",
    track: "beginner",
    teamSize: "Solo",
    level: "Core",
    category: "Web",
    domain: "Web",
    difficulty: "Core",
    brief:
      "Students frequently lose or find belongings around campus, but information about those items is usually scattered across conversations and informal notices. The project turns that scattered information into a single searchable board where a student can report an item, discover possible matches, and record when an item has been claimed. The emphasis is on a clear end-to-end flow rather than a large or complicated application.",
    shortDescription:
      "Students frequently lose or find belongings around campus, but information about those items is usually scattered across conversations and informal notices. The project turns that scattered information into a single searchable board where a student can report an item, discover possible matches, and record when an item has been claimed.",
    core: [
      "Report lost/found items (name, category, location, date, description)",
      "Search and filter",
      "Mark as claimed",
    ],
    stretch: ["Image upload", "Admin approval"],
    techStack: [
      "HTML/CSS/JS + localStorage",
      "Flask or FastAPI + SQLite",
      "Node/Express + MongoDB",
      "Spring Boot + Thymeleaf + H2",
      "React + Firebase",
    ],
    repository: "lost-and-found-hub",
  },
  {
    id: "b02",
    code: "B02",
    title: "Campus Resource Hub",
    name: "Campus Resource Hub",
    track: "beginner",
    teamSize: "Solo",
    level: "Core",
    category: "Web",
    domain: "Web",
    difficulty: "Core",
    brief:
      "Study resources are often spread across chats, cloud folders and different websites, making useful material difficult to find later. Build a small searchable resource hub organized around subjects and semesters, where students can add useful links or notes and quickly narrow results using tags. The project should feel like a focused campus knowledge index rather than a generic file-sharing system.",
    shortDescription:
      "Study resources are often spread across chats, cloud folders and different websites, making useful material difficult to find later. Build a small searchable resource hub organized around subjects and semesters.",
    core: [
      "Browse by subject/semester",
      "Add link/note entries",
      "Search and filter by tag",
    ],
    stretch: [
      "Bookmarks",
      "Upvotes",
      "Broken-link checker (Links only; no uploading copyrighted material)",
    ],
    techStack: [
      "Vanilla JS + JSON",
      "Django + SQLite",
      "Express + SQLite",
      "React + Supabase",
      "Spring Boot + H2",
    ],
    repository: "campus-resource-hub",
  },
  {
    id: "b03",
    code: "B03",
    title: "Student Ideas & Suggestions Portal",
    name: "Student Ideas & Suggestions Portal",
    track: "beginner",
    teamSize: "Solo",
    level: "Core",
    category: "Web",
    domain: "Web",
    difficulty: "Core",
    brief:
      "Students often have useful ideas for improving campus life, but suggestions can disappear inside chats or isolated forms. Build a simple public-facing ideas board that lets students submit, categorize, discover and upvote suggestions while showing what stage each idea has reached. The status flow should make it possible to see whether an idea is still being reviewed or has moved toward implementation.",
    shortDescription:
      "Students often have useful ideas for improving campus life, but suggestions can disappear inside chats or isolated forms. Build a simple public-facing ideas board that lets students submit, categorize, discover and upvote suggestions.",
    core: [
      "Submit ideas",
      "Categorize",
      "Browse",
      "Upvote (one vote per user)",
      "Status flow: Submitted → Under Review → Accepted/Implemented",
    ],
    stretch: ["Admin panel", "Comments"],
    techStack: [
      "Vanilla JS + localStorage",
      "Flask + SQLite",
      "Node/Express + PostgreSQL",
      "React + Firebase",
      "Spring Boot + H2",
    ],
    repository: "campus-ideas-portal",
  },
  {
    id: "b04",
    code: "B04",
    title: "Personal Portfolio & Blog",
    name: "Personal Portfolio & Blog",
    track: "beginner",
    teamSize: "Solo",
    level: "Starter",
    category: "Web",
    domain: "Web",
    difficulty: "Starter",
    brief:
      "A first portfolio is an opportunity to practise the fundamentals of building and presenting a real web project. Create a responsive personal site with a clear introduction, projects section and working contact flow, then use the stretch work to add a small content system such as a Markdown/JSON blog. The result should be a usable public portfolio, not just a static landing page.",
    shortDescription:
      "Create a responsive personal site with a clear introduction, projects gallery and a working contact flow, then use the stretch work to add a small content system such as a Markdown/JSON blog.",
    core: [
      "Responsive site with About, Projects gallery and a working contact form via EmailJS/Formspree (public keys only, never secret keys in frontend code)",
    ],
    stretch: ["Markdown/JSON blog", "Dark mode", "Lighthouse score ≥ 90"],
    techStack: [
      "HTML/CSS/vanilla JS",
      "Tailwind + JS",
      "Astro or Eleventy",
      "React/Next.js",
    ],
    repository: "portfolio-and-blog",
  },
  {
    id: "b05",
    code: "B05",
    title: "Subscription Tracker",
    name: "Subscription Tracker",
    track: "beginner",
    teamSize: "Solo",
    level: "Core",
    category: "Web / Desktop",
    domain: "Web / Desktop",
    difficulty: "Core",
    brief:
      "Recurring subscriptions can be difficult to track when renewal dates and costs are spread across different services. Build a small tracker that records subscriptions, calculates monthly and yearly spending, highlights upcoming renewals and groups spending by category. The project combines practical UI work with basic data handling and visualization without requiring a complex backend.",
    shortDescription:
      "Recurring subscriptions can be difficult to track when renewal dates and costs are spread across different services. Build a small tracker that records subscriptions, calculates monthly and yearly spending.",
    core: [
      "Add subscriptions (name, cost, cycle, renewal date)",
      "Monthly and yearly totals",
      "Upcoming renewals",
      "Categories",
      "Active and cancelled status",
      "Spending-by-category chart",
    ],
    stretch: ["CSV export", "Currency support"],
    techStack: [
      "Vanilla JS + Chart.js",
      "Flask + SQLite",
      "React + localStorage",
      "Java Swing/JavaFX",
      "Python Tkinter/PyQt",
    ],
    repository: "subscription-tracker",
  },
  {
    id: "b06",
    code: "B06",
    title: "CLI Task Manager",
    name: "CLI Task Manager",
    track: "beginner",
    teamSize: "Solo",
    level: "Starter",
    category: "Systems/DSA",
    domain: "Systems/DSA",
    difficulty: "Starter",
    brief:
      "A terminal application is a compact way to learn program structure, input handling and persistent data without first building a user interface. Create a task manager that supports the complete basic lifecycle of a task and saves the data so it remains available after the program closes. Stretch features add useful querying and editing behaviour while keeping the project fundamentally CLI-based.",
    shortDescription:
      "A terminal application is a compact way to learn program structure, input handling and persistent data without first building a user interface. Create a task manager that supports persistent storage.",
    core: ["Add, delete, list, mark complete", "Saved to JSON/CSV"],
    stretch: ["Priorities", "Due dates", "Search", "Sort", "Undo"],
    techStack: ["Python", "Java", "C++", "Go", "Node.js"],
    repository: "cli-task-manager",
  },
  {
    id: "b07",
    code: "B07",
    title: "Automated File Organizer",
    name: "Automated File Organizer",
    track: "beginner",
    teamSize: "Solo",
    level: "Starter",
    category: "Automation",
    domain: "Automation",
    difficulty: "Starter",
    brief:
      "Download folders quickly become difficult to navigate when files accumulate from different sources. Build a utility that inspects a selected folder and organizes files into category folders according to their extensions, while providing a safe dry-run mode and handling name collisions. The stretch work turns the one-off script into a more reusable automation tool.",
    shortDescription:
      "Build a utility that inspects a selected folder and organizes files into category folders according to their extensions, while providing a safe dry-run mode and handling name collisions.",
    core: [
      "Scan a folder and move files into category subfolders by extension",
      "Safe dry-run mode",
      "Name-collision handling",
    ],
    stretch: [
      "Undo",
      "Watch mode",
      "JSON/YAML rules",
      "Weekly log summary",
    ],
    techStack: [
      "Python (pathlib, watchdog)",
      "Bash/PowerShell",
      "Node.js",
      "Go",
      "Java NIO",
    ],
    repository: "file-organizer",
  },
  {
    id: "b08",
    code: "B08",
    title: "Image to ASCII",
    name: "Image to ASCII",
    track: "beginner",
    teamSize: "Solo",
    level: "Starter",
    category: "Systems/DSA",
    domain: "Systems/DSA",
    difficulty: "Starter",
    brief:
      "Images contain numeric pixel information, but they can also be represented using text characters with different visual densities. Build a converter that loads an image, reduces it to grayscale, resizes it appropriately for text characters and maps brightness to a character ramp. This makes image processing concepts tangible while still producing a visually interesting result.",
    shortDescription:
      "Build a converter that loads an image, reduces it to grayscale, resizes it appropriately for text characters and maps brightness to a character ramp.",
    core: [
      "Load image → grayscale → resize (compensate for tall characters) → map brightness to a character ramp → print or save",
    ],
    stretch: ["ANSI colour", "GIF/video", "Web version"],
    techStack: [
      "Python (Pillow)",
      "C++ (stb_image)",
      "Java (BufferedImage)",
      "JS Canvas",
      "Rust",
    ],
    repository: "image-to-ascii",
  },
  {
    id: "b09",
    code: "B09",
    title: "Expression Calculator",
    name: "Expression Calculator",
    track: "beginner",
    teamSize: "Solo",
    level: "Starter",
    category: "Systems/DSA",
    domain: "Systems/DSA",
    difficulty: "Starter",
    brief:
      "An expression such as (3+4)*2^2 requires the program to understand precedence, grouping and the order in which operations should be evaluated. Build a calculator that parses complete expressions instead of simply accepting one operation at a time. The project introduces stacks or a shunting-yard style parser while remaining small enough to understand from end to end.",
    shortDescription:
      "Build a calculator that parses complete expressions instead of simply accepting one operation at a time using a stack or shunting-yard style parser.",
    core: [
      "CLI/TUI/GUI calculator with precedence and parentheses (stack or shunting-yard)",
      "History",
      "Error handling",
    ],
    stretch: ["Scientific functions", "Variables", "Unit tests"],
    techStack: [
      "Python (Tkinter/Textual)",
      "Java (Swing/JavaFX)",
      "C/C++",
      "JS web UI",
    ],
    repository: "expression-calculator",
  },
  {
    id: "b10",
    code: "B10",
    title: "Terminal Clock & Timer Suite",
    name: "Terminal Clock & Timer Suite",
    track: "beginner",
    teamSize: "Solo",
    level: "Starter",
    category: "Automation/Dev Tools",
    domain: "Automation/Dev Tools",
    difficulty: "Starter",
    brief:
      "Instead of implementing only a clock, build a compact terminal utility that combines several time-related tools in one interface. The core should make it possible to view the current time, run a stopwatch, start a countdown/Pomodoro timer and set an alarm using keyboard controls. Stretch features can make the tool more configurable and useful without changing its basic architecture.",
    shortDescription:
      "Build a compact terminal utility that combines an ASCII-art digital clock, stopwatch, countdown/Pomodoro timer and alarm with keyboard controls.",
    core: [
      "ASCII-art digital clock + stopwatch + countdown/Pomodoro + alarm",
      "Keyboard controls",
    ],
    stretch: ["World clocks", "Themes", "Config file"],
    techStack: [
      "Bash",
      "PowerShell",
      "Python (curses/rich)",
      "Node (blessed)",
      "Go (bubbletea)",
    ],
    repository: "terminal-clock-suite",
  },
  {
    id: "b11",
    code: "B11",
    title: "Cipher Toolkit",
    name: "Cipher Toolkit",
    track: "beginner",
    teamSize: "Solo",
    level: "Starter",
    category: "Systems/DSA",
    domain: "Systems/DSA",
    difficulty: "Starter",
    brief:
      "Classical ciphers provide a practical way to understand substitution, transposition and the relationship between encryption and decryption. Build a small educational toolkit that can encrypt and decrypt text using at least three classical methods, with a consistent interface across the algorithms. Stretch work explores how simple statistical analysis can help break selected classical ciphers.",
    shortDescription:
      "Classical ciphers provide a practical way to understand substitution, transposition and encryption. Build a toolkit that can encrypt and decrypt text using classical ciphers.",
    core: [
      "Encrypt and decrypt with at least 3 ciphers (Caesar, Vigenère, Atbash, Rail Fence, Playfair, Affine)",
    ],
    stretch: [
      "Frequency analysis to auto-break Caesar/Vigenère",
      "File encryption",
    ],
    techStack: ["Python", "C/C++", "Java", "JS web"],
    repository: "cipher-toolkit",
  },
  {
    id: "b12",
    code: "B12",
    title: "Chat Word-Frequency Analyzer",
    name: "Chat Word-Frequency Analyzer",
    track: "beginner",
    teamSize: "Solo",
    level: "Core",
    category: "Automation/Data",
    domain: "Automation/Data",
    difficulty: "Core",
    brief:
      "Exported group-chat data can contain interesting patterns about vocabulary and participation without requiring access to live messages. Build a local analyzer that reads a user-owned or consented chat export, calculates word frequencies and shows the most-used words by participant while filtering common stopwords. Stretch analysis can reveal word pairs and time trends, while deliberately avoiding live message scraping.",
    shortDescription:
      "Build a local analyzer that reads an exported chat file, calculates word frequencies and shows the most-used words by participant while filtering common stopwords.",
    core: [
      "Import an exported chat file (WhatsApp .txt or Discord data export, own chats or with group consent)",
      "Count word frequency",
      "Top words per user",
      "Stopword filter",
    ],
    stretch: ["Word pairs", "Charts", "Time trends (No live message scraping)"],
    techStack: [
      "Python (pandas, matplotlib)",
      "Node + Chart.js",
      "Java streams",
      "Go",
    ],
    repository: "chat-word-analyzer",
  },
  {
    id: "b13",
    code: "B13",
    title: "Study Flashcards App",
    name: "Study Flashcards App",
    track: "beginner",
    teamSize: "Solo",
    level: "Core",
    category: "Mobile",
    domain: "Mobile",
    difficulty: "Core",
    brief:
      "Revision material is often scattered between notebooks and different applications, making repeated practice inconvenient. Build a focused flashcard application where users can create decks, review cards, quiz themselves and track known versus unknown material. The Leitner-box model gives the project a meaningful algorithmic component while local storage keeps the initial scope manageable.",
    shortDescription:
      "Build a focused flashcard application where users can create decks, review cards, quiz themselves and track known versus unknown material with Leitner-box spaced repetition.",
    core: [
      "Create decks and cards",
      "Flip and quiz mode",
      "Mark known and unknown",
      "Leitner-box spaced repetition",
      "Local storage",
    ],
    stretch: ["CSV import", "Streaks", "Stats"],
    techStack: [
      "Flutter + SQLite/Hive",
      "React Native (Expo)",
      "Kotlin + Room",
      "PWA (JS + IndexedDB)",
    ],
    repository: "flashcards-app",
  },
  {
    id: "b14",
    code: "B14",
    title: "Wordle Clone",
    name: "Wordle Clone",
    track: "beginner",
    teamSize: "Solo",
    level: "Starter",
    category: "Systems/DSA",
    domain: "Systems/DSA",
    difficulty: "Starter",
    brief:
      "A small game can still contain meaningful programming challenges when its rules and edge cases are implemented correctly. Build a Wordle-style game with a word list, input validation, six attempts and accurate feedback for repeated letters. Stretch work adds persistence and a solver/hint system, giving students a path from basic state management to algorithmic reasoning.",
    shortDescription:
      "Build a Wordle-style game with a word list, input validation, six attempts and accurate colour feedback for repeated letters.",
    core: [
      "Word list",
      "Guess validation",
      "Colour feedback (handle duplicate letters correctly)",
      "6 attempts",
      "Win/lose state",
    ],
    stretch: ["Daily word", "Stats persistence", "Hard mode", "Solver/hints"],
    techStack: ["Python", "Java", "C++", "Go", "JS web"],
    repository: "wordle-clone",
  },

  // ==========================================
  // INTERMEDIATE TRACK (20 PROJECTS · DUO)
  // ==========================================
  {
    id: "i01",
    code: "I01",
    title: "Community Exchange Platform",
    name: "Community Exchange Platform",
    track: "intermediate",
    teamSize: "Duo",
    category: "Web",
    domain: "Web",
    brief:
      "Useful items such as books, equipment and other belongings can remain unused while other students need them. Build a campus exchange platform focused on giving, exchanging or borrowing rather than conventional selling, with listings, profiles and a request lifecycle. The moderation/reporting flow adds a realistic piece of platform design without requiring a large marketplace.",
    shortDescription:
      "Build a campus exchange platform focused on giving, exchanging or borrowing with listings, user profiles, request lifecycle and moderation.",
    core: [
      "Give/Exchange/Borrow listings",
      "Search and filter",
      "User profiles",
      "Request → accept/decline → completed tracking",
      "Availability status",
      "Report and moderation queue",
    ],
    techStack: [
      "React + Express + PostgreSQL",
      "Django + PostgreSQL",
      "Spring Boot + React",
      "Next.js + Prisma",
      "Flask + Jinja",
    ],
    repository: "community-exchange",
  },
  {
    id: "i02",
    code: "I02",
    title: "Volunteer & Task Matching",
    name: "Volunteer & Task Matching",
    track: "intermediate",
    teamSize: "Duo",
    category: "Web",
    domain: "Web",
    brief:
      "Volunteer opportunities are often difficult to discover when the required skills and available time are unclear. Build a platform where organizers describe tasks and volunteers describe their skills and availability, then calculate a transparent rule-based match score. The application should also handle applications, decisions and task progress so that matching connects naturally to execution.",
    shortDescription:
      "Build a platform where organizers describe tasks and volunteers describe skills/availability, with rule-based match scoring and task progress tracking.",
    core: [
      "Organizers post tasks with required skills and time",
      "Volunteers build skill profiles",
      "Rule-based match score ranks volunteers",
      "Apply, accept, and reject workflow",
      "Task progress tracking",
    ],
    techStack: [
      "React + FastAPI + PostgreSQL",
      "Django",
      "Spring Boot + Thymeleaf",
      "Next.js + Supabase",
      "Express + MongoDB",
    ],
    repository: "volunteer-match",
  },
  {
    id: "i03",
    code: "I03",
    title: "Campus Event Aggregator",
    name: "Campus Event Aggregator",
    track: "intermediate",
    teamSize: "Duo",
    category: "Web",
    domain: "Web",
    brief:
      "Campus events are frequently announced through posters, social posts and separate club channels, making discovery fragmented. Build an event aggregator that brings event information into one searchable interface with date, category, club and venue filters. Registration, seat tracking, calendar export and reminders turn the catalogue into a usable event workflow.",
    shortDescription:
      "Bring campus event information into one searchable interface with filters, registration, live seat counts, calendar export (.ics) and reminders.",
    core: [
      "Create and browse events",
      "Filter by date, category, club, and venue",
      "Register",
      "Live seat count (no overbooking)",
      "Add-to-calendar (.ics)",
      "Reminders",
    ],
    techStack: [
      "Next.js + Prisma",
      "Django + SQLite",
      "Spring Boot + React",
      "Express + PostgreSQL",
      "Flask + HTMX",
    ],
    repository: "campus-event-hub",
  },
  {
    id: "i04",
    code: "I04",
    title: "StudySync: Peer Study Sessions",
    name: "StudySync: Peer Study Sessions",
    track: "intermediate",
    teamSize: "Duo",
    category: "Web",
    domain: "Web",
    brief:
      "Students may want to study together but have no simple way to discover peers working on the same subject at a suitable time. Build a session-based platform where users can create or join study sessions, search by subject and topic, and record attendance and feedback. The project is intentionally focused on coordinating sessions rather than trying to become a complete learning platform.",
    shortDescription:
      "Build a session-based platform where users create or join study sessions, search by subject/topic, and track attendance and feedback.",
    core: [
      "Create and join sessions (subject, topic, time, difficulty)",
      "Search and filter",
      "Meeting link or room details",
      "Attendance tracking",
      "Post-session feedback",
    ],
    techStack: [
      "React + Firebase",
      "Django",
      "Express + MongoDB",
      "Spring Boot",
      "Next.js + Supabase",
    ],
    repository: "studysync",
  },
  {
    id: "i05",
    code: "I05",
    title: "Personal Finance Dashboard",
    name: "Personal Finance Dashboard",
    track: "intermediate",
    teamSize: "Duo",
    category: "Web/Data",
    domain: "Web/Data",
    brief:
      "Small everyday expenses can be hard to understand when they are recorded inconsistently. Build a personal finance dashboard that organizes income and expenses into categories, tracks monthly budgets, highlights overspending and visualizes trends. CSV import gives the project a realistic data-ingestion component while keeping the core domain familiar.",
    shortDescription:
      "Build a personal finance dashboard that organizes income and expenses into categories, tracks monthly budgets, and highlights overspending.",
    core: [
      "Log income and expenses with categories",
      "Monthly budgets",
      "Overspending alerts",
      "Category and trend charts",
      "CSV import",
    ],
    techStack: [
      "React + Chart.js + Node",
      "Flask + Pandas + Plotly",
      "Streamlit",
      "Django",
      "Spring Boot + Thymeleaf",
    ],
    repository: "finance-dashboard",
  },
  {
    id: "i06",
    code: "I06",
    title: "QR-Based Attendance",
    name: "QR-Based Attendance",
    track: "intermediate",
    teamSize: "Duo",
    category: "Mobile/Web",
    domain: "Mobile/Web",
    brief:
      "Manual attendance consumes class time and a static attendance mechanism can be easy to misuse. Build a session-based attendance system where a faculty-created QR token changes periodically, expires with the session and produces per-student records. The stretch options introduce additional location/network checks, but the core remains centered on expiring tokens and reliable record keeping.",
    shortDescription:
      "Build a session-based attendance system with rotating QR tokens (refreshes every 10–30 s), instant student scan, session expiry and CSV export.",
    core: [
      "Faculty create a session with a rotating QR token (refreshes every 10–30 s)",
      "Students scan",
      "Session expires",
      "Per-student and per-class records",
      "CSV export",
    ],
    stretch: ["Geofence or Wi-Fi check"],
    techStack: [
      "Flutter + Firebase",
      "React Native + Node",
      "React + FastAPI (camera via browser)",
      "Kotlin + Spring Boot",
    ],
    repository: "qr-attendance",
  },
  {
    id: "i07",
    code: "I07",
    title: "Feedback Sentiment Dashboard",
    name: "Feedback Sentiment Dashboard",
    track: "intermediate",
    teamSize: "Duo",
    category: "AI/ML",
    domain: "AI/ML",
    brief:
      "Feedback forms often produce a large amount of text that is difficult to review consistently. Build a dashboard that accepts feedback as CSV data, assigns positive/neutral/negative sentiment, surfaces keywords or themes and lets users compare results across events. The project is about applying a practical NLP baseline and presenting its output clearly rather than training a large model from scratch.",
    shortDescription:
      "Build a dashboard that accepts feedback as CSV data, classifies positive/neutral/negative sentiment, extracts keywords, and compares events.",
    core: [
      "Upload CSV",
      "Classify positive/neutral/negative sentiment",
      "Extract keywords and themes",
      "Dashboard with filters",
      "Compare events",
    ],
    techStack: [
      "Python (pandas, VADER/TextBlob/HF) + Streamlit",
      "FastAPI + React",
      "Flask + Chart.js",
      "Client-side JS sentiment library",
    ],
    repository: "feedback-sentiment-dashboard",
  },
  {
    id: "i08",
    code: "I08",
    title: "Campus FAQ Chatbot",
    name: "Campus FAQ Chatbot",
    track: "intermediate",
    teamSize: "Duo",
    category: "AI/ML",
    domain: "AI/ML",
    brief:
      "Students repeatedly ask similar questions about campus rules, fees and schedules, while the answers may already exist in FAQs or documents. Build a retrieval-oriented FAQ assistant where administrators provide the knowledge base and users ask questions in natural language. The important learning component is the retrieval and feedback loop: unanswered questions should be surfaced for administrators, and the baseline must work without a paid API.",
    shortDescription:
      "Build a retrieval-oriented FAQ assistant where admins upload knowledge docs, students ask in natural language, and unanswered questions are flagged.",
    core: [
      "Admins upload FAQs and documents",
      "Students ask in natural language",
      "Best answer by similarity (TF-IDF → embeddings)",
      "Unmatched questions flagged for admins",
      "Admin edits (Baseline must work without a paid API)",
    ],
    techStack: [
      "Python (scikit-learn / sentence-transformers) + FastAPI + React",
      "Streamlit",
      "Node + embeddings API",
      "Optional LLM RAG on top",
    ],
    repository: "campus-faq-bot",
  },
  {
    id: "i09",
    code: "I09",
    title: "Plant Disease Detector",
    name: "Plant Disease Detector",
    track: "intermediate",
    teamSize: "Duo",
    category: "AI/ML",
    domain: "AI/ML",
    brief:
      "Plant disease identification is a useful computer-vision problem because the input is visual and the output can be communicated clearly to a user. Build an application that accepts a leaf image, runs a classifier and reports the predicted plant, disease and confidence while allowing uncertain cases to be treated as such. The provided PlantVillage dataset is a starting point, and its laboratory-image limitations should be documented rather than hidden.",
    shortDescription:
      "Build an application that accepts a leaf image, runs a classifier and reports the predicted plant, disease, confidence and scan history.",
    core: [
      "Upload leaf photo",
      "Classifier returns plant + disease + confidence",
      'A "not sure" threshold',
      "Treatment tips",
      "Scan history (Dataset: PlantVillage — note its lab-photo limits in the README)",
    ],
    techStack: [
      "Python (TensorFlow/PyTorch transfer learning) + FastAPI/Flask",
      "TF.js in-browser",
      "React frontend",
    ],
    repository: "plant-disease-detector",
  },
  {
    id: "i10",
    code: "I10",
    title: "Object Counter for Images & Videos",
    name: "Object Counter for Images & Videos",
    track: "intermediate",
    teamSize: "Duo",
    category: "AI/ML",
    domain: "AI/ML",
    brief:
      "Counting objects manually in images or videos becomes tedious when many instances are present. Build a visual application that accepts an image or video, runs a pretrained object detector, lets the user choose classes of interest and displays both detections and counts. The focus is on integrating a pretrained model into a usable application rather than training a detector from zero.",
    shortDescription:
      "Build a visual application that accepts an image or video, runs a pretrained object detector, draws bounding boxes and saves counts.",
    core: [
      "Upload image/video",
      "Pretrained detector counts chosen classes",
      "Boxes and labels drawn",
      "Class selector",
      "Saved counts in table/chart",
    ],
    techStack: [
      "Python (OpenCV + YOLO/SSD) + Streamlit/Flask",
      "TF.js COCO-SSD",
      "ONNX Runtime Web",
    ],
    repository: "object-counter",
  },
  {
    id: "i11",
    code: "I11",
    title: "Gesture-Controlled Presentation Tool",
    name: "Gesture-Controlled Presentation Tool",
    track: "intermediate",
    teamSize: "Duo",
    category: "AI/ML",
    domain: "AI/ML",
    brief:
      "Presenters are often forced to stay near their laptop because slide navigation normally depends on a keyboard or clicker. Build a webcam-driven presentation controller that recognizes a small set of hand gestures and maps them to actions such as next, previous, pointer and erase. A live recognition preview and sensitivity controls make the system easier to test and demonstrate.",
    shortDescription:
      "Build a webcam-driven presentation controller that recognizes hand gestures and maps them to actions such as next, previous, pointer and erase.",
    core: [
      "Webcam hand tracking",
      "Gestures → next/previous/pointer/erase",
      "Upload slides (images/PDF)",
      "Live preview of the recognized gesture",
      "Adjustable sensitivity and delay",
    ],
    techStack: [
      "Python (OpenCV, MediaPipe, PyAutoGUI)",
      "JS (MediaPipe Web + reveal.js)",
      "Electron wrapper",
    ],
    repository: "gesture-slides",
  },
  {
    id: "i12",
    code: "I12",
    title: "Color Palette Generator (matugen-style)",
    name: "Color Palette Generator (matugen-style)",
    track: "intermediate",
    teamSize: "Duo",
    category: "Systems/DSA",
    domain: "Systems/DSA",
    brief:
      "Generating a palette from an image is more useful when the resulting colours have meaningful UI roles instead of being a random list of dominant pixels. Build a tool that extracts dominant colours, maps them into roles such as primary, surface and accent, checks contrast and produces light/dark variants. The result can then be exported in formats useful for CSS, JSON or terminal/editor themes.",
    shortDescription:
      "Extract dominant colours from images, map them into UI roles (primary, surface, accent), check WCAG contrast and export light/dark palettes.",
    core: [
      "Image → dominant colours (k-means / median-cut) → role-based palette (primary, surface, on-surface, accent)",
      "WCAG contrast checks",
      "Light and dark variants",
      "Export templates (CSS vars, JSON, terminal/editor themes)",
    ],
    techStack: ["Python (Pillow, NumPy)", "Rust", "JS Canvas", "Go", "C++"],
    repository: "palette-forge",
  },
  {
    id: "i13",
    code: "I13",
    title: "Smart Log Analyzer CLI",
    name: "Smart Log Analyzer CLI",
    track: "intermediate",
    teamSize: "Duo",
    category: "Automation/Dev Tools",
    domain: "Automation/Dev Tools",
    brief:
      "Large log files can contain repeated errors and useful timing information, but manually scanning them is slow. Build a streaming command-line analyzer that recognizes error patterns, groups repeated messages, summarizes levels and time windows, and produces a readable report. The project teaches file streaming, pattern matching and basic aggregation without requiring a full observability platform.",
    shortDescription:
      "Build a streaming command-line analyzer that recognizes error patterns, groups repeated messages, summarizes time windows and produces a readable report.",
    core: [
      "Read large logs by streaming",
      "Regex-flag errors",
      "Count by level",
      "Top repeating errors",
      "Time-window stats",
      "Markdown/HTML report",
    ],
    techStack: ["Python", "Go", "Java", "Node", "Rust (only if experienced)"],
    repository: "log-analyzer-cli",
  },
  {
    id: "i14",
    code: "I14",
    title: "Interactive Git Visualizer",
    name: "Interactive Git Visualizer",
    track: "intermediate",
    teamSize: "Duo",
    category: "Web/Dev Tools",
    domain: "Web/Dev Tools",
    brief:
      "Git becomes easier to understand when its branches, HEAD movement and merges can be seen rather than only read about. Build a simulated Git environment that supports core operations such as commit, branch, checkout and merge, and represents the resulting commit history as a graph. Stretch work can extend the simulation to rebase/reset and guided learning interactions.",
    shortDescription:
      "Build a simulated Git playground supporting commit, branch, checkout, and merge with an animated commit history DAG in memory.",
    core: [
      "Simulated terminal supporting commit, branch, checkout, merge",
      "Commit DAG modelled in memory",
      "Animated graph",
    ],
    stretch: ["Rebase", "Reset", "Guided lessons"],
    techStack: [
      "Vanilla JS + SVG/Canvas",
      "React + D3",
      "Python (pygame/Tkinter)",
      "Java Swing",
    ],
    repository: "git-visualizer",
  },
  {
    id: "i15",
    code: "I15",
    title: "Library Management REST API",
    name: "Library Management REST API",
    track: "intermediate",
    teamSize: "Duo",
    category: "Backend",
    domain: "Backend",
    brief:
      "A library can have several clients—web, mobile or other tools—that need a consistent way to access its data. Build a REST API covering books, members, borrowing, returns, due dates and fines, with authentication, roles, validation, pagination and documentation. Automated tests and Docker make the project resemble a small production-style backend rather than a collection of endpoints.",
    shortDescription:
      "Build a production-style REST API covering books, members, borrowing, returns, due dates and fines with JWT auth, OpenAPI docs, and Docker.",
    core: [
      "Books, members, borrow/return, due dates, fines",
      "JWT auth + roles",
      "Pagination and filtering",
      "Validation",
      "OpenAPI/Swagger docs",
      "Automated tests",
      "Docker",
    ],
    techStack: [
      "Spring Boot + PostgreSQL",
      "FastAPI + SQLModel",
      "Express + Prisma",
      "Go (Gin/Fiber)",
      "Django REST",
    ],
    repository: "library-api",
  },
  {
    id: "i16",
    code: "I16",
    title: "URL Shortener with Analytics",
    name: "URL Shortener with Analytics",
    track: "intermediate",
    teamSize: "Duo",
    category: "Backend",
    domain: "Backend",
    brief:
      "Long URLs are inconvenient to share, while creators often want to know how links are being used. Build a URL-shortening service that creates compact codes, redirects users, supports custom aliases and expiry, and records useful click information. Rate limiting and the optional Redis stretch introduce realistic backend concerns while keeping the core service understandable.",
    shortDescription:
      "Build a URL-shortening service with Base62 codes, custom aliases, expiry, click analytics (time, referrer, device), rate limiting and QR codes.",
    core: [
      "Base62 short codes",
      "Redirect",
      "Custom alias",
      "Expiry",
      "Click analytics (time, referrer, device)",
      "Rate limiting",
      "QR code",
    ],
    stretch: ["Redis cache"],
    techStack: [
      "Go",
      "Spring Boot",
      "Node/Express + Redis",
      "FastAPI",
    ],
    repository: "url-shortener",
  },
  {
    id: "i17",
    code: "I17",
    title: "Habit & Streak Tracker",
    name: "Habit & Streak Tracker",
    track: "intermediate",
    teamSize: "Duo",
    category: "Mobile",
    domain: "Mobile",
    brief:
      "Many habit applications add unnecessary complexity or put useful features behind paid tiers. Build a focused tracker for creating habits, recording daily check-ins, calculating streaks and showing weekly progress, with local notifications and local persistence. Stretch work can add cloud backup or widgets after the core offline experience is reliable.",
    shortDescription:
      "Build a focused tracker for habits, daily check-ins, streak calculation, local notifications, weekly charts and local persistence.",
    core: [
      "Habits management",
      "Daily check-ins",
      "Streaks calculation",
      "Local notifications",
      "Weekly charts",
      "Local database",
    ],
    stretch: ["Cloud backup", "Widgets"],
    techStack: [
      "Flutter + SQLite",
      "React Native (Expo)",
      "Kotlin + Room",
    ],
    repository: "habit-streak-app",
  },
  {
    id: "i18",
    code: "I18",
    title: "Static Site Generator",
    name: "Static Site Generator",
    track: "intermediate",
    teamSize: "Duo",
    category: "Automation/Dev Tools",
    domain: "Automation/Dev Tools",
    brief:
      "Static site generators are a useful way to understand how source content becomes a finished website. Build a small generator that reads Markdown, parses the supported structures, applies front matter and templates, creates tag indexes and exposes the process through a CLI. Stretch features can add live reload or RSS without changing the central Markdown-to-HTML pipeline.",
    shortDescription:
      "Build a Markdown-to-HTML static site generator with front matter, templates, tag indexes and a CLI build tool.",
    core: [
      "Markdown → HTML parser (headings, lists, links, code)",
      "Front matter",
      "Templates and layouts",
      "Tag index",
      "Build CLI",
    ],
    stretch: ["Live reload", "RSS"],
    techStack: ["Python", "Node", "Go", "Rust", "Java"],
    repository: "markdown-site-builder",
  },
  {
    id: "i19",
    code: "I19",
    title: "Maze & Pathfinding Playground",
    name: "Maze & Pathfinding Playground",
    track: "intermediate",
    teamSize: "Duo",
    category: "Systems/DSA",
    domain: "Systems/DSA",
    brief:
      "Graph algorithms can be difficult to understand when their execution is invisible. Build a visual playground that generates mazes and then runs BFS, DFS, Dijkstra and A* step by step, showing the path and allowing the algorithms to be compared by explored nodes and time. The stretch features make the playground interactive without changing its core educational purpose.",
    shortDescription:
      "Build a visual playground that generates mazes and runs BFS, DFS, Dijkstra and A* step by step, comparing nodes explored and time.",
    core: [
      "Generate mazes (DFS/Prim)",
      "Solve with BFS/DFS/Dijkstra/A*",
      "Step-by-step visualization",
      "Compare nodes explored and time",
    ],
    stretch: ["Weighted terrain", "Drawable walls"],
    techStack: [
      "JS Canvas",
      "Python pygame",
      "Java JavaFX",
      "C++ SFML",
      "React",
    ],
    repository: "maze-pathfinder",
  },
  {
    id: "i20",
    code: "I20",
    title: "Mini Redis (Key-Value Store)",
    name: "Mini Redis (Key-Value Store)",
    track: "intermediate",
    teamSize: "Duo",
    category: "Systems/Backend",
    domain: "Systems/Backend",
    brief:
      "A key-value store looks simple from the outside, but implementing one exposes networking, data structures, persistence and concurrency concepts. Build a small TCP server supporting the specified commands, TTL expiry, persistence and multiple clients, along with a CLI client. Stretch work can explore pub/sub or RESP compatibility, but the core should remain a coherent miniature storage server.",
    shortDescription:
      "Build an in-memory TCP key-value server supporting SET/GET/DEL/EXPIRE/INCR, TTL expiry, persistence, concurrent clients and a CLI.",
    core: [
      "TCP server with SET/GET/DEL/EXPIRE/INCR",
      "TTL expiry",
      "Persistence (append-only log or snapshot)",
      "Concurrent clients",
      "CLI client",
    ],
    stretch: ["Pub/sub", "RESP compatibility"],
    techStack: [
      "Go",
      "Java (sockets/NIO)",
      "Python (asyncio)",
      "C++",
      "Rust",
    ],
    repository: "mini-redis",
  },

  // ==========================================
  // ADVANCED TRACK (8 PROJECTS · SQUAD OF 3–4)
  // ==========================================
  {
    id: "a01",
    code: "A01",
    title: "Skill Gap & Learning Roadmap Platform",
    name: "Skill Gap & Learning Roadmap Platform",
    track: "advanced",
    teamSize: "Squad of 3–4",
    category: "Web/Full Stack",
    domain: "Web/Full Stack",
    brief:
      "Students often know the role they want to pursue but cannot clearly see which skills they already have and which prerequisites they are missing. Build a platform that represents skills as a graph, collects self-assessments and quizzes, computes gaps and turns prerequisite relationships into a learning roadmap. Progress, analytics and rule-based recommendations complete the experience without requiring a black-box recommendation model.",
    shortDescription:
      "Build a platform that maps skills as a graph, computes skill gaps through self-assessments and quizzes, and generates roadmaps via topological sort.",
    core: [
      "Role → skill graph (seeded dataset)",
      "Self-assessment and quizzes",
      "Gap computation",
      "Roadmap via prerequisite graph (topological sort)",
      "Milestones",
      "Progress tracking",
      "Analytics",
      "Rule-based resource recommendations",
    ],
    techStack: [
      "React/Next.js + Spring Boot/FastAPI/NestJS + PostgreSQL",
      "Vue + Django",
    ],
    repository: "skillpath-platform",
  },
  {
    id: "a02",
    code: "A02",
    title: "Appointment & Resource Booking System",
    name: "Appointment & Resource Booking System",
    track: "advanced",
    teamSize: "Squad of 3–4",
    category: "Web/Backend",
    domain: "Web/Backend",
    brief:
      "Booking systems become difficult when multiple providers, resources and users compete for overlapping time slots. Build a scheduling application with accounts, roles, provider availability and conflict-free booking, including cancellation and rescheduling. The core engineering challenge is preventing double bookings reliably through interval checks and database transactions, including under concurrent requests.",
    shortDescription:
      "Build a conflict-free scheduling engine with provider availability, interval conflict prevention via DB transactions, and cancellation/rescheduling.",
    core: [
      "Accounts and roles",
      "Provider profiles",
      "Availability rules",
      "Booking with conflict prevention (interval checks + DB transactions, tested under concurrent requests)",
      "Cancel and reschedule",
      "Notifications",
      "Admin dashboard",
    ],
    techStack: [
      "Spring Boot + PostgreSQL + React",
      "FastAPI + PostgreSQL + Next.js",
      "NestJS + Prisma",
    ],
    repository: "booking-engine",
  },
  {
    id: "a03",
    code: "A03",
    title: "Mini Online Judge",
    name: "Mini Online Judge",
    track: "advanced",
    teamSize: "Squad of 3–4",
    category: "Backend/Systems",
    domain: "Backend/Systems",
    brief:
      "An online judge combines several systems problems: accepting source code, executing it safely, enforcing resource limits and returning deterministic verdicts. Build a platform with a problem set, submissions in the specified languages, isolated Docker execution, hidden tests and a leaderboard. Submitted code must never execute directly on the host machine.",
    shortDescription:
      "Build an online judge with sandboxed Docker code execution against hidden tests, time/memory limits, verdicts (AC/WA/TLE/RE) and leaderboards.",
    core: [
      "Problem set",
      "Code submission (Python/C++/Java)",
      "Sandboxed execution (Docker, time and memory limits) against hidden tests",
      "Verdicts (AC/WA/TLE/RE)",
      "Leaderboard (Never run submitted code on the host)",
    ],
    techStack: [
      "React + FastAPI/Spring Boot + Docker + PostgreSQL + Redis queue",
      "Go runner",
    ],
    repository: "mini-judge",
  },
  {
    id: "a04",
    code: "A04",
    title: "Real-time Collaborative Workspace",
    name: "Real-time Collaborative Workspace",
    track: "advanced",
    teamSize: "Squad of 3–4",
    category: "Web/Systems",
    domain: "Web/Systems",
    brief:
      "Collaborative editing requires multiple users to see shared state while changes arrive at nearly the same time. Build a shared notes or whiteboard workspace with rooms, authentication, presence, WebSocket synchronization, persistence and version history. The stretch direction explores stronger conflict-resolution techniques such as OT or CRDTs.",
    shortDescription:
      "Build a shared notes or whiteboard workspace with WebSocket synchronization, rooms, user presence, persistence and version history.",
    core: [
      "Shared notes or whiteboard",
      "WebSocket synchronization",
      "Presence indicator",
      "Auth and rooms",
      "Persistence and version history",
    ],
    stretch: ["OT/CRDT instead of last-write-wins"],
    techStack: [
      "Node + Socket.io + React",
      "Go + WebSocket",
      "Spring Boot + STOMP",
      "Yjs",
    ],
    repository: "collab-workspace",
  },
  {
    id: "a05",
    code: "A05",
    title: "Campus Search Engine",
    name: "Campus Search Engine",
    track: "advanced",
    teamSize: "Squad of 3–4",
    category: "Backend/DSA",
    domain: "Backend/DSA",
    brief:
      "Campus information becomes difficult to search when documents and pages are spread across different locations and contain different wording. Build a search engine that ingests HTML/PDF content, tokenizes it, creates an inverted index and ranks results using TF-IDF or BM25, with snippets and typo tolerance. The project emphasizes understanding search internals; external search engines are only a comparison baseline.",
    shortDescription:
      "Build a search engine from scratch: ingest HTML/PDF, tokenizer, self-built inverted index, TF-IDF/BM25 ranking, snippets and typo tolerance.",
    core: [
      "Ingest HTML/PDF",
      "Tokenizer",
      "Self-built inverted index",
      "TF-IDF/BM25 ranking",
      "Snippets",
      "Typo tolerance",
      "Search UI",
      "Benchmark (Elasticsearch/Meilisearch only as a comparison baseline)",
    ],
    techStack: [
      "Python",
      "Java",
      "Go",
      "Rust, with any frontend",
    ],
    repository: "campus-search-engine",
  },
  {
    id: "a06",
    code: "A06",
    title: "Auto Timetable Scheduler",
    name: "Auto Timetable Scheduler",
    track: "advanced",
    teamSize: "Squad of 3–4",
    category: "Algorithms/Web",
    domain: "Algorithms/Web",
    brief:
      "Timetabling is a constraint problem because courses, rooms, faculty and time slots must satisfy several conditions simultaneously. Build a scheduler that accepts these inputs, generates a conflict-free timetable using a constraint-solving approach and explains constraints that could not be satisfied. An editable grid and PDF/ICS export turn the algorithm into a usable application.",
    shortDescription:
      "Constraint-based timetable scheduler using backtracking/graph colouring/CP-SAT with clashing checks, editable grid and PDF/ICS export.",
    core: [
      "Input courses, faculty, rooms, slots",
      "Constraints (no clashes, capacity, preferences)",
      "Generate with backtracking / graph colouring / CP-SAT",
      "Explain unsatisfied constraints",
      "Editable grid",
      "Export PDF/ICS",
    ],
    techStack: [
      "Python + OR-Tools",
      "Java",
      "C++ solver + web UI",
      "React frontend",
    ],
    repository: "timetable-scheduler",
  },
  {
    id: "a07",
    code: "A07",
    title: "Distributed Task Queue & Dashboard",
    name: "Distributed Task Queue & Dashboard",
    track: "advanced",
    teamSize: "Squad of 3–4",
    category: "Backend/Systems",
    domain: "Backend/Systems",
    brief:
      "Background jobs become difficult to operate when failures, retries, priorities and delayed execution are not visible. Build a task queue with producers and workers, retry/backoff behaviour, priorities, scheduled jobs, a dead-letter queue and a live monitoring dashboard. The implementation may use Redis as a backing system or explore a broker of its own.",
    shortDescription:
      "Build a distributed task queue with producers, workers, retries with backoff, priorities, DLQ and a live monitoring dashboard.",
    core: [
      "Producers and workers",
      "Retries with backoff",
      "Priorities",
      "Scheduled jobs",
      "Dead-letter queue",
      "Live dashboard (Redis-backed or own broker)",
    ],
    techStack: [
      "Go",
      "Python + Redis",
      "Java (Spring) + Redis",
      "Node",
    ],
    repository: "taskqueue-dashboard",
  },
  {
    id: "a08",
    code: "A08",
    title: "Offline-first Campus Companion App",
    name: "Offline-first Campus Companion App",
    track: "advanced",
    teamSize: "Squad of 3–4",
    category: "Mobile + Backend",
    domain: "Mobile + Backend",
    brief:
      "Campus information should remain useful even when a mobile device temporarily loses connectivity. Build an offline-first companion where important data is stored locally, the application works without a network connection and changes synchronize when connectivity returns. Conflict resolution, push notifications and the backend API make synchronization a central engineering problem rather than an afterthought.",
    shortDescription:
      "Build an offline-first mobile app with local-first database, full offline functionality, reconnect sync, conflict resolution and push notifications.",
    core: [
      "Local-first DB (notes, timetable, announcements)",
      "Full offline use",
      "Sync on reconnect",
      "Conflict resolution",
      "Push notifications",
      "Backend API",
    ],
    techStack: [
      "Flutter + SQLite + FastAPI",
      "React Native + WatermelonDB + Node",
      "Kotlin Room + Spring Boot",
    ],
    repository: "campus-companion",
  },
];

// Dynamically derived catalogue metadata
export const CATALOGUE_STATS = {
  total: PROJECTS.length,
  beginner: PROJECTS.filter((p) => p.track === "beginner").length,
  intermediate: PROJECTS.filter((p) => p.track === "intermediate").length,
  advanced: PROJECTS.filter((p) => p.track === "advanced").length,
};

// Distinct categories derived safely from the dataset
export const ALL_CATEGORIES = [
  "ALL",
  ...Array.from(new Set(PROJECTS.map((p) => p.category))),
];

// Distinct levels derived safely from the dataset
export const ALL_LEVELS = [
  "ALL",
  ...Array.from(
    new Set(
      PROJECTS.map((p) => p.level).filter(
        (level): level is ProjectLevel => level !== undefined
      )
    )
  ),
];

// Strictly data-driven helpers for dedicated track pages
export function getProjectsByTrack(track: "beginner" | "intermediate" | "advanced"): Project[] {
  return PROJECTS.filter((p) => p.track === track);
}

export function getTrackCategories(track: "beginner" | "intermediate" | "advanced"): string[] {
  const trackProjects = getProjectsByTrack(track);
  return Array.from(new Set(trackProjects.map((p) => p.category))).sort();
}

export function getTrackLevels(track: "beginner" | "intermediate" | "advanced"): ProjectLevel[] {
  const trackProjects = getProjectsByTrack(track);
  const levels = Array.from(
    new Set(
      trackProjects
        .map((p) => p.level)
        .filter((l): l is ProjectLevel => l !== undefined)
    )
  );
  return levels.sort();
}

// Runtime integrity verification (guarantees unique IDs, codes, and valid fields)
if (process.env.NODE_ENV !== "production") {
  const ids = new Set<string>();
  const codes = new Set<string>();
  for (const p of PROJECTS) {
    if (ids.has(p.id)) {
      console.error(`Duplicate project id: ${p.id}`);
    }
    ids.add(p.id);

    if (codes.has(p.code)) {
      console.error(`Duplicate project code: ${p.code}`);
    }
    codes.add(p.code);

    if (!p.title || !p.brief || p.techStack.length === 0 || p.core.length === 0) {
      console.error(`Incomplete project data: ${p.id} - ${p.title}`);
    }
  }
}
