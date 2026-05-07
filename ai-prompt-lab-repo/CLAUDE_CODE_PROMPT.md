# Claude Code Launch Prompt

Copy everything below the line into Claude Code as your first message. It tells Claude Code exactly what to build, where to find the spec, and how to verify the build is done.

---

I'm building a webpage for a live in-class hackathon tomorrow. The full specification is in `PROJECT_BRIEF.md` in this directory. Read it in full before you start writing any code.

**What you're building**: A single-page Next.js 14 app deployed to Vercel that controls a 45-minute live classroom prompt engineering hackathon. Five screens advanced by a single Next button or keyboard arrow. No backend, no database, no environment variables. Static config. Used once, on a projector, in front of senior lecturers and industry guests.

**Stack**: Next.js 14 (App Router, TypeScript), Tailwind CSS, Framer Motion, qrcode.react, lucide-react. Geist Sans + Geist Mono via next/font.

**What's already in this folder**:

- `PROJECT_BRIEF.md` — the full spec. Read this first. Every visual decision, screen layout, component, and behaviour is defined here.
- `cases/` — four sustainability case study PDFs. These need to be moved into `/public/cases/` once the Next.js app is scaffolded.
- `RUN_SHEET.md`, `GOOGLE_FORM_QUESTIONS.md`, `PAPER_SHEET.pdf` — these are reference materials for the human running the session. Do not include them in the deployed app. Leave them in the repo root.

**Order of operations**:

1. Read `PROJECT_BRIEF.md` end to end. Do not skim the visual design system or screen-by-screen layouts. They are detailed for a reason.
2. Scaffold the Next.js app in this directory:
   ```
   npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"
   ```
   Use the current directory. Do not create a subdirectory.
3. Install dependencies:
   ```
   npm install framer-motion qrcode.react lucide-react
   ```
4. Build the components in the order they're listed in the brief:
   - Set up `lib/config.ts` first with the static configuration object
   - Build the Tailwind config with the colour tokens from the brief
   - Build the layout with Geist fonts and dark mode default
   - Build the screen components one at a time: Landing → Framework → Example → Submission → Cases
   - Build the supporting components: Timer, QRBlock, NextButton, GradientMesh, Spotlight, FormReminderFAB
   - Wire it all together in `app/page.tsx` with AnimatePresence for the screen transitions
5. Move the four case PDFs from `cases/` into `public/cases/`.
6. Run `npm run dev` and verify the app loads.
7. Test all five screens advance correctly with both the Next button and the Space/Right Arrow keys.
8. Test the timer counts down, pauses, resets, and changes colour at the 2-minute and 30-second marks.
9. Test that QR codes render and scan reliably from a phone at ~50cm.

**Things that matter most for visual quality**:

- The dark "AI lab control room" aesthetic. Think Linear, Vercel, Anthropic. Not corporate, not childish, not cyberpunk neon.
- Glassmorphism on cards: `bg-surface/60 backdrop-blur-xl border border-border/50`
- Generous whitespace and large display typography (text-6xl to text-9xl on hero elements)
- The RISEN screen is a teaching surface — each letter card needs to be clearly readable from across a room
- The worked example screen must let the room visually compare the bad prompt and the RISEN prompt side-by-side without scrolling
- The cases screen has a 2x2 grid of cards each with a distinct gradient border (violet/cyan family, no green/orange)
- The timer is the visual centrepiece on screen 5 — text-9xl, monospace, with a glow that intensifies as time runs out

**Constraints to respect**:

- No external API calls. The page must work fully offline once loaded.
- No analytics, no tracking, no third-party scripts.
- Default to dark mode only. No toggle.
- All animations must respect `prefers-reduced-motion`.
- Build for desktop projector resolution (1920x1080 minimum). Mobile is not required.
- Use `qrcode.react` with `level="H"` for high error correction so QR codes scan from a distance.
- The form URL in `lib/config.ts` will be filled in by the human after they create the Google Form. Leave it as the placeholder `"PASTE_GOOGLE_FORM_URL_HERE"` for now — the QR component should still render (it'll just point at the placeholder string until updated).

**When you're done**:

- Confirm the build runs cleanly with `npm run dev`
- Confirm `npm run build` produces a clean production build with no TypeScript errors
- Update the `README.md` at the root following the structure in the project brief (what it is, how to run, how to deploy, pre-session checklist, keyboard shortcuts)
- Tell me what to do next: which command to run to push to GitHub, and how to deploy on Vercel

Start by reading `PROJECT_BRIEF.md` in full. Then walk me through your plan in 5 bullet points before you start coding so I can confirm you've understood the spec correctly.
