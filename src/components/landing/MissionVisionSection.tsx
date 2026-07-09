import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { missionContent } from "@/content/landing";

export function MissionVisionSection({
  content,
}: {
  content: typeof missionContent;
}) {
  return (
    <Section className="champagne-pattern" id="mission" tone="champagne">
      <Container className="relative">
        <SectionHeading
          description={content.description}
          eyebrow={content.eyebrow}
          title={content.title}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {content.cards.map((card, index) => (
            <Card className="relative overflow-hidden" key={card.title}>
              <span className="absolute top-5 right-6 font-heading text-6xl leading-none text-brand-gold/12">
                0{index + 1}
              </span>
              <IconBadge icon={card.icon} />
              <h3 className="mt-6 font-heading text-3xl font-semibold text-brand-red">
                {card.title}
              </h3>
              <p className="mt-4 leading-7 text-brand-muted">{card.text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
