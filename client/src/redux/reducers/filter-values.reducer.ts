import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/store';
import { IFilterValues } from 'src/types';
import { ReducerPath } from 'src/utils/consts';

const initialState: IFilterValues = {
  taskName: '',
  colorLabelIds: [],
  textLabelIds: [],
};

export const filterValues = createSlice({
  name: ReducerPath.FILTER_VALUES,
  initialState,
  reducers: {
    setFilterValues(state, action: PayloadAction<IFilterValues>) {
      state.taskName = action.payload.taskName;
      state.colorLabelIds = action.payload.colorLabelIds;
      state.textLabelIds = action.payload.textLabelIds;
    },
  },
});

export const { setFilterValues } = filterValues.actions;
export const getFilterValues = (state: RootState) => state.filterValues;
