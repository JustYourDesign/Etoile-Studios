"use client";

import { useSyncExternalStore } from "react";

function subscribe(query: string) {
  return (callback: () => void) => {
    const mql = window.matchMedia(query);
    mql.addEventListener("change", callback);
    return () => mql.removeEventListener("change", callback);
  };
}

export function useIsTouchDevice() {
  return useSyncExternalStore(
    subscribe("(pointer: coarse)"),
    () => window.matchMedia("(pointer: coarse)").matches,
    () => true
  );
}

export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribe("(prefers-reduced-motion: reduce)"),
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );
}
