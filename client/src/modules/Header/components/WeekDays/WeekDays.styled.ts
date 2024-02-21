import { StyledParagraph } from 'src/styles/ui/typography.styled';
import styled from 'styled-components';

export const WeekGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr;
`;

export const DayLabel = styled(StyledParagraph)`
  text-align: center;
  font-weight: ${({ theme }) => theme.font.weight.medium};

  color: ${({ theme }) => theme.font.color.disabled};
`;
