import { configureStore } from '@reduxjs/toolkit';

import { holidayApi } from './api/holiday.api';
import { taskApi } from './api/task.api';
import { textLabelApi } from './api/textLabel.api';
import { errorHandler } from './middlewares/erorr-handler.middleware';
import { date } from './reducers/current-date.reducer';
import { loaderStatus } from './reducers/is-loading.reducer';
import { colorLabelApi } from './api/colorLabel.api';

export const store = configureStore({
  reducer: {
    loaderStatus: loaderStatus.reducer,
    date: date.reducer,
    [holidayApi.reducerPath]: holidayApi.reducer,
    [taskApi.reducerPath]: taskApi.reducer,
    [textLabelApi.reducerPath]: textLabelApi.reducer,
    [colorLabelApi.reducerPath]: colorLabelApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(holidayApi.middleware)
      .concat(taskApi.middleware)
      .concat(textLabelApi.middleware)
      .concat(colorLabelApi.middleware)
      .concat(errorHandler),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
