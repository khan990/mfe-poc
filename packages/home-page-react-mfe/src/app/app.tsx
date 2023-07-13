import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './home-page';
import SignInWrapper from './sign-in-wrapper';
import WelcomeSubPage from './sub-pages/welcome-sub-page';
import Feature1ReactSubPage from './sub-pages/feature-1-react-mfe-wrapper';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: '',
        element: <WelcomeSubPage />,
      },
      {
        path: '/feature-1-react',
        element: <Feature1ReactSubPage />,
      },
      {
        path: '/login',
        element: <SignInWrapper />,
      },
    ],
  },
  {
    path: '**',
    element: <h1>Not Found</h1>,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
