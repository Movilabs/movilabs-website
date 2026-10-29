import Link from "next/link";

import { locales, type Locale } from "@/lib/i18n/config";

const linkClassName =
  "focus-ring rounded-md px-0.5 py-1 text-[11px] text-muted transition-colors duration-200 hover:text-ink min-[360px]:px-1 min-[360px]:text-[12px] min-[400px]:px-1.5 min-[400px]:text-[13px] sm:px-2 sm:text-sm";

const localeLabel: Record<Locale, string> = {
  es: "ES",
  en: "EN",
  pt: "PT",
};

type SiteHeaderProps = {
  locale: Locale;
  currentPath: string;
  labels: {
    main: string;
    about: string;
    contact: string;
    privacy: string;
    language: string;
  };
};

function buildLocaleHref(targetLocale: Locale, currentPath: string) {
  return currentPath === "/" ? `/${targetLocale}` : `/${targetLocale}${currentPath}`;
}

export function SiteHeader({ locale, currentPath, labels }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 pt-4">
      <div className="site-container">
        <div className="nav-glass flex h-14 items-center justify-between rounded-full px-2 min-[360px]:px-3 sm:px-4">
          <Link
            href={`/${locale}`}
            className="focus-ring rounded-full px-1 py-1 font-display text-[10px] uppercase tracking-[0.08em] text-ink transition-opacity duration-200 hover:opacity-80 min-[360px]:px-2 min-[360px]:text-xs min-[360px]:tracking-[0.14em] sm:px-3 sm:tracking-[0.22em]"
          >
            Movilabs
          </Link>
          <div className="flex items-center gap-1 sm:gap-3">
            <nav aria-label={labels.main} className="flex items-center gap-1 sm:gap-2">
              <Link href={`/${locale}#about`} className={linkClassName}>
                {labels.about}
              </Link>
              <Link href={`/${locale}#contact`} className={linkClassName}>
                {labels.contact}
              </Link>
              <Link href={`/${locale}/privacy`} className={linkClassName}>
                {labels.privacy}
              </Link>
            </nav>

            <details className="group relative">
              <summary
                className="focus-ring flex h-8 w-8 cursor-pointer list-none items-center justify-center rounded-full border border-line bg-soft text-[10px] font-semibold tracking-[0.06em] text-muted transition-colors duration-200 hover:text-ink min-[360px]:w-10 min-[360px]:text-[11px] min-[360px]:tracking-[0.08em] [&::-webkit-details-marker]:hidden"
                aria-label={labels.language}
              >
                {localeLabel[locale]}
              </summary>
              <ul className="absolute right-0 mt-2 w-14 rounded-xl border border-line bg-panel/95 p-1 backdrop-blur-md">
                {locales.map((lang) => (
                  <li key={lang}>
                    <Link
                      href={buildLocaleHref(lang, currentPath)}
                      className={`focus-ring block rounded-md px-2 py-1 text-center text-[11px] font-semibold tracking-[0.08em] transition-colors duration-200 ${
                        lang === locale ? "text-ink" : "text-muted hover:text-ink"
                      }`}
                      aria-current={lang === locale ? "page" : undefined}
                    >
                      {localeLabel[lang]}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
