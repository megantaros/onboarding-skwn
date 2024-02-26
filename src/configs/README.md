## Folder `configs`

Folder `configs` berisi modul konfigurasi general yang digunakan dalam aplikasi web. Modul ini digunakan untuk menyimpan konfigurasi aplikasi, seperti konfigurasi URL, firebase, token, auth dll.

Pada boilerplate ini sudah terdapat config utama, yaitu pada file index.ts, file ini berisi beberapa konfigurasi pengambilan variable environment dan juga konfigurasi i18n, sbb:

```tsx
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
```

Pada folder `configs` juga dapat menambahkan beberapa file konfigurasi sistem website yang dibutuhkan.
