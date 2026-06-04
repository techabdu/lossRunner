import { Container } from "./ui/Container";
import { ButtonLink } from "./ui/Button";
import { Eyebrow } from "./ui/Eyebrow";
import { CALENDLY_URL } from "@/lib/env";

export function Hero() {
  return (
    <header id="top" className="pt-20 pb-16 sm:pt-28 sm:pb-24">
      <Container>
        <div className="reveal d1">
          <Eyebrow>For independent commercial P&amp;C agencies</Eyebrow>
        </div>
        <h1 className="reveal d2 mt-7 max-w-[14ch] text-[clamp(40px,6.6vw,72px)] font-semibold leading-[1.02] tracking-[-0.025em] text-[var(--ink)]">
          Stop chasing carriers for{" "}
          <span className="text-[var(--accent)]">loss runs</span>.
        </h1>
        <p className="reveal d3 mt-7 max-w-[56ch] text-[clamp(18px,2.1vw,21px)] leading-[1.5] text-[var(--ink-soft)]">
          Every renewal, someone on your team requests the client&apos;s claims
          history, then babysits the carrier&apos;s inbox for two weeks until it
          shows up. LossRunner does the whole errand on its own — and only pings
          a human when something&apos;s actually stuck.
        </p>
        <div className="reveal d4 mt-9 flex flex-wrap items-center gap-3">
          <ButtonLink href={CALENDLY_URL}>Book a 15-min call</ButtonLink>
          <ButtonLink href="#how" variant="ghost">
            See how it works
          </ButtonLink>
        </div>
        <p className="reveal d5 mt-5 text-[13.5px] text-[var(--ink-faint)]">
          We&apos;re building this with a small group of agencies right now.
          Early partners shape what gets built — and lock in founding pricing.
        </p>
      </Container>
    </header>
  );
}
