import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

type SupportPageProps = {
  params: Promise<{ locale: string }>;
};

type SupportContent = {
  title: string;
  description: string;
  intro: string;
  topics: Array<{ title: string; body: string }>;
  contactTitle: string;
  contact: string;
  response: string;
};

const content: Record<Locale, SupportContent> = {
  es: {
    title: "Soporte de Pulso",
    description: "Ayuda y contacto para Pulso, la app de finanzas personales de Movilabs.",
    intro:
      "Si tenés un problema con Pulso, una compra o una suscripción, escribinos. Para poder ayudarte sin exponer información sensible, no incluyas movimientos, saldos, datos bancarios ni archivos exportados.",
    topics: [
      {
        title: "Compras y suscripciones",
        body: "Podés restaurar una compra desde la pantalla Premium. La facturación, cancelación y los reembolsos se administran desde la cuenta de App Store o Google Play con la que realizaste la compra.",
      },
      {
        title: "Datos locales",
        body: "Pulso guarda tus registros financieros en el dispositivo y no ofrece sincronización ni respaldo en la nube. Si borrás la app o sus datos, Movilabs no puede recuperar esa información.",
      },
      {
        title: "Antes de escribir",
        body: "Indicá la plataforma, la versión de Pulso, el idioma y una descripción de los pasos que producen el problema. Podés adjuntar una captura únicamente después de ocultar cualquier dato personal o financiero.",
      },
    ],
    contactTitle: "Contacto",
    contact: "Para soporte de Pulso:",
    response: "Respondemos en español, inglés o portugués tan pronto como sea posible.",
  },
  en: {
    title: "Pulso Support",
    description: "Help and contact information for Pulso, Movilabs' personal finance app.",
    intro:
      "If you have an issue with Pulso, a purchase, or a subscription, contact us. To receive help without exposing sensitive information, do not include transactions, balances, banking details, or exported files.",
    topics: [
      {
        title: "Purchases and subscriptions",
        body: "You can restore a purchase from the Premium screen. Billing, cancellation, and refunds are managed through the App Store or Google Play account used for the purchase.",
      },
      {
        title: "Local data",
        body: "Pulso stores your financial records on the device and does not provide cloud sync or backup. If you delete the app or its data, Movilabs cannot restore that information.",
      },
      {
        title: "Before contacting us",
        body: "Include the platform, Pulso version, language, and the steps that reproduce the issue. Attach a screenshot only after hiding all personal and financial information.",
      },
    ],
    contactTitle: "Contact",
    contact: "For Pulso support:",
    response: "We reply in Spanish, English, or Portuguese as soon as possible.",
  },
  pt: {
    title: "Suporte do Pulso",
    description: "Ajuda e contato para o Pulso, o app de finanças pessoais da Movilabs.",
    intro:
      "Se você tiver um problema com o Pulso, uma compra ou uma assinatura, entre em contato. Para receber ajuda sem expor informações sensíveis, não inclua transações, saldos, dados bancários ou arquivos exportados.",
    topics: [
      {
        title: "Compras e assinaturas",
        body: "Você pode restaurar uma compra na tela Premium. A cobrança, o cancelamento e os reembolsos são administrados pela conta da App Store ou do Google Play usada na compra.",
      },
      {
        title: "Dados locais",
        body: "O Pulso armazena seus registros financeiros no dispositivo e não oferece sincronização nem backup na nuvem. Se você excluir o app ou os dados dele, a Movilabs não poderá recuperar essas informações.",
      },
      {
        title: "Antes de entrar em contato",
        body: "Informe a plataforma, a versão do Pulso, o idioma e os passos que reproduzem o problema. Anexe uma captura somente depois de ocultar todas as informações pessoais e financeiras.",
      },
    ],
    contactTitle: "Contato",
    contact: "Para suporte do Pulso:",
    response: "Respondemos em espanhol, inglês ou português assim que possível.",
  },
};

export async function generateMetadata({ params }: SupportPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const page = content[locale];
  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `/${locale}/pulso/support`,
      languages: {
        es: "/es/pulso/support",
        en: "/en/pulso/support",
        pt: "/pt/pulso/support",
      },
    },
  };
}

export default async function PulsoSupportPage({ params }: SupportPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const page = content[locale];
  const dictionary = getDictionary(locale);

  return (
    <div className="site-shell min-h-screen overflow-x-clip">
      <div aria-hidden className="site-grid" />
      <SiteHeader locale={locale} currentPath="/pulso/support" labels={dictionary.nav} />
      <main className="site-container py-16 sm:py-20">
        <article className="frosted max-w-4xl rounded-3xl p-7 sm:p-10">
          <header className="space-y-4">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">Pulso · Movilabs</p>
            <h1 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              {page.title}
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              {page.intro}
            </p>
          </header>
          {page.topics.map((topic) => (
            <section key={topic.title} className="mt-10 space-y-4">
              <h2 className="font-display text-xl font-medium text-ink sm:text-2xl">
                {topic.title}
              </h2>
              <p className="text-base leading-relaxed text-muted">{topic.body}</p>
            </section>
          ))}
          <section className="mt-10 space-y-4">
            <h2 className="font-display text-xl font-medium text-ink sm:text-2xl">
              {page.contactTitle}
            </h2>
            <p className="text-base leading-relaxed text-muted">{page.contact}</p>
            <a
              href="mailto:hola@movilabs.app"
              className="focus-ring inline-flex rounded-xl border border-line bg-soft px-4 py-2.5 text-base font-medium text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              hola@movilabs.app
            </a>
            <p className="text-sm leading-relaxed text-muted">{page.response}</p>
          </section>
        </article>
      </main>
      <SiteFooter locale={locale} privacyLabel={dictionary.footer.privacy} />
    </div>
  );
}
