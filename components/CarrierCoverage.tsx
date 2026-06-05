import { Container } from "./ui/Container";
import { Kicker } from "./ui/Kicker";
import { Reveal } from "./ui/Reveal";
import { CountUp } from "./ui/CountUp";

type Method = "Portal" | "Email" | "Form";

const methodColor: Record<Method, string> = {
  Portal: "var(--accent)",
  Email: "var(--warn)",
  Form: "var(--ok)",
};

const carriers: { name: string; method: Method }[] = [
  { name: "Travelers", method: "Portal" },
  { name: "The Hartford", method: "Portal" },
  { name: "Chubb", method: "Email" },
  { name: "Liberty Mutual", method: "Form" },
  { name: "Nationwide", method: "Portal" },
  { name: "Progressive", method: "Portal" },
  { name: "CNA", method: "Email" },
  { name: "Cincinnati", method: "Form" },
  { name: "Acuity", method: "Email" },
  { name: "Selective", method: "Portal" },
  { name: "EMC", method: "Form" },
  { name: "The Hanover", method: "Email" },
];

export function CarrierCoverage() {
  return (
    <section aria-labelledby="cov-h" className="py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-[0.92fr_1.08fr] md:gap-16">
          <Reveal>
            <Kicker>Coverage</Kicker>
            <h2 id="cov-h" className="t-headline max-w-[18ch] text-[var(--ink)]">
              Every carrier has its own way in. It knows them all.
            </h2>
            <p className="t-lede mt-5 max-w-[48ch] text-[var(--ink-soft)]">
              Portals, email aliases, fax-back forms, PDF authorizations —
              LossRunner maps each carrier&rsquo;s exact intake and keeps up as
              they change.
            </p>
            <p className="mt-8 flex items-baseline gap-3">
              <span className="text-[clamp(40px,5vw,56px)] font-semibold leading-none tracking-[-0.02em] text-[var(--ink)]">
                <CountUp to={40} suffix="+" />
              </span>
              <span className="text-[15px] text-[var(--ink-faint)]">
                carriers mapped, and counting
              </span>
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2.5">
              {carriers.map((c) => (
                <span
                  key={c.name}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--line-soft)] bg-[var(--bg-card)] px-3.5 py-2 text-[14px] font-medium text-[var(--ink)] shadow-[var(--shadow-sm)]"
                >
                  <span
                    aria-hidden="true"
                    className="inline-block h-2 w-2 rounded-full"
                    style={{ background: methodColor[c.method] }}
                  />
                  {c.name}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-[var(--ink-faint)]">
              {(["Portal", "Email", "Form"] as Method[]).map((m) => (
                <span key={m} className="inline-flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="inline-block h-2 w-2 rounded-full"
                    style={{ background: methodColor[m] }}
                  />
                  {m}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
