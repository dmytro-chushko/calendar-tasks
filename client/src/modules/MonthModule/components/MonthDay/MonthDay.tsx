import { FC } from 'react';

import { useMonth } from 'src/hooks';
import { useGetCurrentDate } from 'src/redux/hooks';

import { Holidays } from 'src/components';
import { DayContainer, DayLabel } from './MonthDay.styled';

interface IMonthDayProps {
  date: Date;
}

export const MonthDay: FC<IMonthDayProps> = ({ date }) => {
  const { month } = useGetCurrentDate();
  const { formatFirstOrLastMonthDate } = useMonth();

  return (
    <DayContainer $isActive={date.getMonth() === month}>
      <DayLabel>{formatFirstOrLastMonthDate(date)}</DayLabel>
      <Holidays date={date} />
    </DayContainer>
  );
};
