"use client";

import { motion } from "framer-motion";

const BAD_CHIPS = ["No Role", "No Steps", "No Constraints", "No Audience"];
const RISEN_CHIPS = ["R", "I", "S", "E", "N"];

const RISEN_PROMPT = `Role: You are the Chief Strategy Officer of a FTSE 250
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
Assume non-technical board members. Stay under 400 words.`;

export function ScreenExample() {
  return (
    <div className="min-h-screen flex flex-col px-12 py-10">
      {/* Header */}
      <motion.div
        className="mb-7"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p
          className="text-xs uppercase tracking-widest mb-3"
          style={{ color: "#7C3AED" }}
        >
          Step 2 — Same problem, two prompts
        </p>
        <h2
          className="font-semibold text-fg"
          style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
        >
          What does RISEN actually change?
        </h2>
        <p className="text-lg mt-2 max-w-4xl" style={{ color: "#9CA3AF" }}>
          The brief: You&apos;re the Chief Strategy Officer at a FTSE 250
          financial services firm. The board needs a one-page summary of your AI
          adoption strategy.
        </p>
      </motion.div>

      {/* Two columns */}
      <div className="grid grid-cols-2 gap-6 flex-1">
        {/* Left — bad prompt */}
        <motion.div
          className="flex flex-col gap-5 rounded-2xl p-8"
          style={{
            background: "rgba(19,19,26,0.7)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(42,42,53,0.5)",
          }}
          initial={{ opacity: 0, x: -36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.12, ease: [0.32, 0.72, 0, 1] }}
        >
          <p
            className="text-xs uppercase tracking-widest"
            style={{ color: "#9CA3AF" }}
          >
            Before
          </p>

          <div
            className="rounded-xl px-5 py-4"
            style={{ background: "rgba(239,68,68,0.1)" }}
          >
            <code
              className="font-mono text-xl"
              style={{ color: "rgba(244,244,245,0.9)" }}
            >
              Write me a board summary about our AI adoption.
            </code>
          </div>

          <div>
            <p
              className="text-xs uppercase tracking-wider mb-2"
              style={{ color: "#9CA3AF" }}
            >
              Likely output:
            </p>
            <p className="text-base italic" style={{ color: "rgba(156,163,175,0.8)" }}>
              Generic bullet points. Hedging language. Nothing your CEO would
              put in front of a board.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-auto pt-4">
            {BAD_CHIPS.map((chip) => (
              <span
                key={chip}
                className="px-3 py-1 rounded-full text-xs"
                style={{
                  border: "1px solid rgba(239,68,68,0.3)",
                  background: "rgba(239,68,68,0.06)",
                  color: "rgba(239,68,68,0.8)",
                }}
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right — RISEN prompt */}
        <motion.div
          className="flex flex-col gap-5 rounded-2xl p-8"
          style={{
            background: "rgba(19,19,26,0.7)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(42,42,53,0.5)",
            boxShadow: "0 0 60px rgba(124,58,237,0.07)",
          }}
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.18, ease: [0.32, 0.72, 0, 1] }}
        >
          <p
            className="text-xs uppercase tracking-widest"
            style={{ color: "#7C3AED" }}
          >
            After
          </p>

          <div
            className="rounded-xl px-5 py-4 flex-1"
            style={{ background: "rgba(124,58,237,0.09)" }}
          >
            <pre
              className="font-mono text-sm leading-relaxed whitespace-pre-wrap"
              style={{ color: "rgba(244,244,245,0.9)" }}
            >
              {RISEN_PROMPT}
            </pre>
          </div>

          <div>
            <p
              className="text-xs uppercase tracking-wider mb-2"
              style={{ color: "#9CA3AF" }}
            >
              Likely output:
            </p>
            <p className="text-base italic" style={{ color: "rgba(156,163,175,0.8)" }}>
              Structured. Specific. Decision-relevant. Something the board chair
              could read in two minutes and act on.
            </p>
          </div>

          <div className="flex gap-2 mt-auto pt-2">
            {RISEN_CHIPS.map((chip, i) => (
              <motion.span
                key={chip}
                className="px-3 py-1.5 rounded-lg text-sm font-semibold"
                style={{
                  background: "rgba(124,58,237,0.16)",
                  color: "#8B5CF6",
                }}
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.4 + i * 0.07,
                  type: "spring",
                  stiffness: 220,
                  damping: 15,
                }}
              >
                {chip}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.p
        className="mt-5 text-xl italic text-center"
        style={{ color: "#9CA3AF" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Same task. Same model. Different result.
      </motion.p>
    </div>
  );
}
