import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createTheme } from '@material-ui/core';
import { getAuthService } from 'application-base-lib';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const theme = createTheme();

export function App() {
  const classes = useStyles();
  const navigate = useNavigate();

  const logoutBtnClickHandler = () => {
    const authService = getAuthService();;
    authService.logout();
    navigate('/login');
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            MFE POC
          </Typography>
          <Button color="inherit" onClick={logoutBtnClickHandler}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default App;
