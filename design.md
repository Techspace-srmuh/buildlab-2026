# TechSpace BuildLab ’26 — Design System

> **Design direction:** Swiss editorial × scientific laboratory × modern software.
>
> The landing website should visually extend the BuildLab ’26 poster language: warm off-white paper, strong black typography, restrained grid lines, bold blue/green/yellow gradients, geometric scientific illustrations, and small interface-like details.

---

## 1. Design Goal

The website should feel like a **real TechSpace program identity**, not a generic startup landing page.

The visual language should communicate:

- Learning through experimentation
- Building through structured development
- Technology + science
- Student engineering
- Precision and professionalism
- A modern, youthful energy without looking childish

### Core visual principle

**Editorial structure first. Color second. Decoration third.**

Do not fill the page with gradients, cards, blobs, or illustrations.

The layout should remain highly structured and spacious, with color used to create emphasis.

---

# 2. Reference Direction

The supplied BuildLab ’26 poster establishes the visual direction.

Important characteristics to carry into the website:

- Warm/off-white background
- Black typography
- Large condensed/bold display typography
- Wide uppercase tracking for labels
- Blue → cyan → green → yellow gradient accents
- Thin black grid lines
- Scientific/laboratory motifs
- Geometric illustrations
- Rounded UI/browser-window containers
- Black buttons with light text
- Small arrows and directional indicators
- Strong asymmetrical editorial composition
- Large whitespace
- Minimal iconography
- High contrast

The website should feel like the poster has been transformed into an interactive digital system.

---

# 3. Color System

## Primary Background

```css
--paper: #F4F4E8;
```

Use this as the dominant page background.

The background should feel slightly warm rather than pure white.

Avoid:

```css
#FFFFFF
```

as the primary page background.

---

## Primary Ink

```css
--ink: #080808;
```

Used for:

- Headings
- Body text where high contrast is required
- Borders
- Icons
- Navigation
- Buttons

---

## Gradient Spectrum

The identity uses a spectrum rather than one single brand color.

Primary gradient:

```css
--blue: #1457D9;
--cyan: #18B8D4;
--green: #62C94A;
--yellow: #F3D21A;
```

Preferred gradient:

```css
linear-gradient(
  90deg,
  #1457D9 0%,
  #18B8D4 38%,
  #62C94A 68%,
  #F3D21A 100%
);
```

Use gradients selectively for:

- Hero display typography
- Important accents
- Track indicators
- Decorative scientific objects
- Section transitions
- Small highlights

Do NOT use the gradient as a full-page background.

---

## Supporting Colors

```css
--blue-soft: #DCEBFF;
--green-soft: #E5F4D8;
--yellow-soft: #FFF3B8;
--cyan-soft: #DDF6F7;
--gray: #6D6D68;
--line: #CFCFC4;
```

Use soft colors as subtle surfaces behind content.

---

# 4. Typography

The typography is one of the most important parts of the identity.

## Display Typeface

Use a bold/black condensed or semi-condensed sans-serif.

Preferred options:

1. **Archivo Black**
2. **Barlow Condensed**
3. **Roboto Condensed**
4. **Inter Tight**
5. A similar high-quality condensed grotesk

The exact typeface can be changed if the project already has a licensed/approved TechSpace font.

### Hero title

Large, heavy, tightly spaced.

Example:

```text
BUILD
LAB ’26
```

or:

```text
TechSpace
BuildLab ’26
```

Use the gradient selectively on the primary display word.

---

## UI / Body Typeface

Use:

```text
Inter
```

or:

```text
Inter Tight
```

for:

- Body
- Navigation
- Buttons
- Cards
- Metadata
- Timeline
- Project information

---

## Typography hierarchy

```text
Display
80–140px desktop
48–72px mobile
Weight: 800–900
Line height: 0.85–0.95

H1
56–80px
Weight: 800

H2
40–56px
Weight: 800

H3
22–30px
Weight: 700

Body
16–20px
Line height: 1.5

Metadata
11–14px
Uppercase
Letter spacing: 0.12–0.18em
```

Do not make every heading huge.

Large typography should create hierarchy.

---

# 5. Grid System

The website should use a visible editorial grid.

Desktop:

```text
12 columns
24px gutters
5–7% side margins
```

Tablet:

```text
8 columns
20px gutters
```

Mobile:

```text
4 columns
16px gutters
```

Use thin grid lines sparingly.

Suggested:

```css
--line: #CFCFC4;
```

Grid lines may appear:

- between hero regions
- behind large sections
- around timeline structures
- around project catalogue areas
- around footer information

The lines should be subtle.

---

# 6. Borders

Use thin, precise borders.

Preferred:

```css
border: 1px solid var(--line);
```

For stronger elements:

```css
border: 1px solid var(--ink);
```

Avoid thick decorative borders.

---

# 7. Border Radius

The visual language mixes editorial geometry with small UI softness.

Use:

```text
Small UI: 8–12px
Cards: 16–20px
Large browser/window components: 20–28px
Buttons: 999px only when intentionally pill-shaped
```

Do not make every component extremely rounded.

---

# 8. Hero Section

The hero is the most important section.

It should immediately establish:

```text
TECHSPACE

BUILDLAB ’26

LEARN BY BUILDING
```

### Layout

Use an asymmetric editorial layout.

Suggested structure:

```text
┌─────────────────────────────────────────────┐
│ TECHSPACE                         01 / 06   │
│                                             │
│ BUILD                                        │
│ LAB ’26             scientific illustration │
│                                             │
│ LEARN BY BUILDING                           │
│                                             │
│ 01 OCT — 15 OCT 2026                       │
│ 2 WEEK PROJECT-BASED PROGRAM               │
│                                             │
│ [ EXPLORE BUILDLAB → ] [ JOIN DISCORD ]    │
└─────────────────────────────────────────────┘
```

The exact program dates must use the finalized BuildLab content supplied by
the organizers. Do not invent alternate dates.

### Hero title treatment

Use black for most of the title with a gradient applied to one major word or
segment.

Example:

```text
Build
```

with:

```text
blue → cyan → green → yellow
```

and:

```text
Lab ’26
```

in black.

Alternative:

```text
BUILD
```

black

```text
LAB ’26
```

gradient.

---

# 9. Scientific Illustration Language

The poster uses laboratory and scientific visual motifs.

Translate this into the website using:

- Flask silhouettes
- Test tubes
- Molecular nodes
- Atomic orbitals
- Cubes
- Geometric particles
- Small stars/spark shapes
- Technical diagrams
- Dotted matrices

Illustrations should be:

- Solid
- Geometric
- Minimal
- Flat
- High contrast
- Slightly playful

Avoid:

- Hand-drawn sketchiness
- Photorealistic laboratory images
- 3D AI-generated objects
- Excessive gradients inside every object
- Generic stock illustrations

---

# 10. Navigation

Navigation should be minimal.

Suggested:

```text
TECHSPACE
BUILDLAB ’26

About
Tracks
Projects
Mentors
Timeline

[ JOIN DISCORD ]
```

Desktop navigation can be sticky.

Use:

- paper background
- black typography
- thin bottom border

On scroll, the navigation can become slightly translucent:

```css
background: rgba(244, 244, 232, 0.88);
backdrop-filter: blur(12px);
```

Do not create a giant floating glass navbar.

---

# 11. About / Program Overview

Introduce BuildLab using editorial composition rather than a generic card grid.

Example:

```text
01 — ABOUT

LEARN BY
BUILDING.

A two-week project-based learning program
where students turn ideas into working software
through GitHub, mentorship and real development
workflows.
```

Beside it:

```text
2 WEEKS
3 TRACKS
GITHUB + DISCORD
MENTOR SUPPORTED
```

These should look like information labels rather than dashboard cards.

---

# 12. Tracks Section

Three major track blocks:

```text
BEGINNER
SOLO

INTERMEDIATE
DUO — 2 MEMBERS

ADVANCED
SQUAD — 3–4 MEMBERS
```

Each track should have a distinct accent:

### Beginner

Blue / cyan

### Intermediate

Green

### Advanced

Yellow

Do not make the entire cards different colors.

Use the color as:

- icon
- number
- underline
- gradient edge
- small graphic
- accent typography

Keep the majority of the cards paper/black.

---

# 13. Timeline

Use a horizontal editorial timeline on desktop.

Example:

```text
01
OCT
INAGURATION

03
OCT
PRD APPROVAL

08
OCT
MID-PROGRAM

13
OCT
FINAL SUBMISSION

14
OCT
DEMO

15
OCT
RESULTS
```

On mobile, transform into a vertical timeline.

Use thin black lines and small gradient markers.

Do not use generic vertical "stepper" UI.

---

# 14. Project Catalogue

This should be one of the main interactive sections.

Title:

```text
PROJECTS
TO BUILD.
```

Subtitle:

```text
Pick something that challenges you.
```

### Filters

```text
ALL
WEB
AI / ML
BACKEND
MOBILE
SYSTEMS
AUTOMATION
```

Track filters:

```text
BEGINNER
INTERMEDIATE
ADVANCED
```

### Project card

Each card should contain:

```text
PROJECT ID

Project Name

Short one-line description

TRACK
DOMAIN

CORE
STRETCH

[ VIEW PROJECT → ]
```

Avoid excessive information inside the initial card.

Detailed project information can open in:

- modal
- drawer
- dedicated project page

Project data MUST be stored separately from components.

Suggested:

```text
src/data/projects.ts
```

---

# 15. Mentors Section

Heading:

```text
PEOPLE
WHO BUILD WITH YOU.
```

Mentors should appear as editorial profile cards.

Each profile:

```text
[ PHOTO ]

NAME
TRACK / ROLE

Short bio

↗ LINKEDIN
↗ GITHUB
```

Use large monochrome or natural photos with subtle color accents.

Do not use fake mentor data.

Until the roster is finalized, use a clear placeholder state.

Suggested data structure:

```ts
{
  name: "",
  role: "",
  track: "",
  image: "",
  bio: "",
  linkedin: "",
  github: ""
}
```

---

# 16. Discord Guide

Do not simply put a Discord invite button.

Explain how the server works.

Visual structure:

```text
JOIN THE BUILD LAB

01
READ
Announcements + Rules

02
CHOOSE
Your track

03
BUILD
Use project + support channels

04
ASK
Help / GitHub / Debugging

05
SUBMIT
PRD + final project
```

Then show a simplified Discord server UI mockup.

Use a browser-window style component inspired by the BuildLab poster.

Include:

```text
📌 INFORMATION
🧭 BUILDLAB
💬 COMMUNITY
🛠 SUPPORT
👨‍💻 TRACKS
```

CTA:

```text
[ JOIN THE DISCORD → ]
```

---

# 17. GitHub Section

BuildLab is GitHub-first.

Create a section showing the workflow:

```text
ISSUE
   ↓
BRANCH
   ↓
COMMIT
   ↓
PULL REQUEST
   ↓
REVIEW
   ↓
MERGE
```

Use small monospace/code-style labels.

Visual treatment:

- black
- paper
- blue/cyan accent
- GitHub icon

CTA:

```text
[ VIEW BUILD LAB ON GITHUB → ]
```

---

# 18. Prizes & Recognition

Keep this section clean.

Main number:

```text
₹1,000
```

Then:

```text
PER TRACK
```

Three track columns:

```text
BEGINNER      ₹1,000
INTERMEDIATE  ₹1,000
ADVANCED      ₹1,000
```

Then:

```text
COMPLETION CERTIFICATE
FOR EVERY ELIGIBLE COMPLETER
```

Do not make the prize section look like a gambling/competition advertisement.

It should feel like recognition for completed work.

---

# 19. Final CTA

Large editorial block:

```text
READY
TO BUILD?

YOUR IDEA
STARTS HERE.
```

Buttons:

```text
[ REGISTER NOW → ]
[ JOIN DISCORD → ]
```

Use a restrained blue → green → yellow accent behind or around the CTA.

---

# 20. Footer

Footer should contain:

```text
TECHSPACE
SRM UNIVERSITY, SONEPAT

BUILDLAB ’26

TechSpace Website ↗
TechSpace GitHub ↗
BuildLab GitHub ↗
Discord ↗
```

Use a strong black footer section if desired, but preserve the warm paper
identity with inverted typography.

The footer should not be visually overloaded.

---

# 21. Motion

Motion should be subtle and purposeful.

Use Framer Motion where useful.

Preferred animations:

- Hero typography reveal
- Gradient text movement
- Timeline reveal
- Project filtering transitions
- Card hover
- Scientific objects drifting slightly
- Scroll-triggered section reveals

Animation timing:

```text
Fast interaction: 150–250ms
Standard transition: 300–500ms
Hero reveal: 600–900ms
```

Use easing similar to:

```text
easeOut
cubic-bezier(0.22, 1, 0.36, 1)
```

Avoid:

- excessive parallax
- bouncing cards
- spinning 3D objects
- constant background animation
- flashy page transitions

The website should feel engineered, not animated for the sake of animation.

---

# 22. Buttons

Primary button:

```text
background: #080808
color: #F4F4E8
```

Example:

```text
[ EXPLORE PROJECTS → ]
```

Hover:

- slight translation
- subtle shadow
- arrow movement

Secondary button:

```text
background: transparent
border: 1px solid #080808
color: #080808
```

Gradient buttons should be avoided as the default.

---

# 23. Icons

Use minimal line/solid icons.

Preferred sources:

- Lucide
- GitHub icon
- Discord icon
- simple custom SVGs

Icons should not overpower typography.

For scientific graphics, prefer custom SVG/CSS shapes rather than icon libraries.

---

# 24. Responsive Design

The website must be designed mobile-first.

## Mobile

Hero:

```text
TECHSPACE

BUILD
LAB ’26

LEARN BY BUILDING

[ CTA ]
```

Timeline becomes vertical.

Project catalogue becomes a single column.

Mentor cards become horizontal or single-column.

Navigation becomes a compact menu.

Do not simply shrink the desktop layout.

---

# 25. Accessibility

Maintain:

- WCAG-friendly contrast
- keyboard navigation
- visible focus states
- semantic HTML
- accessible buttons
- alt text for mentor/project images
- reduced-motion support

The warm paper background must still maintain sufficient contrast with
black text.

---

# 26. Performance

Prioritize:

- fast first load
- optimized images
- lazy-loaded mentor/project images
- SVG for simple illustrations
- minimal client-side JavaScript where possible
- avoid unnecessary animation libraries beyond the required motion layer

Do not sacrifice performance for decorative effects.

---

# 27. Content Architecture

Keep content separate from UI.

Recommended:

```text
src/
├── components/
├── sections/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Tracks.tsx
│   ├── Timeline.tsx
│   ├── Projects.tsx
│   ├── Mentors.tsx
│   ├── DiscordGuide.tsx
│   ├── Prizes.tsx
│   └── Footer.tsx
│
├── data/
│   ├── tracks.ts
│   ├── projects.ts
│   ├── mentors.ts
│   ├── timeline.ts
│   └── links.ts
│
└── styles/
```

This is important because mentor information, projects and links will change
during the program.

---

# 28. Design Tokens

```css
:root {
  --paper: #F4F4E8;
  --ink: #080808;

  --blue: #1457D9;
  --cyan: #18B8D4;
  --green: #62C94A;
  --yellow: #F3D21A;

  --blue-soft: #DCEBFF;
  --cyan-soft: #DDF6F7;
  --green-soft: #E5F4D8;
  --yellow-soft: #FFF3B8;

  --gray: #6D6D68;
  --line: #CFCFC4;

  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;

  --content-max: 1440px;
}
```

---

# 29. What NOT to Do

Do NOT make the website:

- generic SaaS
- dark-mode-only
- neon cyberpunk
- glassmorphism-heavy
- gradient-everywhere
- 3D-heavy
- AI-slop looking
- card-grid-only
- overly rounded
- visually noisy
- dependent on stock photography

Do NOT copy the poster literally.

Instead:

**translate its visual language into a responsive digital experience.**

---

# 30. Final Design Statement

The finished website should look like:

> **A Swiss editorial design system built for a student engineering program,
> with the visual energy of a modern science laboratory and the precision of
> a software development workflow.**

The visual hierarchy should always remain:

```text
TYPOGRAPHY
    ↓
GRID
    ↓
CONTENT
    ↓
COLOR
    ↓
ILLUSTRATION
    ↓
MOTION
```

Not the other way around.

The website should be recognizable as the digital counterpart of the
TechSpace BuildLab ’26 poster.
