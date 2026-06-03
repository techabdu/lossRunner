import { Container } from "./ui/Container";
import { Kicker } from "./ui/Kicker";

const items = [
  {
    big: "Hours/week",
    p: "Returned to your account managers, off the suspense list and back on service and rounding.",
  },
  {
    big: "Days faster",
    p: "To a complete submission, because the slowest step starts itself the moment a renewal appears.",
  },
  {
    big: "Fewer slips",
    p: "No renewal quietly drifting because a loss run got forgotten in a busy week.",
  },
];

export function ReturnBand() {
  return (
    <section
      aria-labelledby="ret-h"
      className="bg-[var(--dark)] py-20 text-white sm:py-28"
    >
      <Container>
        <Kicker tone="light">What you get back</Kicker>
        <h2
          id="ret-h"
          className="max-w-[26ch] text-[clamp(28px,4.2vw,44px)] font-semibold leading-[1.08] tracking-[-0.02em] text-white"
        >
          Quieter renewals, faster quotes, and hours your team can sell with.
        </h2>
        <p className="mt-5 max-w-[60ch] text-[18px] leading-[1.55] text-white/70">
          Same people, more bandwidth — pointed at clients instead of carrier
          inboxes.
        </p>
        <div className="mt-12 grid gap-9 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.big}>
              <div className="text-[clamp(30px,4vw,42px)] font-semibold leading-none tracking-[-0.025em] text-white">
                {it.big}
              </div>
              <p className="mt-3 text-[15.5px] leading-[1.55] text-white/70">
                {it.p}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
