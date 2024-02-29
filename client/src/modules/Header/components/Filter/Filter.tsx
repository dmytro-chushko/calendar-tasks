import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { SearchInput } from './Filter.styled';

export const Filter: FC = () => {
  const { t } = useTranslation();

  return (
    <SearchInput type="search" placeholder={t('placeholder.searchInput')} />
  );
};
