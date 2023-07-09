import {mount} from 'feature-3-angular-mfe/Module';
import { useEffect } from 'react';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
      interface IntrinsicElements {
        'feature-3-angular-mfe-wc-el': React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement>,
          HTMLElement
        >;
      }
    }
  }


export function Feature3AngularSubPage() {
  
    useEffect(() => {
        mount();
    }, []);

  return (
    <div>
        <feature-3-angular-mfe-wc-el></feature-3-angular-mfe-wc-el>
    </div>
  );
}

export default Feature3AngularSubPage;
