import type { Metadata, Viewport } from "next";
import { EB_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { faqs } from "@/data/landingData";
import { Analytics } from "@vercel/analytics/next";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || "https://inside-reset2027.com").replace(/\/$/, "");

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fcfaed",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "INSIDE: RESET 2027 | Yoga inmersiva y hábitos sostenibles",
    template: "%s | INSIDE: RESET 2027",
  },
  description:
    "Vive RESET INSIDE 2027: una experiencia inmersiva de yoga, respiración, hábitos sostenibles y bienestar integral en un santuario protegido.",
  keywords: [
    "RESET INSIDE 2027",
    "INSIDE Reset",
    "yoga inmersiva",
    "yoga meditativo",
    "hábitos sostenibles",
    "bienestar integral",
    "cold plunge",
    "taller de bienestar",
    "experiencia inmersiva",
    "reset personal",
  ],
  authors: [{ name: "INSIDE" }],
  creator: "INSIDE",
  publisher: "INSIDE",
  category: "wellness",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon0.svg", type: "image/svg+xml" }],
    shortcut: "/icon0.svg",
    apple: "/images/logo.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: baseUrl,
    siteName: "INSIDE: RESET 2027",
    title: "RESET INSIDE 2027 — Yoga inmersiva y bienestar",
    description:
      "Apaga el ruido y expande tu luz con una jornada inmersiva de yoga, hábitos sostenibles y reconexión personal.",
    images: [
      {
        url: "/images/hero_img1.jpeg",
        width: 1200,
        height: 630,
        alt: "Experiencia INSIDE de yoga inmersiva",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RESET INSIDE 2027 — Yoga inmersiva",
    description:
      "Una experiencia inmersiva para renovar cuerpo, mente y hábitos sostenibles.",
    images: ["/images/hero_img1.jpeg"],
  },
  other: {
    "application-name": "INSIDE: RESET 2027",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "INSIDE",
      url: baseUrl,
      logo: `${baseUrl}/images/logo.png`,
      description:
        "Santuario somático y bienestar consciente mediante experiencias inmersivas.",
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "INSIDE: RESET 2027",
      description:
        "Yoga inmersiva, hábitos sostenibles y experiencias de bienestar integral.",
      inLanguage: "es",
      publisher: { "@id": `${baseUrl}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${baseUrl}/#webpage`,
      url: baseUrl,
      name: "INSIDE: RESET 2027 — Yoga inmersiva",
      isPartOf: { "@id": `${baseUrl}/#website` },
      about: { "@id": `${baseUrl}/#organization` },
      inLanguage: "es",
      primaryImageOfPage: `${baseUrl}/images/hero_img1.jpeg`,
    },
    {
      "@type": "FAQPage",
      "@id": `${baseUrl}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${ebGaramond.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="overflow-x-hidden antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
