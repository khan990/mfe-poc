import * as React from 'react';
import {AuthenticationService} from 'auth-service-react-lib';
import {setAuthService} from 'application-base-lib';
import {mount} from 'home-page-react-mfe/Module';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'home-page-react-mfe-wc-el': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export function App() {
  const authService = new AuthenticationService();

  React.useEffect(() => {
    setAuthService(authService);
    mount();
  });

  return (
    <React.Suspense fallback={null}>
      <home-page-react-mfe-wc-el></home-page-react-mfe-wc-el>
    </React.Suspense>
  );
}

export default App;

// https://github.com/ringcentral/web-apps#web-component-apps
