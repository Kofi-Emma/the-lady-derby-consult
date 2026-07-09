import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function FormInput({
  label,
  error,
  className,
  id,
  ...props
}: FormInputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-brand-charcoal" htmlFor={id}>
        {label}
        {props.required ? <span className="text-brand-red"> *</span> : null}
      </label>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "min-h-13 w-full rounded-2xl border border-brand-rose/20 bg-white px-4 py-3 text-base text-brand-charcoal outline-none transition placeholder:text-brand-muted/55 hover:border-brand-gold/60 focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/12",
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
