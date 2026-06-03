import { Container } from "./ui/Container";
import { ButtonLink } from "./ui/Button";
import { CALENDLY_URL } from "@/lib/env";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--line-soft)] bg-white/75 backdrop-blur-xl backdrop-saturate-150">
      <Container>
        <div className="flex h-[64px] items-center justify-between">
          <a
            href="#top"
            className="flex items-baseline gap-[9px] text-[19px] font-semibold tracking-[-0.015em] text-[var(--ink)]"
          >
            LossRunner
            <span className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-[var(--ink-faint)]">
              by HAQ
            </span>
          </a>
          <ButtonLink href={CALENDLY_URL} size="sm">
            Book a 15-min call
          </ButtonLink>
        </div>
      </Container>
    </nav>
  );
}
