import styled from 'styled-components';

export const ColumnContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.size.general.xxs};

  padding: ${({ theme }) => theme.size.general.xxs};
`;
