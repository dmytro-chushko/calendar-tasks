import { FC } from 'react';

import { ReactComponent as LeftChevron } from 'src/assets/chevron-left.svg';
import { ReactComponent as RightChevron } from 'src/assets/chevron-right.svg';
import { useGetCurrentDate, useSetCurrentDate } from 'src/redux/hooks';

import { Button } from 'src/styles/ui/button.styled';
import { ButtonWrapper } from 'src/styles/ui/container.styled';

interface IMonthOrWeekSwitcherProps {}

export const MonthOrWeekSwitcher: FC<IMonthOrWeekSwitcherProps> = ({}) => {
  const currentDate = useGetCurrentDate();
  const setCurrentDate = useSetCurrentDate();

  const handleLeftClick = () => setCurrentDate(currentDate.getMonth() - 1);

  const handleRightClick = () => setCurrentDate(currentDate.getMonth() + 1);

  return (
    <ButtonWrapper>
      <Button
        type="button"
        $height="2rem"
        $width="2rem"
        onClick={handleLeftClick}
      >
        <LeftChevron />
      </Button>
      <Button
        type="button"
        $height="2rem"
        $width="2rem"
        onClick={handleRightClick}
      >
        <RightChevron />
      </Button>
    </ButtonWrapper>
  );
};
