import { FC } from 'react';
import { useDayArray } from 'src/hooks';
import { useMonth } from 'src/hooks/useMonth';
import { DayElement, DayGrid } from './MonthModule.styled';

interface IMonthModuleProps {}

export const MonthModule: FC<IMonthModuleProps> = ({}) => {
  const date = new Date();
  const dayArray = useDayArray(date);
  const { monthName, isTheFirstOrLastDay, getShortMonthName } = useMonth();
  const currentMonth = date.getMonth();

  console.log(dayArray);

  return (
    <DayGrid>
      {dayArray.map(date => (
        <DayElement $isActive={date.getMonth() === currentMonth}>
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
