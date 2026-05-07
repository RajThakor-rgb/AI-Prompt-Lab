"use client";

import { motion } from "framer-motion";

export function Spotlight() {
  return (
    <motion.div
      className="fixed inset-x-0 top-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      aria-hidden="true"
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "700px",
          background:
            "radial-gradient(ellipse 55% 60% at 50% -5%, rgba(124, 58, 237, 0.18) 0%, rgba(124, 58, 237, 0.06) 40%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
