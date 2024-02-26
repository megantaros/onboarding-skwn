## Folder `public`

Folder `public` adalah tempat untuk meletakkan file-file statis yang akan diakses langsung oleh browser. Isi folder ini tidak diproses oleh bundler, dan file-file di dalamnya akan disalin ke root directory output build tanpa mengalami transformasi.

Beberapa penggunaan umum folder public Favicon dan folder statis. Favicon: Gambar favicon yang akan ditampilkan di tab browser. File Statis: File statis seperti gambar, font, atau file lain yang tidak memerlukan pemrosesan.

Pada boilerplate yang disediakan, terdapat 2 folder dalam public, yaitu folder images dan locales. Folder images untuk menyimpan gambar yang akan digunakan dalam website.

Folder Locales digunakan untuk menyimpan file terjemahan dengan structure sebagai berikut :

```
├── public/
│   ├── locales/
│   │   ├── en/
│   │   │   └── common.json
│   │   └── id/
│   │       └── common.json
```

Dalam folder locales, terdapat sub-folder bahasa yang di dalamnya terdapat file `common.json`, file `common.json` berisi data terjemahan dengan key merupakan kata kunci yang digunakan di dalam code untuk menerjemahkan kata, sedangkan value merupakan teks terjemahan yang akan ditampilkan dalam web.
