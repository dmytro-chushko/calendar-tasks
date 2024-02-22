import { Button } from 'src/styles/ui/button.styled';
import { FlexBox } from 'src/styles/ui/container.styled';
import { StyledParagraph } from 'src/styles/ui/typography.styled';
import styled from 'styled-components';

export const ButtomContainer = styled(FlexBox)`
  position: absolute;
  top: ${({ theme }) => theme.size.general.xxs};
  right: ${({ theme }) => theme.size.general.xxs};

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
    &:hover ${ButtomContainer} {
      opacity: 1;
      pointer-events: all;
    }
  }
`;

export const TaskDescription = styled(StyledParagraph)`
  color: ${({ theme }) => theme.font.color.task};
`;

export const TaskButton = styled(Button)`
  border-radius: ${({ theme }) => theme.common.innerBorderRadius};
`;

export const DescriptionContainer = styled.div`
  position: relative;
`;

export const LabelWrapper = styled(FlexBox)`
  gap: ${({ theme }) => theme.size.general.xxs};
`;

export const TextLabelContent = styled(StyledParagraph)`
  font-size: ${({ theme }) => theme.font.size.extraSmall};

  box-shadow: ${({ theme }) => theme.common.labelBorder};
  border-radius: ${({ theme }) => theme.common.borderRadius};
`;

interface IColorLabelContent {
  $color: string;
}

export const ColorLabelContent = styled.div<IColorLabelContent>`
  width: ${({ theme }) => theme.size.general.m};
  height: ${({ theme }) => theme.size.general.xxs};

  background-color: ${({ $color }) => $color};
  border-radius: ${({ theme }) => theme.common.innerBorderRadius};
`;
