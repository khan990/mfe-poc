import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';
import NgMfeStandaloneComponentWrapper from './ng-mfe-standalone-component-wrapper';
import NgMfeModuleWrapper from './ng-mfe-module-wrapper';

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
        <li>
          <Link to="/ng-module">Angular ng-mfe module.</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="react-shell" />} />
        <Route path="/ng-standalone" element={<NgMfeStandaloneComponentWrapper />} />
        <Route path="/ng-module" element={<NgMfeModuleWrapper />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
