import { AuthenticationService } from 'auth-service-react-lib';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  authServiceName: string;
}


export function HomePage(props: Props) {
  const navigate = useNavigate();


  const authenticationEventHandler = (isAuthenticated: boolean) => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      console.log('User is authenticated');
    }
  }

  React.useEffect(() => {
    if (props.authServiceName) {
      const authService: AuthenticationService = (window as any)[props.authServiceName];
      authService.registerAuthenticationHandlerFn(authenticationEventHandler);
      authenticationEventHandler(authService.isAuthenticated);
    }
  }, []);


  return (
    <div>
        <h1>Home Page</h1>
    </div>
  );
}

export default HomePage;
