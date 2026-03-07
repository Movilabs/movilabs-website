import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

const languageAlternates = {
  es: "/es",
  en: "/en",
  pt: "/pt",
};

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const t = getDictionary(locale);

  return {
    title: t.metadata.homeTitle,
    description: t.metadata.homeDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      url: `https://movilabs.app/${locale}`,
      siteName: "Movilabs",
      title: t.metadata.homeTitle,
      description: t.metadata.homeDescription,
      locale: t.metadata.ogLocale,
    },
    twitter: {
      card: "summary_large_image",
      title: t.metadata.homeTitle,
      description: t.metadata.homeDescription,
    },
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = getDictionary(locale);

  return (
    <div className="site-shell min-h-screen overflow-x-clip">
      <div aria-hidden className="site-grid" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-12rem] h-[30rem] w-[46rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-[-16rem] right-[-8rem] h-[26rem] w-[26rem] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-40" />
      </div>

      <SiteHeader locale={locale} currentPath="/" labels={t.nav} />

      <main className="pt-10">
        <section className="site-container relative py-16 sm:py-24 lg:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-12 -z-10 h-[32rem] bg-[radial-gradient(circle_at_70%_30%,rgba(120,150,255,0.15),transparent_60%)]"
          />

          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)]">
            <div>
              <p className="inline-flex items-center rounded-full border border-line bg-soft px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-muted animate-fade-up">
                {t.home.badge}
              </p>
              <h1
                className="mt-6 max-w-[42rem] animate-fade-up font-display text-[2.2rem] font-medium leading-[1.06] tracking-[-0.03em] text-ink sm:mt-7 sm:text-[3rem] lg:text-[4rem]"
                style={{ textWrap: "balance" }}
              >
                {t.home.headlineTop}
                <span className="md:block"> {t.home.headlineBottom}</span>
              </h1>
              <p
                className="mt-7 max-w-[39rem] animate-fade-up text-base leading-[1.78] text-muted sm:mt-8 sm:text-lg"
                style={{ textWrap: "balance" }}
              >
                {t.home.subtitle}
              </p>
              <div className="mt-10 sm:mt-11 animate-fade-up">
                <a
                  href="#contact"
                  className="focus-ring inline-flex items-center rounded-full border border-line bg-soft px-5 py-2.5 text-sm font-medium tracking-[0.01em] text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-panel"
                >
                  {t.home.cta}
                </a>
              </div>
            </div>

            <aside className="frosted animate-fade-in rounded-3xl p-6 sm:p-7">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">{t.home.howWeWork}</p>
              <ul className="mt-6 space-y-6">
                {t.home.workItems.map((item) => (
                  <li key={item.title} className="space-y-2">
                    <p className="text-sm font-semibold text-ink">{item.title}</p>
                    <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section id="about" className="section-rule">
          <div className="site-container py-20 sm:py-24">
            <div className="grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)]">
              <p className="pt-1 text-xs uppercase tracking-[0.18em] text-muted">{t.about.kicker}</p>
              <div className="max-w-[49rem] space-y-6">
                <h2 className="font-display text-2xl font-medium leading-tight tracking-tight text-ink sm:text-3xl">
                  {t.about.title}
                </h2>
                <p className="max-w-[44rem] text-base leading-[1.75] text-muted sm:text-lg">
                  {t.about.paragraphOne}
                </p>
                <p className="max-w-[44rem] text-base leading-[1.75] text-muted sm:text-lg">
                  {t.about.paragraphTwo}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-rule">
          <div className="site-container py-16 sm:py-20">
            <div className="max-w-3xl space-y-6">
              <h2 className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                {t.contact.title}
              </h2>
              <p className="max-w-2xl text-base leading-[1.75] text-muted sm:text-lg">
                {t.contact.description}
              </p>
              <a
                href="mailto:hola@movilabs.app"
                className="focus-ring inline-flex items-center rounded-xl border border-line bg-soft px-4 py-2.5 text-lg font-medium text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                hola@movilabs.app
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} privacyLabel={t.footer.privacy} />
    </div>
  );
}
