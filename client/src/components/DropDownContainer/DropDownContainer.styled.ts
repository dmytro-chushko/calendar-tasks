import styled from 'styled-components';

interface IContainer {
  $isShown: boolean;
  $openingDirection: 'up' | 'down';
}

export const Container = styled.div<IContainer>`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  width: 8rem;
  height: 9rem;
  padding: ${({ theme }) => theme.size.general.xxs};

  background-color: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.common.innerBorderRadius};

  opacity: ${({ $isShown }) => ($isShown ? 1 : 0)};
  transform: translateY(-100%)
    ${({ $isShown }) => ($isShown ? 'scaleY(1)' : 'scaleY(0)')};
  transform-origin: center
    ${({ $openingDirection }) => {
      switch ($openingDirection) {
        case 'up':
          return 'bottom';
        case 'down':
          return 'top';
        default:
          return 'top';
      }
    }};

  transition: ${({ theme }) => theme.common.transition};
`;
