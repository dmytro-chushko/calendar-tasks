import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/store';
import { ReducerPath } from 'src/utils/consts';

const initialState: { year: number; month: number; date: number } = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  date: new Date().getDate(),
};

export const date = createSlice({
  name: ReducerPath.CURRENT_MONTH,
  initialState,
  reducers: {
    setCurrentMonth(state, action: PayloadAction<number>) {
      const date = new Date(state.year, action.payload);
      state.month = date.getMonth();
      state.year = date.getFullYear();
      state.date = 1;
    },
    setCurrentWeek(state, action: PayloadAction<number>) {
      const date = new Date(state.year, state.month, action.payload);
      state.month = date.getMonth();
      state.year = date.getFullYear();
      state.date = date.getDate();
    },
  },
});

export const { setCurrentMonth, setCurrentWeek } = date.actions;
export const getCurrentDate = (state: RootState) => state.date;
