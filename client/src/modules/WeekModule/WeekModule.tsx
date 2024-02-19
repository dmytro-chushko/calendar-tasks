import { FC } from 'react';

import { ReactComponent as Plus } from 'src/assets/plus.svg';
import { Holidays } from 'src/components';
import { useLoader, useMonth, useWeekDay } from 'src/hooks';
import { useCreateTaskMutation } from 'src/redux/api/task.api';
import { formatYMDDate } from 'src/utils/helpers';
import { DateColumn } from './components/DateCulomn';

import {
  AddButton,
  DateLabel,
  LabelWrapper,
  WeekContainer,
  WeekDayContainer,
} from './WeekModule.styled';

export const WeekModule: FC = () => {
  const { formatFirstOrLastMonthDate } = useMonth();
  const { weekArray } = useWeekDay();
  const [createTask, { isLoading }] = useCreateTaskMutation();

  const handleAddButtonClick = async (date: Date) =>
    await createTask({ assignedDate: formatYMDDate(date) });

  useLoader(isLoading);

  return (
    <WeekContainer>
      {weekArray.map(date => (
        <WeekDayContainer key={date.getTime()}>
          <LabelWrapper>
            <DateLabel>{formatFirstOrLastMonthDate(date)}</DateLabel>
            <AddButton
              type="button"
              $width="1.2rem"
              $height="1.2rem"
              onClick={() => handleAddButtonClick(date)}
            >
              <Plus width="16" height="16" />
            </AddButton>
          </LabelWrapper>
          <Holidays date={date} />
          <DateColumn date={date} />
        </WeekDayContainer>
      ))}
    </WeekContainer>
  );
};
