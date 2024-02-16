import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query';

export const baseQuery = (
  apiHost: string,
  apiRoute?: string,
): BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  {},
  FetchBaseQueryMeta
> =>
  fetchBaseQuery({
    baseUrl: `${apiHost}/${apiRoute ? apiRoute : ''}`,
  });
