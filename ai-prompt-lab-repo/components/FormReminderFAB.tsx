"use client";

import { useState, useEffect } from "react";
import { QrCode, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { QRBlock } from "./QRBlock";

interface FormReminderFABProps {
  formUrl: string;
}

export function FormReminderFAB({ formUrl }: FormReminderFABProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        className="fixed bottom-8 right-8 flex items-center gap-2 px-4 py-3 rounded-xl text-sm z-50"
        style={{
          background: "rgba(19,19,26,0.9)",
          border: "1px solid rgba(42,42,53,0.7)",
          color: "#9CA3AF",
          backdropFilter: "blur(12px)",
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.03, borderColor: "rgba(124,58,237,0.5)", color: "#F4F4F5" }}
      >
        <QrCode size={15} />
        <span>Submission form</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-[60]"
            style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="flex flex-col items-center gap-6 rounded-3xl p-12"
              style={{
                background: "#13131A",
                border: "1px solid rgba(42,42,53,0.6)",
                boxShadow: "0 0 80px rgba(124,58,237,0.12)",
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between w-full">
                <h2 className="text-xl font-semibold text-fg">Submission Form</h2>
                <button
                  onClick={() => setOpen(false)}
                  className="text-muted hover:text-fg transition-colors duration-150"
                >
                  <X size={20} />
                </button>
              </div>

              <QRBlock url={formUrl} size={300} label={formUrl} />

              <p className="text-sm text-muted text-center max-w-xs leading-relaxed">
                One submission per team per round. Submit both your raw prompt
                and your RISEN-improved prompt.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
