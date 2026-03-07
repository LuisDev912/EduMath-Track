import { BrowserRouter } from 'react-router';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import './styles/variables.css';
import './styles/utilities.css';
import i18n from './locales/i18n.ts';
import App from './app/App.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);