import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';

// feature-2-react-mfe
const mount = (parentNode: HTMLElement) => {
  const root = ReactDOM.createRoot(parentNode);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

export { mount };
