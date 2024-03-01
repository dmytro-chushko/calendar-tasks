import { useEffect, useState } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';

import { useGetAllColorLabelsQuery } from 'src/redux/api/colorLabel.api';

import { filterSelectStyles } from 'src/styles/ui/input.styled';
import { ColorLabel } from './ColorLabelSelect.styled';

interface IColorLabelSelectProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
}

export const initialColorOptions = {
  label: <ColorLabel $color="" />,
  value: '',
};

export const ColorLabelSelect = <T extends FieldValues>({
  control,
  name,
}: IColorLabelSelectProps<T>) => {
  const { t } = useTranslation();
  const [colorLabelOptions, setColorLabelOptions] = useState<
    (typeof initialColorOptions)[]
  >([initialColorOptions]);
  const { data: colorLabels, isSuccess } = useGetAllColorLabelsQuery();

  const { field } = useController({ control, name });

  useEffect(() => {
    isSuccess &&
      setColorLabelOptions(
        colorLabels.map(({ id, color }) => ({
          label: <ColorLabel $color={color} />,
          value: id,
        })),
      );
  }, [isSuccess]);

  return (
    <Select
      {...field}
      defaultValue={[]}
      placeholder={t('placeholder.colorSelect')}
      closeMenuOnSelect={false}
      isMulti
      isSearchable={false}
      options={colorLabelOptions}
      styles={filterSelectStyles}
    />
  );
};
