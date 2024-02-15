import styled from 'styled-components';

export const WeekContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr;
  gap: ${({ theme }) => theme.size.general.xxs};
`;
