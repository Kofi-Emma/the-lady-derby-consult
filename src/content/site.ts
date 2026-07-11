import type { NavigationItem } from "@/types";

export const siteConfig = {
  name: "The Lady Derby",
  founder: "Deborah Judah-Mensah",
  tagline: "Rise & Reinvent",
  footerTagline: "Helping Women Heal, Rise, Reinvent & Build Legacy.",
  email: "info@theladyderbyconsult.com",
  instagramHandle: "@iamtheladyderby",
  description:
    "The Lady Derby, led by Deborah Judah-Mensah, helps women heal, rediscover identity, rebuild confidence, rise through faith, and transform pain into purpose, power, profit, impact, and legacy.",
  positioning:
    "Faith-led confidence and reinvention mentor, identity and impact speaker, women empowerment advocate, burns survivor, communications and hospitality professional, and founder of IWoman Hub.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://theladyderby.com",
};

export const mainNavigation: NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "Meet Deborah", href: "#meet" },
  { label: "Mission", href: "#mission" },
  { label: "How I Help", href: "#how-i-help" },
  { label: "IWoman Hub", href: "#iwoman-hub" },
  { label: "Speaking", href: "#speaking" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export const footerNavigation: NavigationItem[] = [
  { label: "About", href: "#meet" },
  { label: "IWoman Hub", href: "#iwoman-hub" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];
