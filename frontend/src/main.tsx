import { BrowserRouter } from 'react-router';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);