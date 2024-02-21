import { FC, useState } from 'react';
import {
  CheckboxInput,
  CheckboxLabel,
  CheckboxTrigger,
} from 'src/modules/TextLabelModule/TextLabelAssign/TextLabelAssign.styled';

interface ICheckboxProps {
  checked: boolean;
  label?: string;
  onCheckboxChange: () => void;
}

export const Checkbox: FC<ICheckboxProps> = ({
  checked,
  label,
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
    </CheckboxLabel>
  );
};
