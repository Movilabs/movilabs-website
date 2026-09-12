import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

type PageProps = { params: Promise<{ locale: string }> };

type Content = {
  title: string;
  description: string;
  updated: string;
  intro: string;
  sections: Array<{ title: string; paragraphs: string[] }>;
  providersTitle: string;
  providersIntro: string;
  providerLabels: Record<string, string>;
  contactTitle: string;
  contact: string;
};

const providerUrls = {
  RevenueCat: "https://www.revenuecat.com/privacy-policy",
  "App Store": "https://www.apple.com/legal/privacy/data/en/appstore/",
  "Google Play": "https://policies.google.com/privacy",
  DolarAPI: "https://dolarapi.com/docs/legal",
  "ExchangeRate-API": "https://www.exchangerate-api.com/terms",
  Supabase: "https://supabase.com/privacy",
} as const;

const content: Record<Locale, Content> = {
  es: {
    title: "Política de privacidad de Pulso",
    description: "Cómo Pulso trata tu información y los servicios externos necesarios para sus suscripciones y cotizaciones.",
    updated: "Última actualización: 12 de septiembre de 2026",
    intro: "Esta política explica cómo Movilabs trata la información relacionada con Pulso. Está pensada para que sepas qué queda en tu dispositivo, qué pueden tratar servicios externos y qué control tenés sobre tus datos.",
    sections: [
      { title: "Responsable y alcance", paragraphs: ["Movilabs es responsable de esta política y de Pulso. Para consultas, solicitudes sobre privacidad o para ejercer derechos, escribinos a legal@movilabs.app.", "Pulso es una aplicación de registro y consulta financiera personal. No requiere una cuenta de Pulso y no ofrece sincronización en la nube, respaldo, importación ni restauración de datos."] },
      { title: "Datos que permanecen en tu dispositivo", paragraphs: ["Tus movimientos, categorías, presupuestos, notas, preferencias y la información que generás al usar Pulso se almacenan localmente en tu dispositivo. Movilabs no recibe, almacena ni puede consultar esos datos.", "Si desinstalás la app o borrás sus datos desde el sistema operativo, esos datos locales pueden eliminarse de forma irreversible. Como Pulso no ofrece respaldo ni sincronización, Movilabs no puede recuperarlos."] },
      { title: "Exportación y archivos compartidos", paragraphs: ["Podés exportar información como archivo CSV. El archivo se crea en tu dispositivo; una vez que elegís compartirlo, el destinatario, la aplicación o el servicio de almacenamiento que selecciones tratará el archivo según sus propias prácticas.", "Movilabs no recibe una copia de los CSV. Sos responsable de conservarlos, protegerlos y eliminarlos de tus destinos de compartición. Podés eliminar una exportación desde el lugar donde la hayas guardado o compartido."] },
      { title: "Suscripciones y datos técnicos", paragraphs: ["Las compras y suscripciones se procesan a través de App Store o Google Play. Para verificar el acceso Premium, Pulso utiliza RevenueCat. Estos proveedores pueden tratar un identificador anónimo o de dispositivo, datos técnicos, recibos de compra, token de compra o estado de suscripción. Movilabs no recibe datos de tarjetas ni información bancaria.", "Los datos tratados por las tiendas y RevenueCat se usan para procesar, validar, restaurar cuando corresponda y administrar la suscripción. La conservación y eliminación de esos datos se rigen por las políticas de cada proveedor y por las opciones de tu cuenta de tienda."] },
      { title: "Cotizaciones y servicios de datos", paragraphs: ["Pulso puede consultar cotizaciones o tipos de cambio mediante DolarAPI y ExchangeRate-API. Esos servicios no reciben tus movimientos, presupuestos ni categorías: esa información no se envía con la consulta.", "Como ocurre con cualquier conexión a Internet, el proveedor de cotizaciones y la infraestructura que la atiende pueden recibir datos técnicos de la conexión, como dirección IP, fecha, hora, agente de usuario o registros de seguridad. Las cotizaciones pueden pasar por infraestructura de Supabase para su publicación y disponibilidad; esa infraestructura no contiene tus movimientos locales."] },
      { title: "Notificaciones locales", paragraphs: ["Pulso puede mostrar recordatorios locales creados y gestionados por el sistema operativo de tu dispositivo. No se utilizan notificaciones push ni se envían tus datos a un servidor para emitir esos recordatorios."] },
      { title: "Seguridad, transferencias y menores", paragraphs: ["Protegemos el diseño de Pulso mediante el principio de minimización: la información financiera personal permanece local. Ningún sistema es completamente infalible; mantené protegido tu dispositivo y revisá los permisos y la seguridad de las aplicaciones con las que compartís archivos.", "RevenueCat, Apple, Google, DolarAPI, ExchangeRate-API y Supabase pueden operar o alojar infraestructura fuera de tu país. Por eso, el tratamiento de los datos técnicos o de suscripción que hagan puede implicar transferencias internacionales bajo sus propias políticas.", "Pulso no está dirigido específicamente a menores. Si sos menor de edad, usá la app con la autorización y supervisión de tu madre, padre o tutor según corresponda."] },
      { title: "Tus derechos y cambios", paragraphs: ["Según tu jurisdicción, podés solicitar acceso, rectificación, eliminación, oposición, limitación o portabilidad respecto de los datos que Movilabs pudiera tratar. Dado que tus registros financieros no llegan a Movilabs, podés gestionarlos directamente en tu dispositivo. Para datos de suscripción o tienda, también podés ejercer opciones con el proveedor correspondiente.", "Podemos actualizar esta política si cambian Pulso, sus proveedores o las obligaciones aplicables. Publicaremos la versión vigente en esta misma URL e indicaremos su fecha de actualización."] },
    ],
    providersTitle: "Políticas de proveedores externos",
    providersIntro: "Consultá las prácticas de privacidad de los servicios que pueden intervenir:",
    providerLabels: { RevenueCat: "Política de privacidad de RevenueCat", "App Store": "Privacidad de App Store (Apple)", "Google Play": "Política de privacidad de Google Play", DolarAPI: "Aviso legal de DolarAPI", "ExchangeRate-API": "Términos de ExchangeRate-API", Supabase: "Política de privacidad de Supabase" },
    contactTitle: "Contacto",
    contact: "Para consultas sobre esta política o privacidad en Pulso, escribinos a:",
  },
  en: {
    title: "Pulso Privacy Policy", description: "How Pulso handles your information and the external services needed for subscriptions and exchange rates.", updated: "Last updated: September 12, 2026", intro: "This policy explains how Movilabs handles information related to Pulso. It is designed to make clear what stays on your device, what external services may process, and how you control your information.",
    sections: [
      { title: "Controller and scope", paragraphs: ["Movilabs is responsible for this policy and for Pulso. For privacy questions, requests, or to exercise your rights, email legal@movilabs.app.", "Pulso is a personal finance tracking and reference app. It does not require a Pulso account and does not provide cloud sync, backup, import, or data restoration."] },
      { title: "Data that stays on your device", paragraphs: ["Your transactions, categories, budgets, notes, preferences, and information you create in Pulso are stored locally on your device. Movilabs does not receive, store, or access this information.", "If you uninstall the app or clear its data through your operating system, local data may be permanently deleted. Since Pulso provides no backup or synchronization, Movilabs cannot restore it."] },
      { title: "CSV exports and shared files", paragraphs: ["You may export information as a CSV file. The file is created on your device; once you choose to share it, the recipient, app, or storage service you select handles it under its own practices.", "Movilabs does not receive a copy of CSV exports. You are responsible for retaining, protecting, and deleting them from the places where you save or share them."] },
      { title: "Subscriptions and technical data", paragraphs: ["Purchases and subscriptions are processed by the App Store or Google Play. Pulso uses RevenueCat to verify Premium access. These providers may process an anonymous or device identifier, technical data, purchase receipts, purchase token, or subscription status. Movilabs does not receive card or banking information.", "Store and RevenueCat data is used to process, validate, restore where applicable, and manage subscriptions. Retention and deletion are governed by each provider’s policies and your store-account choices."] },
      { title: "Exchange rates and data services", paragraphs: ["Pulso may request exchange rates through DolarAPI and ExchangeRate-API. Those services do not receive your transactions, budgets, or categories; that information is not sent with a request.", "As with any internet connection, rate providers and their infrastructure may receive connection data such as IP address, date, time, user agent, or security logs. Rates may pass through Supabase infrastructure for publication and availability; that infrastructure does not contain your local transactions."] },
      { title: "Local notifications", paragraphs: ["Pulso may show reminders created and managed locally by your device’s operating system. It does not use push notifications or send your data to a server to issue reminders."] },
      { title: "Security, transfers, and children", paragraphs: ["Pulso follows data minimization: personal financial information stays local. No system is completely fail-safe; protect your device and review the permissions and security of apps used to share files.", "RevenueCat, Apple, Google, DolarAPI, ExchangeRate-API, and Supabase may operate or host infrastructure outside your country. Their handling of technical or subscription data may therefore involve international transfers under their own policies.", "Pulso is not specifically directed to children. If you are under the age of majority, use the app with parent or guardian authorization and supervision where applicable."] },
      { title: "Your rights and policy changes", paragraphs: ["Depending on your jurisdiction, you may request access, correction, deletion, objection, restriction, or portability for data Movilabs may process. Because financial records do not reach Movilabs, manage them directly on your device. For store or subscription data, you can also exercise options with the relevant provider.", "We may update this policy when Pulso, its providers, or applicable obligations change. We will publish the current version at this URL and display its update date."] },
    ], providersTitle: "External providers’ policies", providersIntro: "See the privacy practices of services that may be involved:", providerLabels: { RevenueCat: "RevenueCat Privacy Policy", "App Store": "App Store Privacy (Apple)", "Google Play": "Google Privacy Policy", DolarAPI: "DolarAPI legal notice", "ExchangeRate-API": "ExchangeRate-API Terms", Supabase: "Supabase Privacy Policy" }, contactTitle: "Contact", contact: "For questions about this policy or privacy in Pulso, email:",
  },
  pt: {
    title: "Política de privacidade do Pulso", description: "Como o Pulso trata suas informações e os serviços externos necessários para assinaturas e cotações.", updated: "Última atualização: 12 de setembro de 2026", intro: "Esta política explica como a Movilabs trata as informações relacionadas ao Pulso. Ela esclarece o que fica no seu dispositivo, o que serviços externos podem tratar e como você controla suas informações.",
    sections: [
      { title: "Responsável e escopo", paragraphs: ["A Movilabs é responsável por esta política e pelo Pulso. Para dúvidas, solicitações de privacidade ou para exercer seus direitos, escreva para legal@movilabs.app.", "O Pulso é um aplicativo de registro e consulta financeira pessoal. Não exige uma conta Pulso e não oferece sincronização em nuvem, backup, importação ou restauração de dados."] },
      { title: "Dados que ficam no seu dispositivo", paragraphs: ["Seus lançamentos, categorias, orçamentos, notas, preferências e informações que você cria no Pulso são armazenados localmente no seu dispositivo. A Movilabs não recebe, armazena nem acessa essas informações.", "Se você desinstalar o aplicativo ou apagar seus dados pelo sistema operacional, os dados locais poderão ser excluídos permanentemente. Como o Pulso não oferece backup nem sincronização, a Movilabs não pode restaurá-los."] },
      { title: "Exportações CSV e arquivos compartilhados", paragraphs: ["Você pode exportar informações em um arquivo CSV. O arquivo é criado no seu dispositivo; ao compartilhá-lo, o destinatário, aplicativo ou serviço de armazenamento escolhido o tratará conforme suas próprias práticas.", "A Movilabs não recebe uma cópia das exportações CSV. Você é responsável por mantê-las, protegê-las e excluí-las dos locais onde as salvar ou compartilhar."] },
      { title: "Assinaturas e dados técnicos", paragraphs: ["Compras e assinaturas são processadas pela App Store ou Google Play. O Pulso usa o RevenueCat para verificar o acesso Premium. Esses provedores podem tratar um identificador anônimo ou do dispositivo, dados técnicos, recibos de compra, token de compra ou estado da assinatura. A Movilabs não recebe dados de cartão ou bancários.", "Os dados tratados pelas lojas e pelo RevenueCat servem para processar, validar, restaurar quando aplicável e administrar a assinatura. A retenção e exclusão seguem as políticas de cada provedor e as opções da sua conta de loja."] },
      { title: "Cotações e serviços de dados", paragraphs: ["O Pulso pode consultar cotações ou taxas de câmbio por meio do DolarAPI e ExchangeRate-API. Esses serviços não recebem seus lançamentos, orçamentos ou categorias: essas informações não são enviadas na consulta.", "Como em qualquer conexão à Internet, provedores de cotação e sua infraestrutura podem receber dados técnicos da conexão, como endereço IP, data, hora, agente do usuário ou registros de segurança. As cotações podem passar pela infraestrutura do Supabase para publicação e disponibilidade; essa infraestrutura não contém seus lançamentos locais."] },
      { title: "Notificações locais", paragraphs: ["O Pulso pode mostrar lembretes criados e gerenciados localmente pelo sistema operacional do seu dispositivo. Não usa notificações push nem envia seus dados a um servidor para emitir lembretes."] },
      { title: "Segurança, transferências e menores", paragraphs: ["O Pulso segue a minimização de dados: informações financeiras pessoais permanecem locais. Nenhum sistema é totalmente infalível; proteja seu dispositivo e revise as permissões e a segurança dos aplicativos usados para compartilhar arquivos.", "RevenueCat, Apple, Google, DolarAPI, ExchangeRate-API e Supabase podem operar ou hospedar infraestrutura fora do seu país. Por isso, o tratamento de dados técnicos ou de assinatura pode envolver transferências internacionais conforme suas próprias políticas.", "O Pulso não é direcionado especificamente a menores. Se você não atingiu a maioridade, use o app com autorização e supervisão de pai, mãe ou responsável, quando aplicável."] },
      { title: "Seus direitos e alterações", paragraphs: ["Conforme sua jurisdição, você pode solicitar acesso, correção, exclusão, oposição, limitação ou portabilidade dos dados que a Movilabs possa tratar. Como registros financeiros não chegam à Movilabs, gerencie-os diretamente no dispositivo. Para dados de loja ou assinatura, também é possível exercer opções com o provedor relevante.", "Podemos atualizar esta política quando o Pulso, seus provedores ou as obrigações aplicáveis mudarem. Publicaremos a versão atual neste URL e indicaremos a data de atualização."] },
    ], providersTitle: "Políticas dos provedores externos", providersIntro: "Consulte as práticas de privacidade dos serviços que podem estar envolvidos:", providerLabels: { RevenueCat: "Política de privacidade do RevenueCat", "App Store": "Privacidade da App Store (Apple)", "Google Play": "Política de privacidade do Google", DolarAPI: "Aviso legal do DolarAPI", "ExchangeRate-API": "Termos do ExchangeRate-API", Supabase: "Política de privacidade do Supabase" }, contactTitle: "Contato", contact: "Para dúvidas sobre esta política ou privacidade no Pulso, escreva para:",
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = content[locale];
  return {
    title: t.title,
    description: t.description,
    alternates: { canonical: `/${locale}/pulso/privacy`, languages: { es: "/es/pulso/privacy", en: "/en/pulso/privacy", pt: "/pt/pulso/privacy" } },
    openGraph: { type: "website", url: `https://www.movilabs.app/${locale}/pulso/privacy`, title: t.title, description: t.description },
  };
}

export default async function PulsoPrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale);
  const t = content[locale];

  return <div className="site-shell min-h-screen overflow-x-clip">
    <div aria-hidden className="site-grid" />
    <SiteHeader locale={locale} currentPath="/pulso/privacy" labels={dictionary.nav} />
    <main className="site-container py-16 sm:py-20"><article className="frosted max-w-4xl rounded-3xl p-7 sm:p-10">
      <header className="space-y-4"><p className="text-xs uppercase tracking-[0.18em] text-muted">Pulso · Legal</p><h1 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">{t.title}</h1><p className="text-sm text-muted">{t.updated}</p><p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">{t.intro}</p></header>
      {t.sections.map((section) => <section key={section.title} className="mt-10 space-y-4"><h2 className="font-display text-xl font-medium text-ink sm:text-2xl">{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph} className="text-base leading-relaxed text-muted">{paragraph}</p>)}</section>)}
      <section className="mt-10 space-y-4"><h2 className="font-display text-xl font-medium text-ink sm:text-2xl">{t.providersTitle}</h2><p className="text-base leading-relaxed text-muted">{t.providersIntro}</p><ul className="list-disc space-y-2 pl-5 text-base text-muted">{Object.entries(providerUrls).map(([name, url]) => <li key={name}><a className="focus-ring rounded text-ink underline decoration-line underline-offset-4 hover:text-accent" href={url} target="_blank" rel="noreferrer">{t.providerLabels[name]}</a></li>)}</ul></section>
      <section className="mt-10 space-y-4"><h2 className="font-display text-xl font-medium text-ink sm:text-2xl">{t.contactTitle}</h2><p className="text-base leading-relaxed text-muted">{t.contact}</p><a href="mailto:legal@movilabs.app" className="focus-ring inline-flex rounded-xl border border-line bg-soft px-4 py-2.5 text-base font-medium text-ink transition-colors duration-200 hover:border-accent hover:text-accent">legal@movilabs.app</a></section>
    </article></main>
    <SiteFooter locale={locale} privacyLabel={dictionary.footer.privacy} />
  </div>;
}
