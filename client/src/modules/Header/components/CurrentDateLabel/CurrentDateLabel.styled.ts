import styled from 'styled-components';

import { StyledParagaph } from 'src/styles/ui/typography.styled';

export const DateLabel = styled(StyledParagaph)`
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;
