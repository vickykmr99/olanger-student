import React, { Component } from 'react';
import {Grid} from "@mui/material";
import Downloadapp from "../../../images/DownloadApp.png";

class downloadapp extends Component {
    render() {
        return (
           <Grid style={{marginTop:"12%",marginLeft:"3%"}}>

            <img src={Downloadapp} />
           </Grid>
        );
    }
}

export default downloadapp;