import { useEffect, useRef } from 'react';
import { mount } from 'feature-1-react-mfe/Module';

export function Feature1ReactSubPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mountMfeRef = useRef<any>(null);

  useEffect(() => {
    const parentNode = containerRef.current;
    if (parentNode && !mountMfeRef.current) {
      mountMfeRef.current = true; // Set the flag to indicate mount has been called
      mount(parentNode);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export default Feature1ReactSubPage;
