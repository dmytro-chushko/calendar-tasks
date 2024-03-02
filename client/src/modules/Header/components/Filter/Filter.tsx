import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { IFilterForm } from 'src/types';
import { ColorLabelSelect } from './components/ColorLabelSelect';
import { SearchInput } from './components/SearchInput';
import { TextLabelSelect } from './components/TextLabelSelect';

import { useDebounce } from 'src/hooks';
import { useSetFilterValues } from 'src/redux/hooks';
import { Container } from './Filter.styled';

export const Filter: FC = () => {
  const seFilterValues = useSetFilterValues();
  const { handleSubmit, control, watch } = useForm<IFilterForm>({
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

  const onSubmit = ({ taskName, colorLabel, textLabel }: IFilterForm) => {
    seFilterValues({
      taskName,
      colorLabelIds: colorLabel.map(({ value }) => value),
      textLabelIds: textLabel.map(({ value }) => value),
    });
  };

  useEffect(() => {
    handleSubmit(onSubmit)();
  }, [changedTaskName, changedColorLabel, changedTextLabel]);

  return (
    <Container>
      <SearchInput control={control} name="taskName" />
      <ColorLabelSelect control={control} name="colorLabel" />
      <TextLabelSelect control={control} name="textLabel" />
    </Container>
  );
};
