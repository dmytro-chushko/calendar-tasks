import styled from 'styled-components';

interface IColorLabel {
  $color: string;
}

export const ColorLabel = styled.span<IColorLabel>`
  display: block;
  width: 1.25rem;
  height: 1.25rem;

  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.color.accent};
  background-color: ${({ $color }) => $color};
`;
