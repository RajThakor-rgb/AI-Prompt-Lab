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
      className="flex flex-col flex-1 rounded-2xl overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, rgba(124,58,237,0.45) 0%, rgba(6,182,212,0.12) 100%) padding-box, linear-gradient(160deg, #7C3AED 0%, #06B6D4 100%) border-box",
        border: "1px solid transparent",
      }}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.07 + index * 0.08, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <div
        className="flex flex-col h-full p-5 gap-3 rounded-2xl"
        style={{ background: "rgba(13,13,20,0.95)", backdropFilter: "blur(20px)" }}
      >
        {/* Letter */}
        <motion.div
          className="font-bold leading-none"
          style={{ fontSize: "4.5rem", color: "#7C3AED", lineHeight: 1 }}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.14 + index * 0.08, type: "spring", stiffness: 220, damping: 18 }}
        >
          {letter}
        </motion.div>

        {/* Name */}
        <h3 className="text-lg font-semibold text-fg">{name}</h3>

        {/* Divider */}
        <div className="h-px w-full" style={{ background: "rgba(124,58,237,0.25)" }} />

        {/* Description */}
        <p className="text-sm leading-relaxed flex-1" style={{ color: "#9CA3AF" }}>
          {description}
        </p>

        {/* Example */}
        <div
          className="rounded-xl p-3 mt-auto"
          style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.15)" }}
        >
          <p className="text-xs font-mono leading-relaxed" style={{ color: "rgba(244,244,245,0.8)" }}>
            {example}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
