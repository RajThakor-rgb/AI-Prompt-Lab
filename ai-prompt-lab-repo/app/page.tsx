"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GradientMesh } from "@/components/GradientMesh";
import { ScreenLanding } from "@/components/ScreenLanding";
import { ScreenFramework } from "@/components/ScreenFramework";
import { ScreenExample } from "@/components/ScreenExample";
import { ScreenCases } from "@/components/ScreenCases";
import { ScreenSubmission } from "@/components/ScreenSubmission";
import { ScreenThankYou } from "@/components/ScreenThankYou";

const SLIDES = ["landing", "framework", "example", "cases", "submission", "thankyou"] as const;
type Slide = (typeof SLIDES)[number];

const NEXT_LABEL: Partial<Record<Slide, string>> = { cases: "Submit Work" };
const TOTAL = String(SLIDES.length).padStart(2, "0");

export default function Page() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const goTo = useCallback((next: number) => {
    if (next < 0 || next >= SLIDES.length) return;
    setDir(next > current ? 1 : -1);
    setCurrent(next);
  }, [current]);

  const advance = useCallback(() => goTo(current + 1), [current, goTo]);
  const back = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); advance(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); back(); }
      if (e.key === "f" || e.key === "F") {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {});
        else document.exitFullscreen().catch(() => {});
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [advance, back]);

  const slideComponents: Record<Slide, React.ReactNode> = {
    landing: <ScreenLanding />,
    framework: <ScreenFramework />,
    example: <ScreenExample />,
    cases: <ScreenCases />,
    submission: <ScreenSubmission />,
    thankyou: <ScreenThankYou />,
  };

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -60 }),
  };

  const progress = ((current + 1) / SLIDES.length) * 100;
  const slideNum = String(current + 1).padStart(2, "0");
  const slideId = SLIDES[current];
  const nextLabel = NEXT_LABEL[slideId] ?? "Next →";

  return (
    <div style={{ background: "#0A0A0F", color: "#F4F4F5", height: "100dvh", overflow: "hidden", position: "relative" }}>
      <GradientMesh />

      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50" style={{ height: "2px", background: "rgba(42,42,53,0.6)" }}>
        <motion.div
          style={{ height: "100%", background: "linear-gradient(90deg, #7C3AED, #06B6D4)", originX: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
        />
      </div>

      {/* Slide counter */}
      <div className="fixed top-4 right-6 z-50 font-mono text-xs select-none" style={{ color: "rgba(156,163,175,0.5)" }}>
        <span style={{ color: "#7C3AED" }}>{slideNum}</span>{" / "}{TOTAL}
      </div>

      {/* Slide */}
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={current}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] }}
          style={{ height: "100dvh", overflowY: "auto", position: "relative", zIndex: 10 }}
        >
          {slideComponents[slideId]}
        </motion.div>
      </AnimatePresence>

      {/* Dot progress — top right, below slide counter */}
      <div className="fixed top-9 right-6 z-50 flex items-center gap-1.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? "16px" : "5px",
              height: "5px",
              background: i === current ? "#7C3AED" : "rgba(124,58,237,0.25)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
