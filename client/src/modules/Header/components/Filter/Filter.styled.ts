import styled from 'styled-components';

import { Input } from 'src/styles/ui/input.styled';

interface ISearchInput {
  $isError?: boolean;
}

export const SearchInput = styled(Input)<ISearchInput>`
  background-color: ${({ theme }) => theme.color.task};
  box-shadow: ${({ $isError, theme }) =>
    $isError
      ? theme.common.errorSearchInputBorder
      : theme.common.searchInputBorder};
`;
