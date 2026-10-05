# TechSpace BuildLab '26

> **Learn by Building.**

Official website and documentation for **TechSpace BuildLab '26** — a three-week, mentor-supported, project-based learning competition organized by **TechSpace, SRM University, Sonepat**.

BuildLab is designed around one core idea: **learn by building real projects.** Participants choose a track, author a PRD, receive mentor approval, and build using a professional GitHub workflow with Issues, Branches, Pull Requests, and peer/mentor Code Reviews.

---

## 📌 Program Overview (Green Sheet Facts)

| Attribute | Official Details |
|---|---|
| **Event** | TechSpace BuildLab ’26 |
| **Organizer** | TechSpace, SRM University, Sonepat |
| **Format** | Three-Week Project-Based Learning Competition |
| **Dates** | **5 October – 23 October 2026** (05.10.2026 – 23.10.2026) |
| **Inauguration** | **5 October 2026, 10:30 AM** |
| **Venue** | **5th Floor, Conference Room, EB** |
| **Eligibility** | SRM University B.Tech CSE / BCA CS, **Year I–III** |
| **Online Platforms** | GitHub + Discord |
| **Total Budget** | ₹3,500 |
| **Prizes** | ₹1,000 × 3 tracks = **₹3,000 Total Cash Pool** |
| **Certificates** | Completion & Winner Certificates (₹500 allocation) |
| **Key Personnel** | Mentors, Evaluation Panel, Faculty Coordinator |

---

## 🧭 Tracks

### 1. Beginner — Solo
* **Format:** Individual (1 Member)
* **Target:** Students new to Git/GitHub or building their first complete project.
* **Prize:** ₹1,000 cash prize for winning project + completion certificates.

### 2. Intermediate — Duo
* **Format:** Pair (2 Members)
* **Target:** Students with prior project experience and working knowledge of Git.
* **Emphasis:** Division of work, Pull Requests, and cross-peer review.
* **Prize:** ₹1,000 cash prize for winning team + completion certificates.

### 3. Advanced — Squad
* **Format:** Squad (3–4 Members)
* **Target:** Students with strong fundamentals, prior project experience, and team-workflow knowledge.
* **Emphasis:** Technically ambitious, modular architecture, CI testing, and stretch goals.
* **Prize:** ₹1,000 cash prize for winning squad + completion certificates.

---

## 📅 Official Schedule (05.10.2026 – 23.10.2026)

* **Before Day 1:** Registration, GitHub entry task, track selection, and squad formation.
* **05 October 2026 (10:30 AM):** Inauguration & Kick-off (5th Floor, Conference Room, EB).
* **05–07 October 2026:** PRD Drafting & Submission.
* **07 October 2026:** PRD Approval Deadline (development begins only after mentor approval).
* **08–15 October 2026:** Core Development (Week 2 sprint via GitHub PRs).
* **15 October 2026:** Mid-Program Milestone Review.
* **16–20 October 2026:** Completion, Testing & Documentation (Week 3 sprint).
* **21 October 2026:** Final Submission & Repository Code Freeze.
* **22 October 2026:** Demonstrations & Evaluation Panel Scoring.
* **23 October 2026:** Results & Closing Ceremony.

---

## 🛠 Tech Stack

* **Framework:** Next.js 16 (App Router, Turbopack, React 19)
* **Language:** TypeScript
* **Styling:** Tailwind CSS v4 with custom Swiss editorial design tokens
* **Motion:** Framer Motion (with `prefers-reduced-motion` compliance)
* **Icons:** Lucide React & bespoke geometric SVGs

---

## 🚀 Development Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run linting
npm run lint

# Production build
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📋 Deployment Readiness & Production Assets Checklist

Before final deployment to production, complete the following content and asset insertions:

1. **Discord Community Invite**:
   - Update `discord` and set `isDiscordAvailable: true` in `src/data/links.ts` once the official server invite link is generated.
2. **Project Catalogue**:
   - Populate `src/data/projects.ts` once the curated project briefs are approved by the organizing committee.
3. **Mentor Roster**:
   - Populate `src/data/mentors.ts` with confirmed track mentors, evaluation panel members, faculty coordinator, photographs, and profiles.
4. **Social Preview Image (Open Graph)**:
   - Provide `public/og-image.png` (1200 × 630 px) adhering to the Swiss editorial / scientific identity:
     - Typography: `TECHSPACE BUILDLAB ’26 — LEARN BY BUILDING`
     - Palette: Warm paper (`#F4F4E8`), ink (`#080808`), and the spectrum gradient (`#1457D9` → `#18B8D4` → `#62C94A` → `#F3D21A`).
     - (Note: Per Phase 7 QA specifications, placeholder/fake images are strictly avoided).
5. **Favicon / App Icon**:
   - Place official TechSpace favicon at `src/app/favicon.ico` or `public/favicon.ico`.

# Techspace-srmuh/buildlab-2026
