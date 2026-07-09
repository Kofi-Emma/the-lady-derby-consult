import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ThemeBadge } from "@/components/ui/ThemeBadge";
import type { themesContent } from "@/content/landing";

export function BrandThemesSection({
  content,
}: {
  content: typeof themesContent;
}) {
  return (
    <Section
      className="empowerment-pattern bg-empowerment-gradient"
      id="themes"
      tone="red"
    >
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 size-90 -translate-x-1/2 rounded-full border border-white/10"
      />
      <Container className="relative">
        <SectionHeading
          description={content.description}
          eyebrow={content.eyebrow}
          light
          title={content.title}
        />
        <h3 className="mt-12 text-center text-xs font-bold tracking-[.2em] text-brand-gold-soft uppercase">
          {content.subheading}
        </h3>
        <div className="mx-auto mt-7 flex max-w-5xl flex-wrap justify-center gap-3">
          {content.themes.map((theme, index) => (
            <ThemeBadge accent={index % 5 === 0} key={theme}>
              {theme}
            </ThemeBadge>
          ))}
        </div>
        <div className="mt-11 text-center">
          <Button
            href="https://faith-from-fire.theladyderbyconsult.com/"
            showArrow
            variant="light"
          >
            Start your journey here
          </Button>
        </div>
      </Container>
    </Section>
  );
}
