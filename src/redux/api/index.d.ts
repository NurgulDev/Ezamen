import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getTodo: build.query<ITodo.getTodoRes, ITodo.getTodoReq>({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ["todo"],
    }),
  }),
});

export const { useGetTodoQuery } = api;
