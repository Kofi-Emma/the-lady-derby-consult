import Image from "next/image";
import { Heart, Sparkles } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import type { closingContent } from "@/content/landing";

export function ClosingStatementSection({
  content,
}: {
  content: typeof closingContent;
}) {
  return (
    <Section
      className="empowerment-pattern bg-empowerment-gradient pb-0"
      id="closing"
      tone="red"
    >
      <Container className="grid items-end gap-10 lg:grid-cols-[1.13fr_.87fr]">
        <div className="pb-20 sm:pb-24 lg:pb-30">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[.18em] text-brand-gold-soft uppercase">
            <Sparkles aria-hidden="true" className="size-4" />
            {content.eyebrow}
          </div>
          <h2 className="mt-5 font-heading text-[clamp(2.35rem,3.4vw,3.8rem)] leading-[.94] font-semibold text-white">
            {content.title}
          </h2>
          <div className="mt-7 space-y-1 font-heading text-xl leading-7 text-white/72 italic">
            {content.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="my-7 grid gap-2 sm:grid-cols-2">
            {content.affirmations.map((affirmation) => (
              <p
                className="flex items-center gap-2 text-sm font-semibold text-white"
                key={affirmation}
              >
                <Heart
                  aria-hidden="true"
                  className="size-4 text-brand-gold-soft"
                />
                {affirmation}
              </p>
            ))}
          </div>
          <div className="max-w-2xl space-y-3 text-base leading-7 text-white/78">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 border-l border-brand-gold-soft/60 pl-5">
            <p className="font-script text-4xl text-brand-gold-soft">
              {content.signature}
            </p>
            <p className="mt-2 font-semibold text-white">{content.name}</p>
            <p className="text-sm text-white/60">({content.role})</p>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="#resources" variant="gold">
              Start your journey with me
            </Button>
            <Button
              href="https://www.instagram.com/iamtheladyderby"
              rel="noreferrer"
              target="_blank"
              variant="light"
            >
              Join IWoman Hub
            </Button>
            <Button
              className="border-white/45 text-white hover:bg-white/10"
              href="#contact"
              variant="secondary"
            >
              Work with me
            </Button>
          </div>
        </div>
        <div className="relative mx-auto aspect-[3/4] w-[94%] max-w-[470px] self-end overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute right-5 bottom-0 left-5 h-[82%] rounded-t-[12rem] border border-brand-gold-soft/28 bg-white/8"
          />
          <Image
            alt="Deborah Judah-Mensah, The Lady Derby"
            className="object-cover object-bottom drop-shadow-[0_25px_40px_rgba(54,0,8,.32)]"
            fill
            sizes="(max-width: 1024px) 90vw, 40vw"
            src="/images/hero-lady-derby.png"
          />
        </div>
      </Container>
    </Section>
  );
}
