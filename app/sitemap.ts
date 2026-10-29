import type { MetadataRoute } from "next";

import { locales } from "@/lib/i18n/config";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const localizedEntries = locales.flatMap((locale) => [
    {
      url: `${SITE_URL}/${locale}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: locale === "es" ? 1 : 0.9,
    },
    {
      url: `${SITE_URL}/${locale}/privacy`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/${locale}/pulso/privacy`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/${locale}/pulso/support`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/${locale}/pulso/terms`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ]);

  return localizedEntries;
}
