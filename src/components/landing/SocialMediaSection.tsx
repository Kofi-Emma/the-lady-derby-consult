import { AtSign } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIconButton } from "@/components/ui/SocialIconButton";
import type { socialContent } from "@/content/landing";
import type { SocialLink } from "@/types";

export function SocialMediaSection({
  content,
  socialLinks,
}: {
  content: typeof socialContent;
  socialLinks: SocialLink[];
}) {
  return (
    <Section id="connect" tone="white">
      <Container>
        <SectionHeading
          description={content.text}
          eyebrow={content.eyebrow}
          title={content.title}
        />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {socialLinks.map((social) => (
            <SocialIconButton
              key={social.platform}
              showLabel
              social={social}
            />
          ))}
        </div>
        <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-3 rounded-[2rem] border border-brand-gold/25 bg-brand-ivory p-7 text-center sm:flex-row sm:justify-center sm:text-left">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
            <AtSign aria-hidden="true" className="size-5" />
          </span>
          <p className="text-sm leading-6 text-brand-muted">
            Find daily encouragement and behind-the-scenes reflections at{" "}
            <a
              className="font-bold text-brand-red hover:underline"
              href="https://www.instagram.com/iamtheladyderby"
              rel="noreferrer"
              target="_blank"
            >
              @iamtheladyderby
            </a>
          </p>
        </div>
      </Container>
    </Section>
  );
}
