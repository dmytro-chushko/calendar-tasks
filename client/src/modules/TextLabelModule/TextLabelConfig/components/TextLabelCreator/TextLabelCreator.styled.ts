import styled from 'styled-components';

import { FlexBox } from 'src/styles/ui/container.styled';
import { Input } from 'src/styles/ui/input.styled';

export const TextLabelInput = styled(Input)`
  width: auto;
  flex-grow: 1;

  background-color: ${({ theme }) => theme.color.primary};
`;

export const Container = styled(FlexBox)`
  gap: ${({ theme }) => theme.size.general.xxs};
`;
