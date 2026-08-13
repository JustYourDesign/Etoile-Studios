"use client";

import { Component, type ReactNode } from "react";

export class SceneErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.warn("3D gallery scene failed, falling back to static layout.", error);
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
