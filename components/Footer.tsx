import { Container } from "./ui/Container";
import { CONTACT_EMAIL } from "@/lib/env";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--bg)] py-12">
      <Container>
        <p className="max-w-[70ch] text-[12px] leading-[1.5] text-[var(--ink-faint)]">
          LossRunner is a working name. It&rsquo;s an early-stage tool built with
          and for independent insurance agencies; nothing here is a binding offer
          of service. Carrier and company names are referenced for illustration
          only.
        </p>
        <div className="my-6 h-px bg-[var(--line-soft)]" />
        <div className="flex flex-wrap items-center justify-between gap-3 text-[12px] text-[var(--ink-faint)]">
          <span>© {year} HAQ. All rights reserved.</span>
          <span>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="transition-colors hover:text-[var(--ink)]"
            >
              {CONTACT_EMAIL}
            </a>{" "}
            · Built for independent agencies.
          </span>
        </div>
      </Container>
    </footer>
  );
}
