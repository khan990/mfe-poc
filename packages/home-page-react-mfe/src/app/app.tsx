import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './home-page';
import SignInWrapper from './sign-in-wrapper';
import WelcomeSubPage from './sub-pages/welcome-sub-page';
import { setReactRouterContext } from 'application-base-lib';
import Feature1ReactSubPage from './sub-pages/feature-1-react-mfe-wrapper';
import Feature2ReactWidget from './widgets/feature-2-react-mfe-wrapper';
import Feature3AngularSubPage from './sub-pages/feature-3-angular-mfe-wrapper';

const Root = () => {
  return <Outlet />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path='/' element={<HomePage />}>
        <Route path='/' element={<WelcomeSubPage />} />
        <Route path='/feature-1-react' element={<Feature1ReactSubPage />} />
        <Route path='/feature-3-angular' element={<Feature3AngularSubPage />} />
        <Route path='/feature-2-and-4-combo' element={<Feature2ReactWidget />} />
      </Route>
      
      <Route path="/login" element={<SignInWrapper />} />
      <Route path="**" element={<h1>Page not found</h1>} />
    </Route>
  )
);

setReactRouterContext(router);

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
