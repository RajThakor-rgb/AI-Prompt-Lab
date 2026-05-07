"use client";

import { motion } from "framer-motion";
import { Spotlight } from "./Spotlight";
import { QRBlock } from "./QRBlock";
import { config } from "@/lib/config";

const STEPS = [
  { num: "01", text: "Pick a team name" },
  { num: "02", text: "Submit your raw prompt + output" },
  { num: "03", text: "Apply RISEN (or another framework)" },
  { num: "04", text: "Submit your improved prompt + output" },
];

export function ScreenSubmission() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-12 py-10">
      <Spotlight />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl gap-6">
        <motion.p
          className="text-xs uppercase tracking-widest"
          style={{ color: "#7C3AED" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.32, 0.72, 0, 1] }}
        >
          Step 5 — Submit your work here
        </motion.p>

        <motion.h2
          className="font-semibold text-fg"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, ease: [0.32, 0.72, 0, 1] }}
        >
          Scan to open the submission form
        </motion.h2>

        <motion.p
          className="text-lg max-w-2xl"
          style={{ color: "#9CA3AF" }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14, ease: [0.32, 0.72, 0, 1] }}
        >
          One submission per team per round. You&apos;ll fill it twice — once
          for your raw prompt, once after applying the framework.
        </motion.p>

        <motion.div
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
        >
          <QRBlock
            url={config.submissionFormUrl}
            size={380}
            label={config.submissionFormUrl}
          />
        </motion.div>

        <div className="flex gap-10 mt-2">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className="flex flex-col items-center gap-2 max-w-[140px]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.07 }}
            >
              <span
                className="text-2xl font-bold"
                style={{ color: "#7C3AED" }}
              >
                {step.num}
              </span>
              <p className="text-sm text-center" style={{ color: "#9CA3AF" }}>
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
