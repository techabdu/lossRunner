type Status = "filed" | "ready" | "follow" | "requested";

const statusStyle: Record<
  Status,
  { label: string; pill: string; dot: string; pulse?: boolean }
> = {
  filed: {
    label: "Filed",
    pill: "text-[#30d158] bg-[rgba(48,209,88,0.13)] border-[rgba(48,209,88,0.28)]",
    dot: "bg-[#30d158]",
  },
  ready: {
    label: "Ready",
    pill: "text-[var(--accent)] bg-[var(--accent-tint)] border-[rgba(41,151,255,0.3)]",
    dot: "bg-[var(--accent)]",
  },
  follow: {
    label: "Following up",
    pill: "text-[var(--warm)] bg-[rgba(255,122,69,0.13)] border-[rgba(255,122,69,0.3)]",
    dot: "bg-[var(--warm)]",
    pulse: true,
  },
  requested: {
    label: "Requested",
    pill: "text-[var(--ink-soft)] bg-white/[0.06] border-[var(--line-soft)]",
    dot: "bg-[var(--ink-faint)]",
  },
};

const rows: {
  client: string;
  meta: string;
  carrier: string;
  status: Status;
}[] = [
  {
    client: "Acme Logistics",
    meta: "renewal in 58 days",
    carrier: "Travelers",
    status: "filed",
  },
  {
    client: "Birch & Co.",
    meta: "3rd follow-up sent",
    carrier: "The Hartford",
    status: "follow",
  },
  {
    client: "Cedar Freight",
    meta: "request sent · just now",
    carrier: "Chubb",
    status: "requested",
  },
  {
    client: "Delta Mfg.",
    meta: "all 5 years present",
    carrier: "Liberty Mutual",
    status: "ready",
  },
];

/**
 * Hero centerpiece — a glassy mockup of the LossRunner agent working a queue
 * of loss-run requests. Pure presentational markup; the gentle float + live
 * pulse come from globals.css (.mock-float / .mock-pulse), frozen under
 * prefers-reduced-motion.
 */
export function InboxMock() {
  return (
    <div className="mock-float overflow-hidden rounded-[20px] border border-[var(--line-soft)] bg-[var(--bg-card)] shadow-[var(--shadow-card)]">
      {/* title bar */}
      <div className="flex items-center gap-3 border-b border-[var(--line-soft)] px-5 py-3.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-white/15" />
          <span className="h-3 w-3 rounded-full bg-white/15" />
          <span className="h-3 w-3 rounded-full bg-white/15" />
        </div>
        <span className="ml-1 text-[13px] font-medium text-[var(--ink-soft)]">
          LossRunner
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 text-[12px] text-[var(--ink-faint)]">
          <span className="mock-pulse inline-block h-1.5 w-1.5 rounded-full bg-[#30d158]" />
          working
        </span>
      </div>

      {/* header */}
      <div className="flex items-baseline justify-between px-5 pt-4 pb-1">
        <span className="text-[13px] font-semibold tracking-[-0.01em] text-[var(--ink)]">
          Loss-run requests
        </span>
        <span className="text-[12px] text-[var(--ink-faint)]">
          4 active · 0 stuck
        </span>
      </div>

      {/* rows */}
      <ul className="px-2.5 pb-3">
        {rows.map((r) => {
          const s = statusStyle[r.status];
          return (
            <li
              key={r.client}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/[0.03]"
            >
              <div className="min-w-0 flex-1">
                <div className="truncate text-[14px] font-medium text-[var(--ink)]">
                  {r.client}
                </div>
                <div className="truncate text-[12px] text-[var(--ink-faint)]">
                  {r.meta}
                </div>
              </div>
              <span className="hidden text-[12px] text-[var(--ink-soft)] md:block">
                {r.carrier}
              </span>
              <span
                className={`inline-flex flex-shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11.5px] font-medium ${s.pill}`}
              >
                <span
                  aria-hidden="true"
                  className={`h-1.5 w-1.5 rounded-full ${s.dot}${
                    s.pulse ? " mock-pulse" : ""
                  }`}
                />
                {s.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
