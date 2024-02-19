import { StyledParagaph } from 'src/styles/ui/typography.styled';
import styled from 'styled-components';

export const TaskContainer = styled.div`
  padding: ${({ theme }) => theme.size.general.xxs};

  background-color: ${({ theme }) => theme.color.task};
  border-radius: ${({ theme }) => theme.common.innerBorderRadius};
`;

export const TaskDescription = styled(StyledParagaph)`
  color: ${({ theme }) => theme.font.color.task};
`;
