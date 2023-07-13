import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

// side-nav-bar-react-mfe
const mount = (parentNode: HTMLElement, navigate: (path: string) => void) => {
  const root = ReactDOM.createRoot(parentNode);
  root.render(
    <StrictMode>
      <BrowserRouter>
        <App navigate={navigate} />
      </BrowserRouter>
    </StrictMode>
  );
};

export { mount };
