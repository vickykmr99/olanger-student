import React, { Component } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
// import { JumpCircleLoading } from 'react-loadingg';
export default class Loader extends Component {
  render() {
    const { loader } = this.props;
    return (
      <Dialog
        open={loader.open}
        aria-labelledby="Loading..."
      >
        <DialogTitle id="simple-dialog-title">
          {/* <center> */}
          <CircularProgress  />
          {/* </center> */}
        </DialogTitle>
      </Dialog>
    );
  }
}