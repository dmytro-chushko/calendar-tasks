import styled from 'styled-components';

import { FlexBox } from 'src/styles/ui/container.styled';

export const Container = styled(FlexBox)`
  gap: ${({ theme }) => theme.size.general.xs};
`;

interface IColorLabel {
  $color: string;
}

export const ColorLabel = styled.span<IColorLabel>`
  display: block;
  width: 4rem;
  height: 1.25rem;

  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.color.accent};
  background-color: ${({ $color }) => $color};
`;
