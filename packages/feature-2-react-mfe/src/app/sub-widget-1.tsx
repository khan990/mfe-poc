

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  welcome: {
    textAlign: 'center',
  },
}));

export function SubWidget1() {
  const classes = useStyles();

  return (
    <Typography variant="h4" component="h4" className={classes.welcome} >
      Sub Widget 1
    </Typography>
  );
}

export default SubWidget1;
