import styled from 'styled-components';

import checkIcon from 'src/assets/check-icon.svg';

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;
`;

export const CheckboxTrigger = styled.span`
  position: relative;

  display: block;
  width: 1.25rem;
  height: 1.25rem;

  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.color.accent};
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    display: block;
    width: 100%;
    height: 100%;

    border-radius: 0.125rem;
    background: ${({ theme }) => theme.color.accent} url(${checkIcon}) center
      no-repeat;
    opacity: 0;

    transition: ${({ theme }) => theme.common.transition};
  }
`;

export const CheckboxInput = styled.input`
  display: none;

  &:checked + ${CheckboxTrigger}::before {
    opacity: 1;
  }
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
