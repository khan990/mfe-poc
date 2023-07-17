import { useEffect, useRef } from 'react';
import { mount } from 'feature-4-angular-mfe/Module';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'app-root-feature-4-angular-mfe': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export function Feature4AngularWidget() {
    const mountMfeRef = useRef<any>(false);

    useEffect(() => {
      if (mountMfeRef.current === false) {
        mountMfeRef.current = true; // Set the flag to indicate mount has been called
        mount();
      }
    }, []);

  return <app-root-feature-4-angular-mfe></app-root-feature-4-angular-mfe>;
}

export default Feature4AngularWidget;
