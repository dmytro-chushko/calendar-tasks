import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/store';
import { ReducerPath } from 'src/utils/consts';

const initialState: { currentDate: Date } = {
  currentDate: new Date(),
};

export const currentDate = createSlice({
  name: ReducerPath.CURRENT_MONTH,
  initialState,
  reducers: {
    setcurrentDate(state, action: PayloadAction<Date>) {
      state.currentDate = action.payload;
    },
  },
});

export const { setcurrentDate } = currentDate.actions;
export const getcurrentDate = (state: RootState) =>
  state.currentDate.currentDate;
