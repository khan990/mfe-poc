import * as React from 'react';
import {AuthenticationService} from 'auth-service-react-lib';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

export function App() {

  const authService = new AuthenticationService();

  return (
    <React.Suspense fallback={null}>
      
    </React.Suspense>
  );
}

export default App;
