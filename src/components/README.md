## Folder `components`

Folder `components` digunakan untuk menempatkan komponen react yang bersifat general. Komponen-komponen general ini, selanjutnya akan diimpor pada folder page.

Penamaan folder dan file komponen ditulis dengan aturan Pascal case. Sedangkan untuk file-nya menggunakan aturan container-presentational component, dengan naming File componentnya menggunakan aturan PascalCase.

Contoh penggunaan :

```
├── components
│   └── Table/
│       ├── index.tsx        -> eksekusi otomatis
│       ├── Table.css        -> styling component
│       ├── Table.tsx        -> container component
│       ├── Table.type.ts    -> type variable/function in component
│       └── Table.view.tsx   -> presentational component
│       └── Table.cy.tsx     -> testing component
```
