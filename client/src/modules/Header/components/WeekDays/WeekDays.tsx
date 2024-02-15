import { FC } from 'react';

import { useWeekDay } from 'src/hooks';
import { DayLabel, WeekGrid } from './WeekDays.styled';

export const WeekDays: FC = () => {
  const days = useWeekDay();
  return (
    <WeekGrid>
      {days.map(day => (
        <div key={day}>
          <DayLabel>{day}</DayLabel>
        </div>
      ))}
    </WeekGrid>
  );
};
