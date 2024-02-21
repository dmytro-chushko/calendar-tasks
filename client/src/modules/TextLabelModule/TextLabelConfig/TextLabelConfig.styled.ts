import styled from 'styled-components';

import { Input } from 'src/styles/ui/input.styled';

export const TextLabelInput = styled(Input)`
  background-color: ${({ theme }) => theme.color.primary};
`;
