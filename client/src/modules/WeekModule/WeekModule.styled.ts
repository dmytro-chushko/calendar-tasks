import styled from 'styled-components';

import { Button } from 'src/styles/ui/button.styled';
import { StyledParagaph } from 'src/styles/ui/typography.styled';

export const AddButton = styled(Button)`
  position: absolute;
  top: ${({ theme }) => theme.size.general.xxs};
  right: ${({ theme }) => theme.size.general.xxs};

  pointer-events: none;
  border-radius: 50%;
  opacity: 0;
`;

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

export const LabelWrapper = styled.div`
  position: relative;

  @media (hover: hover) {
    &:hover ${AddButton} {
      opacity: 1;
      pointer-events: all;
    }
  }
`;
