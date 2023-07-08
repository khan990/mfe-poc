import * as React from 'react';
import { Button, TextField, Grid } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
}));

export function App() {
  const classes = useStyles();

  const loginBtnClickHandler = () => {
    const authService = (window as any).authService;
    authService.login();
    window.location.href = '/';
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item xs={6}>
          <div className={classes.grid}>
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
            <Button variant="contained" color="primary" onClick={loginBtnClickHandler}>
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
