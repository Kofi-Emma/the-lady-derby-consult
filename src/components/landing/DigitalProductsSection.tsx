import Image from "next/image";
import { BookOpenCheck, Sparkles } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { ResourceCard } from "@/components/ui/ResourceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { resourcesContent } from "@/content/landing";
import type { Product } from "@/types";

export function DigitalProductsSection({
  content,
  products,
}: {
  content: typeof resourcesContent;
  products: Product[];
}) {
  return (
    <Section className="champagne-pattern" id="resources" tone="champagne">
      <Container className="relative">
        <SectionHeading
          description={content.description}
          eyebrow={content.eyebrow}
          title={content.title}
        />
        <div
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          data-motion-horizontal=""
        >
          {products.map((product) => (
            <ResourceCard key={product.title} product={product} />
          ))}
        </div>
        <div
          className="mt-16 grid overflow-hidden rounded-[2rem] border border-brand-gold/25 bg-white shadow-[0_25px_80px_rgba(72,42,30,.12)] lg:grid-cols-[1fr_.95fr]"
          data-motion-panel=""
          id="lead-magnet"
        >
          <div className="relative z-10 overflow-hidden bg-empowerment-gradient p-8 text-white sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="absolute -right-16 -bottom-16 size-64 rounded-full border border-white/15"
            />
            <span className="flex size-13 items-center justify-center rounded-2xl bg-white/12 text-brand-gold-soft">
              <BookOpenCheck aria-hidden="true" className="size-6" />
            </span>
            <p className="mt-7 font-script text-3xl text-brand-gold-soft">
              A Gift For Your Becoming
            </p>
            <h3 className="mt-3 max-w-lg font-heading text-4xl leading-[1.02] font-semibold sm:text-5xl">
              {content.leadTitle}
            </h3>
            <p className="mt-5 max-w-lg leading-7 text-white/78">
              {content.leadText}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                href="https://faith-from-fire.theladyderbyconsult.com/"
                rel="noreferrer"
                showArrow
                target="_blank"
                variant="gold"
              >
                Get me the free resource
              </Button>
              <div className="flex items-center gap-2 text-sm font-semibold text-white/78">
                <Sparkles
                  aria-hidden="true"
                  className="size-4 text-brand-gold-soft"
                />
                Faith, healing, and becoming.
              </div>
            </div>
          </div>
          <div className="relative min-h-[22rem] overflow-hidden bg-[radial-gradient(circle_at_50%_46%,rgba(212,164,42,.34),rgba(244,229,202,.56)_38%,rgba(255,250,240,.94)_72%)] sm:min-h-[28rem] lg:min-h-full">
            <div
              aria-hidden="true"
              className="absolute inset-x-8 bottom-8 h-16 rounded-full bg-brand-red/12 blur-2xl"
            />
            <Image
              alt="Faith From Fire free resource book mockup"
              className="object-contain p-7 drop-shadow-[0_26px_48px_rgba(72,42,30,.2)] sm:p-10 lg:p-12"
              fill
              sizes="(max-width: 1024px) 90vw, 38vw"
              src="/images/Book_mock_up_.png"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
