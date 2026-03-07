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
  applicationName: "Movilabs",
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
