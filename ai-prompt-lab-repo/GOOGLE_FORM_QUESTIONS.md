# Google Form — Copy-Paste Ready Questions

Open forms.google.com → Blank form. Copy each block below into the form one at a time.

---

## Form title

```
AI Prompt Lab — Hackathon Submission
```

## Form description

```
One submission per team per round. You will fill this form twice — once for your raw prompt and output, then again after applying the framework with your improved prompt and output. Be honest about what worked and what didn't.
```

---

## Section 1 — Team identity

### Question 1
**Type**: Short answer
**Required**: Yes
**Question text**:
```
Team name
```
**Description (helper text)**:
```
Pick something distinctive. You'll be referred to by this name when results are reviewed at the end.
```

---

### Question 2
**Type**: Multiple choice
**Required**: Yes
**Question text**:
```
Which case were you assigned?
```
**Options**:
```
Team 1 — Marketing (Northwind Apparel sustainable launch)
Team 2 — Operations (Meridian Foods supply chain carbon)
Team 3 — Finance (Halberd Industrial board ESG summary)
Team 4 — HR (Cobalt Logistics workforce sustainability training)
```

---

### Question 3
**Type**: Multiple choice
**Required**: Yes
**Question text**:
```
Which submission is this?
```
**Options**:
```
Round 1 — Raw prompt (before framework)
Round 2 — Improved prompt (after applying framework)
```

---

## Section 2 — Tools used

### Question 4
**Type**: Multiple choice
**Required**: Yes
**Question text**:
```
Which AI tool did you use?
```
**Options**:
```
ChatGPT (free)
ChatGPT (Plus)
Claude (free)
Claude (Pro)
Gemini (free)
Gemini (Pro)
Microsoft Copilot
Other
```
**Settings**: Enable "Other" option

---

### Question 5
**Type**: Short answer
**Required**: No
**Question text**:
```
Which model specifically (if you know)?
```
**Description**:
```
e.g. GPT-4o, Claude Sonnet 4.5, Gemini 2.5 Pro
```

---

## Section 3 — The prompt

### Question 6
**Type**: Paragraph (long answer)
**Required**: Yes
**Question text**:
```
Paste the exact prompt you used
```
**Description**:
```
Copy and paste it word for word. No edits. We want to see what you actually sent.
```

---

### Question 7
**Type**: Multiple choice
**Required**: No
**Question text**:
```
If this is Round 2, which framework did you apply?
```
**Options**:
```
RISEN (Role, Instructions, Steps, End goal, Narrowing)
CO-STAR (Context, Objective, Style, Tone, Audience, Response)
CRAFT (Context, Role, Action, Format, Tone)
Combination of techniques
Built my own approach
N/A — this is Round 1
Other
```
**Settings**: Enable "Other" option

---

### Question 8
**Type**: Paragraph
**Required**: No
**Question text**:
```
If you chose "Combination" or "Other", briefly describe your approach
```

---

## Section 4 — The output

### Question 9
**Type**: Paragraph
**Required**: Yes
**Question text**:
```
Paste the AI's response
```
**Description**:
```
The full output. Don't trim. If it's very long, the first 800 words is fine.
```

---

### Question 10
**Type**: Linear scale
**Required**: Yes
**Question text**:
```
On a scale of 1–10, how usable was this output?
```
**Scale**: 1 to 10
**Label for 1**:
```
Worthless, would have to start over
```
**Label for 10**:
```
Could hand this to a stakeholder as-is
```

---

### Question 11
**Type**: Paragraph
**Required**: Yes
**Question text**:
```
What was the single biggest weakness of this output?
```
**Description**:
```
One or two sentences. Be honest.
```

---

## Section 5 — Reflection

### Question 12
**Type**: Paragraph
**Required**: No
**Question text**:
```
What changed between Round 1 and Round 2?
```
**Description**:
```
Only fill this in for your Round 2 submission. What did the framework actually fix? Where was it overrated? Be specific.
```

---

### Question 13
**Type**: Paragraph
**Required**: Yes
**Question text**:
```
What did you learn from this exercise?
```
**Description**:
```
One or two sentences. The most useful thing you'll take away.
```

---

### Question 14
**Type**: Paragraph
**Required**: No
**Question text**:
```
Anything else worth flagging?
```

---

## Form settings to apply

Click the gear icon (top right) to open Settings.

**General tab**:
- Collect email addresses → **Off**
- Limit to 1 response → **Off**
- Allow response editing → **On**

**Presentation tab**:
- Show progress bar → **On**
- Confirmation message:
```
Submission received. Submit again after Round 2 with your improved prompt.
```

**Quizzes tab**: leave as default (not a quiz).

---

## Connect to a Google Sheet

After the form is built, click the **Responses** tab → click the green Sheets icon → "Create a new spreadsheet" → name it "AI Prompt Lab Responses" → Create.

Keep this sheet open in a separate browser tab during the session. You'll switch to it when reviewing results.

---

## Get the form's shareable URL

Click **Send** (top right) → click the link icon (chain) → tick "Shorten URL" → copy the link.

Paste that URL into `lib/config.ts` in the Next.js app as the value of `submissionFormUrl`.

That's it. Form takes about 8 minutes to build.
