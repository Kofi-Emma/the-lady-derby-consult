"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, LoaderCircle } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { FormInput } from "@/components/ui/FormInput";

export function NewsletterForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: String(formData.get("firstName") || ""),
          email: String(formData.get("email") || ""),
          website: String(formData.get("website") || ""),
        }),
      });
      const result = (await response.json().catch(() => null)) as {
        message?: string;
      } | null;

      if (!response.ok) {
        throw new Error(result?.message || "Unable to subscribe");
      }

      form.reset();
      setStatus("success");
      setMessage(
        result?.message ||
          "You're in. A fresh note of encouragement is on its way.",
      );
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "That didn't go through. Please try again in a moment.",
      );
    }
  }

  return (
    <form
      className="grid gap-4 md:grid-cols-[1fr_1.25fr_auto] md:items-end"
      onSubmit={handleSubmit}
    >
      <input
        aria-hidden="true"
        autoComplete="off"
        className="hidden"
        name="website"
        tabIndex={-1}
        type="text"
      />
      <FormInput
        autoComplete="given-name"
        id="newsletter-first-name"
        label="First name"
        name="firstName"
        placeholder="Your first name"
        required
      />
      <FormInput
        autoComplete="email"
        id="newsletter-email"
        label="Email address"
        name="email"
        placeholder="you@example.com"
        required
        type="email"
      />
      <Button
        className="min-h-13"
        disabled={status === "submitting"}
        type="submit"
        variant="primary"
      >
        {status === "submitting" ? (
          <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
        ) : null}
        Subscribe now
      </Button>
      <div aria-live="polite" className="md:col-span-3">
        {message ? (
          <p
            className={
              status === "success"
                ? "flex items-center gap-2 text-sm text-emerald-800"
                : "text-sm text-brand-red"
            }
          >
            {status === "success" ? (
              <CheckCircle2 aria-hidden="true" className="size-4" />
            ) : null}
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
