import { createApi } from '@reduxjs/toolkit/query/react';

import { ICreateTextLabel, ITextLabel, IUpdateTextLabel } from 'src/types';
import { QueryUrl, ReducerPath } from 'src/utils/consts';
import { baseQuery } from '../base-query';

export const textLabelApi = createApi({
  reducerPath: ReducerPath.TEXT_LABEL_API,
  baseQuery: baseQuery(import.meta.env.VITE_BASE_URL, QueryUrl.TEXT_LABEL),
  tagTypes: ['Text-Label'],
  endpoints: builder => ({
    getAllTextLabels: builder.query<ITextLabel[], void>({
      query: () => ({ url: '' }),
      providesTags: ['Text-Label'],
    }),
    createTextLabel: builder.mutation<ITextLabel, ICreateTextLabel>({
      query: body => ({
        url: '',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Text-Label'],
    }),
    updateTextLabel: builder.mutation<ITextLabel, IUpdateTextLabel>({
      query: ({ id, ...body }) => ({
        url: id,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Text-Label'],
    }),
    removeTextLabel: builder.mutation<ITextLabel, string>({
      query: id => ({
        url: id,
        method: 'DELETE',
      }),
      invalidatesTags: ['Text-Label'],
    }),
  }),
});

export const {
  useGetAllTextLabelsQuery,
  useCreateTextLabelMutation,
  useUpdateTextLabelMutation,
  useRemoveTextLabelMutation,
} = textLabelApi;
