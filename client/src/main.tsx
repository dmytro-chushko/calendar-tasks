import ReactDOM from 'react-dom/client';

import 'src/i18n/config';
import { AppThemeProvider } from 'src/providers/app-theme.provider.tsx';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppThemeProvider>
    <App />
  </AppThemeProvider>,
);
