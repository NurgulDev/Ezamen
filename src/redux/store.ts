import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/todo";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (defaultGetMiddleware) =>
    defaultGetMiddleware().concat(api.middleware),
});
