import styled from 'styled-components';

import { Button } from 'src/styles/ui/button.styled';
import { FlexBox } from 'src/styles/ui/container.styled';
import { StyledParagaph } from 'src/styles/ui/typography.styled';

export const AddButton = styled(Button)`
  border-radius: 50%;
  opacity: 0;
`;
interface IDayElemet {
  $isActive?: boolean;
}

export const DayContainer = styled.div<IDayElemet>`
  padding: ${({ theme }) => theme.size.general.xs};

  color: ${({ $isActive, theme }) =>
    $isActive ? theme.font.color.primary : theme.font.color.disabled};

  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.color.active : theme.color.secondary};

  &:hover ${AddButton} {
    opacity: 1;
  }
`;

export const DayLabel = styled(StyledParagaph)`
  font-weight: ${({ theme }) => theme.font.weight.medium};

  color: inherit;
`;

export const DayLabelWrapper = styled(FlexBox)`
  justify-content: space-between;
`;

export const TasksAmountLabel = styled(StyledParagaph)`
  color: ${({ theme }) => theme.font.color.disabled};

  font-size: ${({ theme }) => theme.font.size.small};
`;
