type AuroraProps = {
  intensity?: "hero" | "soft";
  className?: string;
};

/**
 * Cinematic gradient backdrop — a layered radial/conic "mesh" plus a few
 * blurred, slowly drifting color orbs and a film-grain overlay. CSS-only,
 * no image assets, compositor-friendly (orbs animate transform via the
 * `.aurora-orb` class; frozen under prefers-reduced-motion).
 *
 * Usage: drop as the FIRST child of a `relative overflow-hidden` section and
 * render that section's content in a sibling wrapped with `relative z-10`.
 *
 * FALLBACK: if the gradients read flat in-browser, swap the Hero centerpiece
 * for a code-built product mockup (components/ui/InboxMock.tsx) and keep this
 * as an ambient backdrop at intensity="soft".
 */
export function Aurora({ intensity = "hero", className = "" }: AuroraProps) {
  const hero = intensity === "hero";

  const orbs = [
    {
      // luminous blue
      top: "-14%",
      left: "6%",
      size: "46vw",
      fill: "rgba(41,151,255,0.9)",
      duration: "34s",
      delay: "0s",
    },
    {
      // violet
      top: "-8%",
      right: "0%",
      size: "40vw",
      fill: "rgba(123,92,255,0.85)",
      duration: "40s",
      delay: "-8s",
    },
    {
      // warm echo
      bottom: "-20%",
      left: "30%",
      size: "44vw",
      fill: "rgba(255,122,69,0.6)",
      duration: "30s",
      delay: "-16s",
    },
  ] as const;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* base mesh — fades toward the bottom so it blends into the page */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 18% 8%, rgba(41,151,255,0.18), transparent 70%)," +
            "radial-gradient(50% 45% at 85% 12%, rgba(123,92,255,0.16), transparent 70%)," +
            "radial-gradient(55% 55% at 65% 92%, rgba(255,122,69,0.10), transparent 70%)," +
            "conic-gradient(from 210deg at 50% 0%, rgba(41,151,255,0.05), transparent 30%)",
          maskImage: "linear-gradient(to bottom, black 55%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent)",
        }}
      />

      {/* drifting orbs */}
      {orbs.map((o, i) => (
        <div
          key={i}
          className="aurora-orb absolute rounded-full"
          style={{
            top: "top" in o ? o.top : undefined,
            bottom: "bottom" in o ? o.bottom : undefined,
            left: "left" in o ? o.left : undefined,
            right: "right" in o ? o.right : undefined,
            width: o.size,
            height: o.size,
            background: `radial-gradient(circle at 50% 50%, ${o.fill}, transparent 70%)`,
            filter: "blur(90px)",
            opacity: hero ? 0.55 : 0.3,
            animationDuration: o.duration,
            animationDelay: o.delay,
          }}
        />
      ))}

      {/* film grain */}
      <div className="grain" />
    </div>
  );
}
