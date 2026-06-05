import { Container } from "./ui/Container";
import { Kicker } from "./ui/Kicker";
import { Reveal } from "./ui/Reveal";

const items = [
  {
    big: "Hours back",
    p: "Returned to your account managers every week — off the suspense list, back on service and rounding.",
  },
  {
    big: "Days faster",
    p: "To a complete submission, because the slowest step starts itself the moment a renewal appears.",
  },
  {
    big: "Zero slips",
    p: "No renewal quietly drifting because a loss run got forgotten in a busy week.",
  },
];

/* The one cinematic dark band. A single soft spotlight from the top —
   not an ambient mesh — gives depth against true black. */
export function ReturnBand() {
  return (
    <section
      aria-labelledby="ret-h"
      className="relative overflow-hidden bg-[var(--dark-bg)] py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(41,151,255,0.12), transparent 70%)",
        }}
      />
      <Container className="relative z-10">
        <Reveal>
          <Kicker tone="onDark">What you get back</Kicker>
          <h2
            id="ret-h"
            className="t-headline max-w-[26ch] text-[var(--dark-ink)]"
          >
            Quieter renewals, faster quotes, and hours your team can sell with.
          </h2>
          <p className="t-lede mt-5 max-w-[58ch] text-[var(--dark-ink-soft)]">
            Same people, more bandwidth&mdash;pointed at clients instead of
            carrier inboxes.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.big} delay={i * 0.08}>
              <div className="text-[clamp(30px,4vw,40px)] font-semibold leading-none tracking-[-0.022em] text-[var(--dark-ink)]">
                {it.big}
              </div>
              <p className="mt-3 text-[15px] leading-[1.5] text-[var(--dark-ink-soft)]">
                {it.p}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
