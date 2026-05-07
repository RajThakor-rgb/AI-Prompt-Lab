"use client";

import { motion } from "framer-motion";
import { config } from "@/lib/config";

const EASE = [0.32, 0.72, 0, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: EASE },
});

export function ScreenLanding() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-12 py-10">
      {/* Top-left */}
      <motion.p
        {...fadeUp(0)}
        className="absolute top-8 left-12 text-xs uppercase tracking-widest"
        style={{ color: "#9CA3AF" }}
      >
        SwipeUp AI Society
      </motion.p>

      {/* Hero */}
      <div className="flex flex-col items-center text-center max-w-5xl">
        <motion.p
          {...fadeUp(0.1)}
          className="text-xs uppercase tracking-[0.3em] mb-6"
          style={{ color: "#7C3AED" }}
        >
          AI PROMPT LAB
        </motion.p>

        <motion.h1
          {...fadeUp(0.18)}
          className="font-semibold leading-tight"
          style={{
            fontSize: "clamp(3.5rem, 6vw, 5.5rem)",
            animation: "glow-pulse 4s ease infinite",
          }}
        >
          From rough idea
          <br />
          to real result
        </motion.h1>

        <motion.p
          {...fadeUp(0.26)}
          className="text-2xl mt-5"
          style={{ color: "#9CA3AF" }}
        >
          A live prompt engineering hackathon
        </motion.p>

        {/* Presenters */}
        <motion.div
          {...fadeUp(0.34)}
          className="mt-14 flex flex-col items-center gap-3"
        >
          <p className="text-xs uppercase tracking-wider" style={{ color: "#9CA3AF" }}>
            Presented by
          </p>

          <div className="flex items-center">
            {config.presenters.map((name, i) => (
              <span key={name} className="flex items-center">
                <span className="text-lg font-medium text-fg px-4">{name}</span>
                {i < config.presenters.length - 1 && (
                  <span style={{ color: "#2A2A35", fontSize: "1.4rem" }}>|</span>
                )}
              </span>
            ))}
          </div>

          <p className="text-sm mt-1" style={{ color: "rgba(156,163,175,0.65)" }}>
            Supported by {config.support.join(", ")}
          </p>
          <p className="text-sm" style={{ color: "rgba(156,163,175,0.5)" }}>
            Mentored by {config.mentor} — {config.mentorRole}
          </p>
        </motion.div>
      </div>

      {/* Bottom module name */}
      <motion.p
        {...fadeUp(0.42)}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-center whitespace-nowrap"
        style={{ color: "rgba(156,163,175,0.4)" }}
      >
        Module: {config.module} · {config.institution}
      </motion.p>
    </div>
  );
}
