import { MailOpen } from "lucide-react";

import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import type { newsletterContent } from "@/content/landing";

export function NewsletterSection({
  content,
}: {
  content: typeof newsletterContent;
}) {
  return (
    <Section className="py-14 sm:py-16" tone="champagne">
      <Container>
        <div
          className="grid items-center gap-8 rounded-[2rem] border border-brand-gold/25 bg-white p-7 shadow-[0_20px_60px_rgba(72,42,30,.08)] sm:p-10 lg:grid-cols-[.7fr_1.3fr]"
          data-motion-panel=""
        >
          <div>
            <span className="flex size-11 items-center justify-center rounded-2xl bg-brand-red text-white">
              <MailOpen aria-hidden="true" className="size-5" />
            </span>
            <h2 className="mt-5 font-heading text-[clamp(2.35rem,3.4vw,3.8rem)] leading-[.94] font-semibold text-brand-charcoal">
              {content.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-brand-muted">
              {content.text}
            </p>
          </div>
          <NewsletterForm />
        </div>
      </Container>
    </Section>
  );
}
