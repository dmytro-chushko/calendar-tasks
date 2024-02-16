import { FC } from 'react';

import { useWeekDay } from 'src/hooks';
import { DayLabel, WeekGrid } from './WeekDays.styled';

export const WeekDays: FC = () => {
  const { dayName } = useWeekDay();
  return (
    <WeekGrid>
      {dayName.map(day => (
        <div key={day}>
          <DayLabel>{day}</DayLabel>
        </div>
      ))}
    </WeekGrid>
  );
};
