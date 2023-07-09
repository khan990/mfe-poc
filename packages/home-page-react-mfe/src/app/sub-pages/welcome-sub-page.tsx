import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  welcome: {
    textAlign: 'center',
  },
}));

export function WelcomeSubPage() {
  const classes = useStyles();

  return (
    <Typography variant="h2" component="h2" className={classes.welcome} >
      Welcome!
    </Typography>
  );
}

export default WelcomeSubPage;
