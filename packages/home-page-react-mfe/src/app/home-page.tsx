import * as React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createTheme } from '@material-ui/core';
import Paper from '@mui/material/Paper';
import { Grid } from '@material-ui/core';
import { mount as topNavBarReactMfeMount } from 'top-nav-bar-react-mfe/Module';
import { mount as sideNavBarReactMfeMount } from 'side-nav-bar-react-mfe/Module';
import Feature3AngularSubPage from './sub-pages/feature-3-angular-mfe-wrapper';
import { getAuthService } from 'application-base-lib';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'top-nav-bar-react-mfe-wc-el': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'side-nav-bar-react-mfe-wc-el': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  page: {
    width: '100vw',
    height: '100vh',
  },
  navBar: {
    width: '100%',
    height: '100px',
  },
  title: {
    flexGrow: 1,
  },
}));

export function HomePage() {
  const classes = useStyles();
  const navigate = useNavigate();

  const authenticationEventHandler = (isAuthenticated: boolean) => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      console.log('User is authenticated');
    }
  };

  React.useEffect(() => {
    topNavBarReactMfeMount();
    sideNavBarReactMfeMount();

    const authService = getAuthService();
    authService.registerAuthenticationHandlerFn(authenticationEventHandler);
    authenticationEventHandler(authService.isAuthenticated);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.page}>
        <div className={classes.navBar}>
          <top-nav-bar-react-mfe-wc-el></top-nav-bar-react-mfe-wc-el>
        </div>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <side-nav-bar-react-mfe-wc-el></side-nav-bar-react-mfe-wc-el>
            </Grid>
            <Grid item xs={8}>
              <Paper variant="outlined" sx={{ width: '100%', height: '100%' }}>
                <Routes>
                  {/* <Route path="/" element={<WelcomeSubPage />} /> */}
                  {/* <Route path="/" element={<Feature1ReactSubPage />} /> */}
                  <Route path="/" element={<Feature3AngularSubPage />} />
                </Routes>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default HomePage;
