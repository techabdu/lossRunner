"use client";

import { useEffect, useRef } from "react";
import { InboxMock } from "./InboxMock";

/**
 * Seats the hero product on a soft floor and applies a restrained scroll
 * parallax — the card drifts up and settles a touch as the page moves,
 * giving depth without theatrics. Frozen under reduced motion.
 */
export function HeroProduct() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const t = Math.max(-28, -y * 0.05);
        const s = Math.max(0.975, 1 - y * 0.00006);
        if (ref.current) {
          ref.current.style.transform = `translate3d(0, ${t}px, 0) scale(${s})`;
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="relative mx-auto mt-16 max-w-[920px] sm:mt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[6%] bottom-[-8%] top-[14%] -z-10"
        style={{
          background:
            "radial-gradient(58% 60% at 50% 55%, rgba(0,0,0,0.12), transparent 72%)",
          filter: "blur(44px)",
        }}
      />
      <div ref={ref} className="will-change-transform">
        <InboxMock />
      </div>
    </div>
  );
}
