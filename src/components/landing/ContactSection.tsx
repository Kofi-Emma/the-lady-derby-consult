import { Camera, Mail, MicVocal, Sparkles } from "lucide-react";

import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { contactContent } from "@/content/landing";
import { siteConfig } from "@/content/site";

export function ContactSection({
  content,
}: {
  content: typeof contactContent;
}) {
  return (
    <Section id="contact" tone="ivory">
      <Container className="grid items-start gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-16">
        <div className="lg:sticky lg:top-30">
          <SectionHeading
            align="left"
            description={content.text}
            eyebrow={content.eyebrow}
            title={content.title}
          />
          <div className="mt-8 space-y-4">
            <a
              className="flex items-center gap-4 rounded-2xl border border-brand-gold/20 bg-white p-4 text-sm text-brand-charcoal transition hover:border-brand-gold"
              href={`mailto:${siteConfig.email}`}
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-champagne text-brand-red">
                <Mail aria-hidden="true" className="size-4.5" />
              </span>
              <span>
                <span className="block text-xs font-bold tracking-[.12em] text-brand-muted uppercase">
                  Email
                </span>
                <span className="mt-1 block font-semibold">
                  {siteConfig.email}
                </span>
              </span>
            </a>
            <a
              className="flex items-center gap-4 rounded-2xl border border-brand-gold/20 bg-white p-4 text-sm text-brand-charcoal transition hover:border-brand-gold"
              href="https://www.instagram.com/iamtheladyderby"
              rel="noreferrer"
              target="_blank"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-champagne text-brand-red">
                <Camera aria-hidden="true" className="size-4.5" />
              </span>
              <span>
                <span className="block text-xs font-bold tracking-[.12em] text-brand-muted uppercase">
                  Instagram
                </span>
                <span className="mt-1 block font-semibold">
                  {siteConfig.instagramHandle}
                </span>
              </span>
            </a>
          </div>
          <div className="mt-7 rounded-[1.75rem] bg-brand-red p-7 text-white">
            <MicVocal
              aria-hidden="true"
              className="size-6 text-brand-gold-soft"
            />
            <p className="mt-4 font-heading text-2xl leading-7 font-semibold">
              Planning an event?
            </p>
            <p className="mt-2 text-sm leading-6 text-white/72">
              Include your date, location, audience, and preferred topic so we
              can respond with the right next steps.
            </p>
            <Sparkles
              aria-hidden="true"
              className="mt-5 size-4 text-brand-gold-soft"
            />
          </div>
        </div>
        <ContactForm />
      </Container>
    </Section>
  );
}
