import styled from 'styled-components';

import { Input } from 'src/styles/ui/input.styled';
import { FlexBox } from 'src/styles/ui/container.styled';

export const TextLabelInput = styled(Input)`
  background-color: ${({ theme }) => theme.color.primary};
`;

export const TextLabelList = styled(FlexBox)`
  flex-direction: column;
  gap: ${({ theme }) => theme.size.general.xs};
`;
