import Link from "next/link";

import type { Locale } from "@/lib/i18n/config";

type SiteFooterProps = {
  locale: Locale;
  privacyLabel: string;
};

export function SiteFooter({ locale, privacyLabel }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="section-rule mt-20">
      <div className="site-container flex flex-col gap-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="font-medium text-ink">© {year} Movilabs</p>
        <div className="flex flex-wrap items-center gap-5">
          <Link
            href={`/${locale}/privacy`}
            className="focus-ring rounded-md px-1 py-0.5 transition-colors duration-200 hover:text-ink"
          >
            {privacyLabel}
          </Link>
          <a
            href="mailto:hola@movilabs.app"
            className="focus-ring rounded-md px-1 py-0.5 transition-colors duration-200 hover:text-ink"
          >
            hola@movilabs.app
          </a>
        </div>
      </div>
    </footer>
  );
}
