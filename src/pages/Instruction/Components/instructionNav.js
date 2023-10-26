import React, { Component } from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import LogoFrame from "../../../images/eclipse.png";

class instructionNav extends Component {
    render() {
        return (
            <div>
                 <AppBar position="fixed">
          <Toolbar style={{background:"white",justifyContent:"space-between",alignItems:"center",paddingTop:"10px",paddingBottom:"10px"}}>
            
            <Grid  style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"45px",marginLeft:"4%"}}>
            
            <img src={LogoFrame} style={{height:"80px"}}/>
            <Typography className='navdesc'>PYST 1: SSC  CGL - Reasoning(Held On : 11 April 2022 Shift 1)</Typography>
            </Grid>
           
            
          </Toolbar>
        </AppBar>
            </div>
        );
    }
}

export default instructionNav;