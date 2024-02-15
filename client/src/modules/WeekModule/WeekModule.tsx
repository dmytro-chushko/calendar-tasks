import { FC } from 'react';

import { useMonth } from 'src/hooks';
import { useGetCurrentDate } from 'src/redux/hooks';
import { WeekContainer } from './WeekModule.styled';

export const WeekModule: FC = () => {
  const { year, month, date } = useGetCurrentDate();
  const { monthName, isTheFirstOrLastDay, getShortMonthName } = useMonth();
  const weekArray: Date[] = [];
  // const monthStartsOn = new Date(year, month).getDay();
  let sundayDate = date - new Date(year, month, date).getDay();

  for (let i = 0; i < 7; i++) {
    // if (day > 0 && day < monthStartsOn && i < monthStartsOn) {
    //   weekArray[i] = new Date(year, month, i - monthStartsOn + 1);

    //   continue;
    // }

    weekArray[i] = new Date(year, month, sundayDate++);
  }

  return (
    <WeekContainer>
      {weekArray.map(date => (
        <div key={date.getTime()}>
          {isTheFirstOrLastDay(date)
            ? `${getShortMonthName(
                monthName[date.getMonth()],
              )} ${date.getDate()}`
            : date.getDate()}
        </div>
      ))}
    </WeekContainer>
  );
};
