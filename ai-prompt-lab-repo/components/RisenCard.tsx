"use client";

import { motion } from "framer-motion";

interface RisenCardProps {
  letter: string;
  name: string;
  description: string;
  example: string;
  index: number;
}

export function RisenCard({ letter, name, description, example, index }: RisenCardProps) {
  return (
    <motion.div
      className="flex items-stretch rounded-xl overflow-hidden"
      style={{
        background:
          "linear-gradient(to right, rgba(124,58,237,0.5), rgba(6,182,212,0.12)) padding-box, linear-gradient(to bottom right, #7C3AED, #06B6D4) border-box",
        border: "1px solid transparent",
      }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.06 + index * 0.07, duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
      whileHover={{ scale: 1.005, transition: { duration: 0.15 } }}
    >
      <div
        className="flex items-center w-full rounded-xl"
        style={{ background: "rgba(19,19,26,0.92)", backdropFilter: "blur(20px)" }}
      >
        {/* Letter */}
        <div className="flex items-center justify-center shrink-0 self-stretch border-r border-white/5"
          style={{ width: "64px" }}>
          <motion.span
            className="font-bold leading-none"
            style={{ fontSize: "2.6rem", color: "#7C3AED" }}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.12 + index * 0.07, type: "spring", stiffness: 240, damping: 18 }}
          >
            {letter}
          </motion.span>
        </div>

        {/* Name + description */}
        <div className="flex flex-col justify-center py-3 pl-5 pr-4 flex-1 min-w-0">
          <h3 className="text-base font-semibold text-fg leading-tight mb-0.5">{name}</h3>
          <p className="text-xs leading-relaxed" style={{ color: "#9CA3AF" }}>{description}</p>
        </div>

        {/* Example */}
        <div
          className="shrink-0 self-stretch flex items-center px-4 py-3 mr-4 my-3 rounded-lg"
          style={{ background: "rgba(124,58,237,0.1)", width: "260px" }}
        >
          <code className="font-mono text-xs leading-relaxed" style={{ color: "rgba(244,244,245,0.85)" }}>
            {example}
          </code>
        </div>
      </div>
    </motion.div>
  );
}
