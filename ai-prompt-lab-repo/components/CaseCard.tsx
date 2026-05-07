"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { QRBlock } from "./QRBlock";

const GRADIENTS = [
  "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)",
  "linear-gradient(135deg, #06B6D4 0%, #7C3AED 100%)",
  "linear-gradient(135deg, #8B5CF6 0%, #0EA5E9 100%)",
  "linear-gradient(135deg, #0EA5E9 0%, #8B5CF6 100%)",
];

interface CaseCardProps {
  number: string;
  team: string;
  functionName: string;
  theme: string;
  hook: string;
  pdfUrl: string;
  index: number;
}

export function CaseCard({
  number,
  team,
  functionName,
  theme,
  hook,
  pdfUrl,
  index,
}: CaseCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [2, -2]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-2, 2]);

  const [origin, setOrigin] = useState("");
  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  const fullUrl = origin ? `${origin}${pdfUrl}` : pdfUrl;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="relative rounded-2xl p-px overflow-hidden cursor-default"
      style={{
        background: GRADIENTS[index % GRADIENTS.length],
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 800,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, ease: [0.32, 0.72, 0, 1], duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div
        className="rounded-2xl p-6 h-full flex flex-col gap-4"
        style={{ background: "#13131A" }}
      >
        {/* Header row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col">
            <span
              className="font-bold leading-none select-none"
              style={{ fontSize: "3.5rem", color: "rgba(244,244,245,0.07)" }}
            >
              {number}
            </span>
            <p
              className="text-xs font-semibold uppercase tracking-widest mt-1"
              style={{ color: "#7C3AED" }}
            >
              {team}
            </p>
          </div>
          <QRBlock url={fullUrl} size={130} />
        </div>

        {/* Body */}
        <div className="flex-1 flex flex-col gap-1">
          <h3 className="text-2xl font-semibold text-fg">{functionName}</h3>
          <p className="text-sm text-muted">{theme}</p>
          <p className="text-sm mt-2 leading-relaxed" style={{ color: "rgba(244,244,245,0.65)" }}>
            {hook}
          </p>
        </div>

        <p className="text-xs text-muted/60">Scan to open case PDF</p>
      </div>
    </motion.div>
  );
}
