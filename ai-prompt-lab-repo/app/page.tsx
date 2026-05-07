"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GradientMesh } from "@/components/GradientMesh";
import { NextButton } from "@/components/NextButton";
import { ScreenLanding } from "@/components/ScreenLanding";
import { ScreenFramework } from "@/components/ScreenFramework";
import { ScreenExample } from "@/components/ScreenExample";
import { ScreenSubmission } from "@/components/ScreenSubmission";
import { ScreenCases } from "@/components/ScreenCases";

type Screen = "landing" | "framework" | "example" | "submission" | "cases";

const SCREENS: Screen[] = [
  "landing",
  "framework",
  "example",
  "submission",
  "cases",
];

const NEXT_LABELS: Record<Screen, string> = {
  landing: "Next",
  framework: "See it in action",
  example: "Open the form",
  submission: "Reveal Cases",
  cases: "",
};

export default function Page() {
  const [screen, setScreen] = useState<Screen>("landing");
  const [cursorVisible, setCursorVisible] = useState(true);

  const advance = useCallback(() => {
    setScreen((s) => {
      const idx = SCREENS.indexOf(s);
      return SCREENS[idx + 1] ?? s;
    });
  }, []);

  const back = useCallback(() => {
    setScreen((s) => {
      const idx = SCREENS.indexOf(s);
      if (idx >= 3) return s; // lock back on submission/cases
      return SCREENS[idx - 1] ?? s;
    });
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      switch (e.key) {
        case "ArrowRight":
        case " ":
          e.preventDefault();
          advance();
          break;
        case "ArrowLeft":
          e.preventDefault();
          back();
          break;
        case "f":
        case "F":
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
          } else {
            document.exitFullscreen().catch(() => {});
          }
          break;
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [advance, back]);

  // Cursor auto-hide on immersive screens after 3s idle
  useEffect(() => {
    const isImmersive = screen === "cases" || screen === "submission";
    if (!isImmersive) {
      setCursorVisible(true);
      return;
    }

    let timeout: ReturnType<typeof setTimeout>;
    const show = () => {
      setCursorVisible(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setCursorVisible(false), 3000);
    };

    window.addEventListener("mousemove", show);
    timeout = setTimeout(() => setCursorVisible(false), 3000);

    return () => {
      window.removeEventListener("mousemove", show);
      clearTimeout(timeout);
      setCursorVisible(true);
    };
  }, [screen]);

  const screenMap: Record<Screen, React.ReactNode> = {
    landing: <ScreenLanding />,
    framework: <ScreenFramework />,
    example: <ScreenExample />,
    submission: <ScreenSubmission />,
    cases: <ScreenCases />,
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "#0A0A0F",
        color: "#F4F4F5",
        cursor: cursorVisible ? "auto" : "none",
      }}
    >
      <GradientMesh />

      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
          className="relative z-10"
        >
          {screenMap[screen]}
        </motion.div>
      </AnimatePresence>

      {screen !== "cases" && (
        <NextButton onClick={advance} label={NEXT_LABELS[screen]} />
      )}

      {/* Screen progress dots */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-50 pointer-events-none">
        {SCREENS.map((s) => (
          <div
            key={s}
            className="rounded-full transition-all duration-300"
            style={{
              width: s === screen ? "20px" : "6px",
              height: "6px",
              background:
                s === screen ? "#7C3AED" : "rgba(42,42,53,0.8)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
