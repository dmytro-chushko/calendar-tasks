import { useEffect, useState } from 'react';
import { FieldValues, Control, useController, Path } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';

import { useGetAllTextLabelsQuery } from 'src/redux/api/textLabel.api';

import { filterSelectStyles } from 'src/styles/ui/input.styled';

interface ITextLabelSelectProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
}

export const initialTextLabelOptions = {
  label: '',
  value: '',
};

export const TextLabelSelect = <T extends FieldValues>({
  control,
  name,
}: ITextLabelSelectProps<T>) => {
  const { t } = useTranslation();
  const [textLabelOptions, setTextLabelOptions] = useState<
    (typeof initialTextLabelOptions)[]
  >([initialTextLabelOptions]);
  const { data: textLabels, isSuccess } = useGetAllTextLabelsQuery();

  const { field } = useController({ control, name });

  useEffect(() => {
    isSuccess &&
      setTextLabelOptions(
        textLabels.map(({ id, text }) => ({
          label: text,
          value: id,
        })),
      );
  }, [isSuccess]);

  return (
    <Select
      {...field}
      defaultValue={[]}
      placeholder={t('placeholder.textSelect')}
      closeMenuOnSelect={false}
      isMulti
      options={textLabelOptions}
      styles={filterSelectStyles}
    />
  );
};
