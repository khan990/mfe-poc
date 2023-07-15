import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { mount } from 'sign-in-page-react-mfe/Module';

export function SignInWrapper() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const mountMfeRef = React.useRef<any>(null);
  const navigate = useNavigate();

  const navigateFn = (path: string) => {
    console.log('navigateFn', path);
    navigate(path);
  };
  
  React.useEffect(() => {
    const parentNode = containerRef.current;
    if (parentNode && !mountMfeRef.current) {
      mountMfeRef.current = true; // Set the flag to indicate mount has been called
      mount(parentNode, navigateFn);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export default SignInWrapper;
