import { FC } from 'react';

import { OuterClickWrapper } from '..';
import { Container } from './DropDownContainer.styled';

interface IDropDownContainerProps {
  isShown: boolean;
  children: React.ReactNode;
  onOuterClick: () => void;
  exception?: string;
}

export const DropDownContainer: FC<IDropDownContainerProps> = ({
  isShown,
  children,
  onOuterClick,
  exception,
}) => {
  return (
    <Container $isShown={isShown}>
      {isShown && (
        <OuterClickWrapper onOuterClick={onOuterClick} exception={exception}>
          {children}
        </OuterClickWrapper>
      )}
    </Container>
  );
};
