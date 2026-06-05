import { Container } from "./ui/Container";
import { Kicker } from "./ui/Kicker";
import { Reveal } from "./ui/Reveal";

const cards = [
  {
    n: "Hundreds",
    p: "Of loss-run requests a year on a mid-size book — each carrier with its own portal, email alias, or form.",
  },
  {
    n: "Two weeks",
    p: "The typical wait, full of follow-ups. The single slowest step in prepping a renewal submission.",
  },
  {
    n: "Zero",
    p: "Purpose-built software your team has for this today. It’s a human suspense list and a lot of “just circling back.”",
  },
];

export function PainSection() {
  return (
    <section
      aria-labelledby="pain-h"
      className="bg-[var(--bg-muted)] py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <Kicker>The part of the job nobody fights over</Kicker>
          <h2 id="pain-h" className="t-headline max-w-[20ch] text-[var(--ink)]">
            You didn&rsquo;t get your license to play phone tag with underwriting
            desks.
          </h2>
          <p className="t-lede mt-5 max-w-[60ch] text-[var(--ink-soft)]">
            Loss-run retrieval is invisible until it&rsquo;s late&mdash;then it
            stalls a quote and risks a renewal. Too fiddly to standardize, too
            constant to ignore. At roughly 36,000 US agencies, it&rsquo;s still
            done by hand.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.08}>
              <div className="h-full rounded-[var(--r-lg)] border border-[var(--line-soft)] bg-[var(--bg-card)] p-8 shadow-[var(--shadow-sm)]">
                <div className="text-[clamp(34px,4vw,44px)] font-semibold leading-none tracking-[-0.02em] text-[var(--ink)]">
                  {c.n}
                </div>
                <p className="mt-4 text-[15px] leading-[1.5] text-[var(--ink-soft)]">
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
