import {AuthenticationService} from 'auth-service-react-lib';


export function setAuthService(authService: AuthenticationService) {
  (window as any).authService = authService;
}

export function getAuthService(): AuthenticationService {
  return (window as any).authService;
}