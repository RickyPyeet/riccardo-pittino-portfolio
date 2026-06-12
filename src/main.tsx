import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { NavigationProvider } from '@/context/NavigationContext';
import { ThemeProvider } from '@/context/ThemeContext';

import App from './App';
import './styles/globals.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider>
      <NavigationProvider>
        <App />
      </NavigationProvider>
    </ThemeProvider>
  </StrictMode>,
);
