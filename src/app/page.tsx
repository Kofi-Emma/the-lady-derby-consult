import { BrandThemesSection } from "@/components/landing/BrandThemesSection";
import { ClosingStatementSection } from "@/components/landing/ClosingStatementSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { DigitalProductsSection } from "@/components/landing/DigitalProductsSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { HowIHelpSection } from "@/components/landing/HowIHelpSection";
import { IWomanHubSection } from "@/components/landing/IWomanHubSection";
import { MeetLadyDerbySection } from "@/components/landing/MeetLadyDerbySection";
import { MissionVisionSection } from "@/components/landing/MissionVisionSection";
import { NewsletterSection } from "@/components/landing/NewsletterSection";
import { SocialMediaSection } from "@/components/landing/SocialMediaSection";
import { SpeakingSection } from "@/components/landing/SpeakingSection";
import { StoryBriefSection } from "@/components/landing/StoryBriefSection";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SiteMotion } from "@/components/motion/SiteMotion";
import {
  closingContent,
  contactContent,
  heroContent,
  iwomanHubContent,
  meetContent,
  missionContent,
  newsletterContent,
  resourcesContent,
  servicesContent,
  socialContent,
  speakingContent,
  storyContent,
  themesContent,
} from "@/content/landing";
import { products } from "@/content/products";
import { socialLinks } from "@/content/social";
import { structuredData } from "@/lib/seo";
import { sanitizeJsonLd } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <a
        className="fixed top-2 left-2 z-[100] -translate-y-24 rounded-full bg-brand-charcoal px-5 py-3 text-sm font-semibold text-white transition focus:translate-y-0"
        href="#main-content"
      >
        Skip to content
      </a>
      <Header />
      <SiteMotion />
      <main id="main-content">
        <HeroSection content={heroContent} />
        <MeetLadyDerbySection content={meetContent} />
        <MissionVisionSection content={missionContent} />
        <StoryBriefSection content={storyContent} />
        <HowIHelpSection content={servicesContent} />
        <IWomanHubSection content={iwomanHubContent} />
        <SpeakingSection content={speakingContent} />
        <BrandThemesSection content={themesContent} />
        <DigitalProductsSection
          content={resourcesContent}
          products={products}
        />
        <SocialMediaSection
          content={socialContent}
          socialLinks={socialLinks}
        />
        <NewsletterSection content={newsletterContent} />
        <ContactSection content={contactContent} />
        <ClosingStatementSection content={closingContent} />
      </main>
      <Footer />
      <script
        dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(structuredData) }}
        type="application/ld+json"
      />
    </>
  );
}
