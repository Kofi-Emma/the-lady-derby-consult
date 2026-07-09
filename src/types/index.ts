export type ButtonVariant = "primary" | "secondary" | "gold" | "light";

export type IconName =
  | "bookOpen"
  | "briefcase"
  | "church"
  | "community"
  | "crown"
  | "flame"
  | "flower"
  | "heart"
  | "lightbulb"
  | "megaphone"
  | "microphone"
  | "refresh"
  | "shield"
  | "sparkles"
  | "star"
  | "sunrise"
  | "users";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: "Instagram" | "Facebook" | "Threads" | "TikTok" | "X";
  href: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
  icon: IconName;
}

export interface Product {
  title: string;
  label?: string;
  description: string;
  cta: string;
  image?: string;
  available: boolean;
}
