import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { mount } from 'side-nav-bar-react-mfe/Module';

const SideNavBarReactMfeWrapper = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mountMfeRef = useRef<any>(null);
  const _navigate = useNavigate();

  const navigate = (path: string) => {
    console.log('side-nav-bar-react-mfe-wrapper: navigate', path);
    _navigate(path);
  };

  useEffect(() => {
    const parentNode = containerRef.current;
    if (parentNode && !mountMfeRef.current) {
      mountMfeRef.current = true; // Set the flag to indicate mount has been called
      mount(parentNode, navigate);
    }
  }, []);

  return <div ref={containerRef}></div>;
};

export default SideNavBarReactMfeWrapper;
