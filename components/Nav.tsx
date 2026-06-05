import { Container } from "./ui/Container";
import { ButtonLink } from "./ui/Button";
import { CALENDLY_URL } from "@/lib/env";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#who", label: "Who it's for" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--line-soft)] bg-white/72 backdrop-blur-xl backdrop-saturate-180">
      <Container>
        <div className="flex h-12 items-center justify-between">
          <a
            href="#top"
            className="flex items-baseline gap-[8px] text-[18px] font-semibold tracking-[-0.015em] text-[var(--ink)]"
          >
            LossRunner
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--ink-faint)]">
              by HAQ
            </span>
          </a>

          {/* Centered minimal links — Apple global-nav cadence */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[12px] text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
              >
                {l.label}
              </a>
            ))}
          </div>

          <ButtonLink href={CALENDLY_URL} size="sm">
            Book a call
          </ButtonLink>
        </div>
      </Container>
    </nav>
  );
}
