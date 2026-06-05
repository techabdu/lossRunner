import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "dark";
type Size = "md" | "sm";

/* Apple controls are calm: a pill that shifts background a half-step
   on hover. No lift, no scale, no colored glow. */
const base =
  "btn-pill inline-flex items-center justify-center gap-2 font-medium rounded-full transition-colors duration-200 ease-out select-none";

const variants: Record<Variant, string> = {
  primary: "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]",
  ghost:
    "border border-[var(--line)] text-[var(--ink)] bg-transparent hover:bg-black/[0.04]",
  // For use on the dark band: white control on near-black.
  dark: "bg-white text-[#1d1d1f] hover:bg-[#f5f5f7]",
};

const sizes: Record<Size, string> = {
  md: "text-[17px] px-[22px] py-[12px]",
  sm: "text-[14px] px-[16px] py-[8px]",
};

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

/* The Apple signature secondary action: a blue text link with a
   chevron that nudges right on hover. `tone="onDark"` for the band. */
export function ArrowLink({
  href,
  tone = "light",
  className = "",
  children,
  ...rest
}: {
  href: string;
  tone?: "light" | "onDark";
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const color =
    tone === "onDark" ? "text-[var(--dark-link)]" : "text-[var(--link)]";
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-1 text-[17px] underline-offset-4 transition-colors hover:underline ${color} ${className}`}
      {...rest}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-200 ease-out group-hover:translate-x-[3px]"
      >
        ›
      </span>
    </a>
  );
}
