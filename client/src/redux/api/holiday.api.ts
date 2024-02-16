import { createApi } from '@reduxjs/toolkit/query/react';

import { HolidayApi, ReducerPath } from 'src/utils/consts';
import { baseQuery } from '../base-query';
import { IHoliday } from 'src/types';

export const holidayApi = createApi({
  reducerPath: ReducerPath.HOLIDAY_API,
  baseQuery: baseQuery(HolidayApi.API_HOST),
  tagTypes: ['Holiday'],
  endpoints: builder => ({
    getAllYearHolidays: builder.query<
      IHoliday[],
      { year: number; countryCode: string }
    >({
      query: ({ year, countryCode }) => ({
        url: `${HolidayApi.YEAR_HOLIDAY}/${year}/${countryCode}`,
      }),
      providesTags: ['Holiday'],
    }),
  }),
});

export const { useGetAllYearHolidaysQuery } = holidayApi;
