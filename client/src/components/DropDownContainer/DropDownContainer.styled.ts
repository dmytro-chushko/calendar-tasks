import styled from 'styled-components';

interface IContainer {
  $isShown: boolean;
}

export const Container = styled.div<IContainer>`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  width: 10rem;
  height: 15rem;
  padding: ${({ theme }) => theme.size.general.xxs};

  background-color: ${({ theme }) => theme.color.primary};

  opacity: ${({ $isShown }) => ($isShown ? 1 : 0)};
  transform: translateY(-100%)
    ${({ $isShown }) => ($isShown ? 'scaleY(1)' : 'scaleY(0)')};
  transform-origin: center bottom;

  transition: ${({ theme }) => theme.common.transition};
`;
