"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    if (prefersReducedMotion()) {
      setProgress(100);
      setVisible(false);
      document.body.style.overflow = "";
      return;
    }

    const counter = { value: 0 };
    const tween = gsap.to(counter, {
      value: 100,
      duration: 1.4,
      ease: "power2.inOut",
      onUpdate: () => setProgress(Math.round(counter.value)),
      onComplete: () => {
        setTimeout(() => {
          setVisible(false);
          document.body.style.overflow = "";
        }, 200);
      },
    });

    return () => {
      tween.kill();
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <span className="font-display text-lg tracking-[0.35em] text-paper uppercase">
            Etoile Studios
          </span>
          <span className="font-display mt-6 text-7xl tabular-nums text-paper/90 md:text-8xl">
            {String(progress).padStart(2, "0")}
          </span>
          <div className="mt-8 h-px w-40 overflow-hidden bg-paper/15">
            <div
              className="h-full bg-blue-glow transition-[width] duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
