import { FC } from 'react';
import { Checkbox } from 'src/components/Checkbox';
import {
  useAssignTextLabelMutation,
  useUnassignTextLabelMutation,
} from 'src/redux/api/task.api';
import { Container } from './TextLabelAssignItem.styled';
import { useLoader } from 'src/hooks';

interface ITextLabelAssignItemProps {
  taskId: string;
  labelId: string;
  assigned: boolean;
  textLabel: string;
}

export const TextLabelAssignItem: FC<ITextLabelAssignItemProps> = ({
  taskId,
  labelId,
  assigned,
  textLabel,
}) => {
  const [assignLabel, { isLoading: isAssigning }] =
    useAssignTextLabelMutation();
  const [unassignLabel, { isLoading: isUnassigning }] =
    useUnassignTextLabelMutation();

  const handleChange = async () => {
    assigned
      ? await unassignLabel({ taskId, labelId })
      : await assignLabel({ taskId, labelId });
  };

  useLoader(isAssigning || isUnassigning);

  return (
    <Container as="li">
      <Checkbox
        checked={assigned}
        label={textLabel}
        onCheckboxChange={handleChange}
      />
    </Container>
  );
};
