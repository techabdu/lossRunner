"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "./ui/Container";
import { Kicker } from "./ui/Kicker";
import { Reveal } from "./ui/Reveal";

type Step = { idx: string; h: string; p: string; tag?: string };

const steps: Step[] = [
  {
    idx: "01",
    h: "It sees the renewal coming",
    p: "A renewal hits the 60-day window, or a producer forwards a request. LossRunner picks it up the moment it lands — nothing waits in a queue.",
  },
  {
    idx: "02",
    h: "It knows how to ask each carrier",
    p: "It identifies the prior carrier and exactly how that carrier wants the request — portal, email, or form — and attaches the letter of authorization.",
    tag: "The part we go deep on",
  },
  {
    idx: "03",
    h: "It follows up on its own",
    p: "Polite, on a schedule, with no one reminding it. It escalates to your team only if a request actually goes cold.",
  },
  {
    idx: "04",
    h: "It checks what comes back",
    p: "Right client, right policy, right loss period, all years present. No discovering a gap the day before the proposal is due.",
  },
  {
    idx: "05",
    h: "It files it and says it’s ready",
    p: "The loss run lands where your team already keeps records, and the account manager gets a clean “ready for review.”",
  },
];

export function HowItWorks() {
  const listRef = useRef<HTMLOListElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let raf = 0;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      raf = requestAnimationFrame(() => setActive(steps.length - 1));
      return () => cancelAnimationFrame(raf);
    }
    const compute = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const els = listRef.current?.querySelectorAll(":scope > li");
        if (!els || !els.length) return;
        const line = window.innerHeight * 0.62;
        let idx = 0;
        els.forEach((el, i) => {
          if (el.getBoundingClientRect().top < line) idx = i;
        });
        setActive(idx);
      });
    };
    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
      cancelAnimationFrame(raf);
    };
  }, []);

  const fill = ((active + 1) / steps.length) * 100;

  return (
    <section
      id="how"
      aria-labelledby="how-h"
      className="bg-[var(--bg-muted)] py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <Kicker>How it works</Kicker>
          <h2 id="how-h" className="t-headline max-w-[20ch] text-[var(--ink)]">
            One agent runs the whole errand, start to finish.
          </h2>
        </Reveal>

        <div className="relative mt-14 pl-8 sm:pl-10">
          {/* scroll-progress rail */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-3 bottom-3 w-[2px] overflow-hidden rounded-full bg-[var(--line)]"
          >
            <div
              className="w-full rounded-full bg-[var(--accent)] transition-[height] duration-700 ease-out"
              style={{ height: `${fill}%` }}
            />
          </div>

          <ol ref={listRef}>
            {steps.map((s, i) => {
              const lit = i <= active;
              return (
                <Reveal
                  as="li"
                  key={s.idx}
                  delay={i * 0.04}
                  className={`grid grid-cols-[44px_1fr] gap-5 border-t border-[var(--line)] py-8 sm:grid-cols-[72px_1fr] sm:gap-8 ${
                    i === steps.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div
                    className={`text-[28px] font-semibold leading-none tracking-[-0.02em] transition-colors duration-500 sm:text-[32px] ${
                      lit ? "text-[var(--accent)]" : "text-[var(--ink-faint)]"
                    }`}
                  >
                    {s.idx}
                  </div>
                  <div>
                    <h3 className="text-[21px] font-semibold tracking-[-0.014em] text-[var(--ink)]">
                      {s.h}
                    </h3>
                    <p className="mt-2 max-w-[62ch] text-[17px] leading-[1.47] text-[var(--ink-soft)]">
                      {s.p}
                    </p>
                    {s.tag && (
                      <span className="mt-3 inline-block rounded-full bg-[var(--accent-tint)] px-3 py-[3px] text-[12.5px] font-medium text-[var(--accent)]">
                        {s.tag}
                      </span>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
