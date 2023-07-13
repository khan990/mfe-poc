import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import {
  BrowserRouter,
} from 'react-router-dom';

// sign-in-page-react-mfe
const mount = (parentNode: HTMLElement) => {
  const root = ReactDOM.createRoot(parentNode);
  root.render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
};

export { mount };
