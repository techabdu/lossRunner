import { ReactNode } from "react";

export function Kicker({
  children,
  tone = "accent",
  className = "",
}: {
  children: ReactNode;
  tone?: "accent" | "warm" | "light";
  className?: string;
}) {
  const color =
    tone === "warm"
      ? "text-[var(--warm)]"
      : tone === "light"
      ? "text-[#7fb6f0]"
      : "text-[var(--accent)]";
  return (
    <p
      className={`mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] ${color} ${className}`}
    >
      {children}
    </p>
  );
}
