import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

type PrivacyPageProps = {
  params: Promise<{ locale: string }>;
};

const languageAlternates = {
  es: "/es/privacy",
  en: "/en/privacy",
  pt: "/pt/privacy",
};

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const t = getDictionary(locale);

  return {
    title: t.metadata.privacyTitle,
    description: t.metadata.privacyDescription,
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      url: `https://movilabs.app/${locale}/privacy`,
      siteName: "Movilabs",
      title: t.metadata.privacyTitle,
      description: t.metadata.privacyDescription,
      locale: t.metadata.ogLocale,
    },
    twitter: {
      card: "summary_large_image",
      title: t.metadata.privacyTitle,
      description: t.metadata.privacyDescription,
    },
  };
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = getDictionary(locale);

  return (
    <div className="site-shell min-h-screen overflow-x-clip">
      <div aria-hidden className="site-grid" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10rem] h-[24rem] w-[42rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      </div>

      <SiteHeader locale={locale} currentPath="/privacy" labels={t.nav} />

      <main className="site-container py-16 sm:py-20">
        <article className="frosted max-w-4xl rounded-3xl p-7 sm:p-10">
          <header className="space-y-4">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">{t.privacy.legalKicker}</p>
            <h1 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              {t.privacy.title}
            </h1>
            <p className="text-sm text-muted">{t.privacy.lastUpdated}</p>
            <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              {t.privacy.intro}
            </p>
          </header>

          <section className="mt-10 space-y-4">
            <h2 className="font-display text-xl font-medium text-ink sm:text-2xl">
              {t.privacy.dataCollectedTitle}
            </h2>
            <p className="text-base leading-relaxed text-muted">{t.privacy.dataCollectedBody}</p>
            <p className="text-base leading-relaxed text-muted">{t.privacy.dataCollectedNote}</p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="font-display text-xl font-medium text-ink sm:text-2xl">
              {t.privacy.thirdPartyTitle}
            </h2>
            <p className="text-base leading-relaxed text-muted">{t.privacy.thirdPartyBody}</p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="font-display text-xl font-medium text-ink sm:text-2xl">
              {t.privacy.subscriptionsTitle}
            </h2>
            <p className="text-base leading-relaxed text-muted">{t.privacy.subscriptionsBody}</p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="font-display text-xl font-medium text-ink sm:text-2xl">
              {t.privacy.institutionalWebsiteTitle}
            </h2>
            <p className="text-base leading-relaxed text-muted">
              {t.privacy.institutionalWebsiteBody}
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="font-display text-xl font-medium text-ink sm:text-2xl">
              {t.privacy.changesTitle}
            </h2>
            <p className="text-base leading-relaxed text-muted">{t.privacy.changesBody}</p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="font-display text-xl font-medium text-ink sm:text-2xl">
              {t.privacy.contactTitle}
            </h2>
            <p className="text-base leading-relaxed text-muted">{t.privacy.contactBody}</p>
            <div>
              <a
                href={`mailto:${t.privacy.contactEmail}`}
                className="focus-ring inline-flex rounded-xl border border-line bg-soft px-4 py-2.5 text-base font-medium text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                {t.privacy.contactEmail}
              </a>
            </div>
          </section>
        </article>
      </main>

      <SiteFooter locale={locale} privacyLabel={t.footer.privacy} />
    </div>
  );
}
