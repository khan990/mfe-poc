import * as React from 'react';
import {AuthenticationService} from 'auth-service-react-lib';

import {mount} from 'home-page-react-mfe/Module';

interface HomePageProps {
  'auth-service-name': string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'home-page-react-mfe-wc-el': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & HomePageProps, HTMLElement>;
    }
  }
}

export function App() {
  const authService = new AuthenticationService();

  React.useEffect(() => {
    (window as any).authService = authService;
    mount();
  });

  return (
    <React.Suspense fallback={null}>
      <home-page-react-mfe-wc-el auth-service-name="authServiceName"></home-page-react-mfe-wc-el>
    </React.Suspense>
  );
}

export default App;

// https://github.com/ringcentral/web-apps#web-component-apps
