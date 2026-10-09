import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

type TermsPageProps = {
  params: Promise<{ locale: string }>;
};

type TermsContent = {
  title: string;
  description: string;
  updated: string;
  intro: string;
  sections: Array<{ title: string; paragraphs: string[] }>;
  contactTitle: string;
  contact: string;
};

const content: Record<Locale, TermsContent> = {
  es: {
    title: "Términos de uso de Pulso",
    description: "Condiciones aplicables al uso de Pulso y sus suscripciones Premium.",
    updated: "Última actualización: 5 de octubre de 2026",
    intro:
      "Estos términos regulan el uso de Pulso. Al descargar o utilizar la aplicación, aceptás estas condiciones y las reglas aplicables de la tienda desde la que la obtuviste.",
    sections: [
      {
        title: "Responsable y alcance",
        paragraphs: [
          "Pulso es desarrollado por Maximiliano Cuesta, desarrollador independiente radicado en Chubut, Argentina, que opera bajo la marca Movilabs.",
          "Pulso es una herramienta de organización financiera personal. No es una entidad financiera, un asesor de inversiones, contable o legal, y no brinda recomendaciones profesionales ni garantiza resultados económicos.",
        ],
      },
      {
        title: "Uso de la aplicación",
        paragraphs: [
          "Sos responsable de revisar la exactitud de la información que cargás y de las decisiones que tomás a partir de ella. No debés usar Pulso para infringir la ley, vulnerar derechos de terceros, intentar acceder a sistemas ajenos ni alterar el funcionamiento de la aplicación.",
          "Los registros financieros permanecen localmente en tu dispositivo. Pulso no ofrece una cuenta propia, sincronización ni respaldo en la nube. Sos responsable de proteger el dispositivo y de conservar las exportaciones que decidas generar.",
        ],
      },
      {
        title: "Pulso Premium",
        paragraphs: [
          "Algunas funciones requieren una suscripción mensual o anual. El precio, la moneda, los impuestos, la duración y cualquier prueba gratuita se muestran en App Store o Google Play antes de confirmar la compra. Una prueba de 30 días sólo se ofrece cuando la tienda indica que la cuenta es elegible.",
          "Las suscripciones se renuevan automáticamente salvo que las canceles desde la cuenta de la tienda dentro del plazo indicado por Apple o Google. La cancelación detiene renovaciones futuras y normalmente conserva el acceso hasta el final del período ya pagado. Las compras, cobros, elegibilidad, cancelaciones y reembolsos están sujetos a las condiciones de la tienda correspondiente.",
          "Podés restaurar compras desde Pulso usando la misma cuenta de tienda. Una suscripción mensual y una anual habilitan el mismo conjunto de funciones Premium durante su vigencia.",
        ],
      },
      {
        title: "Servicios y datos externos",
        paragraphs: [
          "Cotizaciones, índices y otros datos externos pueden sufrir demoras, interrupciones o errores. Se ofrecen como referencia y no deben considerarse información financiera en tiempo real ni una recomendación.",
          "Podemos modificar, corregir, suspender o retirar funciones para mantener la seguridad, cumplir obligaciones o mejorar Pulso. Si un cambio afecta una suscripción vigente, respetaremos las reglas aplicables de la tienda y la legislación correspondiente.",
        ],
      },
      {
        title: "Disponibilidad y responsabilidad",
        paragraphs: [
          "Procuramos que Pulso sea estable y preciso, pero la aplicación se ofrece según disponibilidad y puede contener errores o interrupciones. En la medida permitida por la ley, Movilabs no responde por decisiones financieras, pérdida de datos locales, servicios de terceros o daños indirectos derivados del uso de la aplicación.",
          "Nada en estos términos limita derechos irrenunciables que te correspondan como consumidor ni responsabilidades que no puedan excluirse legalmente.",
        ],
      },
      {
        title: "Propiedad intelectual y finalización",
        paragraphs: [
          "Pulso, su diseño, marca, textos y software pertenecen a Movilabs o a sus licenciantes. La descarga te concede una licencia personal, limitada, revocable, no exclusiva y no transferible para usar la aplicación conforme a estos términos.",
          "Podés dejar de usar Pulso en cualquier momento. Podemos limitar el acceso ante un uso ilegal o abusivo. Eliminar la aplicación no cancela automáticamente una suscripción: debés cancelarla desde App Store o Google Play.",
        ],
      },
      {
        title: "Privacidad, cambios y ley aplicable",
        paragraphs: [
          "El tratamiento de información se describe en la Política de privacidad de Pulso. Podemos actualizar estos términos cuando cambien la aplicación, las tiendas o las obligaciones aplicables; publicaremos la versión vigente y su fecha.",
          "Estos términos se interpretan conforme a las leyes de la República Argentina, sin desplazar las normas obligatorias de protección al consumidor ni los derechos que correspondan en tu país de residencia.",
        ],
      },
    ],
    contactTitle: "Contacto",
    contact: "Para consultas sobre estos términos:",
  },
  en: {
    title: "Pulso Terms of Use",
    description: "Terms governing the use of Pulso and its Premium subscriptions.",
    updated: "Last updated: October 5, 2026",
    intro:
      "These terms govern your use of Pulso. By downloading or using the app, you agree to these terms and to the applicable rules of the store where you obtained it.",
    sections: [
      {
        title: "Provider and scope",
        paragraphs: [
          "Pulso is developed by Maximiliano Cuesta, an independent developer based in Chubut, Argentina, operating under the Movilabs brand.",
          "Pulso is a personal finance organization tool. It is not a financial institution or an investment, accounting, or legal adviser, does not provide professional advice, and does not guarantee financial outcomes.",
        ],
      },
      {
        title: "Use of the app",
        paragraphs: [
          "You are responsible for reviewing the accuracy of the information you enter and for decisions you make based on it. You must not use Pulso to break the law, violate third-party rights, access systems without authorization, or disrupt the app.",
          "Financial records remain locally on your device. Pulso does not provide its own account, cloud sync, or backup. You are responsible for protecting the device and retaining any exports you choose to create.",
        ],
      },
      {
        title: "Pulso Premium",
        paragraphs: [
          "Some features require a monthly or annual subscription. The price, currency, taxes, duration, and any free trial are shown by the App Store or Google Play before purchase confirmation. A 30-day trial is offered only when the store reports that the account is eligible.",
          "Subscriptions renew automatically unless you cancel through your store account within the period specified by Apple or Google. Cancellation stops future renewals and normally preserves access until the end of the paid period. Purchases, charges, eligibility, cancellations, and refunds are governed by the applicable store terms.",
          "You can restore purchases in Pulso using the same store account. Monthly and annual subscriptions unlock the same Premium features while active.",
        ],
      },
      {
        title: "External services and data",
        paragraphs: [
          "Exchange rates, indexes, and other external data may be delayed, interrupted, or inaccurate. They are provided for reference and must not be treated as real-time financial information or advice.",
          "We may modify, correct, suspend, or remove features to maintain security, comply with obligations, or improve Pulso. If a change affects an active subscription, we will follow applicable store rules and law.",
        ],
      },
      {
        title: "Availability and liability",
        paragraphs: [
          "We work to keep Pulso stable and accurate, but the app is provided as available and may contain errors or interruptions. To the extent permitted by law, Movilabs is not liable for financial decisions, loss of local data, third-party services, or indirect damages arising from use of the app.",
          "Nothing in these terms limits non-waivable consumer rights or liability that cannot legally be excluded.",
        ],
      },
      {
        title: "Intellectual property and termination",
        paragraphs: [
          "Pulso, its design, brand, text, and software belong to Movilabs or its licensors. Downloading the app grants you a personal, limited, revocable, non-exclusive, and non-transferable license to use it under these terms.",
          "You may stop using Pulso at any time. We may restrict access in response to unlawful or abusive use. Deleting the app does not automatically cancel a subscription; you must cancel it through the App Store or Google Play.",
        ],
      },
      {
        title: "Privacy, changes, and governing law",
        paragraphs: [
          "Information handling is described in the Pulso Privacy Policy. We may update these terms when the app, stores, or applicable obligations change; the current version and date will be published here.",
          "These terms are governed by the laws of the Argentine Republic, without displacing mandatory consumer-protection rules or rights available in your country of residence.",
        ],
      },
    ],
    contactTitle: "Contact",
    contact: "For questions about these terms:",
  },
  pt: {
    title: "Termos de Uso do Pulso",
    description: "Condições aplicáveis ao uso do Pulso e às assinaturas Premium.",
    updated: "Última atualização: 5 de outubro de 2026",
    intro:
      "Estes termos regulam o uso do Pulso. Ao baixar ou usar o app, você concorda com estas condições e com as regras aplicáveis da loja onde o obteve.",
    sections: [
      {
        title: "Responsável e escopo",
        paragraphs: [
          "O Pulso é desenvolvido por Maximiliano Cuesta, desenvolvedor independente radicado em Chubut, Argentina, que opera sob a marca Movilabs.",
          "O Pulso é uma ferramenta de organização financeira pessoal. Não é uma instituição financeira nem um assessor de investimentos, contábil ou jurídico, não presta aconselhamento profissional e não garante resultados financeiros.",
        ],
      },
      {
        title: "Uso do aplicativo",
        paragraphs: [
          "Você é responsável por revisar a exatidão das informações inseridas e pelas decisões tomadas com base nelas. Você não deve usar o Pulso para infringir a lei, violar direitos de terceiros, acessar sistemas sem autorização ou prejudicar o funcionamento do app.",
          "Os registros financeiros permanecem localmente no seu dispositivo. O Pulso não oferece conta própria, sincronização nem backup na nuvem. Você é responsável por proteger o dispositivo e conservar as exportações que decidir criar.",
        ],
      },
      {
        title: "Pulso Premium",
        paragraphs: [
          "Alguns recursos exigem uma assinatura mensal ou anual. O preço, a moeda, os impostos, a duração e qualquer período gratuito são exibidos pela App Store ou pelo Google Play antes da confirmação. O período gratuito de 30 dias é oferecido somente quando a loja informa que a conta é elegível.",
          "As assinaturas são renovadas automaticamente, a menos que você cancele pela conta da loja dentro do prazo informado pela Apple ou pelo Google. O cancelamento interrompe renovações futuras e normalmente preserva o acesso até o fim do período pago. Compras, cobranças, elegibilidade, cancelamentos e reembolsos seguem os termos da loja aplicável.",
          "Você pode restaurar compras no Pulso usando a mesma conta da loja. As assinaturas mensal e anual liberam os mesmos recursos Premium enquanto estiverem ativas.",
        ],
      },
      {
        title: "Serviços e dados externos",
        paragraphs: [
          "Cotações, índices e outros dados externos podem sofrer atrasos, interrupções ou erros. Eles são fornecidos como referência e não devem ser considerados informações financeiras em tempo real nem uma recomendação.",
          "Podemos modificar, corrigir, suspender ou retirar recursos para manter a segurança, cumprir obrigações ou melhorar o Pulso. Se uma alteração afetar uma assinatura vigente, seguiremos as regras aplicáveis da loja e a legislação correspondente.",
        ],
      },
      {
        title: "Disponibilidade e responsabilidade",
        paragraphs: [
          "Trabalhamos para manter o Pulso estável e preciso, mas o app é oferecido conforme a disponibilidade e pode conter erros ou interrupções. Na medida permitida pela lei, a Movilabs não responde por decisões financeiras, perda de dados locais, serviços de terceiros ou danos indiretos decorrentes do uso do app.",
          "Nada nestes termos limita direitos irrenunciáveis do consumidor nem responsabilidades que não possam ser legalmente excluídas.",
        ],
      },
      {
        title: "Propriedade intelectual e encerramento",
        paragraphs: [
          "O Pulso, seu design, marca, textos e software pertencem à Movilabs ou aos seus licenciantes. O download concede uma licença pessoal, limitada, revogável, não exclusiva e intransferível para usar o app conforme estes termos.",
          "Você pode deixar de usar o Pulso a qualquer momento. Podemos restringir o acesso diante de uso ilegal ou abusivo. Excluir o app não cancela automaticamente uma assinatura; é necessário cancelá-la pela App Store ou pelo Google Play.",
        ],
      },
      {
        title: "Privacidade, alterações e lei aplicável",
        paragraphs: [
          "O tratamento de informações é descrito na Política de Privacidade do Pulso. Podemos atualizar estes termos quando o app, as lojas ou as obrigações aplicáveis mudarem; publicaremos aqui a versão vigente e a data.",
          "Estes termos são regidos pelas leis da República Argentina, sem afastar normas obrigatórias de proteção ao consumidor nem direitos aplicáveis no seu país de residência.",
        ],
      },
    ],
    contactTitle: "Contato",
    contact: "Para dúvidas sobre estes termos:",
  },
};

export async function generateMetadata({ params }: TermsPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const page = content[locale];
  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `/${locale}/pulso/terms`,
      languages: {
        es: "/es/pulso/terms",
        en: "/en/pulso/terms",
        pt: "/pt/pulso/terms",
      },
    },
  };
}

export default async function PulsoTermsPage({ params }: TermsPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const page = content[locale];
  const dictionary = getDictionary(locale);

  return (
    <div className="site-shell min-h-screen overflow-x-clip">
      <div aria-hidden className="site-grid" />
      <SiteHeader locale={locale} currentPath="/pulso/terms" labels={dictionary.nav} />
      <main className="site-container py-16 sm:py-20">
        <article className="frosted max-w-4xl rounded-3xl p-7 sm:p-10">
          <header className="space-y-4">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">Pulso · Movilabs</p>
            <h1 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              {page.title}
            </h1>
            <p className="text-sm text-muted">{page.updated}</p>
            <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              {page.intro}
            </p>
          </header>
          {page.sections.map((section) => (
            <section key={section.title} className="mt-10 space-y-4">
              <h2 className="font-display text-xl font-medium text-ink sm:text-2xl">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
          <section className="mt-10 space-y-4">
            <h2 className="font-display text-xl font-medium text-ink sm:text-2xl">
              {page.contactTitle}
            </h2>
            <p className="text-base leading-relaxed text-muted">{page.contact}</p>
            <a
              href="mailto:legal@movilabs.app"
              className="focus-ring inline-flex rounded-xl border border-line bg-soft px-4 py-2.5 text-base font-medium text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              legal@movilabs.app
            </a>
          </section>
        </article>
      </main>
      <SiteFooter locale={locale} privacyLabel={dictionary.footer.privacy} />
    </div>
  );
}
