import { FC } from 'react';

import { useDayArray, useMonth } from 'src/hooks';
import { useGetCurrentDate } from 'src/redux/hooks';
import { DayElement, DayGrid } from './MonthModule.styled';

interface IMonthModuleProps {}

export const MonthModule: FC<IMonthModuleProps> = ({}) => {
  const { year, month } = useGetCurrentDate();
  const dayArray = useDayArray(new Date(year, month));
  const { monthName, isTheFirstOrLastDay, getShortMonthName } = useMonth();

  return (
    <DayGrid>
      {dayArray.map(date => (
        <DayElement key={date.getTime()} $isActive={date.getMonth() === month}>
          {isTheFirstOrLastDay(date)
            ? `${getShortMonthName(
                monthName[date.getMonth()],
              )} ${date.getDate()}`
            : date.getDate()}
        </DayElement>
      ))}
    </DayGrid>
  );
};
