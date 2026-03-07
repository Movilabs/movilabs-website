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
    "Movilabs es un estudio independiente dedicado al desarrollo de aplicaciones móviles simples, útiles y bien diseñadas.",

  applicationName: "Movilabs",

  openGraph: {
    title: "Movilabs",
    description:
      "Aplicaciones móviles simples, útiles y bien diseñadas.",
    url: "https://movilabs.app",
    siteName: "Movilabs",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Movilabs",
    description:
      "Aplicaciones móviles simples, útiles y bien diseñadas.",
    images: ["/opengraph-image.png"],
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
