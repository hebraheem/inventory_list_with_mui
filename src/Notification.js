import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    top: theme.spacing(9),
  },
}));

function Notification({ notify, setNotify }) {
  const classes = useStyles();

  const handleClose=(event, reason)=>{
      setNotify({...notify, isOpen: false})
  }
  return (
    <Snackbar
      className={classes.root}
      open={notify.isOpen}
      autoHideDuration={1500}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={handleClose}
    >
      <Alert severity={notify.type} onClose={handleClose}>
        {notify.message}
      </Alert>
    </Snackbar>
  );
}

export default Notification;
