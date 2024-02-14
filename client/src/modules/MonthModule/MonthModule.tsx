import { FC } from 'react';

import { useDayArray, useMonth } from 'src/hooks';
import { useGetCurrentDate } from 'src/redux/hooks';
import { DayElement, DayGrid } from './MonthModule.styled';

interface IMonthModuleProps {}

export const MonthModule: FC<IMonthModuleProps> = ({}) => {
  const date = useGetCurrentDate();
  const dayArray = useDayArray(date);
  const { monthName, isTheFirstOrLastDay, getShortMonthName } = useMonth();
  const currentMonth = date.getMonth();

  console.log(dayArray);

  return (
    <DayGrid>
      {dayArray.map(date => (
        <DayElement
          key={date.getTime()}
          $isActive={date.getMonth() === currentMonth}
        >
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
