"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface NextButtonProps {
  onClick: () => void;
  label?: string;
}

export function NextButton({ onClick, label = "Next" }: NextButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-8 right-8 flex items-center gap-2 px-5 py-3 rounded-xl bg-accent text-white text-sm font-medium z-50"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, ease: [0.32, 0.72, 0, 1] }}
      whileHover={{ scale: 1.04, backgroundColor: "#8B5CF6" }}
      whileTap={{ scale: 0.97 }}
      style={{ transition: "background-color 0.15s ease" }}
    >
      <span>{label}</span>
      <ArrowRight size={16} />
    </motion.button>
  );
}
