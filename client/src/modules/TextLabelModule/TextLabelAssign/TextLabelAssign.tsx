import { FC } from 'react';
import { ITask } from 'src/types';

import { useGetAllTextLabelsQuery } from 'src/redux/api/textLabel.api';

import { StyledList } from 'src/styles/ui/container.styled';
import { TextLabelAssignItem } from './components/TextLabelAssignItem';

interface ITextLabelAssignProps {
  task: ITask;
}

export const TextLabelAssign: FC<ITextLabelAssignProps> = ({ task }) => {
  const { data: textLabels } = useGetAllTextLabelsQuery();
  const checkAssigning = (text: string) =>
    task.textLabels.some(taskLabel => taskLabel === text);

  return (
    <StyledList>
      {textLabels &&
        textLabels.length > 0 &&
        textLabels.map(({ id, text }) => (
          <TextLabelAssignItem
            key={id}
            taskId={task.id}
            labelId={id}
            textLabel={text}
            assigned={checkAssigning(text)}
          />
        ))}
    </StyledList>
  );
};
