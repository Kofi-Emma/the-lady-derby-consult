import {
  FaFacebookF,
  FaInstagram,
  FaThreads,
  FaTiktok,
  FaXTwitter,
  type IconType,
} from "react-icons/fa6";

import { cn } from "@/lib/utils";
import type { SocialLink } from "@/types";

const socialIcons: Record<SocialLink["platform"], IconType> = {
  Instagram: FaInstagram,
  Facebook: FaFacebookF,
  Threads: FaThreads,
  TikTok: FaTiktok,
  X: FaXTwitter,
};

export function SocialIconButton({
  social,
  light = false,
  showLabel = false,
  size = "default",
}: {
  social: SocialLink;
  light?: boolean;
  showLabel?: boolean;
  size?: "default" | "large";
}) {
  const Icon = socialIcons[social.platform];
  const buttonSize = showLabel
    ? size === "large"
      ? "min-h-14 px-5"
      : "min-h-12 px-4"
    : size === "large"
      ? "size-13"
      : "size-11";
  const iconSize = size === "large" ? "size-5" : "size-4.5";

  return (
    <a
      aria-label={social.label}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full border transition duration-300 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-gold",
        buttonSize,
        light
          ? "border-white/20 bg-white/8 text-white hover:border-brand-gold hover:text-brand-gold"
          : "border-brand-gold/30 bg-white text-brand-red hover:-translate-y-1 hover:border-brand-gold hover:bg-brand-champagne",
      )}
      href={social.href}
      rel="noreferrer"
      target="_blank"
    >
      <Icon aria-hidden="true" className={iconSize} />
      {showLabel ? (
        <span className="text-xs font-bold tracking-[.1em] uppercase">
          {social.platform}
        </span>
      ) : null}
    </a>
  );
}
