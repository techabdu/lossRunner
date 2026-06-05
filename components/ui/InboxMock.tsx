"use client";

import { useEffect, useState } from "react";

type Status = "requested" | "follow" | "ready" | "filed";

const ORDER: Status[] = ["requested", "follow", "ready", "filed"];

const STATUS: Record<
  Status,
  { label: string; meta: string; pill: string; dot: string; pulse?: boolean }
> = {
  requested: {
    label: "Requested",
    meta: "Request sent · just now",
    pill: "text-[var(--ink-soft)] bg-black/[0.05] border-[var(--line-soft)]",
    dot: "bg-[var(--ink-faint)]",
  },
  follow: {
    label: "Following up",
    meta: "Follow-up sent, on schedule",
    pill: "text-[var(--warn)] bg-[var(--warn-tint)] border-[rgba(191,75,37,0.28)]",
    dot: "bg-[var(--warn)]",
    pulse: true,
  },
  ready: {
    label: "Ready",
    meta: "All 5 years present",
    pill: "text-[var(--accent)] bg-[var(--accent-tint)] border-[rgba(0,113,227,0.28)]",
    dot: "bg-[var(--accent)]",
  },
  filed: {
    label: "Filed",
    meta: "Filed in your AMS",
    pill: "text-[var(--ok)] bg-[var(--ok-tint)] border-[rgba(48,209,88,0.28)]",
    dot: "bg-[var(--ok)]",
  },
};

type Row = { client: string; carrier: string; status: Status };

const INITIAL: Row[] = [
  { client: "Acme Logistics", carrier: "Travelers", status: "filed" },
  { client: "Birch & Co.", carrier: "The Hartford", status: "follow" },
  { client: "Cedar Freight", carrier: "Chubb", status: "requested" },
  { client: "Delta Mfg.", carrier: "Liberty Mutual", status: "ready" },
  { client: "Easton Supply", carrier: "Nationwide", status: "ready" },
];

const advance = (s: Status): Status =>
  s === "filed" ? "requested" : ORDER[ORDER.indexOf(s) + 1];

const trafficLights = ["#ff5f57", "#febc2e", "#28c840"];

const navIcons: Record<string, React.ReactNode> = {
  Inbox: <path d="M2 9.5 4 3.5h8l2 6M2 9.5V13h12V9.5M5 9.5l1 1.5h4l1-1.5" />,
  Requests: <path d="M14.5 2 2 7l5 1.8M14.5 2 9 14l-2-5.2M14.5 2 7 8.8" />,
  Filed: <path d="M2 8.5 6 12l8-8.5" />,
  Settings: (
    <>
      <path d="M2 5.5h12M2 10.5h12" />
      <circle cx="6" cy="5.5" r="1.7" />
      <circle cx="10" cy="10.5" r="1.7" />
    </>
  ),
};

/**
 * Hero centerpiece — a fuller, living mock of the LossRunner app working a
 * queue of loss-run requests. Rows advance through their pipeline on a timer
 * so the product visibly *works*. Initial render is deterministic (matches
 * SSR); the loop runs client-side only and freezes under reduced motion.
 */
export function InboxMock() {
  const [rows, setRows] = useState<Row[]>(INITIAL);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 0;
    const id = window.setInterval(() => {
      setRows((prev) => {
        const next = prev.slice();
        next[i] = { ...next[i], status: advance(next[i].status) };
        return next;
      });
      i = (i + 1) % INITIAL.length;
    }, 2600);
    return () => window.clearInterval(id);
  }, []);

  const active = rows.filter((r) => r.status !== "filed").length;

  return (
    <div className="overflow-hidden rounded-[var(--r-md)] border border-[var(--line-soft)] bg-[var(--bg-card)] shadow-[var(--shadow-hero)]">
      {/* window chrome */}
      <div className="flex items-center gap-3 border-b border-[var(--line-soft)] bg-[var(--bg-muted)] px-5 py-3.5">
        <div className="flex gap-2" aria-hidden="true">
          {trafficLights.map((c) => (
            <span
              key={c}
              className="h-3 w-3 rounded-full"
              style={{ background: c }}
            />
          ))}
        </div>
        <span className="ml-1 text-[13px] font-medium text-[var(--ink-soft)]">
          LossRunner
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 text-[12px] text-[var(--ink-faint)]">
          <span className="mock-pulse inline-block h-1.5 w-1.5 rounded-full bg-[var(--ok)]" />
          Working
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[176px_1fr]">
        {/* left rail */}
        <aside className="hidden flex-col gap-1 border-r border-[var(--line-soft)] bg-[var(--bg-soft)] p-3 sm:flex">
          {["Inbox", "Requests", "Filed", "Settings"].map((item, idx) => (
            <span
              key={item}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] ${
                idx === 0
                  ? "bg-[var(--accent-tint)] font-medium text-[var(--accent)]"
                  : "text-[var(--ink-soft)]"
              }`}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {navIcons[item]}
              </svg>
              {item}
            </span>
          ))}
          <span className="mt-auto flex items-center gap-2 px-3 pt-3 text-[12px] text-[var(--ink-faint)]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--ok)]" />
            0 stuck · all on track
          </span>
        </aside>

        {/* main */}
        <div className="min-w-0">
          <div className="flex items-baseline justify-between px-5 pt-4 pb-1">
            <span className="text-[13px] font-semibold tracking-[-0.01em] text-[var(--ink)]">
              Loss-run requests
            </span>
            <span className="text-[12px] tabular-nums text-[var(--ink-faint)]">
              {active} active · 0 stuck
            </span>
          </div>
          <ul className="px-2.5 pb-3">
            {rows.map((r) => {
              const s = STATUS[r.status];
              return (
                <li
                  key={r.client}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5"
                >
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[14px] font-medium text-[var(--ink)]">
                      {r.client}
                    </div>
                    <div className="truncate text-[12px] text-[var(--ink-faint)]">
                      {s.meta}
                    </div>
                  </div>
                  <span className="hidden text-[12px] text-[var(--ink-soft)] md:block">
                    {r.carrier}
                  </span>
                  <span
                    className={`inline-flex w-[104px] flex-shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11.5px] font-medium transition-colors duration-500 ${s.pill}`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${s.dot}${
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
      </div>
    </div>
  );
}
