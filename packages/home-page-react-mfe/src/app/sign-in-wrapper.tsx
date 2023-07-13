import * as React from 'react';
import { mount } from 'sign-in-page-react-mfe/Module';

export function SignInWrapper() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const mountMfeRef = React.useRef<any>(null);
  
  React.useEffect(() => {
    const parentNode = containerRef.current;
    if (parentNode && !mountMfeRef.current) {
      mountMfeRef.current = true; // Set the flag to indicate mount has been called
      mount(parentNode);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export default SignInWrapper;
