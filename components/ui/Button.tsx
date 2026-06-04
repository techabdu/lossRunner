import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "dark";
type Size = "md" | "sm";

const base =
  "btn-pill inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 ease-out select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] hover:-translate-y-px shadow-[0_2px_8px_-2px_var(--accent-glow)] hover:shadow-[var(--shadow-glow)]",
  ghost:
    "border border-[var(--line)] text-[var(--ink)] bg-transparent hover:bg-white/[0.06] hover:border-[var(--ink-soft)]",
  dark:
    "bg-white/[0.06] text-[var(--ink)] border border-[var(--line-soft)] backdrop-blur hover:bg-white/10 hover:-translate-y-px",
};

const sizes: Record<Size, string> = {
  md: "text-[15px] px-5 py-[11px]",
  sm: "text-[14px] px-[18px] py-[9px]",
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
