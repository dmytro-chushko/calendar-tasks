import styled from 'styled-components';

import { StyledParagaph } from 'src/styles/ui/typography.styled';

export const HolidayLabel = styled(StyledParagaph)`
  border-radius: ${({ theme }) => theme.common.innerBorderRadius};
  background-color: ${({ theme }) => theme.color.holiday};
`;
