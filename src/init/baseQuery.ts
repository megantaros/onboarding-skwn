import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { getConfig } from './config';

const dummyBaseQuery = fetchBaseQuery({
  baseUrl: getConfig('apiUrl.dummy'),
  // prepareHeaders: prepareHeaders,
});

export { dummyBaseQuery };
