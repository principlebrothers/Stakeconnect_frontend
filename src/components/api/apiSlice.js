import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const stakeConnectApi = createApi({
  reducerPath: 'stakeHolders',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3000/' }),
  endpoints: (builder) => ({
    signInAdministrator: builder.mutation({
      query: (body) => ({
        url: 'administrators/sign_in',
        method: 'POST',
        body,
      }),
      transformResponse: (response, meta) => {
        const token = meta.response.headers.get('Authorization');
        return {token, ...response.status};
      },
    }),
    getAdministrators: builder.query({
      query: () => 'administrators',
    }),
    signOutAdministrator: builder.mutation({
      query: ({body, headers}) => ({
        url: 'administrators/sign_out',
        method: 'DELETE',
        body,
        headers,
      }),
    }),
  }),
});

export const {
  useSignInAdministratorMutation,
  useGetAdministratorsQuery,
  useSignOutAdministratorMutation
} = stakeConnectApi;
