import { ReactNode } from "react";

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-[var(--line-soft)] bg-[var(--accent-tint)] px-[14px] py-[6px] text-[13px] font-medium tracking-[0.01em] text-[var(--accent)] ${className}`}
    >
      <span
        aria-hidden="true"
        className="inline-block h-[7px] w-[7px] rounded-full bg-[var(--accent)]"
      />
      {children}
    </span>
  );
}
