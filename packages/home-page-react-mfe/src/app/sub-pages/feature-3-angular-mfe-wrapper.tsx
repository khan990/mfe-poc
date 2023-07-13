import { mount } from 'feature-3-angular-mfe/Module';
import { useEffect, useRef } from 'react';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'app-root': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export function Feature3AngularSubPage() {
  const mountMfeRef = useRef<any>(false);

  useEffect(() => {
    if (mountMfeRef.current === false) {
      mountMfeRef.current = true; // Set the flag to indicate mount has been called
      mount();
    }
  }, []);

  return (
      <app-root></app-root>
  );
}

export default Feature3AngularSubPage;
