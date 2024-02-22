import { FC } from 'react';

import { Checkbox } from 'src/components';
import { useLoader } from 'src/hooks';
import {
  useAssignColorLabelMutation,
  useUnassignColorLabelMutation,
} from 'src/redux/api/task.api';

interface IColorLabelItemProps {
  taskId: string;
  labelId: string;
  color: string;
  assigned: boolean;
}

export const ColorLabelItem: FC<IColorLabelItemProps> = ({
  taskId,
  labelId,
  color,
  assigned,
}) => {
  const [assignLabel, { isLoading: isAssigning }] =
    useAssignColorLabelMutation();
  const [unassignLabel, { isLoading: isUnassigning }] =
    useUnassignColorLabelMutation();

  const handleChange = async () => {
    assigned
      ? await unassignLabel({ taskId, labelId })
      : await assignLabel({ taskId, labelId });
  };

  useLoader(isAssigning || isUnassigning);

  return (
    <li style={{ width: '100%' }}>
      <Checkbox
        checked={assigned}
        color={color}
        onCheckboxChange={handleChange}
      />
    </li>
  );
};
