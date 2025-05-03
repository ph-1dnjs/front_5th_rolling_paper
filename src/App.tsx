import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/index.css';
import { QueryProvider } from '@/app/providers/QueryProvider';
import HomePage from '@/pages/HomePage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <HomePage />
    </QueryProvider>
  </StrictMode>,
);
