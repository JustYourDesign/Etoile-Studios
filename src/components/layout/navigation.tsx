"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, siteInfo } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);
  const pathname = usePathname();

  const [closedForPathname, setClosedForPathname] = useState(pathname);
  if (pathname !== closedForPathname) {
    setClosedForPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-nav-theme]"));
    if (sections.length === 0) {
      // Default state is already `false` — nothing to synchronize.
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setLight(visible.target.getAttribute("data-nav-theme") === "light");
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          scrolled ? "py-4" : "py-6"
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-[1600px] items-center justify-between px-6 transition-colors duration-500 md:px-10",
            light ? "text-ink" : "text-paper"
          )}
        >
          <Link
            href="/"
            className="font-display text-sm font-medium tracking-[0.25em] uppercase"
            data-cursor="hidden"
          >
            Etoile Studios
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-cursor="hidden"
                className={cn(
                  "group relative text-[11px] font-medium uppercase tracking-[0.2em] transition-opacity",
                  pathname === link.href ? "opacity-100" : "opacity-70 hover:opacity-100"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100",
                    pathname === link.href && "scale-x-100"
                  )}
                />
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] md:hidden"
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-label="Open navigation menu"
          >
            Menu
          </button>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} pathname={pathname} />
    </>
  );
}

function MobileMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-[100] flex flex-col bg-ink text-paper md:hidden"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-center justify-between px-6 py-6">
            <span className="font-display text-sm tracking-[0.25em] uppercase">Etoile Studios</span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="text-[11px] font-medium uppercase tracking-[0.2em]"
            >
              Close
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-2 px-6" aria-label="Mobile">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "font-display block py-3 text-5xl leading-none tracking-tight",
                    pathname === link.href ? "opacity-100" : "opacity-60"
                  )}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex flex-col gap-1 px-6 pb-10 text-xs uppercase tracking-[0.15em] text-stone">
            <span>{siteInfo.address.line1}, {siteInfo.address.line2}</span>
            <span>{siteInfo.email}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
