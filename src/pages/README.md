## Folder `pages`

Folder `pages` digunakan untuk menyimpan komponen-komponen yang mewakili halaman-halaman utama atau tampilan yang dapat ditampilkan kepada pengguna secara langsung. Setiap file atau subfolder di dalam folder `pages` dapat mewakili halaman tertentu dalam aplikasi.

Penamaan folder dan file dalam page ditulis dengan aturan PascalCase. Sedangkan untuk file-nya menggunakan aturan container-presentational component, dengan naming File page-nya menggunakan aturan PascalCase.

```
├── components
│   └── Todo/
│       ├── AddTodo         -> component pada page todo
│       ├── index.tsx       -> eksekusi otomatis
│       ├── Todo.css        -> styling page component
│       ├── Todo.tsx        -> container component
│       ├── Todo.type.ts    -> type variable/function in component
│       └── Todo.view.tsx   -> presentational component
│       └── Todo.cy.tsx     -> testing page component
```
