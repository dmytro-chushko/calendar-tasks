import styled from 'styled-components';

export const Container = styled.main`
  padding-left: ${({ theme }) => theme.size.general.m};
  padding-right: ${({ theme }) => theme.size.general.m};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.size.general.xs};
`;
