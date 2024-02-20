import { FC } from 'react';

import { ModalWindow } from 'src/components';
import { SetState } from 'src/types';

import { TextLabelContainer } from './TextLabelModule.styled';

interface ITextLabelModule {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: SetState<boolean>;
}

export const TextLabelModule: FC<ITextLabelModule> = ({
  children,
  isOpen,
  onClose,
}) => {
  const handleClose = () => onClose(!isOpen);

  return (
    <ModalWindow isOpen={isOpen} onClose={handleClose}>
      <TextLabelContainer>{children}</TextLabelContainer>
    </ModalWindow>
  );
};
