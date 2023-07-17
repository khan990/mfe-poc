

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  welcome: {
    textAlign: 'center',
  },
}));

export function SubWidget2() {
  const classes = useStyles();

  return (
    <Typography variant="h5" component="h5" className={classes.welcome} >
      Sub Widget 2
    </Typography>
  );
}

export default SubWidget2;
