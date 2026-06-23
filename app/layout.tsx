import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono, Fustat } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { FloatingNav } from "@/components/layout/FloatingNav";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { organizationSchema, websiteSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const fustat = Fustat({
  subsets: ["latin"],
  variable: "--font-fustat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: { telephone: false },
  alternates: {
    types: {
      "application/rss+xml": [{ url: "/feed.xml", title: `${SITE.name} — Flux RSS` }],
    },
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${fraunces.variable} ${mono.variable} ${fustat.variable}`}>
      <body className="min-h-dvh antialiased">
        <SchemaMarkup schema={[organizationSchema(), websiteSchema()]} />
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[1000] focus:rounded-lg focus:bg-night-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Aller au contenu principal
        </a>
        <FloatingNav />
        <main id="contenu" className="pt-[84px]">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
