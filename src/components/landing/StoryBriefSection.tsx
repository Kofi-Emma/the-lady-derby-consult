import Image from "next/image";
import { Check, Quote } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { storyContent } from "@/content/landing";

export function StoryBriefSection({
  content,
}: {
  content: typeof storyContent;
}) {
  return (
    <Section id="story" tone="ivory">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-18">
        <div>
          <SectionHeading
            align="left"
            eyebrow={content.eyebrow}
            title={content.title}
          />
          <p className="mt-7 font-semibold text-brand-charcoal">
            {content.intro}
          </p>
          <ul className="mt-5 grid gap-x-5 gap-y-2 sm:grid-cols-2">
            {content.chapters.map((chapter) => (
              <li
                className="flex items-center gap-2 text-sm text-brand-muted"
                key={chapter}
              >
                <span className="size-1.5 rounded-full bg-brand-gold" />
                {chapter}
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-3 leading-7 text-brand-muted">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <blockquote className="my-7 rounded-r-3xl border-l-3 border-brand-gold bg-white p-6 shadow-sm">
            <Quote aria-hidden="true" className="size-5 text-brand-gold" />
            <p className="mt-3 font-heading text-2xl leading-8 font-semibold text-brand-red">
              {content.highlight}
            </p>
          </blockquote>
          <p className="font-semibold text-brand-charcoal">
            {content.outcomesIntro}
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {content.outcomes.map((outcome) => (
              <li
                className="flex items-start gap-2 text-sm leading-6 text-brand-muted"
                key={outcome}
              >
                <Check
                  aria-hidden="true"
                  className="mt-1 size-4 shrink-0 text-brand-red"
                />
                {outcome}
              </li>
            ))}
          </ul>
          <Button
            className="mt-8"
            href="https://faith-from-fire.theladyderbyconsult.com/"
            variant="secondary"
          >
            Learn more about my journey
          </Button>
        </div>
        <div className="relative mx-auto w-[94%] max-w-[490px]">
          <div
            aria-hidden="true"
            className="absolute -top-6 -right-6 h-full w-full rounded-[7rem_2rem_7rem_2rem] border border-brand-gold/35"
          />
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem_7rem_2rem_7rem] shadow-[0_30px_80px_rgba(54,54,55,.15)]">
            <Image
              alt={content.imageAlt}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              src={content.image}
            />
          </div>
          <div className="absolute -bottom-5 left-5 rounded-2xl bg-brand-red px-6 py-4 text-white shadow-xl">
            <p className="font-script text-3xl leading-none text-brand-gold-soft">
              Still I rise
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
