import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        isCentered ? "mx-auto max-w-3xl items-center text-center" : "items-start",
        className,
      )}
      data-motion-heading=""
    >
      {eyebrow ? (
        <Badge
          className={cn(
            light && "border-white/25 bg-white/10 text-brand-gold-soft",
          )}
        >
          {eyebrow}
        </Badge>
      ) : null}
      <h2
        className={cn(
          "font-heading text-[clamp(2.35rem,3.4vw,3.8rem)] leading-[.94] font-semibold text-balance",
          light ? "text-white" : "text-brand-charcoal",
        )}
      >
        {title}
      </h2>
     
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-8 sm:text-lg",
            light ? "text-white/78" : "text-brand-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
