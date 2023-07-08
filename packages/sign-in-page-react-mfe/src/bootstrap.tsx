/* eslint-disable import/first */
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';
import { AuthenticationService } from "auth-service-react-lib";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
  );
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

import r2wc from "@r2wc/react-to-web-component"
const mount = (authService: AuthenticationService) => {
  const signInPageReactMfe = r2wc(App, {props: authService});
  customElements.define('sign-in-page-react-mfe', signInPageReactMfe);
}

export {mount};