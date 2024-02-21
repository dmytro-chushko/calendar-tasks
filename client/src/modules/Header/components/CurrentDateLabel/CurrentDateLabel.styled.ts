import styled from 'styled-components';

import { StyledParagraph } from 'src/styles/ui/typography.styled';

export const DateLabel = styled(StyledParagraph)`
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;
