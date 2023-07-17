import { useEffect, useRef } from 'react';
import { mount } from 'feature-2-react-mfe/Module';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  reactWidgetContainer: {
    width: '100%',
    height: '400px',
  },
}));

export function Feature2ReactWidget() {
  const classes = useStyles();
  const containerRef = useRef<HTMLDivElement>(null);
  const mountMfeRef = useRef<any>(null);

  useEffect(() => {
    const parentNode = containerRef.current;
    if (parentNode && !mountMfeRef.current) {
      mountMfeRef.current = true; // Set the flag to indicate mount has been called
      mount(parentNode);
    }
  }, []);

  return (
    <div className={classes.reactWidgetContainer} ref={containerRef}></div>
  );
}

export default Feature2ReactWidget;
