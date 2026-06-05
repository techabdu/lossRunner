import { Container } from "./ui/Container";
import { Kicker } from "./ui/Kicker";
import { Reveal } from "./ui/Reveal";

const cards = [
  {
    n: "×100s",
    p: "Requests a year for a mid-size book, each needing a different carrier's portal, email alias, or form.",
  },
  {
    n: "2 wks",
    p: "Typical wait, full of follow-ups — the single slowest step in prepping a renewal submission.",
  },
  {
    n: "$0",
    p: "Software your team has for this today. It's a human suspense list and a lot of \"just circling back.\"",
  },
];

export function PainSection() {
  return (
    <section aria-labelledby="pain-h" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <Kicker tone="warm">The part of the job nobody fights over</Kicker>
          <h2
            id="pain-h"
            className="max-w-[22ch] text-[clamp(28px,4.2vw,44px)] font-semibold leading-[1.08] tracking-[-0.02em] text-[var(--ink)]"
          >
            You didn&apos;t get your license to play phone tag with underwriting
            desks.
          </h2>
          <p className="mt-5 max-w-[60ch] text-[18px] leading-[1.55] text-[var(--ink-soft)]">
            Loss-run retrieval is invisible until it&apos;s late — and then it
            stalls a quote, annoys a producer, and puts a renewal at risk.
            It&apos;s the kind of work that&apos;s too fiddly to standardize and
            too constant to ignore — and at roughly 36,000 US agencies,
            it&apos;s still done by hand.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.08}>
              <div className="h-full rounded-[var(--r-card)] border border-[var(--line-soft)] bg-[var(--bg-card)] p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(41,151,255,0.45)] hover:shadow-[var(--shadow-glow)]">
                <div className="text-[40px] font-semibold leading-none tracking-[-0.03em] text-[var(--ink)]">
                  {c.n}
                </div>
                <p className="mt-4 text-[15.5px] leading-[1.55] text-[var(--ink-soft)]">
                  {c.p}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
