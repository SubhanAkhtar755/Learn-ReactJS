import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// Define a service using a base URL and expected endpoints
export const productApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (build) => ({
      getAllproducts: build.query({
        query: () => `products`,
      }),
      getAllproductsPost: build.mutation({
        query: (data) => ({
          url: `products`,
          method: 'POST',
          body: data,
        }),
      }),
    }),
  })
  
  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const { useGetAllproductsQuery , useGetAllproductsPostMutation } = productApi