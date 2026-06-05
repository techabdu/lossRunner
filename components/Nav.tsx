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
        {/* 3-column grid: wordmark · centered links · CTA — never overlaps */}
        <div className="grid h-12 grid-cols-[1fr_auto_1fr] items-center">
          <a
            href="#top"
            className="flex items-baseline gap-[8px] justify-self-start text-[18px] font-semibold tracking-[-0.015em] text-[var(--ink)]"
          >
            LossRunner
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--ink-faint)]">
              by HAQ
            </span>
          </a>

          <div className="hidden items-center gap-9 justify-self-center md:flex">
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

          <div className="justify-self-end">
            <ButtonLink href={CALENDLY_URL} size="sm">
              Book a call
            </ButtonLink>
          </div>
        </div>
      </Container>
    </nav>
  );
}
