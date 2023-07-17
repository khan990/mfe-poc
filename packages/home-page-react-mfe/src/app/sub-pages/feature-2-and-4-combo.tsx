import { makeStyles } from '@material-ui/core/styles';
import Feature2ReactWidget from '../widgets/feature-2-react-mfe-wrapper';
import Feature4AngularWidget from '../widgets/feature-4-angular-mfe-wrapper';

const useStyles = makeStyles((theme) => ({
  feature2: {
    width: '100%',
    height: '300px',
  },
  feature4: {
    width: '100%',
    height: '300px',
  },
}));

export function Feature2And4ComboWrapper() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.feature2}>
        <Feature2ReactWidget />
      </div>
      <hr />
      <div className={classes.feature4}>
        <Feature4AngularWidget />
      </div>
    </div>
  );
}

export default Feature2And4ComboWrapper;
