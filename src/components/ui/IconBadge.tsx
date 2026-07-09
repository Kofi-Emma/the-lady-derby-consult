import { iconMap } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { IconName } from "@/types";

export function IconBadge({
  icon,
  className,
}: {
  icon: IconName;
  className?: string;
}) {
  const Icon = iconMap[icon];

  return (
    <span
      className={cn(
        "inline-flex size-12 items-center justify-center rounded-2xl bg-gold-gradient text-brand-red-dark shadow-[0_10px_28px_rgba(184,135,19,.2)]",
        className,
      )}
    >
      <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
    </span>
  );
}
