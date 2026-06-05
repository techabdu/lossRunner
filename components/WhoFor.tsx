import { Container } from "./ui/Container";
import { Kicker } from "./ui/Kicker";
import { Reveal } from "./ui/Reveal";

const bullets = [
  "Independent & small commercial P&C agencies",
  "Account managers & CSRs drowning in carrier follow-ups",
  "Agencies on any AMS — we fit your workflow, not the reverse",
  "Teams that want to grow the book without growing the back office",
];

export function WhoFor() {
  return (
    <section
      id="who"
      aria-labelledby="who-h"
      className="bg-[var(--bg-muted)] py-24 sm:py-32"
    >
      <Container>
        <div className="grid items-start gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
          <Reveal>
            <Kicker>Who it&rsquo;s for</Kicker>
            <h2 id="who-h" className="t-headline max-w-[20ch] text-[var(--ink)]">
              Built for the agencies the big platforms ignore.
            </h2>
            <ul className="mt-7">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-3 border-b border-[var(--line-soft)] py-4 text-[17px] leading-[1.5] text-[var(--ink)]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[10px] inline-block h-[7px] w-[7px] flex-shrink-0 rounded-full bg-[var(--accent)]"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <aside className="rounded-[var(--r-lg)] border border-[var(--line-soft)] bg-[var(--bg-card)] p-8 shadow-[var(--shadow-sm)]">
              <p className="t-title font-medium text-[var(--ink)]">
                &ldquo;The process is so time-consuming, people just end up not
                doing it well.&rdquo;
              </p>
              <p className="mt-4 text-[15px] leading-[1.5] text-[var(--ink-soft)]">
                We&rsquo;ve heard a version of this from every agency we&rsquo;ve
                talked to. If it sounds like your Mondays, give us 15
                minutes&mdash;whether or not you ever use what we build.
              </p>
            </aside>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
