import "./index.css";
import React from "react";
import ShowCounter from "./subComponent/ShowCounter";
import { useCountdown } from "./counter";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
// import Dialog from '@mui/material/Dialog';
import { Button, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import ComingSoon from "./comingsoon.jpg"
import RegistrationClosed from "./registration-closed.png"
var countDownDate = new Date("Jan 30, 2023 17:30:00").getTime();


function Counter({ visible }) {
  const targetDateinMilli = 1669807800000;
  const [days, hours, minutes, seconds] = useCountdown(countDownDate);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  if (!visible) {
    return (
      <div className="counter-container">
        <div className="counter-container-timmers">
          {/* <div className="counter-container-heading" >Conclave Starts In : </div> */}
          <div className="timmers-row">
            <p>{days}</p>
            <p>&nbsp;Days</p>
          </div>
          <div className="timmers-row">
            <p>{hours}</p>
            <p>&nbsp;Hours</p>
          </div>
          <div className="timmers-row">
            <p>{minutes}</p>
            <p>&nbsp;Mins</p>
          </div>
          <div className="timmers-row">
            <p>{seconds}</p>
            <p>&nbsp;secs</p>
          </div>
        {/* </div> */}
        </div>


        <Link
          to="/registration" 
          // onClick={handleClickOpen}
          style={{ textDecoration: 'none' }}>
          <div className="register-btn  register-btn-animate">Register Now</div>
        </Link>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}

        >

          <DialogContent style={{ backgroundColor: "red" }}>
            <img src={RegistrationClosed} style={{ width: "100%" }} />
            {/* <Typography style={{color:"white", fontSize:20}}>Registration is now Closed!</Typography> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}> Close </Button>

          </DialogActions>
        </Dialog>
      </div>

    );
  } else {
    return <>
      <HashLink
        to="/registration/#scroll-to-top" 
        // onClick={handleClickOpen}
        style={{ textDecoration: 'none' }}>
        <div className="register-btn  register-btn-animate register-btn-position " >Register Now</div>
      </HashLink>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}

      >

        <DialogContent style={{ backgroundColor: "red" }}>
          <img src={RegistrationClosed} style={{ width: "100%" }} />
          {/* <Typography style={{color:"white", fontSize:20}}>Registration is now Closed!</Typography> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}> Close </Button>

        </DialogActions>
      </Dialog>

    </>
  }


};

export default Counter;
