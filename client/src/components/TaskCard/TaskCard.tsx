import { FC } from 'react';

import { ITask } from 'src/types';
import { TaskContainer, TaskDescription } from './TaskCard.styled';

interface ITaskCardProps {
  task: ITask;
}

export const TaskCard: FC<ITaskCardProps> = ({ task }) => {
  return (
    <TaskContainer>
      <TaskDescription>{task.description}</TaskDescription>
    </TaskContainer>
  );
};
