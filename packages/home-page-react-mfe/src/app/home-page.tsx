import * as React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createTheme } from '@material-ui/core';
import Paper from '@mui/material/Paper';
import { Grid } from '@material-ui/core';
import { getAuthService } from 'application-base-lib';
import SideNavBarReactMfeWrapper from './page-components/side-nav-bar-react-mfe-wrapper';
import TopNavBarReactMfeWrapper from './page-components/top-nav-bar-react-mfe-wrapper';
import WelcomeSubPage from './sub-pages/welcome-sub-page';
import Feature1ReactSubPage from './sub-pages/feature-1-react-mfe-wrapper';

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
    const authService = getAuthService();
    authService.registerAuthenticationHandlerFn(authenticationEventHandler);
    authenticationEventHandler(authService.isAuthenticated);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.page}>
        <div className={classes.navBar}>
          <TopNavBarReactMfeWrapper />
        </div>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <SideNavBarReactMfeWrapper />
            </Grid>
            <Grid item xs={8}>
              <Paper variant="outlined" sx={{ width: '100%', height: '100%' }}>
                <Routes>
                  <Route path="/" element={<WelcomeSubPage />} />
                  <Route
                    path="/feature-1-react"
                    element={<Feature1ReactSubPage />}
                  />
                  {/* <Route path="/" element={<Feature3AngularSubPage />} /> */}
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
