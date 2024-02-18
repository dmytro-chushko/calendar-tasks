import { createApi } from '@reduxjs/toolkit/query/react';

import { ICreateTask, ITask, IUpdateTask } from 'src/types';
import { QueryUrl, ReducerPath } from 'src/utils/consts';
import { baseQuery } from '../base-query';

export const taskApi = createApi({
  reducerPath: ReducerPath.TASK_API,
  baseQuery: baseQuery(import.meta.env.VITE_BASE_URL, QueryUrl.TASK),
  tagTypes: ['Task'],
  endpoints: builder => ({
    getAllTasks: builder.query<ITask[], void>({
      query: () => ({ url: '' }),
      providesTags: ['Task'],
    }),
    createTask: builder.mutation<ITask, ICreateTask>({
      query: body => ({
        url: '',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Task'],
    }),
    updateTask: builder.mutation<ITask, IUpdateTask>({
      query: ({ id, ...body }) => ({
        url: id,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Task'],
    }),
    removeTask: builder.mutation<ITask, string>({
      query: id => ({
        url: id,
        method: 'DELETE',
      }),
      invalidatesTags: ['Task'],
    }),
  }),
});

export const {
  useGetAllTasksQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useRemoveTaskMutation,
} = taskApi;
