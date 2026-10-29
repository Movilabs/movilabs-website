import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";

import "../globals.css";

import { isLocale, locales } from "@/lib/i18n/config";
import { SITE_URL } from "@/lib/site";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const seoByLocale = {
  es: {
    title: "Movilabs | Apps móviles simples, útiles y bien diseñadas",
    description:
      "Movilabs es un estudio independiente enfocado en crear aplicaciones móviles simples, útiles y bien diseñadas.",
    locale: "es_AR",
    path: "/es",
  },
  en: {
    title: "Movilabs | Simple, useful, well-designed mobile apps",
    description:
      "Movilabs is an independent studio focused on building simple, useful, and well-designed mobile apps.",
    locale: "en_US",
    path: "/en",
  },
  pt: {
    title: "Movilabs | Apps móveis simples, úteis e bem projetados",
    description:
      "Movilabs é um estúdio independente focado em criar aplicativos móveis simples, úteis e bem projetados.",
    locale: "pt_BR",
    path: "/pt",
  },
} as const;

const sharedOgImage = {
  url: `${SITE_URL}/og`,
  width: 1200,
  height: 630,
};

const sharedTwitterImage = `${SITE_URL}/og`;

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

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const seo = seoByLocale[locale];
  return {
    metadataBase: new URL(SITE_URL),
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.path,
      languages: {
        es: "/es",
        en: "/en",
        pt: "/pt",
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${SITE_URL}${seo.path}`,
      siteName: "Movilabs",
      locale: seo.locale,
      type: "website",
      images: [sharedOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [sharedTwitterImage],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${sans.variable} ${display.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
