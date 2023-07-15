import { Button, TextField, Grid } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getAuthService } from 'application-base-lib';

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },

  topMargin: {
    marginTop: '3rem',
  },
}));

export function App({navigateFn}: {navigateFn?: (pathname: string) => void}) {
  const classes = useStyles();

  const loginBtnClickHandler = () => {
    const authService = getAuthService();
    authService.login();
    console.log('User is authenticated, now navigating...');
    navigateFn && navigateFn('/');
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item xs={6}>
          <div className={`${classes.grid} ${classes.topMargin}`}>
            <TextField
              id="outlined-basic"
              placeholder="Username"
              value="TEST_USERNAME"
              disabled
              label="username"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              placeholder="Username"
              value="TEST_PASSWORD"
              disabled
              label="password"
              variant="outlined"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={loginBtnClickHandler}
            >
              Login
            </Button>
          </div>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
