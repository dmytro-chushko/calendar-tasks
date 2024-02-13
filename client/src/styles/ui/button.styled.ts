import styled, { css } from 'styled-components';

interface IButton {
  $width?: string;
  $height?: string;
}

export const Button = styled.button<IButton>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $width }) =>
    $width &&
    css`
      width: ${$width};
    `}
  ${({ $height }) =>
    $height &&
    css`
      height: ${$height};
    `}

	color: ${({ theme }) => theme.font.color.secondary};
  stroke: currentColor;
  border-radius: ${({ theme }) => theme.common.borderRadius};
  background-color: ${({ theme }) => theme.color.secondary};

  &:disabled {
    color: ${({ theme }) => theme.font.color.disabled};
    cursor: default;
  }

  @media (hover: hover) {
    &:hover:not([disabled]) {
      transform: scale(1.3);
      background-color: ${({ theme }) => theme.color.accent};
    }
  }

  &:active:not([disabled]) {
    transform: scale(1.1);
  }
`;
