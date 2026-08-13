"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "@/components/providers/smooth-scroll-provider";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useLenis();

  useEffect(() => {
    lenisRef?.current?.scrollTo(0, { immediate: true });
  }, [pathname, lenisRef]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, clipPath: "inset(0 0 6% 0)" }}
        animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
