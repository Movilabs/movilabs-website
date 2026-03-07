import type { MetadataRoute } from "next";

import { locales } from "@/lib/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const localizedEntries = locales.flatMap((locale) => [
    {
      url: `https://movilabs.app/${locale}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: locale === "es" ? 1 : 0.9,
    },
    {
      url: `https://movilabs.app/${locale}/privacy`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ]);

  return localizedEntries;
}
