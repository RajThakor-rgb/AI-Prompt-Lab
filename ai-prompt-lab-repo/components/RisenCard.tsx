"use client";

import { motion } from "framer-motion";

interface RisenCardProps {
  letter: string;
  name: string;
  description: string;
  example: string;
  index: number;
}

export function RisenCard({
  letter,
  name,
  description,
  example,
  index,
}: RisenCardProps) {
  return (
    <motion.div
      className="flex items-stretch rounded-2xl overflow-hidden hover:-translate-y-0.5 transition-transform duration-200"
      style={{
        background:
          "linear-gradient(to right, rgba(124,58,237,0.6), rgba(6,182,212,0.15)) padding-box, linear-gradient(to bottom, #7C3AED, #06B6D4) border-box",
        border: "1px solid transparent",
      }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.08 + index * 0.08,
        duration: 0.55,
        ease: [0.32, 0.72, 0, 1],
      }}
    >
      <div
        className="flex items-stretch w-full rounded-2xl"
        style={{ background: "rgba(19,19,26,0.85)", backdropFilter: "blur(20px)" }}
      >
        {/* Letter column */}
        <div className="flex items-center justify-center w-28 shrink-0 border-r border-white/5">
          <motion.span
            className="font-bold leading-none"
            style={{ fontSize: "5.5rem", color: "#7C3AED" }}
            initial={{ scale: 0.65, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.14 + index * 0.08,
              type: "spring",
              stiffness: 220,
              damping: 16,
            }}
          >
            {letter}
          </motion.span>
        </div>

        {/* Content column */}
        <div className="flex flex-col gap-1.5 py-4 pr-6 pl-6 flex-1 justify-center">
          <h3 className="text-2xl font-semibold text-fg">{name}</h3>
          <p className="text-sm text-muted leading-relaxed">{description}</p>
          <div
            className="mt-1 rounded-lg px-4 py-2.5"
            style={{ background: "rgba(124, 58, 237, 0.09)" }}
          >
            <code className="font-mono text-sm" style={{ color: "#e2e2e6" }}>
              {example}
            </code>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
