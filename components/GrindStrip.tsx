const items = [
  { bold: "1–2 weeks", rest: " to get one loss run back" },
  { bold: "Every", rest: " renewal & new-business quote" },
  { lead: "Lives in ", bold: "email, portals & fax" },
  { bold: "By hand", rest: " at ~36,000 US agencies" },
];

export function GrindStrip() {
  return (
    <div className="border-y border-[var(--line-soft)] bg-[var(--bg-soft)]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-center gap-x-9 gap-y-3 px-6 py-5 text-[14.5px] text-[var(--ink-soft)] sm:px-8">
        {items.map((it, i) => (
          <span key={i} className="inline-flex items-center gap-[10px]">
            <span aria-hidden="true" className="text-[var(--warm)]">
              ●
            </span>
            <span>
              {it.lead}
              <b className="font-medium text-[var(--ink)]">{it.bold}</b>
              {it.rest}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
