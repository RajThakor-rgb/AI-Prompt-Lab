"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { QRBlock } from "./QRBlock";

const ACCENT_COLORS = [
  { from: "#7C3AED", to: "#06B6D4" },
  { from: "#06B6D4", to: "#7C3AED" },
  { from: "#8B5CF6", to: "#0EA5E9" },
  { from: "#0EA5E9", to: "#8B5CF6" },
];

interface CaseCardProps {
  number: string;
  team: string;
  company: string;
  sector: string;
  functionName: string;
  situation: string;
  challenge: string;
  pdfUrl: string;
  index: number;
}

export function CaseCard({
  number,
  team,
  company,
  sector,
  functionName,
  situation,
  challenge,
  pdfUrl,
  index,
}: CaseCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [1.5, -1.5]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-1.5, 1.5]);

  const [origin, setOrigin] = useState("");
  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  const fullUrl = origin ? `${origin}${pdfUrl}` : pdfUrl;
  const accent = ACCENT_COLORS[index % ACCENT_COLORS.length];
  const gradient = `linear-gradient(135deg, ${accent.from} 0%, ${accent.to} 100%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      className="relative rounded-2xl p-px overflow-hidden"
      style={{
        background: gradient,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 900,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08 * index, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      whileHover={{ scale: 1.01 }}
    >
      <div
        className="rounded-2xl h-full flex flex-col"
        style={{ background: "#0E0E16" }}
      >
        {/* Card header */}
        <div
          className="flex items-start justify-between gap-3 px-5 pt-4 pb-3"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="flex flex-col gap-1 flex-1">
            {/* Number + team */}
            <div className="flex items-center gap-3">
              <span
                className="font-bold leading-none select-none"
                style={{ fontSize: "2.2rem", color: "rgba(244,244,245,0.06)" }}
              >
                {number}
              </span>
              <div className="flex flex-col">
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: accent.from }}
                >
                  {team}
                </span>
                <span className="text-lg font-bold leading-tight" style={{ color: "#F4F4F5" }}>
                  {functionName}
                </span>
              </div>
            </div>
            {/* Company + sector */}
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-sm font-medium" style={{ color: "#F4F4F5" }}>
                {company}
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: "rgba(124,58,237,0.12)",
                  border: "1px solid rgba(124,58,237,0.2)",
                  color: "#9CA3AF",
                }}
              >
                {sector}
              </span>
            </div>
          </div>

          {/* QR code */}
          <div className="shrink-0">
            <QRBlock url={fullUrl} size={90} />
          </div>
        </div>

        {/* Card body */}
        <div className="flex flex-col gap-3 px-5 py-4 flex-1">
          {/* Situation */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-1"
              style={{ color: "rgba(156,163,175,0.5)" }}
            >
              Situation
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(244,244,245,0.75)" }}>
              {situation}
            </p>
          </div>

          {/* Challenge highlighted panel */}
          <div
            className="rounded-xl px-4 py-3"
            style={{
              background: `linear-gradient(135deg, ${accent.from}18 0%, ${accent.to}08 100%)`,
              border: `1px solid ${accent.from}25`,
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-1"
              style={{ color: accent.from }}
            >
              Challenge
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(244,244,245,0.85)" }}>
              {challenge}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 pb-3">
          <p className="text-xs" style={{ color: "rgba(156,163,175,0.4)" }}>
            Scan QR to open full brief
          </p>
        </div>
      </div>
    </motion.div>
  );
}
