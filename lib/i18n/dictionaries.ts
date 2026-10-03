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
    controllerTitle: string;
    controllerBody: string;
    dataCollectedTitle: string;
    dataCollectedBody: string;
    dataCollectedNote: string;
    thirdPartyTitle: string;
    thirdPartyBody: string;
    subscriptionsTitle: string;
    subscriptionsBody: string;
    institutionalWebsiteTitle: string;
    institutionalWebsiteBody: string;
    productPolicyTitle: string;
    productPolicyBody: string;
    productPolicyLink: string;
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
      lastUpdated: "Última actualización: 3 de octubre de 2026",
      intro:
        "Esta política describe cómo Movilabs gestiona la información de los usuarios en relación con sus aplicaciones móviles y este sitio web institucional.",
      controllerTitle: "Responsable",
      controllerBody:
        "Movilabs es la marca bajo la que opera Maximiliano Cuesta, desarrollador independiente radicado en Chubut, Argentina. Para consultas de privacidad o ejercicio de derechos, podés escribir a legal@movilabs.app.",
      dataCollectedTitle: "Datos recopilados",
      dataCollectedBody:
        "Nuestras aplicaciones están diseñadas con un enfoque local-first. En Pulso, los registros financieros permanecen en el dispositivo. Algunas funciones pueden compartir datos técnicos o resúmenes de uso opcionales, limitados y consentidos, según se explica en la política específica de cada producto.",
      dataCollectedNote:
        "Pulso no envía movimientos, saldos, cuentas, categorías ni notas a Movilabs. Su medición opcional de Ritmo excluye esos datos y requiere consentimiento expreso.",
      thirdPartyTitle: "Servicios de terceros",
      thirdPartyBody:
        "No utilizamos publicidad ni SDK de seguimiento de comportamiento entre aplicaciones o sitios. Algunas apps usan proveedores operativos —por ejemplo, tiendas, gestión de suscripciones, cotizaciones o infraestructura— identificados en sus políticas específicas.",
      subscriptionsTitle: "Suscripciones y pagos",
      subscriptionsBody:
        "Algunas funciones premium de nuestras apps requieren una suscripción. Los pagos son procesados íntegramente por Apple App Store o Google Play Store según la plataforma. Movilabs no recibe ni almacena datos de tarjetas de crédito ni información bancaria. Las condiciones de facturación y cancelación están regidas por los términos de la tienda correspondiente.",
      institutionalWebsiteTitle: "Sitio web institucional",
      institutionalWebsiteBody:
        "Este sitio web es únicamente informativo. No utilizamos cookies de seguimiento, formularios de registro ni sistemas propios de análisis de visitantes. El proveedor de alojamiento puede procesar registros técnicos de conexión, como dirección IP, fecha, hora, agente de usuario y datos de seguridad, para operar y proteger el servicio.",
      productPolicyTitle: "Política específica de Pulso",
      productPolicyBody:
        "Pulso cuenta con una política específica que describe los datos locales, la medición opcional de Ritmo, sus proveedores, conservación y controles de privacidad.",
      productPolicyLink: "Consultar la política de privacidad de Pulso",
      changesTitle: "Cambios en esta política",
      changesBody:
        "Actualizaremos esta política y las políticas específicas cuando cambien nuestras aplicaciones, proveedores o prácticas de datos. La fecha de última actualización estará visible al inicio de cada página.",
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
      lastUpdated: "Last updated: October 3, 2026",
      intro:
        "This policy describes how Movilabs handles user information in connection with its mobile applications and this institutional website.",
      controllerTitle: "Controller",
      controllerBody:
        "Movilabs is the brand under which Maximiliano Cuesta, an independent developer based in Chubut, Argentina, operates. For privacy questions or to exercise your rights, email legal@movilabs.app.",
      dataCollectedTitle: "Data collected",
      dataCollectedBody:
        "Our apps are designed with a local-first approach. In Pulso, financial records remain on the device. Some features may share technical data or limited, optional, consent-based usage summaries as explained in each product-specific policy.",
      dataCollectedNote:
        "Pulso does not send transactions, balances, accounts, categories, or notes to Movilabs. Its optional Rhythm measurement excludes that information and requires express consent.",
      thirdPartyTitle: "Third-party services",
      thirdPartyBody:
        "We do not use advertising or behavioral SDKs that track people across apps or websites. Some apps use operational providers—such as stores, subscription management, exchange-rate services, or infrastructure—identified in their product-specific policies.",
      subscriptionsTitle: "Subscriptions and payments",
      subscriptionsBody:
        "Some premium features in our apps require a subscription. Payments are processed entirely by the Apple App Store or Google Play Store depending on the platform. Movilabs does not receive or store credit card or banking information. Billing and cancellation terms are governed by the respective store's policies.",
      institutionalWebsiteTitle: "Institutional website",
      institutionalWebsiteBody:
        "This website is informational only. We do not use tracking cookies, registration forms, or our own visitor analytics systems. The hosting provider may process technical connection logs, such as IP address, date, time, user agent, and security data, to operate and protect the service.",
      productPolicyTitle: "Pulso-specific policy",
      productPolicyBody:
        "Pulso has a specific policy describing local data, optional Rhythm measurement, its providers, retention, and privacy controls.",
      productPolicyLink: "Read the Pulso Privacy Policy",
      changesTitle: "Changes to this policy",
      changesBody:
        "We will update this policy and product-specific policies when our apps, providers, or data practices change. The last updated date will appear at the top of each page.",
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
      lastUpdated: "Última atualização: 3 de outubro de 2026",
      intro:
        "Esta política descreve como a Movilabs gerencia as informações dos usuários em relação aos seus aplicativos móveis e a este site institucional.",
      controllerTitle: "Responsável",
      controllerBody:
        "Movilabs é a marca sob a qual opera Maximiliano Cuesta, desenvolvedor independente radicado em Chubut, Argentina. Para consultas de privacidade ou exercício de direitos, escreva para legal@movilabs.app.",
      dataCollectedTitle: "Dados coletados",
      dataCollectedBody:
        "Nossos aplicativos são projetados com uma abordagem local-first. No Pulso, os registros financeiros permanecem no dispositivo. Alguns recursos podem compartilhar dados técnicos ou resumos de uso opcionais, limitados e consentidos, conforme explicado na política específica de cada produto.",
      dataCollectedNote:
        "O Pulso não envia lançamentos, saldos, contas, categorias nem notas para a Movilabs. A medição opcional do Ritmo exclui essas informações e exige consentimento expresso.",
      thirdPartyTitle: "Serviços de terceiros",
      thirdPartyBody:
        "Não utilizamos publicidade nem SDKs de rastreamento comportamental entre aplicativos ou sites. Alguns apps usam provedores operacionais —como lojas, gestão de assinaturas, serviços de cotação ou infraestrutura— identificados em suas políticas específicas.",
      subscriptionsTitle: "Assinaturas e pagamentos",
      subscriptionsBody:
        "Alguns recursos premium dos nossos apps exigem uma assinatura. Os pagamentos são processados integralmente pela Apple App Store ou Google Play Store, conforme a plataforma. A Movilabs não recebe nem armazena dados de cartão de crédito ou informações bancárias. Os termos de cobrança e cancelamento são regidos pelas políticas da respectiva loja.",
      institutionalWebsiteTitle: "Site institucional",
      institutionalWebsiteBody:
        "Este site é apenas informativo. Não utilizamos cookies de rastreamento, formulários de registro nem sistemas próprios de análise de visitantes. O provedor de hospedagem pode processar registros técnicos de conexão, como endereço IP, data, hora, agente do usuário e dados de segurança, para operar e proteger o serviço.",
      productPolicyTitle: "Política específica do Pulso",
      productPolicyBody:
        "O Pulso possui uma política específica que descreve os dados locais, a medição opcional do Ritmo, seus provedores, retenção e controles de privacidade.",
      productPolicyLink: "Consultar a política de privacidade do Pulso",
      changesTitle: "Alterações nesta política",
      changesBody:
        "Atualizaremos esta política e as políticas específicas quando nossos aplicativos, provedores ou práticas de dados mudarem. A data da última atualização ficará visível no início de cada página.",
      contactTitle: "Contato",
      contactBody: "Para qualquer dúvida relacionada à privacidade, você pode nos escrever em:",
      contactEmail: "legal@movilabs.app",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
