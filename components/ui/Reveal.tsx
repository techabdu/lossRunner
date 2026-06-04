"use client";

import { ElementType, ReactNode, useEffect, useRef, useState } from "react";

type RevealProps = {
  children: ReactNode;
  /** transition-delay in seconds, for intra-section stagger */
  delay?: number;
  /** element to render as (default "div") — e.g. "li", "section" */
  as?: ElementType;
  className?: string;
};

/**
 * Scroll-reveal wrapper. Fades/slides its children in once, the first time
 * they enter the viewport (IntersectionObserver, one-shot). Honors
 * prefers-reduced-motion and degrades gracefully: the hidden initial state
 * is gated behind `.js` in globals.css, and a safety timer reveals content
 * even if the observer never fires. Styling lives in globals.css
 * (.reveal-on-scroll / .is-visible).
 */
export function Reveal({
  children,
  delay = 0,
  as,
  className = "",
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion: globals.css already renders content visible, no JS needed.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // No IntersectionObserver (ancient browsers): reveal so nothing stays hidden.
    if (typeof IntersectionObserver === "undefined") {
      const t = window.setTimeout(() => setVisible(true), 200);
      return () => window.clearTimeout(t);
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal-on-scroll${visible ? " is-visible" : ""}${
        className ? " " + className : ""
      }`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
