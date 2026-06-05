import { ReactNode } from "react";

/* Section overline. Sentence-case, accent-colored, quiet — `onDark`
   switches to the lighter link blue for the cinematic band. */
export function Kicker({
  children,
  tone = "accent",
  className = "",
}: {
  children: ReactNode;
  tone?: "accent" | "onDark";
  className?: string;
}) {
  const color =
    tone === "onDark" ? "text-[var(--dark-link)]" : "text-[var(--link)]";
  return <p className={`t-overline mb-3 ${color} ${className}`}>{children}</p>;
}
