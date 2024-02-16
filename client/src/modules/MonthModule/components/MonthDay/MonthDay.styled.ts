import { StyledParagaph } from 'src/styles/ui/typography.styled';
import styled from 'styled-components';

interface IDayElemet {
  $isActive?: boolean;
}

export const DayContainer = styled.div<IDayElemet>`
  padding: ${({ theme }) => theme.size.general.xs};

  color: ${({ $isActive, theme }) =>
    $isActive ? theme.font.color.primary : theme.font.color.disabled};

  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.color.active : theme.color.secondary};
`;

export const DayLabel = styled(StyledParagaph)`
  font-weight: ${({ theme }) => theme.font.weight.medium};

  color: inherit;
`;
