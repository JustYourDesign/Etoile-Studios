"use client";

import { createElement, useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

export function RevealText({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  once = true,
}: {
  children: string;
  as?: React.ElementType;
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      gsap.set(el.querySelectorAll("[data-word]"), { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-word]"),
        { y: "110%" },
        {
          y: "0%",
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.05,
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [delay, once]);

  const words = children.split(" ");

  return createElement(
    Tag,
    { ref: containerRef, className: cn("flex flex-wrap", className) },
    words.map((word, i) => (
      <span key={i} className="overflow-hidden pb-[0.1em]" style={{ marginRight: "0.25em" }}>
        <span data-word className="inline-block will-change-transform">
          {word}
        </span>
      </span>
    ))
  );
}
