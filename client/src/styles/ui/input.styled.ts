import styled from 'styled-components';
import { StylesConfig } from 'react-select';

import { common, color } from '../consts';

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

export const filterSelectStyles: StylesConfig = {
  control: (styles, { isFocused }) => {
    const boxShadow = isFocused
      ? common.focusedSearchInputBorder
      : common.searchInputBorder;
    const borderColor = isFocused ? color.active : color.secondary;

    return {
      ...styles,
      minHeight: '2rem',
      height: '2rem',
      flexWrap: 'nowrap',
      boxShadow,
      borderColor,
      [':hover']: {
        borderColor: color.active,
        boxShadow: common.focusedSearchInputBorder,
      },
    };
  },
  valueContainer: styles => ({ ...styles, flexWrap: 'nowrap' }),
  placeholder: styles => ({ ...styles, whiteSpace: 'nowrap' }),
};
