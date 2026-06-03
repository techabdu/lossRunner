"use client";

import { useState, FormEvent } from "react";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { Kicker } from "./ui/Kicker";
import { CALENDLY_URL } from "@/lib/env";

type Status = "idle" | "submitting" | "success" | "error";

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setMsg("");

    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;

      if (!res.ok || !data?.ok) {
        setStatus("error");
        setMsg(data?.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMsg("Thanks — we'll be in touch shortly.");
      setEmail("");
    } catch {
      setStatus("error");
      setMsg("Network error. Please try again.");
    }
  }

  return (
    <section
      aria-labelledby="final-h"
      className="py-24 text-center sm:py-32"
    >
      <Container>
        <Kicker tone="warm" className="!mb-3">
          Founding partners
        </Kicker>
        <h2
          id="final-h"
          className="mx-auto max-w-[20ch] text-[clamp(28px,4.6vw,48px)] font-semibold leading-[1.08] tracking-[-0.025em] text-[var(--ink)]"
        >
          Tell us how you chase loss runs today.
        </h2>
        <p className="mx-auto mt-5 max-w-[58ch] text-[18px] leading-[1.55] text-[var(--ink-soft)]">
          We&apos;re picking a handful of agencies to build alongside. Early
          partners get founding pricing and a direct line into the roadmap.
        </p>

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-10 flex max-w-[480px] flex-wrap justify-center gap-3"
          noValidate
        >
          <label htmlFor="email" className="sr-only">
            Your work email
          </label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@youragency.com"
            aria-describedby="form-status"
            className="min-w-[220px] flex-1 rounded-full border border-[var(--line)] bg-white px-5 py-[13px] text-[16px] text-[var(--ink)] placeholder:text-[var(--ink-faint)] outline-none transition-colors focus:border-[var(--accent)]"
          />
          <Button
            type="submit"
            disabled={status === "submitting"}
            aria-busy={status === "submitting"}
          >
            {status === "submitting" ? "Sending…" : "Get early access"}
          </Button>
        </form>
        <p
          id="form-status"
          role="status"
          aria-live="polite"
          className={`mt-4 min-h-[1.4em] text-[14px] ${
            status === "error"
              ? "text-[var(--warm)]"
              : status === "success"
              ? "text-[var(--accent-deep)]"
              : "text-[var(--ink-faint)]"
          }`}
        >
          {msg}
        </p>

        <p className="mt-5 text-[14px] text-[var(--ink-faint)]">
          Rather just talk?{" "}
          <a
            href={CALENDLY_URL}
            className="font-medium text-[var(--accent)] underline-offset-4 hover:underline"
          >
            Book a 15-minute call →
          </a>
        </p>
      </Container>
    </section>
  );
}
