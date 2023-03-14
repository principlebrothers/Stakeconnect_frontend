import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const stakeConnectApi = createApi({
  reducerPath: 'stakeHolders',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3000/' }),
  tagTypes: ['Administrator'],
  endpoints: (builder) => ({
    getAdministrators: builder.query({
      query: () => 'administrators',
      providesTags: ['Administrator'],
    }),
  }),
});

export const { useGetAdministratorsQuery } = stakeConnectApi;
