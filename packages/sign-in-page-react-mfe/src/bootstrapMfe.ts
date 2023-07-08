import App from './app/app';
import { AuthenticationService } from "auth-service-react-lib";

import r2wc from "@r2wc/react-to-web-component"
const mount = (authService: AuthenticationService) => {
  if (customElements.get('sign-in-page-react-mfe-wc-el')) {
    return;
  }

  const signInPageReactMfe = r2wc(App, {props: authService});
  customElements.define('sign-in-page-react-mfe-wc-el', signInPageReactMfe);
}

export {mount};