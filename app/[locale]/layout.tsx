import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const seo = seoByLocale[locale];

  return {
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
      url: `https://movilabs.app${seo.path}`,
      siteName: "Movilabs",
      locale: seo.locale,
      type: "website",
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: ["/opengraph-image.png"],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <>{children}</>;
}
