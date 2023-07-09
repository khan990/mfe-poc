import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, makeStyles } from '@material-ui/core';
import Button from '@mui/material/Button';
import * as React from 'react';

const useStyles = makeStyles((theme) => ({
  gridDisplay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridContainer: {
    height: '100%',
  }
}));

export function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const onClickOpenDialogBtnHandler = () => {
    setOpen(true);
  };

  const onClickCloseDialogBtnHandler = () => {
    setOpen(false);
  };
  
  return (
    <div className={classes.gridContainer}>
      <Grid container spacing={3}>
        <Grid item xs={6} className={classes.gridDisplay}>
        <Button variant="contained" onClick={onClickOpenDialogBtnHandler}>Open Modal</Button>
        </Grid>
        <Grid item xs={6} className={classes.gridDisplay}>
        <Button variant="contained">Open Drawer</Button>
        </Grid>
      </Grid>


      <Dialog
        open={open}
        onClose={onClickCloseDialogBtnHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClickCloseDialogBtnHandler}>Disagree</Button>
          <Button onClick={onClickCloseDialogBtnHandler} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
