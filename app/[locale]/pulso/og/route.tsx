import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { isLocale, locales } from "@/lib/i18n/config";
import { pulsoContent } from "@/lib/pulso/content";
import { isPulsoDownloadable } from "@/lib/pulso/store-links";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

async function dataUrl(path: string, type: string) {
  const file = await readFile(join(process.cwd(), "public", path));
  return `data:${type};base64,${file.toString("base64")}`;
}

export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return new Response(null, { status: 404 });

  const page = pulsoContent[locale];
  const logo = await dataUrl("pulso/logo.png", "image/png");
  const screenshot = await dataUrl(page.hero.src, "image/jpeg");

  return new ImageResponse(
    (
      <div
        style={{
          // Mismo azul noche que el fondo del logo y de las capturas.
          background: "#0f172a",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: "0 80px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: 660 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} alt="" width={420} height={120} style={{ marginLeft: -26 }} />
          <div style={{ fontSize: 60, lineHeight: 1.15, marginTop: 36 }}>{page.ogHeadline}</div>
          {isPulsoDownloadable ? null : (
            <div style={{ display: "flex", alignItems: "center", marginTop: 40, fontSize: 30, color: "#82c4ff" }}>
              <div style={{ width: 14, height: 14, borderRadius: 7, background: "#2388ff", marginRight: 16 }} />
              {page.cta.comingSoon}
            </div>
          )}
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={screenshot} alt="" width={340} height={720} style={{ marginTop: 56 }} />
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
