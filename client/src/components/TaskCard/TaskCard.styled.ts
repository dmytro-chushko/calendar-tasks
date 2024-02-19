import { Button } from 'src/styles/ui/button.styled';
import { FlexBox } from 'src/styles/ui/container.styled';
import { StyledParagaph } from 'src/styles/ui/typography.styled';
import styled from 'styled-components';

export const ButtonContainer = styled(FlexBox)`
  position: absolute;
  top: ${({ theme }) => theme.size.general.xs};
  right: ${({ theme }) => theme.size.general.xs};

  gap: ${({ theme }) => theme.size.general.xxs};

  opacity: 0;
  pointer-events: none;

  transition: ${({ theme }) => theme.common.transition};
`;

export const TaskContainer = styled.div`
  position: relative;

  padding: ${({ theme }) => theme.size.general.xxs};

  background-color: ${({ theme }) => theme.color.task};
  border-radius: ${({ theme }) => theme.common.innerBorderRadius};

  @media (hover: hover) {
    &:hover ${ButtonContainer} {
      opacity: 1;
      pointer-events: all;
    }
  }
`;

export const TaskDescription = styled(StyledParagaph)`
  color: ${({ theme }) => theme.font.color.task};
`;

export const TaskButton = styled(Button)`
  border-radius: ${({ theme }) => theme.common.innerBorderRadius};
`;

export const DescriptionContainer = styled.div`
  position: relative;
`;
