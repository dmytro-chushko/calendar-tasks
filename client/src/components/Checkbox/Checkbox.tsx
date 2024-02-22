import { FC, useState } from 'react';
import {
  CheckboxInput,
  CheckboxLabel,
  CheckboxTrigger,
  ColorLabel,
} from './Checkbox.styled';

interface ICheckboxProps {
  checked: boolean;
  label?: string;
  color?: string;
  onCheckboxChange: () => void;
}

export const Checkbox: FC<ICheckboxProps> = ({
  checked,
  label,
  color,
  onCheckboxChange,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked || false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <CheckboxLabel>
      <CheckboxInput
        type="checkbox"
        checked={isChecked}
        onClick={handleChange}
        onChange={onCheckboxChange}
      />
      <CheckboxTrigger />
      {label && label}
      {color && <ColorLabel $color={color} />}
    </CheckboxLabel>
  );
};
