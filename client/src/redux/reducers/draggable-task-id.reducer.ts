import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ReducerPath } from 'src/utils/consts';
import { RootState } from '../store';

const initialState: { id: string } = { id: '' };

export const draggableTaskId = createSlice({
  name: ReducerPath.DRAGGABLE_TASK_ID,
  initialState,
  reducers: {
    setDraggableTaskId(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },
  },
});

export const { setDraggableTaskId } = draggableTaskId.actions;
export const getDraggableTaskId = (state: RootState) => state.draggableTaskId;
