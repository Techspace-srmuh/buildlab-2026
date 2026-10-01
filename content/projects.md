# TechSpace BuildLab ’26 — Problem Statement Catalogue

Authoritative repository of all 42 problem statements for BuildLab ’26.
42 project ideas · Beginner 14 · Intermediate 20 · Advanced 8.

---

# B01 — Campus Lost & Found

- Track: Beginner
- Team: Solo
- Level: Core
- Category: Web

## Brief

Students frequently lose or find belongings around campus, but information about those items is usually scattered across conversations and informal notices. The project turns that scattered information into a single searchable board where a student can report an item, discover possible matches, and record when an item has been claimed. The emphasis is on a clear end-to-end flow rather than a large or complicated application.

## Core

- Report lost/found items (name, category, location, date, description)
- Search and filter
- Mark as claimed

## Stretch

- Image upload
- Admin approval

## Tech Stack

### Option 1
HTML/CSS/JS + localStorage

### Option 2
Flask or FastAPI + SQLite

### Option 3
Node/Express + MongoDB

### Option 4
Spring Boot + Thymeleaf + H2

### Option 5
React + Firebase

## Repository

lost-and-found-hub

---

# B02 — Campus Resource Hub

- Track: Beginner
- Team: Solo
- Level: Core
- Category: Web

## Brief

Study resources are often spread across chats, cloud folders and different websites, making useful material difficult to find later. Build a small searchable resource hub organized around subjects and semesters, where students can add useful links or notes and quickly narrow results using tags. The project should feel like a focused campus knowledge index rather than a generic file-sharing system.

## Core

- Browse by subject/semester
- Add link/note entries
- Search and filter by tag

## Stretch

- Bookmarks
- Upvotes
- Broken-link checker (Links only; no uploading copyrighted material)

## Tech Stack

### Option 1
Vanilla JS + JSON

### Option 2
Django + SQLite

### Option 3
Express + SQLite

### Option 4
React + Supabase

### Option 5
Spring Boot + H2

## Repository

campus-resource-hub

---

# B03 — Student Ideas & Suggestions Portal

- Track: Beginner
- Team: Solo
- Level: Core
- Category: Web

## Brief

Students often have useful ideas for improving campus life, but suggestions can disappear inside chats or isolated forms. Build a simple public-facing ideas board that lets students submit, categorize, discover and upvote suggestions while showing what stage each idea has reached. The status flow should make it possible to see whether an idea is still being reviewed or has moved toward implementation.

## Core

- Submit ideas
- Categorize
- Browse
- Upvote (one vote per user)
- Status flow: Submitted → Under Review → Accepted/Implemented

## Stretch

- Admin panel
- Comments

## Tech Stack

### Option 1
Vanilla JS + localStorage

### Option 2
Flask + SQLite

### Option 3
Node/Express + PostgreSQL

### Option 4
React + Firebase

### Option 5
Spring Boot + H2

## Repository

campus-ideas-portal

---

# B04 — Personal Portfolio & Blog

- Track: Beginner
- Team: Solo
- Level: Starter
- Category: Web

## Brief

A first portfolio is an opportunity to practise the fundamentals of building and presenting a real web project. Create a responsive personal site with a clear introduction, projects section and working contact flow, then use the stretch work to add a small content system such as a Markdown/JSON blog. The result should be a usable public portfolio, not just a static landing page.

## Core

- Responsive site with About, Projects gallery and a working contact form via EmailJS/Formspree (public keys only, never secret keys in frontend code)

## Stretch

- Markdown/JSON blog
- Dark mode
- Lighthouse score >= 90

## Tech Stack

### Option 1
HTML/CSS/vanilla JS

### Option 2
Tailwind + JS

### Option 3
Astro or Eleventy

### Option 4
React/Next.js

## Repository

portfolio-and-blog

---

# B05 — Subscription Tracker

- Track: Beginner
- Team: Solo
- Level: Core
- Category: Web / Desktop

## Brief

Recurring subscriptions can be difficult to track when renewal dates and costs are spread across different services. Build a small tracker that records subscriptions, calculates monthly and yearly spending, highlights upcoming renewals and groups spending by category. The project combines practical UI work with basic data handling and visualization without requiring a complex backend.

## Core

- Add subscriptions (name, cost, cycle, renewal date)
- Monthly and yearly totals
- Upcoming renewals
- Categories
- Active and cancelled status
- Spending-by-category chart

## Stretch

- CSV export
- Currency support

## Tech Stack

### Option 1
Vanilla JS + Chart.js

### Option 2
Flask + SQLite

### Option 3
React + localStorage

### Option 4
Java Swing/JavaFX

### Option 5
Python Tkinter/PyQt

## Repository

subscription-tracker

---

# B06 — CLI Task Manager

- Track: Beginner
- Team: Solo
- Level: Starter
- Category: Systems/DSA

## Brief

A terminal application is a compact way to learn program structure, input handling and persistent data without first building a user interface. Create a task manager that supports the complete basic lifecycle of a task and saves the data so it remains available after the program closes. Stretch features add useful querying and editing behaviour while keeping the project fundamentally CLI-based.

## Core

- Add, delete, list, mark complete
- Saved to JSON/CSV

## Stretch

- Priorities
- Due dates
- Search
- Sort
- Undo

## Tech Stack

### Option 1
Python

### Option 2
Java

### Option 3
C++

### Option 4
Go

### Option 5
Node.js

## Repository

cli-task-manager

---

# B07 — Automated File Organizer

- Track: Beginner
- Team: Solo
- Level: Starter
- Category: Automation

## Brief

Download folders quickly become difficult to navigate when files accumulate from different sources. Build a utility that inspects a selected folder and organizes files into category folders according to their extensions, while providing a safe dry-run mode and handling name collisions. The stretch work turns the one-off script into a more reusable automation tool.

## Core

- Scan a folder and move files into category subfolders by extension
- Safe dry-run mode
- Name-collision handling

## Stretch

- Undo
- Watch mode
- JSON/YAML rules
- Weekly log summary

## Tech Stack

### Option 1
Python (pathlib, watchdog)

### Option 2
Bash/PowerShell

### Option 3
Node.js

### Option 4
Go

### Option 5
Java NIO

## Repository

file-organizer

---

# B08 — Image to ASCII

- Track: Beginner
- Team: Solo
- Level: Starter
- Category: Systems/DSA

## Brief

Images contain numeric pixel information, but they can also be represented using text characters with different visual densities. Build a converter that loads an image, reduces it to grayscale, resizes it appropriately for text characters and maps brightness to a character ramp. This makes image processing concepts tangible while still producing a visually interesting result.

## Core

- Load image → grayscale → resize (compensate for tall characters) → map brightness to a character ramp → print or save

## Stretch

- ANSI colour
- GIF/video
- Web version

## Tech Stack

### Option 1
Python (Pillow)

### Option 2
C++ (stb_image)

### Option 3
Java (BufferedImage)

### Option 4
JS Canvas

### Option 5
Rust

## Repository

image-to-ascii

---

# B09 — Expression Calculator

- Track: Beginner
- Team: Solo
- Level: Starter
- Category: Systems/DSA

## Brief

An expression such as (3+4)*2^2 requires the program to understand precedence, grouping and the order in which operations should be evaluated. Build a calculator that parses complete expressions instead of simply accepting one operation at a time. The project introduces stacks or a shunting-yard style parser while remaining small enough to understand from end to end.

## Core

- CLI/TUI/GUI calculator with precedence and parentheses (stack or shunting-yard)
- History
- Error handling

## Stretch

- Scientific functions
- Variables
- Unit tests

## Tech Stack

### Option 1
Python (Tkinter/Textual)

### Option 2
Java (Swing/JavaFX)

### Option 3
C/C++

### Option 4
JS web UI

## Repository

expression-calculator

---

# B10 — Terminal Clock & Timer Suite

- Track: Beginner
- Team: Solo
- Level: Starter
- Category: Automation/Dev Tools

## Brief

Instead of implementing only a clock, build a compact terminal utility that combines several time-related tools in one interface. The core should make it possible to view the current time, run a stopwatch, start a countdown/Pomodoro timer and set an alarm using keyboard controls. Stretch features can make the tool more configurable and useful without changing its basic architecture.

## Core

- ASCII-art digital clock + stopwatch + countdown/Pomodoro + alarm
- Keyboard controls

## Stretch

- World clocks
- Themes
- Config file

## Tech Stack

### Option 1
Bash

### Option 2
PowerShell

### Option 3
Python (curses/rich)

### Option 4
Node (blessed)

### Option 5
Go (bubbletea)

## Repository

terminal-clock-suite

---

# B11 — Cipher Toolkit

- Track: Beginner
- Team: Solo
- Level: Starter
- Category: Systems/DSA

## Brief

Classical ciphers provide a practical way to understand substitution, transposition and the relationship between encryption and decryption. Build a small educational toolkit that can encrypt and decrypt text using at least three classical methods, with a consistent interface across the algorithms. Stretch work explores how simple statistical analysis can help break selected classical ciphers.

## Core

- Encrypt and decrypt with at least 3 ciphers (Caesar, Vigenère, Atbash, Rail Fence, Playfair, Affine)

## Stretch

- Frequency analysis to auto-break Caesar/Vigenère
- File encryption

## Tech Stack

### Option 1
Python

### Option 2
C/C++

### Option 3
Java

### Option 4
JS web

## Repository

cipher-toolkit

---

# B12 — Chat Word-Frequency Analyzer

- Track: Beginner
- Team: Solo
- Level: Core
- Category: Automation/Data

## Brief

Exported group-chat data can contain interesting patterns about vocabulary and participation without requiring access to live messages. Build a local analyzer that reads a user-owned or consented chat export, calculates word frequencies and shows the most-used words by participant while filtering common stopwords. Stretch analysis can reveal word pairs and time trends, while deliberately avoiding live message scraping.

## Core

- Import an exported chat file (WhatsApp .txt or Discord data export, own chats or with group consent)
- Count word frequency
- Top words per user
- Stopword filter

## Stretch

- Word pairs
- Charts
- Time trends (No live message scraping)

## Tech Stack

### Option 1
Python (pandas, matplotlib)

### Option 2
Node + Chart.js

### Option 3
Java streams

### Option 4
Go

## Repository

chat-word-analyzer

---

# B13 — Study Flashcards App

- Track: Beginner
- Team: Solo
- Level: Core
- Category: Mobile

## Brief

Revision material is often scattered between notebooks and different applications, making repeated practice inconvenient. Build a focused flashcard application where users can create decks, review cards, quiz themselves and track known versus unknown material. The Leitner-box model gives the project a meaningful algorithmic component while local storage keeps the initial scope manageable.

## Core

- Create decks and cards
- Flip and quiz mode
- Mark known and unknown
- Leitner-box spaced repetition
- Local storage

## Stretch

- CSV import
- Streaks
- Stats

## Tech Stack

### Option 1
Flutter + SQLite/Hive

### Option 2
React Native (Expo)

### Option 3
Kotlin + Room

### Option 4
PWA (JS + IndexedDB)

## Repository

flashcards-app

---

# B14 — Wordle Clone

- Track: Beginner
- Team: Solo
- Level: Starter
- Category: Systems/DSA

## Brief

A small game can still contain meaningful programming challenges when its rules and edge cases are implemented correctly. Build a Wordle-style game with a word list, input validation, six attempts and accurate feedback for repeated letters. Stretch work adds persistence and a solver/hint system, giving students a path from basic state management to algorithmic reasoning.

## Core

- Word list
- Guess validation
- Colour feedback (handle duplicate letters correctly)
- 6 attempts
- Win/lose state

## Stretch

- Daily word
- Stats persistence
- Hard mode
- Solver/hints

## Tech Stack

### Option 1
Python

### Option 2
Java

### Option 3
C++

### Option 4
Go

### Option 5
JS web

## Repository

wordle-clone

---

# I01 — Community Exchange Platform

- Track: Intermediate
- Team: Duo
- Category: Web

## Brief

Useful items such as books, equipment and other belongings can remain unused while other students need them. Build a campus exchange platform focused on giving, exchanging or borrowing rather than conventional selling, with listings, profiles and a request lifecycle. The moderation/reporting flow adds a realistic piece of platform design without requiring a large marketplace.

## Core

- Give/Exchange/Borrow listings
- Search and filter
- User profiles
- Request → accept/decline → completed tracking
- Availability status
- Report and moderation queue

## Tech Stack

### Option 1
React + Express + PostgreSQL

### Option 2
Django + PostgreSQL

### Option 3
Spring Boot + React

### Option 4
Next.js + Prisma

### Option 5
Flask + Jinja

## Repository

community-exchange

---

# I02 — Volunteer & Task Matching

- Track: Intermediate
- Team: Duo
- Category: Web

## Brief

Volunteer opportunities are often difficult to discover when the required skills and available time are unclear. Build a platform where organizers describe tasks and volunteers describe their skills and availability, then calculate a transparent rule-based match score. The application should also handle applications, decisions and task progress so that matching connects naturally to execution.

## Core

- Organizers post tasks with required skills and time
- Volunteers build skill profiles
- Rule-based match score ranks volunteers
- Apply, accept, and reject workflow
- Task progress tracking

## Tech Stack

### Option 1
React + FastAPI + PostgreSQL

### Option 2
Django

### Option 3
Spring Boot + Thymeleaf

### Option 4
Next.js + Supabase

### Option 5
Express + MongoDB

## Repository

volunteer-match

---

# I03 — Campus Event Aggregator

- Track: Intermediate
- Team: Duo
- Category: Web

## Brief

Campus events are frequently announced through posters, social posts and separate club channels, making discovery fragmented. Build an event aggregator that brings event information into one searchable interface with date, category, club and venue filters. Registration, seat tracking, calendar export and reminders turn the catalogue into a usable event workflow.

## Core

- Create and browse events
- Filter by date, category, club, and venue
- Register
- Live seat count (no overbooking)
- Add-to-calendar (.ics)
- Reminders

## Tech Stack

### Option 1
Next.js + Prisma

### Option 2
Django + SQLite

### Option 3
Spring Boot + React

### Option 4
Express + PostgreSQL

### Option 5
Flask + HTMX

## Repository

campus-event-hub

---

# I04 — StudySync: Peer Study Sessions

- Track: Intermediate
- Team: Duo
- Category: Web

## Brief

Students may want to study together but have no simple way to discover peers working on the same subject at a suitable time. Build a session-based platform where users can create or join study sessions, search by subject and topic, and record attendance and feedback. The project is intentionally focused on coordinating sessions rather than trying to become a complete learning platform.

## Core

- Create and join sessions (subject, topic, time, difficulty)
- Search and filter
- Meeting link or room details
- Attendance tracking
- Post-session feedback

## Tech Stack

### Option 1
React + Firebase

### Option 2
Django

### Option 3
Express + MongoDB

### Option 4
Spring Boot

### Option 5
Next.js + Supabase

## Repository

studysync

---

# I05 — Personal Finance Dashboard

- Track: Intermediate
- Team: Duo
- Category: Web/Data

## Brief

Small everyday expenses can be hard to understand when they are recorded inconsistently. Build a personal finance dashboard that organizes income and expenses into categories, tracks monthly budgets, highlights overspending and visualizes trends. CSV import gives the project a realistic data-ingestion component while keeping the core domain familiar.

## Core

- Log income and expenses with categories
- Monthly budgets
- Overspending alerts
- Category and trend charts
- CSV import

## Tech Stack

### Option 1
React + Chart.js + Node

### Option 2
Flask + Pandas + Plotly

### Option 3
Streamlit

### Option 4
Django

### Option 5
Spring Boot + Thymeleaf

## Repository

finance-dashboard

---

# I06 — QR-Based Attendance

- Track: Intermediate
- Team: Duo
- Category: Mobile/Web

## Brief

Manual attendance consumes class time and a static attendance mechanism can be easy to misuse. Build a session-based attendance system where a faculty-created QR token changes periodically, expires with the session and produces per-student records. The stretch options introduce additional location/network checks, but the core remains centered on expiring tokens and reliable record keeping.

## Core

- Faculty create a session with a rotating QR token (refreshes every 10–30 s)
- Students scan
- Session expires
- Per-student and per-class records
- CSV export

## Stretch

- Geofence or Wi-Fi check

## Tech Stack

### Option 1
Flutter + Firebase

### Option 2
React Native + Node

### Option 3
React + FastAPI (camera via browser)

### Option 4
Kotlin + Spring Boot

## Repository

qr-attendance

---

# I07 — Feedback Sentiment Dashboard

- Track: Intermediate
- Team: Duo
- Category: AI/ML

## Brief

Feedback forms often produce a large amount of text that is difficult to review consistently. Build a dashboard that accepts feedback as CSV data, assigns positive/neutral/negative sentiment, surfaces keywords or themes and lets users compare results across events. The project is about applying a practical NLP baseline and presenting its output clearly rather than training a large model from scratch.

## Core

- Upload CSV
- Classify positive/neutral/negative sentiment
- Extract keywords and themes
- Dashboard with filters
- Compare events

## Tech Stack

### Option 1
Python (pandas, VADER/TextBlob/HF) + Streamlit

### Option 2
FastAPI + React

### Option 3
Flask + Chart.js

### Option 4
Client-side JS sentiment library

## Repository

feedback-sentiment-dashboard

---

# I08 — Campus FAQ Chatbot

- Track: Intermediate
- Team: Duo
- Category: AI/ML

## Brief

Students repeatedly ask similar questions about campus rules, fees and schedules, while the answers may already exist in FAQs or documents. Build a retrieval-oriented FAQ assistant where administrators provide the knowledge base and users ask questions in natural language. The important learning component is the retrieval and feedback loop: unanswered questions should be surfaced for administrators, and the baseline must work without a paid API.

## Core

- Admins upload FAQs and documents
- Students ask in natural language
- Best answer by similarity (TF-IDF → embeddings)
- Unmatched questions flagged for admins
- Admin edits (Baseline must work without a paid API)

## Tech Stack

### Option 1
Python (scikit-learn / sentence-transformers) + FastAPI + React

### Option 2
Streamlit

### Option 3
Node + embeddings API

### Option 4
Optional LLM RAG on top

## Repository

campus-faq-bot

---

# I09 — Plant Disease Detector

- Track: Intermediate
- Team: Duo
- Category: AI/ML

## Brief

Plant disease identification is a useful computer-vision problem because the input is visual and the output can be communicated clearly to a user. Build an application that accepts a leaf image, runs a classifier and reports the predicted plant, disease and confidence while allowing uncertain cases to be treated as such. The provided PlantVillage dataset is a starting point, and its laboratory-image limitations should be documented rather than hidden.

## Core

- Upload leaf photo
- Classifier returns plant + disease + confidence
- A "not sure" threshold
- Treatment tips
- Scan history (Dataset: PlantVillage — note its lab-photo limits in the README)

## Tech Stack

### Option 1
Python (TensorFlow/PyTorch transfer learning) + FastAPI/Flask

### Option 2
TF.js in-browser

### Option 3
React frontend

## Repository

plant-disease-detector

---

# I10 — Object Counter for Images & Videos

- Track: Intermediate
- Team: Duo
- Category: AI/ML

## Brief

Counting objects manually in images or videos becomes tedious when many instances are present. Build a visual application that accepts an image or video, runs a pretrained object detector, lets the user choose classes of interest and displays both detections and counts. The focus is on integrating a pretrained model into a usable application rather than training a detector from zero.

## Core

- Upload image/video
- Pretrained detector counts chosen classes
- Boxes and labels drawn
- Class selector
- Saved counts in table/chart

## Tech Stack

### Option 1
Python (OpenCV + YOLO/SSD) + Streamlit/Flask

### Option 2
TF.js COCO-SSD

### Option 3
ONNX Runtime Web

## Repository

object-counter

---

# I11 — Gesture-Controlled Presentation Tool

- Track: Intermediate
- Team: Duo
- Category: AI/ML

## Brief

Presenters are often forced to stay near their laptop because slide navigation normally depends on a keyboard or clicker. Build a webcam-driven presentation controller that recognizes a small set of hand gestures and maps them to actions such as next, previous, pointer and erase. A live recognition preview and sensitivity controls make the system easier to test and demonstrate.

## Core

- Webcam hand tracking
- Gestures → next/previous/pointer/erase
- Upload slides (images/PDF)
- Live preview of the recognized gesture
- Adjustable sensitivity and delay

## Tech Stack

### Option 1
Python (OpenCV, MediaPipe, PyAutoGUI)

### Option 2
JS (MediaPipe Web + reveal.js)

### Option 3
Electron wrapper

## Repository

gesture-slides

---

# I12 — Color Palette Generator (matugen-style)

- Track: Intermediate
- Team: Duo
- Category: Systems/DSA

## Brief

Generating a palette from an image is more useful when the resulting colours have meaningful UI roles instead of being a random list of dominant pixels. Build a tool that extracts dominant colours, maps them into roles such as primary, surface and accent, checks contrast and produces light/dark variants. The result can then be exported in formats useful for CSS, JSON or terminal/editor themes.

## Core

- Image → dominant colours (k-means / median-cut) → role-based palette (primary, surface, on-surface, accent)
- WCAG contrast checks
- Light and dark variants
- Export templates (CSS vars, JSON, terminal/editor themes)

## Tech Stack

### Option 1
Python (Pillow, NumPy)

### Option 2
Rust

### Option 3
JS Canvas

### Option 4
Go

### Option 5
C++

## Repository

palette-forge

---

# I13 — Smart Log Analyzer CLI

- Track: Intermediate
- Team: Duo
- Category: Automation/Dev Tools

## Brief

Large log files can contain repeated errors and useful timing information, but manually scanning them is slow. Build a streaming command-line analyzer that recognizes error patterns, groups repeated messages, summarizes levels and time windows, and produces a readable report. The project teaches file streaming, pattern matching and basic aggregation without requiring a full observability platform.

## Core

- Read large logs by streaming
- Regex-flag errors
- Count by level
- Top repeating errors
- Time-window stats
- Markdown/HTML report

## Tech Stack

### Option 1
Python

### Option 2
Go

### Option 3
Java

### Option 4
Node

### Option 5
Rust (only if experienced)

## Repository

log-analyzer-cli

---

# I14 — Interactive Git Visualizer

- Track: Intermediate
- Team: Duo
- Category: Web/Dev Tools

## Brief

Git becomes easier to understand when its branches, HEAD movement and merges can be seen rather than only read about. Build a simulated Git environment that supports core operations such as commit, branch, checkout and merge, and represents the resulting commit history as a graph. Stretch work can extend the simulation to rebase/reset and guided learning interactions.

## Core

- Simulated terminal supporting commit, branch, checkout, merge
- Commit DAG modelled in memory
- Animated graph

## Stretch

- Rebase
- Reset
- Guided lessons

## Tech Stack

### Option 1
Vanilla JS + SVG/Canvas

### Option 2
React + D3

### Option 3
Python (pygame/Tkinter)

### Option 4
Java Swing

## Repository

git-visualizer

---

# I15 — Library Management REST API

- Track: Intermediate
- Team: Duo
- Category: Backend

## Brief

A library can have several clients—web, mobile or other tools—that need a consistent way to access its data. Build a REST API covering books, members, borrowing, returns, due dates and fines, with authentication, roles, validation, pagination and documentation. Automated tests and Docker make the project resemble a small production-style backend rather than a collection of endpoints.

## Core

- Books, members, borrow/return, due dates, fines
- JWT auth + roles
- Pagination and filtering
- Validation
- OpenAPI/Swagger docs
- Automated tests
- Docker

## Tech Stack

### Option 1
Spring Boot + PostgreSQL

### Option 2
FastAPI + SQLModel

### Option 3
Express + Prisma

### Option 4
Go (Gin/Fiber)

### Option 5
Django REST

## Repository

library-api

---

# I16 — URL Shortener with Analytics

- Track: Intermediate
- Team: Duo
- Category: Backend

## Brief

Long URLs are inconvenient to share, while creators often want to know how links are being used. Build a URL-shortening service that creates compact codes, redirects users, supports custom aliases and expiry, and records useful click information. Rate limiting and the optional Redis stretch introduce realistic backend concerns while keeping the core service understandable.

## Core

- Base62 short codes
- Redirect
- Custom alias
- Expiry
- Click analytics (time, referrer, device)
- Rate limiting
- QR code

## Stretch

- Redis cache

## Tech Stack

### Option 1
Go

### Option 2
Spring Boot

### Option 3
Node/Express + Redis

### Option 4
FastAPI

## Repository

url-shortener

---

# I17 — Habit & Streak Tracker

- Track: Intermediate
- Team: Duo
- Category: Mobile

## Brief

Many habit applications add unnecessary complexity or put useful features behind paid tiers. Build a focused tracker for creating habits, recording daily check-ins, calculating streaks and showing weekly progress, with local notifications and local persistence. Stretch work can add cloud backup or widgets after the core offline experience is reliable.

## Core

- Habits management
- Daily check-ins
- Streaks calculation
- Local notifications
- Weekly charts
- Local database

## Stretch

- Cloud backup
- Widgets

## Tech Stack

### Option 1
Flutter + SQLite

### Option 2
React Native (Expo)

### Option 3
Kotlin + Room

## Repository

habit-streak-app

---

# I18 — Static Site Generator

- Track: Intermediate
- Team: Duo
- Category: Automation/Dev Tools

## Brief

Static site generators are a useful way to understand how source content becomes a finished website. Build a small generator that reads Markdown, parses the supported structures, applies front matter and templates, creates tag indexes and exposes the process through a CLI. Stretch features can add live reload or RSS without changing the central Markdown-to-HTML pipeline.

## Core

- Markdown → HTML parser (headings, lists, links, code)
- Front matter
- Templates and layouts
- Tag index
- Build CLI

## Stretch

- Live reload
- RSS

## Tech Stack

### Option 1
Python

### Option 2
Node

### Option 3
Go

### Option 4
Rust

### Option 5
Java

## Repository

markdown-site-builder

---

# I19 — Maze & Pathfinding Playground

- Track: Intermediate
- Team: Duo
- Category: Systems/DSA

## Brief

Graph algorithms can be difficult to understand when their execution is invisible. Build a visual playground that generates mazes and then runs BFS, DFS, Dijkstra and A* step by step, showing the path and allowing the algorithms to be compared by explored nodes and time. The stretch features make the playground interactive without changing its core educational purpose.

## Core

- Generate mazes (DFS/Prim)
- Solve with BFS/DFS/Dijkstra/A*
- Step-by-step visualization
- Compare nodes explored and time

## Stretch

- Weighted terrain
- Drawable walls

## Tech Stack

### Option 1
JS Canvas

### Option 2
Python pygame

### Option 3
Java JavaFX

### Option 4
C++ SFML

### Option 5
React

## Repository

maze-pathfinder

---

# I20 — Mini Redis (Key-Value Store)

- Track: Intermediate
- Team: Duo
- Category: Systems/Backend

## Brief

A key-value store looks simple from the outside, but implementing one exposes networking, data structures, persistence and concurrency concepts. Build a small TCP server supporting the specified commands, TTL expiry, persistence and multiple clients, along with a CLI client. Stretch work can explore pub/sub or RESP compatibility, but the core should remain a coherent miniature storage server.

## Core

- TCP server with SET/GET/DEL/EXPIRE/INCR
- TTL expiry
- Persistence (append-only log or snapshot)
- Concurrent clients
- CLI client

## Stretch

- Pub/sub
- RESP compatibility

## Tech Stack

### Option 1
Go

### Option 2
Java (sockets/NIO)

### Option 3
Python (asyncio)

### Option 4
C++

### Option 5
Rust

## Repository

mini-redis

---

# A01 — Skill Gap & Learning Roadmap Platform

- Track: Advanced
- Team: Squad of 3–4
- Category: Web/Full Stack

## Brief

Students often know the role they want to pursue but cannot clearly see which skills they already have and which prerequisites they are missing. Build a platform that represents skills as a graph, collects self-assessments and quizzes, computes gaps and turns prerequisite relationships into a learning roadmap. Progress, analytics and rule-based recommendations complete the experience without requiring a black-box recommendation model.

## Core

- Role → skill graph (seeded dataset)
- Self-assessment and quizzes
- Gap computation
- Roadmap via prerequisite graph (topological sort)
- Milestones
- Progress tracking
- Analytics
- Rule-based resource recommendations

## Tech Stack

### Option 1
React/Next.js + Spring Boot/FastAPI/NestJS + PostgreSQL

### Option 2
Vue + Django

## Repository

skillpath-platform

---

# A02 — Appointment & Resource Booking System

- Track: Advanced
- Team: Squad of 3–4
- Category: Web/Backend

## Brief

Booking systems become difficult when multiple providers, resources and users compete for overlapping time slots. Build a scheduling application with accounts, roles, provider availability and conflict-free booking, including cancellation and rescheduling. The core engineering challenge is preventing double bookings reliably through interval checks and database transactions, including under concurrent requests.

## Core

- Accounts and roles
- Provider profiles
- Availability rules
- Booking with conflict prevention (interval checks + DB transactions, tested under concurrent requests)
- Cancel and reschedule
- Notifications
- Admin dashboard

## Tech Stack

### Option 1
Spring Boot + PostgreSQL + React

### Option 2
FastAPI + PostgreSQL + Next.js

### Option 3
NestJS + Prisma

## Repository

booking-engine

---

# A03 — Mini Online Judge

- Track: Advanced
- Team: Squad of 3–4
- Category: Backend/Systems

## Brief

An online judge combines several systems problems: accepting source code, executing it safely, enforcing resource limits and returning deterministic verdicts. Build a platform with a problem set, submissions in the specified languages, isolated Docker execution, hidden tests and a leaderboard. Submitted code must never execute directly on the host machine.

## Core

- Problem set
- Code submission (Python/C++/Java)
- Sandboxed execution (Docker, time and memory limits) against hidden tests
- Verdicts (AC/WA/TLE/RE)
- Leaderboard (Never run submitted code on the host)

## Tech Stack

### Option 1
React + FastAPI/Spring Boot + Docker + PostgreSQL + Redis queue

### Option 2
Go runner

## Repository

mini-judge

---

# A04 — Real-time Collaborative Workspace

- Track: Advanced
- Team: Squad of 3–4
- Category: Web/Systems

## Brief

Collaborative editing requires multiple users to see shared state while changes arrive at nearly the same time. Build a shared notes or whiteboard workspace with rooms, authentication, presence, WebSocket synchronization, persistence and version history. The stretch direction explores stronger conflict-resolution techniques such as OT or CRDTs.

## Core

- Shared notes or whiteboard
- WebSocket synchronization
- Presence indicator
- Auth and rooms
- Persistence and version history

## Stretch

- OT/CRDT instead of last-write-wins

## Tech Stack

### Option 1
Node + Socket.io + React

### Option 2
Go + WebSocket

### Option 3
Spring Boot + STOMP

### Option 4
Yjs

## Repository

collab-workspace

---

# A05 — Campus Search Engine

- Track: Advanced
- Team: Squad of 3–4
- Category: Backend/DSA

## Brief

Campus information becomes difficult to search when documents and pages are spread across different locations and contain different wording. Build a search engine that ingests HTML/PDF content, tokenizes it, creates an inverted index and ranks results using TF-IDF or BM25, with snippets and typo tolerance. The project emphasizes understanding search internals; external search engines are only a comparison baseline.

## Core

- Ingest HTML/PDF
- Tokenizer
- Self-built inverted index
- TF-IDF/BM25 ranking
- Snippets
- Typo tolerance
- Search UI
- Benchmark (Elasticsearch/Meilisearch only as a comparison baseline)

## Tech Stack

### Option 1
Python

### Option 2
Java

### Option 3
Go

### Option 4
Rust, with any frontend

## Repository

campus-search-engine

---

# A06 — Auto Timetable Scheduler

- Track: Advanced
- Team: Squad of 3–4
- Category: Algorithms/Web

## Brief

Timetabling is a constraint problem because courses, rooms, faculty and time slots must satisfy several conditions simultaneously. Build a scheduler that accepts these inputs, generates a conflict-free timetable using a constraint-solving approach and explains constraints that could not be satisfied. An editable grid and PDF/ICS export turn the algorithm into a usable application.

## Core

- Input courses, faculty, rooms, slots
- Constraints (no clashes, capacity, preferences)
- Generate with backtracking / graph colouring / CP-SAT
- Explain unsatisfied constraints
- Editable grid
- Export PDF/ICS

## Tech Stack

### Option 1
Python + OR-Tools

### Option 2
Java

### Option 3
C++ solver + web UI

### Option 4
React frontend

## Repository

timetable-scheduler

---

# A07 — Distributed Task Queue & Dashboard

- Track: Advanced
- Team: Squad of 3–4
- Category: Backend/Systems

## Brief

Background jobs become difficult to operate when failures, retries, priorities and delayed execution are not visible. Build a task queue with producers and workers, retry/backoff behaviour, priorities, scheduled jobs, a dead-letter queue and a live monitoring dashboard. The implementation may use Redis as a backing system or explore a broker of its own.

## Core

- Producers and workers
- Retries with backoff
- Priorities
- Scheduled jobs
- Dead-letter queue
- Live dashboard (Redis-backed or own broker)

## Tech Stack

### Option 1
Go

### Option 2
Python + Redis

### Option 3
Java (Spring) + Redis

### Option 4
Node

## Repository

taskqueue-dashboard

---

# A08 — Offline-first Campus Companion App

- Track: Advanced
- Team: Squad of 3–4
- Category: Mobile + Backend

## Brief

Campus information should remain useful even when a mobile device temporarily loses connectivity. Build an offline-first companion where important data is stored locally, the application works without a network connection and changes synchronize when connectivity returns. Conflict resolution, push notifications and the backend API make synchronization a central engineering problem rather than an afterthought.

## Core

- Local-first DB (notes, timetable, announcements)
- Full offline use
- Sync on reconnect
- Conflict resolution
- Push notifications
- Backend API

## Tech Stack

### Option 1
Flutter + SQLite + FastAPI

### Option 2
React Native + WatermelonDB + Node

### Option 3
Kotlin Room + Spring Boot

## Repository

campus-companion
