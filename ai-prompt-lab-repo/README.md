# AI Prompt Lab — SwipeUp AI Society

A single-page presentation app that controls a live 45-minute prompt engineering hackathon run by the SwipeUp AI Society at the University of Law. Five screens, advanced by a presenter with a single key or button, with no backend or database.

---

## How to run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The page should open to the Landing screen.

## How to deploy

1. Push this repo to GitHub (it's already at `rajthakor-rgb/ai-prompt-lab`)
2. Go to [vercel.com](https://vercel.com) → Import Project → select the repo
3. No environment variables needed. Click Deploy.

---

## Pre-session checklist

- [ ] **Form URL** — paste your Microsoft Form URL into `lib/config.ts` → `submissionFormUrl`
- [ ] **Case PDFs** — confirm they are accessible at `/cases/case-01-marketing.pdf` through `case-04-hr.pdf` (already in `/public/cases/`)
- [ ] **Projector** — connect and mirror/extend. Recommended browser zoom: 100%. Press `F` to enter full-screen.
- [ ] **Audio** — open the site in Chrome/Edge. The timer end-sound uses Web Audio API — no extra setup needed.
- [ ] **Test QR codes** — scan each case QR with a phone at ~1 metre to confirm they open the PDFs
- [ ] **Full-screen** — press `F` (or `F11`) before the session starts to hide browser chrome

---

## Keyboard shortcuts

| Key | Action |
|---|---|
| `Space` or `→` | Advance to next screen |
| `←` | Go back one screen (screens 1–3 only) |
| `P` | Pause / resume the timer (screen 5) |
| `R` | Reset the timer (with confirmation) |
| `F` | Toggle full-screen |
| `Esc` | Close the submission form reminder modal |

---

## Reference materials

These files live in the repo root and are **not** part of the deployed app:

| File | What it is |
|---|---|
| `PROJECT_BRIEF.md` | Full design spec used to build this app |
| `RUN_SHEET.md` | Presenter run-of-show script for the session |
| `GOOGLE_FORM_QUESTIONS.md` | Original question list (now using Microsoft Forms) |
| `PAPER_SHEET.pdf` | Physical handout for participants |
| `CLAUDE_CODE_PROMPT.md` | The original prompt used to generate this codebase |
