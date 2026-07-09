import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[1.75rem] border border-brand-gold/18 bg-white p-7 shadow-[0_18px_55px_rgba(72,42,30,.07)] transition duration-300 hover:-translate-y-1 hover:border-brand-gold/55 hover:shadow-[0_24px_65px_rgba(72,42,30,.11)] sm:p-8",
        className,
      )}
      {...props}
    />
  );
}
