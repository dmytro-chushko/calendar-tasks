import { configureStore } from '@reduxjs/toolkit';

import { date } from './reducers/current-date.reducer';
import { loaderStatus } from './reducers/is-loading.reducer';
import { holidayApi } from './api/holiday.api';
import { errorHandler } from './middlewares/erorr-handler.middleware';
import { taskApi } from './api/task.api';

export const store = configureStore({
  reducer: {
    loaderStatus: loaderStatus.reducer,
    date: date.reducer,
    [holidayApi.reducerPath]: holidayApi.reducer,
    [taskApi.reducerPath]: taskApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(holidayApi.middleware)
      .concat(taskApi.middleware)
      .concat(errorHandler),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
