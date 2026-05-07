"use client";

import { motion } from "framer-motion";
import { GradientMesh } from "./GradientMesh";
import { Spotlight } from "./Spotlight";

const RISEN_LETTERS = ["R", "I", "S", "E", "N"];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.55, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] },
});

export function ScreenThankYou() {
  return (
    <div
      className="relative flex flex-col items-center justify-center px-8"
      style={{ minHeight: "100dvh", textAlign: "center" }}
    >
      <GradientMesh />
      <Spotlight />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl w-full">
        {/* Label */}
        <motion.p
          {...fadeUp(0.05)}
          className="text-xs uppercase tracking-widest font-semibold"
          style={{ color: "#7C3AED" }}
        >
          Thank you for participating
        </motion.p>

        {/* Main heading */}
        <motion.h1
          {...fadeUp(0.15)}
          style={{
            fontSize: "clamp(3rem, 6vw, 5.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            background: "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Now go build something worth prompting for.
        </motion.h1>

        {/* Divider */}
        <motion.div
          {...fadeUp(0.25)}
          style={{
            width: "100%",
            maxWidth: "480px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), transparent)",
          }}
        />

        {/* Quote */}
        <motion.p
          {...fadeUp(0.33)}
          className="text-base italic"
          style={{ color: "#9CA3AF", maxWidth: "560px", lineHeight: 1.7 }}
        >
          &ldquo;Remember: the best prompt engineers aren&apos;t the ones who know the most
          tricks. They&apos;re the ones who think clearest about what they actually need.&rdquo;
        </motion.p>

        {/* RISEN pills */}
        <motion.div
          {...fadeUp(0.42)}
          className="flex items-center gap-3 flex-wrap justify-center"
        >
          {RISEN_LETTERS.map((letter, i) => (
            <motion.span
              key={letter}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.07, duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="font-semibold"
              style={{
                background: "rgba(124,58,237,0.12)",
                border: "1px solid rgba(124,58,237,0.25)",
                color: "#8B5CF6",
                padding: "6px 16px",
                borderRadius: "999px",
                fontSize: "1rem",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Credits */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="absolute bottom-8 left-0 right-0 text-center text-xs"
        style={{ color: "rgba(156,163,175,0.4)" }}
      >
        SwipeUp AI Society &middot; University of Law &middot; Artificial Intelligence, Innovation and Transformation
      </motion.p>
    </div>
  );
}
