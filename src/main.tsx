import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@/app';
import '../styles/tailwind.base.css';
import { enableMocking } from './setupMSW';

const container = document.getElementById('root');
const root = createRoot(container as Element);

// eslint-disable-next-line @typescript-eslint/no-floating-promises
enableMocking().then(() =>
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  ),
);
