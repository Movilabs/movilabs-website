/*
  Enlaces públicos de descarga de Pulso.

  Mientras ambos sean `null`, la página muestra "Próximamente". Cargá una URL
  únicamente después de abrirla sin sesión de desarrollador y comprobar que la
  app se puede descargar. Cada tienda se muestra por separado.
*/
export const pulsoStoreLinks: { appStore: string | null; googlePlay: string | null } = {
  appStore: null,
  googlePlay: null,
};

export const isPulsoDownloadable = Boolean(
  pulsoStoreLinks.appStore || pulsoStoreLinks.googlePlay,
);
