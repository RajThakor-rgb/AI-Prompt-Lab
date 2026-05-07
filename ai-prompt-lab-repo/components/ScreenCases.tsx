"use client";

import { motion } from "framer-motion";
import { Timer } from "./Timer";
import { CaseCard } from "./CaseCard";
import { config } from "@/lib/config";

export function ScreenCases() {
  return (
    <div className="min-h-screen flex flex-col px-10 py-6 gap-4">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#7C3AED" }}>
            Step 4 — Your Case
          </p>
          <p className="text-sm" style={{ color: "#9CA3AF" }}>
            Read your brief. Apply RISEN.
          </p>
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
        >
          <Timer durationSeconds={config.timerDurationSeconds} />
        </motion.div>

        <div className="w-40" />
      </div>

      {/* 2×2 grid */}
      <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
        {config.cases.map((c, i) => (
          <CaseCard
            key={c.team}
            number={String(i + 1).padStart(2, "0")}
            team={c.team}
            company={c.company}
            sector={c.sector}
            functionName={c.function}
            situation={c.situation}
            challenge={c.challenge}
            pdfUrl={c.pdfUrl}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}
