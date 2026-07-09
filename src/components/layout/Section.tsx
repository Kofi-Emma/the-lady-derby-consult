import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SectionTone = "ivory" | "champagne" | "white" | "red" | "charcoal";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: SectionTone;
}

const toneClasses: Record<SectionTone, string> = {
  ivory: "bg-brand-ivory",
  champagne: "bg-brand-champagne",
  white: "bg-white",
  red: "bg-brand-red text-white",
  charcoal: "bg-brand-charcoal text-white",
};

export function Section({
  className,
  tone = "ivory",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-20 sm:py-24 lg:py-30",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}
