import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Inter,
  Parisienne,
} from "next/font/google";

import { defaultMetadata } from "@/lib/seo";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-parisienne",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${inter.variable} ${cormorant.variable} ${parisienne.variable} antialiased`}
      lang="en"
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
