"use client";

import { motion } from "framer-motion";
import { Timer } from "./Timer";
import { CaseCard } from "./CaseCard";
import { FormReminderFAB } from "./FormReminderFAB";
import { config } from "@/lib/config";

export function ScreenCases() {
  return (
    <div className="min-h-screen flex flex-col px-12 py-8 gap-5">
      {/* Top bar: label | timer | spacer */}
      <div className="flex items-center justify-between">
        <p
          className="text-xs uppercase tracking-widest"
          style={{ color: "#7C3AED" }}
        >
          Step 4 — Your Case
        </p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
        >
          <Timer durationSeconds={config.timerDurationSeconds} />
        </motion.div>

        {/* Spacer to centre timer */}
        <div className="w-32" />
      </div>

      {/* 2×2 grid */}
      <div className="grid grid-cols-2 gap-5 flex-1">
        {config.cases.map((c, i) => (
          <CaseCard
            key={c.team}
            number={String(i + 1).padStart(2, "0")}
            team={c.team}
            functionName={c.function}
            theme={c.theme}
            hook={c.hook}
            pdfUrl={c.pdfUrl}
            index={i}
          />
        ))}
      </div>

      {/* Bottom note */}
      <motion.p
        className="text-sm text-center pb-2"
        style={{ color: "#9CA3AF" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Each team submits both prompts via the form
      </motion.p>

      <FormReminderFAB formUrl={config.submissionFormUrl} />
    </div>
  );
}
