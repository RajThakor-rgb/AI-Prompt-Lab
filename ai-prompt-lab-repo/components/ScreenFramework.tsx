"use client";

import { motion } from "framer-motion";
import { RisenCard } from "./RisenCard";

const RISEN = [
  {
    letter: "R",
    name: "Role",
    description:
      "Tell the AI who it is. The same question asked of a marketing strategist, a finance analyst, and a HR director will produce three different answers. By assigning a role, you anchor its perspective.",
    example: "You are a senior marketing strategist at a UK retail brand.",
  },
  {
    letter: "I",
    name: "Instructions",
    description:
      "What exactly do you want it to do? Specific verbs, specific outputs. The clearer the instruction, the more directly usable the response.",
    example: "Draft a positioning statement and three campaign messages.",
  },
  {
    letter: "S",
    name: "Steps",
    description:
      "If your task has multiple stages, spell them out. This forces the AI to structure its thinking and makes the response easier to use because you can refine each step independently.",
    example:
      "First, identify the target audience. Second, draft the positioning. Third, propose three messages.",
  },
  {
    letter: "E",
    name: "End goal",
    description:
      "What does success look like? Tell the AI the standard it needs to hit and who the real audience is. Without this, the AI hedges. With this, it knows what good looks like.",
    example:
      "This will be reviewed by the marketing director and used as input to a creative brief.",
  },
  {
    letter: "N",
    name: "Narrowing",
    description:
      "What constraints, exclusions, or context does the AI need? This is the part most people skip. Narrowing is what stops the AI generating off-target content.",
    example:
      "Avoid greenwashing language. Stay under 300 words. Assume a UK audience aged 25 to 40.",
  },
];

export function ScreenFramework() {
  return (
    <div className="min-h-screen flex flex-col px-12 py-10">
      {/* Hero */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      >
        <p
          className="text-xs uppercase tracking-widest mb-3"
          style={{ color: "#7C3AED" }}
        >
          Step 1 — The Framework
        </p>
        <div className="flex items-baseline gap-8 flex-wrap">
          <h2
            className="font-bold leading-none"
            style={{
              fontSize: "clamp(5rem, 10vw, 8rem)",
              background: "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            RISEN
          </h2>
          <p
            className="text-xl max-w-lg"
            style={{ color: "#9CA3AF" }}
          >
            Five things that separate a vague prompt from a usable one
          </p>
        </div>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-col gap-2.5 flex-1">
        {RISEN.map((card, i) => (
          <RisenCard key={card.letter} {...card} index={i} />
        ))}
      </div>

      {/* Footer */}
      <motion.p
        className="mt-5 text-sm text-center"
        style={{ color: "rgba(156,163,175,0.5)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        Other frameworks worth knowing:{" "}
        <span style={{ color: "#9CA3AF" }}>CO-STAR</span> ·{" "}
        <span style={{ color: "#9CA3AF" }}>CRAFT</span> ·{" "}
        <span style={{ color: "#9CA3AF" }}>Chain-of-thought</span>
      </motion.p>
    </div>
  );
}
