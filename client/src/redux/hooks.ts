import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import {
  getCurrentDate,
  setCurrentMonth,
  setCurrentWeek,
} from './reducers/current-date.reducer';
import {
  getDraggableTaskId,
  setDraggableTaskId,
} from './reducers/draggable-task-id.reducer';
import type { AppDispatch, RootState } from './store';
import {
  getFilterValues,
  setFilterValues,
} from './reducers/filter-values.reducer';
import { IFilterValues } from 'src/types';

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useGetCurrentDate = () => useAppSelector(getCurrentDate);

export const useSetCurrentDate = () => {
  const dispatch = useAppDispatch();

  return (month: number) => dispatch(setCurrentMonth(month));
};

export const useSetCurrentWeek = () => {
  const dispatch = useAppDispatch();

  return (date: number) => dispatch(setCurrentWeek(date));
};

export const useGetDraggableTaskId = () => useAppSelector(getDraggableTaskId);

export const useSetDraggableTaskId = () => {
  const dispatch = useAppDispatch();

  return (id: string) => dispatch(setDraggableTaskId(id));
};

export const useGetFilterValues = () => useAppSelector(getFilterValues);

export const useSetFilterValues = () => {
  const dispatch = useAppDispatch();

  return (values: IFilterValues) => dispatch(setFilterValues(values));
};
