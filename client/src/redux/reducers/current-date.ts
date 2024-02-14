import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/store';
import { ReducerPath } from 'src/utils/consts';

const initialState: { currentDate: Date } = {
  currentDate: new Date(),
};

export const date = createSlice({
  name: ReducerPath.CURRENT_MONTH,
  initialState,
  reducers: {
    setCurrentMonth(state, action: PayloadAction<number>) {
      const year = state.currentDate.getFullYear();

      state.currentDate = new Date(year, action.payload);
    },
  },
});

export const { setCurrentMonth } = date.actions;
export const getCurrentDate = (state: RootState) => state.date.currentDate;
