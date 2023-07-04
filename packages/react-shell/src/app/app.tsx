import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';
import NgMfeWrapper from './ng-mfe-wrapper';

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ng-standalone">Angular ng-mfe standalone component.</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="react-shell" />} />
        <Route path="/ng-standalone" element={<NgMfeWrapper />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
