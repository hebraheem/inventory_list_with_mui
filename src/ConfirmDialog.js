import {
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import { NotListedLocation } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Controls from "./controls/Controls";

const useStyles = makeStyles((theme) => ({
  dialog: {
    position: "absolute",
    padding: theme.spacing(2),
    top: theme.spacing(5),
  },
  dialogContent: {
    textAlign: "center",
  },
  dialogAction: {
    justifyContent: "center",
  },
  titleIcon: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.main,
    "&: hover": {
      backgroundColor: theme.palette.secondary.light,
      color: "default",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "8rem",
    },
  },
}));

function ConfirmDialog({ confirmDialog, setConfirmDialog }) {
  const classes = useStyles();
  return (
    <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
      <IconButton disableRipple fontSize="large" className={classes.titleIcon}>
        <NotListedLocation />
      </IconButton>
      <DialogTitle></DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Typography variant="h6">{confirmDialog.title}</Typography>
        <Typography variant="subtitle2">{confirmDialog.subtitle}</Typography>
      </DialogContent>
      <DialogActions className={classes.dialogAction}>
        <Controls.Button
          text="NO"
          color="default"
          onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
        />
        <Controls.Button text="YES" color="secondary" onClick={confirmDialog.onConfirm} />
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDialog;
