import styled from 'styled-components';

export const DayGrid = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: ${({ theme }) => theme.size.general.xxs};
`;
