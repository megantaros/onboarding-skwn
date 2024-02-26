## Folder `dataservices`

Folder `dataservices` berisi file-file [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) sebagai alat untuk pengambilan dan penyimpanan data yang powerful. Penamaan file api dan slice ditulis dengan camelCase dengan struktur `{namaApi}Api.ts` dan `{namaSlice}Slice.ts`

Pada boilerplate terdapat dua sub-folder dataservices, yaitu folder api dan folder slice.

```tsx
├── src/
│   ├── dataservices/
│   │   ├── api/
│   │   │   ├── namaApi.ts
│   │   └── slice/
│   │       └── namaSlice.ts
```

### **Folder `api`**

Fungsi dari folder api adalah untuk membuat api slice yang berisi logika Redux yang merangkum proses pengambilan dan cache data. Membuat [api slice dengan Redux Toolkit](https://redux-toolkit.js.org/rtk-query/overview#create-an-api-slice) dilakukan dengan menggunakan `createApi` dan `fetchBaseQuery`.

```tsx
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const namaApi = createApi({
  reducerPath: 'i',
  baseQuery: ,
  endpoints: (builder) => ({
    //
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {  } = namaApi
```

### **Folder `slice`**

Fungsi **`slice`** pada Redux Toolkit digunakan untuk membuat potongan (slice) dari store Redux yang mencakup sekelompok reducer, actions, dan selektor yang berkaitan dengan satu bagian dari state aplikasi. Pendekatan ini membantu dalam mengorganisir kode dan mengelola state secara lebih modular, terutama ketika aplikasi menjadi kompleks. Membuat [slice dengan Redux Toolkit](https://redux-toolkit.js.org/api/createslice) dilakukan dengan menggunakan `createSlice`

```tsx
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const namaSlice = createSlice({
  name: '',
  initialState,
  reducers: {
    //buat reducer pada baris ini
  },
});

export const {} = namaSlice.actions;
export default namaSlice.reducer;
```
