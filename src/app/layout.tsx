import type { Metadata, Viewport } from "next";
import {
  IBM_Plex_Mono,
  Instrument_Serif,
  Inter_Tight,
} from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RevealProvider } from "@/components/reveal-provider";

const sans = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} — AI automation for regulated industries`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "AI automation",
    "document extraction",
    "AI voice agents",
    "NHS AI",
    "UK AI consultancy",
    "workflow automation",
    "regulated industries",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.domain,
    siteName: site.legalName,
    title: `${site.name} — AI automation for regulated industries`,
    description: site.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alpha2Omega — AI automation for regulated industries",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — AI automation for regulated industries`,
    description: site.shortDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.legalName,
  url: site.domain,
  email: site.email,
  telephone: site.phone,
  description: site.description,
  areaServed: ["United Kingdom", "Ireland"],
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postcode,
    addressCountry: "GB",
  },
  knowsAbout: [
    "Document intelligence",
    "Data extraction",
    "AI voice agents",
    "Workflow automation",
    "AI audit and strategy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-GB"
      data-scroll-behavior="smooth"
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <RevealProvider />
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
