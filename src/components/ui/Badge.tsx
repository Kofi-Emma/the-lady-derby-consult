import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-brand-gold/35 bg-white/70 px-3 py-2 text-center text-[.62rem] leading-4 font-bold tracking-[.14em] text-brand-red uppercase backdrop-blur-sm sm:px-4 sm:text-[.68rem] sm:tracking-[.19em]",
        className,
      )}
      {...props}
    />
  );
}
