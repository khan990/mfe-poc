import {mount} from 'feature-1-react-mfe/Module';
import { useEffect } from 'react';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
      interface IntrinsicElements {
        'feature-1-react-mfe-wc-el': React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement>,
          HTMLElement
        >;
      }
    }
  }


export function Feature4ReactSubPage() {
  
    useEffect(() => {
        mount();
    }, []);

  return (
    <div>
        <feature-1-react-mfe-wc-el></feature-1-react-mfe-wc-el>
    </div>
  );
}

export default Feature4ReactSubPage;
