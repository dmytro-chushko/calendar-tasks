import styled from 'styled-components';

export const Container = styled.main`
  padding-left: ${({ theme }) => theme.size.general.m};
  padding-right: ${({ theme }) => theme.size.general.m};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.size.general.xs};
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

export interface I$FHContainer {
  $setHeight?: string;
}

export const FullHeightContainer = styled.div<I$FHContainer>`
  height: ${({ $setHeight }) => ($setHeight ? $setHeight : '100svh')};
`;

export const StyledList = styled(FlexBox)`
  flex-direction: column;
  gap: ${({ theme }) => theme.size.general.xs};
`;
