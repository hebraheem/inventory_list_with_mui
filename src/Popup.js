import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Controls from "./controls/Controls";
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },
}));

function Popup({ title, children, openPopup, setOpenPopup }) {
  const classes = useStyles();
  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle>
        <div style={{ display: "flex", alignItems: "center"}}>
          <Typography variant="h6" component="div" style={{ flexGrow: "1" }}>
            {title}
          </Typography>
          <Controls.ActionButton
            onClick={() => setOpenPopup(false)}
            color="secondary"
          ><CloseIcon/></Controls.ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}

export default Popup;

