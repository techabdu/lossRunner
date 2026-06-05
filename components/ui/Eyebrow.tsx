import { ReactNode } from "react";

/* A quiet, sentence-case accent line — Apple's intro overline, with
   none of the tracked-out all-caps chrome of a B2B kicker. */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`t-overline text-[var(--link)] ${className}`}>{children}</p>
  );
}
