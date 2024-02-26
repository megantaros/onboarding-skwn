## Folder `viewport`

Folder `viewport` digunakan sebagai inisialisasi elemen awal yang akan di export ke dalam file App.tsx. Pada folder viewport ini, dapat dilakukan inisialisasi yang berhubungan dengan elemen component dari App. Inisialisasi yang dimaksut dalam konteks presentational component.

Contohnya yaitu penerapan react-router, redux store, authentication, authorization, penerapan layout, dll.

Pada boilerplate sudah terdapat tiga jenis sub-folder viewport:

```
│   ├── viewport**/**
│   │   ├── HasReduxStore**/**
│   │   │   ├── HasReduxStore.ts
│   │   │   └── index.ts
│   │   ├── page
│   │   └── Scene
│   │   │   ├── RouteLogger.ts
│   │   │   ├── routing.item.ts
│   │   │   ├── Scene.tsx
│   │   │   └── index.ts
```

### Folder **`HasReduxStore`**

Mengatur implementasi Redux Store dalam aplikasi React.

```tsx
import { Provider as ReduxProvider } from 'react-redux';

import { type ReactNode } from 'react';
import store from 'init/store/store';

const HasReduxStore = ({ children }: { children: ReactNode }) => (
  <ReduxProvider store={store}>{children}</ReduxProvider>
);

export default HasReduxStore;
```

### Folder **`Scene`**

Mengatur implementasi dari react-router. Terdapat beberapa file yang terdapat pada folder ini,

- RouteLogger.tsx → berisi konfigurasi "logger" untuk route
- routing.item.ts → berisi list item router yang terdapat pada aplikasi react
- Scene.tsx → implementasi react-router-dom

  ```tsx
  import { Suspense } from 'react';
  import { BrowserRouter, Route, Routes } from 'react-router-dom';
  import RouteLogger from './RouteLogger';

  const Scene = () => (
    <Suspense>
      <BrowserRouter>
        <RouteLogger>//add router in here</RouteLogger>
      </BrowserRouter>
    </Suspense>
  );

  export default Scene;
  ```

### folder **`page`**

Folder page dalam viewport, berisi page-page kecil yang dibutuhkan dalam aplikasi react, contohnya sbb:

| Page | Fungsi |
| --- | --- |
| Page Not Found (404 Error Page) | Halaman ini ditampilkan ketika pengguna mencoba mengakses URL yang tidak ditemukan di website. |
| Page Loading (Loading Page) | Halaman ini biasanya muncul saat sebuah situs atau aplikasi sedang memuat konten atau menyiapkan halaman baru. |
| Page to Direct (Redirect Page) | Halaman ini digunakan untuk mengarahkan pengguna dari satu URL ke URL lainnya. Redirect bisa bersifat sementara (redirect 302) atau permanen (redirect 301). |
| Server Error Page (500 error) | Halaman ini ditampilkan ketika terjadi kesalahan pada server. |
| Page Forbidden (403 Error) | Halaman ini ditampilkan ketika pengguna tidak memiliki izin untuk mengakses halaman. Karena Access denied despite valid authentication. Focuses on authorization restrictions (permissions). |
| Page unauthorized (401) | Halaman ini ditampilkan ketika pengguna tidak memiliki izin untuk mengakses halaman. Karena Missing or invalid authentication credentials. Focuses on authentication issues (credentials). |
| Maintenance Page | Halaman ini digunakan ketika situs atau aplikasi sedang dalam proses pemeliharaan atau perbaikan, dan tidak dapat diakses oleh pengguna selama periode tersebut. |
