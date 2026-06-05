import { Container } from "./ui/Container";
import { ButtonLink, ArrowLink } from "./ui/Button";
import { Eyebrow } from "./ui/Eyebrow";
import { InboxMock } from "./ui/InboxMock";
import { Reveal } from "./ui/Reveal";
import { CALENDLY_URL } from "@/lib/env";

export function Hero() {
  return (
    <header
      id="top"
      className="relative overflow-hidden pt-[88px] pb-24 sm:pt-28 sm:pb-32"
    >
      <Container className="relative z-10 text-center">
        <Reveal>
          <Eyebrow>For independent commercial P&amp;C agencies</Eyebrow>
        </Reveal>
        <Reveal
          as="h1"
          delay={0.06}
          className="t-display mx-auto mt-4 max-w-[16ch] text-[var(--ink)]"
        >
          Stop chasing carriers for loss runs.
        </Reveal>
        <Reveal
          as="p"
          delay={0.12}
          className="t-lede mx-auto mt-5 max-w-[58ch] text-[var(--ink-soft)]"
        >
          Every renewal starts with the same two-week errand. LossRunner runs it
          end to end&mdash;and only taps a human when something&rsquo;s truly
          stuck.
        </Reveal>
        <Reveal
          delay={0.18}
          className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4"
        >
          <ButtonLink href={CALENDLY_URL}>Book a call</ButtonLink>
          <ArrowLink href="#how">See how it works</ArrowLink>
        </Reveal>
        <Reveal
          as="p"
          delay={0.24}
          className="t-caption mx-auto mt-6 max-w-[46ch] text-[var(--ink-faint)]"
        >
          Built right now with a small group of agencies. Early partners shape
          the roadmap&mdash;and lock in founding pricing.
        </Reveal>

        {/* Product, centered and large — the hero is the product */}
        <Reveal delay={0.2} className="mx-auto mt-16 max-w-[680px] sm:mt-20">
          <InboxMock />
        </Reveal>
      </Container>
    </header>
  );
}
