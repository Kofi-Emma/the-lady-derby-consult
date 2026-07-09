import type { Metadata } from "next";

import { siteConfig } from "@/content/site";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "The Lady Derby | Helping Women Heal, Rise, Reinvent & Build Legacy",
  description: siteConfig.description,
  keywords: [
    "The Lady Derby",
    "Deborah Judah-Mensah",
    "women empowerment",
    "confidence mentor",
    "reinvention mentor",
    "identity speaker",
    "impact speaker",
    "faith-based transformation",
    "women healing",
    "women leadership",
    "purpose and legacy",
  ],
  authors: [{ name: siteConfig.founder }],
  creator: siteConfig.founder,
  alternates: { canonical: "/" },
  openGraph: {
    title: "The Lady Derby | Rise & Reinvent",
    description: siteConfig.description,
    siteName: siteConfig.name,
    url: "/",
    type: "website",
    images: [
      {
        url: "/images/logo-full.png",
        width: 980,
        height: 520,
        alt: "The Lady Derby",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Lady Derby | Rise & Reinvent",
    description: siteConfig.description,
    images: ["/images/logo-full.png"],
  },
};

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.founder,
      alternateName: "The Lady Derby",
      url: siteConfig.url,
      image: `${siteConfig.url}/images/hero-lady-derby.png`,
      email: `mailto:${siteConfig.email}`,
      jobTitle: "Confidence and Reinvention Mentor, Speaker and Advocate",
      description: siteConfig.positioning,
      founder: { "@id": `${siteConfig.url}/#organization` },
      sameAs: ["https://www.instagram.com/iamtheladyderby"],
    },
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      founder: { "@id": `${siteConfig.url}/#person` },
      url: siteConfig.url,
      logo: `${siteConfig.url}/images/logo-full.png`,
      email: siteConfig.email,
      description: siteConfig.description,
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      publisher: { "@id": `${siteConfig.url}/#organization` },
      inLanguage: "en",
    },
  ],
};
