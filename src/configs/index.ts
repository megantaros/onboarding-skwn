const config = {
  appTitle: import.meta.env.VITE_APP_TITLE ?? 'App',
  appVersion: import.meta.env.VITE_APP_VERSION ?? '1.0.0',

  statePersistKey: import.meta.env.VITE_APP_STATE_PERSIST_KEY ?? 'AppData',

  apiUrl: {
    dummy: import.meta.env.VITE_APP_DUMMY_APIURL ?? '',
  },

  i18n: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
    lang: 'en',
    fallbackLang: 'en',
  },
};

export default config;
