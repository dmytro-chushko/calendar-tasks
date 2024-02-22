import { FC } from 'react';
import { Checkbox } from 'src/components';

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
  const handleChange = () => console.log('change');

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
