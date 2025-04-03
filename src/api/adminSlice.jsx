import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["accounts"],
  endpoints: (build) => ({
    getAccounts: build.query({
      query: () => `accounts`,
      providesTags: ["accounts"],
    }),
    // addAccount: build.mutation({
    //   query: (id,amount) => ({
    //     url: "accounts",
    //     method: "POST",
    //     body: {id,amount},
    //   }),
    //   invalidatesTags: ["accounts"],
    // }),
    // deleteAccount: build.mutation({
    //   query: (id) => ({
    //     url: `accounts/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["accounts"],
    // }),
  }),
});

export const { 
  useGetAccountsQuery, 
  useAddAccountMutation, 
  useDeleteAccountMutation 
} = adminApi;
