import { useEffect } from 'react';

import { useAppDispatch } from 'src/redux/hooks';
import { setIsLoading } from 'src/redux/reducers/is-loading.reducer';

export const useLoader = (isLoading: boolean): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsLoading(isLoading));
  }, [dispatch, isLoading]);
};
