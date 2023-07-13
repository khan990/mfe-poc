import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';

// home-page-react-mfe
const mount = (parentNode: HTMLElement) => {
  const root = ReactDOM.createRoot(parentNode);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );

  console.log(parentNode);
};

export { mount };
