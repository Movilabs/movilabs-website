import { isPulsoDownloadable, pulsoStoreLinks } from "@/lib/pulso/store-links";

type StoreCtaProps = {
  labels: {
    comingSoon: string;
    comingSoonNote: string;
    appStore: string;
    googlePlay: string;
  };
};

const buttonClassName =
  "focus-ring inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-canvas transition-transform duration-200 hover:-translate-y-0.5";

export function StoreCta({ labels }: StoreCtaProps) {
  if (!isPulsoDownloadable) {
    return (
      <div className="flex flex-col items-start gap-3">
        <p className="inline-flex min-h-11 items-center gap-2.5 rounded-full border border-pulso/60 bg-pulso/10 px-5 py-2.5 text-sm font-semibold text-ink">
          <span aria-hidden className="h-2 w-2 rounded-full bg-pulso" />
          {labels.comingSoon}
        </p>
        <p className="text-sm leading-relaxed text-muted">{labels.comingSoonNote}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start gap-3 sm:flex-row">
      {pulsoStoreLinks.appStore ? (
        <a href={pulsoStoreLinks.appStore} className={buttonClassName}>
          {labels.appStore}
        </a>
      ) : null}
      {pulsoStoreLinks.googlePlay ? (
        <a href={pulsoStoreLinks.googlePlay} className={buttonClassName}>
          {labels.googlePlay}
        </a>
      ) : null}
    </div>
  );
}
