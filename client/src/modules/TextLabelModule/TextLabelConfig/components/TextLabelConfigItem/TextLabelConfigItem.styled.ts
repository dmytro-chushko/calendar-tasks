import styled from 'styled-components';

import { Button } from 'src/styles/ui/button.styled';
import { FlexBox } from 'src/styles/ui/container.styled';
import { Input } from 'src/styles/ui/input.styled';
import { StyledParagaph } from 'src/styles/ui/typography.styled';

export const Container = styled.div`
  width: 100%;
`;

export const ButtonContainer = styled(FlexBox)`
  gap: ${({ theme }) => theme.size.general.xxs};
`;

export const TextLabelContent = styled(StyledParagaph)`
  flex-grow: 1;
`;

export const TextLabelEdit = styled(Input)`
  background-color: ${({ theme }) => theme.color.primary};
`;

export const TextLabelButton = styled(Button)`
  border-radius: ${({ theme }) => theme.common.innerBorderRadius};
`;

export const Wrapper = styled(FlexBox)`
  width: 100%;
  justify-content: space-between;
  gap: ${({ theme }) => theme.size.general.xs};
`;
