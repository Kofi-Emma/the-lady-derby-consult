"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Download, LoaderCircle } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { FormInput } from "@/components/ui/FormInput";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function LeadMagnetForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const formAction = process.env.NEXT_PUBLIC_LEAD_MAGNET_FORM_ACTION;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!formAction) {
      setStatus("error");
      setMessage(
        "The free download is being connected. Please email info@theladyderbyconsult.com and we will send it personally.",
      );
      return;
    }

    setStatus("submitting");
    setMessage("");
    const formData = new FormData(form);

    try {
      const response = await fetch(formAction, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Subscription request failed");
      }

      form.reset();
      setStatus("success");
      setMessage(
        "Welcome. Check your inbox for Faith From Fire and your first note of encouragement.",
      );
    } catch {
      setStatus("error");
      setMessage(
        "We couldn't send the resource just yet. Please try again or email us directly.",
      );
    }
  }

  return (
    <form
      className="space-y-4"
      id="lead-magnet"
      onSubmit={handleSubmit}
    >
      <FormInput
        autoComplete="given-name"
        id="lead-first-name"
        label="First name"
        name="firstName"
        placeholder="Your first name"
        required
      />
      <FormInput
        autoComplete="email"
        id="lead-email"
        label="Email address"
        name="email"
        placeholder="you@example.com"
        required
        type="email"
      />
      <input name="resource" type="hidden" value="Faith From Fire" />
      <Button
        className="w-full"
        disabled={status === "submitting"}
        type="submit"
        variant="gold"
      >
        {status === "submitting" ? (
          <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
        ) : (
          <Download aria-hidden="true" className="size-4" />
        )}
        Send me the free resource
      </Button>
      <p className="text-center text-xs leading-5 text-brand-muted">
        No noise. Just thoughtful encouragement. Unsubscribe at any time.
      </p>
      <div aria-live="polite" id="thank-you-message">
        {message ? (
          <p
            className={
              status === "success"
                ? "flex items-start gap-2 rounded-2xl bg-emerald-50 p-4 text-sm leading-6 text-emerald-800"
                : "rounded-2xl bg-red-50 p-4 text-sm leading-6 text-brand-red"
            }
          >
            {status === "success" ? (
              <CheckCircle2
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0"
              />
            ) : null}
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
