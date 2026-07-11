import { cn } from "@/lib/utils";

export function ThemeBadge({
  children,
  accent = false,
}: {
  children: string;
  accent?: boolean;
}) {
  return (
    <span
      className={cn(
        "rounded-full border px-5 py-3 text-sm font-semibold tracking-wide transition duration-300 hover:-translate-y-0.5",
        accent
          ? "border-brand-gold/70 bg-gold-gradient text-brand-red-dark"
          : "border-white/28 bg-white/10 text-white backdrop-blur-sm hover:bg-white/16",
      )}
      data-motion-chip=""
    >
      {children}
    </span>
  );
}
