import { createGlobalStyle, css } from 'styled-components';
import normalize from 'styled-normalize';

export const customScroll = (track: string, thumb: string) => css`
  &::-webkit-scrollbar {
    width: ${track};
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.color.secondary};
    border-radius: 0 10px 10px 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.primary};
    border-radius: 10px;
    border: ${thumb} solid ${({ theme }) => theme.color.secondary};
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      margin: 0;

      font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: ${({ theme }) => theme.font.size.regular};

      color: ${({ theme }) => theme.font.color.primary};
      background-color: ${({ theme }) => theme.color.primary};
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.font.color.primary};

      transition: ${({ theme }) => theme.common.transition};
    }

    button {
      color: ${({ theme }) => theme.font.color.primary};
      cursor: pointer;
      background: transparent;
      border: none;

      transition: ${({ theme }) => theme.common.transition};
    }

    ul,
    ol {
      list-style: none;
    }

    input,
    textarea {
      border: none;
      outline: none;
    }

    img {
      display: block;
      height: auto;
      max-width: 100%;
    }
  `}
`;
