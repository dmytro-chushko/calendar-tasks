import { FC } from 'react';

import { useGetAllColorLabelsQuery } from 'src/redux/api/colorLabel.api';
import { ITask } from 'src/types';

import { StyledList } from 'src/styles/ui/container.styled';
import { ColorLabelItem } from './components/ColorLabelItem';

interface IColorLabelModuleProps {
  task: ITask;
}

export const ColorLabelModule: FC<IColorLabelModuleProps> = ({ task }) => {
  const { data: colorLabels } = useGetAllColorLabelsQuery();

  const checkAssigning = (color: string) =>
    task.colorLabels.some(colorLabel => colorLabel.color === color);

  return (
    <StyledList as="ul">
      {colorLabels &&
        colorLabels.length > 0 &&
        colorLabels.map(({ id, color }) => (
          <ColorLabelItem
            key={id}
            taskId={task.id}
            labelId={id}
            color={color}
            assigned={checkAssigning(color)}
          />
        ))}
    </StyledList>
  );
};
