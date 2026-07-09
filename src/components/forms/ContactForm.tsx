"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, LoaderCircle, Send } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { FormInput } from "@/components/ui/FormInput";
import { Textarea } from "@/components/ui/Textarea";

type ContactStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(
          result.message || "Your enquiry could not be sent right now.",
        );
      }

      form.reset();
      setStatus("success");
      setMessage(
        result.message ||
          "Thank you for reaching out. Deborah’s team will be in touch.",
      );
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please email us directly.",
      );
    }
  }

  return (
    <form
      className="rounded-[2rem] border border-brand-gold/20 bg-white p-6 shadow-[0_26px_80px_rgba(54,54,55,.12)] sm:p-9"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormInput
          autoComplete="given-name"
          id="contact-first-name"
          label="First name"
          maxLength={80}
          name="firstName"
          placeholder="Your first name"
          required
        />
        <FormInput
          autoComplete="family-name"
          id="contact-last-name"
          label="Last name"
          maxLength={80}
          name="lastName"
          placeholder="Your last name"
        />
        <FormInput
          autoComplete="email"
          id="contact-email"
          label="Email address"
          maxLength={200}
          name="email"
          placeholder="you@example.com"
          required
          type="email"
        />
        <FormInput
          autoComplete="organization"
          id="contact-organization"
          label="Organization"
          maxLength={160}
          name="organization"
          placeholder="Organization or event"
        />
        <FormInput
          autoComplete="tel"
          id="contact-phone"
          label="Contact number"
          maxLength={40}
          name="phone"
          placeholder="+44..."
          type="tel"
        />
        <div className="space-y-2">
          <label
            className="text-sm font-semibold text-brand-charcoal"
            htmlFor="contact-enquiry-type"
          >
            Enquiry type <span className="text-brand-red">*</span>
          </label>
          <select
            className="min-h-13 w-full rounded-2xl border border-brand-rose/20 bg-white px-4 py-3 text-base text-brand-charcoal outline-none transition hover:border-brand-gold/60 focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/12"
            defaultValue=""
            id="contact-enquiry-type"
            name="enquiryType"
            required
          >
            <option disabled value="">
              What can we help with?
            </option>
            <option>Speaking</option>
            <option>Mentorship / Coaching</option>
            <option>Collaboration</option>
            <option>Partnership</option>
            <option>General Enquiry</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <Textarea
            id="contact-message"
            label="Tell us a little about your enquiry"
            maxLength={5000}
            name="message"
            placeholder="Event date, audience, the support you need, or what you would love to create together..."
            required
          />
        </div>
      </div>
      <Button
        className="mt-6 w-full sm:w-auto"
        disabled={status === "submitting"}
        type="submit"
      >
        {status === "submitting" ? (
          <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
        ) : (
          <Send aria-hidden="true" className="size-4" />
        )}
        Send enquiry
      </Button>
      <div aria-live="polite" className="mt-5">
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
