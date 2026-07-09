import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { footerNavigation, siteConfig } from "@/content/site";
import { socialLinks } from "@/content/social";
import { SocialIconButton } from "@/components/ui/SocialIconButton";

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-ivory">
      <Container className="grid gap-12 py-14 lg:grid-cols-[1.2fr_.8fr_.8fr] lg:gap-16">
        <div>
          <a
            aria-label="The Lady Derby — back to home"
            className="relative block h-20 w-58 overflow-hidden rounded-lg bg-brand-ivory"
            href="#home"
          >
            <Image
              alt="The Lady Derby"
              className="object-contain"
              fill
              sizes="232px"
              src="/images/logo-full.png"
            />
          </a>
          <p className="mt-6 max-w-sm font-heading text-2xl leading-snug text-white">
            {siteConfig.footerTagline}
          </p>
          <a
            className="mt-5 inline-flex items-center gap-2 text-sm text-brand-ivory/70 transition hover:text-brand-gold"
            href={`mailto:${siteConfig.email}`}
          >
            <Mail aria-hidden="true" className="size-4" />
            {siteConfig.email}
          </a>
        </div>
        <div>
          <h2 className="text-xs font-bold tracking-[.18em] text-brand-gold uppercase">
            Explore
          </h2>
          <nav aria-label="Footer navigation" className="mt-5 flex flex-col gap-3">
            {footerNavigation.map((item) => (
              <a
                className="w-fit text-sm text-brand-ivory/72 transition hover:text-brand-gold"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
            <Link
              className="w-fit text-sm text-brand-ivory/72 transition hover:text-brand-gold"
              href="/privacy-policy"
            >
              Privacy policy
            </Link>
          </nav>
        </div>
        <div>
          <h2 className="text-xs font-bold tracking-[.18em] text-brand-gold uppercase">
            Follow the journey
          </h2>
          <p className="mt-5 text-sm leading-6 text-brand-ivory/68">
            Faith, healing, confidence, reinvention, and honest encouragement
            for your next chapter.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {socialLinks.map((social) => (
              <SocialIconButton
                key={social.platform}
                light
                social={social}
              />
            ))}
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-brand-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} The Lady Derby. All rights reserved.
          </p>
          <p>Faith-led. Purpose-filled. Built for becoming.</p>
        </Container>
      </div>
    </footer>
  );
}
