import Image from "next/image";
import { HeartHandshake, Sparkles } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIconButton } from "@/components/ui/SocialIconButton";
import { iwomanHubSocialLinks } from "@/content/social";
import type { iwomanHubContent } from "@/content/landing";

export function IWomanHubSection({
  content,
}: {
  content: typeof iwomanHubContent;
}) {
  return (
    <Section className="champagne-pattern" id="iwoman-hub" tone="champagne">
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-18">
        <div>
          <SectionHeading
            align="left"
            eyebrow={content.eyebrow}
            title={content.title}
          />
          <div className="mt-7 space-y-4 text-[1.02rem] leading-8 text-brand-muted">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-6 font-heading text-2xl font-semibold text-brand-red">
            {content.closing}
          </p>
          <div className="mt-8">
            <p className="font-heading text-2xl font-semibold text-brand-charcoal">
              Become a part of the sisterhood
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {iwomanHubSocialLinks.map((social) => (
                <SocialIconButton
                  key={social.platform}
                  size="large"
                  social={social}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[520px]">
          <div
            className="relative overflow-hidden rounded-[4rem_2rem_4rem_2rem] border border-brand-gold/35 bg-white p-7 shadow-[0_30px_80px_rgba(72,42,30,.13)] sm:p-9"
            data-motion-panel=""
          >
            <div className="relative aspect-[1124/384]">
              <Image
                alt="IWoman Hub — where women rise together"
                className="object-contain"
                fill
                sizes="(max-width: 1024px) 85vw, 40vw"
                src={content.logo}
              />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                ["Heal", "Spiritually & emotionally"],
                ["Connect", "In honest sisterhood"],
                ["Grow", "In faith & confidence"],
                ["Thrive", "In purpose & impact"],
              ].map(([title, text]) => (
                <div
                  className="rounded-2xl bg-brand-champagne p-4"
                  key={title}
                >
                  <Sparkles
                    aria-hidden="true"
                    className="size-4 text-brand-gold"
                  />
                  <p className="mt-2 font-heading text-xl font-semibold text-brand-red">
                    {title}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-brand-muted">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <span
            className="absolute -right-5 -bottom-5 flex size-18 items-center justify-center rounded-full bg-brand-red text-brand-gold-soft shadow-xl"
            data-motion-float=""
          >
            <HeartHandshake aria-hidden="true" className="size-7" />
          </span>
        </div>
      </Container>
    </Section>
  );
}
