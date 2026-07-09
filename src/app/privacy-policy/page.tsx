import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy | The Lady Derby",
  description:
    "How The Lady Derby handles contact, newsletter, and resource request information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-brand-ivory py-8 sm:py-12">
      <Container className="max-w-4xl">
        <Link
          aria-label="Return to The Lady Derby home page"
          className="relative block h-18 w-52"
          href="/"
        >
          <Image
            alt="The Lady Derby"
            className="object-contain object-left"
            fill
            priority
            sizes="208px"
            src="/images/logo-full.png"
          />
        </Link>
        <article className="mt-8 rounded-[2rem] border border-brand-gold/20 bg-white p-7 shadow-[0_20px_70px_rgba(54,54,55,.08)] sm:p-12">
          <p className="text-xs font-bold tracking-[.18em] text-brand-red uppercase">
            Last updated: July 2026
          </p>
          <h1 className="mt-4 font-heading text-5xl font-semibold text-brand-charcoal sm:text-6xl">
            Privacy Policy
          </h1>
          <div className="mt-8 space-y-8 text-base leading-8 text-brand-muted">
            <section>
              <h2 className="font-heading text-3xl font-semibold text-brand-red">
                Information we collect
              </h2>
              <p className="mt-3">
                When you request a resource, subscribe, or send an enquiry, we
                may collect your name, email address, phone number,
                organization, enquiry type, and the message you choose to
                share.
              </p>
            </section>
            <section>
              <h2 className="font-heading text-3xl font-semibold text-brand-red">
                How information is used
              </h2>
              <p className="mt-3">
                We use this information to deliver requested resources, reply
                to enquiries, provide relevant updates, and improve The Lady
                Derby’s services. We do not sell personal information.
              </p>
            </section>
            <section>
              <h2 className="font-heading text-3xl font-semibold text-brand-red">
                Service providers and retention
              </h2>
              <p className="mt-3">
                Form and email providers may process information on our behalf
                when those services are configured. Information is retained
                only as long as reasonably necessary for the purpose it was
                collected or to meet legal obligations.
              </p>
            </section>
            <section>
              <h2 className="font-heading text-3xl font-semibold text-brand-red">
                Your choices
              </h2>
              <p className="mt-3">
                You may unsubscribe from marketing emails at any time. To ask
                what information we hold, request a correction, or request
                deletion, contact{" "}
                <a
                  className="font-semibold text-brand-red underline"
                  href={`mailto:${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>
          </div>
          <Link
            className="mt-10 inline-flex rounded-full bg-brand-red px-6 py-3 text-xs font-bold tracking-[.12em] text-white uppercase transition hover:bg-brand-red-dark"
            href="/"
          >
            Return home
          </Link>
        </article>
      </Container>
    </main>
  );
}
