import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

export function Statement() {
  return (
    <section className="py-20 text-center sm:py-28">
      <Container>
        <Reveal>
          <p className="mx-auto max-w-[20ch] text-[clamp(30px,4.6vw,52px)] font-semibold leading-[1.1] tracking-[-0.02em] text-[var(--ink)]">
            Loss runs are the most ignored two weeks in your renewal cycle.
          </p>
          <p className="mx-auto mt-5 max-w-[34ch] text-[clamp(20px,2.4vw,26px)] font-medium leading-[1.3] tracking-[-0.015em] text-[var(--ink-faint)]">
            We handed them to an agent that never forgets to follow up.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
