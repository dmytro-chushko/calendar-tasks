import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { TextLabelInput } from './TextLabelConfig.styled';

export const TextLabelConfig: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <TextLabelInput
        type="text"
        placeholder={t('placeholder.textLabelInput')}
      />
    </>
  );
};
