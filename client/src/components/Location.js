import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import Modal from '@material-ui/core/Modal';

// modal position on screen
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

// default styles for modal elements
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 800,
    height: 350,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    margin: "left",
  }
}));

//=================================
// functional component starts here
//=================================
const Location = (props) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // ran out of time to map through this and dynamically render new locations
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <p className="austin-locations">Locations in Your Area</p>
      <Grid
        container spacing={4}
        className="location-change"
        direction="row"
        alignItems="center"
        onClick={props.locationClicker}
      >
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={4}>
          Cedar Park
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={4}>
          2 Miles Away
        </Grid>
      </Grid>
      <Grid
        container spacing={4}
        className="location-change"
        direction="row"
        alignItems="center"
        onClick={props.locationClicker}
      >
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={4}>
          North Austin
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={4}>
          5 Miles Away
        </Grid>
      </Grid>
      <Grid
        container spacing={4}
        className="location-change"
        direction="row"
        alignItems="center"
        onClick={props.locationClicker}
      >
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={4}>
          Round Rock
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={4}>
          6 Miles Away
        </Grid>
      </Grid>
      <Grid
        container spacing={4}
        className="location-change"
        direction="row"
        alignItems="center"
        onClick={props.locationClicker}
      >
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={4}>
          Pflugerville
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={4}>
          10 Miles Away
        </Grid>
      </Grid>
      <Grid
        container spacing={4}
        className="location-change"
        direction="row"
        alignItems="center"
        onClick={props.locationClicker}
      >
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={4}>
          Meuller Airport
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={4}>
          11 Miles Away
        </Grid>
      </Grid>
    </div>
  );

  return (
    <div id="location">
      <Button
        type="button"
        onClick={handleOpen}
        id="location-button"
        variant="contained"
        className={classes.button}
        size="small"
        startIcon={<EmojiTransportationIcon />}
      >
        Change Pickup Loaction
          </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"

      >
        {body}
      </Modal>
    </div>
  )
}

export default Location;