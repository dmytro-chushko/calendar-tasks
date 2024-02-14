import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { RootState, AppDispatch } from './store';
import { getCurrentDate, setCurrentMonth } from './reducers/current-date';

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useGetCurrentDate = () => useAppSelector(getCurrentDate);

export const useSetCurrentDate = () => {
  const dispatch = useAppDispatch();

  return (month: number) => dispatch(setCurrentMonth(month));
};
