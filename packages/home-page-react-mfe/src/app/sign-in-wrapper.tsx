import * as React from 'react';
import { mount } from 'sign-in-page-react-mfe/Module';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'sign-in-page-react-mfe-wc-el': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export function SignInWrapper() {
  React.useEffect(() => {
    mount();
  }, []);

  return <sign-in-page-react-mfe-wc-el></sign-in-page-react-mfe-wc-el>;
}

export default SignInWrapper;
