import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./jobs/jobs-API-slice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    getDefaultMiddleware().concat(apiSlice.middleware);
  }
});

setupListeners(store.dispatch);