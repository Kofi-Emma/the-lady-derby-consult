import { Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

export function DecorativeDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("flex items-center gap-3 text-brand-gold", className)}
    >
      <span className="h-px w-10 bg-brand-gold/60" />
      <Sparkles className="size-4" strokeWidth={1.7} />
      <span className="h-px w-10 bg-brand-gold/60" />
    </div>
  );
}
