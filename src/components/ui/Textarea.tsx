import type { TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function Textarea({
  label,
  error,
  className,
  id,
  ...props
}: TextareaProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-brand-charcoal" htmlFor={id}>
        {label}
        {props.required ? <span className="text-brand-red"> *</span> : null}
      </label>
      <textarea
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "min-h-36 w-full resize-y rounded-2xl border border-brand-rose/20 bg-white px-4 py-3 text-base text-brand-charcoal outline-none transition placeholder:text-brand-muted/55 hover:border-brand-gold/60 focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/12",
          className,
        )}
        {...props}
      />
      {error ? (
        <p className="text-sm text-brand-red" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
