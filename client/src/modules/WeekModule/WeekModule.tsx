import { FC } from 'react';

import { useMonth, useWeekDay } from 'src/hooks';

import { Holidays } from 'src/components';
import { DateColumn } from './components/DateCulomn';

import {
  DateLabel,
  WeekContainer,
  WeekDayContainer,
} from './WeekModule.styled';

export const WeekModule: FC = () => {
  const { formatFirstOrLastMonthDate } = useMonth();
  const { weekArray } = useWeekDay();

  return (
    <WeekContainer>
      {weekArray.map(date => (
        <WeekDayContainer key={date.getTime()}>
          <DateLabel>{formatFirstOrLastMonthDate(date)}</DateLabel>
          <Holidays date={date} />
          <DateColumn />
        </WeekDayContainer>
      ))}
    </WeekContainer>
  );
};
