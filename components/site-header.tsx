import Link from "next/link";

import { locales, type Locale } from "@/lib/i18n/config";

const linkClassName =
  "focus-ring rounded-md px-1.5 py-1 text-[13px] text-muted transition-colors duration-200 hover:text-ink sm:px-2 sm:text-sm";

const localeLabel: Record<Locale, string> = {
  es: "ES",
  en: "EN",
  pt: "PT",
};

type SiteHeaderProps = {
  locale: Locale;
  currentPath: "/" | "/privacy";
  labels: {
    about: string;
    contact: string;
    privacy: string;
    language: string;
  };
};

function buildLocaleHref(targetLocale: Locale, currentPath: "/" | "/privacy") {
  return currentPath === "/" ? `/${targetLocale}` : `/${targetLocale}${currentPath}`;
}

export function SiteHeader({ locale, currentPath, labels }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 pt-4">
      <div className="site-container">
        <div className="nav-glass flex h-14 items-center justify-between rounded-full px-3 sm:px-4">
          <Link
            href={`/${locale}`}
            className="focus-ring rounded-full px-3 py-1 font-display text-xs uppercase tracking-[0.22em] text-ink transition-opacity duration-200 hover:opacity-80"
          >
            Movilabs
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <nav aria-label="Principal" className="flex items-center gap-1 sm:gap-2">
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
                className="focus-ring flex h-8 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-line bg-soft text-[11px] font-semibold tracking-[0.08em] text-muted transition-colors duration-200 hover:text-ink [&::-webkit-details-marker]:hidden"
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
