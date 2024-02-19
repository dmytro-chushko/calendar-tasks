import styled from 'styled-components';

interface IStyledInput {
  $isError?: boolean;
}

export const Input = styled.input<IStyledInput>`
  width: 100%;
  padding: ${({ theme }) => theme.size.general.xxs};

  box-shadow: ${({ $isError, theme }) =>
    $isError ? theme.common.errorInputBorder : theme.common.inputBorder};
`;

export const ErrorContainer = styled.p`
  padding: ${({ theme }) => theme.size.general.xxs};

  font-size: ${({ theme }) => theme.font.size.extraSmall};

  color: ${({ theme }) => theme.font.color.error};
`;
