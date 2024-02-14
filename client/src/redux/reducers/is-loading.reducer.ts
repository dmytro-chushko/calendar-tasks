import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/store';
import { ReducerPath } from 'src/utils/consts';

const initialState: { isLoading: boolean } = {
  isLoading: false,
};

export const loaderStatus = createSlice({
  name: ReducerPath.IS_LOADING,
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = loaderStatus.actions;
export const getIsLoading = (state: RootState) => state.loaderStatus.isLoading;
