"use client";

import { useState } from "react";

type Field = "name" | "email" | "school" | "phone" | "discipline" | "message";

export function LeadForm({
  endpoint,
  fields = ["name", "email", "school", "phone"],
  submitLabel = "Submit",
  successMessage = "Thanks — we'll be in touch shortly.",
}: {
  endpoint: string;
  fields?: Field[];
  submitLabel?: string;
  successMessage?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong. Please try again.");
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-accent/40 bg-card p-8 text-center">
        <p className="font-display text-lg font-medium text-foreground">Request received</p>
        <p className="mt-2 text-sm text-muted">{successMessage}</p>
      </div>
    );
  }

  const labels: Record<Field, { label: string; type: string; required?: boolean; placeholder?: string }> = {
    name: { label: "Your name", type: "text", required: true },
    email: { label: "Email", type: "email", required: true },
    school: { label: "School / gym name", type: "text" },
    phone: { label: "Phone", type: "tel" },
    discipline: { label: "Primary discipline", type: "text", placeholder: "e.g. BJJ, Muay Thai" },
    message: { label: "Anything we should know?", type: "textarea" },
  };

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-card-border bg-card p-6 sm:p-8">
      <div className="grid gap-4">
        {fields.map((f) => {
          const cfg = labels[f];
          return (
            <label key={f} className="block">
              <span className="mb-1.5 block text-sm font-medium text-muted-2">
                {cfg.label}
                {cfg.required && <span className="text-accent"> *</span>}
              </span>
              {cfg.type === "textarea" ? (
                <textarea
                  name={f}
                  rows={3}
                  className="w-full rounded-lg border border-card-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                />
              ) : (
                <input
                  name={f}
                  type={cfg.type}
                  required={cfg.required}
                  placeholder={cfg.placeholder}
                  className="w-full rounded-lg border border-card-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                />
              )}
            </label>
          );
        })}
      </div>
      {error && <p className="mt-3 text-sm text-accent">{error}</p>}
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 w-full rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}
