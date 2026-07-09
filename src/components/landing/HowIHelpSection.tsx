import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import type { servicesContent } from "@/content/landing";

export function HowIHelpSection({
  content,
}: {
  content: typeof servicesContent;
}) {
  return (
    <Section id="how-i-help" tone="white">
      <Container>
        <SectionHeading
          description={content.description}
          eyebrow={content.eyebrow}
          title={content.title}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {content.services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
          <div className="flex min-h-64 flex-col justify-between rounded-[1.75rem] bg-empowerment-gradient p-8 text-white shadow-[0_22px_60px_rgba(118,15,21,.2)]">
            <div>
              <p className="font-script text-3xl text-brand-gold-soft">
                Your journey matters
              </p>
              <h3 className="mt-3 font-heading text-3xl leading-tight font-semibold">
                Ready to take your next brave step?
              </h3>
            </div>
            <div className="mt-7 flex flex-col gap-3">
              <Button
                href="https://faith-from-fire.theladyderbyconsult.com/"
                variant="gold"
              >
                Download free resource
              </Button>
              <Button href="#contact" variant="light">
                Work with The Lady Derby
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
