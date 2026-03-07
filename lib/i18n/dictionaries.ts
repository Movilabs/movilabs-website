import type { Locale } from "@/lib/i18n/config";

type WorkItem = {
  title: string;
  description: string;
};

export type Dictionary = {
  metadata: {
    homeTitle: string;
    homeDescription: string;
    privacyTitle: string;
    privacyDescription: string;
    ogLocale: string;
  };
  nav: {
    about: string;
    contact: string;
    privacy: string;
    language: string;
  };
  home: {
    badge: string;
    headlineTop: string;
    headlineBottom: string;
    subtitle: string;
    cta: string;
    howWeWork: string;
    workItems: WorkItem[];
  };
  about: {
    kicker: string;
    title: string;
    paragraphOne: string;
    paragraphTwo: string;
  };
  contact: {
    title: string;
    description: string;
  };
  footer: {
    privacy: string;
  };
  privacy: {
    legalKicker: string;
    title: string;
    lastUpdated: string;
    intro: string;
    dataCollectedTitle: string;
    dataCollectedBody: string;
    dataCollectedNote: string;
    thirdPartyTitle: string;
    thirdPartyBody: string;
    subscriptionsTitle: string;
    subscriptionsBody: string;
    institutionalWebsiteTitle: string;
    institutionalWebsiteBody: string;
    changesTitle: string;
    changesBody: string;
    contactTitle: string;
    contactBody: string;
    contactEmail: string;
  };
};

const dictionaries: Record<Locale, Dictionary> = {
  es: {
    metadata: {
      homeTitle: "Movilabs",
      homeDescription:
        "Movilabs es un estudio independiente dedicado al desarrollo de aplicaciones móviles simples, útiles y bien diseñadas.",
      privacyTitle: "Política de privacidad",
      privacyDescription: "Política de privacidad del sitio institucional de Movilabs.",
      ogLocale: "es_ES",
    },
    nav: {
      about: "Sobre",
      contact: "Contacto",
      privacy: "Privacidad",
      language: "Idioma",
    },
    home: {
      badge: "ESTUDIO INDEPENDIENTE",
      headlineTop: "Apps móviles simples,",
      headlineBottom: "útiles y bien diseñadas.",
      subtitle:
        "Movilabs desarrolla aplicaciones móviles enfocadas en simplicidad, utilidad y consistencia. Utilizamos tecnologías modernas e inteligencia artificial para crear productos claros y duraderos.",
      cta: "Contacto",
      howWeWork: "Cómo trabajamos",
      workItems: [
        {
          title: "Simplicidad funcional",
          description:
            "Aplicaciones enfocadas en resolver problemas reales sin ruido ni complejidad innecesaria.",
        },
        {
          title: "Diseño con criterio",
          description:
            "Jerarquía clara, interacción simple y una experiencia pensada para durar.",
        },
        {
          title: "Base tecnológica sólida",
          description:
            "Aplicaciones construidas con tecnologías actuales, optimizadas para rendimiento, mantenimiento y evolución futura.",
        },
      ],
    },
    about: {
      kicker: "Sobre Movilabs",
      title: "Un estudio enfocado en construir apps móviles útiles y bien diseñadas.",
      paragraphOne:
        "Movilabs es un estudio independiente dedicado al desarrollo de aplicaciones móviles simples, útiles y bien diseñadas.",
      paragraphTwo:
        "Combinamos diseño cuidado, ingeniería moderna e inteligencia artificial para crear productos claros, eficientes y pensados para durar.",
    },
    contact: {
      title: "Contacto",
      description: "Para consultas institucionales o de producto, podés escribirnos a:",
    },
    footer: {
      privacy: "Política de privacidad",
    },
    privacy: {
      legalKicker: "Legal",
      title: "Política de privacidad",
      lastUpdated: "Última actualización: 7 de marzo de 2026",
      intro:
        "Esta política describe cómo Movilabs gestiona la información de los usuarios en relación con sus aplicaciones móviles y este sitio web institucional.",
      dataCollectedTitle: "Datos recopilados",
      dataCollectedBody:
        "Nuestras aplicaciones, incluyendo Pulso, funcionan completamente en el dispositivo del usuario (local-first). No recopilamos, almacenamos ni transmitimos datos personales a servidores externos. Toda la información generada por el uso de la app permanece exclusivamente en tu dispositivo.",
      dataCollectedNote:
        "Movilabs no tiene acceso a ningún dato personal tuyo. Tu información no sale de tu dispositivo.",
      thirdPartyTitle: "Servicios de terceros",
      thirdPartyBody:
        "Nuestras aplicaciones no se conectan a servicios de análisis, publicidad ni plataformas de terceros. No utilizamos Firebase, Google Analytics, ni ningún SDK de rastreo de comportamiento.",
      subscriptionsTitle: "Suscripciones y pagos",
      subscriptionsBody:
        "Algunas funciones premium de nuestras apps requieren una suscripción. Los pagos son procesados íntegramente por Apple App Store o Google Play Store según la plataforma. Movilabs no recibe ni almacena datos de tarjetas de crédito ni información bancaria. Las condiciones de facturación y cancelación están regidas por los términos de la tienda correspondiente.",
      institutionalWebsiteTitle: "Sitio web institucional",
      institutionalWebsiteBody:
        "Este sitio web es únicamente informativo. No utilizamos cookies de seguimiento, formularios de registro ni sistemas de análisis de visitantes.",
      changesTitle: "Cambios en esta política",
      changesBody:
        "Si en el futuro incorporamos funciones que impliquen recopilación de datos, esta política será actualizada con anticipación y claridad. La fecha de última actualización siempre estará visible al inicio de esta página.",
      contactTitle: "Contacto",
      contactBody:
        "Para cualquier consulta relacionada con privacidad, podés escribirnos a:",
      contactEmail: "legal@movilabs.app",
    },
  },
  en: {
    metadata: {
      homeTitle: "Movilabs",
      homeDescription:
        "Movilabs is an independent studio dedicated to building mobile apps that are simple, useful, and well-designed.",
      privacyTitle: "Privacy Policy",
      privacyDescription: "Privacy Policy for the Movilabs institutional website.",
      ogLocale: "en_US",
    },
    nav: {
      about: "About",
      contact: "Contact",
      privacy: "Privacy",
      language: "Language",
    },
    home: {
      badge: "INDEPENDENT STUDIO",
      headlineTop: "Simple, useful,",
      headlineBottom: "and well-designed mobile apps.",
      subtitle:
        "Movilabs builds mobile apps focused on simplicity, usefulness, and consistency. We use modern technologies and artificial intelligence to create products that are clear and durable.",
      cta: "Contact",
      howWeWork: "How we work",
      workItems: [
        {
          title: "Functional simplicity",
          description:
            "Apps focused on solving real problems without noise or unnecessary complexity.",
        },
        {
          title: "Design with intent",
          description:
            "Clear hierarchy, simple interaction, and an experience designed to last.",
        },
        {
          title: "Solid technology foundation",
          description:
            "Apps built with modern technologies, optimized for performance, maintenance, and future evolution.",
        },
      ],
    },
    about: {
      kicker: "About Movilabs",
      title: "A studio focused on building useful, well-designed mobile apps.",
      paragraphOne:
        "Movilabs is an independent studio dedicated to developing mobile apps that are simple, useful, and well-designed.",
      paragraphTwo:
        "We combine thoughtful design, modern engineering, and artificial intelligence to create products that are clear, efficient, and built to last.",
    },
    contact: {
      title: "Contact",
      description: "For institutional or product inquiries, you can write to:",
    },
    footer: {
      privacy: "Privacy Policy",
    },
    privacy: {
      legalKicker: "Legal",
      title: "Privacy Policy",
      lastUpdated: "Last updated: March 7, 2026",
      intro:
        "This policy describes how Movilabs handles user information in connection with its mobile applications and this institutional website.",
      dataCollectedTitle: "Data collected",
      dataCollectedBody:
        "Our apps, including Pulso, operate entirely on your device (local-first). We do not collect, store, or transmit personal data to external servers. All information generated through app usage remains exclusively on your device.",
      dataCollectedNote:
        "Movilabs has no access to any of your personal data. Your information never leaves your device.",
      thirdPartyTitle: "Third-party services",
      thirdPartyBody:
        "Our apps do not connect to analytics, advertising, or third-party tracking platforms. We do not use Firebase, Google Analytics, or any behavioral tracking SDKs.",
      subscriptionsTitle: "Subscriptions and payments",
      subscriptionsBody:
        "Some premium features in our apps require a subscription. Payments are processed entirely by the Apple App Store or Google Play Store depending on the platform. Movilabs does not receive or store credit card or banking information. Billing and cancellation terms are governed by the respective store's policies.",
      institutionalWebsiteTitle: "Institutional website",
      institutionalWebsiteBody:
        "This website is informational only. We do not use tracking cookies, registration forms, or visitor analytics systems.",
      changesTitle: "Changes to this policy",
      changesBody:
        "If we introduce features that involve data collection in the future, this policy will be updated clearly and in advance. The last updated date will always be visible at the top of this page.",
      contactTitle: "Contact",
      contactBody: "For any privacy-related questions, you can reach us at:",
      contactEmail: "legal@movilabs.app",
    },
  },
  pt: {
    metadata: {
      homeTitle: "Movilabs",
      homeDescription:
        "Movilabs é um estúdio independente dedicado ao desenvolvimento de aplicativos móveis simples, úteis e bem projetados.",
      privacyTitle: "Política de privacidade",
      privacyDescription: "Política de privacidade do site institucional da Movilabs.",
      ogLocale: "pt_BR",
    },
    nav: {
      about: "Sobre",
      contact: "Contato",
      privacy: "Privacidade",
      language: "Idioma",
    },
    home: {
      badge: "ESTÚDIO INDEPENDENTE",
      headlineTop: "Apps móveis simples,",
      headlineBottom: "úteis e bem projetados.",
      subtitle:
        "A Movilabs desenvolve aplicativos móveis focados em simplicidade, utilidade e consistência. Utilizamos tecnologias modernas e inteligência artificial para criar produtos claros e duradouros.",
      cta: "Contato",
      howWeWork: "Como trabalhamos",
      workItems: [
        {
          title: "Simplicidade funcional",
          description:
            "Aplicativos focados em resolver problemas reais sem ruído nem complexidade desnecessária.",
        },
        {
          title: "Design com critério",
          description:
            "Hierarquia clara, interação simples e uma experiência pensada para durar.",
        },
        {
          title: "Base tecnológica sólida",
          description:
            "Aplicativos construídos com tecnologias atuais, otimizados para desempenho, manutenção e evolução futura.",
        },
      ],
    },
    about: {
      kicker: "Sobre a Movilabs",
      title: "Um estúdio focado em criar apps móveis úteis e bem projetados.",
      paragraphOne:
        "A Movilabs é um estúdio independente dedicado ao desenvolvimento de aplicativos móveis simples, úteis e bem projetados.",
      paragraphTwo:
        "Combinamos design cuidadoso, engenharia moderna e inteligência artificial para criar produtos claros, eficientes e pensados para durar.",
    },
    contact: {
      title: "Contato",
      description: "Para consultas institucionais ou de produto, você pode escrever para:",
    },
    footer: {
      privacy: "Política de privacidade",
    },
    privacy: {
      legalKicker: "Legal",
      title: "Política de privacidade",
      lastUpdated: "Última atualização: 7 de março de 2026",
      intro:
        "Esta política descreve como a Movilabs gerencia as informações dos usuários em relação aos seus aplicativos móveis e a este site institucional.",
      dataCollectedTitle: "Dados coletados",
      dataCollectedBody:
        "Nossos aplicativos, incluindo o Pulso, funcionam completamente no dispositivo do usuário (local-first). Não coletamos, armazenamos nem transmitimos dados pessoais para servidores externos. Todas as informações geradas pelo uso do app permanecem exclusivamente no seu dispositivo.",
      dataCollectedNote:
        "A Movilabs não tem acesso a nenhum dado pessoal seu. Suas informações não saem do seu dispositivo.",
      thirdPartyTitle: "Serviços de terceiros",
      thirdPartyBody:
        "Nossos aplicativos não se conectam a serviços de análise, publicidade ou plataformas de rastreamento de terceiros. Não utilizamos Firebase, Google Analytics ou qualquer SDK de rastreamento comportamental.",
      subscriptionsTitle: "Assinaturas e pagamentos",
      subscriptionsBody:
        "Alguns recursos premium dos nossos apps exigem uma assinatura. Os pagamentos são processados integralmente pela Apple App Store ou Google Play Store, conforme a plataforma. A Movilabs não recebe nem armazena dados de cartão de crédito ou informações bancárias. Os termos de cobrança e cancelamento são regidos pelas políticas da respectiva loja.",
      institutionalWebsiteTitle: "Site institucional",
      institutionalWebsiteBody:
        "Este site é apenas informativo. Não utilizamos cookies de rastreamento, formulários de registro nem sistemas de análise de visitantes.",
      changesTitle: "Alterações nesta política",
      changesBody:
        "Se no futuro adicionarmos recursos que envolvam coleta de dados, esta política será atualizada com antecedência e clareza. A data da última atualização sempre estará visível no início desta página.",
      contactTitle: "Contato",
      contactBody: "Para qualquer dúvida relacionada à privacidade, você pode nos escrever em:",
      contactEmail: "legal@movilabs.app",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
