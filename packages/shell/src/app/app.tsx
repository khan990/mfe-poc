import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const ReactMfe3 = React.lazy(() => import('react-mfe-3/Module'));

const ReactMfe2 = React.lazy(() => import('react-mfe-2/Module'));

const ReactMfe1 = React.lazy(() => import('react-mfe-1/Module'));

const LandingPage = React.lazy(() => import('landing-page/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/react-mfe-3">ReactMfe3</Link>
        </li>
        <li>
          <Link to="/react-mfe-2">ReactMfe2</Link>
        </li>
        <li>
          <Link to="/react-mfe-1">ReactMfe1</Link>
        </li>
        <li>
          <Link to="/landing-page">LandingPage</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />
        <Route path="/react-mfe-3" element={<ReactMfe3 />} />
        <Route path="/react-mfe-2" element={<ReactMfe2 />} />
        <Route path="/react-mfe-1" element={<ReactMfe1 />} />
        <Route path="/landing-page" element={<LandingPage />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
