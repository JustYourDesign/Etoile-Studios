"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { footerLinks, siteInfo } from "@/data/site";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

export function Footer() {
  const logoRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !logoRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        logoRef.current,
        { scale: 0.85, opacity: 0.4 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={sectionRef}
      data-nav-theme="dark"
      className="border-t border-paper/10 bg-ink px-6 pb-8 pt-20 text-paper md:px-10"
    >
      <div className="mx-auto flex max-w-[1600px] flex-col gap-16">
        <h2
          ref={logoRef}
          className="font-display text-balance text-[13vw] leading-[0.9] tracking-tight md:text-[8vw]"
        >
          Etoile Studios
        </h2>

        <div className="grid grid-cols-1 gap-10 border-t border-paper/10 pt-10 text-sm sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-stone">Navigate</span>
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="w-fit opacity-80 transition-opacity hover:opacity-100">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-stone">Contact</span>
            <a href={`mailto:${siteInfo.email}`} className="w-fit opacity-80 transition-opacity hover:opacity-100">
              {siteInfo.email}
            </a>
            <a href={siteInfo.phoneHref} className="w-fit opacity-80 transition-opacity hover:opacity-100">
              {siteInfo.phone}
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-stone">Studio</span>
            <span className="opacity-80">{siteInfo.address.line1}</span>
            <span className="opacity-80">{siteInfo.address.line2}</span>
            <span className="opacity-80">{siteInfo.address.city}</span>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-stone">Follow</span>
            {siteInfo.instagram.map((ig) => (
              <a
                key={ig.handle}
                href={ig.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit opacity-80 transition-opacity hover:opacity-100"
              >
                {ig.handle}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-paper/10 pt-6 text-[11px] uppercase tracking-[0.15em] text-stone sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {siteInfo.legalName}</span>
          <span>Photography · Videography · Content Creation</span>
        </div>
      </div>
    </footer>
  );
}
