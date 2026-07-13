import Image from "next/image";
import { Check, MicVocal } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { speakingContent } from "@/content/landing";

export function SpeakingSection({
  content,
}: {
  content: typeof speakingContent;
}) {
  return (
    <Section id="speaking" tone="white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[.88fr_1.12fr] lg:gap-18">
          <div className="relative mx-auto w-[94%] max-w-[470px] mb-6">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[7rem_2rem_7rem_2rem] bg-brand-champagne shadow-[0_30px_80px_rgba(54,54,55,.15)]">
              <Image
                alt={content.imageAlt}
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                src={content.image}
              />
            </div>
            <div
              className="absolute -right-3 bottom-[-2rem] flex items-center gap-3 rounded-2xl border border-brand-gold/35 bg-white/92 px-5 py-4 shadow-xl backdrop-blur sm:-right-8"
              data-motion-float=""
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-brand-red text-white">
                <MicVocal aria-hidden="true" className="size-5" />
              </span>
              <span>
                <span className="block text-xs font-bold tracking-[.14em] text-brand-red uppercase">
                  Voice with purpose
                </span>
                <span className="mt-1 block text-xs text-brand-muted">
                  Testimony • Truth • Transformation
                </span>
              </span>
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              description={content.intro}
              eyebrow={content.eyebrow}
              title={content.title}
            />
            <div className="mt-9 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-heading text-2xl font-semibold text-brand-red">
                  {content.topicsTitle}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {content.topics.map((topic) => (
                    <li
                      className="flex items-start gap-2 text-sm leading-6 text-brand-muted"
                      key={topic}
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-1 size-4 shrink-0 text-brand-gold"
                      />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-semibold text-brand-red">
                  {content.idealTitle}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {content.idealFor.map((event) => (
                    <li
                      className="flex items-start gap-2 text-sm leading-6 text-brand-muted"
                      key={event}
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-1 size-4 shrink-0 text-brand-gold"
                      />
                      {event}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-16 flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-brand-red p-8 text-white shadow-[0_22px_60px_rgba(118,15,21,.2)] sm:flex-row sm:items-center sm:p-10"
          data-motion-panel=""
        >
          <div>
            <p className="text-xs font-bold tracking-[.18em] text-brand-gold-soft uppercase">
              Bring a transformational voice to your room
            </p>
            <h3 className="mt-2 font-heading text-3xl leading-tight font-semibold sm:text-4xl">
              Let’s create a moment your audience remembers.
            </h3>
          </div>
          <Button className="shrink-0" href="#contact" variant="gold">
            Book Deborah to speak
          </Button>
        </div>
      </Container>
    </Section>
  );
}
