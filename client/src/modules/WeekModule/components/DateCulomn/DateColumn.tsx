import { FC, useRef } from 'react';

import { useElementHeight } from 'src/hooks/useElementHeight.hook';
import { useLoader } from 'src/hooks/useLoader.hook';
import { useGetAllTasksQuery } from 'src/redux/api/task.api';
import { isTheSameDate } from 'src/utils/helpers';
import { TaskCard } from 'src/modules';

import { FullHeightContainer } from 'src/styles/ui/container.styled';
import { TaskItem, TaskList } from './DateColumn.styled';

interface IDateColumnProps {
  date: Date;
}

export const DateColumn: FC<IDateColumnProps> = ({ date }) => {
  const columnRef = useRef<HTMLDivElement>(null);
  const columnHeight = useElementHeight(columnRef);
  const { data: tasks, isLoading } = useGetAllTasksQuery();

  const filteredTasks = tasks
    ? tasks?.filter(task => isTheSameDate(new Date(task.assignedDate), date))
    : [];
  const tasksAmount = filteredTasks.length;

  useLoader(isLoading);

  return (
    <FullHeightContainer ref={columnRef} $setHeight={`${columnHeight}px`}>
      <TaskList>
        {tasksAmount > 0 &&
          filteredTasks.map(task => (
            <TaskItem key={task.id}>
              <TaskCard task={task} />
            </TaskItem>
          ))}
      </TaskList>
    </FullHeightContainer>
  );
};
