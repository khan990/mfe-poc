import * as React from 'react';
import { AuthenticationService } from 'auth-service-react-lib';
import { setAuthService } from 'application-base-lib';

export function App() {
  const authService = new AuthenticationService();
  const ref = React.useRef<HTMLDivElement>(null);
  const isMountedRef = React.useRef(false); // Track if mount has already been called

  React.useEffect(() => {
    setAuthService(authService);
  }, []);

  React.useLayoutEffect(() => {
    const parentNode = ref.current;
    if (parentNode && !isMountedRef.current) {
      isMountedRef.current = true; // Set the flag to indicate mount has been called
      mount(parentNode);
    }
  }, []);

  return <div ref={ref}></div>;
}

export default App;

// Outside of the component, define the mount function
export const mount = (parentNode: HTMLElement) => {
  import('home-page-react-mfe/Module')
    .then((module) => {
      const { mount: mountHomePage } = module;
      mountHomePage(parentNode);
    })
    .catch((error) => {
      console.error('Error loading module:', error);
    });
};
