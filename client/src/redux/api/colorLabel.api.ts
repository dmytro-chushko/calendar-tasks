import { createApi } from '@reduxjs/toolkit/query/react';

import { IColorLabel } from 'src/types';
import { QueryUrl, ReducerPath } from 'src/utils/consts';
import { baseQuery } from '../base-query';

export const colorLabelApi = createApi({
  reducerPath: ReducerPath.COLOR_LABEL_API,
  baseQuery: baseQuery(import.meta.env.VITE_BASE_URL, QueryUrl.COLOR_LABEL),
  tagTypes: ['Color-Label'],
  endpoints: builder => ({
    getAllColorLabels: builder.query<IColorLabel[], void>({
      query: () => ({ url: '' }),
      providesTags: ['Color-Label'],
    }),
  }),
});

export const { useGetAllColorLabelsQuery } = colorLabelApi;
