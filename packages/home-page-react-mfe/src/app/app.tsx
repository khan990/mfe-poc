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
import Feature1ReactSubPage from './sub-pages/feature-1-react-mfe-wrapper';
import { setReactRouterContext } from 'application-base-lib';

const Root = () => {
  return <Outlet />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path='/' element={<HomePage />}>
        <Route path='/' element={<WelcomeSubPage />} />
        <Route path='/feature-1-react' element={<Feature1ReactSubPage />} />
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
