import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ReactComponent as Config } from 'src/assets/config.svg';
import { size } from 'src/styles/consts';
import { SetState } from 'src/types';

import { Button } from 'src/styles/ui/button.styled';

interface IConfigTextLabelButtonProps {
  onClick: SetState<boolean>;
}

export const ConfigTextLabelButton: FC<IConfigTextLabelButtonProps> = ({
  onClick,
}) => {
  const { t } = useTranslation();

  const handleClick = () => onClick(state => !state);

  return (
    <Button
      type="button"
      style={{
        gap: size.general.xxs,
        whiteSpace: 'nowrap',
        padding: size.general.xs,
      }}
      $height="2rem"
      $width="10rem"
      onClick={handleClick}
    >
      <Config width="16" height="16" />
      <span>{t('textLabelConfigButton')}</span>
    </Button>
  );
};
