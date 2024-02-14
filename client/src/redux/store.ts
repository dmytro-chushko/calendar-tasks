import { configureStore } from '@reduxjs/toolkit';

import { date } from './reducers/current-date';
import { loaderStatus } from './reducers/is-loading.reducer';

export const store = configureStore({
  reducer: {
    loaderStatus: loaderStatus.reducer,
    date: date.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
