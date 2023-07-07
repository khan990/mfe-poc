import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const TopNavBarReactMfe = React.lazy(
  () => import('top-nav-bar-react-mfe/Module')
);

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/top-nav-bar-react-mfe">TopNavBarReactMfe</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="home-page-react-mfe" />} />
        <Route path="/top-nav-bar-react-mfe" element={<TopNavBarReactMfe />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
