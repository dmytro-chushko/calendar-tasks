import { FC } from 'react';

import { ReactComponent as Config } from 'src/assets/config.svg';
import { SetState } from 'src/types';
import { size } from 'src/styles/consts';

import { Button } from 'src/styles/ui/button.styled';

interface IConfigTextLabelButtonProps {
  onClick: SetState<boolean>;
}

export const ConfigTextLabelButton: FC<IConfigTextLabelButtonProps> = ({
  onClick,
}) => {
  const handleClick = () => onClick(state => !state);

  return (
    <Button
      type="button"
      style={{ gap: size.general.xxs }}
      $height="2rem"
      $width="10rem"
      onClick={handleClick}
    >
      <Config width="16" height="16" />
      <span>Configure text label</span>
    </Button>
  );
};
