import { FC } from 'react';
import { Checkbox } from 'src/components/Checkbox';
import { Container } from './TextLabelAssignItem.styled';

interface ITextLabelAssignItemProps {
  id: string;
  assigned: boolean;
  textLabel: string;
}

export const TextLabelAssignItem: FC<ITextLabelAssignItemProps> = ({
  id,
  assigned,
  textLabel,
}) => {
  const handleChange = () => console.log('click');

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
