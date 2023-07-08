import { AuthenticationService } from 'auth-service-react-lib';
import * as React from 'react';
import {mount} from 'sign-in-page-react-mfe/Module';

interface SignInPageWrapperProps {
  authServiceName: string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'sign-in-page-react-mfe-wc-el': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export function SignInWrapper(props: SignInPageWrapperProps) {

  React.useEffect(() => {
    mount();
  }, []);


  return (
    <div>
        <sign-in-page-react-mfe-wc-el></sign-in-page-react-mfe-wc-el>
        
         <h1>Sign In</h1>
    </div>
  );
}

export default SignInWrapper;
