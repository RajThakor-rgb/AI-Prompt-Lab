# AI Prompt Lab — Starter Repo

This is the starter folder for the AI Prompt Lab build. Unzip it, then point Claude Code at this directory.

## What's in here

| File | Purpose |
|---|---|
| `CLAUDE_CODE_PROMPT.md` | Copy this into Claude Code as your first message |
| `PROJECT_BRIEF.md` | Full Next.js spec — Claude Code reads this to build the app |
| `cases/` | Four sustainability case PDFs — Claude Code moves these to `/public/cases/` |
| `RUN_SHEET.md` | Run sheet for the presenting group — share with them tonight |
| `GOOGLE_FORM_QUESTIONS.md` | Question structure for the Google Form — you build it on forms.google.com |
| `PAPER_SHEET.pdf` | Printable A4 working sheet — print 12 copies |

## How to use this folder

### Step 1 — Build the webpage with Claude Code

1. Unzip this folder somewhere convenient (e.g. `~/Projects/ai-prompt-lab`)
2. Open a terminal in that folder
3. Run `claude` to start Claude Code
4. Open `CLAUDE_CODE_PROMPT.md` and paste its contents as your first message
5. Let Claude Code work. It will:
   - Read `PROJECT_BRIEF.md`
   - Walk you through its plan first
   - Scaffold the Next.js app
   - Build all five screens with animations
   - Move the case PDFs into the right place
   - Run `npm run dev` so you can verify it works

### Step 2 — Build the Google Form

1. Open `GOOGLE_FORM_QUESTIONS.md`
2. Go to forms.google.com and create a blank form
3. Follow the doc section by section to add the questions
4. Apply the form settings at the bottom of the doc
5. Connect a response sheet
6. Copy the form's shareable URL
7. Paste it into `lib/config.ts` in the Next.js app as `submissionFormUrl`

### Step 3 — Push to GitHub and deploy on Vercel

After Claude Code confirms the build is working:

```bash
git init
git add .
git commit -m "Initial AI Prompt Lab build"
gh repo create ai-prompt-lab --public --source=. --push
```

Then go to vercel.com → New Project → Import `ai-prompt-lab` → Deploy. Takes about 60 seconds.

### Step 4 — Print the paper sheets

Print 12 copies of `PAPER_SHEET.pdf`.

### Step 5 — Send the run sheet to the group

Share `RUN_SHEET.md` with the seven students. Tell them to read it, read their own section three times, and practise their part out loud at least once.

## On the day

- Open the Vercel URL on the laptop
- Press F to go full-screen
- Open the Google Sheet of responses in a separate browser window
- Everything else is in the run sheet

## If Claude Code hits usage limits

Switch to chat.z.ai with the same prompt. The brief is detailed enough that it should produce a working scaffold even on a different model.
