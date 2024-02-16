import styled from 'styled-components';

import { StyledParagaph } from 'src/styles/ui/typography.styled';

export const WeekContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr;
  gap: ${({ theme }) => theme.size.general.xxs};
`;

export const DateLabel = styled(StyledParagaph)`
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const WeekDayContainer = styled.div`
  background-color: ${({ theme }) => theme.color.active};
`;
