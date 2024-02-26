## Root

## Frontend Boilerplate React

Boilerplate adalah kerangka kerja awal yang telah disiapkan dengan konfigurasi dasar dan struktur file yang umum digunakan untuk memulai pengembangan proyek. Web Boilerplate React ini memberikan fondasi untuk memulai pengembangan aplikasi web menggunakan React.js.

Boilerplate ini dibangun dengan :

- [Vite](https://vitejs.dev/)  4.2.0  & [React](https://react.dev/)  18.2.0
- [Typescript](https://www.typescriptlang.org/docs/handbook/intro.html) : memungkinkan penggunaan tipe data statis pada pengembangan aplikasi
- [Redux](https://redux.js.org/introduction/getting-started) 9.0.4  & [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started) 2.0.1 : menggunakan state management redux
- [React Router dom](https://reactrouter.com/en/main) 6.21.1 : terintegrasi dengan react-router untuk  menangani navigasi di aplikasi React
- [i18next](https://www.i18next.com/) 23.7.16 : terintegrasi dengan Internationalization memungkinkan pengembang menyiapkan aplikasi mereka untuk mendukung multibahasa dan mengelola teks yang dapat diterjemahkan dengan mudah.
- [Cypress](https://www.cypress.io/) : menggunakan cypress sebagai integration & e2e testing
- [ESLint](https://eslint.org/) 8.0.1 : Terintegrasi dengan ESLint untuk membantu menjaga kualitas kode dan memastikan bahwa kode mematuhi standar tertentu.
- [Prettier](https://prettier.io/) 3.1.1 : Menggunakan Prettier untuk memformat kode secara otomatis dan menjaga konsistensi dalam gaya penulisan kode.

---

### **Quick Start**

1. Pastikan anda memiliki Node.js dan yarn
2. Pastikan telah terinstall tiged secara global
   ```bash
   npm install -g tiged
   ```
3. Jalankan command di bawah ini untuk mendownload repository

   ```bash
   tiged https://gitlab.skwn.dev/rnd/web-boilerplate-react-js <PROJECT_NAME>
   ```

4. Pindah ke directory yang sesuai `cd <PROJECT_NAME>`
5. install dependency dan dev dependency

   ```bash
   yarn install
   ```

6. Mulai membangun aplikasi web react (ubah name app pada `package.json` dan `.env`)

---

### **Command Line Commands**

Running App

```bash
yarn start
```

Run linter

```bash
yarn lint
```

Run auto-fix linter

```bash
yarn lint -- --fix
```

Run cypress

```bash
yarn run cypress open
```

---

### **Folder Structure**

```
.
├── cypress            -> testing
├── public/
│   ├── locales            -> file terjemahan
│   └── images             -> file gambar
├── src/
│   ├── components         -> general component
│   ├── configs            -> config env, auth, i18n, dll.
│   ├── dataservices       -> api dan slice
│   ├── helpers            -> fungsi helper dan hooks
│   ├── init               -> inisialisasi awal (system)
│   │   ├── store            -> inisialisasi configuration redux store
│   │   ├── i18n.ts          -> inisialisasi i18n for internationalization
│   │   ├── baseQuery.ts     -> inisialisasi api query
│   │   └── config.ts        -> inisialisasi config
│   ├── layout             -> template web layout
│   ├── pages              -> main page user
│   ├── themes             -> customization theme
│   ├── types              -> general type
│   ├── viewport           -> inisialisasi awal (view)
│   │   ├── page            -> halaman kecil (page not found, loading, dll.)
│   │   ├── Scene           -> inisialisasi route
│   │   ├── HasReduxStore   -> inisialisasi viewport store
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .env                   -> react environtment
├── .eslintrc.cjs          -> pengaturan rule eslint
├── .prettierrc.cjs        -> pengaturan opsi prettier
├── cypress.config.ts      -> konfigurasi cypress
├── vite.config.ts
└── ...
```

---

### **Linter**

Pada boilerplate react ini, extension eslint yang diterapkan yaitu style guide standard-with-typescript, plugin react dan prettier recommended. Terdapat pengaturan tambahan yang diterapkan untuk menghindari error yang tidak diinginkan, yaitu pada **`.eslintrc.cjs` .** Jika menonaktifkan atau mengaktifkan error dari eslint, maka dapat mengatur konfigurasi pada rules eslint :

```jsx
module.exports = {
  rules: {
    // aktifkan & nonaktifkan error pada baris ini
    // '{nama-error}' : 'off',   -> untuk menonaktifkan error
    // '{nama-error}' : 'error'  -> untuk mengaktifkan error
    // '{nama-error}' : 'warn'   -> untuk memberi peringatan
  },
};
```

---

### V**ite `.env`**

File `.env` digunakan untuk menyimpan variabel environment atau konfigurasi yang diperlukan oleh aplikasi. Ini bisa mencakup URL API, kunci API, atau pengaturan environment lainnya.

```bash
VITE_APP_TITLE = ""
VITE_APP_VERSION = "v 1.0"
VITE_APP_STATE_PERSIST_KEY = ""
VITE_APP_DUMMY_APIURL = http://localhost:3000
```

Dalam proyek React, variabel yang dimulai dengan **`VITE_APP_{NAMA_ENV}`** secara otomatis akan diunggah ke objek

---

### **Cypress Configuration**

Konfigurasi cypress terdapat pada file `cypress.config.ts`, konfigurasi meliputi konfigurasi untuk e2e testing dan component testing. Anda dapat menambahkan beberapa konfigurasi yang dibutuhkan pada file ini, opsi konfigurasi cypress dapat dilihat pada [docs cypress (configuration)](https://docs.cypress.io/guides/references/configuration). Pada boilerplate ini, terdapat konfigurasi awal yang telah didefinisikan, meliputi spec pattern component testing dan base URL e2e testing :

```tsx
import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    specPattern: [
      'src/**/*.cy.{js,jsx,ts,tsx}',
      'cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    ],
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5173/',
  },
});
```

Dari pengaturan config tersebut, maka penempatan untuk file testing adalah :

**e2e testing** → `cypress/e2e`

**integration testing** → `cypress/integration`

**unit testing** → pada directory yang sama seperti file yang akan dilakukan testing (pada folder-folder yang ada di `src`)

---

### **Path Aliases**

Path aliases dalam proyek React digunakan untuk membuat rute (paths) yang lebih singkat dan mudah dibaca pada saat mengimpor file atau modul. Pada boilerplate ini sudah terdapat konfigurasi path aliases dari directory yang ada, jika ingin menambah directory maka dapat menambahkannya pada file `vite.config.ts` dan `tsconfig.json`:

```tsx
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      components: `${path.resolve(__dirname, './src/components/')}`,
      configs: `${path.resolve(__dirname, './src/configs/')}`,
      dataservices: `${path.resolve(__dirname, './src/dataservices/')}`,
      api: `${path.resolve(__dirname, './src/dataservices/api/')}`,
      slice: `${path.resolve(__dirname, './src/dataservices/slice/')}`,
      helpers: `${path.resolve(__dirname, './src/helpers/')}`,
      init: `${path.resolve(__dirname, './src/init/')}`,
      layouts: `${path.resolve(__dirname, './src/layouts/')}`,
      pages: `${path.resolve(__dirname, './src/pages/')}`,
      types: `${path.resolve(__dirname, './src/types/')}`,
      themes: `${path.resolve(__dirname, './src/themes/')}`,
      viewport: `${path.resolve(__dirname, './src/viewport/')}`,
      // tambahkan path lain pada baris ini
    },
  },
});
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["./src/*", "./dist/*", ""],
      "components/*": ["src/components/*"],
      "configs/*": ["src/configs/*"],
      "dataservices/*": ["src/dataservices/*"],
      "api/*": ["src/dataservices/api/*"],
      "slice/*": ["src/dataservices/slice/*"],
      "helpers/*": ["src/helpers/*"],
      "init/*": ["src/init/*"],
      "layouts/*": ["src/layouts/*"],
      "pages/*": ["src/pages/*"],
      "types/*": ["src/types/*"],
      "themes/*": ["src/themes/*"]
      // tambahkan path lain pada baris ini
    }
  }
}
```
