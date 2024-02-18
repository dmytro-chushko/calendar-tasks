import { FC } from 'react';

import { ReactComponent as Plus } from 'src/assets/plus.svg';
import { Holidays, TaskCard } from 'src/components';
import { useMonth } from 'src/hooks';
import { useLoader } from 'src/hooks/useLoader.hook';
import { useGetCurrentDate } from 'src/redux/hooks';

import {
  useCreateTaskMutation,
  useGetAllTasksQuery,
} from 'src/redux/api/task.api';
import { formatYMDDate, isTheSameDate } from 'src/utils/helpers';
import {
  AddButton,
  DayContainer,
  DayLabel,
  DayLabelWrapper,
  TasksAmountLabel,
} from './MonthDay.styled';

interface IMonthDayProps {
  date: Date;
}

export const MonthDay: FC<IMonthDayProps> = ({ date }) => {
  const { month } = useGetCurrentDate();
  const { formatFirstOrLastMonthDate } = useMonth();
  const { data: tasks, isLoading: isTasksFetching } = useGetAllTasksQuery();
  const [createTask, { isLoading: isTaskCreating }] = useCreateTaskMutation();

  const filteredTasks = tasks
    ? tasks?.filter(task => isTheSameDate(new Date(task.assignedDate), date))
    : [];
  const tasksAmount = filteredTasks.length;

  const handleAddButtonClick = async () =>
    await createTask({ assignedDate: formatYMDDate(date) });

  useLoader(isTasksFetching || isTaskCreating);

  return (
    <DayContainer $isActive={date.getMonth() === month}>
      <DayLabelWrapper>
        <DayLabel>{formatFirstOrLastMonthDate(date)}</DayLabel>
        <AddButton
          type="button"
          $width="1.2rem"
          $height="1.2rem"
          onClick={handleAddButtonClick}
        >
          <Plus width="16" height="16" />
        </AddButton>
      </DayLabelWrapper>
      <Holidays date={date} />
      {tasksAmount > 0 && (
        <>
          <TasksAmountLabel>{`${tasksAmount} ${tasksAmount > 1 ? 'tasks' : 'task'}`}</TasksAmountLabel>
          <TaskCard task={filteredTasks[0]} />
        </>
      )}
    </DayContainer>
  );
};
