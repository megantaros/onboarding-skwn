## Folder `init`

Folder `init` berisi fungsi-fungsi yang merupakan inisialisasi awal sistem. Inisialisasi pada folder init digunakan pada file-file yang berada di folder `viewport` atau pada file `App.tsx`

Pada boilerplate, telah terdapat beberapa inisialisasi yang dibuat dari awal yaitu i18n.ts, config,ts, baseQuery.ts dan folder store.

```
│   ├── **init/**
│   │   ├── **store/**
│   │   │   ├── store.middlewares.ts    -> create middleware from api
│   │   │   ├── store.rootReducer.ts    -> create reducer from api
│   │   │   └── store.ts                -> konfigurasi utama store
│   │   ├── baseQuery.ts
│   │   ├── config,ts
│   │   └── i18n.ts
```

**folder `store`** → untuk membuat redux store, terdapat 3 file yang berada pada folder ini, yaitu - -

- **`store.middlewares.ts`** digunakan untuk mendefinisikan middleware dengan mengimport seluruh api slice dari folder dataservices/api.
- **`store.rootRedecer.ts`** mendefinisikan root reducer dengan mengimport seluruh api slice dan slice pada folder dataservices
- **`store.ts`** untuk mengkonfigurasi redux store dengan mengimport middleware dan rootReducer serta modul lain yang dibutuhkan

**file `config.ts`** → berisi fungsi-fungsi untuk config, mendapatkan nilai konfigurasi berdasarkan key yang diberikan, mengakses variabel env, dll.

**file `baseQuery.ts`** → berisi konfigurasi untuk fetch base query dengan RTK Query, nantinya akan digunakan pada file yang berada pada dataservices/api/, lakukan penambahan konfigurasi yang diperlukan untuk kebutuhan konfigurasi base query.

**file `i18n.ts`** → merupakan file inisialisasi dari konfigurasi penggunaan modul i18n yang berasal dari folder locales.
