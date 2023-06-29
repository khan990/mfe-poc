import * as React from 'react';

import { Link, Route, Routes } from 'react-router-dom';

const AngularMfe1 = React.lazy(() => import('angular-mfe-1/Module'));
const AngularMfe2 = React.lazy(() => import('angular-mfe-2/Module'));
const AngularMfe3 = React.lazy(() => import('angular-mfe-3/Module'));
const ReactMfe1 = React.lazy(() => import('react-mfe-1/Module'));
const ReactMfe2 = React.lazy(() => import('react-mfe-2/Module'));
const ReactMfe3 = React.lazy(() => import('react-mfe-3/Module'));
const LandingPage = React.lazy(() => import('landing-page/Module'));



// const AngularMfe1 = import('angular-mfe-1/Module');
// const AngularMfe2 = import('angular-mfe-2/Module');
// const AngularMfe3 = import('angular-mfe-3/Module');
// const ReactMfe1 = import('react-mfe-1/Module');
// const ReactMfe2 = import('react-mfe-2/Module');
// const ReactMfe3 = import('react-mfe-3/Module');
// const LandingPage = import('landing-page/Module');

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
        <li>
          <Link to="/angular-mfe-1">AngularMfe1</Link>
        </li>
        <li>
        <Link to="/angular-mfe-2">AngularMfe2</Link>
        </li>
        <li>
        <Link to="/angular-mfe-3">AngularMfe3</Link>
        </li>
      </ul>
      <hr />
      <br />
      <br />
      <ReactMfe1 />
      <ReactMfe2 />
      <ReactMfe3 />
      {/* <AngularMfe1 /> */}
      {/* <AngularMfe2 />
      <AngularMfe3 /> */}
      <LandingPage />

      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/react-mfe-3" element={<ReactMfe3 />} />
        <Route path="/react-mfe-2" element={<ReactMfe2 />} />
        <Route path="/react-mfe-1" element={<ReactMfe1 />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/angular-mfe-1" element={<AngularMfe1 />} />
        <Route path="/angular-mfe-2" element={<AngularMfe2 />} />
        <Route path="/angular-mfe-3" element={<AngularMfe3 />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
