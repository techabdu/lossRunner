import { Container } from "./ui/Container";
import { CONTACT_EMAIL } from "@/lib/env";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--line-soft)] py-9">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-3 text-[13.5px] text-[var(--ink-faint)]">
          <span>© {year} HAQ — LossRunner is a working name.</span>
          <span>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:text-[var(--ink)]"
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
