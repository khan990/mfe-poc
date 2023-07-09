import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Drawer, Grid, makeStyles } from '@material-ui/core';
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
  const [openState, setOpen] = React.useState({
    modalOpen: false,
    drawerOpen: false,
  });

  const onClickOpenDialogBtnHandler = () => {
    setOpen({
      modalOpen: true,
      drawerOpen: openState.drawerOpen,
    });
  };

  const onClickCloseDialogBtnHandler = () => {
    setOpen({
      modalOpen: false,
      drawerOpen: openState.drawerOpen,
    });
  };

  const drawerToggleHandler = () => {
    setOpen({
      modalOpen: openState.modalOpen,
      drawerOpen: !openState.drawerOpen,
    });
  };

  
  return (
    <div className={classes.gridContainer}>
      <Grid container spacing={3}>
        <Grid item xs={6} className={classes.gridDisplay}>
        <Button variant="contained" onClick={onClickOpenDialogBtnHandler}>Open Modal</Button>
        </Grid>
        <Grid item xs={6} className={classes.gridDisplay}>
        <Button variant="contained" onClick={drawerToggleHandler}>Open Drawer</Button>
        </Grid>
      </Grid>


      <Dialog
        open={openState?.modalOpen}
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





      <Drawer
            anchor="right"
            open={openState?.drawerOpen}
            onClose={drawerToggleHandler}
          >
            <h3>Hello World Drawer!</h3>
          </Drawer>
    </div>
  );
}

export default App;
