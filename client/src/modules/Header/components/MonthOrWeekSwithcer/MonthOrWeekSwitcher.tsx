import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import { ReactComponent as LeftChevron } from 'src/assets/chevron-left.svg';
import { ReactComponent as RightChevron } from 'src/assets/chevron-right.svg';
import {
  useGetCurrentDate,
  useSetCurrentDate,
  useSetCurrentWeek,
} from 'src/redux/hooks';

import { Button } from 'src/styles/ui/button.styled';
import { ButtonWrapper } from 'src/styles/ui/container.styled';
import { AppRoute } from 'src/utils/consts';

interface IMonthOrWeekSwitcherProps {}

export const MonthOrWeekSwitcher: FC<IMonthOrWeekSwitcherProps> = ({}) => {
  const { month, date } = useGetCurrentDate();
  const { pathname } = useLocation();
  const setCurrentDate = useSetCurrentDate();
  const setCurrentWeek = useSetCurrentWeek();

  const handler = {
    [AppRoute.MONTH]: {
      handleLeftClick: () => setCurrentDate(month - 1),
      handleRightClick: () => setCurrentDate(month + 1),
    },
    [AppRoute.WEEK]: {
      handleLeftClick: () => setCurrentWeek(date - 7),
      handleRightClick: () => setCurrentWeek(date + 7),
    },
  };

  return (
    <ButtonWrapper>
      <Button
        type="button"
        $height="2rem"
        $width="2rem"
        onClick={handler[pathname as AppRoute].handleLeftClick}
      >
        <LeftChevron />
      </Button>
      <Button
        type="button"
        $height="2rem"
        $width="2rem"
        onClick={handler[pathname as AppRoute].handleRightClick}
      >
        <RightChevron />
      </Button>
    </ButtonWrapper>
  );
};
