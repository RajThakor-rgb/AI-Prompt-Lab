"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TimerProps {
  durationSeconds: number;
}

export function Timer({ durationSeconds }: TimerProps) {
  const [displayTime, setDisplayTime] = useState(durationSeconds);
  const [running, setRunning] = useState(true);
  const [done, setDone] = useState(false);
  const [flash, setFlash] = useState(false);

  const remainingRef = useRef(durationSeconds);
  const runningRef = useRef(true);
  const doneRef = useRef(false);
  const lastTimestampRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const prevSecRef = useRef(durationSeconds);

  const playEndSound = useCallback(() => {
    try {
      const ctx = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.setValueAtTime(660, ctx.currentTime);
      osc.frequency.setValueAtTime(440, ctx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.8);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 1.8);
    } catch {
      // Web Audio not available — silent fallback
    }
  }, []);

  useEffect(() => {
    const tick = (timestamp: number) => {
      if (runningRef.current && !doneRef.current) {
        if (lastTimestampRef.current !== null) {
          const delta = (timestamp - lastTimestampRef.current) / 1000;
          const next = Math.max(0, remainingRef.current - delta);
          remainingRef.current = next;

          const nextSec = Math.ceil(next);
          if (nextSec !== prevSecRef.current) {
            prevSecRef.current = nextSec;
            setDisplayTime(next);
          }

          if (next <= 0 && !doneRef.current) {
            doneRef.current = true;
            setDone(true);
            setDisplayTime(0);
            setFlash(true);
            setTimeout(() => setFlash(false), 500);
            playEndSound();
          }
        }
        lastTimestampRef.current = timestamp;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [playEndSound]);

  const toggle = useCallback(() => {
    setRunning((r) => {
      const next = !r;
      runningRef.current = next;
      if (!next) lastTimestampRef.current = null;
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    if (window.confirm("Reset the timer to 10:00?")) {
      remainingRef.current = durationSeconds;
      doneRef.current = false;
      prevSecRef.current = durationSeconds;
      lastTimestampRef.current = null;
      setDisplayTime(durationSeconds);
      setDone(false);
      runningRef.current = true;
      setRunning(true);
    }
  }, [durationSeconds]);

  const mins = Math.floor(displayTime / 60);
  const secs = Math.floor(displayTime % 60);
  const display = done
    ? "TIME"
    : `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  const isWarning = displayTime <= 120 && displayTime > 30 && !done;
  const isDanger = (displayTime <= 30 && !done) || done;

  const timerColor = isDanger ? "#EF4444" : isWarning ? "#F59E0B" : "#F4F4F5";
  const glowColor = isDanger
    ? "rgba(239, 68, 68, 0.6)"
    : isWarning
      ? "rgba(245, 158, 11, 0.45)"
      : "rgba(124, 58, 237, 0.35)";

  const animName = isDanger
    ? "danger-pulse 1s ease infinite"
    : isWarning
      ? "warning-pulse 2s ease infinite"
      : "glow-pulse 4s ease infinite";

  return (
    <>
      <AnimatePresence>
        {flash && (
          <motion.div
            className="fixed inset-0 bg-white pointer-events-none z-[100]"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>

      <div className="flex flex-col items-center gap-1 select-none">
        <div
          className="font-mono leading-none"
          style={{
            fontSize: "clamp(4rem, 9vw, 8rem)",
            color: timerColor,
            textShadow: `0 0 40px ${glowColor}, 0 0 80px ${glowColor}`,
            animation: animName,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {display}
        </div>
        <p className="text-xs text-muted uppercase tracking-widest">
          Time remaining
        </p>
        <div className="flex items-center gap-5 mt-1">
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 text-xs text-muted hover:text-fg transition-colors duration-150"
          >
            {running ? <Pause size={11} /> : <Play size={11} />}
            {running ? "Pause" : "Resume"}
          </button>
          <button
            onClick={reset}
            className="flex items-center gap-1.5 text-xs text-muted hover:text-fg transition-colors duration-150"
          >
            <RotateCcw size={11} />
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
