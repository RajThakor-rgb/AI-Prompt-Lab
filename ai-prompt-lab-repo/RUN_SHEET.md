# AI Prompt Lab — Presenter Run Sheet

This is what the group runs from on the day. Read it through twice before the session. Practice your section out loud at least once.

**Total session length**: ~45 minutes
**Format**: live hackathon, four teams, two rounds, one winner

---

## Roles

**Presenters (girls — speak from the front):**
- **Bhumika** — opening + framing
- **Deepika** — RISEN framework explanation
- **Erinda** — worked example with RISEN
- **Vrishruthi** — hackathon brief + runs the screen during the timer

**Support (guys — work the room):**
- **Sahid** — hand out paper sheets at the door, help teams with logistics during the hackathon
- **Waseem** — circulate during the hackathon, answer practical questions ("where do I submit", "what tool can I use"), don't coach the prompts themselves
- **Ashmin** — switch the projector to the Google Sheet of responses when the timer ends, support results review

**Mentor:**
- **Raj** — sit at the side. Step in only if a question goes deep on platform architecture or framework theory. Otherwise: silent support.

---

## Timings

| Section | Lead | Time | Cumulative |
|---|---|---|---|
| Welcome and frame | **Bhumika** | 3 min | 3 |
| The RISEN framework | **Deepika** | 6 min | 9 |
| Worked example | **Erinda** | 5 min | 14 |
| Hackathon brief and case reveal | **Vrishruthi** | 3 min | 17 |
| Live hackathon (10-min timer) | **Vrishruthi** runs screen, **Sahid + Waseem** circulate | 10 min | 27 |
| Results review | **Bhumika, Deepika, Erinda, Vrishruthi** rotate | 14 min | 41 |
| Closing | **Bhumika** | 2 min | 43 |

---

## Pre-session checklist (15 minutes before class starts)

**Sahid**:
- [ ] Stack the paper sheets by the door — count: at least 12 (4 teams × 2 sheets + spares)
- [ ] Pens available — at least 8 spread across the room
- [ ] Confirm with Boriana where guests are seated

**Vrishruthi**:
- [ ] Laptop connected to projector. Test resolution.
- [ ] Browser open to the AI Prompt Lab page (Vercel URL). Press F to go full-screen.
- [ ] Audio output works — the timer plays a sound when it ends.
- [ ] Test scanning the main QR code on your phone — make sure it actually opens the form.
- [ ] Test scanning one case QR code — make sure the PDF opens cleanly.

**Ashmin**:
- [ ] Open the Google Form responses Sheet in a separate browser window. Sorted by timestamp descending. Keep it open.
- [ ] Confirm you can switch the projector input or browser window quickly when the timer ends.

**Bhumika, Deepika, Erinda**:
- [ ] Read your section once through. Out loud if possible.
- [ ] Phone charged.
- [ ] Standing position decided — don't all clump on one side.

---

## SECTION 1 — Welcome and frame
**Lead: Bhumika** · 3 min

Walk to the front. Don't rush. Wait until the room settles.

> "Good morning. I'm Bhumika. I'm here today with Deepika, Erinda, and Vrishruthi presenting — and Sahid, Waseem, and Ashmin supporting from the floor. Together we're the team running today's session: the AI Prompt Lab.
>
> This is a SwipeUp AI Society project. Raj is mentoring us through it. The idea is simple. Most of us in this room are using AI every day. Most of us aren't using it well. By the end of this session, every team in here will have written a bad prompt, learned a framework, written a better one, and seen the difference live.
>
> Quick question for the room — how many of you have used ChatGPT, Claude, or Gemini in the last 24 hours? [pause for hands]
>
> And how many of you have looked at the response and thought 'this is technically what I asked for, but it's not what I wanted'? [pause]
>
> That gap — between what you typed and what you needed — is the whole point of prompt engineering. It's not magic. It's not hacking. It's just being specific in a way the model can use.
>
> The research is consistent on this. Better-structured prompts produce more reliable outputs, fewer hallucinations, and significantly less back-and-forth. For a postgraduate student doing assignments, for an analyst writing a report, for a manager preparing for a board meeting — the difference between a vague prompt and a structured one is the difference between three rounds of editing and one good draft.
>
> So that's what we're going to work on today. A framework. Then practice. Then results. It's a hackathon — four cases, four teams, ten minutes on the clock. Last team standing wins bragging rights and a mention on the SwipeUp Society site.
>
> Deepika is going to walk you through the framework."

Hand to Deepika.

---

## SECTION 2 — The RISEN framework
**Lead: Deepika** · 6 min

The screen is showing the RISEN explanation page with examples. Use it as your visual aid — point to each letter as you talk through it. Don't just read what's on screen. Use it as a guide, add the explanation in your own words.

> "We're teaching you one framework today: RISEN. There are others — we'll mention them quickly at the end — but RISEN is one of the cleanest. It stands for five things, and we're going to walk through each one.
>
> [Point to R on screen]
>
> **R is for Role**. The first thing you do is tell the AI who it is. 'You are a senior marketing strategist at a UK retail brand.' Why does this matter? Because the same question asked of a marketing strategist, a finance analyst, and a HR director will produce three different answers. By giving the AI a role, you're anchoring its perspective. Without a role, it defaults to a generic helpful assistant, which is rarely what you actually need.
>
> [Point to I]
>
> **I is for Instructions**. What exactly do you want it to do? Not 'help me with marketing'. 'Draft a positioning statement and three campaign messages.' Specific verbs, specific outputs. The clearer the instruction, the more directly usable the response.
>
> [Point to S]
>
> **S is for Steps**. If your task has multiple stages, spell them out. 'First, identify the target audience. Second, draft the positioning. Third, propose three messages.' This forces the AI to structure its thinking. It also makes the response easier for you to use, because you can take each step's output and refine it independently.
>
> [Point to E]
>
> **E is for End goal**. What does success look like? 'The output will be reviewed by the marketing director and used as input to a creative brief.' This tells the AI the standard it needs to hit and who the real audience is. Without this, the AI hedges. With this, it knows what good looks like.
>
> [Point to N]
>
> **N is for Narrowing**. What constraints, exclusions, or context does the AI need? 'Avoid greenwashing language. Stay under 300 words. Assume a UK audience aged 25 to 40.' This is the part most people skip. Narrowing is what stops the AI generating off-target content. It's also what stops you having to throw away half the output.
>
> Stack these together and you go from 'help me with this case' to a prompt that actually gets you something usable on the first try.
>
> Erinda is going to show you what that looks like in practice."

Hand to Erinda.

---

## SECTION 3 — Worked example
**Lead: Erinda** · 5 min

The screen shows the worked example side-by-side: bad prompt on the left, RISEN prompt on the right. You walk through the contrast.

> "Let's see RISEN actually applied. The case on screen is one we made up: 'You're the Chief Strategy Officer at a financial services firm. The board needs a one-page summary of your AI adoption strategy.'
>
> [Point to the bad prompt on screen]
>
> Here's what most people would type:
>
> *'Write me a board summary about our AI adoption.'*
>
> What you'll get back is generic. Probably bullet points. Probably hedging language. Probably nothing your CEO would put in front of a board.
>
> [Point to the RISEN prompt on screen]
>
> Now apply RISEN.
>
> **Role**: You are the Chief Strategy Officer of a FTSE 250 financial services firm.
>
> **Instructions**: Draft a one-page board summary on our enterprise AI adoption strategy.
>
> **Steps**: First, summarise the current state in two sentences. Second, set out the three strategic priorities for the next 18 months. Third, identify the three biggest risks and their mitigations.
>
> **End goal**: This will be presented to the board next Tuesday and used to approve a four million pound investment.
>
> **Narrowing**: Use plain English. Avoid technology jargon. Assume non-technical board members. Stay under 400 words.
>
> Same task. Same AI tool. Completely different output. The first one you'd throw away. The second one you could actually hand to a board chair.
>
> Quick mention before we move on — RISEN isn't the only framework. You'll see CO-STAR, CRAFT, chain-of-thought prompting and others out there. They're all variations on the same idea. If you've already got one you like, use it. The point isn't loyalty to one framework. The point is having a structure instead of typing whatever comes into your head.
>
> Vrishruthi is going to set you up for the hackathon."

Hand to Vrishruthi.

---

## SECTION 4 — Hackathon brief and case reveal
**Lead: Vrishruthi** · 3 min

This is the moment the screen changes. As you start talking, press the Next arrow on the keyboard (or click it) to dissolve the framework view into the submission screen with the spotlight.

> "Right. Here's how the hackathon works.
>
> [PRESS NEXT — landing dissolves into submission view with QR code]
>
> The QR code on screen takes you to a Google Form. That form is where you submit your work. You submit twice — once for your raw prompt, once for your improved one.
>
> Scan it now while I keep talking. Get the form open on your phone.
>
> [PRESS NEXT — submission view dissolves into the four cases]
>
> The four cases are now on screen. You can see them — Marketing, Operations, Finance, HR. We're going to assign one case to each team. The room splits into four teams of roughly equal size. Count off in fours starting from the front left.
>
> [Pause while teams form. Sahid and Waseem help direct people.]
>
> Each team has its own QR code on its case card. Scan your team's QR code. The case PDF opens on your phone — it tells you everything you need to know about the company, the situation, the constraints.
>
> The rules are simple. Pick a team name. Read your case. Write a prompt the way you'd naturally write one. Run it through ChatGPT, Claude, Gemini — whatever you've got. Submit your raw prompt and the output via the form.
>
> Then apply RISEN. Or another framework if you prefer. Run the new prompt. Submit again.
>
> Sahid is handing out paper sheets — use them to capture your working as you go.
>
> You have 10 minutes. The clock starts when I press go. Any quick questions before we start?"

[Take 1-2 questions max. Keep it short. Then press start on the timer.]

---

## SECTION 5 — Live hackathon
**Vrishruthi runs the screen** · 10 min
**Sahid and Waseem circulate**

**Vrishruthi**: You're driving the screen. Watch the timer. Don't worry about anything else.

**Sahid**: Move between teams. If anyone needs a paper sheet or a pen, sort it. If a team is confused about the form or the case PDF, help with the mechanics — not the content.

**Waseem**: Move between teams. Answer practical questions only. "Where do I submit?" — point to the form. "What AI tool can we use?" — any of them. "Is this prompt good?" — "Submit it and find out." Don't write prompts for them. Don't coach them on RISEN — they just learned it.

**Ashmin**: Stay near the laptop. As Round 1 submissions start coming in, open the response sheet in another tab and quietly start filtering. By the time the timer ends you should know which submission is the most interesting to highlight first.

**At the 5-minute mark**, Vrishruthi calls out: "Five minutes left. If you haven't submitted Round 1 yet, do it now."

**At the 2-minute mark**, the timer turns amber. Vrishruthi calls out: "Two minutes. If you haven't applied the framework yet, start now."

**At the 30-second mark**, the timer turns red. Stay quiet. Let the tension build.

**At zero**, the page flashes once and the timer plays a sound. Vrishruthi calls out: "Time. Stop typing. Last submissions in the next ten seconds only."

---

## SECTION 6 — Results review
**Lead: Bhumika, Deepika, Erinda, Vrishruthi** rotate · 14 min
**Ashmin** drives the projector

**Ashmin** switches the projector view to the Google Sheet of responses (or pulls it up in a new tab — keep the Lab page accessible to come back to).

**Bhumika** opens it:

> "Right. Let's see what came in. We're going to go through each team. Their raw prompt. Their improved prompt. What changed."

**Allocate one team review per girl, ~3.5 minutes each:**

| Team | Reviewed by |
|---|---|
| Team 1 — Marketing | Bhumika |
| Team 2 — Operations | Deepika |
| Team 3 — Finance | Erinda |
| Team 4 — HR | Vrishruthi |

**Each team review follows the same flow:**

1. Read out their team name. Get them to identify themselves so the room knows who they are.
2. Read out their Round 1 prompt verbatim. Read out the headline of their Round 1 output. Note the usability score.
3. Read out their Round 2 prompt. Read out the headline of their Round 2 output. Note the new usability score.
4. Ask the team: "What changed for you?"
5. Offer one observation: what worked, what could have gone further. Be honest, be kind.

**After all four teams**, **Vrishruthi** picks the winner:

> "Looking at the scores, biggest improvement goes to [team name]. Round 1 they scored a [x]. Round 2 they scored a [y]. That's exactly the gap RISEN is designed to close. Well done."

[Brief applause. Move on quickly. Don't drag it out.]

---

## SECTION 7 — Closing
**Lead: Bhumika** · 2 min

> "Quick wrap-up.
>
> Three things we hope you take from this.
>
> One: the difference between a bad prompt and a good prompt isn't talent. It's structure. RISEN is one structure. Use it, or use another, but use one.
>
> Two: this matters more than it looks. Every assignment, every report, every email you draft with AI for the rest of your career — this is the skill that compounds.
>
> Three: this whole session was built by students. The platform you've been using is from SwipeUp AI Society. We're a student-led group at ULaw building practical tools for our cohort. If you want to get involved, find Raj or any of us after.
>
> Thank you to Boriana for the slot. Thank you to all the guests who've joined us today. And thank you for actually doing the work — you didn't have to. Cheers."

[End. Don't add anything after this. Sit down.]

---

## What to do if something goes wrong

| Problem | Who fixes it | How |
|---|---|---|
| QR code doesn't scan | Vrishruthi | Increase browser zoom (Ctrl/Cmd +) on the laptop. The QR will get bigger. |
| Google Form not loading on phones | Ashmin | Refresh the form URL on your laptop too. Worst case, dictate the URL out loud. |
| A team finishes way early | Sahid or Waseem | Tell them to try a third prompt with a different framework. Submit again. |
| A team is stuck | Sahid or Waseem | Sit with them. Ask "what's the role you're giving the AI?" Don't write the prompt. Lead them to it. |
| Timer runs out and a team hasn't submitted | Vrishruthi | Let them submit late. Better data than no data. Move on. |
| The page crashes | Vrishruthi | Refresh. State is intentionally simple — refreshing reloads the screen but you can navigate back to where you were in 5 seconds. |
| Projector dies | Whole group huddles on Vrishruthi's laptop. Worst case, Deepika does the framework explanation verbally and teams find the form via direct URL. |

---

## One last note from Raj

You're not performing. You're hosting. The room came to learn something useful. You've got the content, you've got the structure, and the platform behind you carries half the weight. Just be clear, be honest about what you're doing, and let the hackathon do its job. Senior people in the room respect groups that ran the room well, not groups that performed at it.

Go well.
