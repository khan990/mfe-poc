import Paper from '@mui/material/Paper';
import {
  NavLink,
  useRoutes,
} from 'react-router-dom';
import SubWidget1 from './sub-widget-1';
import SubWidget2 from './sub-widget-2';
import { makeStyles } from '@material-ui/core';

function LocalRouter() {
  const mfeRoutes = useRoutes([
    {
      path: '/',
      children: [
        {
          index: true,
          element: <SubWidget1 />,
        },
        {
          path: '/sub-sub-page-1',
          element: <SubWidget1 />,
        },
        {
          path: '/sub-sub-page-2',
          element: <SubWidget2 />,
        },
      ],
    },
  ]);

  return mfeRoutes;
}

const useStyles = makeStyles((theme) => ({
  links: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '1rem',
  }
}));

export function App() {
  const classes = useStyles();
  return (
    <Paper variant="outlined" sx={{ width: '100%', height: '100%' }}>
      <div>
        <h1>Feature 2 React MFE</h1>
        <div>
          <div className={classes.links}>
            <NavLink to="/sub-sub-page-1">
              Sub Widget 1
            </NavLink>

            <NavLink to="/sub-sub-page-2">
              Sub Widget 2
            </NavLink>
          </div>
          <div>
            <LocalRouter />
          </div>
        </div>
      </div>
    </Paper>
  );
}

export default App;
