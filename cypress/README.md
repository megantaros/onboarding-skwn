## Folder `cypress`

Folder ini merupakan root directory. Folder ini berisi folder-folder yang meliputi folder fixture, support, download, screenshots, videos, dan folder untuk testing e2e maupun untuk testing component. Pada konfigurasi awal di boilerplate ini, hanya terdapat empat folder yang dibuat, yaitu folder e2e, integration, fixture dan support.

```
├── cypress/
│   ├── e2e/
│   ├── integration/
│   ├── fixture/
│   │   └── example.js
│   ├── support/
│   │   ├── command.ts
│   │   ├── component-index.html
│   │   ├── component.ts
│   │   └── e2e.ts

```

### Folder `e2e`

Folder utama untuk menyimpan file-file end to end test. Pembuatan file e2e spec dapat dibuat langsung pada code editor dengan penamaan file yaitu `{nama spec}.cy.ts` atau dapat dibuat pada test runner browser, kemudian pilih **“Create new Empty spec**“.

### **Folder `integration`**

Folder utama untuk menyimpan file-file component testing terutama untuk integration test. Untuk melakukan testing antara satu file dengan file lain yang terdapat pada folder `src`. Jika ingin menulis component testing (unit testing atau integration test) dari suatu file dalam `src`, maka dapat membuat file testing pada directory yang sama dengan file yang ingin diuji.

Untuk membuat component testing dapat dapat dibuat langsung pada code editor dengan penamaan file yaitu `{nama spec}.cy.tsx` atau dapat dibuat pada test runner browser, kemudian pilih **“Create new Empty spec**“.

### Folder `fixture`

Folder ini digunakan untuk menyimpan objek data JSON atau data statis eksternal yang digunakan dalam pengujian. Data-data ini dapat digunakan di berbagai file pengujian.

### Folder `support`

Direktori ini digunakan untuk menyimpan berbagai file pendukung. Anda dapat menyertakan perintah khusus, variabel global, atau skrip lain yang ingin Anda muat sebelum menjalankan pengujian. Folder ini berisi beberapa file yaitu:

**`commands.ts`**: Tempat untuk menambahkan fungsi-fungsi umum dan perintah custom yang dapat dipanggil dalam berbagai pengujian, seperti fungsi login. Custom command dapat didefinisikan menggunakan `Cypress.Commands.add()` method.

`**e2e.ts**` : tempat yang baik untuk menempatkan konfigurasi global dari e2e testing dan kode yang dapat digunakan kembali. File ini berjalan sebelum dan sesudah semua file pengujian. Anda dapat menggunakan file ini untuk melakukan tugas seperti menyiapkan data pengujian, menginisialisasi aplikasi, atau membersihkan sumber daya.

`**component.ts**` : tempat yang baik untuk menempatkan konfigurasi global dari component testing dan kode yang dapat digunakan kembali.
