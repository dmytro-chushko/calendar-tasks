import { FC, useMemo } from 'react';

import { ThemeProvider } from 'styled-components';
import { theme } from 'src/styles/theme.styled';

interface IAppThemeProviderProps {
  children: React.ReactNode;
}

export const AppThemeProvider: FC<IAppThemeProviderProps> = ({ children }) => {
  const currentTheme = useMemo(() => theme(), []);

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};
