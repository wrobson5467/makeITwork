import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const jobs_API_key = '';

const initialState = {
  
}

export const apiSlice = createApi({
  reducerPath: 'jobsAPI',
  baseQuery: fetchBaseQuery({
    baseURL: '/api/jobs'
  }),
  endpoints: (builder) => ({
      fetchJobs: builder.query({
        query: () => '/getUserJobs'
      })
  })
})

export const {useFetchJobsQuery} = apiSlice;

