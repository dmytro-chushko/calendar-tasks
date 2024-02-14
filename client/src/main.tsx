import ReactDOM from 'react-dom/client';

import 'src/i18n/config';
import { AppThemeProvider } from 'src/providers/app-theme.provider.tsx';
import App from './App.tsx';

import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import { GlobalStyle } from './styles/global.styled.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AppThemeProvider>
      <GlobalStyle />
      <App />
    </AppThemeProvider>
  </Provider>,
);
