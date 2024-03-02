import { FC, useRef } from 'react';

import { useElementHeight } from 'src/hooks/useElementHeight.hook';
import { useLoader } from 'src/hooks/useLoader.hook';
import { TaskCard } from 'src/modules';
import { useGetAllTasksQuery } from 'src/redux/api/task.api';
import { isTheSameDate } from 'src/utils/helpers';
import { useGetFilterValues } from 'src/redux/hooks';

import { useDragAndDrop } from 'src/hooks/useDragAndDrop.hook';
import { DayCover, FullHeightContainer } from 'src/styles/ui/container.styled';
import { TaskItem, TaskList } from './DateColumn.styled';

interface IDateColumnProps {
  date: Date;
}

export const DateColumn: FC<IDateColumnProps> = ({ date }) => {
  const columnRef = useRef<HTMLDivElement>(null);
  const columnHeight = useElementHeight(columnRef);
  const filterValues = useGetFilterValues();
  const { data: tasks, isLoading } = useGetAllTasksQuery(
    JSON.stringify(filterValues),
  );
  const handler = useDragAndDrop();

  const filteredTasks = tasks
    ? tasks?.filter(task => isTheSameDate(new Date(task.assignedDate), date))
    : [];
  const tasksAmount = filteredTasks.length;

  useLoader(isLoading);

  return (
    <FullHeightContainer
      ref={columnRef}
      $setHeight={`${columnHeight}px`}
      onDragOver={handler.handleDragToDayCellOver}
      onDragLeave={handler.handleDragToDayCellLeave}
      onDrop={e => handler.handleDragToDayCellDrop(e, date)}
    >
      <DayCover data-daycell />
      <TaskList>
        {tasksAmount > 0 &&
          filteredTasks
            .sort((a, b) => b.order - a.order)
            .map(task => (
              <TaskItem key={task.id}>
                <TaskCard
                  task={task}
                  onDragStart={e => handler.handleDragTaskStart(e, task)}
                  onDragOver={handler.handleDragTaskOver}
                  onDragLeave={handler.handleDragTaskLeave}
                  onDrop={e => handler.handleDrop(e, task)}
                />
              </TaskItem>
            ))}
      </TaskList>
    </FullHeightContainer>
  );
};
