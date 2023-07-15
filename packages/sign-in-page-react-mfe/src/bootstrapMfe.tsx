import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import {
  BrowserRouter,
} from 'react-router-dom';

// sign-in-page-react-mfe
const mount = (parentNode: HTMLElement, navigateFn: (pathname: string) => void) => {
  const root = ReactDOM.createRoot(parentNode);
  root.render(
    <StrictMode>
      <BrowserRouter>
        <App navigateFn={navigateFn} />
      </BrowserRouter>
    </StrictMode>
  );
};

export { mount };
