import { AuthenticationService } from 'auth-service-react-lib';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createTheme } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import {mount as topNavBarReactMfeMount} from 'top-nav-bar-react-mfe/Module';
import {mount as sideNavBarReactMfeMount} from 'side-nav-bar-react-mfe/Module';


type Props = {
  authServiceName: string;
};

interface TopNavBarReactMfeProps {
  'auth-service-name': string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'top-nav-bar-react-mfe-wc-el': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & TopNavBarReactMfeProps, HTMLElement>;
      'side-nav-bar-react-mfe-wc-el': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
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

export function HomePage(props: Props) {
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

    if (props.authServiceName) {
      const authService: AuthenticationService = (window as any)[
        props.authServiceName
      ];
      authService.registerAuthenticationHandlerFn(authenticationEventHandler);
      authenticationEventHandler(authService.isAuthenticated);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.page}>
        <div className={classes.navBar}>
          <top-nav-bar-react-mfe-wc-el auth-service-name="authService"></top-nav-bar-react-mfe-wc-el>
        </div>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <side-nav-bar-react-mfe-wc-el></side-nav-bar-react-mfe-wc-el>
            </Grid>
            <Grid item xs={8}></Grid>
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default HomePage;
