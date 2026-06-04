import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "dark";
type Size = "md" | "sm";

const base =
  "btn-pill inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 ease-out select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] hover:-translate-y-px shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_24px_-12px_rgba(0,113,227,0.55)]",
  ghost:
    "border border-[var(--ink)] text-[var(--ink)] bg-transparent hover:bg-[var(--ink)] hover:text-white",
  dark:
    "bg-[var(--ink)] text-white hover:bg-black hover:-translate-y-px",
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
