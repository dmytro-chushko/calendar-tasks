import { FC } from 'react';

import { OuterClickWrapper } from '..';
import { Container } from './DropDownContainer.styled';

interface IDropDownContainerProps {
  isShown: boolean;
  children: React.ReactNode;
  onOuterClick: () => void;
  openingDirection: 'up' | 'down';
  exception?: string;
}

export const DropDownContainer: FC<IDropDownContainerProps> = ({
  isShown,
  children,
  onOuterClick,
  openingDirection,
  exception,
}) => {
  return (
    <Container $isShown={isShown} $openingDirection={openingDirection}>
      {isShown && (
        <OuterClickWrapper onOuterClick={onOuterClick} exception={exception}>
          {children}
        </OuterClickWrapper>
      )}
    </Container>
  );
};
