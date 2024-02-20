import styled from 'styled-components';

export const TextLabelContainer = styled.div`
  width: 20rem;
  height: 30rem;
  padding: ${({ theme }) => theme.size.general.s};

  background-color: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.common.borderRadius};
`;
