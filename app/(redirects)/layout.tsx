import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import "../globals.css";

import { SITE_URL } from "@/lib/site";

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
  metadataBase: new URL(SITE_URL),
  title: "Movilabs",
  description:
    "Movilabs es un estudio independiente dedicado al desarrollo de aplicaciones móviles simples, útiles y bien diseñadas.",
};

export default function RedirectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${sans.variable} ${display.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
