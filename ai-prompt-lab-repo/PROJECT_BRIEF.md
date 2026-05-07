# AI Prompt Lab — Project Brief for Claude Code

A live hackathon webpage for an in-class session run by the SwipeUp AI Society at the University of Law. Used once, in a lecture room, with a projector. Built tonight.

## TL;DR for Claude Code

Build a single-page Next.js 14 app deployed to Vercel that controls a 45-minute live classroom hackathon. The page has **five screens** the presenter advances through with a single button or keyboard arrow. No backend logic. No database. No auth. Static config for the Google Form URL, the four case PDF URLs, and the team names. The page does the timing, the visual drama, the framework teaching, and displays the QR codes. The Google Form does the data capture.

The five screens, in order:

1. **Landing** — project name, presenter names, module name
2. **Framework teaching (RISEN)** — full-screen explanation of RISEN with each letter explained
3. **Worked example** — bad prompt vs RISEN prompt side-by-side for the same business scenario
4. **Submission** — spotlight reveal of the main Google Form QR code
5. **Cases + Timer** — four case cards with QR codes, 10-minute countdown timer

---

## Stack

- **Framework**: Next.js 14, App Router, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **QR generation**: `qrcode.react` (client-side, no API)
- **Fonts**: Geist Sans + Geist Mono via `next/font`
- **Deployment**: Vercel (free tier)
- **Repo**: `ai-prompt-lab` on `rajthakor-rgb` GitHub
- **No backend, no database, no env variables required**

```bash
npx create-next-app@latest ai-prompt-lab --typescript --tailwind --app --no-src-dir --import-alias "@/*"
cd ai-prompt-lab
npm install framer-motion qrcode.react lucide-react
```

---

## Visual design system

**Aesthetic**: Dark "AI lab control room". Modern, restrained, slightly cinematic. Reference points: Linear's app, Vercel's site, Anthropic's site. Not corporate. Not childish. Not neon-cyberpunk.

**Colours** (Tailwind config or CSS variables):

| Token | Hex | Use |
|---|---|---|
| `bg` | `#0A0A0F` | Page background |
| `surface` | `#13131A` | Card/panel base |
| `border` | `#2A2A35` | Subtle borders |
| `text` | `#F4F4F5` | Primary text |
| `text-muted` | `#9CA3AF` | Secondary text |
| `accent` | `#7C3AED` | Primary accent (violet) |
| `accent-glow` | `#8B5CF6` | Glow/hover state |
| `cyan` | `#06B6D4` | Interactive secondary |
| `warning` | `#F59E0B` | Timer last-2-min state |
| `danger` | `#EF4444` | Timer last-30-sec state |

**Typography**:
- Geist Sans for everything except prompts/code
- Geist Mono for the framework explanation code-style blocks and prompt examples
- Large display sizes for screens (text-6xl to text-8xl on hero elements)

**Spatial feel**:
- Subtle animated radial gradient mesh in the background (slow, ~20s loop). Use a CSS-only gradient with `background-position` animation, not a video or canvas.
- Glassmorphism panels: `bg-surface/60 backdrop-blur-xl border border-border/50`
- All transitions easing: `cubic-bezier(0.32, 0.72, 0, 1)` (Apple-style)

**No emoji. No icons that look like clip art. Use Lucide React icons sparingly for the next arrow, timer icon, and any other UI affordances.**

---

## Page structure

The whole experience is one page (`app/page.tsx`) with five states managed by React state. Use Framer Motion's `AnimatePresence` to transition between them.

```ts
type Screen = 'landing' | 'framework' | 'example' | 'submission' | 'cases';
```

The presenter clicks a single bottom-anchored "Next" button (or presses Space / Right Arrow) to advance: Landing → Framework → Example → Submission → Cases. The button is hidden on the cases screen (where the timer takes over).

---

### Screen 1 — Landing

**Layout**: Full viewport. Centred content. Bottom-right anchored "Next" arrow button.

**Content**:
- Top-left: "SwipeUp AI Society" — text-sm, text-muted, uppercase, tracking-widest
- Hero block (centred):
  - Eyebrow: "AI PROMPT LAB" — text-sm, accent colour, uppercase, tracking-[0.3em]
  - Title: "From rough idea to real result" — text-7xl, font-semibold, leading-tight
  - Subtitle: "A live prompt engineering hackathon" — text-2xl, text-muted, mt-4
- Mid-section: presenter strip
  - "Presented by" label, text-sm, text-muted, uppercase, tracking-wider
  - Names in a horizontal row, separated by thin vertical dividers: Bhumika · Deepika · Erinda · Vrishruthi
  - Below that, smaller and dimmer: "Supported by Sahid, Waseem, Ashmin"
  - Below that: "Mentored by Raj — Founder, SwipeUp AI Society"
- Bottom strip: module name in small text-muted: "Module: Artificial Intelligence, Innovation and Transformation · University of Law"
- Bottom-right: "Next" arrow button

**Animation**:
- On mount: each text block fades up with a staggered delay (0.08s between items)
- The hero title gets a subtle violet glow that pulses slowly

---

### Screen 2 — RISEN Framework

**Trigger**: Presenter clicks Next on Landing.

**Transition**: Landing dissolves with a soft crossfade (0.6s). The RISEN screen slides up from below with stagger animation on each letter card.

**Purpose**: This is the visual aid the presenter uses while teaching RISEN. Each letter gets its own row. Designed so the presenter can point at the screen and the room can read along. The page must work as a teaching surface — assume someone in the room is learning RISEN for the first time.

**Layout**:

- Top label: "STEP 1 — THE FRAMEWORK" — accent colour, tracking-widest, text-sm
- Title: "RISEN" — text-9xl, font-bold, with violet gradient text effect (background-clip: text from violet to cyan)
- Subtitle: "Five things that separate a vague prompt from a usable one" — text-xl, text-muted

Below the hero, **five horizontal cards stacked vertically**, each representing one letter:

**Card structure** (each one):
- Left column (~120px wide): the letter in massive type, text-8xl, font-bold, accent colour
- Right column: the letter's name in text-3xl font-semibold (e.g. "Role"), then the explanation in text-lg, then a one-line example in Geist Mono with a slightly different background

Each card uses glassmorphism, has a thin gradient left border (violet), and has subtle hover lift.

**Card content**:

**R — Role**
> Tell the AI who it is. The same question asked of a marketing strategist, a finance analyst, and a HR director will produce three different answers. By assigning a role, you anchor its perspective.
>
> Example: `You are a senior marketing strategist at a UK retail brand.`

**I — Instructions**
> What exactly do you want it to do? Specific verbs, specific outputs. The clearer the instruction, the more directly usable the response.
>
> Example: `Draft a positioning statement and three campaign messages.`

**S — Steps**
> If your task has multiple stages, spell them out. This forces the AI to structure its thinking and makes the response easier to use because you can refine each step independently.
>
> Example: `First, identify the target audience. Second, draft the positioning. Third, propose three messages.`

**E — End goal**
> What does success look like? Tell the AI the standard it needs to hit and who the real audience is. Without this, the AI hedges. With this, it knows what good looks like.
>
> Example: `This will be reviewed by the marketing director and used as input to a creative brief.`

**N — Narrowing**
> What constraints, exclusions, or context does the AI need? This is the part most people skip. Narrowing is what stops the AI generating off-target content.
>
> Example: `Avoid greenwashing language. Stay under 300 words. Assume a UK audience aged 25 to 40.`

Bottom of screen: small text-muted: "Other frameworks worth knowing: CO-STAR · CRAFT · Chain-of-thought" with the three names slightly emphasised.

Bottom-right: "Next — See it in action" arrow button.

**Animation**:
- Each card staggers in from below (0.08s delay between cards)
- Letters scale in with a slight overshoot
- Hovering a card lifts it 4px and brightens the border slightly

---

### Screen 3 — Worked Example

**Trigger**: Presenter clicks Next on Framework.

**Transition**: Framework screen fades out, example screen fades in with content stagger.

**Purpose**: Show the same business problem with two prompts side-by-side. Bad prompt on left. RISEN prompt on right. The contrast does the teaching.

**Layout**:

- Top label: "STEP 2 — SAME PROBLEM, TWO PROMPTS" — accent colour, tracking-widest, text-sm
- Headline: "What does RISEN actually change?" — text-5xl, font-semibold
- Sub-headline: text-xl, text-muted: "The brief: You're the Chief Strategy Officer at a FTSE 250 financial services firm. The board needs a one-page summary of your AI adoption strategy."

Below, **two columns side by side**, each in a glassmorphism card:

**Left card — The bad prompt**
- Header: "BEFORE" in text-sm, text-muted, uppercase, tracking-widest
- Below header, in a danger-tinted (red-ish #EF4444 at 20% opacity) panel:
  - In Geist Mono, text-xl, the prompt:
    > Write me a board summary about our AI adoption.
- Below the prompt: "Likely output:" label, then in muted text:
  > Generic bullet points. Hedging language. Nothing your CEO would put in front of a board.
- Below: a row of small "missing" tags showing what's absent: `No Role` · `No Steps` · `No Constraints` · `No Audience`

**Right card — The RISEN prompt**
- Header: "AFTER" in text-sm, accent colour, uppercase, tracking-widest
- Below header, in an accent-tinted (violet #7C3AED at 15% opacity) panel:
  - In Geist Mono, text-base (smaller than left because more content):
  ```
  Role: You are the Chief Strategy Officer of a FTSE 250
  financial services firm.
  
  Instructions: Draft a one-page board summary on our
  enterprise AI adoption strategy.
  
  Steps: First, summarise the current state in two sentences.
  Second, set out the three strategic priorities for the next
  18 months. Third, identify the three biggest risks and their
  mitigations.
  
  End goal: This will be presented to the board next Tuesday
  and used to approve a £4m investment.
  
  Narrowing: Use plain English. Avoid technology jargon.
  Assume non-technical board members. Stay under 400 words.
  ```
- Below: "Likely output:" label, then:
  > Structured. Specific. Decision-relevant. Something the board chair could read in two minutes and act on.
- Below: a row of small "present" tags in accent colour: `R` `I` `S` `E` `N` (each in a small chip)

Below both cards, centred:
- A small line: "Same task. Same model. Different result." — text-xl, text-muted, italic

Bottom-right: "Next — Open the form" arrow button.

**Animation**:
- The two cards slide in from left and right respectively
- The "After" card has a subtle accent glow
- The N tags pop in one at a time on the After card (R, I, S, E, N stagger)

---

### Screen 4 — Submission

**Trigger**: Presenter clicks Next on Worked Example.

**Transition**: The example content dissolves outward in a radial mask reveal. Background dims further. A single beam of "spotlight" light fades in from above. The submission content scales in from 0.92 → 1 with a slight upward translate.

**Layout**: Full viewport. Spotlight effect. Centred content stack.

**Content**:
- Top: section label "STEP 3 — SUBMIT YOUR WORK HERE" — accent colour, tracking-widest, text-sm
- Headline: "Scan to open the submission form" — text-5xl, font-semibold
- Subheadline: "One submission per team per round. You'll fill it twice — once for your raw prompt, once after applying the framework." — text-lg, text-muted, max-w-2xl
- QR code block, centred, very large (380px square minimum):
  - White background card, rounded-3xl, p-10
  - QR code rendered black on white for max scannability
  - Below QR: tiny grey text showing the destination URL
- Below the QR: 4 quick instructions in a row (numbered 01–04):
  1. Pick a team name
  2. Submit your raw prompt + output
  3. Apply RISEN (or another framework)
  4. Submit your improved prompt + output
- Bottom-right: "Next — Reveal Cases" arrow button

**Animation**:
- Spotlight beam: a soft radial gradient from the top centre, subtle, suggests stage lighting
- QR scales in with a slight overshoot (Framer Motion `type: "spring", stiffness: 200, damping: 20`)
- Instructions stagger in from below

---

### Screen 5 — Cases + Timer

**Trigger**: Presenter clicks Next on Submission.

**Transition**: Submission view crossfades out. Cases grid fades in with cards staggered (0.1s apart, 4 cards = 0.4s total). Timer appears at the top with a scale-in.

**Layout**: Full viewport. Top: Timer + label. Middle: 2x2 grid of case cards. Bottom: small text reminder.

**Top bar**:
- Left: section label "STEP 4 — YOUR CASE" — accent colour, tracking-widest
- Centre: massive timer display, monospace font, text-9xl, with subtle glow
- Right: small "Pause / Resume / Reset" controls (text-only buttons, text-sm, text-muted, hover:text)
  - Pause toggles
  - Reset confirms with `window.confirm` first
- Below timer: "Time remaining" in text-muted, text-sm, tracking-widest, uppercase

**Cases grid** (2x2):

Each card has:
- Card number in large faded numerals top-left ("01", "02", "03", "04")
- Team assignment label: "TEAM 1" through "TEAM 4" in accent colour, tracking-widest
- Function name large: "Marketing", "Operations", "Finance", "HR" — text-3xl, font-semibold
- Theme as subtitle: e.g. "Sustainable Product Launch" — text-base, text-muted
- One-line case hook: e.g. "Northwind Apparel needs a credible launch campaign for their first sustainable line."
- QR code, white-card-on-card, ~140px square
- Below QR: "Scan to open case PDF" — text-xs, text-muted

**Card hover**: subtle 3D tilt — `rotateX(2deg) rotateY(-2deg) scale(1.02)`. Smooth ease.

**Cards have a thin gradient border**: each one a different accent gradient (still in the violet/cyan family — keep it consistent, don't introduce green/orange).

**Bottom strip**:
- "Each team submits both prompts via the form" — text-sm, text-muted, centred
- A small persistent floating button bottom-right that re-shows the main submission QR in a modal (in case teams forget). Modal closes on backdrop click or Esc.

**Timer behaviour**:
- Counts down from 10:00
- Default state: white text with subtle violet glow
- At 02:00: text colour shifts to warning amber, glow becomes amber
- At 00:30: text colour shifts to danger red, glow intensifies, gentle pulse animation
- At 00:00: timer displays "TIME" in large red text, page emits a subtle screen flash (one-time, white overlay fading out over 0.5s), and a soft browser notification sound plays (use Web Audio API beep)
- Timer logic must use `requestAnimationFrame` or interval with proper cleanup. Don't use `setTimeout` recursively without cleanup.

---

## Components to build

```
/components
  ScreenLanding.tsx
  ScreenFramework.tsx     // RISEN teaching screen
  ScreenExample.tsx       // Worked example side-by-side
  ScreenSubmission.tsx
  ScreenCases.tsx
  NextButton.tsx          // big arrow button, accepts label override
  Timer.tsx               // self-contained countdown with pause/reset
  QRBlock.tsx             // wraps qrcode.react with the white card styling
  CaseCard.tsx            // individual case card with hover tilt
  RisenCard.tsx           // single letter card for the framework screen
  GradientMesh.tsx        // animated background gradient
  Spotlight.tsx           // overhead beam effect for screen 4
  FormReminderFAB.tsx     // floating button + modal for submission QR
/app
  page.tsx                // orchestrates the five screens with AnimatePresence
  layout.tsx              // sets up Geist font, dark mode default
  globals.css             // Tailwind base + the radial mesh keyframes
/lib
  config.ts               // all the editable strings live here
```

---

## Config file (this is the only thing Raj edits before tomorrow)

`/lib/config.ts`:

```ts
export const config = {
  // The main Google Form URL teams submit prompts through
  submissionFormUrl: "PASTE_GOOGLE_FORM_URL_HERE",

  // The four case PDF URLs (uploaded to /public/cases/ in the repo)
  cases: [
    {
      team: "Team 1",
      function: "Marketing",
      theme: "Sustainable Product Launch",
      hook: "Northwind Apparel needs a credible launch campaign for their first sustainable line.",
      pdfUrl: "/cases/case-01-marketing.pdf",
    },
    {
      team: "Team 2",
      function: "Operations",
      theme: "Supply Chain Carbon Analysis",
      hook: "Meridian Foods must map carbon hotspots across 240 suppliers before disclosure deadline.",
      pdfUrl: "/cases/case-02-operations.pdf",
    },
    {
      team: "Team 3",
      function: "Finance",
      theme: "Board ESG Disclosure Summary",
      hook: "Halberd Industrial needs a 2-page board ESG summary that won't get torn apart by investors.",
      pdfUrl: "/cases/case-03-finance.pdf",
    },
    {
      team: "Team 4",
      function: "HR",
      theme: "Workforce Sustainability Training",
      hook: "Cobalt Logistics must train 4,200 employees with no in-house sustainability capability.",
      pdfUrl: "/cases/case-04-hr.pdf",
    },
  ],

  // Presenter and module info
  presenters: ["Bhumika", "Deepika", "Erinda", "Vrishruthi"],
  support: ["Sahid", "Waseem", "Ashmin"],
  mentor: "Raj",
  mentorRole: "Founder, SwipeUp AI Society",
  module: "Artificial Intelligence, Innovation and Transformation",
  institution: "University of Law",

  // Timer
  timerDurationSeconds: 600, // 10 minutes
};
```

The PDFs go in `/public/cases/` — they'll be available at the URLs in the config when deployed.

---

## Repository structure

```
ai-prompt-lab/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   └── (all the components above)
├── lib/
│   └── config.ts
├── public/
│   └── cases/
│       ├── case-01-marketing.pdf
│       ├── case-02-operations.pdf
│       ├── case-03-finance.pdf
│       └── case-04-hr.pdf
├── README.md
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## README content

Include a README.md at the root with:

1. **What this is** — one paragraph describing the AI Prompt Lab session
2. **How to run locally** — `npm install && npm run dev`
3. **How to deploy** — Push to GitHub, import into Vercel, deploy. Done.
4. **Pre-session checklist for the presenter** — 6 items: form URL set in config, PDFs accessible, projector tested, audio working for timer end, browser zoomed appropriately, full-screen mode (F11) on
5. **Keyboard shortcuts** — implement these:
   - `Space` or `→` advances to next screen
   - `←` goes back one screen (useful if presenter advances by accident during teaching)
   - `R` resets the timer (with confirmation)
   - `P` pauses/resumes the timer
   - `F` toggles full-screen
   - `Esc` closes the form reminder modal

---

## Critical implementation notes

1. **The Next button must work with both click and keyboard (Space / Right Arrow).** The presenter is talking; they need to be able to advance without hunting for a mouse.

2. **The Back arrow (Left Arrow key) must work too.** During the framework explanation, the presenter might want to revisit a previous letter or go back to the worked example. Allow backwards navigation through screens 1–3 freely. Once on screen 4 or 5 (after the cases are revealed), backwards navigation is disabled to protect the timer.

3. **The form reminder FAB on Screen 5 is essential.** Teams will forget where the form is. Make it visible but not intrusive.

4. **The QR codes must render with high error correction (`level="H"`)** so they scan reliably from a projector at distance. White background, generous padding (16px minimum inside the card).

5. **All animations must respect `prefers-reduced-motion`.** Wrap Framer Motion variants accordingly.

6. **Default to dark mode. There is no light mode.** Don't add a toggle.

7. **The page must work offline once loaded.** No external API calls. Even fonts via `next/font` are self-hosted.

8. **Test that the timer keeps running if the screen is touched / clicked anywhere.** Don't use focus-dependent timers.

9. **Build for desktop first, full-screen, projector resolution (1920x1080 minimum). Mobile not required** — this only runs on the presenter's laptop.

10. **The full-screen state should hide the cursor after 3 seconds of inactivity** during Screens 4 and 5 for a cleaner look. Cursor reappears on mouse movement.

11. **No analytics. No tracking. No third-party scripts.**

---

## Done definition

The build is done when:

- `npm run dev` opens to the landing page with all 4 presenter names visible (Bhumika, Deepika, Erinda, Vrishruthi)
- Pressing space (or clicking the Next arrow) advances through all five screens in order
- Pressing left arrow goes back one screen on screens 1–3
- The RISEN screen renders all five letter cards with examples in monospace
- The worked example screen renders both prompts side-by-side cleanly
- Each QR code renders and is scannable from a phone at ~50cm
- The timer counts down from 10:00, pauses with P, resets with R after confirmation
- The form-reminder FAB on Screen 5 shows the main form QR in a modal
- All four case PDFs open when their respective QR codes are scanned
- Full-screen mode (F11 or F shortcut) hides browser chrome
- The page deploys to Vercel without errors
