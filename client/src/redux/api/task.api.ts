import { createApi } from '@reduxjs/toolkit/query/react';

import {
  IAssignLabel,
  ICreateTask,
  IReassignDate,
  IReassignOrder,
  ITask,
  IUpdateTask,
} from 'src/types';
import { QueryUrl, ReducerPath } from 'src/utils/consts';
import { baseQuery } from '../base-query';

export const taskApi = createApi({
  reducerPath: ReducerPath.TASK_API,
  baseQuery: baseQuery(import.meta.env.VITE_BASE_URL, QueryUrl.TASK),
  tagTypes: ['Task'],
  endpoints: builder => ({
    getAllTasks: builder.query<ITask[], string>({
      query: filterValues => ({
        url: `/?filter-values=${filterValues}`,
      }),
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
    assignTextLabel: builder.mutation<ITask, IAssignLabel>({
      query: body => ({
        url: QueryUrl.ASSIGN_TEXT_LABEL,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Task'],
    }),
    unassignTextLabel: builder.mutation<ITask, IAssignLabel>({
      query: body => ({
        url: QueryUrl.UNASSIGN_TEXT_LABEL,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Task'],
    }),
    assignColorLabel: builder.mutation<ITask, IAssignLabel>({
      query: body => ({
        url: QueryUrl.ASSIGN_COLOR_LABEL,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Task'],
    }),
    unassignColorLabel: builder.mutation<ITask, IAssignLabel>({
      query: body => ({
        url: QueryUrl.UNASSIGN_COLOR_LABEL,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Task'],
    }),
    reassignDate: builder.mutation<ITask, IReassignDate>({
      query: body => ({
        url: QueryUrl.REASSIGN_DATE,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Task'],
    }),
    reassignOrder: builder.mutation<ITask, IReassignOrder>({
      query: body => ({
        url: QueryUrl.REASSIGN_ORDER,
        method: 'POST',
        body,
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
  useAssignTextLabelMutation,
  useUnassignTextLabelMutation,
  useAssignColorLabelMutation,
  useUnassignColorLabelMutation,
  useReassignDateMutation,
  useReassignOrderMutation,
} = taskApi;
