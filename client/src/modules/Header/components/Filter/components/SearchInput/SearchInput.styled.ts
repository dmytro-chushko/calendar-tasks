import styled from 'styled-components';

import { Input } from 'src/styles/ui/input.styled';

interface IStyledSearchInput {
  $isError?: boolean;
}

export const StyledSearchInput = styled(Input)<IStyledSearchInput>`
  height: 2rem;
  padding-left: ${({ theme }) => theme.size.general.xs};

  border-radius: ${({ theme }) => theme.common.borderRadius};
  background-color: ${({ theme }) => theme.color.task};
  box-shadow: ${({ $isError, theme }) =>
    $isError
      ? theme.common.errorSearchInputBorder
      : theme.common.searchInputBorder};
  &:focus {
    box-shadow: ${({ $isError, theme }) =>
      $isError
        ? theme.common.errorSearchInputBorder
        : theme.common.focusedSearchInputBorder};
  }
`;
