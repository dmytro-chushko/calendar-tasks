import { FC, useRef } from 'react';

import { useDayArray } from 'src/hooks';
import { useElementHeight } from 'src/hooks/useElementHeight.hook';
import { useGetCurrentDate } from 'src/redux/hooks';
import { MonthDay } from './components/MonthDay';

import { FullHeightContainer } from 'src/styles/ui/container.styled';
import { DayGrid } from './MonthModule.styled';

interface IMonthModuleProps {}

export const MonthModule: FC<IMonthModuleProps> = ({}) => {
  const { year, month } = useGetCurrentDate();
  const containerRef = useRef<HTMLDivElement>(null);
  const containerHeight = useElementHeight(containerRef);
  const dayArray = useDayArray(new Date(year, month));

  return (
    <FullHeightContainer ref={containerRef} $setHeight={`${containerHeight}px`}>
      <DayGrid>
        {dayArray.map(date => (
          <MonthDay key={date.getTime()} date={date} />
        ))}
      </DayGrid>
    </FullHeightContainer>
  );
};
