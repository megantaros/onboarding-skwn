## Folder `src`

Folder `src` (singkatan dari "source") adalah tempat utama untuk meletakkan kode sumber aplikasi React. Semua file JavaScript atau Typescript, komponen React, stylesheet, dan logika aplikasi ditempatkan di dalam folder ini. Isi dari folder `src` akan diproses oleh bundler dan dihasilkan menjadi bundle JavaScript yang akan dijalankan di browser.

Terdapat beberapa folder dan file di dalam `src` ini : folder `components`, `configs`, `dataservices`, `helpers`, `init,` `layout`, `pages`, `themes`, `types`, `viewport`, serta file `App.tsx`, `index.css` dan `main.tsx`

**File `App.tsx` :**

- merupakan komponen utama atau komponen induk dari aplikasi React.
- mendefinisikan tata letak dan struktur komponen yang akan ditampilkan pada halaman web.
- mengimpor dan merender function dan component yang berasal dari folder init dan viewport
- import library yang dibutuhkan web secara general
- pada boilerplate telah dilakukan import file yang berasal dari inisialisasi awal, yaitu i18n, redux-store, dan scene (router)

**File `index.css` :**

- file stylesheet yang bertanggung jawab untuk gaya atau tata letak global dalam aplikasi
- pada boilerplate hanya terdapat pengaturan style awal \*

**File `main.tsx` :**

- menginisialisasi hal-hal seperti konfigurasi awal
- pada boilerplate terdapat import file App.tsx dan penambahan React StrictMode
