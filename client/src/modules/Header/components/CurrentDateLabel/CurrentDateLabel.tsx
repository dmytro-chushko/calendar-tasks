import { FC } from 'react';
import { useGetCurrentDate } from 'src/redux/hooks';

import { useMonth } from 'src/hooks';

import { FlexBox } from 'src/styles/ui/container.styled';
import { DateLabel } from './CurrentDateLabel.styled';

export const CurrentDateLabel: FC = () => {
  const { year, month } = useGetCurrentDate();
  const { monthName } = useMonth();

  return (
    <FlexBox>
      <DateLabel>{year}</DateLabel>
      <DateLabel>{monthName[month]}</DateLabel>
    </FlexBox>
  );
};
