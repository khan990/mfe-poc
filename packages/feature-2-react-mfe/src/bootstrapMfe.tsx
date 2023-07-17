import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { BrowserRouter } from 'react-router-dom';

// feature-2-react-mfe
const mount = (parentNode: HTMLElement) => {
  const root = ReactDOM.createRoot(parentNode);
  root.render(
    <StrictMode>
      <BrowserRouter basename='/feature-2-and-4-combo'>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
};

export { mount };
