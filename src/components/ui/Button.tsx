import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { ButtonVariant } from "@/types";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-brand-red bg-brand-red text-white shadow-[0_12px_28px_rgba(147,21,27,.2)] hover:border-brand-red-dark hover:bg-brand-red-dark",
  secondary:
    "border-brand-gold bg-transparent text-brand-red hover:bg-brand-champagne",
  gold:
    "border-transparent bg-gold-gradient text-brand-red-dark shadow-[0_12px_30px_rgba(184,135,19,.24)] hover:brightness-105",
  light:
    "border-white bg-white text-brand-red shadow-[0_12px_28px_rgba(54,54,55,.12)] hover:border-brand-champagne hover:bg-brand-champagne",
};

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  showArrow?: boolean;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  className,
  showArrow = false,
  href,
  target,
  rel,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-6 py-3 text-center text-[.76rem] font-bold tracking-[.12em] uppercase transition duration-300 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-gold disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    className,
  );

  const content = (
    <>
      {children}
      {showArrow ? (
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      ) : null}
    </>
  );

  if (href) {
    return (
      <a
        className={classes}
        data-motion-button=""
        href={href}
        onClick={onClick}
        rel={rel}
        target={target}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      data-motion-button=""
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {content}
    </button>
  );
}
