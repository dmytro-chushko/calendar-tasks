import { FC, useRef } from 'react';

import { useElementHeight } from 'src/hooks/useElementHeight.hook';
import { ColumnContainer } from './DateColumn.styled';
import { FullHeightContainer } from 'src/styles/ui/container.styled';

interface IDateColumnProps {}

export const DateColumn: FC<IDateColumnProps> = ({}) => {
  const columnRef = useRef<HTMLDivElement>(null);
  const columnHeight = useElementHeight(columnRef);

  return (
    <FullHeightContainer ref={columnRef} $setHeight={`${columnHeight}px`}>
      <ColumnContainer>DateCulomn</ColumnContainer>
    </FullHeightContainer>
  );
};
