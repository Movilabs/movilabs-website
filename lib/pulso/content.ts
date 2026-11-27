/*
  Textos de la página de Pulso. Cada afirmación de producto o privacidad debe
  estar respaldada por el repositorio de Pulso (PRODUCT_CONTRACT.md,
  FINANCIAL_MODEL.md, PREMIUM_CONTRACT.md y PRIVACY.md).
*/
import type { Locale } from "@/lib/i18n/config";

type Screenshot = { src: string; alt: string };

export type PulsoContent = {
  metaTitle: string;
  metaDescription: string;
  ogLocale: string;
  ogHeadline: string;
  logoAlt: string;
  kicker: string;
  headline: string;
  intro: string;
  highlights: string[];
  cta: {
    comingSoon: string;
    comingSoonNote: string;
    appStore: string;
    googlePlay: string;
  };
  hero: Screenshot;
  screenshotNote: string;
  featuresTitle: string;
  features: Array<{ title: string; body: string; screenshot: Screenshot }>;
  moreTitle: string;
  more: Array<{ title: string; body: string }>;
  premiumNote: string;
  privacyKicker: string;
  privacyTitle: string;
  privacyPoints: Array<{ title: string; body: string }>;
  disclaimer: string;
  closingTitle: string;
  linksLabel: string;
  links: { privacy: string; support: string; terms: string };
};

export const pulsoContent: Record<Locale, PulsoContent> = {
  es: {
    metaTitle: "Pulso: entendé en qué se va tu plata | Movilabs",
    metaDescription:
      "Pulso es una app de finanzas personales para anotar ingresos y gastos, ver en qué categorías gastás y seguir tu presupuesto. Próximamente.",
    ogLocale: "es_AR",
    ogHeadline: "Entendé en qué se va tu plata.",
    logoAlt: "Pulso",
    kicker: "Finanzas personales",
    headline: "Entendé en qué se va tu plata.",
    intro:
      "Anotá tus ingresos y gastos, miralos por categoría y llevá las cuentas claras desde el teléfono.",
    highlights: [
      "Tus movimientos se guardan en el teléfono",
      "No hace falta conectar el banco",
    ],
    cta: {
      comingSoon: "Próximamente",
      comingSoonNote: "Todavía no está disponible para descargar.",
      appStore: "Descargar en App Store",
      googlePlay: "Disponible en Google Play",
    },
    hero: {
      src: "/pulso/es/reports.jpg",
      alt: "Pantalla de reportes de Pulso: resumen de ingresos, gastos y resultado del mes, y gasto por categoría.",
    },
    screenshotNote: "Capturas de la app con datos de ejemplo.",
    featuresTitle: "Tus gastos, a la vista",
    features: [
      {
        title: "Anotá cada movimiento",
        body: "Registrá ingresos y gastos con categoría, cuenta, moneda y una nota. Después podés buscarlos, filtrarlos y corregirlos.",
        screenshot: {
          src: "/pulso/es/movements.jpg",
          alt: "Lista de movimientos de Pulso con buscador, filtros e ingresos y gastos ordenados por fecha.",
        },
      },
      {
        title: "Seguí tu presupuesto del mes",
        body: "Definí cuánto querés gastar y mirá cuánto llevás, cuánto te queda y cuánto es por día. Cuando hay suficientes gastos registrados, Pulso estima cómo podría cerrar el mes.",
        screenshot: {
          src: "/pulso/es/budget.jpg",
          alt: "Presupuesto mensual de Pulso con monto disponible, disponible por día y proyección a fin de mes.",
        },
      },
      {
        title: "Dólar e inflación como contexto",
        body: "Consultá el dólar oficial y el blue, con su fuente y hora de actualización, y los datos de inflación publicados para Argentina. Para actualizarlos necesitás conexión.",
        screenshot: {
          src: "/pulso/es/quotes.jpg",
          alt: "Pantalla de cotizaciones de Pulso con compra y venta del dólar oficial y blue.",
        },
      },
    ],
    moreTitle: "También podés",
    more: [
      {
        title: "Entender cada período",
        body: "Los reportes muestran ingresos, gastos, resultado y en qué categorías gastaste este mes.",
      },
      {
        title: "Ahorrar con una meta",
        body: "Creá un objetivo y registrá aportes y retiros para ver cuánto avanzaste.",
      },
      {
        title: "Recordar vencimientos",
        body: "Cargá fechas de pago y programá recordatorios en tu teléfono.",
      },
      {
        title: "Usar distintas monedas",
        body: "Registrá en pesos, dólares y otras monedas. Los totales convertidos se identifican como estimados.",
      },
    ],
    premiumNote:
      "Algunas funciones avanzadas, como los reportes de otros períodos o más cotizaciones, forman parte de Pulso Premium.",
    privacyKicker: "Privacidad",
    privacyTitle: "Tu registro queda con vos",
    privacyPoints: [
      {
        title: "Guardado en tu teléfono",
        body: "Tus movimientos, cuentas y presupuestos se guardan en el dispositivo. Podés registrarlos y consultarlos sin conexión.",
      },
      {
        title: "Sin conectar el banco",
        body: "Vos cargás lo que querés llevar. Pulso no se vincula con tus cuentas bancarias ni hace pagos, y no necesitás crear una cuenta de Pulso.",
      },
      {
        title: "Qué usa internet",
        body: "Las cotizaciones, la inflación y las compras de Premium usan servicios externos. La política de privacidad detalla esos casos y la medición de uso opcional.",
      },
      {
        title: "Sin respaldo en la nube",
        body: "Si borrás la app o sus datos, esa información no se puede recuperar desde Movilabs.",
      },
    ],
    disclaimer: "Pulso no es un banco ni brinda asesoramiento financiero.",
    closingTitle: "Pulso está en camino",
    linksLabel: "Información de Pulso",
    links: {
      privacy: "Privacidad de Pulso",
      support: "Soporte",
      terms: "Términos de uso",
    },
  },
  en: {
    metaTitle: "Pulso: understand where your money goes | Movilabs",
    metaDescription:
      "Pulso is a personal finance app to record income and expenses, see spending by category, and follow your budget. Coming soon.",
    ogLocale: "en_US",
    ogHeadline: "Understand where your money goes.",
    logoAlt: "Pulso",
    kicker: "Personal finance",
    headline: "Understand where your money goes.",
    intro:
      "Record your income and expenses, see them by category, and keep a clear picture on your phone.",
    highlights: [
      "Your transactions are stored on your phone",
      "No need to connect your bank",
    ],
    cta: {
      comingSoon: "Coming soon",
      comingSoonNote: "It is not available to download yet.",
      appStore: "Download on the App Store",
      googlePlay: "Get it on Google Play",
    },
    hero: {
      src: "/pulso/en/reports.jpg",
      alt: "Pulso reports screen: monthly income, expenses and result, and spending by category.",
    },
    screenshotNote: "App screenshots with sample data.",
    featuresTitle: "Your spending, in view",
    features: [
      {
        title: "Record every transaction",
        body: "Add income and expenses with category, account, currency, and a note. Then search, filter, and edit them.",
        screenshot: {
          src: "/pulso/en/movements.jpg",
          alt: "Pulso transaction list with search, filters, and income and expenses ordered by date.",
        },
      },
      {
        title: "Follow your monthly budget",
        body: "Set how much you want to spend and see what you have spent, what is left, and what that means per day. With enough recorded expenses, Pulso estimates how the month could end.",
        screenshot: {
          src: "/pulso/en/budget.jpg",
          alt: "Pulso monthly budget with available amount, daily allowance, and end-of-month projection.",
        },
      },
      {
        title: "Save toward a goal",
        body: "Create a goal and record contributions and withdrawals to see your progress.",
        screenshot: {
          src: "/pulso/en/savings.jpg",
          alt: "Pulso savings goal showing progress and contributions.",
        },
      },
    ],
    moreTitle: "You can also",
    more: [
      {
        title: "Understand each period",
        body: "Reports show income, expenses, the result, and the categories you spent on this month.",
      },
      {
        title: "Check rates and inflation",
        body: "See exchange rates and published inflation data for Argentina. Updating them requires a connection.",
      },
      {
        title: "Remember due dates",
        body: "Add payment dates and schedule reminders on your phone.",
      },
      {
        title: "Use different currencies",
        body: "Record pesos, dollars, and other currencies. Converted totals are labelled as estimates.",
      },
    ],
    premiumNote:
      "Some advanced features, such as reports for other periods or additional exchange rates, are part of Pulso Premium.",
    privacyKicker: "Privacy",
    privacyTitle: "Your records stay with you",
    privacyPoints: [
      {
        title: "Stored on your phone",
        body: "Your transactions, accounts, and budgets are stored on the device. You can record and review them offline.",
      },
      {
        title: "No bank connection",
        body: "You enter what you want to track. Pulso does not link to your bank accounts or make payments, and you do not need a Pulso account.",
      },
      {
        title: "What uses the internet",
        body: "Exchange rates, inflation data, and Premium purchases use external services. The privacy policy details these cases and the optional usage measurement.",
      },
      {
        title: "No cloud backup",
        body: "If you delete the app or its data, Movilabs cannot recover that information.",
      },
    ],
    disclaimer: "Pulso is not a bank and does not provide financial advice.",
    closingTitle: "Pulso is on its way",
    linksLabel: "Pulso information",
    links: {
      privacy: "Pulso privacy",
      support: "Support",
      terms: "Terms of use",
    },
  },
  pt: {
    metaTitle: "Pulso: entenda para onde vai o seu dinheiro | Movilabs",
    metaDescription:
      "O Pulso é um app de finanças pessoais para registrar receitas e despesas, ver os gastos por categoria e acompanhar o orçamento. Em breve.",
    ogLocale: "pt_BR",
    ogHeadline: "Entenda para onde vai o seu dinheiro.",
    logoAlt: "Pulso",
    kicker: "Finanças pessoais",
    headline: "Entenda para onde vai o seu dinheiro.",
    intro:
      "Registre receitas e despesas, veja tudo por categoria e mantenha as contas claras no celular.",
    highlights: [
      "Suas movimentações ficam salvas no celular",
      "Não é preciso conectar o banco",
    ],
    cta: {
      comingSoon: "Em breve",
      comingSoonNote: "Ainda não está disponível para baixar.",
      appStore: "Baixar na App Store",
      googlePlay: "Disponível no Google Play",
    },
    hero: {
      src: "/pulso/pt/reports.jpg",
      alt: "Tela de relatórios do Pulso: receitas, despesas e resultado do mês, e gastos por categoria.",
    },
    screenshotNote: "Capturas do app com dados de exemplo.",
    featuresTitle: "Seus gastos à vista",
    features: [
      {
        title: "Registre cada movimentação",
        body: "Adicione receitas e despesas com categoria, conta, moeda e uma nota. Depois você pode buscar, filtrar e corrigir.",
        screenshot: {
          src: "/pulso/pt/movements.jpg",
          alt: "Lista de movimentações do Pulso com busca, filtros e receitas e despesas por data.",
        },
      },
      {
        title: "Acompanhe o orçamento do mês",
        body: "Defina quanto quer gastar e veja quanto já gastou, quanto resta e quanto isso representa por dia. Com despesas suficientes registradas, o Pulso estima como o mês pode terminar.",
        screenshot: {
          src: "/pulso/pt/budget.jpg",
          alt: "Orçamento mensal do Pulso com valor disponível, valor por dia e projeção para o fim do mês.",
        },
      },
      {
        title: "Poupe com uma meta",
        body: "Crie um objetivo e registre aportes e retiradas para ver o quanto avançou.",
        screenshot: {
          src: "/pulso/pt/savings.jpg",
          alt: "Meta de poupança do Pulso com o progresso e os aportes.",
        },
      },
    ],
    moreTitle: "Você também pode",
    more: [
      {
        title: "Entender cada período",
        body: "Os relatórios mostram receitas, despesas, resultado e em quais categorias você gastou neste mês.",
      },
      {
        title: "Consultar câmbio e inflação",
        body: "Veja cotações e dados publicados de inflação da Argentina. Para atualizá-los é preciso conexão.",
      },
      {
        title: "Lembrar vencimentos",
        body: "Cadastre datas de pagamento e programe lembretes no celular.",
      },
      {
        title: "Usar diferentes moedas",
        body: "Registre em pesos, dólares e outras moedas. Os totais convertidos são identificados como estimativas.",
      },
    ],
    premiumNote:
      "Alguns recursos avançados, como relatórios de outros períodos ou mais cotações, fazem parte do Pulso Premium.",
    privacyKicker: "Privacidade",
    privacyTitle: "Seus registros ficam com você",
    privacyPoints: [
      {
        title: "Salvo no seu celular",
        body: "Suas movimentações, contas e orçamentos ficam salvos no dispositivo. Você pode registrar e consultar sem conexão.",
      },
      {
        title: "Sem conectar o banco",
        body: "Você insere o que quiser acompanhar. O Pulso não se vincula às suas contas bancárias nem faz pagamentos, e você não precisa criar uma conta Pulso.",
      },
      {
        title: "O que usa a internet",
        body: "Cotações, inflação e compras do Premium usam serviços externos. A política de privacidade detalha esses casos e a medição de uso opcional.",
      },
      {
        title: "Sem backup na nuvem",
        body: "Se você excluir o app ou os dados dele, a Movilabs não poderá recuperar essas informações.",
      },
    ],
    disclaimer: "O Pulso não é um banco nem oferece aconselhamento financeiro.",
    closingTitle: "O Pulso está a caminho",
    linksLabel: "Informações do Pulso",
    links: {
      privacy: "Privacidade do Pulso",
      support: "Suporte",
      terms: "Termos de uso",
    },
  },
};
