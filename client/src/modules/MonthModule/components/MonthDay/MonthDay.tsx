import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ReactComponent as Plus } from 'src/assets/plus.svg';
import { Holidays } from 'src/components';
import { useMonth } from 'src/hooks';
import { useLoader } from 'src/hooks/useLoader.hook';
import { useGetCurrentDate } from 'src/redux/hooks';

import { useDragAndDrop } from 'src/hooks/useDragAndDrop.hook';
import { TaskCard } from 'src/modules';
import {
  useCreateTaskMutation,
  useGetAllTasksQuery,
} from 'src/redux/api/task.api';
import { DayCover } from 'src/styles/ui/container.styled';
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
  const { t } = useTranslation();
  const { month } = useGetCurrentDate();
  const { formatFirstOrLastMonthDate } = useMonth();
  const { data: tasks, isLoading: isTasksFetching } = useGetAllTasksQuery();
  const [createTask, { isLoading: isTaskCreating }] = useCreateTaskMutation();
  const {
    handleDragTaskStart,
    handleDragTaskLeave,
    handleDragTaskOver,
    handleDrop,
    handleDragToDayCellOver,
    handleDragToDayCellLeave,
    handleDragToDayCellDrop,
  } = useDragAndDrop();

  const filteredTasks = tasks
    ? tasks?.filter(task => isTheSameDate(new Date(task.assignedDate), date))
    : [];
  const tasksAmount = filteredTasks.length;

  const handleAddButtonClick = async () =>
    await createTask({ assignedDate: formatYMDDate(date) });

  useLoader(isTasksFetching || isTaskCreating);

  return (
    <DayContainer
      $isActive={date.getMonth() === month}
      onDragOver={handleDragToDayCellOver}
      onDragLeave={handleDragToDayCellLeave}
      onDrop={e => handleDragToDayCellDrop(e, date)}
    >
      <DayLabelWrapper>
        <DayLabel>{formatFirstOrLastMonthDate(date)}</DayLabel>
        <AddButton
          type="button"
          style={{ zIndex: '1' }}
          $width="1.2rem"
          $height="1.2rem"
          onClick={handleAddButtonClick}
        >
          <Plus width="16" height="16" />
        </AddButton>
      </DayLabelWrapper>
      <Holidays date={date} />
      <DayCover data-daycell />
      {tasksAmount > 0 && (
        <>
          <TasksAmountLabel>{`${tasksAmount} ${tasksAmount > 1 ? t('tasks') : t('task')}`}</TasksAmountLabel>
          <TaskCard
            task={filteredTasks[0]}
            onDragStart={e => handleDragTaskStart(e, filteredTasks[0])}
            onDragOver={handleDragTaskOver}
            onDragLeave={handleDragTaskLeave}
            onDrop={e => handleDrop(e, filteredTasks[0])}
          />
        </>
      )}
    </DayContainer>
  );
};
