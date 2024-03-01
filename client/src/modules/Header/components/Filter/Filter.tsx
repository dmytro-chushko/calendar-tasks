import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { IFilterForm } from 'src/types';
import {
  ColorLabelSelect,
  initialColorOptions,
} from './components/ColorLabelSelect';
import { SearchInput } from './components/SearchInput';
import {
  TextLabelSelect,
  initialTextLabelOptions,
} from './components/TextLabelSelect';

import { useDebounce } from 'src/hooks';
import { Container } from './Filter.styled';

export const Filter: FC = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { isDirty },
  } = useForm<IFilterForm>({
    defaultValues: {
      taskName: '',
      colorLabel: [],
      textLabel: [],
    },
  });
  const changedTaskName = useDebounce(watch('taskName'), 1000);
  const changedColorLabel = useDebounce(
    String(watch('colorLabel').length),
    1000,
  );
  const changedTextLabel = useDebounce(String(watch('textLabel').length), 1000);

  const onSubmit = (data: IFilterForm) => {
    console.log(data);
  };

  useEffect(() => {
    if (isDirty) {
      handleSubmit(onSubmit)();
    }
  }, [changedTaskName, changedColorLabel, changedTextLabel]);

  return (
    <Container>
      <SearchInput control={control} name="taskName" />
      <ColorLabelSelect control={control} name="colorLabel" />
      <TextLabelSelect control={control} name="textLabel" />
    </Container>
  );
};
