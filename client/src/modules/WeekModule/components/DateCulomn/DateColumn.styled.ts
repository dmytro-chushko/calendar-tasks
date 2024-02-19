import styled from 'styled-components';

export const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.size.general.xs};

  padding: ${({ theme }) => theme.size.general.xxs};
`;

export const TaskItem = styled.li`
  width: 100%;
`;
