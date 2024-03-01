import { FieldValues, Control, useController, Path } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { StyledSearchInput } from './SearchInput.styled';

interface ISearchInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
}

export const SearchInput = <T extends FieldValues>({
  control,
  name,
}: ISearchInputProps<T>) => {
  const { t } = useTranslation();
  const { field } = useController({ control, name });

  return (
    <StyledSearchInput
      {...field}
      type="search"
      placeholder={t('placeholder.searchInput')}
    />
  );
};
