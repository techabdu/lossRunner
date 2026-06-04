import { Container } from "./ui/Container";
import { ButtonLink } from "./ui/Button";
import { Eyebrow } from "./ui/Eyebrow";
import { InboxMock } from "./ui/InboxMock";
import { Reveal } from "./ui/Reveal";
import { CALENDLY_URL } from "@/lib/env";

export function Hero() {
  return (
    <header
      id="top"
      className="relative overflow-hidden pt-20 pb-20 sm:pt-24 sm:pb-28"
    >
      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div>
            <Reveal>
              <Eyebrow>For independent commercial P&amp;C agencies</Eyebrow>
            </Reveal>
            <Reveal
              as="h1"
              delay={0.08}
              className="mt-7 max-w-[15ch] text-[clamp(36px,5vw,60px)] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--ink)]"
            >
              Stop chasing carriers for{" "}
              <span className="text-[var(--accent)]">loss runs</span>.
            </Reveal>
            <Reveal
              as="p"
              delay={0.16}
              className="mt-6 max-w-[52ch] text-[clamp(17px,2vw,20px)] leading-[1.5] text-[var(--ink-soft)]"
            >
              Every renewal, someone on your team requests the client&apos;s
              claims history, then babysits the carrier&apos;s inbox for two
              weeks until it shows up. LossRunner does the whole errand on its
              own — and only pings a human when something&apos;s actually stuck.
            </Reveal>
            <Reveal delay={0.24} className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href={CALENDLY_URL}>Book a 15-min call</ButtonLink>
              <ButtonLink href="#how" variant="ghost">
                See how it works
              </ButtonLink>
            </Reveal>
            <Reveal
              as="p"
              delay={0.32}
              className="mt-5 text-[13.5px] text-[var(--ink-faint)]"
            >
              We&apos;re building this with a small group of agencies right now.
              Early partners shape what gets built — and lock in founding
              pricing.
            </Reveal>
          </div>

          {/* Product mockup */}
          <Reveal delay={0.18} className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-6 sm:-inset-10"
              style={{
                background:
                  "radial-gradient(60% 55% at 60% 35%, rgba(41,151,255,0.22), transparent 70%)",
                filter: "blur(36px)",
              }}
            />
            <div className="relative z-10">
              <InboxMock />
            </div>
          </Reveal>
        </div>
      </Container>
    </header>
  );
}
