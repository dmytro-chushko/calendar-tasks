import styled from 'styled-components';

import { StyledParagraph } from 'src/styles/ui/typography.styled';

export const HolidayLabel = styled(StyledParagraph)`
  border-radius: ${({ theme }) => theme.common.innerBorderRadius};
  background-color: ${({ theme }) => theme.color.holiday};
`;
