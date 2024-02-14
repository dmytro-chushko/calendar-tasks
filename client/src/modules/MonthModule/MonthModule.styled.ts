import styled from 'styled-components';

export const DayGrid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: ${({ theme }) => theme.size.general.xxs};
`;

interface IDayElemet {
  $isActive?: boolean;
}

export const DayElement = styled.div<IDayElemet>`
  padding: ${({ theme }) => theme.size.general.xs};

  font-weight: ${({ theme }) => theme.font.weight.medium};

  color: ${({ $isActive, theme }) =>
    $isActive ? theme.font.color.primary : theme.font.color.disabled};
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.color.active : theme.color.secondary};
`;
