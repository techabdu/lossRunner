import { Container } from "./ui/Container";
import { Kicker } from "./ui/Kicker";

const bullets = [
  "Independent & small commercial P&C agencies",
  "Account managers & CSRs drowning in carrier follow-ups",
  "Agencies on any AMS — we fit your workflow, not the reverse",
  "Teams that want to grow the book without growing the back office",
];

export function WhoFor() {
  return (
    <section aria-labelledby="who-h" className="py-20 sm:py-28">
      <Container>
        <div className="grid items-start gap-14 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Kicker>Who it&apos;s for</Kicker>
            <h2
              id="who-h"
              className="max-w-[22ch] text-[clamp(28px,4.2vw,44px)] font-semibold leading-[1.08] tracking-[-0.02em] text-[var(--ink)]"
            >
              Built for the agencies the big platforms ignore.
            </h2>
            <ul className="mt-7">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-3 border-b border-[var(--line-soft)] py-[14px] text-[16.5px] leading-[1.5] text-[var(--ink)]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[10px] inline-block h-[7px] w-[7px] flex-shrink-0 rounded-full bg-[var(--accent)]"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded-r-[var(--r-card)] border border-[var(--line-soft)] border-l-[4px] border-l-[var(--warm)] bg-[var(--bg-muted)] p-7 sm:p-8">
            <p className="text-[21px] font-medium leading-[1.32] tracking-[-0.015em] text-[var(--ink)]">
              “The process is so time-consuming, people just end up not doing it
              well.”
            </p>
            <p className="mt-4 text-[15.5px] leading-[1.55] text-[var(--ink-soft)]">
              We&apos;ve heard a version of this from every agency we&apos;ve
              talked to. If it sounds like your Mondays, we&apos;d like 15
              minutes to hear how you handle it today — whether or not you ever
              use what we build.
            </p>
          </aside>
        </div>
      </Container>
    </section>
  );
}
