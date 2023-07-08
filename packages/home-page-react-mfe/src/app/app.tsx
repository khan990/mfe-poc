import * as React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './home-page';
import SignInWrapper from './sign-in-wrapper';

type Props = {
  authServiceName: string;
};

export function App(props: Props) {
  return (
    <BrowserRouter>
      <React.Suspense fallback={null}>
        <Routes>
          <Route
            path="/"
            element={<HomePage authServiceName='authService' />}
          />
          <Route
            path="/login"
            element={<SignInWrapper authServiceName='authService' />}
          />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
