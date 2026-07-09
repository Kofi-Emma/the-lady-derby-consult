import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import type { heroContent } from "@/content/landing";

export function HeroSection({
  content,
}: {
  content: typeof heroContent;
}) {
  return (
    <Section
      className="min-h-[calc(100svh-5rem)] bg-brand-ivory !py-0 lg:h-[calc(100svh-5rem)] lg:min-h-0"
      id="home"
    >
      <Container className="relative flex min-h-[calc(100svh-5rem)] flex-col gap-8 pt-8 pb-10 sm:pt-10 sm:pb-12 lg:grid lg:h-full lg:min-h-0 lg:grid-cols-[minmax(0,1fr)_minmax(15rem,18rem)] lg:items-end lg:gap-8 lg:overflow-hidden lg:py-0 2xl:!w-[80vw] 2xl:!max-w-none 2xl:!px-0">
        <div className="relative order-2 -mx-5 -mt-6 h-[53svh] min-h-[28rem] w-[calc(100%+2.5rem)] max-w-none overflow-hidden bg-[radial-gradient(circle_at_50%_38%,rgba(212,164,42,.36)_0%,rgba(247,239,226,.96)_34%,rgba(251,245,231,.78)_72%,#fbf5e7_100%)] sm:mx-[-2rem] sm:mt-0 sm:h-[60svh] sm:min-h-[36rem] sm:w-[calc(100%+4rem)] lg:pointer-events-none lg:absolute lg:bottom-0 lg:left-[68%] lg:z-0 lg:mx-0 lg:h-[96%] lg:min-h-0 lg:w-[min(38vw,36rem)] lg:-translate-x-1/2 lg:overflow-visible lg:bg-transparent 2xl:left-[59%]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_42%,transparent_0%,transparent_44%,rgba(251,245,231,.68)_70%,#fbf5e7_100%)] lg:hidden"
          />
          <div className="relative h-full w-full">
            <Image
              alt={content.imageAlt}
              className="scale-105 object-contain object-bottom sm:scale-110 lg:scale-100 lg:object-right-bottom"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 46vw"
              src={content.image}
            />
          </div>
        </div>

        <div className="relative z-10 order-1 w-full max-w-none break-words lg:col-start-1 lg:mt-0 lg:max-w-[38rem] lg:pb-12">
          <h1 className="font-heading text-[clamp(2.35rem,3.4vw,3.8rem)] leading-[.94] font-semibold text-brand-charcoal drop-shadow-[0_2px_16px_rgba(251,245,231,.75)]">
            {content.title}{" "}
            <span className="text-brand-red">{content.highlightedTitle}</span>
          </h1>
          <p className="mt-5 max-w-none text-base leading-7 text-brand-muted sm:text-lg sm:leading-8 lg:max-w-[30rem] lg:text-[1.02rem] lg:leading-7">
            {content.description}
          </p>
        </div>

        <div className="relative z-10 order-3 mx-auto grid w-full max-w-[22rem] gap-3 lg:col-start-2 lg:mx-0 lg:max-w-none lg:pb-12">
          <Button className="w-full px-5" href="#resources" showArrow>
            START YOUR TRANSFORMATION
          </Button>
          <Button
            className="w-full !bg-brand-ivory/95 px-5 !text-brand-red shadow-[0_12px_28px_rgba(54,54,55,.1)]"
            href="#contact"
            variant="secondary"
          >
            BOOK ME TO SPEAK
          </Button>
          <Button className="w-full px-5" href="#contact" variant="gold">
            WORK WITH ME
          </Button>
        </div>
      </Container>
    </Section>
  );
}
