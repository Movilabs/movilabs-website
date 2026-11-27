import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { StoreCta } from "@/components/pulso/store-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { pulsoContent, type PulsoContent } from "@/lib/pulso/content";
import { isPulsoDownloadable } from "@/lib/pulso/store-links";
import { SITE_URL } from "@/lib/site";

type PulsoPageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PulsoPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const page = pulsoContent[locale];
  const image = {
    url: `${SITE_URL}/${locale}/pulso/og`,
    width: 1200,
    height: 630,
    alt: `Pulso. ${page.ogHeadline}`,
  };

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `/${locale}/pulso`,
      languages: { es: "/es/pulso", en: "/en/pulso", pt: "/pt/pulso" },
    },
    openGraph: {
      type: "website",
      siteName: "Movilabs",
      locale: page.ogLocale,
      url: `${SITE_URL}/${locale}/pulso`,
      title: page.metaTitle,
      description: page.metaDescription,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [image],
    },
  };
}

type PhoneProps = {
  screenshot: PulsoContent["hero"];
  eager?: boolean;
  className: string;
};

// Recortes de las capturas publicadas para las tiendas (1060 × 2245).
function Phone({ screenshot, eager = false, className }: PhoneProps) {
  return (
    <Image
      src={screenshot.src}
      alt={screenshot.alt}
      width={1060}
      height={2245}
      sizes="(min-width: 1024px) 320px, 72vw"
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      className={`h-auto w-full rounded-[2.75rem] ${className}`}
    />
  );
}

export default async function PulsoPage({ params }: PulsoPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const page = pulsoContent[locale];
  const dictionary = getDictionary(locale);
  const links = [
    { href: `/${locale}/pulso/privacy`, label: page.links.privacy },
    { href: `/${locale}/pulso/support`, label: page.links.support },
    { href: `/${locale}/pulso/terms`, label: page.links.terms },
  ];

  return (
    // Fondo plano: es el azul noche oficial de Pulso, el mismo del logo y las capturas.
    <div className="min-h-screen overflow-x-clip bg-canvas">
      <SiteHeader locale={locale} currentPath="/pulso" labels={dictionary.nav} />

      <main>
        <section>
          <div className="site-container grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-20">
            <div>
              <Image
                src="/pulso/logo.png"
                alt={page.logoAlt}
                width={1400}
                height={400}
                sizes="224px"
                loading="eager"
                className="-ml-3.5 h-16 w-56"
              />
              <p className="mt-6 text-xs font-medium uppercase tracking-[0.22em] text-pulso-sky">
                {page.kicker}
              </p>
              <h1
                className="mt-4 max-w-[36rem] font-display text-[2.4rem] font-medium leading-[1.06] tracking-[-0.03em] text-ink sm:text-[3.5rem]"
                style={{ textWrap: "balance" }}
              >
                {page.headline}
              </h1>
              <p className="mt-6 max-w-[34rem] text-base leading-[1.75] text-muted sm:text-lg">
                {page.intro}
              </p>
              <ul className="mt-6 space-y-2.5">
                {page.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-sm text-ink sm:text-base">
                    <span aria-hidden className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full bg-pulso" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <StoreCta labels={page.cta} />
              </div>
            </div>
            <figure className="mx-auto w-full max-w-[17rem] sm:max-w-[20rem]">
              <Phone screenshot={page.hero} eager className="shadow-2xl shadow-black/40" />
              <figcaption className="mt-4 text-center text-xs text-muted">
                {page.screenshotNote}
              </figcaption>
            </figure>
          </div>
        </section>

        <section aria-labelledby="pulso-features" className="section-rule">
          <div className="site-container py-16 sm:py-20">
            <h2
              id="pulso-features"
              className="font-display text-3xl font-medium tracking-[-0.02em] text-ink sm:text-4xl"
            >
              {page.featuresTitle}
            </h2>
            <ul className="mt-10 grid gap-6 lg:grid-cols-3">
              {page.features.map((feature) => (
                <li
                  key={feature.title}
                  className="flex flex-col overflow-hidden rounded-3xl border border-line bg-panel"
                >
                  <div className="flex-1 space-y-3 p-6 sm:p-7">
                    <h3 className="font-display text-xl font-medium leading-snug text-ink">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted sm:text-base">{feature.body}</p>
                  </div>
                  <div className="mx-auto w-full max-w-[17rem] px-4 pb-6">
                    <Phone screenshot={feature.screenshot} className="" />
                  </div>
                </li>
              ))}
            </ul>

            <h2 className="mt-16 font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
              {page.moreTitle}
            </h2>
            <ul className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {page.more.map((item) => (
                <li key={item.title} className="border-t border-pulso/50 pt-4">
                  <h3 className="font-display text-lg font-medium text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm leading-relaxed text-muted">{page.premiumNote}</p>
          </div>
        </section>

        <section aria-labelledby="pulso-privacy" className="bg-panel">
          <div className="site-container py-16 sm:py-20">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-pulso-sky">
              {page.privacyKicker}
            </p>
            <h2
              id="pulso-privacy"
              className="mt-4 font-display text-3xl font-medium tracking-[-0.02em] text-ink sm:text-4xl"
            >
              {page.privacyTitle}
            </h2>
            <ul className="mt-10 grid gap-5 md:grid-cols-2">
              {page.privacyPoints.map((point) => (
                <li key={point.title} className="rounded-2xl border border-line bg-canvas p-6">
                  <h3 className="font-display text-lg font-medium text-ink">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{point.body}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-muted">{page.disclaimer}</p>
          </div>
        </section>

        <section aria-labelledby="pulso-closing">
          <div className="site-container py-16 sm:py-20">
            <h2
              id="pulso-closing"
              className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl"
            >
              {isPulsoDownloadable ? page.headline : page.closingTitle}
            </h2>
            <div className="mt-6">
              <StoreCta labels={page.cta} />
            </div>
            <nav aria-label={page.linksLabel} className="mt-10">
              <ul className="flex flex-wrap gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="focus-ring inline-flex min-h-11 items-center rounded-xl border border-line bg-soft px-4 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-pulso"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} privacyLabel={dictionary.footer.privacy} />
    </div>
  );
}
