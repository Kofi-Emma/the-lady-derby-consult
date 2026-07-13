import Image from "next/image";
import { Check, Heart } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { meetContent } from "@/content/landing";

export function MeetLadyDerbySection({
  content,
}: {
  content: typeof meetContent;
}) {
  return (
    <Section id="meet" tone="white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-18">
          <div className="relative mx-auto w-[94%] max-w-[470px] lg:mx-0">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem_6rem_2rem_6rem] bg-brand-champagne shadow-[0_28px_80px_rgba(54,54,55,.14)]">
              <Image
                alt={content.imageAlt}
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 90vw, 38vw"
                src={content.image}
              />
            </div>
            <div
              className="absolute -right-2 -bottom-6 max-w-[260px] rounded-3xl border border-brand-gold/35 bg-brand-red p-5 text-white shadow-xl sm:-right-8"
              data-motion-float=""
            >
              <Heart
                aria-hidden="true"
                className="size-5 text-brand-gold-soft"
              />
              <p className="mt-3 font-heading text-xl leading-6">
                Grace carried me. Grit taught me to stand.
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow={content.eyebrow}
              title={content.title}
            />
            <p className="mt-7 font-heading text-2xl leading-8 font-semibold text-brand-red">
              {content.intro}
            </p>
            <div className="mt-5 space-y-4 text-[1.02rem] leading-7 text-brand-muted">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
        <div
          className="mt-20 grid overflow-hidden rounded-[2rem] border border-brand-gold/25 bg-brand-champagne shadow-[0_18px_55px_rgba(72,42,30,.07)] lg:grid-cols-[.75fr_1.25fr]"
          data-motion-panel=""
        >
          <div className="bg-empowerment-gradient p-8 text-white sm:p-10">
            <p className="font-script text-3xl text-brand-gold-soft">
              A Place to Become
            </p>
            <h3 className="mt-3 font-heading text-3xl leading-tight font-semibold">
              {content.readinessTitle}
            </h3>
          </div>
          <div className="grid gap-3 p-8 sm:grid-cols-2 sm:p-10">
            {content.readiness.map((item) => (
              <div
                className="flex items-center gap-3 text-sm font-semibold text-brand-charcoal"
                key={item}
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white text-brand-red shadow-sm">
                  <Check aria-hidden="true" className="size-3.5" />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-l-2 border-brand-gold pl-6 sm:flex-row sm:items-center">
          <p className="max-w-3xl font-heading text-2xl leading-8 font-medium text-brand-charcoal">
            {content.closing}
          </p>
          <Button
            className="shrink-0"
            href="https://faith-from-fire.theladyderbyconsult.com/"
            showArrow
          >
            Discover my story
          </Button>
        </div>
      </Container>
    </Section>
  );
}
