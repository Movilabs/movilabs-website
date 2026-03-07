import type { Metadata } from "next";
import { headers } from "next/headers";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { defaultLocale, isLocale } from "@/lib/i18n/config";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://movilabs.app"),
  title: {
    default: "Movilabs",
    template: "%s | Movilabs",
  },
  description:
    "Movilabs es un estudio independiente enfocado en crear aplicaciones móviles simples, útiles y bien diseñadas.",
  applicationName: "Movilabs",
  keywords: [
    "Movilabs",
    "apps móviles",
    "desarrollo de apps",
    "aplicaciones móviles",
    "estudio de software",
    "inteligencia artificial",
    "mobile apps",
    "app studio",
  ],
  authors: [{ name: "Movilabs" }],
  creator: "Movilabs",
  publisher: "Movilabs",
  alternates: {
    canonical: "https://movilabs.app",
    languages: {
      "es": "https://movilabs.app/es",
      "en": "https://movilabs.app/en",
      "pt": "https://movilabs.app/pt",
    },
  },
  openGraph: {
    title: "Movilabs",
    description:
      "Estudio independiente enfocado en crear aplicaciones móviles simples, útiles y bien diseñadas.",
    url: "https://movilabs.app",
    siteName: "Movilabs",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Movilabs",
    description:
      "Estudio independiente enfocado en crear aplicaciones móviles simples, útiles y bien diseñadas.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localeFromHeader = (await headers()).get("x-locale");
  const lang = localeFromHeader && isLocale(localeFromHeader) ? localeFromHeader : defaultLocale;

  return (
    <html lang={lang} className={`${sans.variable} ${display.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
